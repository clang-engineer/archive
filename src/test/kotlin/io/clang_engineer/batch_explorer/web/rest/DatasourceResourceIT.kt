package io.clang_engineer.batch_explorer.web.rest

import io.clang_engineer.batch_explorer.BatchExplorerApplication
import io.clang_engineer.batch_explorer.domain.Datasource
import io.clang_engineer.batch_explorer.repository.DatasourceRepository
import io.clang_engineer.batch_explorer.service.mapper.DatasourceMapper
import jakarta.persistence.EntityManager
import org.assertj.core.api.Assertions.assertThat
import org.hamcrest.Matchers.hasItem
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.transaction.annotation.Transactional

@SpringBootTest(classes = [BatchExplorerApplication::class])
@AutoConfigureMockMvc
class DatasourceResourceIT {

  @Autowired
  private lateinit var mockMvc: MockMvc

  @Autowired
  private lateinit var em: EntityManager

  @Autowired
  private lateinit var datasourceMapper: DatasourceMapper

  @Autowired
  private lateinit var datasourceRepository: DatasourceRepository


  private lateinit var datasource: Datasource

  @BeforeEach
  fun initTest() {
    datasource = createEntity(em)
  }


  @Test
  @Transactional
  fun `test create datasource entity`() {
    val databaseSizeBeforeCreate = datasourceRepository.findAll().size

    val datasourceDTO = datasourceMapper.toDto(datasource)

    mockMvc.perform(
      post("/api/datasources")
        .contentType(APPLICATION_JSON)
        .content(convertObjectToJsonBytes(datasourceDTO))
    )
      .andExpect(status().isCreated)

    val datasourceList = datasourceRepository.findAll()
    assertThat(datasourceList).hasSize(databaseSizeBeforeCreate + 1)

    val testDatasource = datasourceList[datasourceList.size - 1]
    assertThat(testDatasource.title).isEqualTo(DEFAULT_TITLE)
    assertThat(testDatasource.description).isEqualTo(DEFAULT_DESCRIPTION)
    assertThat(testDatasource.activated).isEqualTo(DEFAULT_ACTIVATED)
  }

  @Test
  @Transactional
  fun `test get all datasource entities`() {
    datasourceRepository.saveAndFlush(datasource)

    mockMvc.perform(get("/api/datasources"))
      .andExpect(status().isOk)
      .andExpect(jsonPath("$.[*].id").value(hasItem(datasource.id!!.toInt())))
      .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE)))
      .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
  }

  @Test
  @Transactional
  fun `test get single datasource entity`() {
    datasourceRepository.saveAndFlush(datasource)

    mockMvc.perform(get("/api/datasources/{id}", datasource.id))
      .andExpect(status().isOk)
      .andExpect(jsonPath("$.id").value(datasource.id!!.toInt()))
      .andExpect(jsonPath("$.title").value(DEFAULT_TITLE))
      .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
  }

  @Test
  @Transactional
  fun `test update datasource entity`() {
    datasourceRepository.saveAndFlush(datasource)
    val databaseSizeBeforeUpdate = datasourceRepository.findAll().size

    val updatedDatasource = datasourceRepository.findById(datasource.id!!).get()
    em.detach(updatedDatasource)
    updatedDatasource.title = UPDATED_TITLE
    updatedDatasource.description = UPDATED_DESCRIPTION
    updatedDatasource.activated = UPDATED_ACTIVATED

    val datasourceDTO = datasourceMapper.toDto(updatedDatasource)

    mockMvc.perform(
      put("/api/datasources")
        .contentType(APPLICATION_JSON)
        .content(convertObjectToJsonBytes(datasourceDTO))
    ).andExpect(status().isOk)

    val datasourceList = datasourceRepository.findAll()
    assertThat(datasourceList).hasSize(databaseSizeBeforeUpdate)

    val testDatasource = datasourceList[datasourceList.size - 1]
    assertThat(testDatasource.title).isEqualTo(UPDATED_TITLE)
    assertThat(testDatasource.description).isEqualTo(UPDATED_DESCRIPTION)
    assertThat(testDatasource.activated).isEqualTo(UPDATED_ACTIVATED)
  }

  @Test
  @Transactional
  fun `test delete datasource entity`() {
    datasourceRepository.saveAndFlush(datasource)
    val databaseSizeBeforeDelete = datasourceRepository.findAll().size

    mockMvc.perform(
      delete("/api/datasources/{id}", datasource.id)
        .accept(APPLICATION_JSON)
    ).andExpect(status().isNoContent)

    val datasourceList = datasourceRepository.findAll()
    assertThat(datasourceList).hasSize(databaseSizeBeforeDelete - 1)
  }


  companion object {
    private const val DEFAULT_TITLE = "AAAAAAAAAA"
    private const val UPDATED_TITLE = "BBBBBBBBBB"

    private const val DEFAULT_DESCRIPTION = "AAAAAAAAAA"
    private const val UPDATED_DESCRIPTION = "BBBBBBBBBB"

    private const val DEFAULT_ACTIVATED = false
    private const val UPDATED_ACTIVATED = true


    @JvmStatic
    fun createEntity(em: EntityManager): Datasource {
      val datasource = Datasource(
        title = DEFAULT_TITLE,
        description = DEFAULT_DESCRIPTION,
        activated = DEFAULT_ACTIVATED
      )
      return datasource
    }

    @JvmStatic
    fun createUpdatedEntity(em: EntityManager): Datasource {
      val datasource = Datasource(
        title = UPDATED_TITLE,
        description = UPDATED_DESCRIPTION,
        activated = UPDATED_ACTIVATED
      )
      return datasource
    }
  }
}