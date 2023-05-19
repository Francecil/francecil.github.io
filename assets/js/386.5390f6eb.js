(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{713:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"需求背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求背景"}},[s._v("#")]),s._v(" 需求背景")]),s._v(" "),t("p",[s._v("最近在研究 iqiyi 的登录流程，发现他们的第三方登录体验挺好的。")]),s._v(" "),t("p",[s._v("在目标页面（以下目标页面均指用户当前浏览的页面）点击登录，弹出登录弹框，选择第三方登录，比如 qq，微信，点击则新开页面。")]),s._v(" "),t("p",[s._v("在新页面中登录完毕，页面会自动关闭，且刚刚那个页面不刷新且自动进行状态变更")]),s._v(" "),t("h2",{attrs:{id:"首先是页面自动关闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先是页面自动关闭"}},[s._v("#")]),s._v(" 首先是页面自动关闭")]),s._v(" "),t("p",[s._v("这个很简单，通过 "),t("code",[s._v("window.close()")]),s._v(" 即可实现")]),s._v(" "),t("p",[s._v("但是问题是，第三方登录页一般不会自己在代码中做这件事，毕竟一般登录后是重定向到某个页面（通过 ticket 写入 cookie ）而不是关闭当前页面")]),s._v(" "),t("p",[s._v("那么如何关闭呢？其实也很简单，让目标页面执行登录页的关闭即可")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("newWin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//open.weixin.qq.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在某个时机")]),s._v("\nnewWin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("至于这个时机，就是登录成功之后。")]),s._v(" "),t("p",[s._v("那么目标页面如何知道登录成功了？")]),s._v(" "),t("p",[s._v("你可能会想说可以利用轮询啊，长连接啊，再或者 websocket 咯")]),s._v(" "),t("p",[s._v("这个是可以实现，但是额外浪费了性能，其实在当前页面（登录完重定向的页面）通过 "),t("code",[s._v("window.opener")]),s._v(" 操作目标页面")]),s._v(" "),t("blockquote",[t("p",[s._v("至于这东西是啥，大家应该都知道，不懂的看 MDN")])]),s._v(" "),t("p",[s._v("所以这就要求，登录完我们最后重定向的页面除了写入 cookie 的作用，还有就是操作 "),t("code",[s._v("window.opener")])]),s._v(" "),t("p",[s._v("比如这是 iqiyi 第三方登录后重定向的页面 "),t("code",[s._v("https://passport.iqiyi.com/oauth/closepage.php?fromurl=&from=29&isNew=0")])]),s._v(" "),t("p",[s._v("其页面代码就是以下简单的几行")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("head")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//成功调用")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iqiyi.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("opener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__callbacks__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_oAuthSuccess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://passport.iqiyi.com/pages/user/success.action'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("head")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这里需要将 domain 设为一致，才能操作相同 domain 的 window")]),s._v(" "),t("blockquote",[t("p",[s._v('是的， www.iqiyi.com 的 domain 也被改为了 "iqiyi.com" 了，同样的， iqiyi 的其他子域名比如 '),t("code",[s._v("https://edu.iqiyi.com/")]),s._v(" 等都改写了 domain，使得全站都能顺滑的实现无刷新登录")])]),s._v(" "),t("p",[s._v("最后看看代码中的 "),t("code",[s._v("window.opener.lib.__callbacks__._oAuthSuccess(xxx)")]),s._v(" ,其实作用也很简单，一\b是关闭新开页面，二是获取用户信息并更新状态")]),s._v(" "),t("p",[s._v("这样差不多就实现了我们的需求，另外还有一点没提到的是，写入 cookie 的时候，domain iqiyi 写的是二级域名 "),t("code",[s._v(".iqiyi.com")]),s._v(" ，这样其他三级域名如 "),t("code",[s._v("edu.iqiyi.com")]),s._v(" 才能共用 cookie")]),s._v(" "),t("p",[s._v("PS：在测试过程中发现有 iqiyi 有两个bug(截止 20/04/12)，当然，普通用户使用一般不会出现。。")]),s._v(" "),t("ul",[t("li",[s._v("若登录弹框关闭，第三方登录成功后不会自动关闭页面且不进行用户信息请求，这个是由于 _oAuthSuccess 其实是调用的登录窗口 iframe 中的方法")]),s._v(" "),t("li",[s._v("手动调用 _oAuthSuccess 方法，头像变成登录后的默认头像，此时其实并没有登录")])]),s._v(" "),t("h2",{attrs:{id:"那以上方案有什么问题么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那以上方案有什么问题么"}},[s._v("#")]),s._v(" 那以上方案有什么问题么？")]),s._v(" "),t("p",[s._v("除了全站需要改造 "),t("code",[s._v("document.domain")]),s._v(" 外，正常来说是没有问题，但是可能会遇到不能修改 domain 的场景，你要是问我有哪些场景，emmmm...反正我就是为了说我的新方案的，新方案就是 postMessage")]),s._v(" "),t("blockquote",[t("p",[s._v("我现在能想到的一个，比如最后一个重定向的最后一个页面不是 "),t("code",[s._v(".iqiyi.com")]),s._v("域名，而是其他页面（可能是为了集团内多个产品复用吧），比如 "),t("code",[s._v("util.baidu.com")])])]),s._v(" "),t("p",[s._v("www.iqiyi.com")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("newWin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//util.baidu.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("evt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据信息来源进行特殊处理，避免受其他 postMessage 影响")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("evt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://util.baidu.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("evt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        newWin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// evt.source.close()")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("util.baidu.com")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("opener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//所有")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以在 www.iqiyi.com 中看到输出，且 util.baidu.com 自动关闭")]),s._v(" "),t("p",[s._v("当然该方案也有不好的地方，就是 postMessage 使用不当会导致安全问题，主要有以下2点")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("postMessage 第二个参数 targetOrigin 设置为 * 可能导致数据泄露"),t("br"),s._v("\n比如使用了某个不安全的第三方登录页面，其对目标网站进行了重定向，比如变成 "),t("code",[s._v("www.ihack.com")]),s._v(" ，第三方登录后通过 postMessage 传递隐私信息，由于设置的是 * ，导致 "),t("code",[s._v("www.ihack.com")]),s._v(" 可以收到隐私信息。当然你后面发现这个 ihack 网站不正常也没用，因为数据已经泄露了。"),t("br"),s._v("\n解决方案就是 targetOrigin 设置为特定的地址比如 "),t("code",[s._v("edu.iqiyi.como")]),s._v(" ，这就需要我们将当前页面作为传递到重定向页面 "),t("br"),s._v("\n举例，像第三方登录页传递这样的参数 -- "),t("code",[s._v("&redirect_uri=https://passport.iqiyi.com?targetOrigin=edu.iqiyi.com")]),s._v(" , 第三方登录后重定向到 passport 写入 cookie ，再次重定向到 "),t("code",[s._v("https://util.baidu.com?targetOrigin=edu.iqiyi.com")]),s._v(" ，再当前页面读取 targetOrigin 参数并传递 postMessage 。整个就是这样的一个过程 "),t("br"),s._v("\n当然在本例中不需要传递隐私信息")])]),s._v(" "),t("li",[t("p",[s._v("接收 message 时请始终使用 origin 和 source 属性验证发件人的身份"),t("br"),s._v("\n比如点击打开了用户评论的 url（某个黑客网站），其对目标页面发起 postMessage ，而我们如果在收到 message 时不进行验证就执行危险操作时，可能就会导致安全问题"),t("br"),s._v("\n另外，如果回调执行安全性依赖于消息的话（比如执行 "),t("code",[s._v("eval(msg.data)")]),s._v("），即使检查通过，还需要对消息格式再一次检查，避免因信任网站收到跨站脚本攻击而导致本网站也遭到攻击\n当然在本例中只是简单的关闭新开页面及发送请求，没有什么危险操作，检查下 origin 即可")])])]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("domain 适用于大部分情景，有全站改造 "),t("code",[s._v("document.domain")]),s._v(" 的成本，且最后重定向页面需要是相同的 domain")]),s._v(" "),t("p",[s._v("postMessage 适用于所有情景，对于安全问题需要额外处理")]),s._v(" "),t("p",[s._v("两种方案各有千秋，看就具体的场景啦~")]),s._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[s._v("postMessage"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);