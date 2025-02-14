CREATE TABLE MOVIE
(
    id           BIGSERIAL PRIMARY KEY,
    name         TEXT NOT NULL,
    release_date DATE NOT NULL,
    unique (name)
);

CREATE TABLE DATABASE
(
    id                 BIGSERIAL PRIMARY KEY,
    title              TEXT NOT NULL,
    description        TEXT NOT NULL,
    created_by         TEXT NOT NULL,
    created_date       DATE NOT NULL,
    last_modified_by   TEXT NOT NULL,
    last_modified_date DATE NOT NULL
);