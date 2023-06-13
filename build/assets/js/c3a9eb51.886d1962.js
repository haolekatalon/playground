"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[31805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={id:"concept-c896e219-0879-4128-83b1-8e8f8767f79a",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present"},i="[Mobile] Wait For Element Present",a={unversionedId:"concept-c896e219-0879-4128-83b1-8e8f8767f79a",id:"concept-c896e219-0879-4128-83b1-8e8f8767f79a",title:"\\[Mobile\\] Wait For Element Present",description:"Description",source:"@site/docs/concept-c896e219-0879-4128-83b1-8e8f8767f79a.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-c896e219-0879-4128-83b1-8e8f8767f79a.mdx",tags:[],version:"current",frontMatter:{id:"concept-c896e219-0879-4128-83b1-8e8f8767f79a",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Wait For Element Not Has Attribute",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-has-attribute"},next:{title:"\\[Mobile\\] Wait For Element Not Present",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-present"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-wait-for-element-present"},"[","Mobile","]"," Wait For Element Present"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Wait for the given mobile element to present within the given time ","(","in seconds",")","."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Parameter Type"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"to"),(0,o.kt)("td",null,"TestObject"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"Represent a mobile element.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"timeOut"),(0,o.kt)("td",null,"int"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"Maximum period of time (in seconds) that system will wait to return a result.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Optional"),(0,o.kt)("td",null,"Specify ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Param Type"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Boolean"),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"true"),": the element is present within the timeout."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"false"),": the element is NOT present within the timeout.")))))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You want to wait for 'App' control to be present in 10 seconds timeout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport internal.GlobalVariable as GlobalVariable\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(GlobalVariable.G_AndroidApp, false)\n\n'Wait for app control to be present in 10 seconds timeout'\nMobile.waitForElementPresent(findTestObject('Object Repository/Application/android.widget.TextView - App'), 10)\n\n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}d.isMDXComponent=!0}}]);