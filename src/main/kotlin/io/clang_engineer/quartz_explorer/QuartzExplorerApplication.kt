package io.clang_engineer.quartz_explorer

import io.clang_engineer.quartz_explorer.service.SchedulerService
import io.clang_engineer.quartz_explorer.service.job.SampleJob
import org.quartz.Scheduler
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
      "job" -> jobController(scheduler)
      "trigger" -> triggerController(scheduler)
      "scheduler" -> schedulerController(scheduler)
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

fun jobController(scheduler: Scheduler) {
    println("Enter action (pause, resume, delete, trigger, reschedule):")
    val action = readLine()

    when (action) {
        "pause" -> scheduler.pauseJob(readJobKey())
        "resume" -> scheduler.resumeJob(readJobKey())
        "delete" -> scheduler.deleteJob(readJobKey())
        "trigger" -> {
        val trigger = org.quartz.TriggerBuilder.newTrigger()
            .forJob(readJobKey())
            .withIdentity(readJobKey().name + "Trigger")
            .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule("0/5 * * * * ?"))
            .build()
        scheduler.scheduleJob(trigger)
        }
        "reschedule" -> {
        println("Enter cron expression:")
        val cronExpression = readLine()
        val trigger = org.quartz.TriggerBuilder.newTrigger()
            .forJob(readJobKey())
            .withIdentity(readJobKey().name + "Trigger")
            .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule(cronExpression))
            .build()
        scheduler.rescheduleJob(org.quartz.TriggerKey(readJobKey().name + "Trigger"), trigger)
        }
    }
}

fun triggerController(scheduler: Scheduler) {
    println("Enter action (pause, resume, delete, reschedule):")
    val action = readLine()

    when (action) {
        "pause" -> scheduler.pauseTrigger(readTriggerKey())
        "resume" -> scheduler.resumeTrigger(readTriggerKey())
        "delete" -> scheduler.unscheduleJob(readTriggerKey())
        "reschedule" -> {
        println("Enter cron expression:")
        val cronExpression = readLine()
        val trigger = org.quartz.TriggerBuilder.newTrigger()
            .withIdentity(readTriggerKey())
            .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule(cronExpression))
            .build()
        scheduler.rescheduleJob(readTriggerKey(), trigger)
        }
    }
}

fun schedulerController(scheduler: Scheduler) {
    println("Enter action (start, stop, standby, pause, resume):")
    val action = readLine()

    when (action) {
        "start" -> scheduler.start()
        "stop" -> scheduler.shutdown()
        "standby" -> scheduler.standby()
        "pause" -> scheduler.pauseAll()
        "resume" -> scheduler.resumeAll()
    }
}

fun readJobKey(): org.quartz.JobKey {
  println("Enter job group:")
  val jobGroup = readLine()
  println("Enter job name:")
  val jobName = readLine()
  return org.quartz.JobKey(jobName, jobGroup)
}

fun readTriggerKey(): org.quartz.TriggerKey {
  println("Enter trigger group:")
  val triggerGroup = readLine()
  println("Enter trigger name:")
  val triggerName = readLine()
  return org.quartz.TriggerKey(triggerName, triggerGroup)
}


