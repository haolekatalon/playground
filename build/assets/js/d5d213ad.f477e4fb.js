"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[14811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"concept-76b8d994-21fa-4516-b326-6d77f0af4e0d",slug:"/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio"},i="Dependencies Management with Native Gradle Support (Poc) in Katalon Studio",s={unversionedId:"concept-76b8d994-21fa-4516-b326-6d77f0af4e0d",id:"concept-76b8d994-21fa-4516-b326-6d77f0af4e0d",title:"Dependencies Management with Native Gradle Support \\(Poc\\) in Katalon Studio",description:"-   This Proof of Concept \\(PoC\\) is not ready for production use. We recommend using this PoC for evaluation purposes only.",source:"@site/docs/concept-76b8d994-21fa-4516-b326-6d77f0af4e0d.mdx",sourceDirName:".",slug:"/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio",permalink:"/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-76b8d994-21fa-4516-b326-6d77f0af4e0d.mdx",tags:[],version:"current",frontMatter:{id:"concept-76b8d994-21fa-4516-b326-6d77f0af4e0d",slug:"/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Parameterize Azure DevOps Test Case ID List in Katalon Studio \\(PoC\\)",permalink:"/proof-of-concept/parameterize-azure-devops-test-case-id-list-in-katalon-studio-poc"},next:{title:"Autonomous test generation with Katalon AI",permalink:"/proof-of-concept/autonomous-test-generation-with-katalon-ai"}},l={},p=[{value:"Gradle Settings in Katalon Studio",id:"gradle-settings-in-katalon-studio",level:2},{value:"Gradle Tasks in Katalon Studio",id:"gradle-tasks-in-katalon-studio",level:2},{value:"Usage Examples of katalonCopyDependencies task in Katalon Studio",id:"usage-examples-of-kataloncopydependencies-task-in-katalon-studio",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependencies-management-with-native-gradle-support-poc-in-katalon-studio"},"Dependencies Management with Native Gradle Support ","(","Poc",")"," in Katalon Studio"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This Proof of Concept ","(","PoC",")"," is not ready for production use. We recommend using this PoC for evaluation purposes only."))),(0,o.kt)("p",null,"Previously, Katalon Studio provides a ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/com.katalon.gradle-plugin"},"Gradle Plugin")," to simplify and automate some tasks in Katalon Studio. However, some users find it cumbersome, and dependencies management is pretty bare-bones."),(0,o.kt)("p",null,"Empowered by ",(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/community/eclipse_newsletter/2018/february/buildship.php"},"Buildship"),", an Eclipse plugin, the Gradle wrapper and native Gradle integration in Katalon Studio makes dependencies management with Maven or Gradle more streamlined and robust. You are no longer required to use any Command-line or third-party tools and free to decide which Gradle version to use in your test project instead of being limited to use only the fixed version that you have installed on your local machine earlier."),(0,o.kt)("p",null,"This feature is particularly beneficial to Katalon users who use external libraries in multiple test projects and prefer to use Gradle for managing their build process. You can now run Gradle tasks in a better editor without installing Gradle in Katalon Studio or using an external terminal/command prompt. It substantially reduces your manual effort when you can manage and download external libraries in fewer steps than before."),(0,o.kt)("p",null,"This manual introduces what built-in Gradle support looks like and how to use it in Katalon Studio."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Download Katalon Studio v8.0.0.rc from our GitHub repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio/katalon-studio/releases/tag/v8.0.0.rc"},"Katalon Studio v8.0.0.rc"),"."))),(0,o.kt)("h2",{id:"gradle-settings-in-katalon-studio"},"Gradle Settings in Katalon Studio"),(0,o.kt)("p",null,"Katalon Studio turns on the built-in Gradle integration by default for all projects."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"When you create/open a project for the first time, it takes 2 to 5 minutes to download Gradle."))),(0,o.kt)("p",null,"You can access Gradle settings by going to *",(0,o.kt)("strong",{parentName:"p"},"*Katalon Studio**")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Gradle"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/gradle/gradle-preferences.png"}),(0,o.kt)("p",null,"To change the Gradle settings of an opening project, go to ",(0,o.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Properties")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Gradle"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/gradle/project-menu.png",width:250}),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/gradle/project.png"}),(0,o.kt)("h2",{id:"gradle-tasks-in-katalon-studio"},"Gradle Tasks in Katalon Studio"),(0,o.kt)("p",null,"To use Gradle tasks in Katalon Studio, open the ",(0,o.kt)("strong",{parentName:"p"},"Gradle Tasks")," tab at the bottom dock:"),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/gradle/gradle-tasks.png",width:600}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To sync Gradle tasks when you change the ",(0,o.kt)("code",null,"build.gradle")," file, on the top right corner, click the ",(0,o.kt)("strong",{parentName:"p"},"Refresh Tasks for All Projects")," button.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To view and use Katalon Gradle tasks, on the top right corner, click on the three-dot button and select ",(0,o.kt)("strong",{parentName:"p"},"Show All Tasks"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/gradle/context-menu.png",width:500}),(0,o.kt)("p",{parentName:"li"},"All Katalon Tasks are available under the ",(0,o.kt)("strong",{parentName:"p"},"other")," category of the Gradle task tree:"),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/gradle/other-gradle.png"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on any item on the Gradle task tree to run the dedicated Gradle tasks. For the ",(0,o.kt)("strong",{parentName:"p"},"katalonCopyDependencies")," task, you need to select ",(0,o.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Refresh")," to refresh the project classpath after successfully running the task."))),(0,o.kt)("h2",{id:"usage-examples-of-kataloncopydependencies-task-in-katalon-studio"},"Usage Examples of katalonCopyDependencies task in Katalon Studio"),(0,o.kt)("p",null,"On Tests Explorer, open the ",(0,o.kt)("code",null,"build.gradle")," file, in its editor:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can use ",(0,o.kt)("code",null,"compile")," to add dependencies to a project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"compile 'io.rest-assured:json-schema-validator:3.2.0'\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following command to exclude dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"compile ('io.rest-assured:json-schema-validator:3.2.0') {\n    exclude group: 'org.hamcrest', module: 'hamcrest-core' \n}\n\n")))))}c.isMDXComponent=!0}}]);