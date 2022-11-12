# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head()


# f1컬럼 결측치 제거
df = df[~df['f1'].isnull()]


# 그룹 합계 계산
df2 = df.groupby(['city','f2']).sum()
df2


# 조건에 맞는 값 출력
print(df2.iloc[0]['f1'])
