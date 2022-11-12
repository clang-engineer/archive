# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head()


# 소수점 데이터 찾기
df = df[(df['age']-np.floor(df['age']))!= 0] # df[df['age'] * 10 % 10 > 0]
df


# 이상치를 포함한 데이터 올림, 내림, 버림의 평균값 
m_ceil = np.ceil(df['age']).mean() # 올림
m_floor = np.floor(df['age']).mean() # 내림
m_trunc = np.trunc(df['age']).mean() # 버림

m_ceil, m_floor, m_trunc


# 평균값 더한 다음 출력
print(m_ceil + m_floor + m_trunc)
