---
title: C# 在线和断点续传  
date: 2017-02-28 00:17:18    
categories: UWP  
tags: 开源  
---

## HttpWebRequest 满足以下几点
>
> * 在线
> * 断点续传
> * 下载进度
> * 后台任务（未完成）
> 在请求之前一定要给Headers 赋值 range 范围，通知服务器从那里开始下载，打开文件从当前文件流开始写入

```c#
public async void simpleDownload(IAsyncResult asynchronousResult)
{
    long currentLength = 0L;
    long totalLength = 0L;//总大小

    HttpWebRequest myHttpWebRequest = (HttpWebRequest)asynchronousResult.AsyncState;
    // Read the response into a Stream object.
    WebResponse response = (HttpWebResponse)myHttpWebRequest.EndGetResponse(asynchronousResult);
    totalLength = response.ContentLength;
    _param.TotalSize = totalLength+currentLength;
    NotifyStateChanged(DownloadState.Downloading, DownloadState.Preparing);

    //选择恰当的流，避免下载图片过程中僵死  
    Stream responseStream = response.GetResponseStream();
    IInputStream inputStream = responseStream.AsInputStream();
    using (var fs = await _StorageFile.OpenStreamForWriteAsync())
    {
        ulong totalBytesRead = 0;
        WeYaLog.Instance.Info("开始下载");
        currentLength = fs.Length;
        WeYaLog.Instance.Info("Range currentLength: " + currentLength.ToString());

        fs.Seek(currentLength, SeekOrigin.Current);

        DateTime now = DateTime.Now;
        StopTimer.Instance.StartRunTime();
        uint numSpeed = 0;
        uint length = 1024;//缓冲，1kb，如果设置的过大，而要下载的文件大小小于这个值，就会出现乱码。
        while (true)
        {
            // Read from the web.  
            //建立字节组，并设置它的大小是多少字节
            IBuffer buffer = new Windows.Storage.Streams.Buffer(length);
            buffer = await inputStream.ReadAsync(buffer, buffer.Capacity, InputStreamOptions.None);
            numSpeed = buffer.Length;

            if (buffer.Length == 0)
            {
                WeYaLog.Instance.Info("下载完成");
                // 完成  
                NotifyStateChanged(DownloadState.Finished, DownloadState.Downloading);
                break;
            }
            // 进度  
            totalBytesRead += buffer.Length;
            double totalMilliseconds = (DateTime.Now - now).TotalMilliseconds;

            if (_cancelDownload)
            {
                WeYaLog.Instance.Info("======准备暂停===========");
                _cancelDownload = false;
                myHttpWebRequest.Abort();
                WeYaLog.Instance.Info("======暂停完成===========");
                break;
            }
            _param.DownloadSize = (long)totalBytesRead;

            if (totalMilliseconds > 100.0)
            {
                _param.Speed = (int)(numSpeed / totalMilliseconds * 1000.0);
                now = DateTime.Now;
                numSpeed = 0;
                DownloadProgress?.Invoke(this, new DownloadEventArgs(SongRid, Parameter));
            }
            numSpeed += length;

            //判断网络
            if (!DeviceUtil.IsNetworkAvailable)
            {
                NotifyStateChanged(DownloadState.NetFailed, DownloadState.Downloading);
                break;
            }
            byte[] nbtye = ConverterUtil.Buffer2Bytes(buffer);
            // 写文件.
            await fs.WriteAsync(nbtye, 0, nbtye.Length);

        }
    }

    if (inputStream != null)
        inputStream.Dispose();
}

private void BeginRequest(string URL, bool isResume)
{
    HttpWebRequest myHttpWebRequest = (HttpWebRequest)WebRequest.Create(new Uri(URL));
    if(isResume)
        myHttpWebRequest.Headers["Range"] = string.Format("bytes={0}-", Parameter.DownloadSize);

    myHttpWebRequest.UseDefaultCredentials = false;
    IAsyncResult result = myHttpWebRequest.BeginGetResponse(RespCallback, myHttpWebRequest);
}
```

另外一个实现：<http://lufred.github.io/2016/05/16/Breakpoint-Continuingly>
