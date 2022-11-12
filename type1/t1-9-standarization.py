# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head(2)


# 표준화
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
df['f5']=scaler.fit_transform(df[['f5']])
df.head()


# 중앙값 출력
print(df['f5'].median())
