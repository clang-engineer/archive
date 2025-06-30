# config.py

POSTGRES_CONFIG = {
    "dbname": "eras",
    "user": "snuheras",
    "password": "",
    "host": "localhost",
    "port": "5432"
}

MONGO_URI = "mongodb://admin:admin@localhost:27017/?authSource=admin"
MONGO_DB = "snuheras"

SCHEMA_NAME = "schema_colorectal"
COLLECTION_NAME = "colorectal"

RELATED_TABLES = [
    "anesthesia", "app_check_list", "eq5d5l", "frailty", "nutrition",
    "pathology", "pca", "postoperative_outcomes", "quality_of_recovery_15", "surgery"
]
