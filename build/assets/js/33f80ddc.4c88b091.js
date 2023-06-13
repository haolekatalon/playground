"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[66595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"troubleshooting-557ff82c-a063-4114-b7ae-b663c3eefb94",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application"},i="Unable to start application",l={unversionedId:"troubleshooting-557ff82c-a063-4114-b7ae-b663c3eefb94",id:"troubleshooting-557ff82c-a063-4114-b7ae-b663c3eefb94",title:"Unable to start application",description:"This happens when:",source:"@site/docs/troubleshooting-557ff82c-a063-4114-b7ae-b663c3eefb94.mdx",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-557ff82c-a063-4114-b7ae-b663c3eefb94.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-557ff82c-a063-4114-b7ae-b663c3eefb94",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application"},sidebar:"tutorialSidebar",previous:{title:"Unable to Start Application while running Android tests on a Windows machine",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-while-running-android-tests-on-a-windows-machine"},next:{title:"Xcode fails to create a provisioning profile for the WebDriverAgentRunner target",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target"}},s={},c=[],p={toc:c},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unable-to-start-application"},"Unable to start application"),(0,o.kt)("p",null,"This happens when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Missing one or more dependencies."),(0,o.kt)("li",{parentName:"ul"},"Outdated or incompatible dependencies."),(0,o.kt)("li",{parentName:"ul"},"Wrong dependencies installation order."),(0,o.kt)("li",{parentName:"ul"},"Broken WebDriverAgent build package.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reinstall dependencies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rebuild WebDriverAgent. Learn how to rebuild WebDriverAgent at ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio"},"Install WebDriverAgent"),"."))))}b.isMDXComponent=!0}}]);