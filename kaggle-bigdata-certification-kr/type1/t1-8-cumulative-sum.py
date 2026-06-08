# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head(2)


# 조건에 따른 누적합
df2 = df[df['f2']==1]['f1'].cumsum()
df2


# 결측치 처리 (뒤에 나오는 값으로 채움)
df2 = df2.fillna(method = 'bfill')
df2


# 평균 출력
print(df2.mean())
