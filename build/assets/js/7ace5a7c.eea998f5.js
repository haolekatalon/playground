"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[86238],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),w=r,m=u["".concat(l,".").concat(w)]||u[w]||p[w]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=w;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}w.displayName="MDXCreateElement"},99676:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={id:"concept-60ad31f1-9c65-49fb-bd14-a85b75a50421",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title"},i="[WebUI] Close Window Title",s={unversionedId:"concept-60ad31f1-9c65-49fb-bd14-a85b75a50421",id:"concept-60ad31f1-9c65-49fb-bd14-a85b75a50421",title:"\\[WebUI\\] Close Window Title",description:"Description",source:"@site/docs/concept-60ad31f1-9c65-49fb-bd14-a85b75a50421.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-60ad31f1-9c65-49fb-bd14-a85b75a50421.mdx",tags:[],version:"current",frontMatter:{id:"concept-60ad31f1-9c65-49fb-bd14-a85b75a50421",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Close Window Index",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-index"},next:{title:"\\[WebUI\\] Close Window Url",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-url"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webui-close-window-title"},"[","WebUI","]"," Close Window Title"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Close window with the given title."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If users close the current window, the system will switch to the first window. If current window happens to be the first window, the system will switch to a new first window. However, we strongly recommend users switch to another window before closing current window to prevent any confusion.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Mandatory"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"title"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Title of the window to close.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"flowControl"),(0,r.kt)("td",null,"FailureHandling"),(0,r.kt)("td",null,"Optional"),(0,r.kt)("td",null,"Specify ",(0,r.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,'You want to close the window that has title "Documentation".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Open browser and navigate to website katalon.com'\nWebUI.openBrowser('https://www.katalon.com/')\n\n'Click on Documentation to open another window'\nWebUI.click(findTestObject('Page_Katalon Studio/a_Documentation'))\n\n'Close Documentation window'\nWebUI.closeWindowTitle('Documentation')\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}p.isMDXComponent=!0}}]);