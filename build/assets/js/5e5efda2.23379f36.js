"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[33091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=i,f=c["".concat(u,".").concat(g)]||c[g]||p[g]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"concept-98283da0-c24b-4211-a12d-f0be8013c5c6",slug:"/maintain/configure-failure-handling-settings-in-katalon-studio"},l="Configure failure handling settings in Katalon Studio",o={unversionedId:"concept-98283da0-c24b-4211-a12d-f0be8013c5c6",id:"concept-98283da0-c24b-4211-a12d-f0be8013c5c6",title:"Configure failure handling settings in Katalon Studio",description:"Failure handling settings allow users to decide whether Katalon Studio will continue running or not when errors occur during execution.",source:"@site/docs/concept-98283da0-c24b-4211-a12d-f0be8013c5c6.mdx",sourceDirName:".",slug:"/maintain/configure-failure-handling-settings-in-katalon-studio",permalink:"/maintain/configure-failure-handling-settings-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-98283da0-c24b-4211-a12d-f0be8013c5c6.mdx",tags:[],version:"current",frontMatter:{id:"concept-98283da0-c24b-4211-a12d-f0be8013c5c6",slug:"/maintain/configure-failure-handling-settings-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Refactor test objects in Katalon Studio",permalink:"/maintain/refactor-test-objects-in-katalon-studio"},next:{title:"Configure class file decompilation in Katalon Studio",permalink:"/maintain/configure-class-file-decompilation-in-katalon-studio"}},u={},s=[{value:"Default failure handling behavior",id:"default-failure-handling-behavior",level:2},{value:"Override failure handling behavior",id:"override-failure-handling-behavior",level:2},{value:"In Manual View",id:"in-manual-view",level:3},{value:"In Scripting View",id:"in-scripting-view",level:3}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-failure-handling-settings-in-katalon-studio"},"Configure failure handling settings in Katalon Studio"),(0,i.kt)("p",null,"Failure handling settings allow users to decide whether Katalon Studio will continue running or not when errors occur during execution."),(0,i.kt)("p",null,"Currently, Katalon Studio supports the following failure handling options:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Option"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Stop on Failure"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Katalon Studio will stop execution should there be any error occurs.")," ",(0,i.kt)("p",null,"The step with errors will have ",(0,i.kt)("strong",null,"Failed")," status."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Continue on Failure"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Katalon Studio will continue in spite of any error during its execution.")," ",(0,i.kt)("p",null,"The step with errors will have ",(0,i.kt)("strong",null,"Failed")," status."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Optional"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Katalon Studio will continue in spite of any error during its execution.")," ",(0,i.kt)("p",null,"The step with errors will have ",(0,i.kt)("strong",null,"Warning")," status."))))),(0,i.kt)("h2",{id:"default-failure-handling-behavior"},"Default failure handling behavior"),(0,i.kt)("p",null,"Follow these steps to define the default behavior for failure handling to be applied across your project:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From Katalon Studio menu, access ",(0,i.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Test Design ",">"," Test Case"),". ",(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/failure-handling/image2017-6-30-203A363A43.png"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the preferred option for the default behavior of ",(0,i.kt)("strong",{parentName:"p"},"Failure Handling"),". Click ",(0,i.kt)("strong",{parentName:"p"},"OK")," when you're done."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The selected option will be applied to new test steps only. For the steps already existed in your test cases, their failure handling option will not be affected by this change. Thus, you may need to ",(0,i.kt)("a",{parentName:"p",href:"/maintain/configure-failure-handling-settings-in-katalon-studio#"},"update them manually"),".")))),(0,i.kt)("h2",{id:"override-failure-handling-behavior"},"Override failure handling behavior"),(0,i.kt)("p",null,"You can override the default failure handling behavior for each test step manually in either ",(0,i.kt)("strong",{parentName:"p"},"Manual view")," or ",(0,i.kt)("strong",{parentName:"p"},"Scripting view")," of test case."),(0,i.kt)("h3",{id:"in-manual-view"},"In Manual View"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Right click on the step that you want to change the failure handling behavior to trigger its context menu"),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/failure-handling/image2017-8-18-153A133A36.png"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the preferred failure handling option and save your test case."))),(0,i.kt)("h3",{id:"in-scripting-view"},"In Scripting View"),(0,i.kt)("p",null,"For all built-in keywords in Katalon Studio, you can add ",(0,i.kt)("em",{parentName:"p"},"FailureHandling")," as the last parameter.When editing a keyword in Scripting mode, use any of these option to specify its behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FailureHandling.STOP_ON_FAILURE\nFailureHandling.CONTINUE_ON_FAILURE\nFailureHandling.OPTIONAL\n\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/failure-handling/23.png"}),(0,i.kt)("p",null,"Tips and tricks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why waiting keywords didn't fail? See: ",(0,i.kt)("a",{parentName:"li",href:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio"},"Understand waiting keywords"),".")))}p.isMDXComponent=!0}}]);