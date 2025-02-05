package io.clang_engineer.batch_explorer.job

import org.quartz.JobExecutionContext
import org.springframework.batch.core.Job
import org.springframework.batch.core.launch.JobLauncher
import org.springframework.stereotype.Component

@Component
class QuartzJob(
        private val jobLauncher: JobLauncher,
        private val batchJob: Job
) : org.quartz.Job {
    override fun execute(context: JobExecutionContext?) {
        val jobDataMap = context?.jobDetail?.jobDataMap as org.quartz.JobDataMap
        val batchParameters = transformQuartzJobDataMapToBatchJobParameters(jobDataMap)

        jobLauncher.run(batchJob, batchParameters)
    }
}