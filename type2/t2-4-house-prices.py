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
    
    X_train, X_test = train_test_split(df, test_size=0.2, shuffle=True, random_state=2021)
    y_train = X_train[[id_name, target]]
    X_train = X_train.drop(columns=[id_name, target])
    y_test = X_test[[id_name, target]]
    X_test = X_test.drop(columns=[id_name, target])
    return X_train, X_test, y_train, y_test 
    
df = pd.read_csv("../input/house-prices-advanced-regression-techniques/train.csv")
X_train, X_test, y_train, y_test = exam_data_load(df, target='SalePrice', id_name='Id')

X_train.shape, X_test.shape, y_train.shape, y_test.shape



# EDA
import pandas as pd
X_train.shape, X_test.shape

pd.set_option("display.max_columns", 100)
display(X_train.head(3))
display(X_test.head(3))

y_train['SalePrice'].hist()
y_test['SalePrice'].hist()

X_train.isnull().sum().sort_values(ascending=False)[:20]
X_test.isnull().sum().sort_values(ascending=False)[:20]

X_train.info()


# Pre Processing

X_train = X_train.select_dtypes(exclude=['object'])
X_test = X_test.select_dtypes(exclude=['object'])
target = y_train['SalePrice']

X_train.head(3)

from sklearn.impute import SimpleImputer

imp = SimpleImputer()
X_train = imp.fit_transform(X_train)
X_test = imp.transform(X_test)o

X_train

from sklearn.model_selection import train_test_split
X_tr, X_val, y_tr, y_val = train_test_split(X_train, target, test_size=0.15, random_state=2022)
X_tr.shape, X_val.shape, y_tr.shape, y_val.shape


# Model

from sklearn.metrics import mean_squared_error

def rmsle(y, y_pred):
    return np.sqrt(mean_squared_error(y, y_pred))


from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor

## model 1
from sklearn.svm import SVC
model = SVC(random_state=1234)
model.fit(X_tr, y_tr)
pred = model.predict(X_val)

print("RMSLE : " + str(rmsle(y_val, pred)))


model = XGBRegressor()
model.fit(X_tr, y_tr, verbose=False)
pred = model.predict(X_val)

print("RMSLE : " + str(rmsle(y_val, pred)))


## model 3 from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier()
model.fit(X_tr, y_tr)
pred = model.predict(X_val)

print("RMSLE : " + str(rmsle(y_val, pred)))


# prediction
y = y_train['SalePrice']
final_model = XGBRegressor()
final_model.fit(X_train, y)

prediction = final_model.predict(X_test)


submission = pd.DataFrame(data={
    'Id': y_test.Id,
    'income' : prediction
})

submission.head()

submission.to_csv("12345.csv", index=False)
