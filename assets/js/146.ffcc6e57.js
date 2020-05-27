(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{501:function(e,t,a){"use strict";a.r(t);var i=a(43),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"enqueuezero-techshack-2019-04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enqueuezero-techshack-2019-04"}},[e._v("#")]),e._v(" EnqueueZero Techshack 2019-04")]),e._v(" "),a("TechshackHeader"),e._v(" "),a("h2",{attrs:{id:"canary-analysis-lessons-learned-and-best-practices-from-google-and-waze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canary-analysis-lessons-learned-and-best-practices-from-google-and-waze"}},[e._v("#")]),e._v(" Canary analysis: Lessons learned and best practices from Google and Waze")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.google.com/blog/products/devops-sre/canary-analysis-lessons-learned-and-best-practices-from-google-and-waze",target:"_blank",rel:"noopener noreferrer"}},[e._v("cloud.google.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Investing in canary deployment will greatly increase your confidence in your deployment processes, lower the number of problems that impact your users, increase your velocity, and hopefully lower your stress level! Below are the things to care:")]),e._v(" "),a("ul",[a("li",[e._v("Pipeline: configuration -> set latest version -> bake GCP (allocate cloud resource) -> canary analysis -> manual judgement -> send production update -> deploy red-black")]),e._v(" "),a("li",[e._v("Prerequisite of canary deployment:\n"),a("ul",[a("li",[e._v("an external monitoring system to provide the data for canary analysis.")]),e._v(" "),a("li",[e._v("build SLOs to measure the health of the services.")])])]),e._v(" "),a("li",[e._v("Canary best practice:\n"),a("ul",[a("li",[e._v("Compare the canary against a baseline, not against production")]),e._v(" "),a("li",[e._v("Run the canary for enough time")]),e._v(" "),a("li",[e._v("Carefully choose which metrics to analyze")]),e._v(" "),a("li",[e._v("Create a standard set of reusable canary configs")])])])]),e._v(" "),a("h2",{attrs:{id:"the-night-of-a-cascading-failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-night-of-a-cascading-failure"}},[e._v("#")]),e._v(" The Night of A Cascading Failure")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://rachelbythebay.com/w/2019/01/20/quiet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rachelbythebay.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("What a tragedy! Someone tripped over a bug, submitting code that can yield a negative number calculated for a "),a("code",[e._v("size_t")]),e._v(" type. Unfortunately, when the real case happens, the entire system went down, including the bastion host. Seriously, almost NO ONE can log in to the data center and fix the issue.")]),e._v(" "),a("p",[e._v("Lesson Learned:")]),e._v(" "),a("ul",[a("li",[e._v("Rather than string splitting, it's better to use Regex for matching what you exactly need.")]),e._v(" "),a("li",[e._v("Rather than having the whole world die, let your service alive even if the dependencies are unavailable.")]),e._v(" "),a("li",[e._v("Think about the possibility of failure injection.")]),e._v(" "),a("li",[e._v("Be kind to your coworkers. They didn't write the bug. They just tripped it.")])]),e._v(" "),a("h2",{attrs:{id:"scaling-engineering-teams-via-writing-things-down-and-sharing-aka-rfcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-engineering-teams-via-writing-things-down-and-sharing-aka-rfcs"}},[e._v("#")]),e._v(" Scaling Engineering Teams via Writing Things Down and Sharing - aka RFCs")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.pragmaticengineer.com/scaling-engineering-teams-via-writing-things-down-rfcs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog.pragmaticengineer"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Check out the approach if you happen to have below problems:")]),e._v(" "),a("ul",[a("li",[e._v("The lack of visibility on others building or having built the same thing as my team.")]),e._v(" "),a("li",[e._v("The tech and architecture debt accumulated due to different teams building things very differently, both approach-wise and quality-wise.")])]),e._v(" "),a("p",[e._v("The solution is by taking below steps:")]),e._v(" "),a("ul",[a("li",[e._v("Do planning before building something new.")]),e._v(" "),a("li",[e._v("Capture this plan in a short, written document.")]),e._v(" "),a("li",[e._v("Have a few, select people approve this plan before starting work.")]),e._v(" "),a("li",[e._v("Send this planning document out to all engineers in the company.")]),e._v(" "),a("li",[e._v("Have everyone follow the above steps.")])]),e._v(" "),a("p",[e._v("The approach encourages reviewing and spreading knowledge across the organization. Besides, If everyone agrees on how the project should be done then writing the approach down should be a piece of cake.")]),e._v(" "),a("p",[e._v("Below is a potential template for two different types of applications.")]),e._v(" "),a("ul",[a("li",[e._v("Backend\n"),a("ul",[a("li",[e._v("List of approvers")]),e._v(" "),a("li",[e._v("Abstract (what is the project about?)")]),e._v(" "),a("li",[e._v("Architecture changes")]),e._v(" "),a("li",[e._v("Service SLAs")]),e._v(" "),a("li",[e._v("Service dependencies")]),e._v(" "),a("li",[e._v("Load & performance testing")]),e._v(" "),a("li",[e._v("Multi data-center concerns")]),e._v(" "),a("li",[e._v("Security considerations")]),e._v(" "),a("li",[e._v("Testing & rollout")]),e._v(" "),a("li",[e._v("Metrics & monitoring")]),e._v(" "),a("li",[e._v("Customer support considerations")])])]),e._v(" "),a("li",[e._v("Mobile/Web\n"),a("ul",[a("li",[e._v("List of approvers")]),e._v(" "),a("li",[e._v("Abstract (what is the project about?)")]),e._v(" "),a("li",[e._v("UI & UX")]),e._v(" "),a("li",[e._v("Architecture changes")]),e._v(" "),a("li",[e._v("Network interactions detailed")]),e._v(" "),a("li",[e._v("Library dependencies")]),e._v(" "),a("li",[e._v("Security concerns")]),e._v(" "),a("li",[e._v("Testing & rollout")]),e._v(" "),a("li",[e._v("Analytics")]),e._v(" "),a("li",[e._v("Customer support considerations")]),e._v(" "),a("li",[e._v("Accessiblity")])])])]),e._v(" "),a("h2",{attrs:{id:"http-3-explained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-3-explained"}},[e._v("#")]),e._v(" HTTP/3 explained")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://http3-explained.haxx.se/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http3-explained.haxx.se"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Why QUIC? No HoL, Reduced latency, Always secure, Combating ossification, No 3-way handshake.")]),e._v(" "),a("li",[e._v("gQUIC != IETF-QUIC.")]),e._v(" "),a("li",[e._v("HTTP/3 = HTTP-over-QUIC.")]),e._v(" "),a("li",[e._v("Features:\n"),a("ul",[a("li",[e._v("QUIC is over UDP.")]),e._v(" "),a("li",[e._v("QUIC adds layer atop UDP to introduce reliability, including re-transmissions of packets, congestion control, pacing and the other features otherwise present in TCP.")]),e._v(" "),a("li",[e._v("QUIC features separate logical streams within the physical connections.")]),e._v(" "),a("li",[e._v('A QUIC connection is made to a UDP port and IP address, but once established the connection is associated by its "connection ID".')]),e._v(" "),a("li",[e._v("QUIC guarantees in-order delivery of streams, but not between streams.")]),e._v(" "),a("li",[e._v("QUIC offers both 0-RTT and 1-RTT connection setups.")])])])]),e._v(" "),a("h2",{attrs:{id:"functional-programming-fundamentals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-programming-fundamentals"}},[e._v("#")]),e._v(" Functional Programming Fundamentals")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.matthewgerstman.com/functional-programming-fundamentals/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.matthewgerstman.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Functional programming (often abbreviated FP) is the process of building software by composing pure functions.\nA pure function is a function which given the same inputs, always returns the same output, and has no side-effects.")]),e._v(" "),a("p",[e._v("You should not mutate the input. Otherwise, the result is predictable.")]),e._v(" "),a("p",[e._v("Write declarative code, instead of imperative code. For example, "),a("code",[e._v("lodash.keyBy(files, 'id');")]),e._v(" is better than a "),a("code",[e._v("for-loop")]),e._v(".")]),e._v(" "),a("p",[e._v("If you try to perform effects and logic at the same time, you may create hidden side effects which cause bugs in the logic. Keep functions small. Do one thing at a time, and do it well.")]),e._v(" "),a("p",[e._v("Plan for composition. Write functions whose outputs will naturally work as inputs to many other functions. Keep function signatures as simple as possible.")]),e._v(" "),a("p",[e._v("Immutability. The true constant is in change. Mutation hides change. Hidden change manifests chaos. Therefore, the wise embrace history.")]),e._v(" "),a("p",[e._v("Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.")]),e._v(" "),a("p",[e._v("Use high order functions:")]),e._v(" "),a("ul",[a("li",[e._v("Function that takes a function")]),e._v(" "),a("li",[e._v("Function that returns a function")]),e._v(" "),a("li",[e._v("Function that takes a function and returns a function")]),e._v(" "),a("li",[e._v("Currying")]),e._v(" "),a("li",[e._v("Partial Application")])]),e._v(" "),a("h2",{attrs:{id:"the-elements-of-ui-engineering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-elements-of-ui-engineering"}},[e._v("#")]),e._v(" The Elements of UI Engineering")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://overreacted.io/the-elements-of-ui-engineering/",target:"_blank",rel:"noopener noreferrer"}},[e._v("overreacted.io"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The author listed out a few interesting problems for UI Engineering.")]),e._v(" "),a("ul",[a("li",[e._v("Consistency. How do we keep the same data in sync on different parts of the screen? How and when do we make the local data consistent with the server, and the other way around?")]),e._v(" "),a("li",[e._v("Responsiveness. People can only tolerate a lack of visual feedback to their actions for a limited time. How do we keep our apps responsive to different kinds of inputs?")]),e._v(" "),a("li",[e._v("Latency. Both computations and network access take time. How do we gracefully handle latency without displaying a “cascade” of spinners or empty “holes”? How do we avoid “jumpy” layout? And how do we change async dependencies without “rewiring” our code every time?")]),e._v(" "),a("li",[e._v("Navigation. We expect that the UI remains “stable” as we interact with it. How do we architect our app to handle arbitrary navigation without losing important context?")]),e._v(" "),a("li",[e._v("Staleness. How do we handle cache data properly?")]),e._v(" "),a("li",[e._v("Entropy. How do we tame the combinatorial explosion of possible states and make visual output predictable?")]),e._v(" "),a("li",[e._v("Priority. How do we get independent widgets to cooperate instead of fighting for resources?")]),e._v(" "),a("li",[e._v("Accessibility. What can we do to make accessibility a default rather than an afterthought?")]),e._v(" "),a("li",[e._v("Internationalization. How do we support different languages without sacrificing latency and responsiveness?")]),e._v(" "),a("li",[e._v("Delivery. How do we choose at which point to introduce latency? How do we optimize our delivery based on the usage patterns? What kind of data would we need for an optimal solution?")]),e._v(" "),a("li",[e._v("Resilience. How do we write code in a way that isolates rendering and fetching failures and keeps the rest of the app running? What does fault tolerance mean for user interfaces?")]),e._v(" "),a("li",[e._v("Abstraction. How do we create abstractions that hide implementation details of a particular UI part? How do we avoid re-introducing the same problems that we just solved as our app grows?")])]),e._v(" "),a("p",[e._v("Think of a non-trivial UI element from an app you enjoy using, and go through this list of problems. Can you describe some of the tradeoffs chosen by its developers? Try to recreate a similar behavior from scratch!")]),e._v(" "),a("h2",{attrs:{id:"looking-back-at-postgres"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#looking-back-at-postgres"}},[e._v("#")]),e._v(" Looking Back at Postgres")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://arxiv.org/pdf/1901.01973.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arxiv.org"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("It is a recollection of the UC Berkeley Postgres project. It's a fun paper that introduces the history of Postgres.")]),e._v(" "),a("p",[e._v("Lesson learned:")]),e._v(" "),a("ul",[a("li",[e._v("Design your software for extensibility. Sometimes, a successful first system failed to follow up a second system, but it didn't happen on Postgres. With extensibility as an architectural core, it is possible to be creative and stop worrying so much about discipline: you can try many extensions and let the strong succeed.")]),e._v(" "),a("li",[e._v("One size fits many.")])]),e._v(" "),a("h2",{attrs:{id:"paper-review-serverless-computing-one-step-forward-two-steps-back"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paper-review-serverless-computing-one-step-forward-two-steps-back"}},[e._v("#")]),e._v(" Paper review. Serverless computing: One step forward, two steps back")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://muratbuffalo.blogspot.com/2019/01/paper-review-serverless-computing-one.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("muratbuffalo.blogspot.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The shortcomings of current FaaS offerings:")]),e._v(" "),a("ul",[a("li",[e._v("Limited Lifetimes. After 15 minutes, function invocations are shut down.")]),e._v(" "),a("li",[e._v("I/O Bottlenecks. Lambdas connect to cloud services—notably, shared storage—across a network interface. The bandwidth is quite small.")]),e._v(" "),a("li",[e._v("Communication Through Slow Storage.")]),e._v(" "),a("li",[e._v("No Specialized Hardware.")])]),e._v(" "),a("p",[e._v('Current FaaS offerings are making a trade-off between efficiency and easy-to-program pay-only-per-invocation autoscaling functionality.\nFaaS is all about optimizing developer productivity and time-to-market.\nA good strategy is to make the prototype on Lambda and then "make it right".')]),e._v(" "),a("h2",{attrs:{id:"noria-dynamic-partially-stateful-data-flow-for-high-performance-web-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noria-dynamic-partially-stateful-data-flow-for-high-performance-web-applications"}},[e._v("#")]),e._v(" Noria: dynamic, partially-stateful data-flow for high-performance web applications")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.usenix.org/conference/osdi18/presentation/gjengset",target:"_blank",rel:"noopener noreferrer"}},[e._v("usenix.org"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Noria is a partially-stateful data-flow model.\nThe model makes data-flow viable for building long-lived, low-latency applications, such as web applications.\nIt provides better performance than a typical MySQL/memcached stack.\nIt supplies a relational schema, a set of parameterized queries, and sharing states across related queries.")]),e._v(" "),a("h2",{attrs:{id:"keeping-calm-when-distributed-consistency-is-easy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keeping-calm-when-distributed-consistency-is-easy"}},[e._v("#")]),e._v(" Keeping CALM: When Distributed Consistency is Easy")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://arxiv.org/abs/1901.01930",target:"_blank",rel:"noopener noreferrer"}},[e._v("arxiv.org"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("Consistency as Logical Monotonicity (CALM)")]),e._v(". A program has a consistent, coordination-free distributed implementation if and only if it is monotonic. A CALM system is a NoCo system, “No Coordination.” The CALM is to about avoid coordination when designing high performing scalable distributed systems.")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("essential coordination")]),e._v(", a guarantee that cannot be provided without coordinating")]),e._v(" "),a("li",[a("em",[e._v("accidental coordination")]),e._v(", coordination that could have been avoided with a more careful design.")])]),e._v(" "),a("p",[e._v('A key concern in modern distributed systems is to avoid the cost of coordination while maintaining consistent semantics.\nCALM is an acronym for "consistency as logical monotonicity".')]),e._v(" "),a("p",[e._v("Distributed systems theory is dominated by fearsome negative results, such as the Fischer/Lynch/Patterson impossibility proof, the CAP Theorem, and the two generals problem.")]),e._v(" "),a("p",[e._v("CALM shows that monotonicity, a property of a program, implies consistency, a property of the output of any execution of that program.\nThough CLAM is only a constructive result. System builder still needs to answer two questions:")]),e._v(" "),a("ul",[a("li",[e._v("Is whether the problem they are trying to solve has a monotonic specification?")]),e._v(" "),a("li",[e._v("Given a monotonic specification for a problem, how can I implement it in practice?")])]),e._v(" "),a("h2",{attrs:{id:"would-you-still-pick-elixir-in-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#would-you-still-pick-elixir-in-2019"}},[e._v("#")]),e._v(" Would you still pick Elixir in 2019?")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dwyl/learn-elixir/issues/102",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com"),a("OutboundLink")],1),e._v(" | "),a("a",{attrs:{href:"https://news.ycombinator.com/item?id=18838115",target:"_blank",rel:"noopener noreferrer"}},[e._v("news.ycombinator.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Pros: easy to learn, beautifully designed language, macros, baked-in test, BEAM VM, error handling, incoming aws lambda support, etc.\nCons: few human resources on the market.")]),e._v(" "),a("h2",{attrs:{id:"resiliency-rate-limiting-retries-bulkheads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resiliency-rate-limiting-retries-bulkheads"}},[e._v("#")]),e._v(" Resiliency: Rate Limiting, Retries, Bulkheads")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/dm03514-tech-blog/sre-resiliency-bolt-on-sidecar-rate-limiting-with-envoy-sidecar-5381bd4a1137",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),a("OutboundLink")],1),e._v(" (rate limiting) | "),a("a",{attrs:{href:"https://medium.com/dm03514-tech-blog/sre-resiliency-retries-in-action-using-js-8e4b7e7d4526",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com retries"),a("OutboundLink")],1),e._v(" (retries) | "),a("a",{attrs:{href:"https://medium.com/dm03514-tech-blog/sre-resiliency-bulkheads-in-action-using-js-453c02a940c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("medium.com"),a("OutboundLink")],1),e._v(" (Bulkheads)")]),e._v(" "),a("p",[e._v("Rate limiting can mitigate API resource exhaustion from a greedy client.")]),e._v(" "),a("p",[e._v("Retries are a powerful resilience primitive which allows a client to offer higher availability than its dependencies. Retries should be used with care since an unrefined retry policy could cause result in a denial of service-like attack.")]),e._v(" "),a("p",[e._v("Bulkheads are an effective way to bound resource usage. They ensure isolation and help to mitigate cascading failures through preventing overload. Bulkheads are not a silver bullet but one of many primitive patterns for creating resilient highly available applications.")]),e._v(" "),a("h2",{attrs:{id:"what-are-the-best-software-engineering-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-best-software-engineering-principles"}},[e._v("#")]),e._v(" What Are The Best Software Engineering Principles?")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dev.to/luminousmen/what-are-the-best-software-engineering-principles--3p8n",target:"_blank",rel:"noopener noreferrer"}},[e._v("dev.to"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Measure twice and cut once")]),e._v(" "),a("li",[e._v("Don’t Repeat Yourself")]),e._v(" "),a("li",[e._v("Occam’s Razor")]),e._v(" "),a("li",[e._v("Keep It Simple Stupid")]),e._v(" "),a("li",[e._v("You Aren’t Gonna Need It")]),e._v(" "),a("li",[e._v("Big Design Up Front")]),e._v(" "),a("li",[e._v("Avoid Premature Optimization")]),e._v(" "),a("li",[e._v("Principle Of Least Astonishment")]),e._v(" "),a("li",[e._v("S.O.L.I.D.")]),e._v(" "),a("li",[e._v("Law of Demeter")])]),e._v(" "),a("h2",{attrs:{id:"the-internals-of-postgresql-for-database-administrators-and-system-developers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-internals-of-postgresql-for-database-administrators-and-system-developers"}},[e._v("#")]),e._v(" The Internals of PostgreSQL, for database administrators and system developers")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.interdb.jp/pg/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.interdb.jp"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("In this document, the internals of PostgreSQL for database administrators and system developers are described.")]),e._v(" "),a("h2",{attrs:{id:"mysql-high-availability-framework-explained-part-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-high-availability-framework-explained-part-ii"}},[e._v("#")]),e._v(" MySQL High Availability Framework Explained – Part II")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://highscalability.com/blog/2019/1/8/mysql-high-availability-framework-explained-part-ii.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("highscalability.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The post discusses the details of MySQL semisynchronous replication and the related configuration settings that help us ensure redundancy and consistency of the data in our HA setup.")]),e._v(" "),a("p",[e._v("Semisynchronous replication: the master commits transactions to the storage engine only after receiving an acknowledgment from at least one of the slaves.")]),e._v(" "),a("h2",{attrs:{id:"learn-enough-docker-to-be-useful-part-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-enough-docker-to-be-useful-part-i"}},[e._v("#")]),e._v(" Learn Enough Docker to be Useful - Part I")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://towardsdatascience.com/learn-enough-docker-to-be-useful-b7ba70caeb4b",target:"_blank",rel:"noopener noreferrer"}},[e._v("towardsdatascience.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("A Docker container holds things, is portable, has clear interfaces for access, and can be obtained from a remote location .")]),e._v(" "),a("h2",{attrs:{id:"operable-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operable-software"}},[e._v("#")]),e._v(" Operable Software")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://ferd.ca/operable-software.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ferd.ca"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The post covers views on simplicity and complexity, how people actually approach their systems and form mental models of them, and how we should instead structure things if we want to make systems both observable and operable.")]),e._v(" "),a("ul",[a("li",[e._v("A simple system can work (but is not guaranteed to do so)")]),e._v(" "),a("li",[e._v("A complex system can work, usually if it has been grown from a small system. Trying to ship a complex system the first time around is usually not going to go great")]),e._v(" "),a("li",[e._v("Complexity is unavoidable as your system scales; If people rely on a system for something serious, it will inevitably become complex")]),e._v(" "),a("li",[e._v("A simple system behaves differently from a large system, even if both provide the same functionality")])]),e._v(" "),a("p",[e._v("To make a software operable, it's inevitable to add more components. More importantly, don't forget the people who are interpreting the information of these components.")]),e._v(" "),a("blockquote",[a("p",[e._v("Since people in the system are always the last hope of resolving a problem when tooling and automation fails, we should put more effort into supporting them, in providing a good operator experience.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);