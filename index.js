const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
const spath = './snapshoot/'
let timeout = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(1)
            } catch (e) {
                reject(0)
            }
        }, delay);
    })
}
    (async () => {
        const browser = await puppeteer.launch({
            // set timeout
            timeout: 15000,
            // 如果是访问https页面 此属性会忽略https错误
            ignoreHTTPSErrors: true,
            // 就是要debug，肯定打开
            devtools: true,
            // 打开浏览器与否,false打开
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('http://www.100tal.com');
        console.log('start /t');

        await page.emulate(iPhone);//参数可自定义,如下
        let dev_xm5 = {
            'name': 'XiaoMi S5', //设备名
            'userAgent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36', //UA
            'viewport': {
                'width': 360,//屏幕宽度
                'height': 640,//屏幕高度
                'deviceScaleFactor': 3,//缩放比例
                'isMobile': true,//是否是移动设备
                'hasTouch': true,//是否支持touch事件
                'isLandscape': false//
            }
        };

        // 获取页面标题
        let title = await page.title();
        console.log(title);
        console.log('pc截图');
        await timeout(2000);
        await page.screenshot({
            path: spath+title+'.png',
            type: 'png',
            // quality: 100, 只对jpg有效
            fullPage: true,
            // 指定区域截图，clip和fullPage两者只能设置一个
            // clip: {
            //   x: 0,
            //   y: 0,
            //   width: 1000,
            //   height: 40
            // }
        });
        console.log("点击要测试的按钮");
        await page.tap('.');
        await page.screenshot({
            path: spath+'2.png'
        });
        // await browser.close();
    })();