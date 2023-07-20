(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1212:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("目前有个需求是网站提供一个安装包，安装后在桌面提供一个快捷方式，点击快捷方式能够跳到本网站，除了多平台支持外，另一个述求是安装包尽可能的小。")]),t._v(" "),s("h2",{attrs:{id:"pkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pkg"}},[t._v("#")]),t._v(" pkg")]),t._v(" "),s("p",[t._v("作为一个前端最先想到的是 nodejs 解法，找到了一个 npm 包能够打包 js 成 exe （以及其他平台可执行程序）")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/pkg",target:"_blank",rel:"noopener noreferrer"}},[t._v("pkg"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("代码也很简单")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" open "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("打包脚本")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pkg "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--target")]),t._v(" macos --out-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dist/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" package.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("pkg 的原理是拉了各个平台的 nodejs 环境，所以打包完执行程序要 50+M")]),t._v(" "),s("p",[t._v("并且实现的是可执行程序，不是安装包")]),t._v(" "),s("p",[t._v("优点就是跨平台")]),t._v(" "),s("p",[t._v("注意：下载有问题的可以看这个 https://github.com/vercel/pkg/issues/419 ，可能需要开全局代理fq解决")]),t._v(" "),s("h2",{attrs:{id:"electron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[t._v("#")]),t._v(" Electron")]),t._v(" "),s("p",[t._v("这个就不用介绍了，跨平台开发方案首选")]),t._v(" "),s("p",[t._v("不过缺点一样是打的包太大了")]),t._v(" "),s("h2",{attrs:{id:"webloc-修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webloc-修改"}},[t._v("#")]),t._v(" webloc 修改")]),t._v(" "),s("p",[t._v("macOS 本地修改快捷方式，详见")]),t._v(" "),s("p",[t._v("http://blog.sina.com.cn/s/blog_46577ccc0102w2js.html")]),t._v(" "),s("p",[t._v("只是本地看着舒服，实际没什么用")]),t._v(" "),s("h2",{attrs:{id:"各自平台处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各自平台处理"}},[t._v("#")]),t._v(" 各自平台处理")]),t._v(" "),s("p",[t._v("最后还是选择了这种方案， window 利用 .Net 方案进行开发，最后安装包仅几百 KB")]),t._v(" "),s("p",[t._v("其他平台有待研究")])])}),[],!1,null,null,null);s.default=e.exports}}]);