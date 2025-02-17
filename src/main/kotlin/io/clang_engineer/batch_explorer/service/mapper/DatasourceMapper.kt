package io.clang_engineer.batch_explorer.service.mapper

import io.clang_engineer.batch_explorer.domain.Datasource
import io.clang_engineer.batch_explorer.service.dto.DatasourceDTO
import org.mapstruct.Mapper
import org.mapstruct.factory.Mappers

@Mapper(componentModel = "spring")
interface DatasourceMapper {
  fun toEntity(dto: DatasourceDTO): Datasource

  fun toDto(s: Datasource): DatasourceDTO

  fun toEntity(dtoList: MutableList<DatasourceDTO>): MutableList<Datasource>

  fun toDto(entityList: MutableList<Datasource>): MutableList<DatasourceDTO>
}