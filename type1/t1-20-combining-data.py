# 고객과 잘 맞는 타입 추천 :)
# basic1 데이터 중 'f4'를 기준으로 basic3 데이터 'f4'값을 기준으로 병합하고,

# 병합한 데이터에서 r2결측치를 제거한다음, 앞에서 부터 20개 데이터를 선택하고 'f2'컬럼 합을 구하시오

# basic1.csv: 고객 데이터
# basic3.csv: 잘 어울리는 관계 데이터 (추천1:r1, 추천2:r2)

# 라이브러리 및 데이터 로드
import pandas as pd
b1 = pd.read_csv("../input/bigdatacertificationkr/basic1.csv")
b3 = pd.read_csv("../input/bigdatacertificationkr/basic3.csv")
b1.head()
b3.head()


# 데이터 결합(b1을 기준으로 결합) 
df = pd.merge(left = b1 , right = b3, how = "left", on = "f4")
df.head()
df.tail()


# 결측치 확인
df.isnull().sum()


# r2컬럼 결측치 제거
print(df.shape)
df = df.dropna(subset=['r2'])
print(df.shape)


# 인덱스 리셋
df = df.reset_index()


# 앞에서 부터 20개 데이터를 선택하고 'f2'컬럼 합
print(df.iloc[:20]['f2'].sum())
