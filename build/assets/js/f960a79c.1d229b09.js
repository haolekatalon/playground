"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[25800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={id:"troubleshooting-373aa848-24a1-4292-9916-86cbd21dcda2",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start"},i="Timed out waiting for the driver server to start",s={unversionedId:"troubleshooting-373aa848-24a1-4292-9916-86cbd21dcda2",id:"troubleshooting-373aa848-24a1-4292-9916-86cbd21dcda2",title:"Timed out waiting for the driver server to start",description:"Timed out waiting for the driver server to start.",source:"@site/docs/troubleshooting-373aa848-24a1-4292-9916-86cbd21dcda2.mdx",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-373aa848-24a1-4292-9916-86cbd21dcda2.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-373aa848-24a1-4292-9916-86cbd21dcda2",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start"},sidebar:"tutorialSidebar",previous:{title:"Invalid element state exception",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/invalid-element-state-exception"},next:{title:"Unable to connect to Katalon server",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-connect-to-katalon-server"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"timed-out-waiting-for-the-driver-server-to-start"},"Timed out waiting for the driver server to start"),(0,n.kt)("p",null,"Timed out waiting for the driver server to start."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the correct Edge driver from the Microsoft website here: ",(0,n.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/"},"Microsoft Edge Driver"),"based on your OS build ","(","Go to ",(0,n.kt)("strong",{parentName:"p"},"Start")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"System")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"About")," and locate the number next to OS Build on the screen",")",".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy downloaded Edge driver and replace it in existing ",(0,n.kt)("code",null,"edgedriver")," folder of Katalon Studio. For example: ",(0,n.kt)("code",null,"C:","\\","Katalon\\","_","Studio\\","_","Windows","_","64-4.8","\\","configuration","\\","resources","\\","drivers","\\","edgedriver"),"."))))}p.isMDXComponent=!0}}]);