# EDA
import pandas as pd
df = pd.read_csv("https://raw.githubusercontent.com/plotly/datasets/master/auto-mpg.csv")
df.info()

# 전처리
df = df.dropna(axis = 0)
X = df[["horsepower"]]
y = df['mpg']

import sklearn
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 11)

print(X_train.shape)
print(X_test.shape)


# 모델링
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)

# 평가
print(model.score(X_test, y_test))

from sklearn.metrics import r2_score
pred = model.predict(X_test)
print(r2_score(y_test, pred))
