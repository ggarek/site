(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{462:function(e,t,o){"use strict";o.r(t);var r=o(43),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"zeromq-context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zeromq-context"}},[e._v("#")]),e._v(" ZeroMQ Context")]),e._v(" "),o("p",[e._v("Context is probably the next piece you want to check, "),o("a",{attrs:{href:"https://github.com/zeromq/libzmq/blob/master/src/ctx.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("ctx.hpp"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/zeromq/libzmq/blob/master/src/ctx.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("ctx.cpp"),o("OutboundLink")],1),e._v(". The context contains the global state shared among all threads. To be fair, context is not "),o("em",[e._v("global variable")]),e._v(". Global variables is notorious since we need to introduce locking, otherwise we'll see concurrency bugs. ZeroMQrequires you to create a context before using any ZeroMQ APIs. Coming along with the history of software engineering, we would find that context is a useful technique applied to many projects, such as ZeroMQ, Flask, etc. Typically, a context keeps track of the application-level data during the life time of library use.")])])}),[],!1,null,null,null);t.default=n.exports}}]);