package io.clang_engineer.batch_explorer.domain

import jakarta.persistence.*
import java.time.Instant

@Entity
@Table(name = "tbl_datasource")
data class Datasource(
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
        @SequenceGenerator(name = "sequenceGenerator")
        @Column(name = "id")
        var id: Long? = null,

        @Column(name = "title", length = 100, nullable = false)
        var title: String? = null,

        @Column(name = "description")
        var description: String? = null,

        @Column(name = "activated")
        var activated: Boolean? = null,
)