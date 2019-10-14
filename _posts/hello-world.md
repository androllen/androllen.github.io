---
title: Hello World
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)

卸载软件历史记录
1.cmd to regedit 打开注册表定位[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\windows\CurrentVersion\Uninstall]
2.从文件夹里看 DisplayName 属性 直到找到符合你要删除的软件名
3.从文件夹里看 InstallSource 属性，看到有路径，去文件夹里找到这个路径下的文件，如果需要修复或者卸载，卸载软件即可。


动态解析json
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