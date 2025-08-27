import xml.etree.ElementTree as ET
import csv
import re

xml_file = '/Users/zero/Desktop/_zero/workspace/snuh-eras/src/main/resources/config/liquibase/datamart/20230713000002_added_ColorectalSchema.xml'
csv_file = '/Users/zero/Desktop/_zero/workspace/snuh-eras/src/main/resources/config/liquibase/datamart/fake-data/common/formula.csv'
output_file = 'output/fields_mapped.csv'

# XML → field:table 매핑
def build_field_table_map(xml_file):
    ns = {'lb': 'http://www.liquibase.org/xml/ns/dbchangelog'}
    tree = ET.parse(xml_file)
    root = tree.getroot()
    field_table_map = {}
    for table in root.findall('.//lb:createTable', ns):
        table_name = table.attrib.get('tableName')
        if not table_name:
            continue
        for column in table.findall('lb:column', ns):
            field_name = column.attrib.get('name')
            if field_name:
                field_table_map[field_name] = table_name
    return field_table_map

field_table_map = build_field_table_map(xml_file)

# CSV 읽고 변환, 빈 줄 유지
with open(csv_file, 'r', encoding='utf-8', newline='') as f_in, \
     open(output_file, 'w', encoding='utf-8', newline='') as f_out:

    reader = csv.reader(f_in, delimiter=';', quoting=csv.QUOTE_ALL)
    writer = csv.writer(f_out, delimiter=';', quoting=csv.QUOTE_ALL)

    header = next(reader)
    writer.writerow(header)
    description_idx = header.index('description')

    for row in reader:
        # 빈 줄이면 그대로 기록
        if not any(row):
            writer.writerow(row)
            continue

        description = row[description_idx]
        if description.strip():
            matches = re.findall(r'\$\{(\w+)\}', description)
            for m in matches:
                table = field_table_map.get(m)
                if table:
                    description = description.replace(f"${{{m}}}", f"${{{table}.{m}}}")
            row[description_idx] = description

        writer.writerow(row)
