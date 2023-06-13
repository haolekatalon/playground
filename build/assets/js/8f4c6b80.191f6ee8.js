"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[11590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(g,l(l({ref:t},u),{},{components:n})):o.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={id:"concept-8e0f1443-21d7-4458-b852-266252b054ac",slug:"/organize/manage-tests/manage-test-suite-collections-in-katalon-studio"},l="Manage test suite collections in Katalon Studio",s={unversionedId:"concept-8e0f1443-21d7-4458-b852-266252b054ac",id:"concept-8e0f1443-21d7-4458-b852-266252b054ac",title:"Manage test suite collections in Katalon Studio",description:"A test suite collection \\(TSC\\) contains a list of test suites, which allows you to execute multiple test suites together in either parallel mode or sequential mode.",source:"@site/docs/concept-8e0f1443-21d7-4458-b852-266252b054ac.mdx",sourceDirName:".",slug:"/organize/manage-tests/manage-test-suite-collections-in-katalon-studio",permalink:"/organize/manage-tests/manage-test-suite-collections-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-8e0f1443-21d7-4458-b852-266252b054ac.mdx",tags:[],version:"current",frontMatter:{id:"concept-8e0f1443-21d7-4458-b852-266252b054ac",slug:"/organize/manage-tests/manage-test-suite-collections-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Test Case Management With Tags",permalink:"/organize/manage-tests/dynamic-test-suite/test-case-management-with-tags"},next:{title:"Search test cases in Katalon Studio",permalink:"/organize/manage-workspace/search-test-cases-in-katalon-studio"}},r={},c=[{value:"Create a new test suite collection",id:"create-a-new-test-suite-collection",level:2},{value:"Add test suites to a test suite collection",id:"add-test-suites-to-a-test-suite-collection",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-test-suite-collections-in-katalon-studio"},"Manage test suite collections in Katalon Studio"),(0,a.kt)("p",null,"A test suite collection ","(","TSC",")"," contains a list of test suites, which allows you to execute multiple test suites together in either parallel mode or sequential mode."),(0,a.kt)("h2",{id:"create-a-new-test-suite-collection"},"Create a new test suite collection"),(0,a.kt)("p",null,"To create a new test suite collection, do as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Tests Explorer")," panel, right-click on the ",(0,a.kt)("strong",{parentName:"p"},"Test Suites")," folder ",">"," ",(0,a.kt)("strong",{parentName:"p"},"New")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Test Suite Collection"),"."),(0,a.kt)("img",{src:"/doc_images/Global_reuse/Images_warehouse/Katalon_Studio/Tests_Explorer/KS-8.2.5-create-tsc.png",width:500,alt:"Create a new test suite collection"}),(0,a.kt)("p",{parentName:"li"},"Alternatively, you can also go to ",(0,a.kt)("strong",{parentName:"p"},"File")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"New")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Test Suite Collection")," from the main menu."),(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"New Test Suite Collection")," dialog appears.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the name and the description ","(","optional",")",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"OK"),"."))),(0,a.kt)("p",null,"You have successfully created a new test suite collection."),(0,a.kt)("h2",{id:"add-test-suites-to-a-test-suite-collection"},"Add test suites to a test suite collection"),(0,a.kt)("p",null,"To add test suites to a test suite collection, do as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the command toolbar, click ",(0,a.kt)("strong",{parentName:"p"},"Add"),"."),(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"Test Suite Browser")," dialog appears, displaying all of the Katalon Studio test suites.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the test suites you wish to execute. Click ",(0,a.kt)("strong",{parentName:"p"},"OK"),"."),(0,a.kt)("p",{parentName:"li"},"The selected test suites are added to the test suite collection accordingly."),(0,a.kt)("img",{src:"/doc_images/Documents/Organize/Manage_Tests/Test-suite-collection/Image/KS-Add-TS-to-TSC.png",alt:"Add test suites to a test suite collection"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After adding test suites to the test suite collection, you need to configure the environment for test suite execution. The following table will provide you with the detailed description to set up the environment."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Field"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Run with"),(0,a.kt)("td",null,"To select the environment executed with the Test Suite.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Run configuration"),(0,a.kt)("td",null,(0,a.kt)("p",null,"This column allows you to specify the configuration for the selected environment. This is mostly applicable to mobile environment.")," ",(0,a.kt)("p",null,"For example: When you choose iOS environment, you can select which iOS devices you want to execute with by clicking this column.")," ",(0,a.kt)("p",null,(0,a.kt)("img",{src:"/doc_images/Documents/Organize/Manage_Tests/Test-suite-collection/Image/KS-Specify-configuration-for-environment.png",width:300,alt:"Select devices for iOS environment"})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Profile"),(0,a.kt)("td",null,"Execution Profile that contains all variables values for each Test Suite execution. To learn more about the execution profile, you can refer to this document: ",(0,a.kt)("a",{href:"/create-tests/data-driven-testing/execution-profile"},"Execution Profile"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Run"),(0,a.kt)("td",null,"To choose the test suite you wish to run in the test suite collection. This is checked by default.")),"    ")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Next step"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/execute/execute-tests-with-katalon-studio/execute-test-suite-collections-in-katalon-studio"},"Execute test suite collections in Katalon Studio")))}d.isMDXComponent=!0}}]);