"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[58371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={author:"Trinh Huynh <trinh.huynh@katalon.com>",id:"concept-92ed502f-7794-4714-9350-66b59a60267c",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-clear-text"},i="[WebUI] Clear Text",s={unversionedId:"concept-92ed502f-7794-4714-9350-66b59a60267c",id:"concept-92ed502f-7794-4714-9350-66b59a60267c",title:"\\[WebUI\\] Clear Text",description:"Description",source:"@site/docs/concept-92ed502f-7794-4714-9350-66b59a60267c.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-clear-text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-clear-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-92ed502f-7794-4714-9350-66b59a60267c.mdx",tags:[],version:"current",frontMatter:{author:"Trinh Huynh <trinh.huynh@katalon.com>",id:"concept-92ed502f-7794-4714-9350-66b59a60267c",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-clear-text"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Check",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-check"},next:{title:"\\[WebUI\\] Click",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webui-clear-text"},"[","WebUI","]"," Clear Text"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Clear all text of the test object using WebUI."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"to"),(0,o.kt)("td",null,"TestObject"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"Represent a web element")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Optional"),(0,o.kt)("td",null,"Specify ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"true")," if text of object is clear. Otherwise, ",(0,o.kt)("strong",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Enter the following script when you want to clear text in the login fields on CURA Healthcare Service login page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Open browser and navigate to demo AUT site'\nWebUI.openBrowser('http://demoaut.katalon.com')\n\n'Click on \\'Make Appointment\\' button'\nWebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))\n\n'Fill in login information'\nWebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)\n\nWebUI.setText(findTestObject('Page_Login/txt_Password'), Password)\n\n'Clear text in login fields'\nWebUI.clearText(findTestObject('Page_Login/txt_UserName'))\n\nWebUI.clearText(findTestObject('Page_Login/txt_Password'))\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}d.isMDXComponent=!0}}]);