# 라이브러리 불러오기
import pandas as pd

# 데이터 불러오기
df = pd.read_csv("../input/bigdatacertificationkr/basic2.csv")
df.head()
df.info()

# datetime으로 type변경
df['Date'] = pd.to_datetime(df['Date'])
df.info()

# 새로운 컬럼 추가 (년, 월, 일)
df['year'] = df['Date'].dt.year
df['month'] = df['Date'].dt.month
df['day'] = df['Date'].dt.day
df.head()

# 문제 조건에 맞는 값 구하기
cond = (df['year']==2022) & (df['month']==5)
print(df[cond]['Sales'].median())
