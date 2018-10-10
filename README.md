# APB
Automatic positioning bug

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
