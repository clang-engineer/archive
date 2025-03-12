package io.clang_engineer.batch_explorer.service.mapper

import io.clang_engineer.batch_explorer.domain.Datasource
import io.clang_engineer.batch_explorer.service.dto.DatasourceDTO
import org.mapstruct.*

@Mapper(componentModel = "spring")
interface DatasourceMapper {
  fun toEntity(dto: DatasourceDTO): Datasource

  fun toDto(s: Datasource): DatasourceDTO

  fun toEntity(dtoList: MutableList<DatasourceDTO>): MutableList<Datasource>

  fun toDto(entityList: MutableList<Datasource>): MutableList<DatasourceDTO>

  @Named("partialUpdate")
  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  fun partialUpdate(@MappingTarget entity: Datasource, dto: DatasourceDTO): Datasource
}