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
    println("Type 'exit' to stop the application")
    val input = readLine()

    if (input.isNullOrBlank()) {
      println("Invalid input. Please try again.")
      continue
    }

    if (input == "exit") {
      exitProcess(0)
    }

    if (input == "start") {
      schedulerService.scheduleJob(SampleJob::class.java, "0/5 * * * * ?")
    }

    if (input == "stop") {
      scheduler.shutdown()
    }

    if (input == "pause") {
      scheduler.pauseAll()
    }

    if (input == "resume") {
      scheduler.resumeAll()
    }

    if (input == "list") {
      val jobKeys = scheduler.getJobKeys(org.quartz.impl.matchers.GroupMatcher.anyJobGroup())
      jobKeys.forEach { jobKey ->
        val jobDetail = scheduler.getJobDetail(jobKey)
        println("Job: ${jobDetail.key}")
      }
    }
  }
}

class SampleJob : org.quartz.Job {
  override fun execute(context: org.quartz.JobExecutionContext) {
    println("Hello Quartz!")
  }
}

