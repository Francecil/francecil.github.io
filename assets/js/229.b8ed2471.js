(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{993:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("核心指标："),e("strong",[t._v("FCP、FMP、LCP、TTI")])]),t._v(" "),e("li",[t._v("指标计算：FMP 需要使用 "),e("code",[t._v("MutationObserver")]),t._v(" 模拟计算；TTI 需要使用 Performance API 协助计算；其他指标基本可以通过 Performance API 直接获取")]),t._v(" "),e("li",[t._v("注意事项：\n"),e("ul",[e("li",[t._v("预渲染模式下，由于存在网络和 CPU 抢占情况，性能数据会偏高，指标意义不大")]),t._v(" "),e("li",[t._v("Paint 部分指标存在兼容问题，此时选用 FMP 指标代替")])])]),t._v(" "),e("li",[t._v("使用方式："),e("a",{attrs:{href:"https://github.com/GoogleChrome/web-vitals",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-vitals"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"fp-fcp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fp-fcp"}},[t._v("#")]),t._v(" FP/FCP")]),t._v(" "),e("ul",[e("li",[t._v("定义：首次渲染时间点/首次有内容（文本，图片，SVG，canvas）渲染的时间点\n"),e("blockquote",[e("p",[t._v("FP 可视为白屏时间")])])]),t._v(" "),e("li",[t._v("计算方式：通过 "),e("code",[t._v("performance.getEntriesByType('paint')")]),t._v(" 获取")]),t._v(" "),e("li",[t._v("建议指标：FCP(pct75) < 1.8s")]),t._v(" "),e("li",[t._v("注意事项：\n"),e("ul",[e("li",[t._v("safari 14.x 以下不支持，详见 "),e("a",{attrs:{href:"https://caniuse.com/mdn-api_performancepainttiming",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("更多详见 "),e("a",{attrs:{href:"https://web.dev/fcp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.dev/fcp/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"fmp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fmp"}},[t._v("#")]),t._v(" FMP")]),t._v(" "),e("ul",[e("li",[t._v("定义：首次绘制有意义内容的时间点\n"),e("blockquote",[e("p",[t._v("FMP 一般视为首屏时间")])])]),t._v(" "),e("li",[t._v("计算原则：页面结构趋于稳定。")]),t._v(" "),e("li",[t._v("计算方式：MutationObserver 监听页面结构变化，得到一个分数，分数变化最剧烈的时间点，则为 FMP 。该技术值比真实值略小，误差小于 300ms")]),t._v(" "),e("li",[t._v("建议指标：FMP(pct75) < 2s")]),t._v(" "),e("li",[t._v("注意事项：\n"),e("ul",[e("li",[t._v("非标准化指标，Lighthouse 已弃用并推荐 LCP 代替；但由于 LCP Safari 兼容性的原因，目前 FMP 在移动端上还是有一定的参考价值。")])])])]),t._v(" "),e("p",[t._v("更多详见 "),e("a",{attrs:{href:"https://developer.chrome.com/en/docs/lighthouse/performance/first-meaningful-paint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.chrome.com/en/docs/lighthouse/performance/first-meaningful-paint/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"lcp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lcp"}},[t._v("#")]),t._v(" LCP")]),t._v(" "),e("ul",[e("li",[t._v("定义：页面可视区域内可见的最大图像或文本块完成渲染的时间点")]),t._v(" "),e("li",[t._v("计算方式：通过 PerformanceObserver 监听 LCP 指标，该指标可能会拿到多次，一般仅用第一次数据")]),t._v(" "),e("li",[t._v("建议指标：LCP(pct75) < 2.5s ；活动类业务建议在 1.5s 内")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entry "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" entryList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LCP candidate:'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'largest-contentful-paint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("ul",[e("li",[t._v("注意事项：\n"),e("ul",[e("li",[t._v("safari 不支持：见 "),e("a",{attrs:{href:"https://caniuse.com/mdn-api_largestcontentfulpaint",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("更多详见 "),e("a",{attrs:{href:"https://web.dev/lcp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.dev/lcp/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"tti"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tti"}},[t._v("#")]),t._v(" TTI")]),t._v(" "),e("ul",[e("li",[t._v("定义：页面完全可交互的时间点\n"),e("blockquote",[e("p",[t._v("完全可交互定义：1️⃣ 已显示有用内容；2️⃣ 可见元素已绑定事件；3️⃣ 事件函数可以在事件发生后的 50ms 内执行")])])]),t._v(" "),e("li",[t._v("计算原则：安静窗口前最后一个长任务的结束时间。安静窗口指的是没有长任务（执行时间超过 50 毫秒）且进行中的 GET 请求不超过 2 个")]),t._v(" "),e("li",[t._v("计算方式：从 FCP 开始向后搜寻一个不小于 5s 的安静窗口；找到后再向前搜索最近的长任务，取长任务的结束时间为 TTI")]),t._v(" "),e("li",[t._v("建议指标：TTI(pct75) < 5s ；活动类业务建议在 3s 内")]),t._v(" "),e("li",[t._v("注意事项：\n"),e("ul",[e("li",[t._v("使用 SSR 这类计算，追求首屏渲染会导致 TTI 降低，实践中应该关注两者的差值，不宜过大（超过 4s）")]),t._v(" "),e("li",[t._v("计算指标时可能会找不到长任务，此时则以 "),e("code",[t._v("max(FCP,DOMContentLoadedEventEnd)")]),t._v(" 作为 TTI 的值")]),t._v(" "),e("li",[t._v("兼容性上依赖于  Long Tasks API 和 Resource Timing API （均为 Performance 接口）")])])])]),t._v(" "),e("p",[t._v("更多详见 "),e("a",{attrs:{href:"https://web.dev/tti/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.dev/tti/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("ul",[e("li",[t._v("FID：用户首次操作页面时收到的事件延迟，建议在 100ms 内。详见"),e("a",{attrs:{href:"https://web.dev/fid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.dev/fid/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("SI：页面加载期间内容视觉显示的速度，详见"),e("a",{attrs:{href:"https://developer.chrome.com/docs/lighthouse/performance/speed-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.chrome.com/docs/lighthouse/performance/speed-index/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("INP：整个页面生命周期下，用户交互延迟的最大值（实际为第二值，减少异常指标）。建议在 200ms 内。详见"),e("a",{attrs:{href:"https://web.dev/inp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.dev/inp/"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"拓展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.volcengine.com/docs/6431/107445",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节性能指标计算"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);