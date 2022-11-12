# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head()


# 조건에 맞는 데이터
df[df['f4']=='ENFJ']


# 조건에 맞는 f1의 표준편차
enfj = df[df['f4']=='ENFJ']['f1'].std()
enfj

# 조건에 맞는 f1의 표준편차
infp = df[df['f4']=='INFP']['f1'].std()
infp


# 두 표준편차 차이 절대값 출력
print(np.abs(enfj - infp)) # abs() o
