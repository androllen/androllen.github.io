---
title: 算法
date: 2024-04-09 20:28:32
tags: 面试
--- 

## 一组不连续的字符串，求最大组的中心点

一组分段数列 "36, 37, 38, 39, 40, 119, 120, 121, 123, 124, 125, 126, 140, 141, 142, 143, 144, 145" ，求最大组中的中心值
第一组 36, 37, 38, 39, 40
第二组 119, 120, 121
第三组 123, 124, 125, 126
第四组 140, 141, 142, 143, 144, 145

``` c#
    public class HLQArray
    {
        public int ID { get; set; }
        public IEnumerable<int> ArrayPos { get; set; }
    }

    public class HLQPos
    {
        public int ID { get; set; }
        public int Pos { get; set; }
    }     
    var arcPos = new List<int>() { 36, 37, 38, 39, 40, 119, 120, 121, 123, 124, 125, 126, 140, 141, 142, 143, 144, 145 };
    var arcPoly = new List<HLQPos>();
    int ad = 0;        

    for (int k = 0; k < arcPos.Count; k++)
    {
        if (k + 1 == arcPos.Count)
        {
            arcPoly.Add(new HLQPos() { ID = ad, Pos = arcPos[k] });
        }
        else
        {
            if (arcPos[k] + 1 == arcPos[k + 1])
            {
                arcPoly.Add(new HLQPos() { ID = ad, Pos = arcPos[k] });

            }
            else
            {
                arcPoly.Add(new HLQPos() { ID = ad, Pos = arcPos[k] });
                ad++;
            }
        }
    }

    var ds = arcPoly.Select(p => p.ID).Distinct().ToList();
    var hlq = new List<HLQArray>();
    foreach (var item in ds)
    {
        var arr = arcPoly.Where(p => p.ID == item).Select(p => p.Pos);
        hlq.Add(new HLQArray() { ID = item, ArrayPos = arr });
    }
    var obj = hlq.OrderBy(p => p.ArrayPos.Count()).LastOrDefault();
    var arc = obj.ArrayPos.ElementAt(obj.ArrayPos.Count() / 2);        
```