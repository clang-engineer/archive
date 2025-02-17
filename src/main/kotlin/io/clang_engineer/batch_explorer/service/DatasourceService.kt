package io.clang_engineer.batch_explorer.service

import io.clang_engineer.batch_explorer.repository.DatasourceRepository
import io.clang_engineer.batch_explorer.service.dto.DatasourceDTO
import io.clang_engineer.batch_explorer.service.mapper.DatasourceMapper
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class DatasourceService(
  private val datasourceRepository: DatasourceRepository,
  private val datasourceMapper: DatasourceMapper
) {

  private val log = LoggerFactory.getLogger(javaClass)

  fun save(datasourceDTO: DatasourceDTO): DatasourceDTO {
    log.debug("Request to save Datasource : $datasourceDTO")

    var datasource = datasourceMapper.toEntity(datasourceDTO)
    datasource = datasourceRepository.save(datasource)
    return datasourceMapper.toDto(datasource)
  }

  fun findAll(): MutableList<DatasourceDTO> {
    log.debug("Request to get all Datasources")
    return datasourceRepository.findAll()
      .mapTo(mutableListOf(), datasourceMapper::toDto)
  }

  fun findOne(id: Long): DatasourceDTO {
    log.debug("Request to get Datasource : $id")
    return datasourceRepository.findById(id)
      .map(datasourceMapper::toDto)
      .orElse(null)
  }

  fun delete(id: Long) {
    log.debug("Request to delete Datasource : $id")
    datasourceRepository.deleteById(id)
  }

  fun update(datasourceDTO: DatasourceDTO): DatasourceDTO {
    log.debug("Request to update Datasource : $datasourceDTO")

    var datasource = datasourceMapper.toEntity(datasourceDTO)
    datasource = datasourceRepository.save(datasource)
    return datasourceMapper.toDto(datasource)
  }
}