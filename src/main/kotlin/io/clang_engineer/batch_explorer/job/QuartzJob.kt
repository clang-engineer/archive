package io.clang_engineer.batch_explorer.job

import org.quartz.JobExecutionContext
import org.springframework.batch.core.Job
import org.springframework.batch.core.Step
import org.springframework.batch.core.job.builder.JobBuilder
import org.springframework.batch.core.launch.JobLauncher
import org.springframework.batch.core.repository.JobRepository
import org.springframework.stereotype.Component

@Component
class QuartzJob(
        private val jobLauncher: JobLauncher,
        private val jobRepository: JobRepository,
        private val batchStep: Step,
        private val batchJobListener: org.springframework.batch.core.JobExecutionListener
) : org.quartz.Job {
    override fun execute(context: JobExecutionContext?) {
        val jobDataMap = context?.jobDetail?.jobDataMap as org.quartz.JobDataMap
        val batchParameters = transformQuartzJobDataMapToBatchJobParameters(jobDataMap)

        val batchJob = createBatchJob(jobDataMap.getString("jobName"))

        jobLauncher.run(batchJob, batchParameters)
    }

    fun createBatchJob(jobName: String): Job {
        return JobBuilder(jobName, jobRepository).start(batchStep)
                .listener(batchJobListener).preventRestart().build()
    }
}