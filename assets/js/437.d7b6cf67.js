(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1199:function(t,e,s){"use strict";s.r(e);var r=s(27),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"什么是跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[t._v("#")]),t._v(" 什么是跨域")]),t._v(" "),e("p",[t._v("同源：协议、主机和端口均相同的组合的网站视为 「同源」，否则视为「跨源」（也叫跨域）。")]),t._v(" "),e("blockquote",[e("p",[t._v("详见 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的同源策略"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"区别于同站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别于同站"}},[t._v("#")]),t._v(" 区别于同站")]),t._v(" "),e("p",[t._v("顶级域 (TLD)，例如 "),e("code",[t._v(".com")]),t._v(" 和 "),e("code",[t._v(".org")]),t._v(" ，维护在"),e("a",{attrs:{href:"https://www.iana.org/domains/root/db",target:"_blank",rel:"noopener noreferrer"}},[t._v("根区数据库"),e("OutboundLink")],1),t._v(" 中。")]),t._v(" "),e("p",[t._v("但是对于 "),e("code",[t._v(".com.cn")]),t._v(" 和 "),e("code",[t._v(".github.io")]),t._v(" 等域，仅用 "),e("code",[t._v(".cn")]),t._v(" 或者 "),e("code",[t._v(".io")]),t._v(" 是不足以识别站点的，因此又定义了 eTLD 概念，以上两个域就属于 eTLD。\n可以从"),e("a",{attrs:{href:"https://publicsuffix.org/list/public_suffix_list.dat",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个网站"),e("OutboundLink")],1),t._v("查看 eTLD 列表。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://web-dev.imgix.net/image/admin/oSRJzCJIr4OjGzUhcNDP.png?auto=format&w=1360",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://web-dev.imgix.net/image/admin/qmr35hpnIvpouOe9591g.png?auto=format&w=1390",alt:""}})]),t._v(" "),e("p",[t._v("eTLD+1 相同的网站被视为「同站」，否则称为「跨站」")]),t._v(" "),e("blockquote",[e("p",[t._v("参考"),e("a",{attrs:{href:"https://web.dev/i18n/zh/same-site-same-origin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解“同站”和“同源”"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"解决跨域的几种方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域的几种方案"}},[t._v("#")]),t._v(" 解决跨域的几种方案")]),t._v(" "),e("ol",[e("li",[t._v("cors")]),t._v(" "),e("li",[t._v("jsonp")]),t._v(" "),e("li",[t._v("postMessage")]),t._v(" "),e("li",[t._v("websocket")]),t._v(" "),e("li",[t._v("...")])]),t._v(" "),e("h2",{attrs:{id:"jsonp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" jsonp")]),t._v(" "),e("p",[t._v("比如调用天气接口，正常 ajax 访问跨域url 是不行的，")]),t._v(" "),e("p",[t._v("主要是利用 script 标签可以跨域的原理")]),t._v(" "),e("p",[t._v("我们往 script url 上加上回调函数名和请求参数时")]),t._v(" "),e("blockquote",[e("p",[t._v("回调函数参数是约定值，不一定是 cb 也可以是 callback 看服务端是怎么处理的\n在提供参数后，服务端做了处理，后面返回一个可执行的js代码，一般是把响应结果放入回调函数中\n比如url = xxxx?cb=test&userId=1")])]),t._v(" "),e("p",[t._v("jsonp 可以返回这样一段代码")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("缺点就是只支持 get")]),t._v(" "),e("h2",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" cors")]),t._v(" "),e("p",[t._v("服务端设置 "),e("code",[t._v("Access-Control-Allow-Origin：*")]),t._v(" or "),e("code",[t._v("具体域名")])]),t._v(" "),e("p",[t._v("若要带 cookie （跨域请求接口所在域的 cookie）,需要：")]),t._v(" "),e("ul",[e("li",[t._v("前端设置 xhr.withCredentials = true")]),t._v(" "),e("li",[t._v("后端返回 Access-Control-Allow-Credentials: true")]),t._v(" "),e("li",[e("code",[t._v("Access-Control-Allow-Origin")]),t._v(" 必须为具体域名")])]),t._v(" "),e("h3",{attrs:{id:"简单请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),e("p",[t._v("根据请求方法和请求头字段判断是否为简单请求")]),t._v(" "),e("p",[t._v("简单请求的话浏览器直接发跨域请求，否则的话得看服务端支不支持，会先发个预检请求，")]),t._v(" "),e("blockquote",[e("p",[t._v("带上 Access-Control-Request-Method （实际请求将用的方法）和 Access-Control-Request-Headers（实际请求将带的自定义头部）")])]),t._v(" "),e("p",[t._v("服务端返回自己支持的请求方法和请求头")]),t._v(" "),e("blockquote",[e("p",[t._v("Access-Control-Allow-Methods 和 Access-Control-Allow-Headers\n可以避免多次预检请求")])]),t._v(" "),e("p",[t._v("如果我们发起的请求满足条件的话，则可发起跨域请求")]),t._v(" "),e("p",[t._v("预检请求可以被缓存，下次访问相同请求（包括url参数）时，预检请求还在缓存就不会发起")]),t._v(" "),e("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS")]),t._v(" "),e("h2",{attrs:{id:"postmessage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[t._v("#")]),t._v(" postMessage")]),t._v(" "),e("p",[t._v("允许非同源之间窗口的通信")]),t._v(" "),e("h2",{attrs:{id:"加代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加代理"}},[t._v("#")]),t._v(" 加代理")]),t._v(" "),e("h2",{attrs:{id:"websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" websocket")]),t._v(" "),e("p",[t._v("WebSocket 使用上需要指定访问地址，所以肯定是可以跨域的")])])}),[],!1,null,null,null);e.default=a.exports}}]);