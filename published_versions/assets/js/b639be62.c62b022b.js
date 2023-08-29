"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"scan-query",title:"Scan queries",sidebar_label:"Scan"},s=void 0,d={unversionedId:"querying/scan-query",id:"querying/scan-query",title:"Scan queries",description:"\x3c!--",source:"@site/docs/latest/querying/scan-query.md",sourceDirName:"querying",slug:"/querying/scan-query",permalink:"/docs/latest/querying/scan-query",draft:!1,tags:[],version:"current",frontMatter:{id:"scan-query",title:"Scan queries",sidebar_label:"Scan"},sidebar:"docs",previous:{title:"GroupBy",permalink:"/docs/latest/querying/groupbyquery"},next:{title:"Search",permalink:"/docs/latest/querying/searchquery"}},u={},m=[{value:"Example results",id:"example-results",level:2},{value:"Time ordering",id:"time-ordering",level:2},{value:"Legacy mode",id:"legacy-mode",level:2},{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"Query context properties",id:"query-context-properties",level:2}],p={toc:m},c="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes a query\ntype in the native language. For information about when Druid SQL will use this query type, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-translation#query-types"},"SQL documentation"),".")),(0,i.kt)("p",null,"The Scan query returns raw Apache Druid rows in streaming mode.  "),(0,i.kt)("p",null,"In addition to straightforward usage where a Scan query is issued to the Broker, the Scan query can also be issued\ndirectly to Historical processes or streaming ingestion tasks. This can be useful if you want to retrieve large\namounts of data in parallel."),(0,i.kt)("p",null,"An example Scan query object is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' {\n   "queryType": "scan",\n   "dataSource": "wikipedia",\n   "resultFormat": "list",\n   "columns":[],\n   "intervals": [\n     "2013-01-01/2013-01-02"\n   ],\n   "batchSize":20480,\n   "limit":3\n }\n')),(0,i.kt)("p",null,"The following are the main parameters for Scan queries:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryType"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "scan"; this is the first thing Druid looks at to figure out how to interpret the query'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/datasource"},"DataSource")," for more information."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intervals"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resultFormat"),(0,i.kt)("td",{parentName:"tr",align:null},"How the results are represented: list, compactedList or valueVector. Currently only ",(0,i.kt)("inlineCode",{parentName:"td"},"list")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"compactedList")," are supported. Default is ",(0,i.kt)("inlineCode",{parentName:"td"},"list")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/filters"},"Filters")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"columns"),(0,i.kt)("td",{parentName:"tr",align:null},"A String array of dimensions and metrics to scan. If left empty, all dimensions and metrics are returned."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of rows buffered before being returned to the client. Default is ",(0,i.kt)("inlineCode",{parentName:"td"},"20480")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"How many rows to return. If not specified, all rows will be returned."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offset"),(0,i.kt)("td",{parentName:"tr",align:null},"Skip this many rows when returning results. Skipped rows will still need to be generated internally and then discarded, meaning that raising offsets to high values can cause queries to use additional resources.",(0,i.kt)("br",null),(0,i.kt)("br",null),'Together, "limit" and "offset" can be used to implement pagination. However, note that if the underlying datasource is modified in between page fetches in ways that affect overall query results, then the different pages will not necessarily align with each other.'),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"order"),(0,i.kt)("td",{parentName:"tr",align:null},'The ordering of returned rows based on timestamp.  "ascending", "descending", and "none" (default) are supported.  Currently, "ascending" and "descending" are only supported for queries where the ',(0,i.kt)("inlineCode",{parentName:"td"},"__time")," column is included in the ",(0,i.kt)("inlineCode",{parentName:"td"},"columns")," field and the requirements outlined in the ",(0,i.kt)("a",{parentName:"td",href:"#time-ordering"},"time ordering")," section are met."),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"legacy"),(0,i.kt)("td",{parentName:"tr",align:null},'Return results consistent with the legacy "scan-query" contrib extension. Defaults to the value set by ',(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.scan.legacy"),", which in turn defaults to false. See ",(0,i.kt)("a",{parentName:"td",href:"#legacy-mode"},"Legacy mode")," for details."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"An additional JSON Object which can be used to specify certain flags (see the ",(0,i.kt)("inlineCode",{parentName:"td"},"query context properties")," section below)."),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"example-results"},"Example results"),(0,i.kt)("p",null,"The format of the result when resultFormat equals ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' [{\n    "segmentId" : "wikipedia_editstream_2012-12-29T00:00:00.000Z_2013-01-10T08:00:00.000Z_2013-01-10T08:13:47.830Z_v9",\n    "columns" : [\n      "timestamp",\n      "robot",\n      "namespace",\n      "anonymous",\n      "unpatrolled",\n      "page",\n      "language",\n      "newpage",\n      "user",\n      "count",\n      "added",\n      "delta",\n      "variation",\n      "deleted"\n    ],\n    "events" : [ {\n        "timestamp" : "2013-01-01T00:00:00.000Z",\n        "robot" : "1",\n        "namespace" : "article",\n        "anonymous" : "0",\n        "unpatrolled" : "0",\n        "page" : "11._korpus_(NOVJ)",\n        "language" : "sl",\n        "newpage" : "0",\n        "user" : "EmausBot",\n        "count" : 1.0,\n        "added" : 39.0,\n        "delta" : 39.0,\n        "variation" : 39.0,\n        "deleted" : 0.0\n    }, {\n        "timestamp" : "2013-01-01T00:00:00.000Z",\n        "robot" : "0",\n        "namespace" : "article",\n        "anonymous" : "0",\n        "unpatrolled" : "0",\n        "page" : "112_U.S._580",\n        "language" : "en",\n        "newpage" : "1",\n        "user" : "MZMcBride",\n        "count" : 1.0,\n        "added" : 70.0,\n        "delta" : 70.0,\n        "variation" : 70.0,\n        "deleted" : 0.0\n    }, {\n        "timestamp" : "2013-01-01T00:00:00.000Z",\n        "robot" : "0",\n        "namespace" : "article",\n        "anonymous" : "0",\n        "unpatrolled" : "0",\n        "page" : "113_U.S._243",\n        "language" : "en",\n        "newpage" : "1",\n        "user" : "MZMcBride",\n        "count" : 1.0,\n        "added" : 77.0,\n        "delta" : 77.0,\n        "variation" : 77.0,\n        "deleted" : 0.0\n    } ]\n} ]\n')),(0,i.kt)("p",null,"The format of the result when resultFormat equals ",(0,i.kt)("inlineCode",{parentName:"p"},"compactedList"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' [{\n    "segmentId" : "wikipedia_editstream_2012-12-29T00:00:00.000Z_2013-01-10T08:00:00.000Z_2013-01-10T08:13:47.830Z_v9",\n    "columns" : [\n      "timestamp", "robot", "namespace", "anonymous", "unpatrolled", "page", "language", "newpage", "user", "count", "added", "delta", "variation", "deleted"\n    ],\n    "events" : [\n     ["2013-01-01T00:00:00.000Z", "1", "article", "0", "0", "11._korpus_(NOVJ)", "sl", "0", "EmausBot", 1.0, 39.0, 39.0, 39.0, 0.0],\n     ["2013-01-01T00:00:00.000Z", "0", "article", "0", "0", "112_U.S._580", "en", "1", "MZMcBride", 1.0, 70.0, 70.0, 70.0, 0.0],\n     ["2013-01-01T00:00:00.000Z", "0", "article", "0", "0", "113_U.S._243", "en", "1", "MZMcBride", 1.0, 77.0, 77.0, 77.0, 0.0]\n    ]\n} ]\n')),(0,i.kt)("h2",{id:"time-ordering"},"Time ordering"),(0,i.kt)("p",null,"The Scan query currently supports ordering based on timestamp for non-legacy queries.  Note that using time ordering\nwill yield results that do not indicate which segment rows are from (",(0,i.kt)("inlineCode",{parentName:"p"},"segmentId")," will show up as ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),").  Furthermore,\ntime ordering is only supported where the result set limit is less than ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.maxRowsQueuedForOrdering"),"\nrows ",(0,i.kt)("strong",{parentName:"p"},"or")," all segments scanned have fewer than ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.maxSegmentPartitionsOrderedInMemory")," partitions.  Also,\ntime ordering is not supported for queries issued directly to historicals unless a list of segments is specified.  The\nreasoning behind these limitations is that the implementation of time ordering uses two strategies that can consume too\nmuch heap memory if left unbounded.  These strategies (listed below) are chosen on a per-Historical basis depending on\nquery result set limit and the number of segments being scanned."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Priority Queue: Each segment on a Historical is opened sequentially.  Every row is added to a bounded priority\nqueue which is ordered by timestamp.  For every row above the result set limit, the row with the earliest (if descending)\nor latest (if ascending) timestamp will be dequeued.  After every row has been processed, the sorted contents of the\npriority queue are streamed back to the Broker(s) in batches.  Attempting to load too many rows into memory runs the\nrisk of Historical nodes running out of memory.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.maxRowsQueuedForOrdering")," property protects\nfrom this by limiting the number of rows in the query result set when time ordering is used.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"N-Way Merge: For each segment, each partition is opened in parallel.  Since each partition's rows are already\ntime-ordered, an n-way merge can be performed on the results from each partition.  This approach doesn't persist the entire\nresult set in memory (like the Priority Queue) as it streams back batches as they are returned from the merge function.\nHowever, attempting to query too many partition could also result in high memory usage due to the need to open\ndecompression and decoding buffers for each.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.maxSegmentPartitionsOrderedInMemory")," limit protects\nfrom this by capping the number of partitions opened at any times when time ordering is used."))),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.maxRowsQueuedForOrdering")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.maxSegmentPartitionsOrderedInMemory")," are\nconfigurable and can be tuned based on hardware specs and number of dimensions being queried.  These config properties\ncan also be overridden using the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRowsQueuedForOrdering")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSegmentPartitionsOrderedInMemory")," properties in\nthe query context (see the Query Context Properties section)."),(0,i.kt)("h2",{id:"legacy-mode"},"Legacy mode"),(0,i.kt)("p",null,"The Scan query supports a legacy mode designed for protocol compatibility with the former scan-query contrib extension.\nIn legacy mode you can expect the following behavior changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"__time")," column is returned as ",(0,i.kt)("inlineCode",{parentName:"li"},'"timestamp"')," rather than ",(0,i.kt)("inlineCode",{parentName:"li"},'"__time"'),". This will take precedence over any other column\nyou may have that is named ",(0,i.kt)("inlineCode",{parentName:"li"},'"timestamp"'),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"__time")," column is included in the list of columns even if you do not specifically ask for it."),(0,i.kt)("li",{parentName:"ul"},"Timestamps are returned as ISO8601 time strings rather than integers (milliseconds since 1970-01-01 00:00:00 UTC).")),(0,i.kt)("p",null,"Legacy mode can be triggered either by passing ",(0,i.kt)("inlineCode",{parentName:"p"},'"legacy" : true')," in your query JSON, or by setting\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.scan.legacy = true")," on your Druid processes. If you were previously using the scan-query contrib extension,\nthe best way to migrate is to activate legacy mode during a rolling upgrade, then switch it off after the upgrade\nis complete."),(0,i.kt)("h2",{id:"configuration-properties"},"Configuration Properties"),(0,i.kt)("p",null,"Configuration properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"values"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"druid.query.scan.maxRowsQueuedForOrdering"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of rows returned when time ordering is used"),(0,i.kt)("td",{parentName:"tr",align:null},"An integer in ","[1, 2147483647]"),(0,i.kt)("td",{parentName:"tr",align:null},"100000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"druid.query.scan.maxSegmentPartitionsOrderedInMemory"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of segments scanned per historical when time ordering is used"),(0,i.kt)("td",{parentName:"tr",align:null},"An integer in ","[1, 2147483647]"),(0,i.kt)("td",{parentName:"tr",align:null},"50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"druid.query.scan.legacy"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether legacy mode should be turned on for Scan queries"),(0,i.kt)("td",{parentName:"tr",align:null},"true or false"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"query-context-properties"},"Query context properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"values"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxRowsQueuedForOrdering"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of rows returned when time ordering is used.  Overrides the identically named config."),(0,i.kt)("td",{parentName:"tr",align:null},"An integer in ","[1, 2147483647]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.scan.maxRowsQueuedForOrdering"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxSegmentPartitionsOrderedInMemory"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of segments scanned per historical when time ordering is used.  Overrides the identically named config."),(0,i.kt)("td",{parentName:"tr",align:null},"An integer in ","[1, 2147483647]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.scan.maxSegmentPartitionsOrderedInMemory"))))),(0,i.kt)("p",null,"Sample query context JSON object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxRowsQueuedForOrdering": 100001,\n  "maxSegmentPartitionsOrderedInMemory": 100\n}\n')))}g.isMDXComponent=!0}}]);