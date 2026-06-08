# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np
from sklearn.preprocessing import power_transform

df = pd.read_csv('../input/bigdatacertificationkr/basic1.csv')
df.head(5)


# 조건에 맞는 데이터
print("조건 적용 전:", df.shape)
df = df[df['age']>=20]
print("조건 적용 후:", df.shape)


# 최빈값으로 'f1' 컬럼 결측치 대체
print("결측치 처리 전: \n", df.isnull().sum())
print("최빈값: ",df['f1'].mode()[0])
df['f1'] = df['f1'].fillna(df['f1'].mode()[0])
print("결측치 처리 후: \n", df.isnull().sum())


# 'f1'데이터 여-존슨 yeo-johnson 값 구하기
df['y'] = power_transform(df[['f1']]) # method 디폴트 값은 여-존슨’yeo-johnson’
df['y'].head()


# 'f1'데이터 여-존슨 yeo-johnson 값 구하기
df['y'] = power_transform(df[['f1']],standardize=False) # method 디폴트 값은 여-존슨’yeo-johnson’
df['y'].head()


# 'f1'데이터 박스-콕스 box-cox 값 구하기
df['b'] = power_transform(df[['f1']], method='box-cox')
df['b'].head()


# 두 값의 차이를 절대값으로 구한다음 모두 더해 소수점 둘째 자리까지 출력(반올림)
round(sum(np.abs(df['y'] - df['b'])),2)

