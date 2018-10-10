const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
// 自由定义各种设备，可以在调用时遍历循环对象
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
        // 不同设备可以通过emulate模仿，可以遍历device也可以一个个写
        /*
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
        */
        await page.goto('http://www.100tal.com');
        console.log('start /t');
        // 获取页面标题
        let title = await page.title();
        console.log(title);
        console.log('pc截图');
        await timeout(2000);
        await page.screenshot({
            path: spath + title + '.png',
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
        // tap就是手机端的点击操作，pc端还是click，type就是输入
        await page.tap('.btn');
        await page.screenshot({
            path: spath + '2.png'
        });
        console.log("登录");
        await page.tap("#u"); //直接操作dom选择器，是不是很方便
        await page.type("521017853");

        await page.tap("#p");
        await page.type("*********");//这里密码就不展示了哈

        await page.tap("#go");//提交
        // 性能和bug，trace就是chrome 的 devtools，打开浏览器把json上传即可看到。
        await page.tracing.start({path: './trace.json'});
        await timeout(3000);// 延时等待

        await page.screenshot({
            path: spath+'3.png'
        });
        // 结束
        await page.tracing.stop();

        console.log("登录成功");
        // 如果看结果可以不关闭
        // await browser.close();
    })();