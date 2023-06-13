"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[21745],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=n,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return o?r.createElement(k,i(i({ref:t},p),{},{components:o})):r.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},22057:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={id:"concept-35764ab8-e45f-424a-9d6e-f2328f386596",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application"},i="[Mobile] Close Application",l={unversionedId:"concept-35764ab8-e45f-424a-9d6e-f2328f386596",id:"concept-35764ab8-e45f-424a-9d6e-f2328f386596",title:"\\[Mobile\\] Close Application",description:"Description",source:"@site/docs/concept-35764ab8-e45f-424a-9d6e-f2328f386596.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-35764ab8-e45f-424a-9d6e-f2328f386596.mdx",tags:[],version:"current",frontMatter:{id:"concept-35764ab8-e45f-424a-9d6e-f2328f386596",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Take Screenshot As Checkpoint",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint"},next:{title:"\\[Mobile\\] Clear Text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-clear-text"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mobile-close-application"},"[","Mobile","]"," Close Application"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Close the currently running application."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Param Type"),(0,n.kt)("th",null,"Mandatory"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"flowControl"),(0,n.kt)("td",null,"FailureHandling"),(0,n.kt)("td",null,"Optional"),(0,n.kt)("td",null,"Specify ",(0,n.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"You want to close the current application."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(GlobalVariable.G_AndroidApp, false)\n\n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}m.isMDXComponent=!0}}]);