"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[25137],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(k,i(i({ref:t},d),{},{components:o})):n.createElement(k,i({ref:t},d))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},75103:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={id:"concept-d6d67d86-eec9-41cf-bbf3-bb28456e338c",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset"},i="[WebUI] Click Offset",l={unversionedId:"concept-d6d67d86-eec9-41cf-bbf3-bb28456e338c",id:"concept-d6d67d86-eec9-41cf-bbf3-bb28456e338c",title:"\\[WebUI\\] Click Offset",description:"Description",source:"@site/docs/concept-d6d67d86-eec9-41cf-bbf3-bb28456e338c.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-d6d67d86-eec9-41cf-bbf3-bb28456e338c.mdx",tags:[],version:"current",frontMatter:{id:"concept-d6d67d86-eec9-41cf-bbf3-bb28456e338c",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Click Image",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-image"},next:{title:"\\[WebUI\\] Close Browser",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-browser"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webui-click-offset"},"[","WebUI","]"," Click Offset"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Click on the given element with the relative position ","(","x, y",")"," from the in-view center point of that element. Starting ",(0,r.kt)("strong",{parentName:"p"},"Katalon Studio")," version 8.2.0, if the target element is behind a loading overlay, ",(0,r.kt)("strong",{parentName:"p"},"Katalon Studio")," repeatedly tries to click the element for a period configured in ",(0,r.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Execution ",">"," Default wait for element timeout"),"."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/wait-for-element-timeout/KS-OVERLAY-Default-timeout-settings.png",alt:"Default wait for element timeout settings"}),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Mandatory"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"to"),(0,r.kt)("td",null,"TestObject"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Represent a web element.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"offsetX"),(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Offset from the in-view center point of the element. A negative value means an offset left of the point.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"offsetY"),(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Offset from the in-view center point of the element. A negative value means an offset above the point.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"flowControl"),(0,r.kt)("td",null,"FailureHandling"),(0,r.kt)("td",null,"Optional"),(0,r.kt)("td",null,"Specify failure handling schema to determine whether the execution should be allowed to continue or stop. To learn more about failure handling settings, you can refer to this document: ",(0,r.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio#"},"Failure handling"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example, we want to click on the top left cell of the Tic Tac Toe board. By default, the ",(0,r.kt)("strong",{parentName:"p"},"Default wait for element timeout")," setting is for 30 seconds. If the Tic Tac Toe board is behind a loading overlay, Katalon will try clicking the button for 30 seconds maximum."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\n\n'Open browser and navigate to Tic Tac Toe site.'\nWebUI.openBrowser('https://codepen.io/solartic/full/qEGqNL/')\n\n'Click on the top left cell'\nWebUI.clickOffset(findTestObject('Object Repository/Page_CodePen - Tic Tac Toe/canvas_tic-tac-toe-board'), 100, 100)\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}p.isMDXComponent=!0}}]);