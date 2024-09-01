(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{911:function(t,a,n){"use strict";n.r(a);var v=n(28),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"先讲如何实现「输入字符但是控件没变化」这个效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先讲如何实现「输入字符但是控件没变化」这个效果"}},[t._v("#")]),t._v(" 先讲如何实现「输入字符但是控件没变化」这个效果")]),t._v(" "),a("p",[t._v("对 HTML 文档中的输入控件（如 input/textarea）执行输入操作时，会触发 input/change 事件（浏览器原生事件）。")]),t._v(" "),a("p",[t._v("倘若在这个事件处理中，移除掉 input 原生控件刚才输入的字符，并且由于页面渲染是在事件循环的尾部阶段，这就会出现：对控件输入了内容，但是页面渲染没出现。")]),t._v(" "),a("p",[t._v("本质上是因为「输入内容、事件触发、控制值修改、浏览器渲染」这个出现在一帧渲染当中。")]),t._v(" "),a("h2",{attrs:{id:"再谈-ui-框架的-input-受控逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再谈-ui-框架的-input-受控逻辑"}},[t._v("#")]),t._v(" 再谈 UI 框架的 input 受控逻辑")]),t._v(" "),a("p",[t._v("根据上面的原理，再看 UI 框架，用户对 input 控件执行输入。")]),t._v(" "),a("p",[t._v("如果是受控，需要给 input 控件赋值 value 。在收到输入事件后，程序需要把收到的值赋给 value ，当然也可以对值做调整。赋值的过程是对虚拟 DOM 做处理，在虚拟 dom 比对完后，发现差异，并对真实的 input 控件赋值。")]),t._v(" "),a("p",[t._v("如果是非受控，不对 input 控件赋值，页面上 input 内容的渲染则与 UI 框架无关。")]),t._v(" "),a("h2",{attrs:{id:"区分跨端框架的双线程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区分跨端框架的双线程模型"}},[t._v("#")]),t._v(" 区分跨端框架的双线程模型")]),t._v(" "),a("p",[t._v("另外需要注意的是，很多跨端框架采用的双线程模型，比如 Lynx、小程序，无法实现真正的受控。")]),t._v(" "),a("p",[t._v("原因是渲染和业务逻辑分属不同线程，如果对输入控件输入内容，会立即对 UI 做出反应。")]),t._v(" "),a("p",[t._v("如果受控会调整输入值，那么新的输入值可能会延后一帧显示，进而导致输入闪屏效果。")])])}),[],!1,null,null,null);a.default=s.exports}}]);