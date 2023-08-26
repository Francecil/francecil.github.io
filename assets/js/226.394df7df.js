(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{979:function(v,_,t){"use strict";t.r(_);var r=t(27),e=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("本文将介绍 Hybrid App 离线包的通用方案，并讨论 "),_("strong",[v._v("HTML")]),v._v(" "),_("strong",[v._v("文件放入离线包的利弊")]),v._v("。通过引入 CAP 理论作为指导准则，帮助优化和抉择离线包的一致性和可用性问题。")])]),v._v(" "),_("p",[v._v("弱网情况下，用户如何快速打开 H5 页面？最好使的就是"),_("strong",[v._v("离线包方案")]),v._v("，将 H5 的资源提前下载（或内置）到 App 中，加载资源时通过 App 内部的请求拦截机制转发本地资源，避免网络请求。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/896f4fb90a094a5f95cf469035fb5e92~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),v._v(" "),_("p",[v._v("通过离线包方案，可以优化 "),_("strong",[v._v("「资源加载」")]),v._v(" 这个环节的耗时，降低白屏时间（仅剩资源解析和本地 I/O 耗时，不再受弱网限制，阶段耗时一般不超过 100ms）。")]),v._v(" "),_("p",[v._v("而要完整地实施离线包方案，还需要考虑"),_("strong",[v._v("更新策略、动态差分、签名校验")]),v._v("等细节，这不是本文的重点，对具体方案感兴趣的可以看这篇"),_("a",{attrs:{href:"https://github.com/mcuking/blog/issues/63",target:"_blank",rel:"noopener noreferrer"}},[v._v("文章"),_("OutboundLink")],1),v._v("，其中提供了一些开箱即用的工具。")]),v._v(" "),_("p",[v._v("接下来将讨论本文的主题：HTML 文档离线策略。")]),v._v(" "),_("h1",{attrs:{id:"html-文档离线策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html-文档离线策略"}},[v._v("#")]),v._v(" HTML 文档离线策略")]),v._v(" "),_("p",[v._v("为了方便理解离线包的作用，上文把 HTML 文档及其他资源的加载放到一起，统称 "),_("strong",[v._v("「资源加载」")]),v._v("。")]),v._v(" "),_("p",[v._v("但在实际场景，将 HTML 文档放入离线包，可能会存在问题。举个例子方便阐述：")]),v._v(" "),_("blockquote",[_("p",[v._v("某业务的离线包更新策略是在 App 启动时，以及每小时定时更新。")]),v._v(" "),_("p",[v._v("在此之外，即使线上离线包更新，用户也是访问的本地离线包资源。")]),v._v(" "),_("p",[v._v("这是因为 Webview 并不知道线上离线包已经更新，还是拦截了 HTML 请求并返回本地离线 HTML 文档。由于该 HTML 文档中的资源 hash 和本地离线包的一致，因此所有资源都将走离线包。")]),v._v(" "),_("p",[v._v("这时，发现前端页面存在一个重大 bug ，且将离线包推给了用户。")]),v._v(" "),_("p",[v._v("前端紧急回滚（重新发了一个离线包），用户也只能重新启动 App 或者等待每小时的轮询更新，才能访问到正常的离线包页面。。")])]),v._v(" "),_("p",[v._v("总的来说，将 HTML 文档放入离线包，将导致页面无法及时更新。如果前端页面存在故障紧急回滚，也会有滞后性。")]),v._v(" "),_("blockquote",[_("p",[v._v("为方便讨论，本节所聊离线化方案"),_("strong",[v._v("不带其他优化策略")]),v._v("，后面章节会进行讨论。")])]),v._v(" "),_("p",[v._v("那把 HTML 文档移除离线包，仅缓存其他资源呢？可以解决这个问题，但是会引入两个新的问题：")]),v._v(" "),_("ul",[_("li",[v._v("每次都需要下载 HTML 文档，导致白屏时间变长，离线化效果不好。")]),v._v(" "),_("li",[v._v("HTML 文档更新期间，本地离线包会失效。\n"),_("ul",[_("li",[_("blockquote",[_("p",[v._v("因为 HTML 文档和其他资源拆开，必将导致资源更新时机的不一致性。包括「 HTML 文档先上线、离线包后更新」以及「HTML 文档后上线，离线包先更新」，都无法命中本地离线包。")])])])])])]),v._v(" "),_("p",[v._v("于是，在关于 HTML 文档是否应该离线的问题上，出现了两种决策：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("离线（缓存优先）：更好的性能，但更新不及时")])]),v._v(" "),_("li",[_("strong",[v._v("不离线（网络优先）：实时更新，但性能较差，可能会加载失败")])])]),v._v(" "),_("p",[v._v("那有什么方案，能够完全的离线化，并实时更新？")]),v._v(" "),_("p",[v._v("下面要介绍的 CAP 理论，将回答这个问题。理论上这是无法做到的，"),_("strong",[v._v("完全离线（可用性）和实时更新（一致性）只能选择其中一个")]),v._v("，并尽可能的优化另一个。")]),v._v(" "),_("h1",{attrs:{id:"cap-理论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论"}},[v._v("#")]),v._v(" CAP 理论")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[v._v("CAP 理论"),_("OutboundLink")],1),v._v("指出在分布式系统中，不可能同时满足以下三点：一致性(Consistency) 、可用性(Avaliability) 、分区容错性(Partition tolerance)。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e3c199531674441a9d6c54743476234~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),v._v(" "),_("p",[v._v("要理解 CAP ，首先要知道节点和分区的概念：")]),v._v(" "),_("blockquote",[_("p",[v._v("在分布式系统中，每个服务称之为节点，用于存放数据或处理数据，节点间的通信形成一个节点网络。")]),v._v(" "),_("p",[v._v("节点网络本应互通，但因为一些故障（网络或机器原因），导致某些节点无法连通，网络将被分割为几块区域。数据散落在这些不连通的区域，形成分区。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d93eb7d9ac04439b9b2be21774f61fd6~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),v._v(" "),_("p",[v._v("如果数据仅在一个节点中保存，那么出现分区后，和这个节点不连通的其他分区将无法访问此节点数据，此时分区是"),_("strong",[v._v("不可容忍")]),v._v("的。")]),v._v(" "),_("p",[v._v("若把数据复制到多个节点，保证每个分区都有这个数据，那么此时分区就是"),_("strong",[v._v("容错")]),v._v("的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/629defb293314cf984b8b1496aa14f85~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),v._v(" "),_("p",[v._v("但是，将数据复制到多个节点将带来"),_("strong",[v._v("一致性")]),v._v("的问题。比如 A1 修改了 B1 的数据，此时 A2 读取 B2 数据时会出现不一致。要"),_("strong",[v._v("保证数据一致性")]),v._v("，需要每次写操作的时候保证所有节点写入成功，在此之前的读操作需要等待。")]),v._v(" "),_("p",[v._v("但这又会引入"),_("strong",[v._v("可用性")]),v._v("的问题，等待时长越长，可用性越低 "),_("strong",[v._v("（")]),v._v(" "),_("strong",[v._v("CP")]),v._v(" "),_("strong",[v._v("系统）")]),v._v(" 。要想实现"),_("strong",[v._v("可用性")]),v._v("，就不能等待，直接获取节点数据，但这就丧失了"),_("strong",[v._v("一致性（")]),v._v(" "),_("strong",[v._v("AP")]),v._v(" "),_("strong",[v._v("系统）")]),v._v(" 。")]),v._v(" "),_("p",[v._v("如果既想"),_("strong",[v._v("可用性")]),v._v("，又想"),_("strong",[v._v("一致性")]),v._v("，那就保证节点仅存在一个分区，退化为单机系统，但这就丧失了分区容错性 "),_("strong",[v._v("（AC 系统）")]),v._v(" 。")]),v._v(" "),_("p",[v._v("因此，重新给 CAP 的每一项做下定义：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("一致性(Consistency)")]),v._v(" ：每次请求都能拿到同一份最新的数据，同时为了一致性允许请求失败。")]),v._v(" "),_("li",[_("strong",[v._v("可用性(Avaliability)")]),v._v(" ：每次请求都能得到应答，但是不保证获取的数据为最新数据。")]),v._v(" "),_("li",[_("strong",[v._v("分区容错性(Partition tolerance)")]),v._v(" ：通过复制节点数据到各个分区，避免故障导致节点数据无法访问。")])]),v._v(" "),_("p",[_("strong",[v._v("一句话总结")]),v._v("：数据存在的节点越多，"),_("code",[v._v("分区容错性")]),v._v("越高。但数据更新时要变更的节点也越多，"),_("code",[v._v("一致性")]),v._v("就很难保证。为了保证一致性，等待所有节点更新完成的时间就越长，"),_("code",[v._v("可用性")]),v._v("就越差。")]),v._v(" "),_("h1",{attrs:{id:"cap-理论解释离线化系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论解释离线化系统"}},[v._v("#")]),v._v(" CAP 理论解释离线化系统")]),v._v(" "),_("p",[v._v("从"),_("strong",[v._v("广义")]),v._v("上来说，离线化系统也是一个分布式系统，它也有数据、节点、分区的概念。")]),v._v(" "),_("ul",[_("li",[v._v("数据：HTML 文档、页面资源。")]),v._v(" "),_("li",[v._v("节点：HTML 提供方、页面资源提供方。它们存在于本地服务和在线服务，可以对这些节点进行"),_("strong",[v._v("数据")]),v._v("读写。")]),v._v(" "),_("li",[v._v("分区：离线分区、在线分区。")]),v._v(" "),_("li",[v._v("一致性（C）：离线分区的 HTML 文档同在线分区一致。")]),v._v(" "),_("li",[v._v("可用性（A）：允许客户端加载非最新的 HTML 文档数据，但是必须保证稳定加载。")])]),v._v(" "),_("p",[v._v("打开页面到加载资源，涉及节点数据请求，相当于分布式系统之间的通信。")]),v._v(" "),_("p",[v._v("以 HTML 文档不离线为例，节点根据网络状态可以划分为两个分区：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4060f92e57244a7bbf9003457b4bea61~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),v._v(" "),_("p",[_("strong",[v._v("假设此时用户出现网络问题")]),v._v("，那么将无法访问"),_("code",[v._v("在线分区")]),v._v("的 HTML 节点（分区不可容忍）。")]),v._v(" "),_("p",[v._v("要提高"),_("code",[v._v("分区容错性")]),v._v("，就需要将 HTML 数据也存一份到离线包（分区）中。")]),v._v(" "),_("p",[v._v("但这会引入"),_("code",[v._v("一致性")]),v._v("问题，若研发修改了"),_("code",[v._v("在线分区")]),v._v(" 的 HTML 文档内容，此时用户读取的"),_("code",[v._v("离线分区")]),v._v(" HTML 文档可能还是旧数据。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbe2b1ecbc0f4348af49c2e83f0ce194~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),v._v(" "),_("p",[v._v("若想保证"),_("code",[v._v("一致性")]),v._v("，需要等待离线 HTML 文档完全写入，或者直接访问在线服务（抛弃"),_("code",[v._v("分区容错性")]),v._v("，页面加载失败也属于"),_("code",[v._v("一致性")]),v._v("）。这些行为都存在时延，会出现"),_("code",[v._v("可用性")]),v._v(" 问题。")]),v._v(" "),_("p",[v._v("重新整理一下，得到以下几种策略：")]),v._v(" "),_("ul",[_("li",[v._v("C（一致性）：仅网络加载 HTML 文档")]),v._v(" "),_("li",[v._v("AP（可用性+分区容错性）：优先使用 HTML 文档离线缓存")]),v._v(" "),_("li",[v._v("CP（一致性+分区容错性）：优先网络加载 HTML 文档，若失败再使用本地离线缓存")])]),v._v(" "),_("h1",{attrs:{id:"cap-理论指导离线策略优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cap-理论指导离线策略优化"}},[v._v("#")]),v._v(" CAP 理论指导离线策略优化")]),v._v(" "),_("p",[v._v("有了 CAP 理论的加持，我们已经知道离线化系统无法同时满足一致性和可用性，换句话说，无法实时更新的同时完全离线化。")]),v._v(" "),_("p",[v._v("那么可以得到如下两个优化方向：")]),v._v(" "),_("ol",[_("li",[v._v("保证一致性（实时更新），提高可用性（优化加载）。")]),v._v(" "),_("li",[v._v("保证可用性（完全离线），提高一致性（及时更新）。")])]),v._v(" "),_("h2",{attrs:{id:"提高可用性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提高可用性"}},[v._v("#")]),v._v(" 提高可用性")]),v._v(" "),_("p",[v._v("提高可用性意味着"),_("strong",[v._v("优化加载")]),v._v("，通过缓存机制和缓存冗余来提高加载速度。")]),v._v(" "),_("p",[v._v("以下是一些常用方案：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("协商缓存 HTML 文档")]),v._v("：将 HTML 文档缓存本地，但不是直接使用，而是先通过网络加载 HTML 并判断内容是否更新，若未更新则直接使用本地缓存，否则重新下载并更新本地缓存。")]),v._v(" "),_("li",[_("strong",[v._v("冗余旧版本离线包")]),v._v("：上文提到，不缓存 HTML 文档会导致本地离线包在一段时间内无法命中，通过冗余一个旧版本的离线包即可避免这个问题。思路上和 "),_("code",[v._v("Service Worker")]),v._v(" 有点像。")])]),v._v(" "),_("h2",{attrs:{id:"提高一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提高一致性"}},[v._v("#")]),v._v(" 提高一致性")]),v._v(" "),_("p",[v._v("提高一致性意味着"),_("strong",[v._v("及时更新")]),v._v("，通过多种策略保证用户尽量访问到最新的页面。")]),v._v(" "),_("p",[v._v("以下是一些常用方案：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("资源包强推（提高更新频率）")]),v._v("：App 发起探针（长链接或轮询），当资源包需要立即更新时，平台服务将告知 App 重新请求资源进行更新。")]),v._v(" "),_("li",[_("strong",[v._v("动态开关（关闭离线化）")]),v._v("：页面地址（"),_("code",[v._v("schema")]),v._v("）改由服务端下发，并约定协议，可以选择关闭离线加载。"),_("strong",[v._v("该方案会降低可用性。")])]),v._v(" "),_("li",[_("strong",[v._v("接口探测紧急更新")]),v._v("：用户已进入页面，在特定时机直接刷新用户界面，若离线包已更新则使用新包，否则走在线加载 "),_("strong",[v._v("（会降低可用性）")]),v._v(" 。根据事故严重程度，这个刷新时机可以是页面重新展现或者立即刷新。")])]),v._v(" "),_("p",[v._v("需要特别提示的是，"),_("code",[v._v("及时更新")]),v._v(" 无法做到100%，受到网络等因素影响，还是会存在一小部分长尾用户不会更新。")]),v._v(" "),_("h2",{attrs:{id:"小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),_("p",[v._v("提高可用性或一致性的技术专项是可以同时开展的，因为在实际场景中，有些业务偏向可用性，有些业务偏向一致性，选择并不唯一。")]),v._v(" "),_("h1",{attrs:{id:"离线策略抉择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#离线策略抉择"}},[v._v("#")]),v._v(" 离线策略抉择")]),v._v(" "),_("p",[v._v("业务如何选择离线策略？应该"),_("code",[v._v("一致性")]),v._v("优先（不离线HTML）还是"),_("code",[v._v("可用性")]),v._v("优先（离线HTML）。")]),v._v(" "),_("p",[v._v("对于大部分场景，并无"),_("strong",[v._v("实时更新")]),v._v("的必要性。参考原生 app 的更新，用户使用的版本经常不是最新的。即使出问题了，只要还能用，滞后更新的影响也不大。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c4195294f684d3ea3052af1dc12e245~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),v._v(" "),_("p",[v._v("对于少部分场景，用户不可用（崩溃、白屏）、或者会给公司带来影响的（资金安全、舆论风险），越快更新影响面越小，事故等级越低。")]),v._v(" "),_("p",[v._v("更具体一点，可以得到以下指导准则：")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("团队水平")]),v._v("：如果团队"),_("strong",[v._v("平均编码水平不高")]),v._v("（经常出事故），且没有一套完善的自动化测试和稳定性检测，建议"),_("strong",[v._v("不离线")]),v._v(" "),_("strong",[v._v("HTML")])]),v._v(" "),_("li",[_("strong",[v._v("基建能力")]),v._v("：如果 App "),_("strong",[v._v("缺乏「及时更新」方案")]),v._v("，建议"),_("strong",[v._v("不离线")]),v._v(" "),_("strong",[v._v("HTML")])]),v._v(" "),_("li",[_("strong",[v._v("项目影响度")]),v._v("：如果项目可能"),_("strong",[v._v("引起高级别事故")]),v._v("，项目前期建议"),_("strong",[v._v("不离线")]),v._v(" "),_("strong",[v._v("HTML")]),v._v("，待稳定后再考虑加入。容易引起高级别事故的情况有：涉及金额和资产的页面；存在可能会导致客户端崩溃的功能（通常是动画或游戏引擎）。")]),v._v(" "),_("li",[v._v("其他情况建议"),_("strong",[v._v("离线")]),v._v(" "),_("strong",[v._v("HTML")])])]),v._v(" "),_("h1",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("重新回顾下本文要点：")]),v._v(" "),_("ol",[_("li",[v._v("使用离线包方案可以优化「资源加载」这个环节的时间，降低白屏时长")]),v._v(" "),_("li",[v._v("根据 HTML 文档是否离线，得到两种决策\n"),_("ol",[_("li",[v._v("离线（缓存优先）：更好的性能，但更新不及时")]),v._v(" "),_("li",[v._v("不离线（网络优先）：实时更新，但性能较差，可能会加载失败")])])]),v._v(" "),_("li",[v._v("通过 CAP 理论，了解离线化系统无法同时满足一致性和可用性，即无法实时更新的同时完全离线化")]),v._v(" "),_("li",[v._v("通过 CAP 理论，了解离线策略优化的两个方向：\n"),_("ol",[_("li",[v._v("保证一致性（实时更新），提高可用性（优化加载）")]),v._v(" "),_("li",[v._v("保证可用性（完全离线），提高一致性（及时更新）")])])]),v._v(" "),_("li",[v._v("业务需要综合考虑团队水平、基建能力、项目影响度，确定是否离线 HTML")])]),v._v(" "),_("p",[v._v("以上是我个人的一些经验，水平有限，欢迎探讨。")]),v._v(" "),_("h1",{attrs:{id:"拓展阅读"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[v._v("#")]),v._v(" 拓展阅读")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.infoq.cn/article/cap-twelve-years-later-how-the-rules-have-changed/",target:"_blank",rel:"noopener noreferrer"}},[v._v('CAP理论十二年回顾："规则"变了_架构_Eric Brewer_InfoQ精选文章'),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/mcuking/blog/issues/63",target:"_blank",rel:"noopener noreferrer"}},[v._v("Hybrid App 离线包方案实践"),_("OutboundLink")],1)]),v._v(" "),_("li",[_("a",{attrs:{href:"https://web.dev/offline-cookbook/",target:"_blank",rel:"noopener noreferrer"}},[v._v("离线指南"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=e.exports}}]);