package io.clang_engineer.batch_explorer.service.dto

data class ScheduleDTO(
        val jobName: String,
        val query: String,
        val cronExpression: String,
)