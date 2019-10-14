---
title: basic language for c sharp
date: 2016-12-30 00:16:37
tags:
---
#集合 http://www.cnblogs.com/chengxingliang/archive/2011/07/18/2108732.html
为什么在Silverlight中我们更常用ObservableCollection<T>来作为数据集合绑定到控件中，而不是使用List<T>呢？  
当T继承于INotifyPropertyChanged接口的时候，如果T的属性值发生变化时，ObservableCollection和List都能够让前台UI发生相应的改变。但是当增加一个T的数据行时，List不能及时更新前台UI，而ObservableCollection能够将新增的T数据行马上更新到UI上去。
#反射
#依赖
#委托代理
http://www.cnblogs.com/wangshenhe/p/3256657.html
http://zhangxuefei.top/p/69
http://www.cnblogs.com/colder/p/4486116.html
接口不能包含字段
接口是不能实例化的，而字段是必须要分配内存实例化的
接口不可以有字段，只有属性、方法、索引指示器和事件
