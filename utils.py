from decimal import Decimal

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