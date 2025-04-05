package io.clang_engineer.batch_explorer.web.rest

import io.clang_engineer.batch_explorer.service.DatasourceService
import io.clang_engineer.batch_explorer.service.dto.DatasourceDTO
import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
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

  @GetMapping("/datasources")
  fun getAllDatasources(): ResponseEntity<List<DatasourceDTO>> {
    log.debug("REST request to get all Datasources")
    val list = datasourceService.findAll()
    return ResponseEntity.ok().body(list)
  }

  @GetMapping("/datasources/{id}")
  fun getDatasource(@PathVariable id: Long): ResponseEntity<DatasourceDTO> {
    log.debug("REST request to get Datasource : $id")
    val datasourceDTO = datasourceService.findOne(id).orElseThrow { RuntimeException("Invalid id") }
    return ResponseEntity.ok().body(datasourceDTO)
  }

  @PutMapping("/datasources/{id}")
  fun updateDatasource(
    @PathVariable(value = "id", required = false) id: Long,
    @RequestBody datasourceDTO: DatasourceDTO): ResponseEntity<DatasourceDTO> {
    log.debug("REST request to update Datasource : $datasourceDTO")

    if (id == null) {
      throw RuntimeException("Invalid id")
    }

    val result = datasourceService.save(datasourceDTO)
    return ResponseEntity.ok()
      .body(result)
  }

  @PatchMapping("/datasources/{id}")
  fun partialUpdateDatasource(
    @PathVariable(value = "id", required = false) id: Long,
    @RequestBody datasourceDTO: DatasourceDTO): ResponseEntity<DatasourceDTO> {
    log.debug("REST request to partial update Datasource : $datasourceDTO")

    if (id == null) {
      throw RuntimeException("Invalid id")
    }
    val result = datasourceService.partialUpdate(datasourceDTO)
    return result.map {
      ResponseEntity.ok().body(it)
    }.orElseThrow {
      RuntimeException("Invalid id")
    }
  }

  @DeleteMapping("/datasources/{id}")
  fun deleteDatasource(@PathVariable id: Long): ResponseEntity<Void> {
    log.debug("REST request to delete Datasource : $id")
    datasourceService.delete(id)
    return ResponseEntity.noContent().build()
  }
}