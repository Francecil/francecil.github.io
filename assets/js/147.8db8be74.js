(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{702:function(t,e,r){"use strict";r.r(e);var a=r(4),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("开源库是通用的，对于业务来说，需要定制化")]),t._v(" "),e("h1",{attrs:{id:"优化-chromium-启动项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化-chromium-启动项"}},[t._v("#")]),t._v(" 优化 Chromium 启动项")]),t._v(" "),e("p",[t._v("https://peter.sh/experiments/chromium-command-line-switches/")]),t._v(" "),e("h2",{attrs:{id:"开启缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启缓存"}},[t._v("#")]),t._v(" 开启缓存")]),t._v(" "),e("p",[t._v("--user-data-dir")]),t._v(" "),e("p",[t._v("会耗费磁盘内存")]),t._v(" "),e("h1",{attrs:{id:"优化chromium执行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化chromium执行流程"}},[t._v("#")]),t._v(" 优化Chromium执行流程")]),t._v(" "),e("p",[t._v("请求到达->启动Chromium->打开tab页->运行代码->关闭tab页->关闭Chromium->返回数据")]),t._v(" "),e("p",[t._v("=>")]),t._v(" "),e("p",[t._v("请求到达->连接Chromium->打开tab页->运行代码->关闭tab页->返回数据")]),t._v(" "),e("p",[t._v("官方并不建议这样做，因为一个tab页阻塞或者内存泄露会导致整个浏览器阻塞并Crash。万全的解决办法是定期重启程序，可参考php-fpm的做法，当请求1000次或者内存超过限制后重启对应的进程。")]),t._v(" "),e("h2",{attrs:{id:"使用默认的-page-页面而不是新开页面-减少内存消耗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用默认的-page-页面而不是新开页面-减少内存消耗"}},[t._v("#")]),t._v(" 使用默认的 page 页面而不是新开页面，减少内存消耗")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const page = await browser.newPage();")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" page "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pages")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("收益：")]),t._v(" "),e("p",[t._v("注意事项：")]),t._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.it2048.cn/article-puppeteer-speed-up/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer 性能优化与执行速度提升"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/biaochenxuying/blog/issues/69",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer自动化的性能优化与执行速度提升"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.it2048.cn/article-headless-puppeteer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("无头浏览器性能对比与 Puppeteer 的优化文档"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener noreferrer"}},[t._v("playwright"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://yrq110.me/post/front-end/dive-into-playwright/",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨平台的浏览器自动化工具Playwright简析"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.guowenfh.com/2019/06/16/2019/puppeteer-pool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 generic-pool 优化 puppeteer 并发问题"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5d4059305188255d38489a8c",target:"_blank",rel:"noopener noreferrer"}},[t._v("结合项目来谈谈 Puppeteer"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/nfwyst/Blog/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer 爬虫性能优化"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://aotu.io/notes/2020/05/06/jingxi-automated-testing/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("京喜前端自动化测试之路"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.yuque.com/luqixiuzichiji/nodejs/ces",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用 cluster 优化 Puppeteer"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://yrq110.me/post/front-end/some-tips-of-using-puppetter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("可爱的Puppeteer使用小技巧"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5db97541e51d4529de39f72d",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer优化小技巧"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.infoq.cn/article/dcSBL_9AzCwVPsaQ70dh",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Puppeteer 搭建统一海报渲染服务"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[t._v("https://www.chromium.org/developers/how-tos/run-chromium-with-flags")])])}),[],!1,null,null,null);e.default=n.exports}}]);