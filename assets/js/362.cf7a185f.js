(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1099:function(t,a,_){"use strict";_.r(a);var v=_(29),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"背景知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景知识"}},[t._v("#")]),t._v(" 背景知识")]),t._v(" "),a("h2",{attrs:{id:"对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),a("p",[t._v("加密秘钥和解密秘钥相同，加解密速度比非对称加密快")]),t._v(" "),a("p",[t._v("常用算法： DES ,AES")]),t._v(" "),a("h2",{attrs:{id:"非对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),a("p",[t._v("公钥公开，私钥保密")]),t._v(" "),a("p",[t._v("一方加密，需要用另一方进行解密")]),t._v(" "),a("p",[t._v("常用算法： RSA")]),t._v(" "),a("h1",{attrs:{id:"https-传输过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-传输过程"}},[t._v("#")]),t._v(" https 传输过程")]),t._v(" "),a("p",[t._v("过程如图所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16796915-df1c6921f2c14805.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("先通过 RSA 交换 AES 口令")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("h2",{attrs:{id:"_1-客户端发起请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户端发起请求"}},[t._v("#")]),t._v(" 1 客户端发起请求")]),t._v(" "),a("h2",{attrs:{id:"_2-服务端配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务端配置"}},[t._v("#")]),t._v(" 2 服务端配置")]),t._v(" "),a("p",[t._v("服务端配置了公钥（证书信息），私钥")]),t._v(" "),a("h2",{attrs:{id:"_3-传送证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-传送证书"}},[t._v("#")]),t._v(" 3 传送证书")]),t._v(" "),a("p",[t._v("包含了证书颁发机构，过期时间等信息")]),t._v(" "),a("h2",{attrs:{id:"_4-解析证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-解析证书"}},[t._v("#")]),t._v(" 4 解析证书")]),t._v(" "),a("p",[t._v("验证该证书是否有效，")]),t._v(" "),a("blockquote",[a("p",[t._v("怎么验证？\n如果异常，出现提示；")])]),t._v(" "),a("p",[t._v("否则生成一个随机值，并用证书（公钥）对该随机值加密")]),t._v(" "),a("h2",{attrs:{id:"_5-传送加密信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-传送加密信息"}},[t._v("#")]),t._v(" 5 传送加密信息")]),t._v(" "),a("p",[t._v("将加密后的随机值传送给服务端")]),t._v(" "),a("h2",{attrs:{id:"_6-服务端解密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-服务端解密"}},[t._v("#")]),t._v(" 6 服务端解密")]),t._v(" "),a("p",[t._v("服务端用私钥解出随机值，如果解不出，说明公钥有问题")]),t._v(" "),a("h2",{attrs:{id:"_7-传输加密后的信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-传输加密后的信息"}},[t._v("#")]),t._v(" 7 传输加密后的信息")]),t._v(" "),a("p",[t._v("后面的数据将采用"),a("strong",[t._v("对称加密")]),t._v("进行传输，密钥为随机值")]),t._v(" "),a("h2",{attrs:{id:"_8-客户端解密信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-客户端解密信息"}},[t._v("#")]),t._v(" 8 客户端解密信息")]),t._v(" "),a("p",[t._v("客户端使用刚刚生成的随机数解密信息")]),t._v(" "),a("h1",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),a("h2",{attrs:{id:"q-一共携带几次随机数-为什么需要三次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-一共携带几次随机数-为什么需要三次"}},[t._v("#")]),t._v(" Q: 一共携带几次随机数？为什么需要三次")]),t._v(" "),a("h2",{attrs:{id:"q1-验证安全后-后面的数据传输为什么不能使用非对称加密来做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-验证安全后-后面的数据传输为什么不能使用非对称加密来做"}},[t._v("#")]),t._v(" Q1: 验证安全后，后面的数据传输为什么不能使用非对称加密来做？")]),t._v(" "),a("p",[t._v("因为公钥（证书）大家都有，如果仅用非对称加密的话，服务端用私钥加密，客户端需要用公钥解密，而由于"),a("strong",[t._v("公钥大家都有")]),t._v("，所以服务端响应的数据如果被拦截，是可以被解密然后获取到具体信息")]),t._v(" "),a("blockquote",[a("p",[t._v("当然这种情况下客户端请求的数据不会被拦截")])]),t._v(" "),a("p",[t._v("另外一点就是非对称加解密的效率较低")]),t._v(" "),a("h2",{attrs:{id:"q2-什么是中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-什么是中间人攻击"}},[t._v("#")]),t._v(" Q2: 什么是中间人攻击")]),t._v(" "),a("p",[t._v("dns 解析被污染，用户访问的地址指向中间人服务器")]),t._v(" "),a("p",[t._v("tls 建联阶段，中间人服务器拿到服务器返回的证书A，返回给浏览器一个伪造证书B")]),t._v(" "),a("p",[t._v("由于各种原因（这里不展开），浏览器信任了中间人服务器发来的证书B")]),t._v(" "),a("p",[t._v("浏览器通过该证书B 对随机字符串进行公钥加密，并发往中间人服务器")]),t._v(" "),a("p",[t._v("由于中间人服务器有证书B对应的私钥，可以解开得到这个随机字符串，于是将该随机字符串又用证书A加密后，返回给服务器")]),t._v(" "),a("p",[t._v("服务器用私钥解密拿到该随机字符串，并把响应内容通过该随机字符串做对称加密返回")]),t._v(" "),a("p",[t._v("由于中间人知道该随机字符串，故")]),t._v(" "),a("p",[t._v("中间人可以解开浏览器的请求内容以及服务器的响应内容")]),t._v(" "),a("p",[t._v("达到了中间人攻击的效果")]),t._v(" "),a("h2",{attrs:{id:"q3-中间人攻击时-返回合法证书会怎么样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-中间人攻击时-返回合法证书会怎么样"}},[t._v("#")]),t._v(" Q3: 中间人攻击时，返回合法证书会怎么样")]),t._v(" "),a("p",[t._v("返回了原服务器的证书，浏览器是会信任该证书，可是由于没有私钥，中间人服务器并解不出由该证书加密的随机字符串，进而也达不到攻击的效果")]),t._v(" "),a("h2",{attrs:{id:"q4-浏览器怎么验证证书是合法的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-浏览器怎么验证证书是合法的"}},[t._v("#")]),t._v(" Q4: 浏览器怎么验证证书是合法的")]),t._v(" "),a("ul",[a("li",[t._v("验证域名，有效期，证书来源")])]),t._v(" "),a("blockquote",[a("p",[t._v("有被篡改的可能呀，所以")])]),t._v(" "),a("ul",[a("li",[t._v("通过 CA 服务器判断证书是否被篡改")])]),t._v(" "),a("blockquote",[a("p",[t._v("已经验证过了，每次都得验证么？如何优化？所以")])]),t._v(" "),a("ul",[a("li",[t._v("通过 CRL 和 OCSP 判断证书是否已吊销，OCSP 可减少与 CA 服务器的交互")])]),t._v(" "),a("h1",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ol",[a("li",[t._v("https://cloud.tencent.com/developer/article/1335821")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/PzgkDyKZPB0rFK90ebT5ow",target:"_blank",rel:"noopener noreferrer"}},[t._v("你连 HTTPS 原理都不懂，还讲“中间人攻击”？"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("https://schaepher.github.io/2020/04/25/https-certification/")])])])}),[],!1,null,null,null);a.default=s.exports}}]);