package io.clang_engineer.batch_explorer.service.dto

data class DatasourceDTO(
  var id: Long? = null,
  var title: String? = null,
  var description: String? = null,
  var activated: Boolean? = null,
)