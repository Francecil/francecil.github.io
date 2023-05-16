(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{474:function(_,v,t){"use strict";t.r(v);var l=t(4),e=Object(l.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-有哪些风险"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-有哪些风险"}},[_._v("#")]),_._v(" 1. 有哪些风险")]),_._v(" "),v("h3",{attrs:{id:"_1-1-按端分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-按端分类"}},[_._v("#")]),_._v(" 1.1 按端分类")]),_._v(" "),v("h4",{attrs:{id:"_1-1-1-web-安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-web-安全"}},[_._v("#")]),_._v(" 1.1.1 Web 安全")]),_._v(" "),v("ul",[v("li",[_._v("CSRF\n"),v("blockquote",[v("p",[_._v("双重 token 校验：发送鉴权请求->注入 Cookie + 鉴权响应头->真实请求发送(携带 token 和 Cookie)")])])]),_._v(" "),v("li",[_._v("XSS\n"),v("blockquote",[v("p",[_._v("使用 xss npm 包，基于白名单的策略防护")])])]),_._v(" "),v("li",[_._v("钓鱼攻击\n"),v("ul",[v("li",[_._v("任意 URL 重定向: https://www.cnblogs.com/NoId/p/16631462.html 通过配置白名单进行跳转拦截")]),_._v(" "),v("li",[_._v("外链 opener 修改原页面：禁用")])])]),_._v(" "),v("li",[_._v("iframe 风险\n"),v("ul",[v("li",[_._v("嵌套第三方页面：开启 sandbox 进行防护")]),_._v(" "),v("li",[_._v("被钓鱼网站嵌套：配置 x-frame-options")])])]),_._v(" "),v("li",[_._v("跨域风险\n"),v("ul",[v("li",[_._v("CORS 需要配置白名单")])])]),_._v(" "),v("li",[_._v("MIME 嗅探\n"),v("blockquote",[v("p",[_._v("客户端认为文件 MIME 配置不对，通过查看资源进行嗅探，进而可能造成文件执行。比如把一段 JS 脚本伪装成 IMG 让用户加载。配置 X-Content-Type-Options 关闭 MIME 嗅探")])])]),_._v(" "),v("li",[_._v("CSS Injection\n"),v("blockquote",[v("p",[_._v("https://vwzq.net/slides/2019-s3_css_injection_attacks.pdf 、"),v("a",{attrs:{href:"https://blog.huli.tw/2022/09/29/css-injection-2/",target:"_blank",rel:"noopener noreferrer"}},[_._v("用 CSS 來偷資料"),v("OutboundLink")],1)])])]),_._v(" "),v("li",[_._v("信息泄露\n"),v("ul",[v("li",[_._v("内网信息泄露")]),_._v(" "),v("li",[v("code",[_._v("process.env")]),_._v(" 对象暴露")]),_._v(" "),v("li",[_._v("敏感信息传输加密：下发秘钥加密敏感参数，服务端解密")]),_._v(" "),v("li",[_._v("SourceMap 上传外网")]),_._v(" "),v("li",[_._v("敏感代码加固：对加解密等核心 JS 代码转化为二进制字节码，运行在虚拟机")]),_._v(" "),v("li",[_._v("添加水印：明水印、暗水印")]),_._v(" "),v("li",[_._v("数据脱敏：比如身份证、手机号等需要用 "),v("code",[_._v("*")]),_._v(" 字符替换")]),_._v(" "),v("li",[_._v("Cookie 安全策略：根据使用场景合理配置 Cookie")])])]),_._v(" "),v("li",[_._v("其他\n"),v("ul",[v("li",[_._v("HTML 文件使用 UTF-8 编码：避免绕过一些防御措施")])])])]),_._v(" "),v("h4",{attrs:{id:"_1-1-2-传输层安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-传输层安全"}},[_._v("#")]),_._v(" 1.1.2 传输层安全")]),_._v(" "),v("ul",[v("li",[_._v("HTTP 劫持\n"),v("blockquote",[v("p",[_._v("DNS 污染，开启 HTTPS 解决")])])]),_._v(" "),v("li",[_._v("CDN 回源劫持\n"),v("blockquote",[v("p",[_._v("CDN 投毒，见 https://ph4ntonn.github.io/Web-Cache-Poisoning ；使用 "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer"}},[_._v("SRI"),v("OutboundLink")],1),_._v("（子资源完整性）解决，如 integrity 属性")])])]),_._v(" "),v("li",[_._v("HTTPS 剥离攻击\n"),v("blockquote",[v("p",[_._v("黑客利用 "),v("a",{attrs:{href:"https://venafi.com/blog/what-are-ssl-stripping-attacks/",target:"_blank",rel:"noopener noreferrer"}},[_._v("SSL Stripping"),v("OutboundLink")],1),_._v(" 攻击（未带协议头浏览器默认使用 HTTP 访问）让 HTTPS 降级为 HTTP ，可以使用 HSTS 方案防护")])])]),_._v(" "),v("li",[_._v("TLS 证书无效\n"),v("blockquote",[v("p",[_._v("证书过期将重新出现 HTTP 劫持问题；注意 BGP 劫持无法预防，只能尽早发现。可以利用无头浏览器访问并获取证书剩余有效时间")])])]),_._v(" "),v("li",[_._v("证书伪造\n"),v("blockquote",[v("p",[_._v("CA 签发证书相对随意；浏览器引入证书透明度策略，通过 Expect-CT HTTP Header 开启")])])]),_._v(" "),v("li",[_._v("私有网络访问\n"),v("blockquote",[v("p",[_._v("浏览器安全防护策略。页面请求了比当前页面更私有的请求，浏览器会进行拦截，可通过 "),v("code",[_._v("Access-Control-Allow-Private-Network")]),_._v(" 响应头豁免")])])])]),_._v(" "),v("h4",{attrs:{id:"_1-1-3-跨端安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-跨端安全"}},[_._v("#")]),_._v(" 1.1.3 跨端安全")]),_._v(" "),v("ul",[v("li",[_._v("JSB 鉴权漏洞\n"),v("blockquote",[v("p",[_._v("任意页面可直接调用 JSB 方法；解决方案：根据页面来源做鉴权管控，并对 JSB 进行分级。案例：闲鱼支付运费诈骗")])])]),_._v(" "),v("li",[_._v("Electron 安全设置\n"),v("blockquote",[v("p",[_._v("不安全的启动参数和 browserWindow 配置，详见 https://yuzhigang5460.gitbook.io/electron/tutorial/security")])])])]),_._v(" "),v("h4",{attrs:{id:"_1-1-4-服务端安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-服务端安全"}},[_._v("#")]),_._v(" 1.1.4 服务端安全")]),_._v(" "),v("ul",[v("li",[_._v("SSRF 请求伪造\n"),v("blockquote",[v("p",[_._v("攻击外网无法访问的内网系统，可通过白名单解决")])])]),_._v(" "),v("li",[_._v("注入攻击\n"),v("ul",[v("li",[_._v("SQL 注入")]),_._v(" "),v("li",[_._v("动态脚本执行注入：服务端动态执行代码，可通过 Sandbox 防护")]),_._v(" "),v("li",[_._v("动态命令执行注入：动态执行 shell 命令")]),_._v(" "),v("li",[_._v("任意目录遍历注入："),v("a",{attrs:{href:"https://www.freebuf.com/vuls/247620.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("web安全目录遍历漏洞学习及绕过"),v("OutboundLink")],1)])])]),_._v(" "),v("li",[_._v("任意文件上传\n"),v("blockquote",[v("p",[_._v("https://www.freebuf.com/vuls/279171.html")])])]),_._v(" "),v("li",[_._v("ReDOS（正则表达式拒绝服务攻击）\n"),v("blockquote",[v("p",[_._v("构造特殊字符让服务器的正则校验变慢，消耗系统资源 ，http://mykings.me/2017/01/03/%E6%B5%85%E6%9E%90-ReDoS-%E7%9A%84%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/ 。可以使用 safe-regex、rxxr2 等工具编写无漏洞的 RegEx ，也可以使用 Google 的 re2 引擎代替 Node.js 默认的 RegEx 引擎")])])]),_._v(" "),v("li",[_._v("信息泄露\n"),v("ul",[v("li",[_._v("日志数据脱敏")]),_._v(" "),v("li",[_._v("鉴权信息硬编码")]),_._v(" "),v("li",[_._v("Node.js 源码加固")])])]),_._v(" "),v("li",[_._v("其他\n"),v("ul",[v("li",[_._v("三方依赖漏洞：定时升级")]),_._v(" "),v("li",[_._v("请求大小限制：避免服务端带宽浪费，一般服务器也会有默认的一些限制。请求实体限制、请求头部限制，URL 长度限制")]),_._v(" "),v("li",[_._v("避免弱加密是算法，防止爆破和碰撞风险")])])])]),_._v(" "),v("h4",{attrs:{id:"_1-1-5-合规"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-合规"}},[_._v("#")]),_._v(" 1.1.5 合规")]),_._v(" "),v("ul",[v("li",[_._v("第三方依赖合规\n"),v("blockquote",[v("p",[_._v("遵守开源协议")])])]),_._v(" "),v("li",[_._v("禁止海外数据回传国内\n"),v("ul",[v("li",[_._v("跨境域名访问")])])]),_._v(" "),v("li",[_._v("避免滥用浏览器指纹")]),_._v(" "),v("li",[_._v("GDRP 合规（欧盟一般数据保护条例）\n"),v("ul",[v("li",[_._v("非用户同意不能使用三方追踪技术：弹出 Cookies Banner")]),_._v(" "),v("li",[_._v("使用 GA、GTAG 必须开启 IP 匿名化: https://codechilli.lk/ip-anonymization-ip-masking-in-google-analytics-universal-analytics-ga4/")])])]),_._v(" "),v("li",[_._v("其他\n"),v("ul",[v("li",[_._v("海外项目含有中文硬编码")]),_._v(" "),v("li",[_._v("海外项目含有国内产品信息硬编码")]),_._v(" "),v("li",[_._v("产品名称错别字")])])])]),_._v(" "),v("h3",{attrs:{id:"_1-2-按风险类型分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-按风险类型分类"}},[_._v("#")]),_._v(" 1.2 按风险类型分类")]),_._v(" "),v("h4",{attrs:{id:"_1-2-1-合规"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-合规"}},[_._v("#")]),_._v(" 1.2.1 合规")]),_._v(" "),v("p",[_._v("同 1.1.5")]),_._v(" "),v("h4",{attrs:{id:"_1-2-2-敏感信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-敏感信息"}},[_._v("#")]),_._v(" 1.2.2 敏感信息")]),_._v(" "),v("ul",[v("li",[_._v("内网域名泄露")]),_._v(" "),v("li",[_._v("环境变量泄露")]),_._v(" "),v("li",[_._v("员工信息泄露")]),_._v(" "),v("li",[_._v("鉴权信息泄露")]),_._v(" "),v("li",[_._v("调试信息泄露\n"),v("blockquote",[v("p",[_._v("比如 "),v("code",[_._v("console.log")]),_._v(" 未删除，携带敏感调试信息")])])])]),_._v(" "),v("h4",{attrs:{id:"_1-2-3-依赖问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-依赖问题"}},[_._v("#")]),_._v(" 1.2.3 依赖问题")]),_._v(" "),v("ul",[v("li",[_._v("使用授权不清的依赖")]),_._v(" "),v("li",[_._v("使用有开源协议合规风险的依赖")]),_._v(" "),v("li",[_._v("使用有安全漏洞的依赖")])]),_._v(" "),v("h4",{attrs:{id:"_1-2-4-安全风险"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-安全风险"}},[_._v("#")]),_._v(" 1.2.4 安全风险")]),_._v(" "),v("p",[_._v("见 1.1.1 ~ 1.1.4")]),_._v(" "),v("h2",{attrs:{id:"_2-如何发现风险"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何发现风险"}},[_._v("#")]),_._v(" 2. 如何发现风险")]),_._v(" "),v("ul",[v("li",[_._v("自动扫描")]),_._v(" "),v("li",[_._v("人工渗透")])]),_._v(" "),v("h2",{attrs:{id:"_3-如何防护风险"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何防护风险"}},[_._v("#")]),_._v(" 3. 如何防护风险")]),_._v(" "),v("ul",[v("li",[_._v("浏览器策略防护")]),_._v(" "),v("li",[_._v("漏洞防护")]),_._v(" "),v("li",[_._v("代码安全\n"),v("ul",[v("li",[_._v("混淆")]),_._v(" "),v("li",[_._v("加固")])])]),_._v(" "),v("li",[_._v("数据安全防护\n"),v("ul",[v("li",[_._v("脱敏")]),_._v(" "),v("li",[_._v("反扒")]),_._v(" "),v("li",[_._v("水印")]),_._v(" "),v("li",[_._v("鉴权")]),_._v(" "),v("li",[_._v("加密")])])])]),_._v(" "),v("h2",{attrs:{id:"_4-系统解决方案-wip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-系统解决方案-wip"}},[_._v("#")]),_._v(" 4. 系统解决方案（WIP）")]),_._v(" "),v("p",[_._v("待梳理，分为卡点流程、检测原理、修复方案三个环节")]),_._v(" "),v("h2",{attrs:{id:"_5-安全研发流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-安全研发流程"}},[_._v("#")]),_._v(" 5. 安全研发流程")]),_._v(" "),v("ul",[v("li",[_._v("评审\n"),v("ul",[v("li",[_._v("合规评审（若有）")]),_._v(" "),v("li",[_._v("安全技术评审（若有）")])])]),_._v(" "),v("li",[_._v("开发\n"),v("ul",[v("li",[_._v("研发规范")]),_._v(" "),v("li",[_._v("研发工具：IDE 插件、Chrome 拓展")])])]),_._v(" "),v("li",[_._v("上线前\n"),v("ul",[v("li",[_._v("MR Action 构建产物检测")]),_._v(" "),v("li",[_._v("小流量测试验证")])])]),_._v(" "),v("li",[_._v("上线后\n"),v("ul",[v("li",[_._v("日常巡检：定时扫描+人工测试")]),_._v(" "),v("li",[_._v("安全监控")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);