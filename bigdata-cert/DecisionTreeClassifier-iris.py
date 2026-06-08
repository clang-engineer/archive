import pandas as pd
import matplotlib.pyplot as plt
import sklearn

from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

df = pd.read_csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv")

df['species'].replace({'setosa': 0, 'versicolor': 1, 'virginica': 2}, inplace = True)

X = df[['sepal_length', 'sepal_width', 'petal_length', 'petal_width']]
y = df['species']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 11)

dt = DecisionTreeClassifier(random_state = 11)

dt.fit(X_train, y_train)

pred = dt.predict(X_test)

from sklearn.metrics import accuracy_score
acc = accuracy_score(y_test, pred)
print(acc)
