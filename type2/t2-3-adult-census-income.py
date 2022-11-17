# EDA

## 시험환경 세팅 (코드 변경 X)
```py
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

def exam_data_load(df, target, id_name="", null_name=""):
    if id_name == "":
        df = df.reset_index().rename(columns={"index": "id"})
        id_name = 'id'
    else:
        id_name = id_name
    
    if null_name != "":
        df[df == null_name] = np.nan
    
    X_train, X_test = train_test_split(df, test_size=0.2, random_state=2021)
    
    y_train = X_train[[id_name, target]]
    X_train = X_train.drop(columns=[target])

    
    y_test = X_test[[id_name, target]]
    X_test = X_test.drop(columns=[target])
    return X_train, X_test, y_train, y_test 
    
df = pd.read_csv("../input/adult-census-income/adult.csv")
X_train, X_test, y_train, y_test = exam_data_load(df, target='income', null_name='?')

X_train.shape, X_test.shape, y_train.shape, y_test.shape
```

## 데이터 크기 확인
```py
X_train.shape, X_test.shape, y_train.shape

## 데이터 확인
X_train.head()

## 타겟 수 확인
y_train['income'].value_counts()

## type확인
X_train.info()

## 피처 구분
### Numeric features
numeric_features = [
                    'age',
                    'fnlwgt', 
                    'education.num',
                    'capital.gain', 
                    'capital.loss', 
                    'hours.per.week',                     
                   ]

### Categorical features
cat_features = [
                 'workclass',              
                 'education',            
                 'marital.status', 
                 'occupation', 
                 'relationship', 
                 'race', 
                 'sex',
                 'native.country'
]

X_train[numeric_features].describe()
X_train[cat_features].describe()

X_train.isnull().sum()
X_test.isnull().sum()

X_train['workclass'].value_counts()
X_train['occupation'].value_counts()
X_train['native.country'].value_counts()
```


# 정제 
## 결측치 대체
```py
def data_fillna(df):
    df['workclass'] = df['workclass'].fillna(df['workclass'].mode()[0])
    df['occupation'] = df['occupation'].fillna("null")
    df['native.country'] = df["native.country"].fillna(df['native.country'].mode()[0])
    return df

X_train = data_fillna(X_train)
X_test = data_fillna(X_test)

X_train.isnull().sum()
```

## 라벨인코딩
```py
from sklearn.preprocessing import LabelEncoder

all_df = pd.concat([X_train.assign(ind="train"), X_test.assign(ind="test")])
le = LabelEncoder()
all_df[cat_features] = all_df[cat_features].apply(le.fit_transform)

X_train = all_df[all_df['ind'] == 'train']
X_train = X_train.drop('ind',axis=1)
X_train

X_test = all_df[all_df['ind'] == 'test']
X_test = X_test.drop('ind',axis=1)
X_test
```

## 스케일링
```py
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_train[numeric_features] = scaler.fit_transform(X_train[numeric_features])
X_test[numeric_features] = scaler.transform(X_test[numeric_features])
X_train
```

## target값 변경
y = (y_train['income'] != '<=50K').astype(int)
y[:5]


## 학습용 데이터와 검증용 데이터로 구분
```py
from sklearn.model_selection import train_test_split
X_tr, X_val, y_tr, y_val = train_test_split(X_train, y, test_size=0.15, random_state=2021)
X_tr.shape, X_val.shape, y_tr.shape, y_val.shape
```

```py
X_tr.head()
# id 삭제
X_tr = X_tr.drop('id', axis=1)
X_val = X_val.drop('id', axis=1)
# id 삭제된 것 확인
X_tr.head(1)
```


# 모델

## 의사결정나무
```py
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

model = DecisionTreeClassifier(random_state = 2022)
model.fit(X_tr, y_tr)
pred = model.predict(X_val)
print('accuracy score:', (accuracy_score(y_val, pred)))
```

## 랜덤포레스트
```py
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(random_state = 2022)
model.fit(X_tr, y_tr)
pred = model.predict(X_val)
print('accuracy score:', (accuracy_score(y_val, pred)))
```


# 평가
## test데이터 예측 (pop을 활용하면 값을 넘겨주고 삭제 됨)
```py
X_test_id = X_test.pop('id')
pred = model.predict(X_test)
```

## csv생성
```py
output = pd.DataFrame({'id': X_test_id, 'income':pred})
output.to_csv("000000.csv", index=False)
output.head()

y_test = (y_test['income'] != '<=50K').astype(int)
from sklearn.metrics import accuracy_score
print('accuracy score:', (accuracy_score(y_test, pred)))
```
