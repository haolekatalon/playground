"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[29341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={id:"troubleshooting-e8646f9e-8c6f-4faa-afc3-d1207d193ea0",slug:"/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows"},a="Tests not loading when executing with Chrome version 92, 93, 94 in Windows",s={unversionedId:"troubleshooting-e8646f9e-8c6f-4faa-afc3-d1207d193ea0",id:"troubleshooting-e8646f9e-8c6f-4faa-afc3-d1207d193ea0",title:"Tests not loading when executing with Chrome version 92, 93, 94 in Windows",description:"When executing tests in KRE in console mode on Windows with Chrome version 92.x, 93.x or 94.x, you might come across the following error Message Timed out receiving message from renderer: 600.000.",source:"@site/docs/troubleshooting-e8646f9e-8c6f-4faa-afc3-d1207d193ea0.mdx",sourceDirName:".",slug:"/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",permalink:"/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-e8646f9e-8c6f-4faa-afc3-d1207d193ea0.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-e8646f9e-8c6f-4faa-afc3-d1207d193ea0",slug:"/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows"},sidebar:"tutorialSidebar",previous:{title:"New and old proxy mechanisms are not allowed in one command",permalink:"/execute/troubleshooting/new-and-old-proxy-mechanisms-are-not-allowed-in-one-command"},next:{title:"How to free up more available RAM for Katalon Studio",permalink:"/execute/troubleshooting/how-to-free-up-more-available-ram-for-katalon-studio"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows"},"Tests not loading when executing with Chrome version 92, 93, 94 in Windows"),(0,r.kt)("p",null,"When executing tests in KRE in console mode on Windows with Chrome version 92.x, 93.x or 94.x, you might come across the following error: ",(0,r.kt)("code",null,"SessionNotCreatedException: Message: session not created from timeout: Timed out receiving message from renderer: 600.000"),"."),(0,r.kt)("p",null,"This is an issue from Chrome version 93.x and 94.x that doesn't allow the ChromeDriver to start as a Windows service. Here are two workarounds for this issue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("code",null,"--disable-gpu")," for the desired capability in ",(0,r.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Desired Capabilities")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Web UI")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Chrome"),". Click ",(0,r.kt)("strong",{parentName:"p"},"Add"),", then input as follows:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Value")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"args"),(0,r.kt)("td",null,"List"),(0,r.kt)("td",null,"--disable-gpu")),"    ")),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-testcloud/troubleshoot/TC-TROUBLESHOOT-Set-desired-capability.png",alt:"Set desired capabilities in chrome"}),(0,r.kt)("p",{parentName:"li"},"OR"),(0,r.kt)("p",{parentName:"li"},"Downgrade to Chrome of lower version. To downgrade ChromeDriver versions, you can refer to this guide: ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio#"},"Update or Downgrade WebDrivers"),"."))))}p.isMDXComponent=!0}}]);