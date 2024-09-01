(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1103:function(t,_,e){"use strict";e.r(_);var v=e(28),a=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"缓存雪崩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),_("p",[t._v("意味着大面积（或全部）缓存失效，直接打到 DB")]),t._v(" "),_("p",[t._v("出现的原因和解决方案：")]),t._v(" "),_("ul",[_("li",[t._v("Redis 的 key 同一刻过期失效：存数据时失效时间加个随机值")]),t._v(" "),_("li",[t._v("Redis 服务故障：高可用处理，集群化，主从+哨兵")])]),t._v(" "),_("h2",{attrs:{id:"缓存穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),_("p",[t._v("意味着就没想走缓存，直接打到 DB 且数据是不存在的。")]),t._v(" "),_("p",[t._v("一般就是恶意请求带着特殊的 key 保证绕过缓存，不断查询空数据给 DB 造成压力")]),t._v(" "),_("p",[t._v("解决方案：")]),t._v(" "),_("ul",[_("li",[t._v("（缓解）：业务侧参数校验：增加一些明显的非法 key 的过滤")]),t._v(" "),_("li",[t._v("（缓解）：ip 限流")]),t._v(" "),_("li",[t._v("布隆过滤器：利用高效的数据结构和算法快速判断 Key 是否在数据库中存在。若判断 key 不存在则一定不存在，此处不做拓展")])]),t._v(" "),_("h2",{attrs:{id:"缓存击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),_("p",[t._v("单点的缓存雪崩")]),t._v(" "),_("p",[t._v("出现原因：热点 key 在某个时刻过期。由于一直在扛着大并发的请求，该热点 key 过期后直接打到数据库")]),t._v(" "),_("p",[t._v("解决方案：")]),t._v(" "),_("ul",[_("li",[t._v("永不过期：缓存不设过期时间，更新数据后直接更新缓存")]),t._v(" "),_("li",[t._v("互斥锁：热点 key 缓存数据过期后，先加锁，去数据库拿数据并写到缓存，再释放锁；其他该热点 key 的请求会等待锁释放，之后直接拿到新缓存。")])]),t._v(" "),_("h2",{attrs:{id:"拓展阅读"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/lQEzWRRg_fP_md_nVjlbUw",target:"_blank",rel:"noopener noreferrer"}},[t._v("吊打面试官：Redis 缓存雪崩、击穿、穿透"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);