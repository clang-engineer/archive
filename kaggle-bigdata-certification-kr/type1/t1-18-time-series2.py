# 주어진 데이터에서 2022년 5월 주말과 평일의 sales컬럼 평균값 차이를 구하시오 (소수점 둘째자리까지 출력, 반올림)
# 라이브러리 불러오기
import pandas as pd
df = pd.read_csv("../input/bigdatacertificationkr/basic2.csv", parse_dates=['Date'])
df.head()
df.info()

df['year'] = df['Date'].dt.year
df['month'] = df['Date'].dt.month
df['day'] = df['Date'].dt.day
df['dayofweek'] = df['Date'].dt.dayofweek
df['weekend'] = df['dayofweek'].apply(lambda x: x>=5, 1, 0)

df.head()

weekend_cond = (df['year']==2022) & (df['month']==5) & (df['weekend'])
weekday_cond = (df['year']==2022) & (df['month']==5) & (~df['weekend'])

weekend = df[weekend_cond]['Sales'].mean()
weekday = df[weekday_cond]['Sales'].mean()

round(weekend - weekday, 1)
