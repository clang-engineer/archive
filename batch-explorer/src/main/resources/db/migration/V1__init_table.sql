CREATE SEQUENCE SEQUENCE_GENERATOR
    START WITH 50
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE CACHE 1;

CREATE TABLE TBL_DATASOURCE
(
    id                 BIGSERIAL PRIMARY KEY,
    title              TEXT    NOT NULL,
    description        TEXT    NOT NULL,
    activated          BOOLEAN NOT NULL
--     created_by         TEXT    NOT NULL,
--     created_date       DATE    NOT NULL,
--     last_modified_by   TEXT    NOT NULL,
--     last_modified_date DATE    NOT NULL
);