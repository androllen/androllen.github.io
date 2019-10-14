---
title: Python基础训练
date: 2016-11-05 14:45:37  
tags: OverView  
categories: Python  
---
# 变量类型  
> int, long, float  
> and or not in is < <= != == | ^ & << + - / % ~ **  
> 本文适用Python3.0以上

a = "aaa"  
b = "bbb"  
c = "ccc"  
final = a + b + c  
print(final)  

number = int(2)   
number += 1  
print(number**2) # ** means ^   
print(number and 1)   
print(number or 1)   
print(not number)

<!--more-->

a ='first'  
b ='second'  
1 and a or b   # 等价于 bool = true时的情况  
print(a)  
0 and a or b   # 等价于 bool = false时的情况  
print(b)  
a =''  
1 and a or b   # a为假时，则出现问题  
print(a)  
> (1 and[a]or[b])[0] # 安全用法，因为[a]不可能为假，至少有一个元素 貌似在python 3.x 以上版本解决了
> print([a][0])  

num = 1   # stored as int type  
num = 1111111111111   # stored as long int type  
num = 1.0   # stored as float type  
num = 1 + 12j # j stands for complex type  
num = '1' # string type 
print("10//3 = ",10 // 3)
print("5**3 = ",5 ** 3)
print("5%3 = ",5 % 3)
print("14/3 = ",14 / 3)
print("=%s" % 12)

charA = 65  
charB = 66  

print("ASCII码65代表：%c" % charA)  
print("ASCII码66代表：%c" % charB)  
Num1 = 0xEF3  
Num2 = 0xAB03  
print('转换成十进制分别为：%u和%u' % (Num1, Num2))  
Num3 = 1200000  
print('转换成科学计数法为：%e' % Num3)  

grocery_list=["a","b","c","d","e"]
other_events=['car','phone','bed','cat','pig','dog']
print("the first one is %s" % grocery_list[0])
print(other_events[3:6])

to_do_list=[grocery_list,other_events]

print(to_do_list)

print(to_do_list[0:1][1:4])
print(to_do_list[1:3])

print(to_do_list[0][0])
print(to_do_list[0][1])
print(to_do_list[0][2])

print(to_do_list[1][0])
print(to_do_list[1][1])
print(to_do_list[1][2])

# 字符串  
quote="\"Always remember you are unique"  
multi_line_quote=''' just   
        like everyone else'''  
new_string=quote+multi_line_quote  
print("%s %s %s" % ('i like ',quote,multi_line_quote))  

name = """sdfsdfsdf
        hello
    python
"""
print(name)

num = "1" # string type  
num = "Let's go" # string type  
num = "He's \"old\"" # string type  
mail = "Xiaoyu: \n hello \n I am you!"  
mail = """Xiaoyu: 
    hello 
    I am you! 
    """ # special string format  
string = 'Xiaoyu' # get value by index  
copy = string[0] + string[1] + string[2:6] # note: [2:6] means [2 5] or[2 6) 
print(copy) 
copy = string[:4] # start from 1  
print(copy) 
copy = string[2:] # to end  
print(copy)
copy = string[::1] # step is 1, from start to end  
print(copy)
copy = string[::2] # step is 2  
print(copy)
copy = string[-1] # means 'u', the last one  
print(copy)
copy = string[::-1] # means 'yoa', -1 step controls direction 
print(copy) 
memAddr = id(num) # id(num) get the memory address of num 
print(memAddr) 
print(type(num)) # get the type of num 

# 字符串 元组 列表类型 基本操作    
> 通过索引下标或者片段 

firstName = 'Liu'  
lastName = 'Xiaoyu'  
print(len(string))  # the length  
name = firstName + lastName # concatenate 2 string  
print(name)  
print(firstName * 3)  # repeat firstName 3 times  
print('Z' in firstName) # check contain or not, return true    
string = '123'  
print(max(string)) # 3  
print(min(string)) # 1  
cmpName=(firstName>lastName)-(firstName<lastName) # cmp  
print(cmpName)  # return 1, -1 or 0   
> tuple(or array? structure? cell?)  
> define this type using ()  

user = ("Xiaoyu", 25, "male")  
name = user[0]   
age = user[1]    
gender = user[2]    
print(name)  
print(age)  
print(gender)  
> t1 = () # empty tuple  
> t2 = (2, ) # when tuple has only one element, we should add a extra comma  
> user[1] = 26 # error!! the elements of tuple can not be changed but list can  

a, b, c = (1, 2, 3)  
print(a)  
print(b)  
print(c)  
