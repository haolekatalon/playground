"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[34961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,m=k["".concat(l,".").concat(d)]||k[d]||p[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[k]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={id:"concept-4968da13-72a9-4745-8885-2c2831982fd2",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint"},i="[Common] Verify Checkpoint",c={unversionedId:"concept-4968da13-72a9-4745-8885-2c2831982fd2",id:"concept-4968da13-72a9-4745-8885-2c2831982fd2",title:"\\[Common\\] Verify Checkpoint",description:"Description",source:"@site/docs/concept-4968da13-72a9-4745-8885-2c2831982fd2.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-4968da13-72a9-4745-8885-2c2831982fd2.mdx",tags:[],version:"current",frontMatter:{id:"concept-4968da13-72a9-4745-8885-2c2831982fd2",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint"},sidebar:"tutorialSidebar",previous:{title:"\\[Cucumber\\] Run with Cucumber Runner",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-with-cucumber-runner"},next:{title:"\\[Common\\] Verify Equal",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-equal"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],u={toc:s},k="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-verify-checkpoint"},"[","Common","]"," Verify Checkpoint"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Verify if checked data of checkpoint matches their source data."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Mandatory"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"checkpoint"),(0,r.kt)("td",null,"Checkpoint"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Represent the input checkpoint.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"logChangedValues"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"true will log all the changed values between checkpoint data and the source, false will not log any changed value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"flowControl"),(0,r.kt)("td",null,"FailureHandling"),(0,r.kt)("td",null,"Optional"),(0,r.kt)("td",null,"Specify ",(0,r.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",null,"true"),", if checked data of checkpoint matches their source data."),(0,r.kt)("li",null,(0,r.kt)("strong",null,"false"),", if checked data of checkpoint NOT matches their source data.")))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You want to verify the checkpoint and don't print out changed values between checkpoint data and the source."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manual view"),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/common-verify-checkpoint/image2017-3-3-173A563A28.png"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Script view"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Use WebUI keyword'\nWebUI.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)\n\n'Use Mobile keyword'\nMobile.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)\n\n'Use Web Service keyword'\nWS.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)\n\n\n")))))}p.isMDXComponent=!0}}]);