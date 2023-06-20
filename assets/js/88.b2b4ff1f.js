(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{823:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("在尝试调试 JS 引擎的时候，发现需要用到这些工具")]),s._v(" "),t("p",[s._v("其中 v8 用 gdb, JavaScriptCore 用 lldb")]),s._v(" "),t("p",[s._v("macOS 版本： 10.15")]),s._v(" "),t("p",[s._v("先来说说 gdb 的使用吧")]),s._v(" "),t("h2",{attrs:{id:"gdb-安装与签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb-安装与签名"}},[s._v("#")]),s._v(" gdb 安装与签名")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gdb\ngdb "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 9.2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("网上有说什么高版本有坑的需要下特定版本的，反正我暂时没遇到")]),s._v(" "),t("p",[s._v("上面安装完后还会输出以下信息（很关键）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('gdb requires special privileges to access Mach ports.\nYou will need to codesign the binary. For instructions, see:\n\n  https://sourceware.org/gdb/wiki/BuildingOnDarwin\n\nOn 10.12 (Sierra) or later with SIP, you need to run this:\n\n  echo "set startup-with-shell off" >> ~/.gdbinit\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("安装完需要进行签名，否则会报类似以下的错误")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Starting program: /x/y/foo\nUnable to find Mach task port for process-id 28885: (os/kern) failure (0x5).\n (please check gdb is codesigned - see taskgated(8))\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("网上"),t("a",{attrs:{href:"https://blog.csdn.net/weixin_30257433/article/details/94883470",target:"_blank",rel:"noopener noreferrer"}},[s._v("大部分文章"),t("OutboundLink")],1),s._v("讲的都是 10.14 之前的做法，按之前的做法还是会签名失败。")]),s._v(" "),t("p",[s._v("可以看上面输出的地址 -- https://sourceware.org/gdb/wiki/BuildingOnDarwin ，里面讲了如何解决这个问题。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" taskgated\ncodesign "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fs")]),s._v(" gdb_codesign "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" gdb"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"gdb-调试命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb-调试命令"}},[s._v("#")]),s._v(" gdb 调试命令")]),s._v(" "),t("p",[s._v("权当记录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\nlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看程序代码")]),s._v("\n回车 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示执行上一条命令")]),s._v("\nstart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始执行程序")]),s._v("\nrun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从头开始调试")]),s._v("\nquit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出程序")]),s._v("\nnext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单步执行")]),s._v("\nstep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入函数")]),s._v("\nbacktrace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看函数调用栈帧 结果显示: #0 xxx #1 xxx")]),s._v("\nframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#选择 x 号栈帧")]),s._v("\n\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" locals "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看变量信息")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" breakpoints "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看断点信息")]),s._v("\ninfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" watchpoints "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询观察点")]),s._v("\n\nprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出变量 x 的值")]),s._v("\nfinish "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将程序运行到当前函数返回")]),s._v("\ncontinue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将程序运行到结束或者断点处")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" var 变量"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("XX "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进行变量赋值")]),s._v("\ndisplay 变量 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#追踪变量值，每次执行(next)都会对追踪变量进行输出显示")]),s._v("\nundisplay 编号 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#取消追踪")]),s._v("\n\nbreak"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 行号/函数名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("条件语句"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置断点")]),s._v("\ndelete breakpoints 断点编号  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除断点，没带断点编号则删除所有断点")]),s._v("\ndisable breakpoints 断点编号 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁用断点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" 断点编号 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用断点")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#观察点是当程序访问某个存储单元时中断")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问arr[4] 时中断")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h2",{attrs:{id:"gdb-调试-实例分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb-调试-实例分析"}},[s._v("#")]),s._v(" gdb 调试-实例分析")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("gcc test.c "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ngdb "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/30ffc01380a0",target:"_blank",rel:"noopener noreferrer"}},[s._v("GDB调试工具总结"),t("OutboundLink")],1),s._v(" 这篇文章举了几个例子，并一步步教命令怎么使用，建议阅读，这里就不重复了。")]),s._v(" "),t("h2",{attrs:{id:"gdb-与-vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb-与-vscode"}},[s._v("#")]),s._v(" gdb 与 vscode")]),s._v(" "),t("p",[s._v("利用命令进行调试，对于新手来说有点麻烦，那么用 vscode 来进行调试就是一个不错的选择")]),s._v(" "),t("p",[s._v("需要先安装 c/c++ 插件")]),s._v(" "),t("p",[s._v("启动调试，此时需要一个启动的 json 文件")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use IntelliSense to learn about possible attributes.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Hover to view descriptions of existing attributes.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"configurations"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gcc - 生成和调试活动文件"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cppdbg"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"program"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceRoot}/test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"stopAtEntry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cwd"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"environment"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"externalConsole"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"MIMode"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lldb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preLaunchTask"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("等价于 "),t("code",[s._v("gdb test")])]),s._v(" "),t("p",[s._v("test 是我们要调试的程序，再执行之前我们需要先编译链接生成它，所以又创了一个任务 build")]),s._v(" "),t("p",[s._v("版本不一样，配置也不一样，根据系统提示的进行创建")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// See https://go.microsoft.com/fwlink/?LinkId=733558")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// for the documentation about the tasks.json format")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tasks"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"label"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shell"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gcc test.c -g -o test.o"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"peda-插件-增强-gdb-的显示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#peda-插件-增强-gdb-的显示"}},[s._v("#")]),s._v(" peda 插件：增强 gdb 的显示")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/longld/peda.git ~/peda\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source ~/peda/peda.py"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.gdbinit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"lldb-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lldb-使用"}},[s._v("#")]),s._v(" lldb 使用")]),s._v(" "),t("p",[s._v("https://lldb.llvm.org/")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://lldb.llvm.org/use/map.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("与 gdb 命令的映射"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"chisel-插件-增强-lldb-的显示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chisel-插件-增强-lldb-的显示"}},[s._v("#")]),s._v(" chisel 插件：增强 lldb 的显示")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chisel\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command script import /usr/local/opt/chisel/libexec/fblldb.py"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.lldbinit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/30ffc01380a0",target:"_blank",rel:"noopener noreferrer"}},[s._v("GDB调试工具总结"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://sourceware.org/gdb/wiki/PermissionsDarwin",target:"_blank",rel:"noopener noreferrer"}},[s._v("PermissionsDarwin"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);