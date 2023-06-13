"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[99257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"concept-cb37cf1c-716b-4c29-be77-e882f6df7485",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio"},c="Reduce Execution Time in Mobile Testing in Katalon Studio",a={unversionedId:"concept-cb37cf1c-716b-4c29-be77-e882f6df7485",id:"concept-cb37cf1c-716b-4c29-be77-e882f6df7485",title:"Reduce Execution Time in Mobile Testing in Katalon Studio",description:"To speed up a test suite's execution, we recommend starting the application once in the first test case and resetting it in each remaining test case with the following snippet:",source:"@site/docs/concept-cb37cf1c-716b-4c29-be77-e882f6df7485.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-cb37cf1c-716b-4c29-be77-e882f6df7485.mdx",tags:[],version:"current",frontMatter:{id:"concept-cb37cf1c-716b-4c29-be77-e882f6df7485",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Testing Web App on Mobile Browsers in Katalon Studio",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio"},next:{title:"Retrieve mobile's session in Katalon Studio",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/retrieve-mobile-s-session-in-katalon-studio"}},s={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reduce-execution-time-in-mobile-testing-in-katalon-studio"},"Reduce Execution Time in Mobile Testing in Katalon Studio"),(0,i.kt)("p",null,"To speed up a test suite's execution, we recommend starting the application once in the first test case and resetting it in each remaining test case with the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory\nimport io.appium.java_client.AppiumDriver\nAppiumDriver driver = MobileDriverFactory.getDriver();\ndriver.resetApp()\n\n")))}m.isMDXComponent=!0}}]);