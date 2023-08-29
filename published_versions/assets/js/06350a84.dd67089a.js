"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,m=d["".concat(l,".").concat(c)]||d[c]||p[c]||r;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={id:"tutorial-sketches-theta",title:"Approximations with Theta sketches",sidebar_label:"Theta sketches"},l=void 0,u={unversionedId:"tutorials/tutorial-sketches-theta",id:"tutorials/tutorial-sketches-theta",title:"Approximations with Theta sketches",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-sketches-theta.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-sketches-theta",permalink:"/docs/latest/tutorials/tutorial-sketches-theta",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-sketches-theta",title:"Approximations with Theta sketches",sidebar_label:"Theta sketches"},sidebar:"docs",previous:{title:"Roll-up",permalink:"/docs/latest/tutorials/tutorial-rollup"},next:{title:"Configuring data retention",permalink:"/docs/latest/tutorials/tutorial-retention"}},h={},d=[{value:"The problem with counts and set operations on large data sets",id:"the-problem-with-counts-and-set-operations-on-large-data-sets",level:2},{value:"Use Theta sketches for fast approximation with set operations",id:"use-theta-sketches-for-fast-approximation-with-set-operations",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ingest data using Theta sketches",id:"ingest-data-using-theta-sketches",level:2},{value:"Query the Theta sketch column",id:"query-the-theta-sketch-column",level:2},{value:"Basic counting",id:"basic-counting",level:3},{value:"Filtered metrics",id:"filtered-metrics",level:3},{value:"Set operations",id:"set-operations",level:3},{value:"Conclusions",id:"conclusions",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2}],p={toc:d},c="wrapper";function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Druid can power real-time collection, streaming, and interactive visualization of clickstreams.\nA common problem in clickstream analytics is counting unique things, like visitors or sessions.\nGenerally this involves scanning through all detail data, because unique counts do not add up as you aggregate the numbers."),(0,r.kt)("h2",{id:"the-problem-with-counts-and-set-operations-on-large-data-sets"},"The problem with counts and set operations on large data sets"),(0,r.kt)("p",null,"Imagine you are interested in the number of visitors that watched episodes of a TV show. Let's say you found that at a given day, 1000 unique visitors watched the first episode, and 800 visitors watched the second episode. You may want to explore further trends, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many visitors watched ",(0,r.kt)("em",{parentName:"li"},"both")," episodes?"),(0,r.kt)("li",{parentName:"ul"},"How many visitors are there that watched ",(0,r.kt)("em",{parentName:"li"},"at least one")," of the episodes?"),(0,r.kt)("li",{parentName:"ul"},"How many visitors watched episode 1 ",(0,r.kt)("em",{parentName:"li"},"but not")," episode 2?")),(0,r.kt)("p",null,"There is no way to answer these questions by just looking at the aggregated numbers. You would have to go back to the detail data and scan every single row. If the data volume is high enough, this may take a very long time, meaning that an interactive data exploration is not possible."),(0,r.kt)("p",null,"An additional nuisance is that unique counts don't work well with rollups. For this example, it would be great if you could have just one row of data per 15 minute interval",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", show, and episode. After all, you are not interested in the individual user IDs, just the unique counts."),(0,r.kt)("p",null,"Is there a way to avoid crunching the detail data every single time, and maybe even enable rollup?\nEnter Theta sketches."),(0,r.kt)("h2",{id:"use-theta-sketches-for-fast-approximation-with-set-operations"},"Use Theta sketches for fast approximation with set operations"),(0,r.kt)("p",null,"Use Theta sketches to obtain a fast approximate estimate for the distinct count of values used to build the sketches.\nTheta sketches are a probabilistic data structure to enable approximate analysis of big data with known error distributions.\nDruid's implementation relies on the ",(0,r.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library."),(0,r.kt)("p",null,"The following properties describe Theta sketches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Similar to other sketches, Theta sketches are ",(0,r.kt)("strong",{parentName:"li"},"mergeable"),". This means you can work with rolled up data and merge the sketches over various time intervals. Thus, you can take advantage of Druid's rollup feature."),(0,r.kt)("li",{parentName:"ul"},"Specific to sketches supported in Druid, Theta sketches support ",(0,r.kt)("strong",{parentName:"li"},"set operations"),". Given two Theta sketches over subsets of data, you can compute the union, intersection, or set difference of the two subsets. This enables you to answer questions like the number of visitors that watched a specific combination of episodes from the example.")),(0,r.kt)("p",null,"In this tutorial, you will learn how to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Theta sketches from your input data at ingestion time."),(0,r.kt)("li",{parentName:"ul"},"Execute distinct count and set operation queries on the Theta sketches to explore the questions presented earlier.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you should have already downloaded Druid as described in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"single-machine quickstart")," and have it running on your local machine.\nIt will also be helpful to have finished ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-batch"},"Tutorial: Loading a file")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-query"},"Tutorial: Querying data"),"."),(0,r.kt)("p",null,"This tutorial works with the following data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"date"),": a timestamp. In this case it's just dates but as mentioned earlier, a finer granularity makes sense in real life."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"uid"),": a user ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"show"),": name of a TV show"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"episode"),": episode identifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"date,uid,show,episode\n2022-05-19,alice,Game of Thrones,S1E1\n2022-05-19,alice,Game of Thrones,S1E2\n2022-05-19,alice,Game of Thrones,S1E1\n2022-05-19,bob,Bridgerton,S1E1\n2022-05-20,alice,Game of Thrones,S1E1\n2022-05-20,carol,Bridgerton,S1E2\n2022-05-20,dan,Bridgerton,S1E1\n2022-05-21,alice,Game of Thrones,S1E1\n2022-05-21,carol,Bridgerton,S1E1\n2022-05-21,erin,Game of Thrones,S1E1\n2022-05-21,alice,Bridgerton,S1E1\n2022-05-22,bob,Game of Thrones,S1E1\n2022-05-22,bob,Bridgerton,S1E1\n2022-05-22,carol,Bridgerton,S1E2\n2022-05-22,bob,Bridgerton,S1E1\n2022-05-22,erin,Game of Thrones,S1E1\n2022-05-22,erin,Bridgerton,S1E2\n2022-05-23,erin,Game of Thrones,S1E1\n2022-05-23,alice,Game of Thrones,S1E1\n")),(0,r.kt)("h2",{id:"ingest-data-using-theta-sketches"},"Ingest data using Theta sketches"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Load data")," wizard in the web console."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Paste data")," as the data source and paste the given data:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load data view with pasted data",src:a(5776).Z,width:"1250",height:"640"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Leave the source type as ",(0,r.kt)("inlineCode",{parentName:"li"},"inline")," and click ",(0,r.kt)("strong",{parentName:"li"},"Apply")," and ",(0,r.kt)("strong",{parentName:"li"},"Next: Parse data"),"."),(0,r.kt)("li",{parentName:"ol"},"Parse the data as CSV, with included headers:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parse raw data",src:a(3008).Z,width:"1250",height:"640"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Accept the default values in the ",(0,r.kt)("strong",{parentName:"li"},"Parse time"),", ",(0,r.kt)("strong",{parentName:"li"},"Transform"),", and ",(0,r.kt)("strong",{parentName:"li"},"Filter")," stages."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Configure schema")," stage, enable rollup and confirm your choice in the dialog. Then set the query granularity to ",(0,r.kt)("inlineCode",{parentName:"li"},"day"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure schema for rollup and query granularity",src:a(77).Z,width:"1250",height:"640"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Add the Theta sketch during this stage. Select ",(0,r.kt)("strong",{parentName:"li"},"Add metric"),"."),(0,r.kt)("li",{parentName:"ol"},"Define the new metric as a Theta sketch with the following details:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"theta_uid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"thetaSketch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"uid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": Accept the default value, ",(0,r.kt)("inlineCode",{parentName:"li"},"16384"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Is input theta sketch"),": Accept the default value, ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),".")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Theta sketch metric",src:a(1341).Z,width:"1250",height:"640"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Apply")," to add the new metric to the data model.")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"You are not interested in individual user ID's, only the unique counts. Right now, ",(0,r.kt)("inlineCode",{parentName:"li"},"uid")," is still in the data model. To remove it, click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"uid")," column in the data model and delete it using the trashcan icon on the right:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete uid column",src:a(1762).Z,width:"1250",height:"640"})),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"For the remaining stages of the ",(0,r.kt)("strong",{parentName:"li"},"Load data")," wizard, set the following options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partition"),": Set ",(0,r.kt)("strong",{parentName:"li"},"Segment granularity")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"day"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tune"),": Leave the default options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Publish"),": Set the datasource name to ",(0,r.kt)("inlineCode",{parentName:"li"},"ts_tutorial"),".")))),(0,r.kt)("p",null,"On the ",(0,r.kt)("strong",{parentName:"p"},"Edit spec")," page, your final input spec should match the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "inline",\n        "data": "date,uid,show,episode\\n2022-05-19,alice,Game of Thrones,S1E1\\n2022-05-19,alice,Game of Thrones,S1E2\\n2022-05-19,alice,Game of Thrones,S1E1\\n2022-05-19,bob,Bridgerton,S1E1\\n2022-05-20,alice,Game of Thrones,S1E1\\n2022-05-20,carol,Bridgerton,S1E2\\n2022-05-20,dan,Bridgerton,S1E1\\n2022-05-21,alice,Game of Thrones,S1E1\\n2022-05-21,carol,Bridgerton,S1E1\\n2022-05-21,erin,Game of Thrones,S1E1\\n2022-05-21,alice,Bridgerton,S1E1\\n2022-05-22,bob,Game of Thrones,S1E1\\n2022-05-22,bob,Bridgerton,S1E1\\n2022-05-22,carol,Bridgerton,S1E2\\n2022-05-22,bob,Bridgerton,S1E1\\n2022-05-22,erin,Game of Thrones,S1E1\\n2022-05-22,erin,Bridgerton,S1E2\\n2022-05-23,erin,Game of Thrones,S1E1\\n2022-05-23,alice,Game of Thrones,S1E1"\n      },\n      "inputFormat": {\n        "type": "csv",\n        "findColumnsFromHeader": true\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel",\n      "partitionsSpec": {\n        "type": "hashed"\n      },\n      "forceGuaranteedRollup": true\n    },\n    "dataSchema": {\n      "dataSource": "ts_tutorial",\n      "timestampSpec": {\n        "column": "date",\n        "format": "auto"\n      },\n      "dimensionsSpec": {\n        "dimensions": [\n          "show",\n          "episode"\n        ]\n      },\n      "granularitySpec": {\n        "queryGranularity": "day",\n        "rollup": true,\n        "segmentGranularity": "day"\n      },\n      "metricsSpec": [\n        {\n          "name": "count",\n          "type": "count"\n        },\n        {\n          "type": "thetaSketch",\n          "name": "theta_uid",\n          "fieldName": "uid"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"theta_uid")," object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"metricsSpec")," list, that defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"thetaSketch")," aggregator on the ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," column during ingestion."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Submit")," to start the ingestion."),(0,r.kt)("h2",{id:"query-the-theta-sketch-column"},"Query the Theta sketch column"),(0,r.kt)("p",null,"Calculating a unique count estimate from a Theta sketch column involves the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Merge the Theta sketches in the column by means of the ",(0,r.kt)("inlineCode",{parentName:"li"},"DS_THETA")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/querying/sql-aggregations#theta-sketch-functions"},"aggregator function")," in Druid SQL."),(0,r.kt)("li",{parentName:"ol"},"Retrieve the estimate from the merged sketch with the ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/querying/sql-scalar#theta-sketch-functions"},(0,r.kt)("inlineCode",{parentName:"a"},"THETA_SKETCH_ESTIMATE"))," function.")),(0,r.kt)("p",null,"Between steps 1 and 2, you can apply set functions as demonstrated later in ",(0,r.kt)("a",{parentName:"p",href:"#set-operations"},"Set operations"),"."),(0,r.kt)("h3",{id:"basic-counting"},"Basic counting"),(0,r.kt)("p",null,"Let's first see what the data looks like in Druid. Run the following SQL statement in the query editor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM ts_tutorial\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"View data with SELECT all query",src:a(2219).Z,width:"1250",height:"640"})),(0,r.kt)("p",null,"The Theta sketch column ",(0,r.kt)("inlineCode",{parentName:"p"},"theta_uid")," appears as a Base64-encoded string; behind it is a bitmap."),(0,r.kt)("p",null,"The following query to compute the distinct counts of user IDs uses ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_THETA")," and groups by the other dimensions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT __time,\n       "show",\n       "episode",\n       APPROX_COUNT_DISTINCT_DS_THETA(theta_uid) AS users\nFROM   ts_tutorial\nGROUP  BY 1, 2, 3\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Count distinct with Theta sketches",src:a(2207).Z,width:"1250",height:"640"})),(0,r.kt)("p",null,"In the preceding query, ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_THETA")," is equivalent to calling ",(0,r.kt)("inlineCode",{parentName:"p"},"DS_THETA")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_ESIMATE")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT __time,\n       "show", \n       "episode",\n       THETA_SKETCH_ESTIMATE(DS_THETA(theta_uid)) AS users\nFROM   ts_tutorial\nGROUP  BY 1, 2, 3\n')),(0,r.kt)("p",null,"That is, ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_THETA")," applies the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DS_THETA"),": Creates a new Theta sketch from the column of Theta sketches"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"THETA_SKETCH_ESTIMATE"),": Calculates the distinct count estimate from the output of ",(0,r.kt)("inlineCode",{parentName:"li"},"DS_THETA"))),(0,r.kt)("h3",{id:"filtered-metrics"},"Filtered metrics"),(0,r.kt)("p",null,"Druid has the capability to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-aggregations"},"filtered metrics"),". This means you can include a WHERE clause in the SELECT part of the query."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the case of Theta sketches, the filter clause has to be inserted between the aggregator and the estimator.")),(0,r.kt)("p",null,"As an example, query the total unique users that watched ",(0,r.kt)("em",{parentName:"p"},"Bridgerton:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton')\n       ) AS users\nFROM ts_tutorial\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Count distinct with Theta sketches and filters",src:a(5421).Z,width:"1250",height:"640"})),(0,r.kt)("h3",{id:"set-operations"},"Set operations"),(0,r.kt)("p",null,"You can use this capability of filtering in the aggregator, together with ",(0,r.kt)("em",{parentName:"p"},"set operations"),", to finally answer the questions from the introduction."),(0,r.kt)("p",null,"How many users watched both episodes of ",(0,r.kt)("em",{parentName:"p"},"Bridgerton?")," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_INTERSECT")," to compute the unique count of the intersection of two (or more) segments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         THETA_SKETCH_INTERSECT(\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E1'),\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E2')\n         )\n       ) AS users\nFROM ts_tutorial\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Count distinct with Theta sketches, filters, and set operations",src:a(9123).Z,width:"1250",height:"640"})),(0,r.kt)("p",null,"Again, the set function is spliced in between the aggregator and the estimator."),(0,r.kt)("p",null,"Likewise, use ",(0,r.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_UNION")," to find the number of visitors that watched ",(0,r.kt)("em",{parentName:"p"},"any")," of the episodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         THETA_SKETCH_UNION(\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E1'),\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E2')\n         )\n       ) AS users\nFROM ts_tutorial\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Count distinct with Theta sketches, filters, and set operations",src:a(4610).Z,width:"1250",height:"640"})),(0,r.kt)("p",null,"And finally, there is ",(0,r.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_NOT")," which computes the set difference of two or more segments.\nThe result describes how many visitors watched episode 1 of Bridgerton but not episode 2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         THETA_SKETCH_NOT(\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E1'),\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E2')\n         )\n       ) AS users\nFROM ts_tutorial\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Count distinct with Theta sketches, filters, and set operations",src:a(5959).Z,width:"1250",height:"640"})),(0,r.kt)("h2",{id:"conclusions"},"Conclusions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Counting distinct things for large data sets can be done with Theta sketches in Apache Druid."),(0,r.kt)("li",{parentName:"ul"},"This allows us to use rollup and discard the individual values, just retaining statistical approximations in the sketches."),(0,r.kt)("li",{parentName:"ul"},"With Theta sketch set operations, affinity analysis is easier, for example, to answer questions such as which segments correlate or overlap by how much.")),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"See the following topics for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/development/extensions-core/datasketches-theta"},"Theta sketch")," for reference on ingestion and native queries on Theta sketches in Druid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/querying/sql-scalar#theta-sketch-functions"},"Theta sketch scalar functions")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/querying/sql-aggregations#theta-sketch-functions"},"Theta sketch aggregation functions")," for Theta sketch functions in Druid SQL queries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/schema-design#sketches-for-high-cardinality-columns"},"Sketches for high cardinality columns")," for Druid schema design involving sketches."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/development/extensions-core/datasketches-extension"},"DataSketches extension")," for more information about the DataSketches extension in Druid as well as other available sketches."),(0,r.kt)("li",{parentName:"ul"},"The accuracy of queries using Theta sketches is governed by the size ",(0,r.kt)("em",{parentName:"li"},"k")," of the Theta sketch and by the operations you perform. See more details in the ",(0,r.kt)("a",{parentName:"li",href:"https://datasketches.apache.org/docs/Theta/ThetaAccuracy.html"},"Apache DataSketches documentation"),".")),(0,r.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,r.kt)("p",null,"This tutorial is adapted from a ",(0,r.kt)("a",{parentName:"p",href:"https://blog.hellmar-becker.de/2022/06/05/druid-data-cookbook-counting-unique-visitors-for-overlapping-segments/"},"blog post")," by community member Hellmar Becker."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Why 15 minutes and not just 1 hour? Intervals of 15 minutes work better with international timezones because those are not always aligned by hour. India, for instance, is 30 minutes off, and Nepal is even 45 minutes off. With 15 minute aggregates, you can get hourly sums for any of those timezones, too!",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},5776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-01-9f58c9b57d8d256aea5934745f344fe1.png"},3008:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-02-e32d19f231398f1227f19e779ee1310d.png"},77:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-03-443921ae1b9de9ec85817ea2c26d2b7a.png"},1341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-04-26f07613b5fbec0b5c214f426cdc6962.png"},1762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-05-cf22220d456d691601842b7b69d7edbc.png"},2219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-06-06336d1bf86a2aa0cc11c8d1293dcdf5.png"},2207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-07-e23cc58e0f2e0a75e63bac700e4b88ed.png"},5421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-08-30096fb3d9b84014e46433d00ae20f4d.png"},9123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-09-4fd76f6da4c9575643d06189c3e8b49f.png"},4610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-10-df09aa476bf53d1a907d7e2fe5005467.png"},5959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-11-4580ecfd4a7b27a37a00e8968271eec5.png"}}]);