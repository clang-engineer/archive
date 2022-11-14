import pandas as pd

# EDA
df = pd.read_csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")
df


# 전처리
d_mean = df["Age"].mean()
df["Age"].fillna(d_mean, inplace=True)

d_mode = df["Embarked"].mode()[0]
df["Embarked"].fillna(d_mode, inplace=True)

from sklearn.preprocessing import LabelEncoder
df["Sex"] = LabelEncoder().fit_transform(df["Sex"])
df["Embarked"] = LabelEncoder().fit_transform(df["Embarked"])

df["FamilySize"] = df["SibSp"] + df["Parch"]


X = df[["Pclass", "Sex", "Age", "Fare", "Embarked", "FamilySize"]]
y = df["Survived"]

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 11)


# 모델 적합
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(n_estimators = 50, max_depth = 3, random_state = 20)
rf.fit(X_train, y_train)


# 모델 평가
pred = rf.predict(X_test)
from sklearn.metric import accuracy_score
acc = accuracy_score(y_test, pred)
print(acc)


s
