(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1084:function(s,a,t){"use strict";t.r(a);var n=t(29),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"rabin-karp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabin-karp"}},[s._v("#")]),s._v(" Rabin-Karp")]),s._v(" "),a("blockquote",[a("p",[s._v("先进行名词的说明:源串(S1)长度为n,子串(S2)长度为m")])]),s._v(" "),a("p",[s._v("暴力之所以会慢，主要在于S1匹配了S2的第一个字符后，还要进行至多m-1个字符的判断。")]),s._v(" "),a("p",[s._v("如果能将S2映射到某个数字num1，S1每次也得到当前m长度字符串的映射数字num2，判断num1和num2是否相同（一次操作）即可快速判断两个字符串可能相同。")]),s._v(" "),a("p",[a("strong",[s._v("上面说法需要注意两个问题：")])]),s._v(" "),a("ol",[a("li",[s._v("S1每次计算m长度字符串的映射数字需要足够快，必须仅做一次操作")]),s._v(" "),a("li",[s._v("num1和num2相同仅能判断两个字符串可能相同，还需要进行字符串每一位的判断")])]),s._v(" "),a("p",[s._v("如何快速计算字符串的映射数字呢？")]),s._v(" "),a("p",[s._v('我们假设 s1="jijiaxing" s2="jia"，字符对应的数字采用ASCII值，取ASCII字符集长度M为128')]),s._v(" "),a("p",[s._v("左部为高位，最高位hash值为"),a("code",[s._v("s2[0].charCodeAt(0)*(128**(m-1))")]),s._v("("),a("code",[s._v("**")]),s._v("在js中表示指数运算)")]),s._v(" "),a("p",[a("strong",[s._v('计算s2("jia")对应的hash值')]),s._v("：")]),s._v(" "),a("ol",[a("li",[s._v('hash("j")=106')]),s._v(" "),a("li",[s._v('hash("ji")=hash("j")*128+105=13673')]),s._v(" "),a("li",[s._v('hash("jia")=hash("ji")*128+97=1750241')])]),s._v(" "),a("p",[a("strong",[s._v("我们可以添加或者删减一个字符，快速得到新字符串的hash值")])]),s._v(" "),a("p",[a("code",[s._v('hash("iax")=(hash("jia")-hash("j")*(128**2))*128+120=(1750241-106*16384)*128+120=1732856')])]),s._v(" "),a("p",[s._v("这样我们就可以先计算s1前m长度字符串的hash值，hash值一致再逐个比较，否则删去第一个字符，从s1再加一个字符，继续比较。。")]),s._v(" "),a("p",[s._v("前面的操作，我们没有做 mod 运算，当s2长度计算出来的hash值过大的时候，(js大数运算相对耗时)，我们需要对该值取余散列。假设哈希表长度Q为 10007")]),s._v(" "),a("p",[a("strong",[s._v('于是前面的操作hash("jia")变成:')])]),s._v(" "),a("ol",[a("li",[s._v('hash("j")=106%10007=106')]),s._v(" "),a("li",[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' hash("ji")\n =(106*128+105)%10007\n =((106*128)%10007+105%10007)%10007\n =(((106%10007)*(128%10007))%10007+105%10007)%10007\n =((hash("j")*128)%10007+105%10007)%10007\n =((hash("j")*128)+105)%10007\n =3666\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),s._v('即，hash("ji")=((hash("j")*128)+105)%10007')]),s._v(" "),a("li",[s._v('同理，hash("jia")=(hash("ji")*128+97)%10007=9023')])]),s._v(" "),a("p",[a("strong",[s._v("增减字符串的计算过程如下：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('hash("iax")\n=(105*(128**2)+97*128+120)%10007\n=((105*(128**2)+97*128)%10007+120%10007)%10007\n=(((105*128+97)%10007*128%10007)%10007+120%10007)%10007\n=(((106*(128**2)+105*128+97-106*(128**2))%10007*128%10007)%10007+120%10007)%10007\n=((((106*(128**2)+105*128+97)%10007-(106*(128**2))%10007+10007)%10007*128%10007)%10007+120%10007)%10007\n//用hash("jia")替换\n=((((hash("jia")-(106*(128**2))%10007+10007)%10007*128%10007)%10007+120%10007)%10007\n=(((hash("jia")+(10007-(106*(128**2))%10007))%10007*128%10007)%10007+120%10007)%10007\n//化简10007-(106*(128**2))%10007\n//=(10007-(106*(128**2))%10007)%10007\n//增加一个10007倍数的值，不影响\n//=(10007-(106*(128**2))%10007+105*10007)%10007\n//=(106*10007-106*(128**2)%10007)%10007\n//=(106*(10007-128**2%10007))%10007 \n=((((106*(128**2)+105*128+97)%10007+(106*(10007-128**2%10007))%10007)%10007*128%10007)%10007+120%10007)%10007\n=(((hash("jia")+(106*(10007-128**2%10007))%10007)*128)%10007+120%10007)%10007\n=(((hash("jia")+(106*(10007-128**2%10007))%10007)*128)+120)%10007\n// 计算本例的固定值10007-128**2%10007=3630\n=(((hash("jia")+106*3630%10007)*128)+120)%10007\n=(((9023+106*3630%10007)*128)+120)%10007\n=1645\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("计算的时候，采用该式子： "),a("code",[s._v('(((hash("jia")+106*3630%10007)*128)+120)%10007')])]),s._v(" "),a("p",[s._v("以上用到了 "),a("strong",[s._v("同余定理")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("A*B % C = (A%C * B%C)%C\n(A+B)%C = (A%C + B%C)%C\n(A-B)%C = (A%C - B%C + C)%C // js运算中 -2%5=-2而不是3 故这里我们需要补上C,让差大于0 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"下面给出rabin-karp的简单实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下面给出rabin-karp的简单实现"}},[s._v("#")]),s._v(" "),a("strong",[s._v("下面给出Rabin-Karp的简单实现：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10007")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Q")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" val\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//逐个比较相同长度字符串,s1从index位置开始取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("offset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" s2Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个固定值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fix "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Q")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" curHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getHash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("s2Hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    curHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("fix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Q")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("s2Hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" offset\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//match("jijiaxing","jia")=2')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h3",{attrs:{id:"效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效率"}},[s._v("#")]),s._v(" 效率")]),s._v(" "),a("p",[s._v("理论时间复杂度为O(n*m),但是由于hash不一致能排除大部分情况，故实际复杂度大概在O(n+m)")]),s._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/tanxing/p/6049179.html"}},[s._v("Rabin-Karp指纹字符串查找算法")])])])}),[],!1,null,null,null);a.default=r.exports}}]);