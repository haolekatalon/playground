"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[21624],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(o),p=r,k=u["".concat(c,".").concat(p)]||u[p]||d[p]||a;return o?n.createElement(k,i(i({ref:t},m),{},{components:o})):n.createElement(k,i({ref:t},m))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},92163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={id:"concept-f3ce81f2-f5d0-4a07-950e-49a6bd79c0fa",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match"},i="[Common] Verify Not Match",l={unversionedId:"concept-f3ce81f2-f5d0-4a07-950e-49a6bd79c0fa",id:"concept-f3ce81f2-f5d0-4a07-950e-49a6bd79c0fa",title:"\\[Common\\] Verify Not Match",description:"Description",source:"@site/docs/concept-f3ce81f2-f5d0-4a07-950e-49a6bd79c0fa.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-f3ce81f2-f5d0-4a07-950e-49a6bd79c0fa.mdx",tags:[],version:"current",frontMatter:{id:"concept-f3ce81f2-f5d0-4a07-950e-49a6bd79c0fa",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match"},sidebar:"tutorialSidebar",previous:{title:"\\[Common\\] Verify Not Equal",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-equal"},next:{title:"\\[Common\\] Call Test Case",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-call-test-case"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-verify-not-match"},"[","Common","]"," Verify Not Match"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Verify if two strings do not match each other, the second string can be a regular expression."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Mandatory"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"actualText"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Represent the actual text.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"expectedText"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Represent the expected text (can be a regular expression).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"isRegex"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Indicate whether the expected text is a regular expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"flowControl"),(0,r.kt)("td",null,"FailureHandling"),(0,r.kt)("td",null,"Optional"),(0,r.kt)("td",null,"Specify ",(0,r.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"true, if two given strings do NOT match each other; otherwise, false.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,'You want to verify if the text "Katalon" does not match the regular expression "',"(","L","|","T",")",'atalon".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manual view"),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Keywords/Keywords_Description_In_Katalon_Studio/Common-Assertions/common-verify-not-match/common-verify-not-match.png",width:600,alt:"manual view"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Script view"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Use WebUI keyword'\nWebUI.verifyNotMatch('Katalon', '(L|T)atalon', true)\n\n'Use Mobile keyword'\nMobile.verifyNotMatch('Katalon', '(L|T)atalon', true)\n\n'Use Web Service keyword'\nWS.verifyNotMatch('Katalon', '(L|T)atalon', true)\n\n")))))}d.isMDXComponent=!0}}]);