package io.clang_engineer.batch_explorer.service.mapper

import org.junit.jupiter.api.BeforeEach

class DatasourceMapperTest {
  private lateinit var datasourceMapper: DatasourceMapper

  @BeforeEach
  fun setUp() {
    datasourceMapper = DatasourceMapperImpl()
  }
}