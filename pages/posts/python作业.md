---
title: python
date: 2023-10-14
updated: 2023-10-14
tag:
 - python
---

##### 一些话
python是不怎么喜欢的，但是据说很实用…………

[python学校作业](https://prg.cqupt.edu.cn/main.jsp)

```python
#作业1

def cacluate():
    a = 0
    ls1 = input('Please input numbers,and press the Enter to end.(gap with ,)').split(',')

    #print(ls1)
    for i in range(0, len(ls1)):
        a = a + float(ls1[i])
    b = len(ls1)
    c= a / b
    #print(c)
    ls = []
    for q in range(0,len(ls1)):
        if float(ls1[q]) > c:
            w = int(ls1[q])
            ls.append(w)
    aut = (c,ls)
    print('\n',aut)


cacluate()
```
```python
#字符替换

s = input()
t =input()
print(s.replace(' ',t))
```
```python
#作业三

'''
计算任意个输入数字的乘积。
'''
ls = []
ls = input().split(',')

a = 1
for i in range(0,len(ls)):
    a = a * int(ls[i])
print(a)
```
```python
#作业四

def isprime(n):  #判断素数函数
    for i in range(2,n):
        if n % i == 0:
            return False
    return True

def f(n):        #找小于n的素数并求和
    ls = []
    a = 0
    for i in range(2,n+1):
        if isprime(i) :
            ls.append(i)
    ls =sorted(ls)[-10:]
    return sum(ls)


p=int(input())
print(f(p))
# ##寻找素数要从2开始，因为0，1，n,三者都各自不满足客观条件
```
