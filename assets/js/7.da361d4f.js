(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1083:function(t,r,n){"use strict";n.r(r);var e=n(27),_=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP 理论"),r("OutboundLink")],1),t._v("指出在分布式系统中，不可能同时满足以下三点：一致性(Consistency) 、可用性(Avaliability) 、分区容错性(Partition tolerance)。")]),t._v(" "),r("p",[r("img",{attrs:{src:n(743),alt:"Alt text"}})]),t._v(" "),r("p",[t._v("要理解 CAP ，首先要知道节点和分区的概念：")]),t._v(" "),r("blockquote",[r("p",[t._v("在分布式系统中，每个服务称之为节点，用于存放数据或处理数据，节点间的通信形成一个节点网络。\n节点网络本应互通，但因为一些故障（网络或机器原因），导致某些节点无法连通，网络将被分割为几块区域。数据散落在这些不连通的区域，形成分区。")])]),t._v(" "),r("p",[r("img",{attrs:{src:n(744),alt:"Alt text"}})]),t._v(" "),r("p",[t._v("如果数据仅在一个节点中保存，那么出现分区后，和这个节点不连通的其他分区将无法访问此节点数据，此时分区是"),r("strong",[t._v("不可容忍")]),t._v("的。\n但若把数据复制到多个节点，保证每个分区都有这个数据，那么此时分区就是"),r("strong",[t._v("容错")]),t._v("的。")]),t._v(" "),r("p",[r("img",{attrs:{src:n(745),alt:"Alt text"}})]),t._v(" "),r("p",[t._v("但是，将数据复制到多个节点将带来"),r("strong",[t._v("一致性")]),t._v("的问题。比如 A1 修改了 B1 的数据，此时 A2 读取 B2 数据时会出现不一致。要"),r("strong",[t._v("保证数据一致性")]),t._v("，需要每次写操作的时候保证所有节点写入成功，在此之前的读操作需要等待。")]),t._v(" "),r("p",[t._v("但这又会引入"),r("strong",[t._v("可用性")]),t._v("的问题，等待时长越长，可用性越低 "),r("strong",[t._v("（")]),t._v(" "),r("strong",[t._v("CP")]),t._v(" "),r("strong",[t._v("系统）")]),t._v(" 。要想实现"),r("strong",[t._v("可用性")]),t._v("，就不能等待，直接获取节点数据，但这就丧失了"),r("strong",[t._v("一致性（")]),t._v(" "),r("strong",[t._v("AP")]),t._v(" "),r("strong",[t._v("系统）")]),t._v(" 。")]),t._v(" "),r("p",[t._v("如果既想"),r("strong",[t._v("可用性")]),t._v("，又想"),r("strong",[t._v("一致性")]),t._v("，那就保证节点仅存在一个分区，退化为单机系统，但这就丧失了分区容错性 "),r("strong",[t._v("（AC 系统）")]),t._v(" 。")]),t._v(" "),r("p",[t._v("因此，重新给 CAP 的每一项做下定义：")]),t._v(" "),r("ul",[r("li",[t._v("一致性(Consistency) ：每次请求都能拿到同一份最新的数据，同时为了一致性允许请求失败。")]),t._v(" "),r("li",[t._v("可用性(Avaliability)：每次请求都能得到应答，但是不保证获取的数据为最新数据。")]),t._v(" "),r("li",[t._v("分区容错性(Partition tolerance)：通过复制节点数据到各个分区，避免故障导致节点数据无法访问。")])]),t._v(" "),r("p",[r("strong",[t._v("一句话总结")]),t._v("：数据存在的节点越多，分区容错性越高。但数据更新时要变更的节点也越多，一致性就很难保证。为了保证一致性，等待所有节点更新完成的时间就越长，可用性就越差。")]),t._v(" "),r("h2",{attrs:{id:"拓展阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.zhihu.com/question/54105974/answer/139037688",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP理论中的P到底是个什么意思？ - 邬江的回答 - 知乎"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.zhihu.com/question/54105974/answer/1643846752",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP理论中的P到底是个什么意思？ - 四猿外的回答 - 知乎"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33999708",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈分布式系统的CAP理论 - 知乎"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=_.exports},743:function(t,r,n){t.exports=n.p+"assets/img/image-13.5cf9c405.png"},744:function(t,r,n){t.exports=n.p+"assets/img/image-14.5298424e.png"},745:function(t,r,n){t.exports=n.p+"assets/img/image-15.4dbed375.png"}}]);