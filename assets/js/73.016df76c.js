(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{402:function(t,a,r){"use strict";r.r(a);var s=r(4),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"说说-android-屏幕渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说-android-屏幕渲染"}},[t._v("#")]),t._v(" 说说 Android 屏幕渲染")]),t._v(" "),a("p",[t._v("源码开放，容易分析，网上文档也比较多了。")]),t._v(" "),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),a("p",[t._v("首先，系统是按照固定的刷新率获取 buffer 并展示到屏幕上")]),t._v(" "),a("p",[t._v("发布订阅机制：应用启动时会注册屏幕刷新事件，底层每次准备开始渲染，则通知应用")]),t._v(" "),a("p",[t._v("屏幕刷新事件通知到应用后，开始执行 CPU 计算、 GPU 渲染生成 buffer ，显示器取 buffer 展示到屏幕上")]),t._v(" "),a("p",[t._v("每个时刻，系统通知 APP 可以开始")]),t._v(" "),a("p",[t._v("buffer 的生成时机")]),t._v(" "),a("p",[t._v("单个 buffer ？")]),t._v(" "),a("h2",{attrs:{id:"古老的做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#古老的做法"}},[t._v("#")]),t._v(" 古老的做法")]),t._v(" "),a("h1",{attrs:{id:"tmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tmp"}},[t._v("#")]),t._v(" tmp")]),t._v(" "),a("p",[t._v("底层帧率，比较切换 tab ，渲染时间降低了，是指生成 buffer 的间隔降低了")]),t._v(" "),a("h1",{attrs:{id:"headless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headless"}},[t._v("#")]),t._v(" headless")]),t._v(" "),a("p",[t._v("存在 buffer ，但未推到 display")]),t._v(" "),a("h1",{attrs:{id:"浏览器的一帧指的是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的一帧指的是什么"}},[t._v("#")]),t._v(" 浏览器的一帧指的是什么？")]),t._v(" "),a("h1",{attrs:{id:"为什么要有微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有微任务"}},[t._v("#")]),t._v(" 为什么要有微任务")]),t._v(" "),a("p",[t._v("本质还是因为单线程")])])}),[],!1,null,null,null);a.default=e.exports}}]);