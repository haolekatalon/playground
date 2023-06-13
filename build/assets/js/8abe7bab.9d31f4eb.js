"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[23202],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(o),b=n,d=c["".concat(u,".").concat(b)]||c[b]||m[b]||a;return o?r.createElement(d,i(i({ref:t},p),{},{components:o})):r.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},22976:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={id:"troubleshooting-7e8abf8b-b983-4b64-9851-6234786520a6",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set"},i="Appium directory is not set",s={unversionedId:"troubleshooting-7e8abf8b-b983-4b64-9851-6234786520a6",id:"troubleshooting-7e8abf8b-b983-4b64-9851-6234786520a6",title:"Appium directory is not set",description:"When you encounter the following error com.kms.katalon.core.appium.exception.AppiumStartException: Appium directory is not set.",source:"@site/docs/troubleshooting-7e8abf8b-b983-4b64-9851-6234786520a6.mdx",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-7e8abf8b-b983-4b64-9851-6234786520a6.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-7e8abf8b-b983-4b64-9851-6234786520a6",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set"},sidebar:"tutorialSidebar",previous:{title:"An unknown server-side error occurred while processing the command",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command"},next:{title:"Carthage is not found",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/carthage-is-not-found"}},u={},l=[],p={toc:l},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"appium-directory-is-not-set"},"Appium directory is not set"),(0,n.kt)("p",null,"When you encounter the following error ",(0,n.kt)("code",null,"com.kms.katalon.core.appium.exception.AppiumStartException: Appium directory is not set"),"."),(0,n.kt)("p",null,"When running tests with ",(0,n.kt)("strong",{parentName:"p"},"Katalon Runtime Engine"),", by default Katalon checks the Appium directory at APPIUM","_","HOME environment variable."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows: C:","\\","Users","\\","AppData","\\","Roaming","\\","npm","\\","node","_","modules","\\","appium."),(0,n.kt)("li",{parentName:"ul"},"macOS and Linux: /usr/local/lib/node","_","modules/appium.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To set Appium location by using APPIUM","_","HOME environment variable:"),(0,n.kt)("p",{parentName:"li"},"For Windows:"),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/roubleshooting-automated-mobile-testing/windows-appium-home.png",alt:"Set Appium_Home for Windows"}),(0,n.kt)("p",{parentName:"li"},"For macOS and Linux:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"export APPIUM_HOME=/usr/local/lib/node_modules/appium\n")))))}m.isMDXComponent=!0}}]);