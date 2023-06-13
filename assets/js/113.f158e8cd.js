(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{847:function(s,a,e){"use strict";e.r(a);var t=e(27),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置说明"}},[s._v("#")]),s._v(" 前置说明")]),s._v(" "),a("ul",[a("li",[s._v("操作 dom 的成本比纯计算的成本高很多")])]),s._v(" "),a("h2",{attrs:{id:"传统-diff-算法为什么是-o-n-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统-diff-算法为什么是-o-n-3"}},[s._v("#")]),s._v(" 传统 diff 算法为什么是 O(n^3)")]),s._v(" "),a("p",[s._v("字符串最短编辑距离的计算是 O(n^2) 时间复杂度；采用动态规划，详细可看这个题：https://leetcode-cn.com/problems/edit-distance/")]),s._v(" "),a("p",[s._v("而树的 diff ，也定义了三种操作")]),s._v(" "),a("p",[s._v("增加：增加节点\n修改：修改节点值\n删除：删除节点，若节点存在子节点，？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  a             c\n / \\    =>     / \\\nb   c         d   b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"vue2-的-diff-策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-的-diff-策略"}},[s._v("#")]),s._v(" vue2 的 diff 策略")]),s._v(" "),a("p",[s._v("新旧的前后节点共四个，看是否相等，相等则移动指针，按需移动节点")]),s._v(" "),a("p",[s._v("都不存在相同的，利用预先计算好的索引，快速获知新节点在旧节点的位置。采用原生的增（appendChild）删（removeChild）移（insertBefore）对 dom 进行操作")]),s._v(" "),a("h2",{attrs:{id:"vue3-的-diff-策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-的-diff-策略"}},[s._v("#")]),s._v(" vue3 的 diff 策略")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("a b c d e\n=>\na c e b d\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"最长递增子串优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最长递增子串优化"}},[s._v("#")]),s._v(" 最长递增子串优化")]),s._v(" "),a("p",[s._v("减少移动次数")])])}),[],!1,null,null,null);a.default=n.exports}}]);