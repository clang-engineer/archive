# migrate.py

from db.postgres import connect_postgres, fetch_patients, fetch_related_data
from db.mongo import connect_mongo
from utils import convert_decimals
from config import POSTGRES_CONFIG, MONGO_URI, MONGO_DB, SCHEMA_NAME, COLLECTION_NAME, RELATED_TABLES

def migrate():
    # PostgreSQL 연결
    pg_conn = connect_postgres(POSTGRES_CONFIG)
    pg_cursor = pg_conn.cursor()

    # MongoDB 연결
    mongo_client, _, mongo_collection = connect_mongo(MONGO_URI, MONGO_DB, COLLECTION_NAME)

    # 환자 데이터 조회
    columns, patients = fetch_patients(pg_cursor, SCHEMA_NAME)

    for row in patients:
        patient_id = row[columns.index("id")]
        patient_doc = dict(zip(columns, row))

        for table in RELATED_TABLES:
            sub_doc = fetch_related_data(pg_cursor, SCHEMA_NAME, table, patient_id)
            if sub_doc:
                patient_doc[table] = sub_doc

        patient_doc["_id"] = patient_doc.pop("id")
        mongo_collection.replace_one({"_id": patient_doc["_id"]}, convert_decimals(patient_doc), upsert=True)

    print("데이터 이관 완료!")

    # 종료
    pg_cursor.close()
    pg_conn.close()
    mongo_client.close()
