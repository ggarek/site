(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{440:function(t,s,n){"use strict";n.r(s);var e=n(43),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"apscheduler-blocking-scheduler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apscheduler-blocking-scheduler"}},[t._v("#")]),t._v(" APScheduler Blocking Scheduler")]),t._v(" "),n("p",[n("code",[t._v("BlockingScheduler")]),t._v(" is one of the very basic scheduler provided by APScheduler.\nIt runs forever once started, unless notified by system signals or errors.")]),t._v(" "),n("p",[t._v("Below is an example of a blocking scheduler.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" apscheduler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schedulers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blocking "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BlockingScheduler\n\nsched "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BlockingScheduler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tick! The time is: %s'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sched"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interval'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seconds"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        sched"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KeyboardInterrupt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SystemExit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("In this example, "),n("code",[t._v("sched")]),t._v(" is a "),n("code",[t._v("BlockingScheduler")]),t._v(" instance. It triggers the job every 3 seconds. It only stops when you type Ctrl-C from your keyboard or send SIGINT to the process.")]),t._v(" "),n("p",[t._v("This scheduler is intended to be used when APScheduler is the only task running in the process.\nIt blocks all other code from running unless the others are running in separated threads.")])])}),[],!1,null,null,null);s.default=a.exports}}]);