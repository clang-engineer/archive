# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head()


# EDA - 결측값 확인
df.isnull().sum()


# 데이터 shape
df.shape


# EDA - 결측비율 확인
df.isnull().sum()/df.shape[0]


# f3 컬럼 삭제
print("삭제 전:", df.shape)
df = df.drop(['f3'], axis=1)
print("삭제 후:", df.shape)

# 결측치가 있는 컬럼을 제거하는 2가지 방법
# df.drop(['B', 'C'], axis=1)
# df.drop(columns=['B', 'C'])


# 도시 확인
df['city'].unique()


# 도시별 중앙값 계산
s=df[df['city']=='서울']['f1'].median()
k=df[df['city']=='경기']['f1'].median()
b=df[df['city']=='부산']['f1'].median()
d=df[df['city']=='대구']['f1'].median()
s, k, b, d

#방법2
# k, d, b, s = df.groupby('city')['f1'].median()


# 대체 전 데이터 샘플 출력
df[18:21]


# f1결측치 city별 중앙값으로 대체
df['f1'] = df['f1'].fillna(df['city'].map({'서울':s,'경기':k,'부산':b,'대구':d}))

# 만약 그냥 f1 중앙값으로 대체 한다면 
# df['f1'] = df['f1'].fillna(df['f1'].median())


# 대체 후 데이터 샘플 출력
df[18:21]


#결과 출력
print(df['f1'].mean())
