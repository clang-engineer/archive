# 판다스 통계 함수1 (가장 빈번히 사용되는 함수)
- 최대값 .max
- 최소값 .min
- 평균값 .mean
- 중앙값 .median
- 최빈값 .mode
- 합계 .sum
- 데이터 수 .count (결측값 제외됨)

```python
print("최대값")
print("f1:", df['f1'].max())
print("f5:", df['f5'].max())
print("\n")

print("최소값")
print("f1:", df['f1'].min())
print("f5:", df['f5'].min())
print("\n")

print("평균값")
print("f1:", df['f1'].mean())
print("f5:", df['f5'].mean())
print("\n")

print("중앙값")
print("f1:", df['f1'].median())
print("f5:", df['f5'].median())
print("\n")

print("최빈값")
print("f1:", df['f1'].mode()[0])
print("f5:", df['f5'].mode()[0])
print("\n")

print("합계")
print("f1:", df['f1'].sum())
print("f5:", df['f5'].sum())
print("\n")

print("카운트")
print("f1:", df['f1'].count())
print("f5:", df['f5'].count())
print("\n")
```

# 판다스 통계 함수2
분위수 .quantile
분산 .var
표준편차 .std
왜도 .skew
첨도 .kurt


```py
print("분위수")
print("f1:", df['f1'].quantile(.25))
print("f5:", df['f5'].quantile(.75))
print("\n")

print("분산")
print("f1:", df['f1'].var())
print("f5:", df['f5'].var())
print("\n")

print("표준편차")
print("f1:", df['f1'].std())
print("f5:", df['f5'].std())
print("\n")

print("왜도")
print("f1:", df['f1'].skew())
print("f5:", df['f5'].skew())
print("\n")

print("첨도")
print("f1:", df['f1'].kurt())
print("f5:", df['f5'].kurt())
print("\n")
```


# 판다스 통계 함수3
누적합 .cumsum
누적곱 .cumprod
누적 최대값 .cummax
누적 최소값 .cummin
[:1]를 붙인 이유는 값을 하나만 출력하기 위함


```py
print("누적합")
print("f1:", df['f1'].cumsum()[:1])
print("f5:", df['f5'].cumsum()[:1])
print("\n")

print("누적곱")
print("f1:", df['f1'].cumprod()[:1])
print("f5:", df['f5'].cumprod()[:1])
print("\n")

print("누적 최대값")
print("f1:", df['f1'].cummax()[:1])
print("f5:", df['f5'].cummax()[:1])
print("\n")

print("누적 최소값")
print("f1:", df['f1'].cummin()[:1])
print("f5:", df['f5'].cummin()[:1])
print("\n")
```



# 판다스 통계 함수4
평균의 표준오차 .sem
평균 절대편차 .mad
절대값 .abs
곱 .prod

```py
print("평균의 표준오차")
print("f1:", df['f1'].sem())
print("f5:", df['f5'].sem())
print("\n")

print("평균 절대편차") # mean absolute deviation
print("f1:", df['f1'].mad())
print("f5:", df['f5'].mad())
print("\n")

print("절대값")
print("f1:", df['f1'].abs())
print("f5:", df['f5'].abs())
print("\n")

print("곱") #해당되는 열 곱
print("f1:", df['f1'].prod()) 
print("f5:", df['f5'].prod()) 
print("\n")
```
