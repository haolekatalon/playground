"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[97398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?o.createElement(k,i(i({ref:t},d),{},{components:r})):o.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));const n={id:"concept-ee82febc-df3e-48ac-b5e8-60b452d0bfa7",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load"},i="[WebUI] Wait for jQuery Load",s={unversionedId:"concept-ee82febc-df3e-48ac-b5e8-60b452d0bfa7",id:"concept-ee82febc-df3e-48ac-b5e8-60b452d0bfa7",title:"\\[WebUI\\] Wait for jQuery Load",description:"Description",source:"@site/docs/concept-ee82febc-df3e-48ac-b5e8-60b452d0bfa7.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-ee82febc-df3e-48ac-b5e8-60b452d0bfa7.mdx",tags:[],version:"current",frontMatter:{id:"concept-ee82febc-df3e-48ac-b5e8-60b452d0bfa7",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Wait For Image Present",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-image-present"},next:{title:"\\[WebUI\\] Wait For Page Load",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-page-load"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webui-wait-for-jquery-load"},"[","WebUI","]"," Wait for jQuery Load"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Wait for jQuery to load within the given time in second unit."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"ParamType"),(0,a.kt)("th",null,"Mandatory"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"seconds"),(0,a.kt)("td",null,"int"),(0,a.kt)("td",null,"Required"),(0,a.kt)("td",null,"The number of seconds to wait")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"flowControl"),(0,a.kt)("td",null,"FailureHandling"),(0,a.kt)("td",null,"Optional"),(0,a.kt)("td",null,"Specify ",(0,a.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"true")," if jQuery is ready. Otherwise, ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Checking of whether jQuery is loaded or used in your current web application is based on this ",(0,a.kt)("a",{parentName:"p",href:"http://www.swtestacademy.com/selenium-wait-javascript-angular-ajax/"},"approach"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Verify text displayed after waiting for jQuery to load"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Open browser and navigate to page'\nWebUI.openBrowser('http://www.jquery-steps.com/Examples#async')\n\n'Click on Start Example button of Async Content Loading Example'\nWebUI.click(findTestObject('Page_jQuery-async'))\n\n\n'Wait for jQuery to be loaded in 20 seconds timeout.\nWebUI.waitForJQueryLoad(20)\n\n'Verify displayed text'\nWebUI.verifyTextPresent('To test async loading again press \\\"Next\\\" and then go back to the first step.', false)\n\nWebUI.closeBrowser()\n\n")))}p.isMDXComponent=!0}}]);