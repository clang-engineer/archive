package io.clang_engineer.batch_explorer.service.dto

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class DatasourceDTOTest {
    @Test
    fun dtoEqualsVerifier() {
//        equalsVerifier(DatabaseDTO::class)
        val datasourceDTO1 = DatasourceDTO()
        datasourceDTO1.id = 1L
        val datasourceDTO2 = DatasourceDTO()
        assertThat(datasourceDTO1).isNotEqualTo(datasourceDTO2)
        datasourceDTO2.id = datasourceDTO1.id
        assertThat(datasourceDTO1).isEqualTo(datasourceDTO2)
        datasourceDTO2.id = 2L
        assertThat(datasourceDTO1).isNotEqualTo(datasourceDTO2)
        datasourceDTO1.id = null
        assertThat(datasourceDTO1).isNotEqualTo(datasourceDTO2)
    }

}