#dir을 통해 사용 가능한 함수 확인
import pandas as pd
print(dir(pd))


#데이터 프레임에서 할 수 있는 것들은?
print(dir(pd.DataFrame))


#help을 통해 사용법 확인
# 데이터 프레임에서 결측치 drop을 어떻게 사용했더라?
print(help(pd.DataFrame.drop))


#원핫인코딩 어떻게 사용했더라?
import pandas as pd
print(help(pd.get_dummies))


#sklearn까지만 외워주세요 :) 
import sklearn
print(sklearn.__all__)


# 전처리 무엇을 할 수 있지?
import sklearn.preprocessing
print(sklearn.preprocessing.__all__)


# 문제에서 민맥스스케일을 적용하라고 하네. 어떻게 사용하지?
import sklearn.preprocessing
print(help(sklearn.preprocessing.MinMaxScaler))


# 데이터를 나눠야 하는데 풀네임이 뭐더라?
# 데이터를 트레인과 테스트로 나눠야할 떼 model_selection안에 있다는건 아셔야 해요^^
import sklearn.model_selection
print(sklearn.model_selection.__all__)


# 랜덤포레스트 어떻게 썻더라?
import sklearn.ensemble
print(help(sklearn.ensemble.RandomForestClassifier()))
