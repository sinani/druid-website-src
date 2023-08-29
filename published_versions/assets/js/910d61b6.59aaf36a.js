"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={id:"postgresql",title:"PostgreSQL Metadata Store"},i=void 0,p={unversionedId:"development/extensions-core/postgresql",id:"development/extensions-core/postgresql",title:"PostgreSQL Metadata Store",description:"\x3c!--",source:"@site/docs/latest/development/extensions-core/postgresql.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/postgresql",permalink:"/docs/latest/development/extensions-core/postgresql",draft:!1,tags:[],version:"current",frontMatter:{id:"postgresql",title:"PostgreSQL Metadata Store"}},d={},m=[{value:"Setting up PostgreSQL",id:"setting-up-postgresql",level:2},{value:"Configuration",id:"configuration",level:2},{value:"PostgreSQL Firehose",id:"postgresql-firehose",level:3}],u={toc:m},c="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use this Apache Druid extension, ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#loading-extensions"},"include")," ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql-metadata-storage")," in the extensions load list."),(0,l.kt)("h2",{id:"setting-up-postgresql"},"Setting up PostgreSQL"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install PostgreSQL"),(0,l.kt)("p",{parentName:"li"},"Use your favorite package manager to install PostgreSQL, e.g.:"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on Ubuntu/Debian using apt ",(0,l.kt)("inlineCode",{parentName:"li"},"apt-get install postgresql")),(0,l.kt)("li",{parentName:"ul"},"on OS X, using ",(0,l.kt)("a",{parentName:"li",href:"http://brew.sh/"},"Homebrew")," ",(0,l.kt)("inlineCode",{parentName:"li"},"brew install postgresql"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a druid database and user"),(0,l.kt)("p",{parentName:"li"},"On the machine where PostgreSQL is installed, using an account with proper\npostgresql permissions:"),(0,l.kt)("p",{parentName:"li"},"Create a druid user, enter ",(0,l.kt)("inlineCode",{parentName:"p"},"diurd")," when prompted for the password."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"createuser druid -P\n")),(0,l.kt)("p",{parentName:"li"},"Create a druid database owned by the user we just created"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"createdb druid -O druid\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"Note:")," On Ubuntu / Debian you may have to prefix the ",(0,l.kt)("inlineCode",{parentName:"p"},"createuser")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"createdb")," commands with ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo -u postgres")," in order to gain proper\npermissions.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your Druid metadata storage extension:"),(0,l.kt)("p",{parentName:"li"},"Add the following parameters to your Druid configuration, replacing ",(0,l.kt)("inlineCode",{parentName:"p"},"<host>"),"\nwith the location (host name and port) of the database."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-properties"},'druid.extensions.loadList=["postgresql-metadata-storage"]\ndruid.metadata.storage.type=postgresql\ndruid.metadata.storage.connector.connectURI=jdbc:postgresql://<host>/druid\ndruid.metadata.storage.connector.user=druid\ndruid.metadata.storage.connector.password=diurd\n')))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"In most cases, the configuration options map directly to the ",(0,l.kt)("a",{parentName:"p",href:"https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database"},"postgres JDBC connection options"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.useSSL")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables SSL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"/docs/latest/operations/password-provider"},"Password Provider")," or String password for the client's key."),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslFactory")),(0,l.kt)("td",{parentName:"tr",align:null},"The class name to use as the ",(0,l.kt)("inlineCode",{parentName:"td"},"SSLSocketFactory")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslFactoryArg")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional argument passed to the sslFactory's constructor"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslMode")),(0,l.kt)("td",{parentName:"tr",align:null},'The sslMode. Possible values are "disable", "require", "verify-ca", "verify-full", "allow" and "prefer"'),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslCert")),(0,l.kt)("td",{parentName:"tr",align:null},"The full path to the certificate file."),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslKey")),(0,l.kt)("td",{parentName:"tr",align:null},"The full path to the key file."),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslRootCert")),(0,l.kt)("td",{parentName:"tr",align:null},"The full path to the root certificate."),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslHostNameVerifier")),(0,l.kt)("td",{parentName:"tr",align:null},"The classname of the hostname verifier."),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.ssl.sslPasswordCallback")),(0,l.kt)("td",{parentName:"tr",align:null},"The classname of the SSL password provider."),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.metadata.postgres.dbTableSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"druid meta table schema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public")),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h3",{id:"postgresql-firehose"},"PostgreSQL Firehose"),(0,l.kt)("p",null,"The PostgreSQL extension provides an implementation of an ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch-input-sources"},"SQL input source")," which can be used to ingest data into Druid from a PostgreSQL database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "dataSchema": {\n      "dataSource": "some_datasource",\n      "dimensionsSpec": {\n        "dimensionExclusions": [],\n        "dimensions": [\n          "dim1",\n          "dim2",\n          "dim3"\n        ]\n      },\n      "timestampSpec": {\n        "format": "auto",\n        "column": "ts"\n      },\n      "metricsSpec": [],\n      "granularitySpec": {\n        "type": "uniform",\n        "segmentGranularity": "DAY",\n        "queryGranularity": {\n          "type": "none"\n        },\n        "rollup": false,\n        "intervals": null\n      },\n      "transformSpec": {\n        "filter": null,\n        "transforms": []\n      }\n    },\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "sql",\n        "database": {\n          "type": "postgresql",\n          "connectorConfig": {\n            "connectURI": "jdbc:postgresql://some-rds-host.us-west-1.rds.amazonaws.com:5432/druid",\n            "user": "admin",\n            "password": "secret"\n          }\n        },\n        "sqls": [\n          "SELECT * FROM some_table"\n        ]\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel"\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);