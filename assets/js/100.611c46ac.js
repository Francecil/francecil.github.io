(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{427:function(t,v,_){"use strict";_.r(v);var e=_(4),r=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("先说结论，只能将复杂请求改造为简单请求")]),t._v(" "),v("p",[t._v("常见的做法是：")]),t._v(" "),v("ol",[v("li",[t._v("token放原生的请求头：Authorization")]),t._v(" "),v("li",[t._v("Content-Type 改为text/plain 然后后端统一处理")])]),t._v(" "),v("p",[t._v("若无法修改请求，那么可以设置 "),v("code",[t._v("Access-Control-Max-Age")]),t._v(" 响应")]),t._v(" "),v("p",[t._v("每个url的OPTIONS都有一个生命周期，在该时间内不会再次发生。chrome默认是5s")]),t._v(" "),v("p",[t._v("故我们可以通过设置"),v("code",[t._v("Access-Control-Max-Age")]),t._v("来提高周期上限。不过每个浏览器也是有上限的，比如chrome上限是10min。")]),t._v(" "),v("p",[t._v("故此，在10min内 对于 "),v("strong",[t._v("同一请求（完整url相同,参数不同也视为不同url）")]),t._v(" 不会再发第二次OPTIONS。")]),t._v(" "),v("p",[t._v("注意：若设置了 "),v("code",[t._v("disable-cache")]),t._v(" 那么每次复杂请求都会发OPTIONS")]),t._v(" "),v("h2",{attrs:{id:"后记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),v("p",[t._v("写这篇博客的背景是原来有个项目的前后端分离做的不对")]),t._v(" "),v("p",[t._v("前端资源(包括index.html)单独一台服务器，然后访问其他服务器的接口")]),t._v(" "),v("p",[t._v("实际这种应该在前端服务器这边做个转发，避免跨域。或者 index.html 放在后端服务器，其他资源放前端服务器，没有跨域问题")])])}),[],!1,null,null,null);v.default=r.exports}}]);