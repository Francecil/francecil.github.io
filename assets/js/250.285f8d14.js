(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1004:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"软键盘显示搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软键盘显示搜索"}},[t._v("#")]),t._v(" 软键盘显示搜索")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Input")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autoFocus")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{true}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prefixIcon")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search-input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("可搜索图文标题关键词或作者名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("input type 为 search")]),t._v(" "),a("p",[t._v("ios 需要用 form 包裹")]),t._v(" "),a("p",[t._v("~监听 keyPress 事件， keycode 13 即按下搜索~")]),t._v(" "),a("blockquote",[a("p",[t._v("监听这个事件没用， keycode 各个键盘不一致")])]),t._v(" "),a("p",[t._v("需要监听 form 的 submit 的事件")]),t._v(" "),a("p",[t._v("注意提交默认会产生页面刷新，需要禁用默认事件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h1",{attrs:{id:"h5软键盘顶起问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5软键盘顶起问题"}},[t._v("#")]),t._v(" H5软键盘顶起问题")]),t._v(" "),a("blockquote",[a("p",[t._v("历史方案：fixed 布局冻结 + 顶起")])]),t._v(" "),a("p",[t._v("目前浏览器新增了虚拟键盘 api，提供了自行控制展现的能力，但需要关注下兼容性")]),t._v(" "),a("h1",{attrs:{id:"滚动穿透问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动穿透问题"}},[t._v("#")]),t._v(" 滚动穿透问题")]),t._v(" "),a("blockquote",[a("p",[t._v("开源方案：https://github.com/tuateam/tua-body-scroll-lock/")])]),t._v(" "),a("ul",[a("li",[t._v("iOS 主要是利用对 touchmove 进行 preventDefault，而后模拟滚动。")]),t._v(" "),a("li",[t._v("Android 主要是对 html 设置 overflow、对 body 设置 fixed 等样式限制。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);