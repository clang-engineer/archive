package io.clang_engineer.batch_explorer.web.rest

import com.fasterxml.jackson.annotation.JsonInclude
import java.io.ByteArrayOutputStream
import java.io.ObjectOutputStream
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import java.io.IOException

private val mapper = createObjectMapper()

private fun createObjectMapper() =
  ObjectMapper().apply {
    configure(SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS, false)
    setSerializationInclusion(JsonInclude.Include.NON_EMPTY)
    registerModule(JavaTimeModule())
  }

@Throws(IOException::class)
fun convertObjectToJsonBytes(`object`: Any): ByteArray = mapper.writeValueAsBytes(`object`)
