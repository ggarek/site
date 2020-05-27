(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{429:function(e,a,t){"use strict";t.r(a);var i=t(43),r=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sidecar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sidecar"}},[e._v("#")]),e._v(" Sidecar")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("In engineering, we want our application well de-coupled. It usually means letting the right tool or component doing the right thing, and more importantly, do one thing and do it well. Almost every application needs to share some standard components, for example, logging, metrics collector, circuit breaker, etc. It's a challenge that how to manage these peripheral tasks if we don't want to implement them in every application.")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Sidecar is a term for a one-wheeled device attached to the side of a motorcycle. "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Sidecar",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),t("OutboundLink")],1),e._v(" In engineering, it signifies a deployment model that one or more separate processes or containers deployed along with the application.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/static/images/sidecar-motorcycle.jpg",alt:"An NSU Moterenwerke 601 motorcycle from the 1930s fitted with a Steib Metallbau sidecar",title:"Sidecar"}})]),e._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),t("ul",[t("li",[e._v("Place peripheral tasks like logging, monitoring, proxy, circuit breaker inside a standalone process or container.")]),e._v(" "),t("li",[e._v("The independent process or container co-locate with the supporting application.")]),e._v(" "),t("li",[e._v("Provide a generic interface for sending data whatever the programming language of the app is.")])]),e._v(" "),t("p",[e._v("In the container era, service mesh software such as Linkerd, Istio, are often deployed as sidecars.")]),e._v(" "),t("h3",{attrs:{id:"kubernetes-logging-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-logging-architecture"}},[e._v("#")]),e._v(" Kubernetes Logging Architecture")]),e._v(" "),t("p",[e._v("Kubernetes doesn't have a built-in centralized logging. The easiest way to implement a cluster-level logging is by using node logging agents installing as sidecars per node. In particular, the sidecar container runs a logging agent like "),t("code",[e._v("fluentd")]),e._v(", which is configured to pick up logs from an application container. Note that after picking up, the logging data are sent to a logging backend outside of the cluster.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/static/images/sidecar-logging-with-sidecar-agent.png",alt:"Sidecar container with a logging agent"}})]),e._v(" "),t("h2",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[e._v("#")]),e._v(" Patterns")]),e._v(" "),t("h3",{attrs:{id:"independent-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#independent-runtime"}},[e._v("#")]),e._v(" Independent Runtime")]),e._v(" "),t("p",[e._v("The sidecar has its heap and stack, and will not share its runtime with the application. The sidecar is attached to the app and communicate via IPC(inter-process communication).")]),e._v(" "),t("p",[e._v("The application can run without sidecar component, though it will partially downgrade.")]),e._v(" "),t("h3",{attrs:{id:"same-lifecycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#same-lifecycle"}},[e._v("#")]),e._v(" Same Lifecycle")]),e._v(" "),t("p",[e._v("The sidecar has the same lifecycle as the supporting application. Once the app is created or retired, so the sidecar is.")]),e._v(" "),t("h3",{attrs:{id:"same-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#same-namespace"}},[e._v("#")]),e._v(" Same Namespace")]),e._v(" "),t("p",[e._v("The sidecar and the application are running in the same namespace, meaning the sidecar can gauge the memory usage, CPU usage, and disk I/O usage of the application.")]),e._v(" "),t("p",[e._v("Since containers are running in Linux namespace, it's often deploying sidecar as a standalone container running in the same namespace as the application.")]),e._v(" "),t("h3",{attrs:{id:"low-overhead"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#low-overhead"}},[e._v("#")]),e._v(" Low Overhead")]),e._v(" "),t("p",[e._v("The sidecar is deployed per-host or per-pod. As a result, the network latency between the sidecar and the application is not much, which is in theory equal to the performance of any IPC communication.")]),e._v(" "),t("p",[e._v("Note that low overhead doesn't mean it brings no cost.")]),e._v(" "),t("h3",{attrs:{id:"library-v-s-sidecar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#library-v-s-sidecar"}},[e._v("#")]),e._v(" Library v/s Sidecar")]),e._v(" "),t("p",[e._v("You can install and configure libraries to archive similar functions provided by sidecar. It means less integration work and overhead.")]),e._v(" "),t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),t("p",[e._v("By introducing sidecar, applications don't need to implement peripheral tasks again and again. It's an excellent way to simplify the implementation of the app, though it increases the complexity of operations.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sidecar"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);