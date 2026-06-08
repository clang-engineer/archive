# EDA
import pandas as pd
df = pd.read_csv("https://raw.githubusercontent.com/ageron/handson-ml/master/datasets/housing/housing.csv")
df
df.info()


# 전처리
df = df.dropna(axis = 0)
df = df.drop("ocean_proximity", axis = 1)

X = df.drop("median_house_value", axis = 1)
y = df['median_house_value']

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 11)


# 모델링
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)

print(model.score(X_test, y_test))

from sklearn.metrics import r2_score

pred = model.predict(X_test)
print(r2_score(y_test, pred))

import numpy as np
from sklearn.metrics import mean_squared_error
print(np.sqrt(mean_squared_error(y_test, pred)))

