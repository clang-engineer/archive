package io.clang_engineer.batch_explorer.web.rest

import io.clang_engineer.batch_explorer.service.DatasourceService
import io.clang_engineer.batch_explorer.service.dto.DatasourceDTO
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.net.URI

@RestController
@RequestMapping("/api")
class DatasourceResource(
  private val datasourceService: DatasourceService
) {
  private val log = LoggerFactory.getLogger(javaClass)

  @PostMapping("/datasources")
  fun createDatasource(@RequestBody datasourceDTO: DatasourceDTO): ResponseEntity<DatasourceDTO> {
    log.debug("REST request to save Datasource")

    if (datasourceDTO.id != null) {
      throw RuntimeException("A new datasource cannot already have an ID")
    }


    val result = datasourceService.save(datasourceDTO)
    return ResponseEntity.created(URI("/api/datasources/${result.id}"))
      .body(result)
  }
}