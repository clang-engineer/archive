package io.clang_engineer.batch_explorer.repository

import io.clang_engineer.batch_explorer.domain.Datasource
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DatasourceRepository : JpaRepository<Datasource, Long>;