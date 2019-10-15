---
title: 动态解析json 
date: 2016-11-02 14:45:27  
tags:  json
categories: json  
---


``` c#
          StorageFile file = await FileUtil.GetFileApp("ms-appx:///Assets/CityCode_CN.txt");
            using (IRandomAccessStream fileStream = await file.OpenAsync(FileAccessMode.Read))
            {
                var size = fileStream.Size;
                DataReader dataReader = new DataReader(fileStream);
                uint uintBytes = await dataReader.LoadAsync((uint)size);
                string text = dataReader.ReadString(uintBytes);
                string[] date = text.Split(',');

                JObject json = JObject.Parse(text);
                var item = json.GetEnumerator();
                List<Countrys> listCountrys = new List<Countrys>();
                while (item.MoveNext())
                {
                    Countrys countrys = new Countrys();
                    var key = item.Current;
                    countrys.ID =  int.Parse(key.Key);
                    Country country = new Country();
                    country.country = key.Value["country"].ToString();
                    countrys.Country = country;
                    listCountrys.Add(countrys);

                    if (key.Value["provinces"] == null)
                        continue;

                    List<Province> listPro = new List<Province>();
                    var child = key.Value["provinces"] as JObject;
                    var childs = child.GetEnumerator();
                    while (childs.MoveNext())
                    {
                        Province pro = new Province();
                        var jo = childs.Current;
                        pro.ID = int.Parse(jo.Key);
                        pro.provinces = jo.Value["province"].ToString();
                        listPro.Add(pro);
                    }

                    country.provinces = listPro;

                }

                System.Diagnostics.Debug.WriteLine("ok");
```