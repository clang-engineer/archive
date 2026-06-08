# EDA

```py
# 시험환경 세팅 (코드 변경 X)
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
    
df = pd.read_csv("../input/pima-indians-diabetes-database/diabetes.csv")
X_train, X_test, y_train, y_test = exam_data_load(df, target='Outcome')

X_train.shape, X_test.shape, y_train.shape, y_test.shape
```

```py
X_train.head()
y_train.value_counts()
X_train.info()
X_train.isnull().sum()
X_test.isnull().sum()
X_train.describe()
```


# 전처리
```py
#이상치 처리
#Train
print('Glucose:',len(X_train[X_train['Glucose']==0]))
print('BloodPressure:',len(X_train[X_train['BloodPressure']==0]))
print('SkinThickness:',len(X_train[X_train['SkinThickness']==0]))
print('Insulin:',len(X_train[X_train['Insulin']==0]))
print('BMI:',len(X_train[X_train['BMI']==0]))

#Test
print('Glucose:',len(X_test[X_test['Glucose']==0]))
print('BloodPressure:',len(X_test[X_test['BloodPressure']==0]))
print('SkinThickness:',len(X_test[X_test['SkinThickness']==0]))
print('Insulin:',len(X_test[X_test['Insulin']==0]))
print('BMI:',len(X_test[X_test['BMI']==0]))

# 포도당 이상치 삭제
del_idx = X_train[(X_train['Glucose']==0)].index
del_idx

print('Glucose 이상치 삭제 전 :', X_train.shape, y_train.shape)
X_train = X_train.drop(index=del_idx, axis=0)
y_train = y_train.drop(index=del_idx, axis=0)
print('Glucose 이상치 삭제 후 :', X_train.shape, y_train.shape)

# 포도당을 제외한 이상치, 평균값으로 대체
cols = ['BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
cols_mean = X_train[cols].mean()
X_train[cols].replace(0, cols_mean)

# 스케일링
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
cols = ['Pregnancies','Glucose','BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age']
X_train[cols] = scaler.fit_transform(X_train[cols])
X_test[cols] = scaler.fit_transform(X_test[cols])

# id 제외
X = X_train.drop('id',axis=1)
test = X_test.drop('id',axis=1)
```

# 모델링

```py
from sklearn.svm import SVC
model = SVC(random_state=2022)
model.fit(X, y_train['Outcome'])
predictions = model.predict(test)
```

# 평가
```py
# 오버피팅 되었을 경우에 점수가 잘나올 수 있음 (객관적인 평가 아님, 밸리데이션 데이터로 평가 필요함)
round(model.score(X, y_train['Outcome']) * 100, 2)

output = pd.DataFrame({'idx': X_test.index, 'Outcome': predictions})
output.head()

# 수험번호.csv로 출력
output.to_csv('1234567.csv', index=False)

round(model.score(test, y_test['Outcome']) * 100, 2) # 60점대로 낮은 정확도를 보여줌
```
