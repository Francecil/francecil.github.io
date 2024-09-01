(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{732:function(t,s,a){t.exports=a.p+"assets/img/image-17.b6077de1.png"},733:function(t,s,a){t.exports=a.p+"assets/img/image-42.349043e4.png"},734:function(t,s,a){t.exports=a.p+"assets/img/image-43.3aecdcd2.png"},735:function(t,s,a){t.exports=a.p+"assets/img/image-44.956aa724.png"},736:function(t,s,a){t.exports=a.p+"assets/img/image-45.ec2e5d42.png"},737:function(t,s,a){t.exports=a.p+"assets/img/image-46.def9e20a.png"},969:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在软件开发领域，代码质量一直是开发者们关注的焦点之一。为了更好地评估和管理代码质量，人们逐渐引入了量化指标的概念。")]),t._v(" "),s("p",[t._v("本文将从"),s("strong",[t._v("代码质量的定义、定性方法、量化指标")]),t._v("等方面展开讨论。")]),t._v(" "),s("h1",{attrs:{id:"代码质量-好代码与坏代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码质量-好代码与坏代码"}},[t._v("#")]),t._v(" 代码质量：好代码与坏代码")]),t._v(" "),s("p",[t._v("什么样的代码是好代码？")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("TA 说：功能丰富，没有 Bug，性能优越")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n计算总价：不同的阶梯数量单价不同\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("blockquote",[s("p",[t._v("这段代码从功能完备性的角度来说，能够满足用户的需求，且没有 bug。但我们能说它是好代码么？")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("TA 说：好的代码就像好的笑话一样，它不需要解释（Good code is like a good joke: It needs no explanation）")]),t._v(" "),s("blockquote",[s("p",[t._v("有些代码你就是觉得它好，但是又说不出来好在哪里，这种主观评价其实是因为你没有彻底搞懂它，就像某些中医一样。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("TA 说：我们可以根据这段代码被骂 shit 的次数来评判")]),t._v(" "),s("p",[s("img",{attrs:{src:a(732),alt:"每分钟爆粗数量 -《代码整洁之道》插图"}})]),t._v(" "),s("blockquote",[s("p",[t._v("这是一个有趣的指标，以 Code Review 时「每分钟爆粗数量」来作为度量指标。但是它不够科学有效，也无法准确度量。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("至此，我们可以达成 2 个共识：")]),t._v(" "),s("ol",[s("li",[t._v("代码质量指的是实现功能需求时代码内部结构的质量，而不是使用软件或服务的用户满意程度。")]),t._v(" "),s("li",[t._v("好的代码容易维护，而坏的代码会增加理解成本、改动成本等维护成本。")])]),t._v(" "),s("h1",{attrs:{id:"定性方法-可维护性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定性方法-可维护性"}},[t._v("#")]),t._v(" 定性方法：可维护性")]),t._v(" "),s("p",[t._v("好的代码容易维护，那么容易维护具体是怎样的表现？\n参考《重构：改善即有代码的设计》一书中罗列的代码坏味道（比喻低质量的代码设计和实现所显现的“症状”）和重构手法，我们可以对可维护性继续拆解为：可读性、可复用性、可测试性、可变更性。")]),t._v(" "),s("ul",[s("li",[t._v("可读性：遵守规范，良好的命名和结构，适当的文档和注释等等。不规范的代码、不良注释和复杂度过高的代码会增加阅读和理解代码的难度")]),t._v(" "),s("li",[t._v("可复用性：代码应该尽可能地模块化，降低各模块之间的耦合度，提高代码的复用性，避免重复劳动和冗余代码。重复代码会造成维护成本的成倍增加。")]),t._v(" "),s("li",[t._v("可测试性：代码应该配备充分的单元测试，覆盖各种边界情况和异常情况，保证代码的稳定性和可靠性。复杂度过高会增加测试覆盖的难度，而缺少测试覆盖的代码会使得定位问题和修复问题的难度加大。")]),t._v(" "),s("li",[t._v("可变更性：代码应该具备良好的可扩展性，能够方便地进行功能扩展和修改。结构不良、低内聚高耦合的代码则会使得哪怕是微小的需求变更或功能扩展都无从下手，修改的代价很可能超过了重写的代价。")])]),t._v(" "),s("p",[t._v("至此，我们得到了一些定性的办法来衡量代码的质量，可以参考书中的重构方法来应对这些问题。")]),t._v(" "),s("h1",{attrs:{id:"量化指标-sqale-与技术债"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量化指标-sqale-与技术债"}},[t._v("#")]),t._v(" 量化指标：SQALE 与技术债")]),t._v(" "),s("p",[t._v("借助扫描工具，我们可以得到一些技术指标。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("指标")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("可靠性")]),t._v(" "),s("td",[t._v("这个区域对应的代码，会遇到更多期望外的问题。> 部分是误报(插件能力或配置问题)> 部分确实能够发现，参考示例")])]),t._v(" "),s("tr",[s("td",[t._v("覆盖率")]),t._v(" "),s("td",[t._v("代码覆盖测试过的次数> 需要搭配额外的测试覆盖率工具使用。")])]),t._v(" "),s("tr",[s("td",[t._v("重复率")]),t._v(" "),s("td",[t._v("代码重复的比例")])]),t._v(" "),s("tr",[s("td",[t._v("文件行数")]),t._v(" "),s("td",[t._v("代码行数、注释数等")])]),t._v(" "),s("tr",[s("td",[t._v("复杂度")]),t._v(" "),s("td",[t._v("圈复杂度，表示测试当前代码，所需要编写的单元测试的最小数量")])])])]),t._v(" "),s("p",[t._v("以上这些指标偏向于过程指标，我们还是难以回答某段代码的质量具体如何，两段代码哪个更好等等这类的问题。")]),t._v(" "),s("p",[t._v("因为我们仍然没有完全解决代码质量的"),s("strong",[t._v("量化问题")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("同样都是代码质量问题，重复代码和过多注释的危害肯定是不一样的")]),t._v(" "),s("li",[t._v("同样都是代码重复问题，行重复、块重复甚至整个文件内容重复的危害程度也不一样")])]),t._v(" "),s("p",[t._v("所以我们不能直接用问题的数量来衡量质量，需要找到更精细合理的量化度量方法。\n我们希望的是："),s("strong",[t._v("继续维护这段代码，需要消耗多少人力。对代码进行重构后，后面可以节省多少人力。")])]),t._v(" "),s("p",[t._v("那么就需要做两件事："),s("strong",[t._v("一是细拆度量规则；二是统一度量单位。")])]),t._v(" "),s("p",[t._v("目前业界的代码质量度量标准为 "),s("a",{attrs:{href:"http://www.sqale.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQALE"),s("OutboundLink")],1),t._v("(Software Quality Assessment based on Lifecycle Expectations)")]),t._v(" "),s("p",[s("img",{attrs:{src:a(733),alt:"alt text"}})]),t._v(" "),s("blockquote",[s("p",[t._v("特征分类 > 特征子类 > 度量规则")])]),t._v(" "),s("ol",[s("li",[t._v("从左向右按照不同维度将代码质量分解为最小单元，可直接度量")]),t._v(" "),s("li",[t._v("第一列为一级维度，包括："),s("strong",[t._v("可维护性、可测试性、可变更性、可靠性")]),t._v("等特征分类")]),t._v(" "),s("li",[t._v("第二列为二级维度，比如可维护性又包括了"),s("strong",[t._v("可读性")]),t._v("和"),s("strong",[t._v("易理解性")]),t._v("等特征子类")]),t._v(" "),s("li",[t._v("第三列为具体的度量规则，对应着具体的代码扫描规则，比如"),s("code",[t._v("文件行数 < 1000")]),t._v("等")])]),t._v(" "),s("p",[t._v("得到度量规则后，"),s("strong",[t._v("如何评估某个分类甚至整体的一个质量度量值")]),t._v("？肯定不能直接按问题次数相加，这样的话就回到了最初的问题，而且注释过多和重复代码的影响层面也不一样。")]),t._v(" "),s("p",[t._v("SQALE 给出的解决方案是引入「债务」概念， "),s("strong",[t._v("债务的本金为修复代码质量问题所需消耗人力资源估值（债务时长）。")]),t._v(" 每条质量扫描规则都对应着一个债务计算方法，有的规则是设定了固定的债务值，有的则根据违规程度有相应的计算公式。")]),t._v(" "),s("blockquote",[s("p",[t._v("比如修复一个圈复杂度为15的方法需要一个开发人员15分钟的时间（以 sonar java 分析器默认设置为例）")])]),t._v(" "),s("p",[s("strong",[t._v("至此，SQALE 方法就可以把不同规则对应的代码质量度量统一人力资源的消耗这一单一指标上。")]),t._v("\n现在，如何客观评价代码的质量，已经得到了解答。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("还有另一个问题，如何比较这两个项目的质量？现在有了"),s("strong",[t._v("债务时长")]),t._v("这个绝对值，但是不同规模，不同类型的代码如何比较呢？\n那么就需要引入一个 "),s("strong",[t._v("「负债率」")]),t._v(" 的概念。\n负债率 = "),s("code",[t._v("偿还债务所需耗费的资源 / 重写所有代码的预估耗费的资源")]),t._v("\n对于分母的计算，目前扫描工具大多是按"),s("code",[t._v("代码量 * 开发生产力水平")]),t._v("计算得出，其中开发生产力水平为 "),s("strong",[t._v("系统配置项")]),t._v(" ，表示"),s("code",[t._v("编写一行代码的平均估计耗时")]),t._v("（大概估值，并不准确）")]),t._v(" "),s("p",[t._v("有了这个负债率之后，我们就可以"),s("strong",[t._v("大致估算")]),t._v("出当前项目的负债情况。负债率越高，表示代码迭代难度越高，当负债率超过 100%（资不抵债），那么重写项目往往比继续屎山迭代更好。")]),t._v(" "),s("h1",{attrs:{id:"业务实践-基于-sonarqube-的指标分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务实践-基于-sonarqube-的指标分析"}},[t._v("#")]),t._v(" 业务实践：基于 sonarqube 的指标分析")]),t._v(" "),s("p",[t._v("笔者近期在重构某个项目的状态管理设计，需要分析重构后的数据和收益。\n借助 sonarqube ，收集了如下数据：")]),t._v(" "),s("ul",[s("li",[t._v("负债时长降低 10% （2.7 小时 -> 2.5 小时）\n"),s("img",{attrs:{src:a(734),alt:"alt text"}})]),t._v(" "),s("li",[t._v("代码重复率减少 1.6 %（7.4% -> 5.8%）\n"),s("img",{attrs:{src:a(735),alt:"alt text"}})]),t._v(" "),s("li",[t._v("圈复杂度降低 12% （4006 -> 3544）\n"),s("img",{attrs:{src:a(736),alt:"alt text"}})])]),t._v(" "),s("h1",{attrs:{id:"最后聊聊-代码质量高-那又如何"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后聊聊-代码质量高-那又如何"}},[t._v("#")]),t._v(" 最后聊聊：代码质量高，那又如何")]),t._v(" "),s("p",[t._v("社区有一些相关的论调，大家怎么看？\n"),s("img",{attrs:{src:a(737),alt:"alt text"}})]),t._v(" "),s("h1",{attrs:{id:"扩展阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1151495",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码质量与技术债"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("本文原文在"),s("a",{attrs:{href:"https://itoutiao.feishu.cn/docx/PCHQdOKdFoi2Uix1VW0cWmRwnBe",target:"_blank",rel:"noopener noreferrer"}},[t._v("飞书"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);