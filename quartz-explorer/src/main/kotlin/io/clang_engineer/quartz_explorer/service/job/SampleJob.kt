package io.clang_engineer.quartz_explorer.service.job

class SampleJob : org.quartz.Job {
    override fun execute(context: org.quartz.JobExecutionContext) {
        val file = java.io.File("build/output.txt")
        val jobDetail = context.jobDetail

        if (!file.exists()) {
            file.createNewFile()
        }

        file.appendText("Trigger: ${context.trigger.key} / Job: ${jobDetail.key} executed at ${java.time.LocalDateTime.now()}\n")
    }
}