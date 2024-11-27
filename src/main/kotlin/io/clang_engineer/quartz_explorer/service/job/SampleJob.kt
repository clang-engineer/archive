package io.clang_engineer.quartz_explorer.service.job

class SampleJob : org.quartz.Job {
    override fun execute(context: org.quartz.JobExecutionContext) {
        println("Hello Quartz!")
    }
}