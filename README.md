# APB
Automatic positioning bug
---
现在的项目需要定位错误和性能上的优化，需要一个能够定位的功能。  
自动化定位问题。包含：按需录屏上报、error事件上报，console.log/info/error代理，unhandledrejection上报，接口(ajax, fetch)异常(error,abort,非200等)上报，性能(perfermence)上报

常见前端的前端的监控方法：  
+ 服务器日志分析
+ 客户端上报
+ 自动化脚本监测

## 前置知识
+ FCP: First Contentful Paint
+ FMP: First Meaningful Paint
+ FI: First Interctive
+ TTI: Time to Interactive
+ CI: Consistently Interactive
+ FPS: requestAnimationFrame


| 级别 | 单位 | 指标 | 计算方法 |
| :---: | :---: | :----: | :---: |
| page | ms | request请求耗时 | requestEnd - requestStart |
| page | ms | 解析dom树耗时 | domComplete - domInteractive |
| page | ms | 白屏时间 | responseStart - navigationStart |
| page | ms | domready时间 | domContentLoadedEventEnd - navigationStart |
| page | ms | onload时间 | LoadedEventEnd - navigationStart |
| page | ms | 首次渲染时间 | performance.getEntriesByType('paint') or performance.getEntriesByType('paint')[0].startTime |
| page | ms | TTI | domInteractive - requestStart |
| page | ms | duration时间 | performance.duration |
| page | ms | fetch duration时间 | fetch start - dataResponse |
| page | ms | onRender, onFirstAjax时间 | 拿到response data时间 - 客户端开始加载webview时间 |

时间取后7位，因头3位基本上就是当天的。


node接收
日志rsyslog，es存储，
由于本应用还是基于puppeteer进行自动化测试，国内安装chromium可能会失败，两种方案
+ 更换国内Chromium源
```
PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org
npm i puppeteer
```
+ 使用cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i puppeteer
```

## 文档
[原文地址](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageclickselector-options)
[中文地址](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Tracing)
## 说明
利用chromium模拟打开浏览器，并访问真实地址，并将dev-tools进行截图保存，出个报告

clickhouse

不同page的performance的代码相关

