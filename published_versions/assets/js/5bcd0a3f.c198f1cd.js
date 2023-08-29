"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33725:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Technology",canonical:"https://druid.apache.org/technology"},l=void 0,c={type:"mdx",permalink:"/technology",source:"@site/src/pages/technology.md",title:"Technology",description:"Technology",frontMatter:{title:"Technology",canonical:"https://druid.apache.org/technology"}},d=[{value:"Ingestion Layer",id:"ingestion-layer",level:2},{value:"Stream Data",id:"stream-data",level:3},{value:"Batch Data",id:"batch-data",level:3},{value:"Storage Format",id:"storage-format",level:2},{value:"Interactive Queries",id:"interactive-queries",level:2}],u={toc:d},p="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"simple-header"},(0,o.kt)("div",{class:"container"},(0,o.kt)("h1",null,"Technology"))),(0,o.kt)("p",null,"Apache Druid is used to power real-time analytics applications that require fast queries at scale and under load on streaming and batch data. Druid features a unique distributed architecture across its ingestion, storage, and query layer to handle the scale needed for large aggregations with the performance needed for applications."),(0,o.kt)("div",{class:"image-large"},(0,o.kt)("img",{src:"img/diagram-7.png"})),(0,o.kt)("p",null,"Druid is a services-based architecture that consists of independently scalable services for ingestion, querying, and orchestration, each of which can be fine-tuned to optimize cluster resources for mixed use cases and workloads. For example, more resources can be directed to Druid\u2019s query service while providing less resources to ingestion as workloads change. Druid services can fail without impact on the operations of other services."),(0,o.kt)("p",null,"A Druid deployment is a scalable cluster of commodity hardware with node types that serve specific functions. In a small configuration, all of these nodes can run together on a single server (or even a laptop). For larger deployments, one or more servers are dedicated to each node type and can scale to thousands of nodes for higher throughput requirements."),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Master Nodes govern data availability and ingestion"),(0,o.kt)("li",null,"Query Nodes accept queries, manage execution across the system, and return the results"),(0,o.kt)("li",null,"Data Nodes execute ingestion workloads and queries as well as store queryable data")),(0,o.kt)("p",null,"In addition, Druid utilizes a deep storage layer - cloud object storage or HDFS - that contains an additional copy of each data segment. It enables background data movement between Druid processes and also provides a highly durable data source to recover from system failures."),(0,o.kt)("p",null,"For more information, please visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design"},"our docs page"),"."),(0,o.kt)("h2",{id:"ingestion-layer"},"Ingestion Layer"),(0,o.kt)("p",null,"In Druid, ingestion, sometimes called indexing, is loading data into tables. Druid reads data from source systems, whether files or streams, and stores the data in segments."),(0,o.kt)("p",null,"When data is ingested into Druid, it is automatically indexed, partitioned, and, optionally, partially pre-aggregated (known as ",(0,o.kt)("a",{href:"https://druid.apache.org/docs/latest/tutorials/tutorial-rollup.html"},'"rollup"'),"). Compressed bitmap indexes enable fast filtering and searching across multiple columns. Data is partitioned by time and, optionally, by other dimensions."),(0,o.kt)("div",{class:"image-large"},(0,o.kt)("img",{alt:"Stream Ingestion Layer",src:"img/ingestion_layer_stream_batch.png"})),(0,o.kt)("h3",{id:"stream-data"},"Stream Data"),(0,o.kt)("p",null,"Druid was designed from the outset for rapid ingestion and immediate querying of stream data upon delivery. No connectors are needed as Druid includes inherent exactly-once ingestion for data streams using Apache Kafka\xae and Amazon Kinesis APIs. Druid\u2019s continuous backup into deep storage also ensures a zero RPO for stream data."),(0,o.kt)("h3",{id:"batch-data"},"Batch Data"),(0,o.kt)("p",null,"Druid easily ingests data from object stores including HDFS, Amazon S3, Azure Blob, and Google Cloud Storage as well as data files from databases and other sources. The data files can be in a number of common formats, including JSON, CSV, TSV, Parquet, ORC, Avro, and Protobuf. Druid supports both SQL batch import and in-database transformations."),(0,o.kt)("p",null,"For more information, please visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/index.html"},"our docs page"),"."),(0,o.kt)("h2",{id:"storage-format"},"Storage Format"),(0,o.kt)("p",null,"Druid stores data into segments. Each segment is a single file, typically comprising up to a few million rows of data. Each Druid table can have anywhere from one segment to millions of segments distributed across the cluster."),(0,o.kt)("p",null,"Within the segments, data storage is column-oriented. Queries only load the specific columns needed for each request. Each column\u2019s storage is optimized by data type, which further improves the performance of scans and aggregations. String columns are stored using compressed dictionary encoding, while numeric columns are stored using compressed raw values."),(0,o.kt)("div",{class:"image-large"},(0,o.kt)("img",{alt:"Graphical User Interface, Application",src:"img/graphical_ui_application_v2.png"})),(0,o.kt)("p",null,"For more information, please visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/segments"},"our docs page"),"."),(0,o.kt)("h2",{id:"interactive-queries"},"Interactive Queries"),(0,o.kt)("p",null,"Druid's interactive query engine is utilized for performance-sensitive queries. The query engine and storage format were designed together to provide maximum query performance using the fewest resources possible (as well as the best price for performance for mixed workloads). "),(0,o.kt)("p",null,"With this engine, Druid only reads from segments that are pre-loaded into memory or local storage in the data nodes. This ensures fast performance as data is co-located with computing resources and does not have to move across a network. Data is then queried using scatter/gather for optimal parallelization."),(0,o.kt)("div",{class:"image-large"},(0,o.kt)("img",{alt:"Interactive Querying Scatter Gather Diagram",src:"img/scatter_gather_diagram.png"})),(0,o.kt)("p",null,"First, the query engine prunes the list of segments, creating a list of which segments are relevant to the query based on time-internals and other filters. Next, queries are divided into discrete pieces and sent in parallel to the data nodes that are managing each relevant segment or copy of that segment (\u201cscatter\u201d). On the data nodes, the sub-queries are processed and sent back to the query nodes to merge the final result set (\u201cgather\u201d)."),(0,o.kt)("p",null,"Scatter/gather works from the smallest single server cluster (all of Druid on one server) to clusters with thousands of servers, enabling sub-second performance for most queries even with very large data sets of multiple petabytes."),(0,o.kt)("p",null,"For more information, please visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"our docs page"),"."))}m.isMDXComponent=!0}}]);