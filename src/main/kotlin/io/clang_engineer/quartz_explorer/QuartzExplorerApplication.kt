package io.clang_engineer.quartz_explorer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class QuartzExplorerApplication

fun main(args: Array<String>) {
	runApplication<QuartzExplorerApplication>(*args)
}
