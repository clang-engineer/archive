package io.clang_engineer.batch_explorer.web.rest

import io.clang_engineer.batch_explorer.service.QuartzSchedulerService
import io.clang_engineer.batch_explorer.service.dto.ScheduleDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/quartz")
class QuartzResource(
        private val quartzSchedulerService: QuartzSchedulerService
) {
    private val log = org.slf4j.LoggerFactory.getLogger(javaClass)

    @PostMapping("/schedule")
    fun scheduleBatchJobExecution(@RequestBody scheduleDTO: ScheduleDTO): ResponseEntity<Void> {
        log.info("Scheduling batch job execution")

        quartzSchedulerService.scheduleBatchJobExecution(scheduleDTO)

        return ResponseEntity.ok().build()
    }

    @PostMapping("/pause")
    fun pauseAllJobs(): ResponseEntity<Void> {
        log.info("Pausing all quartz jobs")

        quartzSchedulerService.pauseAllJobs()
        return ResponseEntity.ok().build()
    }

    @PostMapping("/resume")
    fun resumeAllJobs(): ResponseEntity<Void> {
        log.info("Resuming all quartz jobs")

        quartzSchedulerService.resumeAllJobs()
        return ResponseEntity.ok().build()
    }

}