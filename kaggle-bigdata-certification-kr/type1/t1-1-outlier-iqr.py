# 라이브러리 및 데이터 불러오기
import pandas as pd
import numpy as np
df = pd.read_csv('../input/titanic/train.csv')


# 간단한 탐색적 데이터 분석 (EDA)
print(df.shape)
print(df.isnull().sum())
df.head()


# IQR 구하기
Q1 = df['Fare'].quantile(.25)
Q3 = df['Fare'].quantile(.75)

# numpy 활용시
# Q1 = np.percentile(df['Fare'], 25)
# Q3 = np.percentile(df['Fare'], 75)

IQR = Q3 - Q1
Q1 - 1.5 * IQR, Q3 + 1.5 * IQR


# 이상치 데이터 구하기
outdata1 = df[df['Fare']<(Q1 - 1.5 * IQR)]
outdata2 = df[df['Fare']>(Q3 + 1.5 * IQR)]
len(outdata1), len(outdata2)


# 이상치 데이터에서 여성 수 구하기, 출력하기 print()
print(sum(outdata2['Sex'] == 'female'))
