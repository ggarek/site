(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{388:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"status-site"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-site"}},[t._v("#")]),t._v(" Status Site")]),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("Nowadays, most products are built on top of the platform of distributed services,\nwhich are across multiple data centers in different regions.\nThe platform as a complicated system is vulnerable to the incidents occurring\nin each one of the services.")]),t._v(" "),e("p",[t._v("To be transparent to the community, the service provider needs to find out a way to\nexpose the health of the platform. It has below goals:")]),t._v(" "),e("ul",[e("li",[t._v("Show how reliable the platform is.")]),t._v(" "),e("li",[t._v("Show how well the platform is recovering from failure.")]),t._v(" "),e("li",[t._v("Show how performance is as it evolves.")])]),t._v(" "),e("p",[t._v("In the industry, service providers pivot their heads to a solution: Status Site.")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The status site is an individual website listing the particular component statuses\nthat make up the product.")]),t._v(" "),e("p",[t._v("It shows below two information:")]),t._v(" "),e("ul",[e("li",[t._v("Display the status of each function of the business.")]),t._v(" "),e("li",[t._v('Display A list of incidents organized on a  daily basis. If nothing happens, show\n"No incidents reported.", otherwise, show the details of the incidents, such as\nwhen the incidents were detected, how the incidents were handled, and when the\nincidents were resolved.')])]),t._v(" "),e("h2",{attrs:{id:"solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[t._v("#")]),t._v(" Solutions")]),t._v(" "),e("h3",{attrs:{id:"commercial-saas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commercial-saas"}},[t._v("#")]),t._v(" Commercial SAAS")]),t._v(" "),e("p",[t._v("There are several commercial status site solutions. Some popular vendors are:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.statuspage.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("statuspage.io"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://status.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("status.io"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://statushub.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("statushub.com"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"open-source-softwares"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-source-softwares"}},[t._v("#")]),t._v(" Open Source Softwares")]),t._v(" "),e("p",[t._v("There are also some OSS projects on the table:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/adamcooke/staytus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Staytus"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/CachetHQ/Cachet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cachethq"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/cstate/cstate",target:"_blank",rel:"noopener noreferrer"}},[t._v("cstate"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"pros-and-cons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pros-and-cons"}},[t._v("#")]),t._v(" Pros and Cons")]),t._v(" "),e("p",[t._v("Using commercial SAAS let you focus on improving the accuracy of the status and incident\nreporting, rather than thinking of keeping the OSS platform highly available. After all,\nhigh availability is a very tough challenge comprised of many subtle techniques.")]),t._v(" "),e("p",[t._v("Using OSS projects let you own the data and not lock into any vendors.")]),t._v(" "),e("h2",{attrs:{id:"patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[t._v("#")]),t._v(" Patterns")]),t._v(" "),e("h3",{attrs:{id:"domain-concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#domain-concepts"}},[t._v("#")]),t._v(" Domain Concepts")]),t._v(" "),e("ul",[e("li",[t._v("Pages. A page of statuses and incidents.")]),t._v(" "),e("li",[t._v("Subscribers. A list of email address that registered to get notified on status change.")]),t._v(" "),e("li",[t._v("Services & Metrics. The time series data behind the scene supporting the display\nof the statuses.")]),t._v(" "),e("li",[t._v("Incidents / Issues. The information of what causes the status change. Usually,\nit comprised of title, content, state, impacted services, message.")]),t._v(" "),e("li",[t._v("Admin Dashboard. The dashboard that staff can update information. It should be\nauthenticated and authorized.")])]),t._v(" "),e("h3",{attrs:{id:"business-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#business-context"}},[t._v("#")]),t._v(" Business Context")]),t._v(" "),e("p",[t._v("The status site should show not just the uptime,  but more importantly,\nthe status of critical business functions that matter most to the users.")]),t._v(" "),e("p",[t._v("For example, the status site of a video platform can show below statuses:")]),t._v(" "),e("ul",[e("li",[t._v("Is video uploading operational?")]),t._v(" "),e("li",[t._v("Is video playing operational?")]),t._v(" "),e("li",[t._v("Is the subtitle service operational?")]),t._v(" "),e("li",[t._v("Are all regions operational?")]),t._v(" "),e("li",[t._v("Is the CDN operational?")]),t._v(" "),e("li",[t._v("...")])]),t._v(" "),e("p",[t._v("Fine-grained statuses help both users and engineering team understanding the situation quickly.")]),t._v(" "),e("h3",{attrs:{id:"different-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#different-environment"}},[t._v("#")]),t._v(" Different Environment")]),t._v(" "),e("p",[t._v("As the platform hosting the main service might be affected by the incidents,\nrunning the status site in the same environment is a highly risky solution.")]),t._v(" "),e("p",[t._v("For example, "),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(" experienced an\n"),e("a",{attrs:{href:"https://blog.github.com/2018-10-30-oct21-post-incident-analysis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("incident"),e("OutboundLink")],1),t._v(" that\nresulted in degraded service for 24 hours and 11 minutes. During the time, the status\nsite was also down — unfortunately, the status site builts on top of GitHub Pages,\nwhich is one of the products delivered by the GitHub platform. Since the incident impacted the platform, the status site failed to take up the duty. Two months later, GitHub\nreleased a new "),e("a",{attrs:{href:"https://githubstatus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Status Site"),e("OutboundLink")],1),t._v(" which builds on the\ncommercial solution "),e("a",{attrs:{href:"https://statuspage.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("statuspage.io"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Running the status site in a different environment from the main technology stack\nreduces the risk of being impacted by the incidents in the platform.")]),t._v(" "),e("h3",{attrs:{id:"high-availability"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#high-availability"}},[t._v("#")]),t._v(" High Availability")]),t._v(" "),e("p",[t._v("The high availability of the status site as the most vital technical requirement\nneeds it using infrastructure spanning across multiple regions and providers.\nThough the status site as a product is not complicated, it's a great challenge\nto keep it highly available from a technical perspective.")]),t._v(" "),e("p",[t._v("It means you need to think of below things:")]),t._v(" "),e("ul",[e("li",[t._v("Monitoring of the status site.")]),t._v(" "),e("li",[t._v("Auto-scaling system resources. When the incident occurs, many users will come to the status site.")]),t._v(" "),e("li",[t._v("Redundant infrastructure. Deploy the status site to available zones across multiple data centers.")]),t._v(" "),e("li",[t._v("Duplicate DNS records of the status site.")]),t._v(" "),e("li",[t._v("Backup network.")]),t._v(" "),e("li",[t._v("...")])]),t._v(" "),e("h3",{attrs:{id:"integrating-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrating-tools"}},[t._v("#")]),t._v(" Integrating Tools")]),t._v(" "),e("p",[t._v("The status site can provide a range of means to notify users of the incidents,\nfor example, email, chat applications, SMS, RSS, webhook, etc.\nWhen a status changes, subscribers will be instantly notified and prepared.")]),t._v(" "),e("p",[t._v("The implementation of the status site application should use "),e("RouterLink",{attrs:{to:"/job-queue.html"}},[t._v("Job Queue")]),t._v(" model to distribute notifications.")],1),t._v(" "),e("h3",{attrs:{id:"ingest-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ingest-metrics"}},[t._v("#")]),t._v(" Ingest Metrics")]),t._v(" "),e("p",[t._v("To keep the statuses of services up-to-date, a pipeline ingesting metrics to the status site is essential.")]),t._v(" "),e("p",[t._v("In general, the data come from the internal monitoring system, such as Graphite, prometheus, InfluxDB, etc.")]),t._v(" "),e("p",[t._v("Below is an example of minimum set of configurations and scripts to send metrics from prometheus to statuspage.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Save as /usr/local/bin/statuspage-collector (chmod +x)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab: */1 * * * * /usr/local/bin/statuspage-collector")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.statuspage.io/v1/page/'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PAGE_ID}")]),t._v('/metrics/data"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Bearer '),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TOKEN")]),t._v('"')]),t._v("\n  -d "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("python /usr/local/bin/collect_metrics.py"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n")])])]),e("p",[t._v("Simplified code is like below.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nSave as /usr/local/bin/collect_metrics.py\n"""')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n\ntime "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y-%m-%dT%H:%M:%SZ'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9090/api/v1/query?query=up&time=%s'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metric_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timestamp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"conclusions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[t._v("#")]),t._v(" Conclusions")]),t._v(" "),e("p",[t._v("The status site shows the statuses of components of the product. It's about to\nbe transparent to users.  Users know exactly where to look where there is downtime\nand staffs will be acting on the information they know is up-to-date.")]),t._v(" "),e("p",[t._v("The reliability and performance being part of the product feature show the commitment of not just the engineering team but the entire organization.")])])}),[],!1,null,null,null);s.default=n.exports}}]);