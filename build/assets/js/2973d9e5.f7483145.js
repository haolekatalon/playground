"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[54451],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=s,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(k,i(i({ref:t},l),{},{components:a})):r.createElement(k,i({ref:t},l))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),s=(a(67294),a(3905));const n={author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-26ece0a3-669a-47c0-9218-817ec84eeb31",slug:"/create-tests/create-test-cases/create-test-case-overview"},i="Create test case overview",o={unversionedId:"concept-26ece0a3-669a-47c0-9218-817ec84eeb31",id:"concept-26ece0a3-669a-47c0-9218-817ec84eeb31",title:"Create test case overview",description:"After you create your Katalon project, it's time to create your first test case. Katalon Studio supports keywords-driven testing where test case consist of keywords representing actions of users on the Applications Under Test \\(AUT\\).",source:"@site/docs/concept-26ece0a3-669a-47c0-9218-817ec84eeb31.mdx",sourceDirName:".",slug:"/create-tests/create-test-cases/create-test-case-overview",permalink:"/create-tests/create-test-cases/create-test-case-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-26ece0a3-669a-47c0-9218-817ec84eeb31.mdx",tags:[],version:"current",frontMatter:{author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-26ece0a3-669a-47c0-9218-817ec84eeb31",slug:"/create-tests/create-test-cases/create-test-case-overview"},sidebar:"tutorialSidebar",previous:{title:"Configure Linux for Web Service testing in Katalon Studio",permalink:"/create-tests/manage-projects/set-up-projects/api-testing/configure-linux-for-web-service-testing-in-katalon-studio"},next:{title:"Create a new test case in Katalon Studio",permalink:"/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio"}},c={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-test-case-overview"},"Create test case overview"),(0,s.kt)("p",null,"After you create your Katalon project, it's time to create your first test case. Katalon Studio supports keywords-driven testing where test case consist of keywords representing actions of users on the Applications Under Test ","(","AUT",")","."),(0,s.kt)("p",null,"The manual view allows users with less experience in programming to generate automated tests. In addition to the manual view, Katalon Studio allows users with Groovy/Java experience to programmatically write and modify automated tests in the script view of test cases."),(0,s.kt)("p",null,"This section guides you through:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Creating a new test cases. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio"},"Create a new test case"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Adding your test steps in manual and script view with usage examples. See:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-manual-view"},"Generate test steps in manual view"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view"},"Generate test steps in script view"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Supported value types in Katalon Studio. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/value-types-in-katalon-studio"},"Value types"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Adding statements to your test case. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview"},"Statements"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Calling another test case as a test step. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/call-test-case-in-katalon-studio"},"Call test case"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Configuring the setUp/tearDown methods and the test listeners in Katalon Studio. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/test-fixtures-and-test-listeners-test-hooks-in-katalon-studio"},"Test fixtures and test listeners ","(","test hooks",")"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"How to use text encryption directly inside the test script. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/working-with-sensitive-text-in-katalon-studio"},"Working with sensitive text"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For API testing:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/create-your-first-api-test-with-katalon-studio"},"Create your first API test with Katalon Studio"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio"},"Using Web Services in a test case"),".")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For BDD testing: ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio"},"Create BDD test cases"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Combining Katalon Studio with SAP Scripting Tracker for Windows. See ",(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/combine-katalon-studio-with-sap-scripting-tracker-for-windows"},"Combine Katalon Studio with SAP Scripting Tracker for Windows"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"In this section"),"  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio"},"Create a new test case in Katalon Studio")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-manual-view"},"Generate test steps in Katalon Studio manual view")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view"},"Generate test steps in Katalon Studio script view")))}m.isMDXComponent=!0}}]);