(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{891:function(t,r,a){"use strict";a.r(r);var e=a(27),s=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("中断的执行单元? 不是单元内暂停，而是已经执行完了，准备执行下一个执行单元时中断。")]),t._v(" "),r("p",[t._v("每个虚拟dom是一个fiber单元，构成链表")]),t._v(" "),r("p",[t._v("fiber 遍历，为啥采用迭代代替递归？\n需从头恢复，不能随意中断")]),t._v(" "),r("p",[t._v("componentWillMount 这些方法为什么不能用？\n如果执行了副作用，会调用多次，")]),t._v(" "),r("p",[t._v("setState 执行 fiber 链后，")]),t._v(" "),r("p",[t._v("高优任务，放弃原链。")]),t._v(" "),r("h2",{attrs:{id:"两个阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两个阶段"}},[t._v("#")]),t._v(" 两个阶段")]),t._v(" "),r("h2",{attrs:{id:"简单说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单说明"}},[t._v("#")]),t._v(" 简单说明")]),t._v(" "),r("p",[t._v("协调(diff,非连续)，提交")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("ol",[r("li",[t._v("双缓冲机制：2 个 Fiber 树，其中一个为 WIP ，用于处理进行中的 DIFF，并保持和原始 Fiber 树的差异。后续提交阶段直接应用差异更新真实 DOM")]),t._v(" "),r("li",[t._v("中断和恢复：待研究。。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);