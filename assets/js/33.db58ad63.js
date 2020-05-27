(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{373:function(e,r,a){"use strict";a.r(r);var t=a(43),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"layered-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layered-architecture"}},[e._v("#")]),e._v(" Layered Architecture")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),a("li",[a("a",{attrs:{href:"#concepts"}},[e._v("Concepts")]),a("ul",[a("li",[a("a",{attrs:{href:"#layer"}},[e._v("Layer")])])])]),a("li",[a("a",{attrs:{href:"#use"}},[e._v("Use")]),a("ul",[a("li",[a("a",{attrs:{href:"#mvc-or-model-view-controller"}},[e._v("MVC, or Model View Controller.")])]),a("li",[a("a",{attrs:{href:"#osi-model"}},[e._v("OSI Model")])]),a("li",[a("a",{attrs:{href:"#tcp-ip"}},[e._v("TCP/IP")])]),a("li",[a("a",{attrs:{href:"#operating-systems"}},[e._v("Operating Systems")])]),a("li",[a("a",{attrs:{href:"#uni-directional-dependency"}},[e._v("Uni-directional Dependency")])])])]),a("li",[a("a",{attrs:{href:"#pros-and-cons"}},[e._v("Pros and Cons")])]),a("li",[a("a",{attrs:{href:"#conclusion"}},[e._v("Conclusion")])]),a("li",[a("a",{attrs:{href:"#references"}},[e._v("References")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The layered architecture has several other names, such as "),a("a",{attrs:{href:"https://blog.thedigitalgroup.com/understanding-onion-architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("onion architecture"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the clean architecture"),a("OutboundLink")],1),e._v(", n-tier architecture, multi-layered architecture, multi-tier architecture, etc. It requires the components of the application organized layer by layer, in which only the upstream layer can make calls to the downstream layers.")]),e._v(" "),a("p",[e._v('It\'s the de-facto architecture style of modern web applications. Layered architecture matches to the well-known "single responsibility principle".')]),e._v(" "),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("h3",{attrs:{id:"layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layer"}},[e._v("#")]),e._v(" Layer")]),e._v(" "),a("p",[e._v("Layer, or plane, is a logical structuring of components that is deployed or organized in the same place.")]),e._v(" "),a("p",[e._v("Tier refers to a physical structuring of components, though people often interchange layer or tier in software architecture.")]),e._v(" "),a("h2",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" Use")]),e._v(" "),a("h3",{attrs:{id:"mvc-or-model-view-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc-or-model-view-controller"}},[e._v("#")]),e._v(" MVC, or Model View Controller.")]),e._v(" "),a("ul",[a("li",[e._v("model layer")]),e._v(" "),a("li",[e._v("view layer")]),e._v(" "),a("li",[e._v("controller layer")])]),e._v(" "),a("h3",{attrs:{id:"osi-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osi-model"}},[e._v("#")]),e._v(" OSI Model")]),e._v(" "),a("ul",[a("li",[e._v("physical layer")]),e._v(" "),a("li",[e._v("data link layer")]),e._v(" "),a("li",[e._v("network layer")]),e._v(" "),a("li",[e._v("transport layer")]),e._v(" "),a("li",[e._v("session layer")]),e._v(" "),a("li",[e._v("presentation layer")]),e._v(" "),a("li",[e._v("application layer")])]),e._v(" "),a("h3",{attrs:{id:"tcp-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[e._v("#")]),e._v(" TCP/IP")]),e._v(" "),a("ul",[a("li",[e._v("link layer")]),e._v(" "),a("li",[e._v("internet layer")]),e._v(" "),a("li",[e._v("transport layer")]),e._v(" "),a("li",[e._v("application layer")])]),e._v(" "),a("h3",{attrs:{id:"operating-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operating-systems"}},[e._v("#")]),e._v(" Operating Systems")]),e._v(" "),a("ul",[a("li",[e._v("kernel layer")]),e._v(" "),a("li",[e._v("user-space layer")])]),e._v(" "),a("h3",{attrs:{id:"uni-directional-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uni-directional-dependency"}},[e._v("#")]),e._v(" Uni-directional Dependency")]),e._v(" "),a("p",[e._v("In layered architecture, nothing in the downstream layer can make calls to the upstream layer. However, it's okay to make calls in the same layer or across multiple layers from upstream to downstream.")]),e._v(" "),a("mermaid",[e._v("\ngraph TB\n    l0[Layer 0]\n    l1[Layer 1]\n    lm[Layer ...]\n    lN-1[Layer N-1]\n    lN[Layer N]\n    lN --\x3e lN-1\n    lN-1 --\x3e lm\n    lm --\x3e l1\n    l1 --\x3e l0\n")]),e._v(" "),a("p",[e._v("However, error propagation is a special case. If there is an error in an layer, then it should propagate it to the upstream. The upstream layer decides if it can handle the error. If so, then the error stops propagation to the upper layers, otherwise, the error keeps propagation to the top layer, usually something showing in the user interface.")]),e._v(" "),a("mermaid",[e._v("\ngraph BT\n    l0[Layer 0]\n    l1[Layer 1]\n    lm[Layer ...]\n    lN-1[Layer N-1]\n    lN[Layer N]\n    l0 --error--\x3e l1\n    l1 --error--\x3e lm\n    lm --error--\x3e lN-1\n    lN-1 --error--\x3e lN\n")]),e._v(" "),a("p",[e._v("If a new feature comes in, and it's something that cannot fit into any existing layers, you can add a new layer into the big picture.")]),e._v(" "),a("mermaid",[e._v("\ngraph TB\n    l0[Layer 0]\n    l1[Layer 1]\n    lm[Layer ...]\n    lNew[New Layer]\n    lN-1[Layer N-1]\n    lN[Layer N]\n    lN --\x3e lN-1\n    lN --\x3e lNew\n    lNew --\x3e lN-1\n    lN-1 --\x3e lm\n    lm --\x3e l1\n    l1 --\x3e l0\n")]),e._v(" "),a("p",[e._v("In general, no name in the upper layer is allowed to appear in the lower layer, which includes variables, functions, classes, or even comment. Breaking such rule causes "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Leaky_abstraction",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaky abstraction"),a("OutboundLink")],1),e._v(", meaning lower layer failed to hide details from the upper layer.")]),e._v(" "),a("h2",{attrs:{id:"pros-and-cons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pros-and-cons"}},[e._v("#")]),e._v(" Pros and Cons")]),e._v(" "),a("ul",[a("li",[e._v("Pros\n"),a("ul",[a("li",[e._v("Separate of concern. We only need to consider a smaller scope in each layer, which makes the problem much more straightforward.")]),e._v(" "),a("li",[e._v("More testable. As a result, each layer has less case to test and thus more testable.")]),e._v(" "),a("li",[e._v("Isolation. Changes in one layer will not affect downstream layers.")]),e._v(" "),a("li",[e._v("Changeability. If you're not satisfy with the implementation of one layer, you can replace it with another layer, as long as they implements the same interface.")])])]),e._v(" "),a("li",[e._v("Cons\n"),a("ul",[a("li",[e._v("Management cost if there are too many layers.")]),e._v(" "),a("li",[e._v("The performance is getting slower as more and more layers added.")]),e._v(" "),a("li",[e._v("Leaky abstraction can disturb your layered intent.")])])])]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("In layered architecture, a layer serves the layer above it and is served by the layer below it. "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/OSI_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1),e._v(" The data flow is simple and easy to trace by always making calls from top to bottom in a single direction. Such architecture leads to a clean and elegant design.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.safaribooksonline.com/library/view/software-architecture-patterns/9781491971437/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software Architecture Patterns by Mark Richards"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Multitier_architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multitier_architecture"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);r.default=n.exports}}]);