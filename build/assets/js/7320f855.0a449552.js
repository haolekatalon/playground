"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[50399],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(n),c=o,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38278:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"concept-8ef6f132-7402-46db-97d4-2bab28d13443",slug:"/get-started/migration-from-other-tools/selenium-testng-junit-migration-to-katalon-studio"},i="Selenium/TestNG/JUnit Migration to Katalon Studio",l={unversionedId:"concept-8ef6f132-7402-46db-97d4-2bab28d13443",id:"concept-8ef6f132-7402-46db-97d4-2bab28d13443",title:"Selenium/TestNG/JUnit Migration to Katalon Studio",description:"From Katalon Studio version 7.4.0 onwards, you can migrate your test cases from Selenium, TestNG, or JUnit projects to Katalon Studio. With the supported features and keywords, you can execute and maintain your existing Selenium, TestNG and JUnit projects with Katalon Platform without starting everything from scratch.",source:"@site/docs/concept-8ef6f132-7402-46db-97d4-2bab28d13443.mdx",sourceDirName:".",slug:"/get-started/migration-from-other-tools/selenium-testng-junit-migration-to-katalon-studio",permalink:"/get-started/migration-from-other-tools/selenium-testng-junit-migration-to-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-8ef6f132-7402-46db-97d4-2bab28d13443.mdx",tags:[],version:"current",frontMatter:{id:"concept-8ef6f132-7402-46db-97d4-2bab28d13443",slug:"/get-started/migration-from-other-tools/selenium-testng-junit-migration-to-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Install Katalon Studio for Linux \\(GUI\\)",permalink:"/get-started/katalon-studio-installation/install-katalon-studio-for-linux-gui"},next:{title:"Import Selenium IDE version 3 projects to Katalon Studio",permalink:"/get-started/migration-from-other-tools/import-selenium-ide-version-3-projects-to-katalon-studio"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Supported features &amp; keywords to facilitate the migration",id:"supported-features--keywords-to-facilitate-the-migration",level:2},{value:"Java class files",id:"java-class-files",level:3},{value:"Built-in TestNG/JUnit keywords",id:"built-in-testngjunit-keywords",level:2},{value:"Install TestNG/JUnit Keywords plugin",id:"install-testngjunit-keywords-plugin",level:3},{value:"TestNG/JUnit Keywords",id:"testngjunit-keywords",level:3},{value:"Migrate Selenium/TestNG/JUnit projects to Katalon Studio",id:"migrate-seleniumtestngjunit-projects-to-katalon-studio",level:2},{value:"See also",id:"see-also",level:2}],d={toc:u},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seleniumtestngjunit-migration-to-katalon-studio"},"Selenium/TestNG/JUnit Migration to Katalon Studio"),(0,o.kt)("p",null,"From Katalon Studio version 7.4.0 onwards, you can migrate your test cases from Selenium, TestNG, or JUnit projects to Katalon Studio. With the supported features and keywords, you can execute and maintain your existing Selenium, TestNG and JUnit projects with Katalon Platform without starting everything from scratch."),(0,o.kt)("p",null,"Katalon Studio supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selenium version 3.x"),(0,o.kt)("li",{parentName:"ul"},"TestNG version 6.11"),(0,o.kt)("li",{parentName:"ul"},"JUnit version 4.12")),(0,o.kt)("p",null,"You can download our GitHub sample project for TestNG migration: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/TestNG-Migration"},"TestNG Migration"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Katalon Studio version 7.4.0 onwards.")),(0,o.kt)("h2",{id:"supported-features--keywords-to-facilitate-the-migration"},"Supported features & keywords to facilitate the migration"),(0,o.kt)("h3",{id:"java-class-files"},"Java class files"),(0,o.kt)("p",null,"You can create, view and edit Java class files."),(0,o.kt)("p",null,"To create a new Java class file, in the ",(0,o.kt)("strong",{parentName:"p"},"Tests Explorer")," panel, go to the ",(0,o.kt)("strong",{parentName:"p"},"Include ",">"," scripts ",">"," groovy")," folder, right-click and choose ",(0,o.kt)("strong",{parentName:"p"},"New ",">"," Java Class"),". Choose a package and enter class name in the ",(0,o.kt)("strong",{parentName:"p"},"New")," dialog."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/new-java-class.png",width:362,alt:"Create Java Class files"}),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/java1.png",width:285,alt:"Sample Java Class file"}),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/java-script.png",width:501,alt:"Sample Java Class file"}),(0,o.kt)("h2",{id:"built-in-testngjunit-keywords"},"Built-in TestNG/JUnit keywords"),(0,o.kt)("h3",{id:"install-testngjunit-keywords-plugin"},"Install TestNG/JUnit Keywords plugin"),(0,o.kt)("p",null,"You can enable the built-in keywords in the manual view by using the ",(0,o.kt)("strong",{parentName:"p"},"TestNG/JUnit Keywords")," plugin. You can download the plugin from Katalon Store here: ",(0,o.kt)("a",{parentName:"p",href:"https://store.katalon.com/product/180/TestNG-JUnit-Keywords"},"TestNG/JUnit Keywords"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/testng-kw.png",width:260}),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/testng-kw-2.png",width:334}),(0,o.kt)("p",null,"After installing the plugin, go to Katalon Studio and click ",(0,o.kt)("strong",{parentName:"p"},"Reload Plugins"),"."),(0,o.kt)("p",null,"If you want to use this plugin offline, you can refer to this document:",(0,o.kt)("a",{parentName:"p",href:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/private-plugins-in-katalon-studio#"},"Use Private Plugins"),". Because the ",(0,o.kt)("strong",{parentName:"p"},"TestNG/JUnit Keywords")," plugin is a ",(0,o.kt)("strong",{parentName:"p"},"platform")," plugin, you need to move the plugin package .jar file in the ",(0,o.kt)("code",null,"<","project","_","name",">","/Plugins/platform")," folder."),(0,o.kt)("h3",{id:"testngjunit-keywords"},"TestNG/JUnit Keywords"),(0,o.kt)("p",null,"TestNG/JUnit Keywords Plugin offers 3 built-in keywords to help you run TestNG/JUnit tests as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"runTestNGTestClasses")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Syntax"),": ",(0,o.kt)("code",null,"runTestNGTestClasses(List testClasses)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Description"),": run TestNG test classes and generate TestNG report at the running report folder."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameters"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Mandatory")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"testClasses"),(0,o.kt)("td",null,"List"),(0,o.kt)("td",null,"List of TestNG test classes"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Specify failure handling schema to determine whether the execution should be allowed to continue or stop. To learn more about failure handling settings, you can refer to this document: ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio#"},"Failure handling"),"."),(0,o.kt)("td",null,"Optional")),"    "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"runTestNGTestSuites")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Syntax"),": ",(0,o.kt)("code",null,"runTestNGTestSuites(List testSuite)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Description"),": run TestNG test suites and generate TestNG report at the running report folder."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameters"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Mandatory")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"testSuites"),(0,o.kt)("td",null,"List"),(0,o.kt)("td",null,"List of TestNG test suites as .xml files"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Specify failure handling schema to determine whether the execution should be allowed to continue or stop. To learn more about failure handling settings, you can refer to this document: ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio#"},"Failure handling"),"."),(0,o.kt)("td",null,"Optional")),"    "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"runJUnitTestClasses")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Syntax"),": ",(0,o.kt)("code",null,"runJUnitTestClasses(List TestClasses)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Description"),": run JUnit test cases and generate JUnit report at the running report folder."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameters"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Mandatory")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"testClasses"),(0,o.kt)("td",null,"List"),(0,o.kt)("td",null,"List of JUnit test classes"),(0,o.kt)("td",null,"Required")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Specify failure handling schema to determine whether the execution should be allowed to continue or stop. To learn more about failure handling settings, you can refer to this document: ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio#"},"Failure handling"),"."),(0,o.kt)("td",null,"Optional")),"    ")))),(0,o.kt)("h2",{id:"migrate-seleniumtestngjunit-projects-to-katalon-studio"},"Migrate Selenium/TestNG/JUnit projects to Katalon Studio"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Install Gradle version 5 or prior. You can download from the Gradle website here: ",(0,o.kt)("a",{parentName:"li",href:"https://gradle.org/"},"Gradle"),"."))),(0,o.kt)("p",null,"To migrate Selenium/TestNG/JUnit scripts to a Katalon Studio project, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a project in Katalon Studio.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build project dependencies."),(0,o.kt)("p",{parentName:"li"},"2.1 Open the .gradle file and add the Java dependencies of your Selenium/TestNG/JUnit project."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You only need to add the JUnit/TestNG project dependencies that are not Selenium dependencies."),(0,o.kt)("li",{parentName:"ul"},"Katalon Studio has bundled TestNG, JUnit and Selenium dependencies, you don't need to declare those dependencies again."))),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/build-gradle.png",width:629,alt:"Selenium migration gradle"}),(0,o.kt)("p",{parentName:"li"},"2.2 Open the ",(0,o.kt)("strong",{parentName:"p"},"Command Prompt")," or ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," and navigate to the folder of your project. Enter ",(0,o.kt)("code",null,"gradle katalonCopyDependencies"),", then wait for the Gradle to build successfully."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/build-success.png",width:500,alt:"Selenium migration build successful"}),(0,o.kt)("p",{parentName:"li"},"2.3 Reopen the project to reload all the dependencies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste the source code of your Selenium/TestNG/JUnit project in the ",(0,o.kt)("code",null,"Include/scripts/groovy")," folder of your Katalon project."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/Copy-the-source-code.gif",alt:"Add TestNG source code"}),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/step5.png",width:322,alt:"Add TestND source code"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste other resources of your Selenium/TestNG/JUnit project in the ",(0,o.kt)("code",null,"Include")," folder of your Katalon project ","(","if any",")","."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/Add-other-resources.gif",alt:"Add TestNG resoureces"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To reload the source code and resources from your Selenium/TestNG/JUnit project, right-click the ",(0,o.kt)("code",null,"Include")," folder, then click ",(0,o.kt)("strong",{parentName:"p"},"Refresh"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/KS-Selenium-Reload-source-code.png",width:322,alt:"Reload TestNG source code and resources"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a test case that includes TestNG keywords to run TestNG test suites or JUnit test classes. To learn more about TestNG keywords, see above: ",(0,o.kt)("a",{parentName:"p",href:"/get-started/migration-from-other-tools/selenium-testng-junit-migration-to-katalon-studio#"},"Built-in TestNG/JUnit keywords"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/Selenium-TestNG-Migration/step7.png",width:629,alt:"Create test case using TestNG/JUnit keywords"}),(0,o.kt)("p",{parentName:"li"},"For real-time monitoring and better reporting capabilities, consider integrating your project with Katalon TestOps. See also ",(0,o.kt)("a",{parentName:"p",href:"/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually"},"Upload Test Results to Katalon TestOps from Katalon Studio"),"."))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/get-started/migration-from-other-tools/import-selenium-ide-version-3-projects-to-katalon-studio"},"Import Selenium IDE version 3 projects")),(0,o.kt)("li",{parentName:"ul"},"Learn more with our Katalon Academy course: ",(0,o.kt)("a",{parentName:"li",href:"https://academy.katalon.com/courses/selenium-migrate/?utm_source=kat_docs&utm_medium=migration_to_ks"},"Migrate from Selenium to Katalon Studio \u2013 Everything You Should Know"))))}m.isMDXComponent=!0}}]);