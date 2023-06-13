"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[81456],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return o?r.createElement(k,i(i({ref:t},d),{},{components:o})):r.createElement(k,i({ref:t},d))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},75079:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={id:"concept-2ebf24dc-1fa0-4a6d-9fef-df9da67a0f0e",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus"},i="[WebUI] Focus",s={unversionedId:"concept-2ebf24dc-1fa0-4a6d-9fef-df9da67a0f0e",id:"concept-2ebf24dc-1fa0-4a6d-9fef-df9da67a0f0e",title:"\\[WebUI\\] Focus",description:"Description",source:"@site/docs/concept-2ebf24dc-1fa0-4a6d-9fef-df9da67a0f0e.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-2ebf24dc-1fa0-4a6d-9fef-df9da67a0f0e.mdx",tags:[],version:"current",frontMatter:{id:"concept-2ebf24dc-1fa0-4a6d-9fef-df9da67a0f0e",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Find Web Elements",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-elements"},next:{title:"\\[WebUI\\] Forward",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-forward"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webui-focus"},"[","WebUI","]"," Focus"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Move the focus to the specified element; for example is an input field, move the cursor to that field."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Param Type"),(0,n.kt)("th",null,"Mandatory"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"to"),(0,n.kt)("td",null,"TestObject"),(0,n.kt)("td",null,"Required"),(0,n.kt)("td",null,"Represent a web element.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"flowControl"),(0,n.kt)("td",null,"FailureHandling"),(0,n.kt)("td",null,"Optional"),(0,n.kt)("td",null,"Specify ",(0,n.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"You want to focus on 'Comment' textbox."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\n\n'Open browser and navigate to demo AUT site.'\nWebUI.openBrowser(GlobalVariable.G_SiteURL)\n\n'Focus on \\'Comment\\' field'\nWebUI.focus(findTestObject('Page_CuraAppointment/txt_Comment'))\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}p.isMDXComponent=!0}}]);