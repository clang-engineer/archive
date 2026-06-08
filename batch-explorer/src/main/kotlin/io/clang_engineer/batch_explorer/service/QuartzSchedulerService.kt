package io.clang_engineer.batch_explorer.service

import io.clang_engineer.batch_explorer.job.QuartzJob
import io.clang_engineer.batch_explorer.service.dto.ScheduleDTO
import org.quartz.JobDataMap
import org.quartz.Scheduler
import org.springframework.stereotype.Component
import java.util.*

@Component
class QuartzSchedulerService(private val scheduler: Scheduler) {
    fun scheduleBatchJobExecution(scheduleDTO: ScheduleDTO) {
        val jobData = JobDataMap(mapOf(
                "jobName" to scheduleDTO.jobName,
                "query" to scheduleDTO.query,
        ))

        val jobDetail = org.quartz.JobBuilder.newJob(QuartzJob::class.java)
                .withIdentity("${UUID.randomUUID()}", "jobs")
                .usingJobData(jobData)
                .storeDurably()
                .build()

        val trigger = org.quartz.TriggerBuilder.newTrigger()
                .forJob(jobDetail)
                .withIdentity("${UUID.randomUUID()}", "triggers")
                .withSchedule(org.quartz.CronScheduleBuilder.cronSchedule(scheduleDTO.cronExpression))
                .build()

        scheduler.scheduleJob(jobDetail, trigger)
    }

    fun pauseAllJobs() {
        scheduler.pauseAll()
    }

    fun resumeAllJobs() {
        scheduler.resumeAll()
    }
}