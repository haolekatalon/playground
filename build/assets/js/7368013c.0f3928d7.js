"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[22402],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(k,i(i({ref:t},p),{},{components:o})):n.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5791:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={id:"concept-e653f2fa-996a-44f4-be0b-da96281e483e",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home"},i="[Mobile] Press Home",s={unversionedId:"concept-e653f2fa-996a-44f4-be0b-da96281e483e",id:"concept-e653f2fa-996a-44f4-be0b-da96281e483e",title:"\\[Mobile\\] Press Home",description:"Description",source:"@site/docs/concept-e653f2fa-996a-44f4-be0b-da96281e483e.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-e653f2fa-996a-44f4-be0b-da96281e483e.mdx",tags:[],version:"current",frontMatter:{id:"concept-e653f2fa-996a-44f4-be0b-da96281e483e",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Press Back",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-back"},next:{title:"\\[Mobile\\] Pinch To Zoom In At Position",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-in-at-position"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mobile-press-home"},"[","Mobile","]"," Press Home"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Simulate pressing the home button on a mobile device."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Mandatory"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"flowControl"),(0,r.kt)("td",null,"FailureHandling"),(0,r.kt)("td",null,"Optional"),(0,r.kt)("td",null,"Specify ",(0,r.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You want to back to home screen after some navigations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.util.internal.PathUtil as PathUtil\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(GlobalVariable.G_AndroidApp, false)\n\nMobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)\n\nMobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)\n\nMobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)\n\n'Back to home screen'\nMobile.pressHome()\n\n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}m.isMDXComponent=!0}}]);