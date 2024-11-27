package io.clang_engineer.quartz_explorer

import io.clang_engineer.quartz_explorer.service.SchedulerService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.ApplicationContext
import kotlin.system.exitProcess

@SpringBootApplication
class QuartzExplorerApplication

fun main(args: Array<String>) {
  val context: ApplicationContext = runApplication<QuartzExplorerApplication>(*args)
  val schedulerService = context.getBean(SchedulerService::class.java)
  val scheduler = context.getBean(org.quartz.Scheduler::class.java)

  while (true) {
    println("Type 'start' to schedule a job, 'scheduler' to control the scheduler, 'trigger' to control a trigger, 'job' to control a job, 'list' to list all jobs, or 'exit' to exit.")
    val type = readLine()

    if (type.isNullOrBlank()) {
      println("Invalid input. Please try again.")
      continue
    }

    when (type) {
      "exit" -> exitProcess(0)
      "start" -> schedulerService.scheduleJob(SampleJob::class.java, "0/5 * * * * ?")
      "scheduler" -> controlScheduler(scheduler)
      "trigger" -> controlTrigger(scheduler)
      "job" -> controlJob(scheduler)
      "list" -> {
        val jobKeys = scheduler.getJobKeys(org.quartz.impl.matchers.GroupMatcher.anyJobGroup())
        jobKeys.forEach { jobKey ->
          val jobDetail = scheduler.getJobDetail(jobKey)
          println("Job: ${jobDetail.key}")
        }
      }
    }
  }
}

fun controlScheduler(scheduler: org.quartz.Scheduler) {
  println("Enter action (start, stop, standby):")
  val action = readLine()

  when (action) {
    "start" -> scheduler.start()
    "stop" -> scheduler.shutdown()
    "standby" -> scheduler.standby()
    "pause" -> scheduler.pauseAll()
    "resume" -> scheduler.resumeAll()
  }
}

fun controlTrigger(scheduler: org.quartz.Scheduler) {
  println("Enter trigger key:")
  val triggerKey = org.quartz.TriggerKey(readLine())
  println("Enter action (pause, resume, delete):")
  val action = readLine()

  when (action) {
    "pause" -> scheduler.pauseTrigger(triggerKey)
    "resume" -> scheduler.resumeTrigger(triggerKey)
    "delete" -> scheduler.unscheduleJob(triggerKey)
    "reschedule" -> {
      println("Enter cron expression:")
      val cronExpression = readLine()
      val trigger = org.quartz.TriggerBuilder.newTrigger()
        .withIdentity(triggerKey)
        .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule(cronExpression))
        .build()
      scheduler.rescheduleJob(triggerKey, trigger)
    }
  }
}

fun controlJob(scheduler: org.quartz.Scheduler) {
  println("Enter job key:")
  val jobKey = org.quartz.JobKey(readLine())
  println("Enter action (pause, resume, delete):")
  val action = readLine()

  when (action) {
    "pause" -> scheduler.pauseJob(jobKey)
    "resume" -> scheduler.resumeJob(jobKey)
    "delete" -> scheduler.deleteJob(jobKey)
    "trigger" -> {
      val trigger = org.quartz.TriggerBuilder.newTrigger()
        .forJob(jobKey)
        .withIdentity(jobKey.name + "Trigger")
        .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule("0/5 * * * * ?"))
        .build()
      scheduler.scheduleJob(trigger)
    }

    "reschedule" -> {
      println("Enter cron expression:")
      val cronExpression = readLine()
      val trigger = org.quartz.TriggerBuilder.newTrigger()
        .forJob(jobKey)
        .withIdentity(jobKey.name + "Trigger")
        .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule(cronExpression))
        .build()
      scheduler.rescheduleJob(org.quartz.TriggerKey(jobKey.name + "Trigger"), trigger)
    }
  }
}

class SampleJob : org.quartz.Job {
  override fun execute(context: org.quartz.JobExecutionContext) {
    println("Hello Quartz!")
  }
}

