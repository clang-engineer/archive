# db/postgres.py

import psycopg2
from psycopg2 import sql

def connect_postgres(config):
    return psycopg2.connect(**config)

def fetch_patients(cursor, schema):
    cursor.execute(sql.SQL("SELECT * FROM {}.tbl_patient").format(sql.Identifier(schema)))
    columns = [desc[0].lower() for desc in cursor.description]
    rows = cursor.fetchall()
    return columns, rows

def fetch_related_data(cursor, schema, table, patient_id):
    query = sql.SQL("SELECT * FROM {}.{} WHERE id = %s").format(
        sql.Identifier(schema),
        sql.Identifier(f"tbl_{table}")
    )
    cursor.execute(query, (patient_id,))
    data = cursor.fetchone()
    if data:
        columns = [desc[0].lower() for desc in cursor.description]
        return dict(zip(columns, data))
    return None
