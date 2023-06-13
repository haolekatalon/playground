"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[43111],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"concept-76e0e305-692b-4c50-9f9e-ebd457a7e700",slug:"/create-tests/data-driven-testing/configure-database-connection-for-data-driven-testing-in-katalon-studio"},i="Configure database connection for data-driven testing in Katalon Studio",l={unversionedId:"concept-76e0e305-692b-4c50-9f9e-ebd457a7e700",id:"concept-76e0e305-692b-4c50-9f9e-ebd457a7e700",title:"Configure database connection for data-driven testing in Katalon Studio",description:"This document gives you information on which database can be used for data-driven testing and how to set up a database connection in Katalon Studio.",source:"@site/docs/concept-76e0e305-692b-4c50-9f9e-ebd457a7e700.mdx",sourceDirName:".",slug:"/create-tests/data-driven-testing/configure-database-connection-for-data-driven-testing-in-katalon-studio",permalink:"/create-tests/data-driven-testing/configure-database-connection-for-data-driven-testing-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-76e0e305-692b-4c50-9f9e-ebd457a7e700.mdx",tags:[],version:"current",frontMatter:{id:"concept-76e0e305-692b-4c50-9f9e-ebd457a7e700",slug:"/create-tests/data-driven-testing/configure-database-connection-for-data-driven-testing-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Checkpoints",permalink:"/create-tests/data-driven-testing/checkpoints"},next:{title:"Data-driven testing with RESTful Web Service requests",permalink:"/create-tests/data-driven-testing/data-driven-testing-with-restful-web-service-requests"}},s={},p=[{value:"Database connection settings",id:"database-connection-settings",level:2},{value:"Connect to a database with a built-in driver",id:"connect-to-a-database-with-a-built-in-driver",level:2},{value:"Connect to a database with an external JDBC driver",id:"connect-to-a-database-with-an-external-jdbc-driver",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-database-connection-for-data-driven-testing-in-katalon-studio"},"Configure database connection for data-driven testing in Katalon Studio"),(0,r.kt)("p",null,"This document gives you information on which database can be used for data-driven testing and how to set up a database connection in Katalon Studio."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"From Katalon Studio version 8.0.0 onwards, MySQL JDBC driver is removed from Katalon Studio built-in libraries. To continue using it, you can refer to this document: ",(0,r.kt)("a",{parentName:"li",href:"/create-tests/data-driven-testing/implement-data-driven-testing-with-mysql"},"Implement DDT with MySQL"),"."))),(0,r.kt)("h2",{id:"database-connection-settings"},"Database connection settings"),(0,r.kt)("p",null,"To do data-driven testing with a database, you can define a database connection that can be used for the whole project and override this global configuration in a test data file later."),(0,r.kt)("p",null,"To set up a global database connection, go to ",(0,r.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Database"),"."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Data_Driven_Testing/database-settings/images/KS-865-database-settings.png",width:600}),(0,r.kt)("p",null,"The configuration includes the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Secure User and Password"),": Select to authenticate the connected database server, disabled by default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User"),": The username for authentication in the connected database server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Password"),": The password for authentication in the connected database server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JDBC Driver"),": The ClassDriverName of the database that has a supported library connection ","(","JDBC",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connection URL"),": The connection string of the database server. Katalon Studio supports built-in JDBC Drivers for the following databases:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sql/connect/jdbc/connecting-to-sql-server-with-the-jdbc-driver?view=sql-server-ver15"},"SQL Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/database/121/JJDBC/urls.htm#JJDBC28268"},"Oracle SQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jdbc.postgresql.org/documentation/datasource/"},"PostgreSQL")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set Connection Properties for JDBC Driver")," ","(","available from version 8.6.5",")",": Set the desired connection properties for your JDBC driver ","(","if any",")",". The properties are applied for built-in drivers and external JDBC driver. To learn about the supported connection properties, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/database/121/JAJDB/oracle/jdbc/OracleDriver.html"},"Connection properties recognized by Oracle JDBC Drivers"),"."))),(0,r.kt)("p",null,"You can set up a connection to one of the three databases with its executable jar file already embedded. Refer to the following table for an availability check:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Built-in Database"),(0,r.kt)("td",null,"Version"),(0,r.kt)("td",null,(0,r.kt)("span",null,"Katalon Studio")," 7.0.0+"),(0,r.kt)("td",null,(0,r.kt)("span",null,"Katalon Studio")," 7.5.0+"),(0,r.kt)("td",null,"Katalon Studio Enterprise 7.0.0+"),(0,r.kt)("td",null,"Katalon Studio Enterprise 7.5.0+")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PostgreSQL"),(0,r.kt)("td",null,"v42.2.17"),(0,r.kt)("td",null,"\u2714"),(0,r.kt)("td",null,"\u2714"),(0,r.kt)("td",null,"\u2714"),(0,r.kt)("td",null,"\u2714")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Oracle SQL"),(0,r.kt)("td",null,"v12.1.0.2"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\u2714"),(0,r.kt)("td",null,"\u2714")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SQL Server"),(0,r.kt)("td",null,"v6.2.2"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\u2714"),(0,r.kt)("td",null,"\u2714")))),(0,r.kt)("p",null,"In case you want to use a version other than the version those built-in drivers are compatible with, learn more about ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/library-management-in-katalon-studio#"},"excluding built-in libraries"),"."),(0,r.kt)("p",null,"If you want to connect to an external database having a JDBC ","(","Java Database Connectivity",")"," driver, you need to install its executable jar file accordingly then tell Katalon Studio where to use it for connection."),(0,r.kt)("h2",{id:"connect-to-a-database-with-a-built-in-driver"},"Connect to a database with a built-in driver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have already set up your Postgre database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Postgre database is running."))),(0,r.kt)("p",null,"The following example shows you how to connect to a Postgre database that can be used in a whole project."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Database"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Database"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Secure User and Password")," to enable ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password")," fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password")," used for authentication.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("strong",{parentName:"p"},"Connection URL"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("strong",{parentName:"p"},"Connection Properties for JDBC Driver")," if any.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Test Connection")," to verify whether your database is connected successfully.",(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Data_Driven_Testing/database-settings/images/ks-865-database-connect-built-in-library.png",width:600,alt:"Connect Database with a built-in driver"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply and Close")," to save your setting."))),(0,r.kt)("h2",{id:"connect-to-a-database-with-an-external-jdbc-driver"},"Connect to a database with an external JDBC driver"),(0,r.kt)("p",null,"This section demonstrates how to set up the connection to a database with an external JDBC driver."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have already set up an external JDBC driver.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The external JDBC driver is running.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An active Katalon Studio Enterprise license."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the executable .jar file of the external JDBC driver. For example, to connect to the MariaDB Java Client driver, download the executable .jar file of the MariaDB library from the Maven Repository website: ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client"},"MariaDB Java Client"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"From Katalon Studio version 8.2.5 onwards, you can connect with the SAP HANA JDBC driver. Download the executable .jar file of the SAP HANA library in the Maven Repository website here: ",(0,r.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"},"SAP HANA JDBC Driver"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Project Settings")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Library Management"),". Click ",(0,r.kt)("strong",{parentName:"p"},"Add")," to add the jar file to the external library."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Data_Driven_Testing/database-settings/images/KS-DATABASE-Connect-external-library.png",width:500,alt:"Add an external JDBC driver"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Project Settings"),", go to ",(0,r.kt)("strong",{parentName:"p"},"Database")," to configure the database connection."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Secure User and Password")," to enable ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password")," fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password")," used for authentication.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("strong",{parentName:"p"},"Connection URL"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("strong",{parentName:"p"},"Connection Properties for JDBC Driver")," if any.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Test Connection")," to verify whether your database is connected successfully.",(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Data_Driven_Testing/database-settings/images/database-mariadb-new.png",width:500,alt:"Connect an external JDBC driver"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply and Close")," to complete the connection process."))))}u.isMDXComponent=!0}}]);