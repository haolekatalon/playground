"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[9911],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),f=o,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const a={id:"concept-3f40d71f-8edb-49fd-875b-0f70442b33dc",slug:"/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server"},i="WebDriver Auto-update for Katalium Server",s={unversionedId:"concept-3f40d71f-8edb-49fd-875b-0f70442b33dc",id:"concept-3f40d71f-8edb-49fd-875b-0f70442b33dc",title:"WebDriver Auto-update for Katalium Server",description:"When Katalium starts, the server will detect the installed browsers and download the compatible WebDriver versions. Supported browsers are Chrome, Firefox, Internet Explorer, and Edge \\(pre 18\\).",source:"@site/docs/concept-3f40d71f-8edb-49fd-875b-0f70442b33dc.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server",permalink:"/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-3f40d71f-8edb-49fd-875b-0f70442b33dc.mdx",tags:[],version:"current",frontMatter:{id:"concept-3f40d71f-8edb-49fd-875b-0f70442b33dc",slug:"/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server"},sidebar:"tutorialSidebar",previous:{title:"Katalium Server - Execute Katalon Studio's scripts on Remote Machines",permalink:"/plugins-and-add-ons/katalium-server/katalium-server-execute-katalon-studio-s-scripts-on-remote-machines"},next:{title:"Sessions Monitoring for Katalium Server",permalink:"/plugins-and-add-ons/katalium-server/sessions-monitoring-for-katalium-server"}},l={},d=[{value:"Install WebDriver for Microsoft Edge version 18 and newer",id:"install-webdriver-for-microsoft-edge-version-18-and-newer",level:2}],u={toc:d},c="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webdriver-auto-update-for-katalium-server"},"WebDriver Auto-update for Katalium Server"),(0,o.kt)("p",null,"When Katalium starts, the server will detect the installed browsers and download the compatible WebDriver versions. Supported browsers are Chrome, Firefox, Internet Explorer, and Edge ","(","pre 18",")","."),(0,o.kt)("h2",{id:"install-webdriver-for-microsoft-edge-version-18-and-newer"},"Install WebDriver for Microsoft Edge version 18 and newer"),(0,o.kt)("p",null,"Microsoft WebDriver for Microsoft Edge version 18 is a Windows Feature on Demand."),(0,o.kt)("p",null,"To install run the following in an elevated command prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0\n\n")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/"},"here")," for more details."))}p.isMDXComponent=!0}}]);