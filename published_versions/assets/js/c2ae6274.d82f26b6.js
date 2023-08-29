"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),s=["components"],r={id:"schema-design",title:"Schema design tips"},l=void 0,d={unversionedId:"ingestion/schema-design",id:"ingestion/schema-design",title:"Schema design tips",description:"\x3c!--",source:"@site/docs/latest/ingestion/schema-design.md",sourceDirName:"ingestion",slug:"/ingestion/schema-design",permalink:"/docs/latest/ingestion/schema-design",draft:!1,tags:[],version:"current",frontMatter:{id:"schema-design",title:"Schema design tips"},sidebar:"docs",previous:{title:"Ingestion spec",permalink:"/docs/latest/ingestion/ingestion-spec"},next:{title:"Apache Kafka ingestion",permalink:"/docs/latest/development/extensions-core/kafka-ingestion"}},u={},m=[{value:"Druid&#39;s data model",id:"druids-data-model",level:2},{value:"If you&#39;re coming from a",id:"if-youre-coming-from-a",level:2},{value:"Relational model",id:"relational-model",level:3},{value:"Time series model",id:"time-series-model",level:3},{value:"Log aggregation model",id:"log-aggregation-model",level:3},{value:"General tips and best practices",id:"general-tips-and-best-practices",level:2},{value:"Rollup",id:"rollup",level:3},{value:"Partitioning and sorting",id:"partitioning-and-sorting",level:3},{value:"Sketches for high cardinality columns",id:"sketches-for-high-cardinality-columns",level:3},{value:"String vs numeric dimensions",id:"string-vs-numeric-dimensions",level:3},{value:"Secondary timestamps",id:"secondary-timestamps",level:3},{value:"Nested dimensions",id:"nested-dimensions",level:3},{value:"Counting the number of ingested events",id:"counting-the-number-of-ingested-events",level:3},{value:"Schema auto-discovery for dimensions",id:"schema-auto-discovery-for-dimensions",level:3},{value:"Type-aware schema discovery",id:"type-aware-schema-discovery",level:4},{value:"String-based schema discovery",id:"string-based-schema-discovery",level:4},{value:"Migrating to type-aware schema discovery",id:"migrating-to-type-aware-schema-discovery",level:4},{value:"Including the same column as a dimension and a metric",id:"including-the-same-column-as-a-dimension-and-a-metric",level:3}],c={toc:m},p="wrapper";function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"druids-data-model"},"Druid's data model"),(0,o.kt)("p",null,"For general information, check out the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-model"},"Druid's data model")," on the main\ningestion overview page. The rest of this page discusses tips for users coming from other kinds of systems, as well as\ngeneral tips and common practices."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Druid data is stored in ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/data-model"},"datasources"),", which are similar to tables in a traditional RDBMS."),(0,o.kt)("li",{parentName:"ul"},"Druid datasources can be ingested with or without ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/rollup"},"rollup"),". With rollup enabled, Druid partially aggregates your data during ingestion, potentially reducing its row count, decreasing storage footprint, and improving query performance. With rollup disabled, Druid stores one row for each row in your input data, without any pre-aggregation."),(0,o.kt)("li",{parentName:"ul"},"Every row in Druid must have a timestamp. Data is always partitioned by time, and every query has a time filter. Query results can also be broken down by time buckets like minutes, hours, days, and so on."),(0,o.kt)("li",{parentName:"ul"},"All columns in Druid datasources, other than the timestamp column, are either dimensions or metrics. This follows the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Online_analytical_processing#Overview_of_OLAP_systems"},"standard naming convention")," of OLAP data."),(0,o.kt)("li",{parentName:"ul"},"Typical production datasources have tens to hundreds of columns."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/data-model#dimensions"},"Dimension columns")," are stored as-is, so they can be filtered on, grouped by, or aggregated at query time. They are always single Strings, ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/multi-value-dimensions"},"arrays of Strings"),", single Longs, single Doubles or single Floats."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/data-model#metrics"},"Metric columns")," are stored ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/aggregations"},"pre-aggregated"),", so they can only be aggregated at query time (not filtered or grouped by). They are often stored as numbers (integers or floats) but can also be stored as complex objects like ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/aggregations#approximate-aggregations"},"HyperLogLog sketches or approximate quantile sketches"),". Metrics can be configured at ingestion time even when rollup is disabled, but are most useful when rollup is enabled.")),(0,o.kt)("h2",{id:"if-youre-coming-from-a"},"If you're coming from a"),(0,o.kt)("h3",{id:"relational-model"},"Relational model"),(0,o.kt)("p",null,"(Like Hive or PostgreSQL.)"),(0,o.kt)("p",null,"Druid datasources are generally equivalent to tables in a relational database. Druid ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/lookups"},"lookups"),"\ncan act similarly to data-warehouse-style dimension tables, but as you'll see below, denormalization is often\nrecommended if you can get away with it."),(0,o.kt)("p",null,"Common practice for relational data modeling involves ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Database_normalization"},"normalization"),':\nthe idea of splitting up data into multiple tables such that data redundancy is reduced or eliminated. For example, in a\n"sales" table, best-practices relational modeling calls for a "product id" column that is a foreign key into a separate\n"products" table, which in turn has "product id", "product name", and "product category" columns. This prevents the\nproduct name and category from needing to be repeated on different rows in the "sales" table that refer to the same\nproduct.'),(0,o.kt)("p",null,'In Druid, on the other hand, it is common to use totally flat datasources that do not require joins at query time. In\nthe example of the "sales" table, in Druid it would be typical to store "product',(0,o.kt)("em",{parentName:"p"},'id", "product_name", and\n"product_category" as dimensions directly in a Druid "sales" datasource, without using a separate "products" table.\nTotally flat schemas substantially increase performance, since the need for joins is eliminated at query time. As an\nan added speed boost, this also allows Druid\'s query layer to operate directly on compressed dictionary-encoded data.\nPerhaps counter-intuitively, this does _not')," substantially increase storage footprint relative to normalized schemas,\nsince Druid uses dictionary encoding to effectively store just a single integer per row for string columns."),(0,o.kt)("p",null,"If necessary, Druid datasources can be partially normalized through the use of ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/lookups"},"lookups"),",\nwhich are the rough equivalent of dimension tables in a relational database. At query time, you would use Druid's SQL\n",(0,o.kt)("inlineCode",{parentName:"p"},"LOOKUP")," function, or native lookup extraction functions, instead of using the JOIN keyword like you would in a\nrelational database. Since lookup tables impose an increase in memory footprint and incur more computational overhead\nat query time, it is only recommended to do this if you need the ability to update a lookup table and have the changes\nreflected immediately for already-ingested rows in your main table."),(0,o.kt)("p",null,"Tips for modeling relational data in Druid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Druid datasources do not have primary or unique keys, so skip those."),(0,o.kt)("li",{parentName:"ul"},"Denormalize if possible. If you need to be able to update dimension / lookup tables periodically and have those\nchanges reflected in already-ingested data, consider partial normalization with ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/lookups"},"lookups"),"."),(0,o.kt)("li",{parentName:"ul"},"If you need to join two large distributed tables with each other, you must do this before loading the data into Druid.\nDruid does not support query-time joins of two datasources. Lookups do not help here, since a full copy of each lookup\ntable is stored on each Druid server, so they are not a good choice for large tables."),(0,o.kt)("li",{parentName:"ul"},"Consider whether you want to enable ",(0,o.kt)("a",{parentName:"li",href:"#rollup"},"rollup")," for pre-aggregation, or whether you want to disable\nrollup and load your existing data as-is. Rollup in Druid is similar to creating a summary table in a relational model.")),(0,o.kt)("h3",{id:"time-series-model"},"Time series model"),(0,o.kt)("p",null,"(Like OpenTSDB or InfluxDB.)"),(0,o.kt)("p",null,"Similar to time series databases, Druid's data model requires a timestamp. Druid is not a timeseries database, but\nit is a natural choice for storing timeseries data. Its flexible data model allows it to store both timeseries and\nnon-timeseries data, even in the same datasource."),(0,o.kt)("p",null,"To achieve best-case compression and query performance in Druid for timeseries data, it is important to partition and\nsort by metric name, like timeseries databases often do. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/partitioning"},"Partitioning and sorting")," for more details."),(0,o.kt)("p",null,"Tips for modeling timeseries data in Druid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Druid does not think of data points as being part of a "time series". Instead, Druid treats each point separately\nfor ingestion and aggregation.'),(0,o.kt)("li",{parentName:"ul"},'Create a dimension that indicates the name of the series that a data point belongs to. This dimension is often called\n"metric" or "name". Do not get the dimension named "metric" confused with the concept of Druid metrics. Place this\nfirst in the list of dimensions in your "dimensionsSpec" for best performance (this helps because it improves locality;\nsee ',(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/partitioning"},"partitioning and sorting")," below for details)."),(0,o.kt)("li",{parentName:"ul"},'Create other dimensions for attributes attached to your data points. These are often called "tags" in timeseries\ndatabase systems.'),(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/aggregations"},"metrics"),' corresponding to the types of aggregations that you want to be able\nto query. Typically this includes "sum", "min", and "max" (in one of the long, float, or double flavors). If you want the ability\nto compute percentiles or quantiles, use Druid\'s ',(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/aggregations#approximate-aggregations"},"approximate aggregators"),"."),(0,o.kt)("li",{parentName:"ul"},"Consider enabling ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/rollup"},"rollup"),", which will allow Druid to potentially combine multiple points into one\nrow in your Druid datasource. This can be useful if you want to store data at a different time granularity than it is\nnaturally emitted. It is also useful if you want to combine timeseries and non-timeseries data in the same datasource."),(0,o.kt)("li",{parentName:"ul"},"If you don't know ahead of time what columns you'll want to ingest, use an empty dimensions list to trigger\n",(0,o.kt)("a",{parentName:"li",href:"#schema-auto-discovery-for-dimensions"},"automatic detection of dimension columns"),".")),(0,o.kt)("h3",{id:"log-aggregation-model"},"Log aggregation model"),(0,o.kt)("p",null,"(Like Elasticsearch or Splunk.)"),(0,o.kt)("p",null,"Similar to log aggregation systems, Druid offers inverted indexes for fast searching and filtering. Druid's search\ncapabilities are generally less developed than these systems, and its analytical capabilities are generally more\ndeveloped. The main data modeling differences between Druid and these systems are that when ingesting data into Druid,\nyou must be more explicit. Druid columns have types specific upfront."),(0,o.kt)("p",null,"Tips for modeling log data in Druid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you don't know ahead of time what columns to ingest, you can have Druid perform ",(0,o.kt)("a",{parentName:"li",href:"#schema-auto-discovery-for-dimensions"},"schema auto-discovery"),"."),(0,o.kt)("li",{parentName:"ul"},"If you have nested data, you can ingest it using the ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/querying/nested-columns"},"nested columns")," feature or flatten it using a ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/ingestion-spec#flattenspec"},(0,o.kt)("inlineCode",{parentName:"a"},"flattenSpec")),"."),(0,o.kt)("li",{parentName:"ul"},"Consider enabling ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/rollup"},"rollup")," if you have mainly analytical use cases for your log data. This will\nmean you lose the ability to retrieve individual events from Druid, but you potentially gain substantial compression and\nquery performance boosts.")),(0,o.kt)("h2",{id:"general-tips-and-best-practices"},"General tips and best practices"),(0,o.kt)("h3",{id:"rollup"},"Rollup"),(0,o.kt)("p",null,"Druid can roll up data as it is ingested to minimize the amount of raw data that needs to be stored. This is a form\nof summarization or pre-aggregation. For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/rollup"},"Rollup")," section of the ingestion\ndocumentation."),(0,o.kt)("h3",{id:"partitioning-and-sorting"},"Partitioning and sorting"),(0,o.kt)("p",null,"Optimally partitioning and sorting your data can have substantial impact on footprint and performance. For more details,\nsee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/partitioning"},"Partitioning")," section of the ingestion documentation."),(0,o.kt)("a",{name:"sketches"}),(0,o.kt)("h3",{id:"sketches-for-high-cardinality-columns"},"Sketches for high cardinality columns"),(0,o.kt)("p",null,'When dealing with high cardinality columns like user IDs or other unique IDs, consider using sketches for approximate\nanalysis rather than operating on the actual values. When you ingest data using a sketch, Druid does not store the\noriginal raw data, but instead stores a "sketch" of it that it can feed into a later computation at query time. Popular\nuse cases for sketches include count-distinct and quantile computation. Each sketch is designed for just one particular\nkind of computation.'),(0,o.kt)("p",null,"In general using sketches serves two main purposes: improving rollup, and reducing memory footprint at\nquery time."),(0,o.kt)("p",null,"Sketches improve rollup ratios because they allow you to collapse multiple distinct values into the same sketch. For\nexample, if you have two rows that are identical except for a user ID (perhaps two users did the same action at the\nsame time), storing them in a count-distinct sketch instead of as-is means you can store the data in one row instead of\ntwo. You won't be able to retrieve the user IDs or compute exact distinct counts, but you'll still be able to compute\napproximate distinct counts, and you'll reduce your storage footprint."),(0,o.kt)("p",null,"Sketches reduce memory footprint at query time because they limit the amount of data that needs to be shuffled between\nservers. For example, in a quantile computation, instead of needing to send all data points to a central location\nso they can be sorted and the quantile can be computed, Druid instead only needs to send a sketch of the points. This\ncan reduce data transfer needs to mere kilobytes."),(0,o.kt)("p",null,"For details about the sketches available in Druid, see the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/aggregations#approximate-aggregations"},"approximate aggregators")," page."),(0,o.kt)("p",null,"If you prefer videos, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Hpd3f_MLdXo"},"Not exactly!"),", a conference talk\nabout sketches in Druid."),(0,o.kt)("h3",{id:"string-vs-numeric-dimensions"},"String vs numeric dimensions"),(0,o.kt)("p",null,"If the user wishes to ingest a column as a numeric-typed dimension (Long, Double or Float), it is necessary to specify the type of the column in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensions")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),". If the type is omitted, Druid will ingest a column as the default String type."),(0,o.kt)("p",null,"There are performance tradeoffs between string and numeric columns. Numeric columns are generally faster to group on\nthan string columns. But unlike string columns, numeric columns don't have indexes, so they can be slower to filter on.\nYou may want to experiment to find the optimal choice for your use case."),(0,o.kt)("p",null,"For details about how to configure numeric dimensions, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#dimensionsspec"},(0,o.kt)("inlineCode",{parentName:"a"},"dimensionsSpec"))," documentation."),(0,o.kt)("h3",{id:"secondary-timestamps"},"Secondary timestamps"),(0,o.kt)("p",null,"Druid schemas must always include a primary timestamp. The primary timestamp is used for\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/partitioning"},"partitioning and sorting")," your data, so it should be the timestamp that you will most often filter on.\nDruid is able to rapidly identify and retrieve data corresponding to time ranges of the primary timestamp column."),(0,o.kt)("p",null,"If your data has more than one timestamp, you can ingest the others as secondary timestamps. The best way to do this\nis to ingest them as ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#dimensionsspec"},"long-typed dimensions")," in milliseconds format.\nIf necessary, you can get them into this format using a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#transformspec"},(0,o.kt)("inlineCode",{parentName:"a"},"transformSpec"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/misc/math-expr"},"expressions")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp_parse"),", which returns millisecond timestamps."),(0,o.kt)("p",null,"At query time, you can query secondary timestamps with ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-scalar#date-and-time-functions"},"SQL time functions"),"\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"MILLIS_TO_TIMESTAMP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TIME_FLOOR"),", and others. If you're using native Druid queries, you can use\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/misc/math-expr"},"expressions"),"."),(0,o.kt)("h3",{id:"nested-dimensions"},"Nested dimensions"),(0,o.kt)("p",null,"You can ingest and store nested data in a Druid column as a ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," data type. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/nested-columns"},"Nested columns")," for more information."),(0,o.kt)("p",null,"If you want to ingest nested data in a format unsupported by the nested columns feature, you  must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"flattenSpec")," object to flatten it. For example, if you have data of the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "foo": { "bar": 3 } }\n')),(0,o.kt)("p",null,"then before indexing it, you should transform it to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "foo_bar": 3 }\n')),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#flattenspec"},(0,o.kt)("inlineCode",{parentName:"a"},"flattenSpec"))," documentation for more details."),(0,o.kt)("a",{name:"counting"}),(0,o.kt)("h3",{id:"counting-the-number-of-ingested-events"},"Counting the number of ingested events"),(0,o.kt)("p",null,"When rollup is enabled, count aggregators at query time do not actually tell you the number of rows that have been\ningested. They tell you the number of rows in the Druid datasource, which may be smaller than the number of rows\ningested."),(0,o.kt)("p",null,"In this case, a count aggregator at ",(0,o.kt)("em",{parentName:"p"},"ingestion")," time can be used to count the number of events. However, it is important to note\nthat when you query for this metric, you should use a ",(0,o.kt)("inlineCode",{parentName:"p"},"longSum")," aggregator. A ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," aggregator at query time will return\nthe number of Druid rows for the time interval, which can be used to determine what the roll-up ratio was."),(0,o.kt)("p",null,"To clarify with an example, if your ingestion spec contains:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"metricsSpec": [\n    { "type": "count", "name": "count" }\n]\n')),(0,o.kt)("p",null,"You should query for the number of ingested rows with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"aggregations": [\n    { "type": "longSum", "name": "numIngestedEvents", "fieldName": "count" }\n]\n')),(0,o.kt)("h3",{id:"schema-auto-discovery-for-dimensions"},"Schema auto-discovery for dimensions"),(0,o.kt)("p",null,"Druid can infer the schema for your data in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#type-aware-schema-discovery"},"Type-aware schema discovery (experimental)")," where Druid infers the schema and type for your data. Type-aware schema discovery is an experimental feature currently available for native batch and streaming ingestion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#string-based-schema-discovery"},"String-based schema discovery")," where all the discovered columns are typed as either native string or multi-value string columns.")),(0,o.kt)("h4",{id:"type-aware-schema-discovery"},"Type-aware schema discovery"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that using type-aware schema discovery can impact downstream BI tools depending on how they handle ARRAY typed columns.")),(0,o.kt)("p",null,"You can have Druid infer the schema and types for your data partially or fully by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec.useSchemaDiscovery")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and defining some or no dimensions in the dimensions list. "),(0,o.kt)("p",null,"When performing type-aware schema discovery, Druid can discover all of the columns of your input data (that aren't in\nthe exclusion list). Druid automatically chooses the most appropriate native Druid type among ",(0,o.kt)("inlineCode",{parentName:"p"},"STRING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LONG"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"DOUBLE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ARRAY<STRING>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ARRAY<LONG>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ARRAY<DOUBLE>"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," for nested data. For input formats with\nnative boolean types, Druid ingests these values as strings if ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.expressions.useStrictBooleans")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\n(the default), or longs if set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (for more SQL compatible behavior). Array typed columns can be queried using\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-array-functions"},"array functions")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-functions#unnest"},"UNNEST"),". Nested\ncolumns can be queried with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-json-functions"},"JSON functions"),"."),(0,o.kt)("p",null,"Mixed type columns are stored in the ",(0,o.kt)("em",{parentName:"p"},"least")," restrictive type that can represent all values in the column. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mixed numeric columns are ",(0,o.kt)("inlineCode",{parentName:"li"},"DOUBLE")),(0,o.kt)("li",{parentName:"ul"},"If there are any strings present, then the column is a ",(0,o.kt)("inlineCode",{parentName:"li"},"STRING")),(0,o.kt)("li",{parentName:"ul"},"If there are arrays, then the column becomes an array with the least restrictive element type"),(0,o.kt)("li",{parentName:"ul"},"Any nested data or arrays of nested data become ",(0,o.kt)("inlineCode",{parentName:"li"},"COMPLEX<json>")," nested columns.")),(0,o.kt)("p",null,"If you're already using string-based schema discovery and want to migrate, see ",(0,o.kt)("a",{parentName:"p",href:"#migrating-to-type-aware-schema-discovery"},"Migrating to type-aware schema discovery"),"."),(0,o.kt)("h4",{id:"string-based-schema-discovery"},"String-based schema discovery"),(0,o.kt)("p",null,"If you do not set ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec.useSchemaDiscovery")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", Druid can still use the string-based schema discovery for ingestion if any of the following conditions are met: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The dimension list is empty "),(0,o.kt)("li",{parentName:"ul"},"You set ",(0,o.kt)("inlineCode",{parentName:"li"},"includeAllDimensions")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," ")),(0,o.kt)("p",null,"Druid coerces primitives and arrays of primitive types into the native Druid string type. Nested data structures and arrays of nested data structures are ignored and not ingested."),(0,o.kt)("h4",{id:"migrating-to-type-aware-schema-discovery"},"Migrating to type-aware schema discovery"),(0,o.kt)("p",null,"If you previously used string-based schema discovery and want to migrate to type-aware schema discovery, do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update any queries that use multi-value dimensions (MVDs) to use UNNEST in conjunction with other functions so that no MVD behavior is being relied upon. Type-aware schema discovery generates ARRAY typed columns instead of MVDs, so queries that use any MVD features will fail."),(0,o.kt)("li",{parentName:"ul"},"Be aware of mixed typed inputs and test how type-aware schema discovery handles them. Druid attempts to cast them as the least restrictive type."),(0,o.kt)("li",{parentName:"ul"},"If you notice issues with numeric types, you may need to explicitly cast them. Generally, Druid handles the coercion for you."),(0,o.kt)("li",{parentName:"ul"},"Update your dimension exclusion list and add any nested columns if you want to continue to exclude them. String-based schema discovery automatically ignores nested columns, but type-aware schema discovery will ingest them.")),(0,o.kt)("h3",{id:"including-the-same-column-as-a-dimension-and-a-metric"},"Including the same column as a dimension and a metric"),(0,o.kt)("p",null,"One workflow with unique IDs is to be able to filter on a particular ID, while still being able to do fast unique counts on the ID column.\nIf you are not using schema-less dimensions, this use case is supported by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the metric to something different than the dimension.\nIf you are using schema-less dimensions, the best practice here is to include the same column twice, once as a dimension, and as a ",(0,o.kt)("inlineCode",{parentName:"p"},"hyperUnique")," metric. This may involve\nsome work at ETL time."),(0,o.kt)("p",null,"As an example, for schema-less dimensions, repeat the same column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "device_id_dim": 123, "device_id_met": 123 }\n')),(0,o.kt)("p",null,"and in your ",(0,o.kt)("inlineCode",{parentName:"p"},"metricsSpec"),", include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "type": "hyperUnique", "name": "devices", "fieldName": "device_id_met" }\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"device_id_dim")," should automatically get picked up as a dimension."))}h.isMDXComponent=!0}}]);