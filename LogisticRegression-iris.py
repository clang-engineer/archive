import pandas as pd
import sklearn


df = pd.read_csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv")

# EDA
df
df.info()
df.describe()


# 전처리
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
df[["sepal_length"]] = scaler.fit_transform(df[["sepal_length"]])
df[["sepal_width"]] = scaler.fit_transform(df[["sepal_width"]])
df[["petal_length"]] = scaler.fit_transform(df[["petal_length"]])
df[["petal_width"]] = scaler.fit_transform(df[["petal_width"]])

from sklearn.model_selection import train_test_split
X = df[["sepal_length", "sepal_width", "petal_length", "petal_width"]]
y = df["species"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 11)


# 모델 적합
from sklearn.linear_model import LogisticRegression
lr = LogisticRegression()
lr.fit(X_train, y_train)


# 모델 평가
from sklearn.metrics import accuracy_score
pred = lr.predict(X_test)
acc = accuracy_score(y_test, pred)
print(acc)
