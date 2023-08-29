"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(u,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"tutorial-query",title:"Query data",sidebar_label:"Query data"},u=void 0,s={unversionedId:"tutorials/tutorial-query",id:"tutorials/tutorial-query",title:"Query data",description:"\x3c!--",source:"@site/docs/27.0.0/tutorials/tutorial-query.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-query",permalink:"/docs/27.0.0/tutorials/tutorial-query",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-query",title:"Query data",sidebar_label:"Query data"},sidebar:"docs",previous:{title:"Load from Apache Hadoop",permalink:"/docs/27.0.0/tutorials/tutorial-batch-hadoop"},next:{title:"Aggregate data with rollup",permalink:"/docs/27.0.0/tutorials/tutorial-rollup"}},p={},d=[{value:"Query SQL from the web console",id:"query-sql-from-the-web-console",level:2},{value:"More Druid SQL examples",id:"more-druid-sql-examples",level:2},{value:"Query over time",id:"query-over-time",level:3},{value:"General group by",id:"general-group-by",level:3},{value:"Query SQL over HTTP",id:"query-sql-over-http",level:2},{value:"Further reading",id:"further-reading",level:2}],m={toc:d},c="wrapper";function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)(c,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial demonstrates how to query data in Apache Druid using SQL.  "),(0,i.kt)("p",null,"It assumes that you've completed the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/tutorials/"},"Quickstart"),"\nor one of the following tutorials, since we'll query datasources that you would have created\nby following one of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/tutorials/tutorial-batch"},"Load a file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/tutorials/tutorial-kafka"},"Load stream data from Kafka")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/tutorials/tutorial-batch-hadoop"},"Load a file using Hadoop"))),(0,i.kt)("p",null,"There are various ways to run Druid SQL queries: from the web console, using a command line utility\nand by posting the query by HTTP. We'll look at each of these. "),(0,i.kt)("h2",{id:"query-sql-from-the-web-console"},"Query SQL from the web console"),(0,i.kt)("p",null,"The web console includes a view that makes it easier to build and test queries, and\nview their results. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start up the Druid cluster, if it's not already running, and open the web console in your web\nbrowser. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Query")," from the header to open the Query view:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Query view",src:a(68926).Z,title:"Query view",width:"1250",height:"640"})),(0,i.kt)("p",{parentName:"li"},"You can always write queries directly in the edit pane, but the Query view also provides\nfacilities to help you construct SQL queries, which we will use to generate a starter query. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expand the wikipedia datasource tree in the left pane. We'll\ncreate a query for the page dimension.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," and then ",(0,i.kt)("strong",{parentName:"p"},"Show:page")," from the menu: "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Query select page",src:a(25180).Z,title:"Query select page",width:"1250",height:"640"})),(0,i.kt)("p",{parentName:"li"},"A SELECT query appears in the query edit pane and immediately runs. However, in this case, the query\nreturns no data, since by default the query filters for data from the last day, while our data is considerably\nolder than that. Let's remove the filter.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Run")," to run the query."),(0,i.kt)("p",{parentName:"li"},"You should now see two columns of data, a page name and the count:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Query results",src:a(95756).Z,title:"Query results",width:"1250",height:"640"})),(0,i.kt)("p",{parentName:"li"},"Notice that the results are limited in the console to about a hundred, by default, due to the ",(0,i.kt)("strong",{parentName:"p"},"Smart query limit"),"\nfeature. This helps users avoid inadvertently running queries that return an excessive amount of data, possibly\noverwhelming their system. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's edit the query directly and take a look at a few more query building features in the editor.\nClick in the query edit pane and make the following changes: "),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a line after the first column, ",(0,i.kt)("inlineCode",{parentName:"p"},'"page"')," and Start typing the name of a new column, ",(0,i.kt)("inlineCode",{parentName:"p"},'"countryName"'),'. Notice that the autocomplete menu suggests column names, functions, keywords, and more. Choose "countryName" and\nadd the new column to the GROUP BY clause as well, either by name or by reference to its position, ',(0,i.kt)("inlineCode",{parentName:"p"},"2"),".  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For readability, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"Count")," column name with ",(0,i.kt)("inlineCode",{parentName:"p"},"Edits"),", since the ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT()")," function actually\nreturns the number of edits for the page. Make the same column name change in the ORDER BY clause as well. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  The `COUNT()` function is one of many functions available for use in Druid SQL queries. You can mouse over a function name\n  in the autocomplete menu to see a brief description of a function. Also, you can find more information in the Druid \n  documentation; for example, the `COUNT()` function is documented in \n  [Aggregation functions](/docs/27.0.0/querying/sql-aggregations). \n")),(0,i.kt)("p",{parentName:"li"},"   The query should now be:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  "page",\n  "countryName",\n  COUNT(*) AS "Edits"\nFROM "wikipedia"\nGROUP BY 1, 2\nORDER BY "Edits" DESC\n')),(0,i.kt)("p",{parentName:"li"},"   When you run the query again, notice that we're getting the new dimension,",(0,i.kt)("inlineCode",{parentName:"p"},"countryName"),", but for most of the rows, its value\nis null. Let's\nshow only rows with a ",(0,i.kt)("inlineCode",{parentName:"p"},"countryName")," value.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"countryName")," dimension in the left pane and choose the first filtering option. It's not exactly what we want, but\nwe'll edit it by hand. The new WHERE clause should appear in your query. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the WHERE clause to exclude results that do not have a value for countryName: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'WHERE "countryName" IS NOT NULL\n')),(0,i.kt)("p",{parentName:"li"},"Run the query again. You should now see the top edits by country:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Finished query",src:a(12385).Z,title:"Finished query",width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under the covers, every Druid SQL query is translated into a query in the JSON-based ",(0,i.kt)("em",{parentName:"p"},"Druid native query")," format before it runs\non data nodes. You can view the native query for this query by clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," and ",(0,i.kt)("strong",{parentName:"p"},"Explain SQL Query"),". "),(0,i.kt)("p",{parentName:"li"},"   While you can use Druid SQL for most purposes, familiarity with native query is useful for composing complex queries and for troubleshooting\nperformance issues. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/"},"Native queries"),". "),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("img",{alt:"Explain query",src:a(66620).Z,title:"Explain query",width:"1250",height:"640"})))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Another way to view the explain plan is by adding EXPLAIN PLAN FOR to the front of your query, as follows:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'EXPLAIN PLAN FOR\nSELECT\n  "page",\n  "countryName",\n  COUNT(*) AS "Edits"\nFROM "wikipedia"\nWHERE "countryName" IS NOT NULL\nGROUP BY 1, 2\nORDER BY "Edits" DESC\n')),(0,i.kt)("p",{parentName:"admonition"},"This is particularly useful when running queries\nfrom the command line or over HTTP.")),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Finally, click  ",(0,i.kt)("inlineCode",{parentName:"li"},"..."),"  and ",(0,i.kt)("strong",{parentName:"li"},"Edit context")," to see how you can add additional parameters controlling the execution of the query execution. In the field, enter query context options as JSON key-value pairs, as described in ",(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/querying/query-context"},"Context flags"),".  ")),(0,i.kt)("p",null,"That's it! We've built a simple query using some of the query builder features built into the web console. The following\nsections provide a few more example queries you can try."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#query-sql-over-http"},"Query SQL over HTTP")," for an example of how to use the Druid SQL HTTP API. "),(0,i.kt)("h2",{id:"more-druid-sql-examples"},"More Druid SQL examples"),(0,i.kt)("p",null,"Try the following queries to learn a few more Druid SQL tricks:"),(0,i.kt)("h3",{id:"query-over-time"},"Query over time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FLOOR(__time to HOUR) AS HourTime, SUM(deleted) AS LinesDeleted\nFROM wikipedia WHERE TIME_IN_INTERVAL(\"__time\", '2016-06-27/2016-06-28')\nGROUP BY 1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Query example",src:a(69188).Z,title:"Query example",width:"1250",height:"640"})),(0,i.kt)("h3",{id:"general-group-by"},"General group by"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT channel, page, SUM(added)\nFROM wikipedia WHERE TIME_IN_INTERVAL(\"__time\", '2016-06-27/2016-06-28')\nGROUP BY channel, page\nORDER BY SUM(added) DESC\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Query example",src:a(51461).Z,title:"Query example",width:"1250",height:"640"})),(0,i.kt)("h2",{id:"query-sql-over-http"},"Query SQL over HTTP"),(0,i.kt)("p",null,"You can submit native queries ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/api-reference/sql-api#submit-a-query"},"directly to the Druid Broker over HTTP"),". The request body should be a JSON object, with the value for the key ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," containing text of the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "SELECT page, COUNT(*) AS Edits FROM wikipedia WHERE TIME_IN_INTERVAL(\\"__time\\", \'2016-06-27/2016-06-28\') GROUP BY page ORDER BY Edits DESC LIMIT 10"\n}\n')),(0,i.kt)("p",null,"The tutorial package includes an example file that contains the SQL query shown above at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/wikipedia-top-pages-sql.json"),". Let's submit that query to the Druid Broker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' -H 'Content-Type:application/json' -d @quickstart/tutorial/wikipedia-top-pages-sql.json http://localhost:8888/druid/v2/sql\n")),(0,i.kt)("p",null,"The following results should be returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "page": "Copa Am\xe9rica Centenario",\n        "Edits": 29\n    },\n    {\n        "page": "User:Cyde/List of candidates for speedy deletion/Subpage",\n        "Edits": 16\n    },\n    {\n        "page": "Wikipedia:Administrators\' noticeboard/Incidents",\n        "Edits": 16\n    },\n    {\n        "page": "2016 Wimbledon Championships \u2013 Men\'s Singles",\n        "Edits": 15\n    },\n    {\n        "page": "Wikipedia:Administrator intervention against vandalism",\n        "Edits": 15\n    },\n    {\n        "page": "Wikipedia:Vandalismusmeldung",\n        "Edits": 15\n    },\n    {\n        "page": "The Winds of Winter (Game of Thrones)",\n        "Edits": 12\n    },\n    {\n        "page": "\u0648\u0644\u0627\u064a\u0629 \u0627\u0644\u062c\u0632\u0627\u0626\u0631",\n        "Edits": 12\n    },\n    {\n        "page": "Copa Am\xe9rica",\n        "Edits": 10\n    },\n    {\n        "page": "Lionel Messi",\n        "Edits": 10\n    }\n]\n')),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/sql"},"Druid SQL documentation")," for more information on using Druid SQL queries."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/"},"Queries documentation")," for more information on Druid native queries."))}h.isMDXComponent=!0},68926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-01-255bc08f1f43198a74d6e0b51ba63b34.png"},25180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-02-ba5ead6e542013d5312417a810009ef7.png"},95756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-03-3bb6a7521f4fcc9bf410ab6bfa1fa63f.png"},12385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-04-5762722de0e9501228916e5a9939f4af.png"},66620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-05-5231df83d786973ce7a18851f434b534.png"},69188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-06-38a4873c0c5bd253039663d3feab2e65.png"},51461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-query-07-86073da8ac47313ee65b520bcf7b5984.png"}}]);