(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1116:function(e,t,r){"use strict";r.r(t);var o=r(27),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"创建threadpoolexecutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建threadpoolexecutor"}},[e._v("#")]),e._v(" 创建ThreadPoolExecutor")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ThreadPoolExecutor executor=(ThreadPoolExecutor)Executors.newCachedThreadPool();")]),e._v(" "),t("ul",[t("li",[e._v("为每个接收到的任务创建一个线程（如果池中没有空闲的线程）")]),e._v(" "),t("li",[e._v("提交大量的任务，并且它们有很长的（执行）时间，会使系统过载和引发应用程序性能不佳的问题")])])]),e._v(" "),t("li",[t("code",[e._v("ThreadPoolExecutor executor=(ThreadPoolExecutor)Executors.newFixedThreadPool(5);")]),e._v(" "),t("ul",[t("li",[e._v("创建固定大小例如5的ThreadPoolExecutor")]),e._v(" "),t("li",[e._v("提交超过最大线程数的任务，剩下的任务将会被阻塞，直到有空闲的线程来处理它们")])])])]),e._v(" "),t("h2",{attrs:{id:"返回结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[e._v("#")]),e._v(" 返回结果")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("executor.submit(Runnable())")]),e._v(" 无返回结果")]),e._v(" "),t("li",[t("code",[e._v("Future<?> result=executor.submit(Callable<?>)")]),e._v(" 返回"),t("code",[e._v("Future")]),e._v("对象来管理任务\n"),t("ul",[t("li",[t("code",[e._v("result.isDone()")]),e._v("：所管理任务是否完成")]),e._v(" "),t("li",[t("code",[e._v("resultList.add(result)")]),e._v(",利用"),t("code",[e._v("while (executor.getCompletedTaskCount()<resultList.size());")]),e._v("让所有管理任务的Future执行完")]),e._v(" "),t("li",[t("code",[e._v("result.get()")]),e._v("获得任务结束返回的对象")])])])]),e._v(" "),t("h2",{attrs:{id:"运行多个任务并处理第一个结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行多个任务并处理第一个结果"}},[e._v("#")]),e._v(" 运行多个任务并处理第一个结果")]),e._v(" "),t("p",[e._v("利用"),t("code",[e._v("ThreadPoolExecutor")]),e._v("类提供的"),t("code",[e._v("invokeAny(Collection tasks)")]),e._v("方法(接受的是"),t("strong",[e._v("Callable任务")]),e._v(")，输入参数为一个任务队列,"),t("code",[e._v("ThreadPoolExecutor")]),e._v("c处理所有的任务，返回最早执行完任务的一个结果")]),e._v(" "),t("h2",{attrs:{id:"运行多个任务并处理所有结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行多个任务并处理所有结果"}},[e._v("#")]),e._v(" 运行多个任务并处理所有结果")]),e._v(" "),t("p",[e._v("上面利用"),t("code",[e._v("while (executor.getCompletedTaskCount()<resultList.size());")]),e._v("让管理任务的Future执行完，其实可以使用\n"),t("code",[e._v("executor.invokeAll(Collection tasks)")]),e._v("去执行任务列表，并且返回"),t("code",[e._v("List<Future<Result>> resultList")]),e._v("，此时主线程等待invokeAll执行完后(类似上面的"),t("strong",[e._v("while")]),e._v(")进行下一步")]),e._v(" "),t("h2",{attrs:{id:"延迟运行任务scheduledthreadpoolexecutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟运行任务scheduledthreadpoolexecutor"}},[e._v("#")]),e._v(" 延迟运行任务"),t("code",[e._v("ScheduledThreadPoolExecutor")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ScheduledThreadPoolExecutor executor=(ScheduledThreadPoolExecutor)Executors.newScheduledThreadPool(int corePoolSize);\nexecutor.schedule(Callable callable,Long delay(任务在执行前等待多长时间), TimeUnit 时间单位如TimeUnit.SECONDS);\n//使用executor的awaitTermination()方法，等待所有任务完成。\n//注：这里调用ScheduledThreadPoolExecutor的shutdown()方法，默认不会结束未执行的任务(等待delay执行的task)\n//可以通过ScheduledThreadPoolExecutor类的setExecuteExistingDelayedTasksAfterShutdownPolicy()方法来改变这种行为，\n//设为false就与其他Executor类一样了\n")])])]),t("h2",{attrs:{id:"执行周期性任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行周期性任务"}},[e._v("#")]),e._v(" 执行周期性任务")]),e._v(" "),t("p",[e._v("之前创建的executor，任务在执行完就被executor删除了，需要重新执行时需要再向executor提交任务\n可以通过：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ScheduledExecutorService executor=Executors.newScheduledThreadPool(1);\nScheduledFuture<?> result=executor.scheduleAtFixedRate(Runnable command,long initialDelay, long period, TimeUnit.SECONDS); \n 或者 executor.scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)\n//注1：如果用的是scheduleAtFixedRate 周期运行，你有一个花5s执行的周期性任务，而period是3s，那么会在运行5s的任务后再运行5s周期任务，不会出现2个任务同时运行。而如果是scheduleWithFixedDelay 会运行完5s的任务后过3s再运行\n//result.getDelay(TimeUnit.MILLISECONDS));获取下次任务执行的剩余时间\n//注2：此executor.shutdown()方法默认的行为是，当你调用这个方法时，计划任务就结束。 你可以使用ScheduledThreadPoolExecutor类的 setContinueExistingPeriodicTasksAfterShutdownPolicy()方法设置true值改变这个行为。在调用 shutdown()方法时，周期性任务将不会结束。\n")])])]),t("h2",{attrs:{id:"取消任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消任务"}},[e._v("#")]),e._v(" 取消任务")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Future<?> result=executor.submit(task);\nresult.cancel(boolean mayInterruptIfRunning);\nSystem.out.printf("Main: Canceled: %s\\n",result.isCanceled());\n//在cacle方法执行后,  isDone will always return true\nSystem.out.printf("Main: Done: %s\\n",result.isDone()); \n')])])]),t("p",[e._v("cancel方法详解：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("if(该task已经完成||之前已被取消||由于其他原因不能取消)return false;\nelse if(该task正在等待executor获取执行它的线程)then 那么task取消,return true;\nelse if(这个任务已经正在运行){\n    if(mayInterruptIfRunning){任务取消，return true;}\n    else 任务不取消，return false;\n}\n")])])]),t("blockquote",[t("p",[e._v("注："),t("code",[e._v("Future.cancel()")]),e._v("方法，其实是"),t("code",[e._v("发送一个中断请求")]),e._v("，线程是否执行中断，"),t("strong",[e._v("jvm需要得到检测中断的时间片(Thread.sleep)")]),e._v("\n或 **Thread.interrupted()**的判断\n见"),t("a",{attrs:{href:"http://ifeve.com/thread-executors-9/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ifeve.com/thread-executors-9/"),t("OutboundLink")],1),e._v(" 评论")])])])}),[],!1,null,null,null);t.default=a.exports}}]);