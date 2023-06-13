"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[30334],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(o),d=n,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return o?r.createElement(m,c(c({ref:t},p),{},{components:o})):r.createElement(m,c({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},63683:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={id:"concept-cf8d22cc-052b-4b0a-8679-1ccf750730a4",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back"},c="[WebUI] Back",i={unversionedId:"concept-cf8d22cc-052b-4b0a-8679-1ccf750730a4",id:"concept-cf8d22cc-052b-4b0a-8679-1ccf750730a4",title:"\\[WebUI\\] Back",description:"Description",source:"@site/docs/concept-cf8d22cc-052b-4b0a-8679-1ccf750730a4.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-cf8d22cc-052b-4b0a-8679-1ccf750730a4.mdx",tags:[],version:"current",frontMatter:{id:"concept-cf8d22cc-052b-4b0a-8679-1ccf750730a4",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Authenticate",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-authenticate"},next:{title:"\\[WebUI\\] Check",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-check"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:l},u="wrapper";function k(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webui-back"},"[","WebUI","]"," Back"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,'Simulate users clicking "back" button on their browser.'),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Param Type"),(0,n.kt)("th",null,"Mandatory"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"flowControl"),(0,n.kt)("td",null,"FailureHandling"),(0,n.kt)("td",null,"Optional"),(0,n.kt)("td",null,"Specify ",(0,n.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"You want to back to the previous page after successful navigation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\nimport org.openqa.selenium.Keys as Keys\n\n'Open browser and navigate to demo AUT site'\nWebUI.openBrowser('http://demoaut.katalon.com/')\n\n'Click on \\'Make Appointment\\' button'\nWebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))\n\n'Back to previous page after navigating to \\'Make Appointment\\' page'\nWebUI.back()\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}k.isMDXComponent=!0}}]);