"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[61850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=o,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},36548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={id:"concept-f4e585db-aa22-42bb-afbe-a18387504b19",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value"},l="[Mobile] Set Slider Value",i={unversionedId:"concept-f4e585db-aa22-42bb-afbe-a18387504b19",id:"concept-f4e585db-aa22-42bb-afbe-a18387504b19",title:"\\[Mobile\\] Set Slider Value",description:"Description",source:"@site/docs/concept-f4e585db-aa22-42bb-afbe-a18387504b19.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-f4e585db-aa22-42bb-afbe-a18387504b19.mdx",tags:[],version:"current",frontMatter:{id:"concept-f4e585db-aa22-42bb-afbe-a18387504b19",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Set Encrypted Text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text"},next:{title:"\\[Mobile\\] Set Text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-text"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-set-slider-value"},"[","Mobile","]"," Set Slider Value"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Set the value for Slider control ","(","android.widget.SeekBar for Android, UIASlider for iOS",")"," at specific percentage"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Parameter Type"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"to"),(0,o.kt)("td",null,"TestObject"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"Represent a mobile element (android.widget.SeekBar for Android, UIASlider for iOS)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"percent"),(0,o.kt)("td",null,"Number"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"Percentage value to set to the slider ( 0 <= percent <= 100 )")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"timeout"),(0,o.kt)("td",null,"int"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"System will wait at most timeout (seconds) to return result")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Optional"),(0,o.kt)("td",null,"Specify ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You want to set slider value at 50% of the slider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.util.internal.PathUtil as PathUtil\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(GlobalVariable.G_AndroidApp, false)\n \n'Set slider value at 50% of the slider'\nMobile.setSliderValue(findTestObject('/Application/App/android.widget.SeekBar0'), 50, 10)\n \n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}p.isMDXComponent=!0}}]);