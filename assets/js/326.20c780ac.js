(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1068:function(e,s,a){"use strict";a.r(s);var r=a(27),t=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("在某个chrome版本遇到了一个bug，需要复现")]),e._v(" "),s("p",[e._v("由于一个电脑不支持装2个版本 chrome。 当然，是可以装一个标准版一个dev版")]),e._v(" "),s("blockquote",[s("p",[e._v("不过，试了下 chrome dev版本的只有高版本可以，dev低版本打开一样是进入原先的chrome")])]),e._v(" "),s("h2",{attrs:{id:"测试环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[e._v("#")]),e._v(" 测试环境")]),e._v(" "),s("p",[e._v("OS: win10")]),e._v(" "),s("p",[e._v("docker 18.09.02")]),e._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[e._v("#")]),e._v(" 步骤")]),e._v(" "),s("ol",[s("li",[e._v("安装 docker")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("下载很慢。。千万不用用浏览器自带的下载，容易网络错误然后中断")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("下载镜像（docker pul）")])]),e._v(" "),s("p",[e._v("打开 命令提示符（CMD）")]),e._v(" "),s("p",[e._v("下载的命令是docker pull+镜像名称+tag")]),e._v(" "),s("p",[e._v("这里主要下这两个")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull baozhida/selenium-hub:3.3.1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull baozhida/selenium-node-chrome-debug:58\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("创建并运行容器")])]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#创建selenium hub容器")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4444")]),e._v(":4444 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" selehub baozhida/selenium-hub:3.3.1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#创建chrome node容器")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5901")]),e._v(":5900 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" node58 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--link")]),e._v(" selehub:hub --shm-size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("512m baozhida/selenium-node-chrome-debug:58\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("strong",[e._v("说明：")])]),e._v(" "),s("p",[e._v("-d参数：后台模式运行；")]),e._v(" "),s("p",[e._v("--name参数：别名；")]),e._v(" "),s("p",[e._v("-p参数：将容器的5900端口映射到docker的5901端口，访问Docker的5901端口即可访问到node容器；")]),e._v(" "),s("p",[e._v("--shm-size参数：docker默认的共享内存/dev/shm只有64m，有时导致chrome崩溃，该参数增加共享内存大小到512m.")]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[e._v("查看镜像和容器")])]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#查看本地已经下载的镜像")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" images\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#查看正在运行的容器")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-a")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("在浏览器输入地址 http://localhost:4444/grid/console")]),e._v(" "),s("p",[e._v("查看Selenium Grid控制台，能看到刚创建的容器已经正常注册。")]),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("VNC远程浏览器环境")])]),e._v(" "),s("p",[e._v("需要先下载 "),s("a",{attrs:{href:"https://www.realvnc.com/download/file/viewer.files/VNC-Viewer-6.19.325-Windows.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("vnc viewer"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("新建连接->VNC Server输入 localhost:5901--\x3e回车--\x3e输入密码：secret--\x3e确认--\x3e进入容器桌面")]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[e._v("启动chrome")])]),e._v(" "),s("p",[e._v("进入容器桌面后，桌面是黑的且只有一个图标（这里就不截图了）")]),e._v(" "),s("p",[e._v("右键->应用程序-shell-sh->执行命令")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#查看驱动的版本")]),e._v("\nchromedriver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#查看浏览器版本")]),e._v("\ngoogle-chrome "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--version")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#直接启动浏览器")]),e._v("\ngoogle-chrome\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("直接启动浏览器进行测试~")]),e._v(" "),s("h2",{attrs:{id:"后记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记")]),e._v(" "),s("p",[e._v("可以在 "),s("a",{attrs:{href:"https://hub.docker.com/r/baozhida/selenium-node-chrome-debug/tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v(" 找到 "),s("code",[e._v("baozhida/selenium-node-chrome-debug")]),e._v(" 的所有版本，目前最新版本为 58 ，作者已不再维护")]),e._v(" "),s("p",[e._v("若想使用其他版本的浏览器，参考我的另一篇文章 -- "),s("RouterLink",{attrs:{to:"/02.服务端/服务部署/虚拟化/Docker/通过docker-selenium进行浏览器测试.html"}},[e._v("通过docker-selenium进行浏览器测试")])],1),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://testerhome.com/topics/8450",target:"_blank",rel:"noopener noreferrer"}},[e._v("Selenium Docker 在 WebUI 自动化测试中的应用"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);