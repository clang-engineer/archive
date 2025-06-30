from decimal import Decimal

import psycopg2
from psycopg2 import sql
from pymongo import MongoClient

def convert_decimals(obj):
    if isinstance(obj, dict):
        return {k: convert_decimals(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [convert_decimals(item) for item in obj]
    elif isinstance(obj, Decimal):
        # 소수점 이하 없는 숫자는 int, 아니면 float로 변환
        if obj == obj.to_integral():
            return int(obj)
        else:
            return float(obj)
    else:
        return obj


# PostgreSQL 연결 정보
pg_conn = psycopg2.connect(
    dbname="eras",
    user="snuheras",
    password="",
    host="localhost",
    port="5432"
)
pg_cursor = pg_conn.cursor()

# MongoDB 연결 정보
mongo_client = MongoClient("mongodb://admin:admin@localhost:27017/?authSource=admin")


mongo_db = mongo_client["snuheras"]  # 실제 MongoDB DB 이름으로 변경하세요
schema = "schema_colorectal"  # PostgreSQL 스키마 이름
mongo_patients = mongo_db['colorectal']     # 컬렉션 이름

# PostgreSQL tbl_patient 전체 데이터 조회
pg_cursor.execute(sql.SQL("SELECT * FROM {}.tbl_patient").format(sql.Identifier(schema)))
columns = [desc[0].lower() for desc in pg_cursor.description]
patients = pg_cursor.fetchall()

for row in patients:
    patient_id = row[columns.index("id")]
    patient_doc = dict(zip(columns, row))

    # 연관 테이블 리스트
    related_tables = ["anesthesia", "app_check_list", "eq5d5l", "frailty", "nutrition", "pathology", "pca", "postoperative_outcomes", "quality_of_recovery_15", "surgery"]

    for table in related_tables:
        table_name = f"tbl_{table}"
        query = sql.SQL("SELECT * FROM {}.{} WHERE id = %s").format(
            sql.Identifier(schema),
            sql.Identifier(table_name)
        )
        pg_cursor.execute(query, (patient_id,))
        data = pg_cursor.fetchone()
        if data:
            sub_columns = [desc[0].lower() for desc in pg_cursor.description]
            # 하위 문서로 삽입
            patient_doc[table] = dict(zip(sub_columns, data))

    # MongoDB _id 필드로 변경
    patient_doc["_id"] = patient_doc.pop("id")

    # MongoDB 삽입 (중복시 덮어쓰기)
    mongo_patients.replace_one({"_id": patient_doc["_id"]}, convert_decimals(patient_doc), upsert=True)

print("데이터 이관 완료!")

# 종료
pg_cursor.close()
pg_conn.close()
mongo_client.close()
