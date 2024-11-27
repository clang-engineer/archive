package io.clang_engineer.quartz_explorer.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.UUID
import java.util.concurrent.atomic.AtomicInteger

@Service
class SchedulerService {

  @Autowired
  private lateinit var scheduler: org.quartz.Scheduler

  private val jobCounter = AtomicInteger(0)

  private val triggerCounter = AtomicInteger(0)

  fun scheduleJob(jobClass: Class<out org.quartz.Job>, cronExpression: String) {
    val jobDetail = buildJobDetail(jobClass)
    val trigger = buildTrigger(jobDetail, cronExpression)
    scheduler.scheduleJob(jobDetail, trigger)
  }

  private fun buildJobDetail(jobClass: Class<out org.quartz.Job>): org.quartz.JobDetail {
    return org.quartz.JobBuilder.newJob(jobClass)
      .withIdentity("job-${jobCounter.incrementAndGet()}", "jobs")
      .storeDurably()
      .build()
  }

  private fun buildTrigger(
    jobDetail: org.quartz.JobDetail,
    cronExpression: String
  ): org.quartz.Trigger {
    return org.quartz.TriggerBuilder.newTrigger()
      .forJob(jobDetail)
      .withIdentity("trigger-${triggerCounter.incrementAndGet()}", "triggers")
      .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule(cronExpression))
      .build()
  }
}