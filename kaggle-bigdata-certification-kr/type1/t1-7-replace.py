# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head(2)


# ESFJ 값을 가진 데이터 확인
df[df['f4'] == 'ESFJ']


# 값 변경하기
df['f4'] = df['f4'].replace('ESFJ', 'ISFJ')


# ESFJ 값을 가진 데이터 확인
df[df['f4'] == 'ESFJ']


# 2개의 조건에 맞는 값
df[(df['f4'] == 'ISFJ') & (df['city'] == '경기')]


# 2개의 조건에 맞는 값중 age컬럼의 최대값
df[(df['f4'] == 'ISFJ') & (df['city'] == '경기')]['age'].max()
