
import xml.etree.ElementTree as ET
import csv
import re

# XML, CSV 경로
xml_file = '/Users/zero/Desktop/_zero/workspace/snuh-eras/src/main/resources/config/liquibase/datamart/20230810000002_added_StomachSchema.xml'
csv_file = '/Users/zero/Desktop/_zero/workspace/snuh-eras/src/main/resources/config/liquibase/datamart/fake-data/common/formula.csv'
output_file = 'fields_mapped.csv'  # 변환 CSV

# XML 파싱해서 field -> table 매핑 생성
tree = ET.parse(xml_file)
root = tree.getroot()

field_table_map = {}
ns = {'lb': 'http://www.liquibase.org/xml/ns/dbchangelog'}

for table in root.findall('.//lb:createTable', ns):
    table_name = table.get('tableName')
    for column in table.findall('lb:column', ns):
        field_name = column.get('name')
        if field_name:
            field_table_map[field_name] = table_name

# CSV 읽고 description 치환
with open(csv_file, 'r', encoding='utf-8') as f_in, open(output_file, 'w', newline='', encoding='utf-8') as f_out:
    reader = csv.DictReader(f_in, delimiter=';')
    fieldnames = reader.fieldnames
    writer = csv.DictWriter(f_out, fieldnames=fieldnames, delimiter=';')
    writer.writeheader()

    for row in reader:
        description = row['description']
        # ${field} 패턴 찾기
        matches = re.findall(r'\$\{(\w+)\}', description)
        for m in matches:
            table = field_table_map.get(m)
            if table:
                description = description.replace(f"${{{m}}}", f"${{{table}.{m}}}")
        row['description'] = description
        writer.writerow(row)

print(f"CSV 변환 완료: {output_file}")
