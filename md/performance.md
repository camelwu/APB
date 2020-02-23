# Performance API

`Performance` 接口可以获取到当前页面中与性能相关的信息。它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、Navigation Timing API、 User Timing API 和 Resource Timing API。

该类型的对象可以通过调用只读属性 Window.performance 来获得。

> 注意：除了以下指出的情况外，该接口及其成员在 Web Worker 中可用。此外，还需注意，performance 的创建和衡量都是同一环境下的。即，如果你在主线程（或者其他 worker）中创建了一个 performance，那么它在另外的 worker 线程中是不可用的；反之亦然。

---
## 属性

> Performance 接口没有继承任何属性。
#### Performance.navigation 只读  
PerformanceNavigation 对象提供了在指定的时间段里发生的操作相关信息，包括页面是加载还是刷新、发生了多少次重定向等等。Not available in workers.
#### Performance.timing 只读  
PerformanceTiming 对象包含延迟相关的性能信息。Not available in workers.
#### performance.memory 非标准  
其是 Chrome 添加的一个非标准扩展，这个属性提供了一个可以获取到基本内存使用情况的对象。不应该使用这个非标准的 API。
#### Performance.timeOrigin 只读 非标准  
返回性能测量开始时的时间的高精度时间戳。

以上属性头2个可能会被重写，后面两个非标准，所以我们在进行兼容性适配的时候需要非常注意如何`兜底`

## 方法

`Performance.clearMarks()`

将给定的 mark 从浏览器的性能输入缓冲区中移除。

`Performance.clearMeasures()`

将给定的 measure 从浏览器的性能输入缓冲区中移除。

`Performance.clearResourceTimings()`

从浏览器的性能数据缓冲区中移除所有 entryType 是 "resource" 的  performance entries。

`Performance.getEntries()`

基于给定的 filter 返回一个 PerformanceEntry 对象的列表。

`Performance.getEntriesByName()`

基于给定的 name 和 entry type 返回一个 PerformanceEntry 对象的列表。

`Performance.getEntriesByType()`

基于给定的 entry type 返回一个 PerformanceEntry 对象的列表

`Performance.mark()`

根据给出 name 值，在浏览器的性能输入缓冲区中创建一个相关的timestamp

`Performance.measure()`

在浏览器的指定 start mark 和 end mark 间的性能输入缓冲区中创建一个指定的 timestamp

`Performance.now()`

返回一个表示从性能测量时刻开始经过的毫秒数 DOMHighResTimeStamp

`Performance.setResourceTimingBufferSize()`

将浏览器的资源 timing 缓冲区的大小设置为 "resource" type performance entry 对象的指定数量

`Performance.toJSON()`

其是一个 JSON 格式转化器，返回 Performance 对象的 JSON 对象

## 浏览器兼容性

<table class="bc-table bc-table-web"><thead><tr class="bc-platforms"><td></td><th class="bc-platform-desktop" colspan="6"><span>Desktop</span></th><th class="bc-platform-mobile" colspan="6"><span>Mobile</span></th></tr><tr class="bc-browsers"><td></td><th class="bc-browser-chrome"><span class="bc-head-txt-label bc-head-icon-chrome">Chrome</span></th><th class="bc-browser-edge"><span class="bc-head-txt-label bc-head-icon-edge">Edge</span></th><th class="bc-browser-firefox"><span class="bc-head-txt-label bc-head-icon-firefox">Firefox</span></th><th class="bc-browser-ie"><span class="bc-head-txt-label bc-head-icon-ie">Internet Explorer</span></th><th class="bc-browser-opera"><span class="bc-head-txt-label bc-head-icon-opera">Opera</span></th><th class="bc-browser-safari"><span class="bc-head-txt-label bc-head-icon-safari">Safari</span></th><th class="bc-browser-webview_android"><span class="bc-head-txt-label bc-head-icon-webview_android">Android webview</span></th><th class="bc-browser-chrome_android"><span class="bc-head-txt-label bc-head-icon-chrome_android">Chrome for Android</span></th><th class="bc-browser-firefox_android"><span class="bc-head-txt-label bc-head-icon-firefox_android">Firefox for Android</span></th><th class="bc-browser-opera_android"><span class="bc-head-txt-label bc-head-icon-opera_android">Opera for Android</span></th><th class="bc-browser-safari_ios"><span class="bc-head-txt-label bc-head-icon-safari_ios">Safari on iOS</span></th><th class="bc-browser-samsunginternet_android"><span class="bc-head-txt-label bc-head-icon-samsunginternet_android">Samsung Internet</span></th></tr></thead><tbody><tr><th scope="row"><code>Performance</code></th><td class="bc-supports-yes bc-browser-chrome"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              6</td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              8</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              18</td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              14</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.0</td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/clearMarks"><code>clearMarks</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-1"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-1"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 29<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              41</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-2"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-2"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 29<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              42</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-3"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              2.0<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-3"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              2.0<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 2.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/clearMeasures"><code>clearMeasures</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-4"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-4"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 29<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              41</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-5"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-5"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              29<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 29<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              42</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-6"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              2.0<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-6"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              2.0<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 2.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/clearResourceTimings"><code>clearResourceTimings</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-7"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-7"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>22&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android bc-has-history" aria-expanded="false" aria-controls="bc-history-8"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-8"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>?&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-9"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-9"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-10"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-10"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 7.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/getEntries"><code>getEntries</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-11"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-11"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 36<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-12"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-12"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 36<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              25</td><td class="bc-supports-no bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-13"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-13"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 3.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/getEntriesByName"><code>getEntriesByName</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-14"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-14"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 36<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-15"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-15"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 36<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              25</td><td class="bc-supports-no bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-16"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-16"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 3.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/getEntriesByType"><code>getEntriesByType</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-17"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-17"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 36<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera bc-has-history" aria-expanded="false" aria-controls="bc-history-18"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-18"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>15&nbsp;— 23<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-19"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-19"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 36<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              25</td><td class="bc-supports-yes bc-browser-opera_android bc-has-history" aria-expanded="false" aria-controls="bc-history-20"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-20"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>14&nbsp;— 24<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-21"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-21"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 3.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/mark"><code>mark</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-22"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-22"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 28<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              41</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-23"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-23"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 28<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              42</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-24"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-24"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>?&nbsp;— ?<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/measure"><code>measure</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-25"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-25"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 28<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              41</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46</td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-26"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-26"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              28<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 28<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              42</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              33</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-27"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-27"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>?&nbsp;— ?<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a class="new" rel="nofollow" title="该页面尚未创建。"><code>memory</code></a> <div class="bc-icons"><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard</span><i class="ic-non-standard"></i></abbr></div></th><td class="bc-supports-yes bc-browser-chrome"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-unknown bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-no bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-unknown bc-browser-ie"><span class="bc-browser-name">IE</span><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              18</td><td class="bc-supports-no bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.0</td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/navigation"><code>navigation</code></a> <div class="bc-icons"><abbr class="only-icon" title="Deprecated. Not for use in new websites."><span>Deprecated</span><i class="ic-deprecated"></i></abbr></div></th><td class="bc-supports-yes bc-browser-chrome"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10</td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              8</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              18</td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-no bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.0</td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/now"><code>now</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-28"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              24<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-28"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              24<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>21&nbsp;— 24<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox bc-has-history" aria-expanded="false" aria-controls="bc-history-29"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-29"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div></dt><dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> In Firefox 57.0.4 the accuracy was reduced to 20 microseconds.</dd><dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> In Firefox 59 the accuracy was reduced to 2 milliseconds.</dd><dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> In Firefox 60 the accuracy was increased to 1 millisecond.</dd></dl></section></td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              8</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              25</td><td class="bc-supports-yes bc-browser-firefox_android bc-has-history" aria-expanded="false" aria-controls="bc-history-30"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-30"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div></dt><dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> In Firefox 57.0.4 the accuracy was reduced to 20 microseconds.</dd><dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> In Firefox 59 the accuracy was reduced to 2 milliseconds.</dd><dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> In Firefox 60 the accuracy was increased to 1 millisecond.</dd></dl></section></td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              14</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.5</td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/onresourcetimingbufferfull"><code>onresourcetimingbufferfull</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-31"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-31"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>22&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code></dd></dl></section></td><td class="bc-supports-unknown bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-no bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android bc-has-history" aria-expanded="false" aria-controls="bc-history-32"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-32"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>?&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code></dd></dl></section></td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-33"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-33"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code></dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-34"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-34"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 7.0<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>onwebkitresourcetimingbufferfull</code></dd></dl></section></td></tr><tr><th scope="row"><a class="new" rel="nofollow" title="该页面尚未创建。"><code>resourcetimingbufferfull</code> event</a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-35"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-35"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>22&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>webkitresourcetimingbufferfull</code></dd></dl></section></td><td class="bc-supports-unknown bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-no bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android bc-has-history" aria-expanded="false" aria-controls="bc-history-36"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-36"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>?&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>webkitresourcetimingbufferfull</code></dd></dl></section></td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-37"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-37"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>webkitresourcetimingbufferfull</code></dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-38"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-38"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 7.0<div class="bc-icons"><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Uses the non-standard name: <code>webkitresourcetimingbufferfull</code>"><span>Alternate Name</span><i class="ic-altname"></i></abbr> Uses the non-standard name: <code>webkitresourcetimingbufferfull</code></dd></dl></section></td></tr><tr><th scope="row"><a class="new" rel="nofollow" title="该页面尚未创建。"><code>setResourceTimingBufferSize</code></a></th><td class="bc-supports-yes bc-browser-chrome bc-has-history" aria-expanded="false" aria-controls="bc-history-39"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-39"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>22&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              11</td><td class="bc-supports-yes bc-browser-webview_android bc-has-history" aria-expanded="false" aria-controls="bc-history-40"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-40"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>?&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-chrome_android bc-has-history" aria-expanded="false" aria-controls="bc-history-41"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-41"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>25&nbsp;— 57<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-no bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-samsunginternet_android bc-has-history" aria-expanded="false" aria-controls="bc-history-42"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div><button title="打开实现笔记" class="bc-history-link only-icon" tabindex="0"><span>打开</span><i class="ic-history" aria-hidden="true"></i></button><section class="bc-history" id="bc-history-42"><dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              5.0<div class="bc-icons"></div></dt><dd></dd><dt class="bc-supports-no bc-supports"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>1.5&nbsp;— 7.0<div class="bc-icons"><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt><dd><abbr class="only-icon" title="Implemented with the vendor prefix: webkit"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Implemented with the vendor prefix: webkit</dd></dl></section></td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/timeOrigin"><code>timeOrigin</code></a> <div class="bc-icons"><abbr class="only-icon" title="Experimental. Expect behavior to change in the future."><span>Experimental</span><i class="ic-experimental"></i></abbr></div></th><td class="bc-supports-yes bc-browser-chrome"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              62</td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              16</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              53</td><td class="bc-supports-unknown bc-browser-ie"><span class="bc-browser-name">IE</span><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              49</td><td class="bc-supports-no bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              62</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              62</td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              53</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              46</td><td class="bc-supports-no bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              8.0</td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/timing"><code>timing</code></a> <div class="bc-icons"><abbr class="only-icon" title="Deprecated. Not for use in new websites."><span>Deprecated</span><i class="ic-deprecated"></i></abbr></div></th><td class="bc-supports-yes bc-browser-chrome"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              6</td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-yes bc-browser-ie"><span class="bc-browser-name">IE</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              15</td><td class="bc-supports-yes bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              8</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              18</td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              7</td><td class="bc-supports-yes bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              14</td><td class="bc-supports-yes bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              1.0</td></tr><tr><th scope="row"><a href="/zh-CN/docs/Web/API/Performance/toJSON"><code>toJSON</code></a></th><td class="bc-supports-yes bc-browser-chrome"><span class="bc-browser-name">Chrome</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              56</td><td class="bc-supports-yes bc-browser-edge"><span class="bc-browser-name">Edge</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              12</td><td class="bc-supports-yes bc-browser-firefox"><span class="bc-browser-name">Firefox</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              25</td><td class="bc-supports-unknown bc-browser-ie"><span class="bc-browser-name">IE</span><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td><td class="bc-supports-no bc-browser-opera"><span class="bc-browser-name">Opera</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-no bc-browser-safari"><span class="bc-browser-name">Safari</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-webview_android"><span class="bc-browser-name">WebView Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              56</td><td class="bc-supports-yes bc-browser-chrome_android"><span class="bc-browser-name">Chrome Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              56</td><td class="bc-supports-yes bc-browser-firefox_android"><span class="bc-browser-name">Firefox Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              25</td><td class="bc-supports-no bc-browser-opera_android"><span class="bc-browser-name">Opera Android</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-no bc-browser-safari_ios"><span class="bc-browser-name">Safari iOS</span><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr>
              No</td><td class="bc-supports-yes bc-browser-samsunginternet_android"><span class="bc-browser-name">Samsung Internet Android</span><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              6.0</td></tr></tbody></table>



Performance API用于精确度量、控制、增强浏览器的性能表现。这个API为测量网站性能，提供以前没有办法做到的精度。

比如，为了得到脚本运行的准确耗时，需要一个高精度时间戳。传统的做法是使用Date对象的getTime方法。