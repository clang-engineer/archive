package io.clang_engineer.batch_explorer.config

import org.springframework.batch.core.JobExecutionListener
import org.springframework.batch.core.Step
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing
import org.springframework.batch.core.repository.JobRepository
import org.springframework.batch.core.step.builder.StepBuilder
import org.springframework.batch.core.step.tasklet.Tasklet
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.messaging.simp.SimpMessageSendingOperations
import org.springframework.transaction.PlatformTransactionManager

@Configuration
class BatchConfiguration(
        private val transactionManager: PlatformTransactionManager,
        private val jobRepository: JobRepository,
        private val websocketMessageTemplate: SimpMessageSendingOperations
) {
    private val log = org.slf4j.LoggerFactory.getLogger(javaClass)

    @Bean
    fun batchStep(): Step {
        return StepBuilder("step", jobRepository)
                .tasklet(batchTasklet(), transactionManager).build()
    }

    @Bean
    fun batchTasklet(): Tasklet {
        return Tasklet { contribution, _ ->
            synchronized(this) {
                val jobParameters = contribution.stepExecution.jobParameters
                val query = jobParameters.getString("query") ?: ""

                val file = java.io.File("build/output.txt")

                if (!file.exists()) {
                    file.createNewFile()
                }

                Thread.sleep(10000)

                file.appendText("Job executed at ${java.time.LocalDateTime.now()}, with parameters: $jobParameters\n")
                file.appendText("Query: $query\n")
            }
            null
        }
    }

    @Bean
    fun batchJobListener(): JobExecutionListener {
        return object : JobExecutionListener {
            override fun beforeJob(jobExecution: org.springframework.batch.core.JobExecution) {
                log.debug("Before job execution: ${jobExecution.jobInstance.jobName}")

                val jobExecutionDTO = io.clang_engineer.batch_explorer.service.dto.JobExecutionDTO(
                        id = jobExecution.id,
                        jobName = jobExecution.jobInstance.jobName,
                        status = jobExecution.status.name,
                        startTime = jobExecution.startTime,
                        endTime = jobExecution.endTime,
                        exitCode = jobExecution.exitStatus.exitCode,
                        exitDescription = jobExecution.exitStatus.exitDescription,
                        lastUpdated = jobExecution.lastUpdated,
                        stepExecutions = null
                )
                websocketMessageTemplate.convertAndSend("/topic/batch-status", jobExecutionDTO)
            }

            override fun afterJob(jobExecution: org.springframework.batch.core.JobExecution) {
                log.debug("After job execution: ${jobExecution.jobInstance.jobName}")

                val jobExecutionDTO = io.clang_engineer.batch_explorer.service.dto.JobExecutionDTO(
                        id = jobExecution.id,
                        jobName = jobExecution.jobInstance.jobName,
                        status = jobExecution.status.name,
                        startTime = jobExecution.startTime,
                        endTime = jobExecution.endTime,
                        exitCode = jobExecution.exitStatus.exitCode,
                        exitDescription = jobExecution.exitStatus.exitDescription,
                        lastUpdated = jobExecution.lastUpdated,
                        stepExecutions = null
                )

                websocketMessageTemplate.convertAndSend("/topic/batch-status", jobExecutionDTO)
            }
        }
    }
}