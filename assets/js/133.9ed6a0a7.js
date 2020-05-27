(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{463:function(e,t,o){"use strict";o.r(t);var n=o(43),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"zeromq-entry-point"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zeromq-entry-point"}},[e._v("#")]),e._v(" ZeroMQ Entry Point")]),e._v(" "),o("p",[e._v("If I were to read the source code of a project, I would start from the entry point. The entry point of ZeroMQ is "),o("a",{attrs:{href:"https://github.com/zeromq/libzmq/blob/master/include/zmq.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("zmq.h"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/zeromq/libzmq/blob/master/src/zmq.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("zmq.cpp"),o("OutboundLink")],1),e._v(", which provides a high-level interface to end users. Starting from these two files, we can get a quick glance on how various modules are scattered and compiled.")]),e._v(" "),o("p",[e._v("There are some context related functions ("),o("code",[e._v("ctx_")]),e._v("), message related functions ("),o("code",[e._v("msg_")]),e._v("), poller related functions ("),o("code",[e._v("zmq_poller_")]),e._v("), and most importantly socket related functions ("),o("code",[e._v("zmq_socket")]),e._v(", "),o("code",[e._v("zmq_bind")]),e._v(", "),o("code",[e._v("zmq_connect")]),e._v(", "),o("code",[e._v("zmq_send")]),e._v(", "),o("code",[e._v("zmq_recv")]),e._v("), etc. The header file "),o("code",[e._v("zmq.h")]),e._v(" serves as a contract to the ZeroMQ users and hence the stability is the most concerned thing. If there is ever a change in the file, it must not break existing applications.")]),e._v(" "),o("p",[e._v("The cpp file "),o("code",[e._v("zmq.cpp")]),e._v(" exposes internal modules as stable APIs. Most of the implementations of "),o("code",[e._v("zmq_xyz_abc")]),e._v(" map to "),o("code",[e._v("(static_cast<zmq::xyz *> (xyz_))->abc")]),e._v(" or "),o("code",[e._v("zmq::xyz_t *s = ...; s->abc(...);")]),e._v(", with some additional error code handling. The lines of code is quite a lot but the code is easy to understand.")]),e._v(" "),o("p",[e._v("To better understand how ZeroMQ works, it's essential to understand some fundamental concepts.")]),e._v(" "),o("ul",[o("li",[e._v("In main thread, user creates a singleton object "),o("strong",[e._v("zmq.Context()")]),e._v(" holds the global state and is accessible by all the sockets and all the asynchronous objects in worker threads.")]),e._v(" "),o("li",[e._v("In worker threads, user creates socket objects from the context. Internally, ZeroMQ maintains various objects in each worker thread.\n"),o("ul",[o("li",[e._v("The "),o("strong",[e._v("Listener")]),e._v(" listens for the incoming connections and creates an engine/session object for each new connection.")]),e._v(" "),o("li",[e._v("The "),o("strong",[e._v("Connector")]),e._v(" attempts to connect to a peer and maintain an engine/session object for each connection.")]),e._v(" "),o("li",[e._v("The "),o("strong",[e._v("Engine")]),e._v(" is responsible for communicating over the network.")]),e._v(" "),o("li",[e._v("The "),o("strong",[e._v("Session")]),e._v(" exchanges messages through pipes.")]),e._v(" "),o("li",[e._v("Each "),o("strong",[e._v("Pipe")]),e._v(" is basically a lock-free queue optimized for fast passing of messages between threads.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);