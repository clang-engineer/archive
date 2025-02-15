package io.clang_engineer.batch_explorer.domain

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class DatasourceTest {
    @Test
    fun equalsVerifier() {
        val datasource1 = Datasource()
        datasource1.id = 1L
        val datasource2 = Datasource()
        datasource2.id = datasource1.id
        assertThat(datasource1).isEqualTo(datasource2)
        datasource2.id = 2L
        assertThat(datasource1).isNotEqualTo(datasource2)
        datasource1.id = null
        assertThat(datasource1).isNotEqualTo(datasource2)
    }
}