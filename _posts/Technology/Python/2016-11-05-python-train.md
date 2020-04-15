---
title: Python基础训练
date: 2016-11-05 14:45:37  
tags: overview  
categories: Python  
---

![](../../../assets/posts/20191120180921.png)

### string
```
s = 'good morning'
print(s[0])  # g

print(s[-2])  # n

# 分片用来从序列中提取出想要的子序列，其用法为：

# var[lower:upper:step]

# 其范围包括 lower ，但不包括 upper ，即 [lower, upper)，
# step 表示取值间隔大小，如果没有默认为1。
print(s[-3:])  # ing
print(s[:-3])  # good morn
print(s[:])  # good morning

print(s[::2])  # go onn
print(s[::-1])  # gninrom doog
print(s[:100])
```

### list
```
empty_list = list()
print(empty_list)

# 用 len 查看列表长度：
a = [1, 2, 3]
b = [2, 3, 'hello']
c = a + b
print(c)  # [1, 2, 3, 2, 3, u'hello']

d = b * 2
print(d)  # [2, 3, u'hello', 2, 3, u'hello']

print(d[-1])

print(a)
# 修改列表
a[0] = 100
print(a)

# 这种赋值也适用于分片，例如，将列表的第2，3两个元素换掉：
a[1:3] = [200, 300]
print(a)

# 事实上，对于连续的分片（即步长为 1 ），Python采用的是整段替换的方法，
# 两者的元素个数并不需要相同，
# 例如，将 [11,12] 替换为 [1,2,3,4]：
a = [10, 11, 12, 13, 14]
a[1:3] = [1, 2, 3, 4]
print(a)  # [10, 1, 2, 3, 4, 13, 14]

# 用这种方法来删除列表中一个连续的分片：
a = [10, 1, 2, 11, 12]
print(a[1:3])
a[1:3] = []
print(a)

# 对于不连续（间隔step不为1）的片段进行修改时，两者的元素数目必须一致：
a = [10, 11, 12, 13, 14]
a[::2] = [1, 2, 3]
print(a)  # [1, 11, 2, 13, 3]

# Python提供了删除列表中元素的方法 'del'。
a = [100, 'a', 'b', 200]
del a[0]
print(a)  # [u'a', u'b', 200]

# 删除间隔的元素：
a = ['a', 1, 'b', 2, 'c']
del a[::2]
print(a)  # [1, 2]

# 用 in 来看某个元素是否在某个序列（不仅仅是列表）中，
# 用not in来判断是否不在某个序列中。
a = [1, 2, 3, 4, 5]
print(1 in a)
print(1 not in a)

# 也可以作用于字符串：
s = 'hello world'
print("'he' in s : ", 'he' in s)  # True
print("'world' not in s : ", 'world' not in s)  # False

# 列表中可以包含各种对象，甚至可以包含列表：
a = [1, 2, 'six', [3, 4]]
print(a[3])  # [3,4]
# a[3]是列表，可以对它再进行索引：
print(a[3][1])  # 4

# 列表方法

# 列表中某个元素个数
a = [1, 1, 2, 3, 4, 5]
print(len(a))  # 总个数：6
# 元素1出现的个数
print(a.count(1))  # 2
# l.index(ob) 返回列表中元素 ob 第一次出现的索引位置，如果 ob 不在 l 中会报错。
print(a.index(1))  # 0

# 向列表添加单个元素
# l.append(ob) 将元素 ob 添加到列表 l 的最后。
a = [1, 1, 2, 3, 4, 5]
a.append(10)
print(a)  # [1, 1, 2, 3, 4, 5, 10]

# append每次只添加一个元素，并不会因为这个元素是序列而将其展开：
a.append([11, 12])
print(a)  # [1, 1, 2, 3, 4, 5, 10, [11, 12]]

# 向列表添加序列
# l.extend(lst) 将序列 lst 的元素依次添加到列表 l 的最后，作用相当于 l += lst。
a = [1, 2, 3, 4]
a.extend([6, 7, 1])
print(a)  # [1, 2, 3, 4, 6, 7, 1]

# 插入元素
# l.insert(idx, ob) 在索引 idx 处插入 ob ，之后的元素依次后移。
a = [1, 2, 3, 4]
# 在索引 3 插入 'a'
a.insert(3, 'a')
print(a)  # [1, 2, 3, u'a', 4]

# 移除元素
# l.remove(ob) 会将列表中第一个出现的 ob 删除，如果 ob 不在 l 中会报错。
a = [1, 1, 2, 3, 4]
# 移除第一个1
a.remove(1)
print(a)  # [1, 2, 3, 4]

# 弹出元素
# l.pop(idx) 会将索引 idx 处的元素删除，并返回这个元素。
a = [1, 2, 3, 4]
b = a.pop(0)  # 1
print('pop:', b, ' ;result:', a)

# 排序
# l.sort() 会将列表中的元素按照一定的规则排序：
a = [10, 1, 11, 13, 11, 2]
a.sort()
print(a)  # [1, 2, 10, 11, 11, 13]

# 如果不想改变原来列表中的值，可以使用 sorted 函数：
a = [10, 1, 11, 13, 11, 2]
b = sorted(a)
print(a)  # [10, 1, 11, 13, 11, 2]
print(b)  # [1, 2, 10, 11, 11, 13]

# 列表反向
# l.reverse() 会将列表中的元素从后向前排列。
a = [1, 2, 3, 4, 5, 6]
a.reverse()
print(a)  # [6, 5, 4, 3, 2, 1]

# 如果不想改变原来列表中的值，可以使用这样的方法：
a = [1, 2, 3, 4, 5, 6]
b = a[::-1]
print(a)
print(b)
# 如果不清楚用法，可以查看帮助：a.sort?

# 列表是可变的（Mutable）
a = [1, 2, 3, 4]
a[0] = 100
a.insert(3, 200)
print(a)  # [100, 2, 3, 200, 4]

# 字符串是不可变的（Immutable）
s = "hello world"
# 通过索引改变会报错

# 字符串方法只是返回一个新字符串，并不改变原来的值：
print(s.replace('world', 'Mars'))  # hello Mars
print(s)  # hello world

# 如果想改变字符串的值，可以用重新赋值的方法：
s = s.replace('world', 'YunYun')
print(s)  # hello YunYun

# 可变数据类型: list, dictionary, set, numpy array, user defined objects
# 不可变数据类型: integer, float, long, complex, string, tuple, frozenset
```


### tuple
```
# 与列表相似，元组Tuple也是个有序序列，但是元组是不可变的，用()生成。
a = (10, 11, 12, 13, 14)
a
print(a)

# 可以索引，切片：
c = a[0]
print(c)

c = a[1:3]
print(c)  # (11, 12)

# 单个元素的元组生成
# 采用下列方式定义只有一个元素的元组：
a = (10,)
print(a)
print(type(a))  # <type 'tuple'>

a = [1, 2, 3]
b = tuple(a)
print(b)  # (1, 2, 3)

# 由于元组是不可变的，所以只能有一些不可变的方法，
# 例如计算元素个数 count 和元素位置 index ，用法与列表一样。
c = a.count(1)
print(c)  # 1

c = a.index(3)
print(c)  # 索引位置为：2
```
### dict
```
# 字典 dictionary ，在一些编程语言中也称为 hash ， map ，
# 是一种由键值对组成的数据结构。

a = {}
print(type(a))  # <type 'dict'>
a = dict()
print(type(a))

# 插入键值
a['f'] = 'num 1'
a['s'] = 'num 2'
print(a)  # {u's': u'num 2', u'f': u'num 1'}

# 查看键值
print(a['s'])  # num 2

# 更新
a['f'] = 'num 3'
print(a)  # {u's': u'num 2', u'f': u'num 3'}

# 初始化字典
a = {'first': 'num 1', 'second': 'num 2', 3: 'num 3'}
print(a['first'])  # num 1
print(a[3])  # num 3

# Python中不能用支持用数字索引按顺序查看字典中的值，
# 而且数字本身也有可能成为键值，这样会引起混淆:
# a[0] 会报错

# 例子
# 定义四个字典
e1 = {'mag': 0.05, 'width': 20}
e2 = {'mag': 0.04, 'width': 25}
e3 = {'mag': 0.05, 'width': 80}
e4 = {'mag': 0.03, 'width': 30}
# 以字典作为值传入新的字典
events = {500: e1, 760: e2, 3001: e3, 4180: e4}
# {760: {u'width': 25, u'mag': 0.04},
# 3001: {u'width': 80, u'mag': 0.05},
# 500: {u'width': 20, u'mag': 0.05},
# 4180: {u'width': 30, u'mag': 0.03}}
print(events)

# 另一个例子
people = [
    {'first': 'Sam', 'last': 'Malone', 'name': 35},
    {'first': 'Woody', 'last': 'Boyd', 'name': 21},
    {'first': 'Norm', 'last': 'Peterson', 'name': 34},
    {'first': 'Diane', 'last': 'Chambers', 'name': 33}
]
# [{'first': 'Sam', 'last': 'Malone', 'name': 35},
#  {'first': 'Woody', 'last': 'Boyd', 'name': 21},
#  {'first': 'Norm', 'last': 'Peterson', 'name': 34},
#  {'first': 'Diane', 'last': 'Chambers', 'name': 33}]
print(people)

# 使用 dict 初始化字典
# 除了通常的定义方式，还可以通过 dict() 转化来生成字典：
my_dict = dict([('name', 'lili'),
                ('sex', 'female'),
                ('age', 32),
                ('address', 'beijing')])
# {u'age': 32,
# u'address': u'beijing',
# u'name': u'lili',
# u'sex': u'female'}
print(my_dict)

# 利用索引直接更新键值对：
my_dict['age'] += 1
print(my_dict)  # u'age': 33

# 可以使用元组作为键值，
# 例如，可以用元组做键来表示从第一个城市飞往第二个城市航班数的多少：
connections = {}
connections[('New York', 'Seattle')] = 100
connections[('Austin', 'New York')] = 200
connections[('New York', 'Austin')] = 400

# 元组是有序的，
# 因此 ('New York', 'Austin') 和 ('Austin', 'New York') 是两个不同的键：
print(connections[('Austin', 'New York')])  # 200
print(connections[('New York', 'Austin')])  # 400

# 字典方法
# get 方法 : d.get(key, default = None)
# 之前已经见过，用索引可以找到一个键对应的值，
# 但是当字典中没有这个键的时候，Python会报错
a = {'first': 'num 1', 'second': 'num 2'}
# error:
# print(a['third'])
# get 返回字典中键 key 对应的值，
# 如果没有这个键，返回 default 指定的值（默认是 None ）。
print(a.get('third'))  # None

# 指定默认值参数：
b = a.get("three", "num 0")
print(b)  # num 0

# pop 方法删除元素
# pop 方法可以用来弹出字典中某个键对应的值，同时也可以指定默认参数：
# d.pop(key, default = None)
a = {'first': 'num 1', 'second': 'num 2'}
c = a.pop('first')
print(c)  # num 1
print(a)  # {u'second': u'num 2'}

# 弹出不存在的键值：
d = a.pop("third", 'not exist')
print(d)  # not exist

# 与列表一样，del 函数可以用来删除字典中特定的键值对，例如：
a = {'first': 'num 1', 'second': 'num 2'}
del a["first"]
print(a)  # {u'second': u'num 2'}

# update方法更新字典
# 之前已经知道，可以通过索引来插入、修改单个键值对，
# 但是如果想对多个键值对进行操作，这种方法就显得比较麻烦，好在有 update 方法：
my_dict = dict([('name', 'lili'),
                ('sex', 'female'),
                ('age', 32),
                ('address', 'beijing')])
# 把 ‘lili' 改成 'lucy'，同时插入 'single' 到 'marriage'
dict_update = {'name': 'lucy', 'marriage': 'single'}
my_dict.update(dict_update)
print(my_dict)
# {u'marriage': u'single',
# u'name': u'lucy',
# u'address': u'beijing',
# u'age': 32,
# u'sex': u'female'}
pprint.pprint(my_dict)  # 华丽丽的显示方式

# in查询字典中是否有该键
barn = {'cows': 1, 'dogs': 5, 'cats': 3}
# in 可以用来判断字典中是否有某个特定的键：
print('chickens' in barn)  # False
print('cows' in barn)  # True

# keys 方法，values 方法和items 方法
# `d.keys()`

# 返回一个由所有键组成的列表；
# `d.values()`

# 返回一个由所有值组成的列表；
# `d.items()`

# 返回一个由所有键值对元组组成的列表；
print(barn.keys())  # [u'cows', u'cats', u'dogs']
print(barn.values())  # [1, 3, 5]
print(barn.items())  # [(u'cows', 1), (u'cats', 3), (u'dogs', 5)]
for key, val in barn.items():
    print(key, val)
    # cows 1
    # cats 3
    # dogs 5
```

### set
```
# 列表和字符串都是一种有序序列，而集合 set 是一种无序的序列。
# 因为集合是无序的，所以当集合中存在两个同样的元素的时候，只会保存其中的一个（唯一性）；
# 同时为了确保其中不包含同样的元素，集合中放入的元素只能是不可变的对象（确定性）。

# 可以用set()函数来显示的生成空集合：
a = set()
print(type(a))

# 使用一个列表来初始化一个集合：
a = set([1, 2, 3, 1])
print(a)  # 集合会自动去除重复元素 1。

# 集合中的元素是用大括号{}包含起来的，这意味着可以用{}的形式来创建集合：
a = {1, 2, 3, 1}
print(a)  # {1, 2, 3}

# 但是创建空集合的时候只能用set来创建，因为在Python中{}创建的是一个空的字典：
s = {}
print(type(s))  # <type 'dict'>

# 集合操作
a = {1, 2, 3, 4}
b = {2, 3, 4, 5}

# 并
# 两个集合的并，返回包含两个集合所有元素的集合（去除重复）。
# 可以用方法 a.union(b) 或者操作 a | b 实现。
c = a.union(b)
print(c)  # {1, 2, 3, 4, 5, 6}

# 操作 a | b 实现
d = a | b
print(c)

print(c == d)

# 交
# 两个集合的交，返回包含两个集合共有元素的集合。
# 可以用方法 a.intersection(b) 或者操作 a & b 实现。
c = a.intersection(b)
print(c)  # set([2, 3, 4])

d = a & b
print(d)

# 差
# a 和 b 的差集，返回只在 a 不在 b 的元素组成的集合。
# 可以用方法 a.difference(b) 或者操作 a - b 实现。
c = a.difference(b)
print(c)  # set([1])
d = a - b
print(d)

# 对称差
# a 和b 的对称差集，返回在 a 或在 b 中，但是不同时在 a 和 b 中的元素组成的集合。
# 可以用方法 a.symmetric_difference(b) 或者操作 a ^ b 实现（异或操作符）。
c = a.symmetric_difference(b)
print(c)  # set([1, 5])

d = a ^ b
print(d)

# 包含关系
a = {1, 2, 3}
b = {1, 2}
# 要判断 b 是不是 a 的子集，可以用 b.issubset(a) 方法，
# 或者更简单的用操作 b <= a ：
c = b.issubset(a)
print(c)  # True
d = (b <= a)
print(d)

# 也可以用 a.issuperset(b) 或者 a >= b 来判断：
print(a >= b)

# 方法只能用来测试子集，但是操作符可以用来判断真子集：
print(a < a)  # False
print(a <= a)  # True

# 集合方法
# add 方法向集合添加单个元素
# 跟列表的 append 方法类似，用来向集合添加单个元素。
# s.add(a) 将元素 a 加入集合 s 中。
s = {1, 3, 4}
s.add(4)
print(s)  # set([1, 3, 4])

s.add(5)
print(s)  # set([1, 3, 4, 5])

# update 方法向集合添加多个元素
# 跟列表的extend方法类似，用来向集合添加多个元素。
# s.update(seq)
s.update([10, 11, 12])
print(s)  # set([1, 3, 4, 5, 10, 11, 12])

# remove 方法移除单个元素
s = {1, 3, 4}
s.remove(1)
print(s)  # set([3, 4])

# pop 方法弹出元素
# 由于集合没有顺序，不能像列表一样按照位置弹出元素，
# 所以 pop 方法删除并返回集合中任意一个元素，如果集合中没有元素会报错。
s = {1, 3, 4}
d = s.pop()
print(s, d)

# discard 方法作用与 remove 一样
s = {1, 3, 4}
s.discard(3)
print(s)  # set([1, 4])

# difference_update方法
# a.difference_update(b) 从a中去除所有属于b的元素：
a = {1, 2, 3, 4}
b = {2, 3, 4, 5}
a.difference_update(b)
print(a)  # set([1])
```

### import
```
# 模块
# Python会将所有 .py 结尾的文件认定为Python代码文件

# __name__ 属性
# 有时候我们想将一个 .py 文件既当作脚本，又能当作模块用，
# 这个时候可以使用 __name__ 这个属性。

# 将文件保存为ex.py
# 其他导入方法
# 可以从模块中导入变量ex：
from ex import PI, get_sum

# 包
# 导入包要求：

# 文件夹 foo 在Python的搜索路径中
# __init__.py 表示 foo 是一个包，它可以是个空文件。
```

### file
```
# 删除文件：
import os

os.remove('ex2.py')

# 读文件
# 使用 open 函数或者 file 函数来读文件，使用文件名的字符串作为输入参数：
f = open("test.txt")
f = open("test.txt")
# 这两种方法没太大区别

# 默认以读的方式打开文件，如果文件不存在会报错。
# 可以使用 read 方法来读入文件中的所有内容：
text = f.read()
print(text)

# 按照行读入内容，readlines 方法返回一个列表，每个元素代表文件中每一行的内容：
f = open("test.txt")
lines = f.readlines()
print(lines)
f.close()

# 事实上，我们可以将 f 放在一个循环中，得到它每一行的内容：
f = open('test.txt')
for line in f:
    print(line)
f.close()

# 写文件
# 我们使用 open 函数的写入模式来写文件：
f = open('test.txt', 'w')
f.write('hello world.')
f.close()

print(open('test.txt').read())
# 使用 w 模式时，如果文件不存在会被创建
# 除了写入模式，还有追加模式 a

# 读写模式w+
f = open('test.txt', 'w+')
f.write('hello world. morning.')
f.seek(3)
print(f.read())  # hello world.
f.close()

# 二进制文件
# 二进制读写模式 b：
import os

f = open('binary.bin', 'wb')
f.write(os.urandom(10))
f.close()

f = open('binary.bin', 'rb')
print(repr(f.read()))
f.close()

# with 方法
# 事实上，Python提供了更安全的方法，当 with 块的内容结束后，
# Python会自动调用它的close 方法，确保读写的安全：
with open('newfile.txt', 'w') as f:
    for i in range(3000):
        x = 1.0 / (i - 1000)
        f.write('hello world: ' + str(i) + '\n')

# 与 try/exception/finally 效果相同，但更简单。
```



#### 科学技术
- 科学计算 `numpy`
- 二维图 `plot`

#### 教程
- [python-tutorial](https://github.com/shibing624/python-tutorial)
- [Python进阶](https://github.com/eastlakeside/interpy-zh)
- [Python-100-Days](https://github.com/jackfrued/Python-100-Days)
- [awesome-python](https://github.com/vinta/awesome-python)
- [python36patterns](https://github.com/ydf0509/python36patterns)
- [Effective Python source code](https://github.com/bslatkin/effectivepython)