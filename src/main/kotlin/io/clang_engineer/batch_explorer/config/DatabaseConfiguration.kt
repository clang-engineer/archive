package io.clang_engineer.batch_explorer.config

import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@Configuration
@EnableJpaRepositories("io.clang_engineer.batch_explorer.repository")
class DatabaseConfiguration