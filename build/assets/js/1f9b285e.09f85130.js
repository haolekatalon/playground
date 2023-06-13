"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[3168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||k[p]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"concept-b5f15a5e-753b-4833-ac46-48b9e7ff67be",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value"},i="[WebUI] Wait For Element Attribute Value",l={unversionedId:"concept-b5f15a5e-753b-4833-ac46-48b9e7ff67be",id:"concept-b5f15a5e-753b-4833-ac46-48b9e7ff67be",title:"\\[WebUI\\] Wait For Element Attribute Value",description:"Description",source:"@site/docs/concept-b5f15a5e-753b-4833-ac46-48b9e7ff67be.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-b5f15a5e-753b-4833-ac46-48b9e7ff67be.mdx",tags:[],version:"current",frontMatter:{id:"concept-b5f15a5e-753b-4833-ac46-48b9e7ff67be",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Wait For Angular Load",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-angular-load"},next:{title:"\\[WebUI\\] Wait For Element Clickable",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-clickable"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],c={toc:u},d="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webui-wait-for-element-attribute-value"},"[","WebUI","]"," Wait For Element Attribute Value"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Wait until the given web element has an attribute with specified name and value."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Param Type"),(0,a.kt)("th",null,"Mandatory"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"to"),(0,a.kt)("td",null,"TestObject"),(0,a.kt)("td",null,"Required"),(0,a.kt)("td",null,"Represent a web element.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"attributeName"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Required"),(0,a.kt)("td",null,"The name of the attribute to wait for.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"attributeValue"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Required"),(0,a.kt)("td",null,"The value of the attribute to wait for.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"timeout"),(0,a.kt)("td",null,"int"),(0,a.kt)("td",null,"Required"),(0,a.kt)("td",null,"System will wait at most timeout (seconds) to return result")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"flowControl"),(0,a.kt)("td",null,"FailureHandling"),(0,a.kt)("td",null,"Optional"),(0,a.kt)("td",null,"Specify ",(0,a.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("strong",null,"true:")," the element has the attribute with the specified name and value in the given timeout."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"false:")," the element doesn't have the attribute with the specified name and value in the given timeout.")))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You want to wait until 'Make Appointment' button has id: 'btnMakeAppointment' ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\n\n'Open browser and navigate to demo AUT site.'\nWebUI.openBrowser(GlobalVariable.G_SiteURL)\n\n'Wait for \\'Make Appoint\\' button has id : \\'btnMakeAppointment\\' in 20 seconds'\nWebUI.waitForElementAttributeValue(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 'id', 'btnMakeAppointment', 20)\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}k.isMDXComponent=!0}}]);