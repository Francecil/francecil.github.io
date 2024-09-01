(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{963:function(s,e,t){"use strict";t.r(e);var a=t(28),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),e("p",[s._v("前端开发经常遇到项目依赖变更的问题，可以归结为时间、空间和人三个方向。")]),s._v(" "),e("ul",[e("li",[s._v("时间：没有锁版本（lock），下次安装时部分依赖会更新到最新的小版本")]),s._v(" "),e("li",[s._v("空间：系统的 Node.js 版本、包管理工具版本等与目标要求不一致，导致依赖变更")]),s._v(" "),e("li",[s._v("人：使用了错误的包管理工具或者命令，导致依赖变更")])]),s._v(" "),e("p",[s._v("这些问题不能单纯依靠文档规范来限制，需要"),e("strong",[s._v("有行之有效的工具")]),s._v("来避免。")]),s._v(" "),e("p",[s._v("本文会先描述这些常见问题的原因和解决方案，并在最后给出可实施的最佳实践。")]),s._v(" "),e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a514a5007d04ed5b92331ee008482a7~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),s._v(" "),e("h2",{attrs:{id:"_1-不锁版本-lock-依赖包会自动更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-不锁版本-lock-依赖包会自动更新"}},[s._v("#")]),s._v(" 1.  不锁版本（lock），依赖包会自动更新")]),s._v(" "),e("p",[s._v("这个应该都懂，需要"),e("strong",[s._v("把 lock 文件加入 git 版本控制")]),s._v("之中。")]),s._v(" "),e("p",[s._v("但可能有些同学不知道为什么这么做，这里简单提下。")]),s._v(" "),e("p",[s._v("如果没有锁文件（比如 "),e("code",[s._v("package-lock.json")]),s._v("），Node 在安装依赖时会选择符合版本范围的最新版本，这个版本范围的设计叫做 "),e("a",{attrs:{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[s._v("semver"),e("OutboundLink")],1),s._v(" 规范，其格式为 "),e("code",[s._v("主版本号.次版本号.修订号")]),s._v(" ，版本号递增规则如下：")]),s._v(" "),e("ol",[e("li",[s._v("主版本号：当你做了不兼容的 API 修改，")]),s._v(" "),e("li",[s._v("次版本号：当你做了向下兼容的功能性新增，")]),s._v(" "),e("li",[s._v("修订号：当你做了向下兼容的问题修正。")])]),s._v(" "),e("p",[s._v("理想情况下大家都照这个要求设计，有不兼容变更就做"),e("code",[s._v("主版本号")]),s._v("升级，那当然没问题，大家也乐意自动更新来修复漏洞。")]),s._v(" "),e("p",[s._v("然而实际情况上社区的大部分包并不遵守这个约定，有不兼容变更却只是升级了 "),e("code",[s._v("修订号")]),s._v(" 或者 "),e("code",[s._v("次版本号")]),s._v("。。如果选了自动升级，那么准备等待项目报错吧。")]),s._v(" "),e("p",[s._v("因此还是乖乖的 "),e("strong",[s._v("lock 文件加入 git 版本控制")]),s._v("吧。")]),s._v(" "),e("h2",{attrs:{id:"_2-锁了版本包也没动-还是更新了依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-锁了版本包也没动-还是更新了依赖"}},[s._v("#")]),s._v(" 2.  锁了版本包也没动，还是更新了依赖")]),s._v(" "),e("p",[s._v("主要表现为"),e("strong",[s._v("没有改动包版本，也使用了 lock 锁定版本")]),s._v("，但是后面重装依赖时还是更新了版本和 lock 文件。")]),s._v(" "),e("p",[s._v("如果出现这个原因，是 npm 5.x 时期的"),e("a",{attrs:{href:"https://github.com/npm/npm/issues/17979",target:"_blank",rel:"noopener noreferrer"}},[s._v("某些奇怪设计"),e("OutboundLink")],1),s._v("，更新 npm 包版本即可。")]),s._v(" "),e("p",[s._v("一些相关的讨论：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json?rq=4",target:"_blank",rel:"noopener noreferrer"}},[s._v('Why does "npm install" rewrite package-lock.json?'),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/npm/npm/issues/18103",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clarify documentation for package-lock.json behaviour"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/npm/npm/issues/17979",target:"_blank",rel:"noopener noreferrer"}},[s._v("why is package-lock being ignored? · Issue #17979 · npm/npm"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_3-混用包管理工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-混用包管理工具"}},[s._v("#")]),s._v(" 3.  混用包管理工具")]),s._v(" "),e("p",[s._v("接到一个新项目，我们会选择什么包管理工具安装依赖？")]),s._v(" "),e("p",[s._v("有经验的同学可能会先看项目说明文档（如果有的话），或者看看项目存在哪种 lock 文件（"),e("code",[s._v("package-lock.json")]),s._v("、"),e("code",[s._v("pnpm-lock.json")]),s._v(" 、"),e("code",[s._v("yarn.lock")]),s._v("），再决定使用对应的包管理工具。")]),s._v(" "),e("p",[s._v("但总有部分人，"),e("strong",[s._v("经验不足或基于习惯")]),s._v("，使用了与项目要求不符的包管理工具。这样的问题在于，该包管理工具没有 lock 文件，依赖是最新的不可置信的。也不可能把这个错误的 lock 文件提交，那会导致管理混乱。")]),s._v(" "),e("p",[s._v("如何解决？把非目标的包管理工具 lock 文件加入 "),e("code",[s._v("gitignore")]),s._v(" ，只能解决管理混乱。")]),s._v(" "),e("p",[s._v("可以尝试在安装依赖前（"),e("code",[s._v("preinstall")]),s._v("/"),e("code",[s._v("prepare")]),s._v(" npm-script 钩子），检查依赖安装命令用的工具是否符合预期，如果不符合预期则中断安装并提示使用正确的命令。")]),s._v(" "),e("p",[s._v("社区也有现成的工具 "),e("a",{attrs:{href:"https://github.com/pnpm/only-allow",target:"_blank",rel:"noopener noreferrer"}},[s._v("only-allow"),e("OutboundLink")],1),s._v("，可以直接使用，具体可以看官方文档。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preinstall"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npx only-allow pnpm"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-安装具体依赖不会触发-prepare-钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装具体依赖不会触发-prepare-钩子"}},[s._v("#")]),s._v(" 4.  安装具体依赖不会触发 "),e("code",[s._v("prepare")]),s._v(" 钩子")]),s._v(" "),e("p",[s._v("问题 3 中，我们提到了使用 "),e("code",[s._v("prepare")]),s._v(" 钩子来检测依赖安装命令是否符合预期。")]),s._v(" "),e("p",[s._v("然而 "),e("code",[s._v("prepare")]),s._v(" 钩子的触发条件是有限制的（"),e("code",[s._v("preinstall")]),s._v(" 同），如果 install 命令存在其他参数，将无法触发这个钩子。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i lodash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1),s._v("也有说明：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55e978dbb4b64a289977096369b81813~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),s._v(" "),e("p",[s._v("由于 npm 针对单个依赖安装触发钩子的 "),e("a",{attrs:{href:"https://github.com/npm/rfcs/issues/325",target:"_blank",rel:"noopener noreferrer"}},[s._v("RFC"),e("OutboundLink")],1),s._v(" 还在讨论阶段，故目前还没有根本的解决方案，但我们可以通过一些手段来避免这个问题：")]),s._v(" "),e("ul",[e("li",[s._v("如问题 3 所说，把错误的包管理工具 lock 文件加入 "),e("code",[s._v("gitignore")])]),s._v(" "),e("li",[s._v("提交合并请求时，在 CI 阶段做一次 lock 文件完整性校验。如果 "),e("code",[s._v("package.json")]),s._v(" 的依赖存在变更，但没有加入lock 文件，说明之前的安装方式不正确。")])]),s._v(" "),e("p",[s._v("一些相关的讨论：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/pnpm/only-allow/issues/1",target:"_blank",rel:"noopener noreferrer"}},[s._v("Does not seem to work with single package installs · Issue #1 · pnpm/only-allow"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/63165630/trouble-with-npm-preinstall-script",target:"_blank",rel:"noopener noreferrer"}},[s._v("trouble with npm preinstall script"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_5-自动使用正确的依赖安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-自动使用正确的依赖安装命令"}},[s._v("#")]),s._v(" 5.  自动使用正确的依赖安装命令")]),s._v(" "),e("p",[s._v("问题 3 中，我们提到了使用 "),e("code",[s._v("prepare")]),s._v(" 钩子来检测依赖安装命令是否符合预期，如果不符合预期则中断安装并提示使用正确的命令。")]),s._v(" "),e("p",[s._v("那能否调整为：如果不符合预期，则使用正确的命令安装？")]),s._v(" "),e("p",[s._v("一个技巧是，在 "),e("code",[s._v("prepare")]),s._v(" 钩子中执行正确的安装命令，在安装后中断脚本运行，避免走到默认的依赖安装。")]),s._v(" "),e("p",[s._v("示例脚本：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install.sh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 preinstall 中添加如下脚本")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "preinstall": "sh install.sh",')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无论使用什么包管理工具，最后都改成 pnpm install")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'已自动改成 pnpm install'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳过 scripts ，避免循环执行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --ignore-scripts\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" package-lock.json\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" yarn.lock\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'安装完成，中断后续执行'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("blockquote",[e("p",[s._v("以上为测试代码，请勿使用在生产项目中。如果有更好的方案，欢迎分享讨论~")])]),s._v(" "),e("h2",{attrs:{id:"_6-限制-node-和包管理工具的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-限制-node-和包管理工具的版本"}},[s._v("#")]),s._v(" 6.  限制 Node 和包管理工具的版本")]),s._v(" "),e("p",[s._v("因为设计思路的变化，包管理工具的不同版本也会导致 lock 文件不同。")]),s._v(" "),e("p",[s._v("有一些项目只能运行在特定的 Node.js 版本，又或者使用特定版本的包管理工具安装依赖。")]),s._v(" "),e("p",[s._v("Node.js 好理解，不同版本的语法会有变化。而使用特定版本的包管理工具，通常是和"),e("a",{attrs:{href:"https://rushjs.io/pages/advanced/phantom_deps/",target:"_blank",rel:"noopener noreferrer"}},[s._v("幽灵依赖"),e("OutboundLink")],1),s._v("相关。某些依赖凑巧使用了另一个版本的依赖，一切凑巧使得项目能够正常运行。如果更新了包管理工具版本，依赖组织方式变了，那项目就不一定能运行了。")]),s._v(" "),e("p",[s._v("彻底的解决方案还是进行升级，但没有时间、收益太低，且这种改动影响面太大，通常需要整体测试。")]),s._v(" "),e("p",[s._v("因此，通常还是选择利用 "),e("code",[s._v("package.json")]),s._v(" 的 "),e("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[s._v("engines"),e("OutboundLink")],1),s._v(" 字段限制 Node 和包管理工具的版本。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"engines"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('">=14"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npm"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pnpm"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"yarn"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("需要注意的是，"),e("code",[s._v("engines.npm")]),s._v(" 默认并不生效（只警告不中断），需要在 "),e("code",[s._v(".npmrc")]),s._v(" 文件中添加 "),e("code",[s._v("engine-strict=true")]),s._v(" 才行。也有另一种解决方案是在 "),e("code",[s._v("prepare")]),s._v(" 钩子中检测 npm 的版本，如果不符合版本要求就中断执行，相关代码可以看这篇"),e("a",{attrs:{href:"https://www.cnblogs.com/Wayou/p/restrict_node_version.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"_7-快速切换版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-快速切换版本"}},[s._v("#")]),s._v(" 7.  快速切换版本")]),s._v(" "),e("p",[s._v("在问题 6 中，我们谈到了限制 Node 和包管理工具的版本。但有限制就会有快速切换的需求，一个电脑通常不只跑一个项目。")]),s._v(" "),e("p",[s._v("如何快速切换？比如 "),e("code",[s._v("node 12")]),s._v(" 切换到 "),e("code",[s._v("node 14")]),s._v("，又或者 "),e("code",[s._v("pnpm 6")]),s._v(" 切换到 "),e("code",[s._v("pnpm 7")]),s._v(" ？")]),s._v(" "),e("p",[s._v("我们拆成两个问题来看：")]),s._v(" "),e("ol",[e("li",[s._v("快速切换 Node 版本")]),s._v(" "),e("li",[s._v("快速切换包管理工具版本")])]),s._v(" "),e("blockquote",[e("p",[s._v("20230709 更新，有个工具 "),e("a",{attrs:{href:"https://github.com/volta-cli/volta",target:"_blank",rel:"noopener noreferrer"}},[s._v("volta"),e("OutboundLink")],1),s._v(" 可以更方便的做这个事情")])]),s._v(" "),e("h3",{attrs:{id:"快速切换-node-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速切换-node-版本"}},[s._v("#")]),s._v(" 快速切换 Node 版本")]),s._v(" "),e("p",[s._v("切换 Node 版本简单，使用 "),e("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm"),e("OutboundLink")],1),s._v(" 来管理即可。")]),s._v(" "),e("p",[s._v("还可以在项目根目录创建 "),e("code",[s._v(".nvmrc")]),s._v(" 文件并添加版本号，需要切换的时候直接 "),e("code",[s._v("nvm use")]),s._v(" 即可，无需记忆版本。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .nvmrc")]),s._v("\nv16"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("还能不能更快？比如我切换了项目目录，就自动帮忙切换版本。")]),s._v(" "),e("p",[s._v("在社区上找到了一款叫 "),e("a",{attrs:{href:"https://github.com/wbyoung/avn",target:"_blank",rel:"noopener noreferrer"}},[s._v("avn"),e("OutboundLink")],1),s._v(" 的工具，号称能做这样的事，但看起来很久没迭代了，这种监测应该会有额外的性能影响，没有实际体验过不做评价。")]),s._v(" "),e("p",[s._v("我个人的实践是将 node 版本检测和切换的逻辑放入 "),e("code",[s._v("prepare")]),s._v(" 等钩子，在需要的时候再切。")]),s._v(" "),e("h3",{attrs:{id:"快速切换包管理工具版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速切换包管理工具版本"}},[s._v("#")]),s._v(" 快速切换包管理工具版本")]),s._v(" "),e("p",[s._v("通常包管理工具在全局只会存在一个版本，有以下 3 种解决方案:")]),s._v(" "),e("ol",[e("li",[s._v("corepack: Node.js 16 推出，可以用来管理各种包版本工具，包括 npm/yarn/pnpm，参考文档："),e("a",{attrs:{href:"https://nodejs.org/api/corepack.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Corepack"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://pnpm.io/installation#using-corepack",target:"_blank",rel:"noopener noreferrer"}},[s._v("pnpm using corepack"),e("OutboundLink")],1)])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以 pnpm 版本切换为例")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 corepack")]),s._v("\ncorepack "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定版本")]),s._v("\ncorepack prepare pnpm@"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--activate")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 Node.js v16.17 及以上版本，支持使用 latest tag 安装最新的版本")]),s._v("\ncorepack prepare pnpm@latest "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--activate")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("pnpm dlx: 使用 "),e("a",{attrs:{href:"https://pnpm.io/cli/dlx",target:"_blank",rel:"noopener noreferrer"}},[s._v("pnpm dlx"),e("OutboundLink")],1),s._v(" 来指定 pnpm 运行命令使用 "),e("code",[s._v("pnpm7")]),s._v(" ，可以参考"),e("a",{attrs:{href:"https://www.cnblogs.com/lessfish/p/16908785.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),e("OutboundLink")],1),s._v("，个人不推荐")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" dlx pnpm@7 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" dlx pnpm@7 run dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("项目内依赖：在公司内部有个实践，把 pnpm 等包管理工具作为依赖安装在项目中，再通过其他命令调用，把命令转发给这个项目内的 pnpm 。这样做的好处是可以实现包管理工具的版本控制，缺点就是需要改用其他命令。")])]),s._v(" "),e("h1",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),e("p",[s._v("对上面的问题做下整理，可以得到以下最佳实践。")]),s._v(" "),e("ol",[e("li",[s._v("使用 lock 来锁住版本，并使用较新版本的 npm 避免一些遗留问题")]),s._v(" "),e("li",[s._v("把非目标的包管理工具 lock 文件加入 "),e("code",[s._v("gitignore")])]),s._v(" "),e("li",[s._v("使用 prepare 钩子和 only-allow 工具避免混用包管理工具")]),s._v(" "),e("li",[s._v("在 CI 阶段再次进行 lock 文件完整性校验")]),s._v(" "),e("li",[s._v("使用 "),e("code",[s._v("package.json")]),s._v(" 的 "),e("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[s._v("engines"),e("OutboundLink")],1),s._v(" 字段限制 Node 和包管理工具的版本")])]),s._v(" "),e("h1",{attrs:{id:"展望"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展望"}},[s._v("#")]),s._v(" 展望")]),s._v(" "),e("p",[s._v("实际上还存在一些问题，比如问题 5 的「自动使用正确的依赖安装命令」，目前还缺少官方解决方案。以及问题 7 提到的 Corepack 工具，目前还处于实验阶段。")]),s._v(" "),e("p",[s._v("感叹下，前端的基建真挺稀烂的，一些不合理的设计，导致了数百万前端程序员接盘，不过这个情况也在慢慢变好了。")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("最后，👋🏻 Respect！欢迎一键三连 ~")])])}),[],!1,null,null,null);e.default=n.exports}}]);