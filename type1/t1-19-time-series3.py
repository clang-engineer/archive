# 주어진 데이터에서 2022년 월별 Sales 합계 중 가장 큰 금액과
# 2023년 월별 Sales 합계 중 가장 큰 금액의 차이를 절대값으로 구하시오.
# 단 Events컬럼이 '1'인경우 80%의 Salse값만 반영함
# (최종값은 소수점 반올림 후 정수 출력)

# 라이브러리 불러오기
import pandas as pd
# 데이터 불러오기 (datatime컬럼 지정)
df = pd.read_csv("../input/bigdatacertificationkr/basic2.csv", parse_dates=['Date'])
df.head()


# 날짜 컬럼 생성
df['year'] = df['Date'].dt.year
df['month'] = df['Date'].dt.month
df['day'] = df['Date'].dt.day
df['dayofweek'] = df['Date'].dt.dayofweek


# 이벤트가 1인 sales값은 80%만 반영
def event_sales(x):
    if x['Events'] == 1:
        x['Sales2'] = x['Sales']*0.8
    else:
        x['Sales2'] = x['Sales']
    return x


df = df.apply(lambda x: event_sales(x), axis=1) #1일 경우 row, 0일 경우 컬럼
df.head()


# 2022년 월별 합계 중 가장 큰 값
cond = df['year'] == 2022
df1 = df[cond]
sale1 = df1.groupby('month')['Sales2'].sum().max()
sale1


# 2023년 월별 합계 중 가장 큰 값
cond = df['year'] == 2023
df2 = df[cond]
sale2 = df2.groupby('month')['Sales2'].sum().max()
sale2


# 결과값 반올림 후 정수 출력
int(round(abs(sale1 - sale2),0))
