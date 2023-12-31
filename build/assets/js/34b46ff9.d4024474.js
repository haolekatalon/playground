"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[98073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,h=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},22125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={id:"troubleshooting-6a8a3229-ee05-47a4-b87c-2a512fb778b3",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application"},i="Timeout when launching Windows application",s={unversionedId:"troubleshooting-6a8a3229-ee05-47a4-b87c-2a512fb778b3",id:"troubleshooting-6a8a3229-ee05-47a4-b87c-2a512fb778b3",title:"Timeout when launching Windows application",description:"When you reach timeout when launching Windows applications, try one of the following ways:",source:"@site/docs/troubleshooting-6a8a3229-ee05-47a4-b87c-2a512fb778b3.mdx",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-6a8a3229-ee05-47a4-b87c-2a512fb778b3.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-6a8a3229-ee05-47a4-b87c-2a512fb778b3",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application"},sidebar:"tutorialSidebar",previous:{title:"The sendKeys keyword did not send the correct text with German keyboard as default settings",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/the-sendkeys-keyword-did-not-send-the-correct-text-with-german-keyboard-as-default-settings"},next:{title:"Unable to start the Windows application",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/unable-to-start-the-windows-application"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"timeout-when-launching-windows-application"},"Timeout when launching Windows application"),(0,r.kt)("p",null,"When you reach timeout when launching Windows applications, try one of the following ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Close all unneeded apps and opened folders. Open Katalon Studio only.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove unused shortcuts on your desktop and your taskbar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("code",null,"Windows.startApplication(\u2026)")," instead of ",(0,r.kt)("code",null,"Windows.startApplicationWithTitle(\u2026)"),"."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Windows.startApplication('C:\\\\Users\\\\katalon\\\\Desktop\\\\Demo\\\\WindowsFormsApp.exe') Windows.switchToWindowTitle('Main App Title') // Replace this by your main window title\n")))))}d.isMDXComponent=!0}}]);