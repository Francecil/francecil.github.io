(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{991:function(a,_,t){"use strict";t.r(_);var s=t(28),v=Object(s.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),_("p",[a._v("本文为 yahoo 前端优化35军规的梗概，部分优化技术已过时，请注意分辨")]),a._v(" "),_("h1",{attrs:{id:"内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),_("h2",{attrs:{id:"_1-尽量减少http请求数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-尽量减少http请求数"}},[a._v("#")]),a._v(" 1.尽量减少HTTP请求数")]),a._v(" "),_("ol",[_("li",[a._v("资源合并")]),a._v(" "),_("li",[a._v("小图片base64编码")]),a._v(" "),_("li",[a._v("多图合并为单图")]),a._v(" "),_("li",[a._v("CSS Sprites，通过background-image和background-position属性来定位要显示的部分")])]),a._v(" "),_("h2",{attrs:{id:"_2-减少dns查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-减少dns查找"}},[a._v("#")]),a._v(" 2. 减少DNS查找")]),a._v(" "),_("p",[a._v("组件分散到2-4个主机名，这是同时减少DNS查找和允许高并发下载的折中方案")]),a._v(" "),_("h2",{attrs:{id:"_3-避免重定向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-避免重定向"}},[a._v("#")]),a._v(" 3. 避免重定向")]),a._v(" "),_("p",[a._v("HTTP 重定向是一项用于将客户端重定向到设备专用网址的常用技术。")]),a._v(" "),_("p",[a._v("但采用重定向会增加延迟。")]),a._v(" "),_("p",[a._v("若必须重定向的话，请使用HTTP重定向（响应体为空）并用301(永久转移)或302（暂时转移）状态码。（两者区别在于302会被url拦截，具体百度")]),a._v(" "),_("p",[a._v("因为系统会根据 HTTP 请求标头中的用户代理来执行重定向。 例子：")]),a._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("HTTP/1.1 301 Moved Permanently\nLocation: http://example.com/newuri\nContent-Type: text/html\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br"),_("span",{staticClass:"line-number"},[a._v("2")]),_("br"),_("span",{staticClass:"line-number"},[a._v("3")]),_("br")])]),_("p",[a._v("若难以实现HTTP重定向，则用js再去做。该做法多了文档下载，js解析的过程。")]),a._v(" "),_("p",[a._v("**注意1：**有一种常见的极其浪费资源的重定向，就是URL尾部缺少一个斜线的时候。")]),a._v(" "),_("p",[a._v("例如，跳转到http://astrology.yahoo.com/astrology会返回一个重定向到http://astrology.yahoo.com/astrology/的301响应（注意添在尾部的斜线）。")]),a._v(" "),_("p",[a._v("在Apache中可以用Alias，mod_rewrite或者DirectorySlash指令来取消不必要的重定向。")]),a._v(" "),_("p",[a._v("**注意2：**进行双向重定向与单向重定向")]),a._v(" "),_("p",[a._v("将访问桌面版网页的移动用户重定向到对应的移动版网页 -- “单向”重定向")]),a._v(" "),_("p",[a._v("在移动用户以及桌面设备用户分别访问桌面版网站和移动网站上的网页时，对他们进行重定向 --“双向”重定向")]),a._v(" "),_("p",[a._v("https://developers.google.com/search/mobile-sites/mobile-seo/separate-urls#automatic-redirection")]),a._v(" "),_("h2",{attrs:{id:"_4-缓存ajax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-缓存ajax"}},[a._v("#")]),a._v(" 4. 缓存Ajax")]),a._v(" "),_("p",[a._v("Ajax GET请求，可以使用客户端缓存（而且只要地址一样，它总是会使用客户端缓存）")]),a._v(" "),_("p",[a._v("e.g: 邮箱web,请求通讯录数据，请求时返回结果带上通讯录最后修改的时间。后续请求带上该时间戳&t=xxx，若通讯录没有改变则请求缓存。若通讯录做了修改，时间戳改变，后续该请求新的数据.")]),a._v(" "),_("p",[a._v("**注意：**可能只适用于单用户，如这边的通讯录数据可以多人更改的话，就不能缓存了")]),a._v(" "),_("h2",{attrs:{id:"_5-延迟加载组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-延迟加载组件"}},[a._v("#")]),a._v(" 5. 延迟加载组件")]),a._v(" "),_("p",[a._v("与渲染页面无关的内容可以往后。")]),a._v(" "),_("p",[a._v("比如淘宝首页，把非关键模块放入了懒加载队列，满足一定条件的时候再去加载，参考：http://taobaofed.org/blog/2016/04/06/optimize-in-tbhome#关键模块优先")]),a._v(" "),_("h2",{attrs:{id:"_6-预加载组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-预加载组件"}},[a._v("#")]),a._v(" 6. 预加载组件")]),a._v(" "),_("p",[a._v("利用浏览器空闲时间请求用户接下来可能会访问的组件。")]),a._v(" "),_("ol",[_("li",[a._v("无条件预加载")])]),a._v(" "),_("blockquote",[_("p",[a._v("比如：搜索主页，预加载后面搜索页一定会出现的资源")])]),a._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[a._v("条件性预加载")])]),a._v(" "),_("blockquote",[_("p",[a._v("猜测用户将要跳转到哪里并据此预加载。比如正在填写“添加表单”，后面会跳到表单详情，则先把表单详情的资源拿到")])]),a._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[a._v("提前预加载")])]),a._v(" "),_("blockquote",[_("p",[a._v("比如提供了一个新版网站入口。用户从旧版转向新版时，资源都是初次加载，会比较慢。此时可以选择预加载")])]),a._v(" "),_("h2",{attrs:{id:"_7-减少dom元素数量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-减少dom元素数量"}},[a._v("#")]),a._v(" 7. 减少dom元素数量")]),a._v(" "),_("p",[a._v("只在语义上有意义的时候使用"),_("code",[a._v("<div>")]),a._v("，而不是因为它能够渲染一个新行")]),a._v(" "),_("p",[a._v("按需加载")]),a._v(" "),_("p",[_("code",[a._v("document.getElementsByTagName('*').length")]),a._v(" 查看dom元素数量")]),a._v(" "),_("h2",{attrs:{id:"_8-跨域分离组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-跨域分离组件"}},[a._v("#")]),a._v(" 8. 跨域分离组件")]),a._v(" "),_("p",[a._v("可以最大化并行下载。与 "),_("strong",[_("code",[a._v("2. 减少DNS查找")])]),a._v(" 结合，一般不超过2-4个域")]),a._v(" "),_("h2",{attrs:{id:"_9-尽量少用-合理使用iframe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-尽量少用-合理使用iframe"}},[a._v("#")]),a._v(" 9. 尽量少用，合理使用iframe")]),a._v(" "),_("p",[a._v("缺点：")]),a._v(" "),_("ol",[_("li",[a._v("代价高，即使是空白的iframe")]),a._v(" "),_("li",[a._v("浏览器返回按钮失效")]),a._v(" "),_("li",[a._v("堵塞主页面的onload事件，")]),a._v(" "),_("li",[a._v("与主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载")])]),a._v(" "),_("p",[a._v("优点：")]),a._v(" "),_("ol",[_("li",[a._v("可以引入缓慢的第三方内容，如广告")]),a._v(" "),_("li",[a._v("iframe引入了安全沙箱，可避免引入的页面对自己的页面产生不利的影响。比如防止访问父页面dom,防止读写cookie等数据")])]),a._v(" "),_("p",[a._v("建议：")]),a._v(" "),_("blockquote",[_("p",[a._v("如果要使用iframe,采用动态给iframe添加src属性值的方式（js脚本放在body底部）。\n可以避免上述缺点的3和4")])]),a._v(" "),_("h2",{attrs:{id:"_10-避免404"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-避免404"}},[a._v("#")]),a._v(" 10. 避免404")]),a._v(" "),_("p",[a._v("请求不存在的脚本文件，即使返回404，仍会去解析响应内容，无疑多了很多处理时间")]),a._v(" "),_("h1",{attrs:{id:"css-部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css-部分"}},[a._v("#")]),a._v(" css 部分")]),a._v(" "),_("h2",{attrs:{id:"_11-避免在css中使用表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-避免在css中使用表达式"}},[a._v("#")]),a._v(" 11. 避免在css中使用表达式")]),a._v(" "),_("p",[a._v("运算多次，性能消耗大。")]),a._v(" "),_("p",[a._v("现代浏览器已不支持了，无需了解。")]),a._v(" "),_("h2",{attrs:{id:"_12-使用link而不是-import导入样式表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-使用link而不是-import导入样式表"}},[a._v("#")]),a._v(" 12. 使用link而不是@import导入样式表")]),a._v(" "),_("p",[a._v("使用更加标准的link标记，而不是使用IE专用的@import语句")]),a._v(" "),_("h2",{attrs:{id:"_13-避免使用filters-滤镜"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-避免使用filters-滤镜"}},[a._v("#")]),a._v(" 13. 避免使用Filters(滤镜)")]),a._v(" "),_("p",[a._v("滤镜会阻塞渲染，影响性能。")]),a._v(" "),_("p",[a._v("现代浏览器已不支持了，无需了解。")]),a._v(" "),_("h2",{attrs:{id:"_14-把样式表放在顶部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-把样式表放在顶部"}},[a._v("#")]),a._v(" 14. 把样式表放在顶部")]),a._v(" "),_("p",[a._v("之所以放在顶部，是为了能让页面逐步渲染（渐进式呈现（render progressively））")]),a._v(" "),_("h1",{attrs:{id:"js部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js部分"}},[a._v("#")]),a._v(" js部分")]),a._v(" "),_("h2",{attrs:{id:"_15-去除重复脚本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-去除重复脚本"}},[a._v("#")]),a._v(" 15. 去除重复脚本")]),a._v(" "),_("h2",{attrs:{id:"_16-尽量减少dom访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-尽量减少dom访问"}},[a._v("#")]),a._v(" 16. 尽量减少DOM访问")]),a._v(" "),_("ol",[_("li",[a._v("缓存已访问过的dom元素")]),a._v(" "),_("li",[a._v("一批节点操作，不用一个一个的在dom树上操作，应该一起操作完再放dom树上")]),a._v(" "),_("li",[a._v("避免js直接修改布局，而是用js让节点选择预定义的其他css布局")])]),a._v(" "),_("h2",{attrs:{id:"_17-设计-智能-的事件处理程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_17-设计-智能-的事件处理程序"}},[a._v("#")]),a._v(" 17. 设计“智能”的事件处理程序")]),a._v(" "),_("p",[a._v("举例：监听A节点下的10个子节点的点击事件。应该把事件处理器绑定A节点而不是10个节点各自绑定。")]),a._v(" "),_("p",[a._v("通过事件冒泡获知哪个按钮是事件源")]),a._v(" "),_("p",[a._v("这样做维护方便（取消监听时只要取消一处），性能好（只有一个事件监听器）")]),a._v(" "),_("h2",{attrs:{id:"_18-把脚本放在底部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_18-把脚本放在底部"}},[a._v("#")]),a._v(" 18. 把脚本放在底部")]),a._v(" "),_("p",[a._v("脚本会堵塞页面的解析和渲染。")]),a._v(" "),_("p",[a._v("如果脚本不存在document依赖，则可以放在页面底部")]),a._v(" "),_("h1",{attrs:{id:"js-css"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js-css"}},[a._v("#")]),a._v(" js,css")]),a._v(" "),_("h2",{attrs:{id:"_19-将js和css作为外部文件引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_19-将js和css作为外部文件引用"}},[a._v("#")]),a._v(" 19. 将js和css作为外部文件引用")]),a._v(" "),_("p",[a._v("优点：")]),a._v(" "),_("ol",[_("li",[a._v("提高复用性")]),a._v(" "),_("li",[a._v("可以被浏览器缓存")]),a._v(" "),_("li",[a._v("提高可维护性")])]),a._v(" "),_("p",[a._v("缺点：\n增加额外请求")]),a._v(" "),_("p",[a._v("在下面三种情况下应该考虑直接在"),_("strong",[a._v("页面中")]),a._v("定义脚本和样式：")]),a._v(" "),_("ol",[_("li",[a._v("不复用")]),a._v(" "),_("li",[a._v("页面不被经常访问")]),a._v(" "),_("li",[a._v("脚本和样式很少")])]),a._v(" "),_("h2",{attrs:{id:"_20-压缩javascript和css"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_20-压缩javascript和css"}},[a._v("#")]),a._v(" 20. 压缩JAVASCRIPT和CSS")]),a._v(" "),_("p",[a._v("压缩，混淆。")]),a._v(" "),_("h1",{attrs:{id:"图片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[a._v("#")]),a._v(" 图片")]),a._v(" "),_("h2",{attrs:{id:"_21-优化图片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_21-优化图片"}},[a._v("#")]),a._v(" 21. 优化图片")]),a._v(" "),_("p",[a._v("gif采用"),_("code",[a._v("<video>")]),a._v("实现")]),a._v(" "),_("p",[a._v("图片继续压缩")]),a._v(" "),_("h2",{attrs:{id:"_22-优化-css-sprite"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_22-优化-css-sprite"}},[a._v("#")]),a._v(" 22. 优化 CSS Sprite")]),a._v(" "),_("p",[a._v("在"),_("code",[a._v("1.尽量减少HTTP请求数")]),a._v("中提到的技术。")]),a._v(" "),_("p",[a._v("通过background-image和background-position属性来定位要显示的部分")]),a._v(" "),_("p",[a._v("该技术的注意点：")]),a._v(" "),_("ol",[_("li",[a._v("选用"),_("a",{attrs:{href:"https://www.toptal.com/developers/css/sprite-generator"}},[a._v("工具")]),a._v("完成图片合并，省去人工测量像素位置")]),a._v(" "),_("li",[a._v("额外维护工作：某图片修改了，不仅需要生成新的图片，还涉及css的修改")]),a._v(" "),_("li",[a._v("一般只能使用固定大小的盒子，这样才能够遮挡住不应该看到的部分")])]),a._v(" "),_("p",[a._v("几个优化建议：")]),a._v(" "),_("ol",[_("li",[a._v("尽可能使用横向组合图片，这比纵向组合图片的体积通常更小一点")]),a._v(" "),_("li",[a._v("尽量使图片具有接近的色系，这样最终组合出来的图片也会小一些。")]),a._v(" "),_("li",[a._v("尽量使用小一些的图片，并且图片之间的间隙尽量也小一些，目的还是为了最终组合出来的图片体积更小")])]),a._v(" "),_("h2",{attrs:{id:"_23-不要在页面中缩放图片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_23-不要在页面中缩放图片"}},[a._v("#")]),a._v(" 23. 不要在页面中缩放图片")]),a._v(" "),_("p",[a._v("不要因为html本身可以设置宽高来使用"),_("strong",[a._v("本不需要的大图")]),a._v("，")]),a._v(" "),_("p",[a._v("若需要"),_("code",[a._v('<img width="100" height="100" src="mycat.jpg" alt="My Cat" />')])]),a._v(" "),_("p",[a._v("那么图片本身应该是100x100 px的，而不是去缩放500x500 px。")]),a._v(" "),_("p",[a._v("请记住并遵守这条原则：你需要在网页中显示什么尺寸的图片，就请图片设计人员提供什么尺寸的图片，而不是在网页中进行缩放。")]),a._v(" "),_("h2",{attrs:{id:"_24-使favicon-ico尽可能小并可缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_24-使favicon-ico尽可能小并可缓存"}},[a._v("#")]),a._v(" 24. 使favicon.ico尽可能小并可缓存")]),a._v(" "),_("p",[a._v("**注意：**即便你不管它，浏览器也会自动请求它，导致出现404。放在")]),a._v(" "),_("p",[a._v("建议：")]),a._v(" "),_("ol",[_("li",[a._v("1KB左右，百度：在线favicon.icon制作")]),a._v(" "),_("li",[a._v("可缓存")]),a._v(" "),_("li",[a._v("放在其他主机，避免请求时带上cookie")])]),a._v(" "),_("h1",{attrs:{id:"cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[a._v("#")]),a._v(" cookie")]),a._v(" "),_("h2",{attrs:{id:"_25-减小cookie的体积"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_25-减小cookie的体积"}},[a._v("#")]),a._v(" 25. 减小Cookie的体积")]),a._v(" "),_("ol",[_("li",[a._v("设置合适的有效期")]),a._v(" "),_("li",[a._v("设置合适的域级别")]),a._v(" "),_("li",[a._v("尽可能小")])]),a._v(" "),_("h2",{attrs:{id:"_26-把组件放在不含cookie的域下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_26-把组件放在不含cookie的域下"}},[a._v("#")]),a._v(" 26. 把组件放在不含cookie的域下")]),a._v(" "),_("p",[a._v("页面请求某个域时，会带上该域的cookie，对于一些静态资源，该cookie是没有必要发送的，此时可以把这些静态资源放在另外的域上。")]),a._v(" "),_("p",[a._v("除了不带cookie,还增加了页面资源的并发下载")]),a._v(" "),_("h1",{attrs:{id:"移动端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动端"}},[a._v("#")]),a._v(" 移动端")]),a._v(" "),_("h2",{attrs:{id:"_27-保证单个内容体积-25k"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_27-保证单个内容体积-25k"}},[a._v("#")]),a._v(" 27. 保证单个内容体积＜25K")]),a._v(" "),_("p",[a._v("iOS safari 早期版本（v3.2） 不能缓存超过25K（未压缩大小）的组件。")]),a._v(" "),_("p",[a._v("现在版本应该能比较大了，也不知道其他浏览器支持的都多大= =")]),a._v(" "),_("p",[a._v("不过，总的来说"),_("strong",[a._v("20. 压缩JAVASCRIPT和CSS")]),a._v("是必要的")]),a._v(" "),_("h2",{attrs:{id:"_28-将组件直接打包到页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_28-将组件直接打包到页面"}},[a._v("#")]),a._v(" 28. 将组件直接打包到页面")]),a._v(" "),_("p",[a._v("例子：")]),a._v(" "),_("ol",[_("li",[a._v("CSS中还有小图片的请求，可以直接把小图片base64化替换该css样式的图片url")]),a._v(" "),_("li",[a._v("邮件内容带图片，这种图片也是作为正文的一部分被编码进去的，无需新请求")])]),a._v(" "),_("h1",{attrs:{id:"服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[a._v("#")]),a._v(" 服务器")]),a._v(" "),_("h2",{attrs:{id:"_29-gzip组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_29-gzip组件"}},[a._v("#")]),a._v(" 29. Gzip组件")]),a._v(" "),_("p",[a._v("请求头中带有如下信息")]),a._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("Accept-Encoding: gzip, deflate\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br")])]),_("p",[a._v("这是根据浏览器的设置决定的,表示浏览器接受的压缩格式。")]),a._v(" "),_("p",[a._v("web服务器通过Content-Encoding相应头来通知客户端数据采用了哪种压缩方式。")]),a._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("Content-Encoding: gzip\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br")])]),_("h2",{attrs:{id:"_30-避免将img的src属性设置为空"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_30-避免将img的src属性设置为空"}},[a._v("#")]),a._v(" 30. 避免将img的src属性设置为空")]),a._v(" "),_("p",[a._v("早期浏览器仍会发送请求，现代浏览器不会发了。")]),a._v(" "),_("p",[a._v("设置为空，本意可能是想先不加载，等页面解析完再用js去设置img的src。")]),a._v(" "),_("p",[a._v("应该采取更好的实现方式：ImageLoader")]),a._v(" "),_("h2",{attrs:{id:"_31-配置etags"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_31-配置etags"}},[a._v("#")]),a._v(" 31. 配置ETags")]),a._v(" "),_("p",[a._v("ETags 是一个字符串，作为某组件某版本的唯一标识符。")]),a._v(" "),_("p",[a._v("服务器响应组件资源时，带上ETags响应头。")]),a._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v('HTTP/1.1 200 OK\nLast-Modified: Tue, 12 Dec 2006 03:03:59 GMT\nETag: "10c24bc-4ab-457e1c1f"\nContent-Length: 12195\n')])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br"),_("span",{staticClass:"line-number"},[a._v("2")]),_("br"),_("span",{staticClass:"line-number"},[a._v("3")]),_("br"),_("span",{staticClass:"line-number"},[a._v("4")]),_("br")])]),_("p",[a._v("浏览器继续请求组件时，会用If-None-Match请求头来把ETag传回源服务器。如果匹配成功，返回304，就减少了12195字节的响应")]),a._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v('GET /i/yahoo.gif HTTP/1.1\n      Host: us.yimg.com\n      If-Modified-Since: Tue, 12 Dec 2006 03:03:59 GMT\n      If-None-Match: "10c24bc-4ab-457e1c1f"\n      HTTP/1.1 304 Not Modified\n')])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br"),_("span",{staticClass:"line-number"},[a._v("2")]),_("br"),_("span",{staticClass:"line-number"},[a._v("3")]),_("br"),_("span",{staticClass:"line-number"},[a._v("4")]),_("br"),_("span",{staticClass:"line-number"},[a._v("5")]),_("br")])]),_("h2",{attrs:{id:"_32-对ajax用get请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_32-对ajax用get请求"}},[a._v("#")]),a._v(" 32. 对Ajax用GET请求")]),a._v(" "),_("p",[a._v("推荐用GET请求的原因：")]),a._v(" "),_("ol",[_("li",[a._v("GET请求能利用客户端的缓存")]),a._v(" "),_("li",[a._v("POST请求进行了两次请求：先发送请求头再发送数据")])]),a._v(" "),_("p",[a._v("但是，长度方面可能会有限制。")]),a._v(" "),_("p",[a._v("语义不易理解，违背RESTful原则")]),a._v(" "),_("h2",{attrs:{id:"_33-尽早发送缓冲区内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_33-尽早发送缓冲区内容"}},[a._v("#")]),a._v(" 33. 尽早发送缓冲区内容")]),a._v(" "),_("p",[a._v("后台服务器还在组装html页面的时候，先发一部分到给浏览器，一般是head之后。这样浏览器端可以先去加载head中指定的资源 和页面的剩余部分加载是并行的。")]),a._v(" "),_("p",[a._v("当响应耗时主要在后台的动态页面组装时，最能体现优势")]),a._v(" "),_("p",[a._v("具体实现技术应该是动态网页相关的，暂时不是很理解，这边先留个坑。")]),a._v(" "),_("h2",{attrs:{id:"_34-使用cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_34-使用cdn"}},[a._v("#")]),a._v(" 34. 使用CDN")]),a._v(" "),_("p",[_("a",{attrs:{href:"http://www.wangsu.com/"}},[a._v("网宿科技")]),a._v("了解一下")]),a._v(" "),_("h2",{attrs:{id:"_35-添上expires或者cache-control-http头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_35-添上expires或者cache-control-http头"}},[a._v("#")]),a._v(" 35. 添上Expires或者Cache-Control HTTP头")]),a._v(" "),_("p",[_("s",[a._v("需要总结下缓存控制的用法。这边先留个坑")])]),a._v(" "),_("p",[a._v("这两个都是用于强缓存(200 form cache)的，")]),a._v(" "),_("blockquote",[_("p",[a._v("Cache-Control:缓存时间值\nExpires:绝对时间\n同时存在时，"),_("code",[a._v("Cache-Control")]),a._v(" 优先于"),_("code",[a._v("Expires")]),a._v("，使用"),_("code",[a._v("Cache-Control")]),a._v("的一个好处是不用担心服务端时间和本地时间不一致")])]),a._v(" "),_("p",[a._v("这篇总结的还行："),_("a",{attrs:{href:"https://www.cnblogs.com/wonyun/p/5524617.html"}},[a._v("http协商缓存VS强缓存")])]),a._v(" "),_("p",[a._v("这里补充两点：")]),a._v(" "),_("ol",[_("li",[a._v("浏览器开发者工具开启 "),_("strong",[a._v("Disable cache")]),a._v("后，任何请求都不会走本地强缓存，但是会走304协商缓存（强制刷新除外）")]),a._v(" "),_("li",[a._v("未开启"),_("strong",[a._v("Disable cache")]),a._v("的状态下，ctrl+F5强制刷新，对于"),_("code",[a._v("page load")]),a._v("前的请求，都是不走缓存(强缓存和协商缓存"),_("code",[a._v("cache-control:no-cache")]),a._v(")的，但是"),_("code",[a._v("page load")]),a._v("后的请求不受限制可以走缓存")])]),a._v(" "),_("h1",{attrs:{id:"其他新技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他新技术"}},[a._v("#")]),a._v(" 其他新技术")]),a._v(" "),_("h2",{attrs:{id:"dns预解析-dns-prefetch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns预解析-dns-prefetch"}},[a._v("#")]),a._v(" DNS预解析-dns-prefetch")]),a._v(" "),_("p",[a._v("见 "),_("code",[a._v("W3C_DNS_Prefetching.md")])]),a._v(" "),_("h1",{attrs:{id:"后记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[a._v("#")]),a._v(" 后记")]),a._v(" "),_("p",[a._v("以上内容只是对35优化原则的简单记录和个人见解，非译文。")]),a._v(" "),_("p",[a._v("yahoo原文：https://developer.yahoo.com/performance/rules.html")]),a._v(" "),_("p",[a._v("分享几篇写的不错的：")]),a._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/xianyulaodi/p/5755079.html"}},[a._v("雅虎前端优化的35条军规")])]),a._v(" "),_("li",[_("a",{attrs:{href:"http://www.cnblogs.com/chenxizhang/archive/2013/05/20/3088196.html"}},[a._v("优化网站设计系列文章总结和导读")])])])])}),[],!1,null,null,null);_.default=v.exports}}]);