"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,b=p["".concat(c,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"concept-ec659430-929c-43f8-bc48-553d4ebb42b9",slug:"/administer/troubleshooting/session-termination-causes"},a="Session Termination Causes",s={unversionedId:"concept-ec659430-929c-43f8-bc48-553d4ebb42b9",id:"concept-ec659430-929c-43f8-bc48-553d4ebb42b9",title:"Session Termination Causes",description:"You might encounter situations when your session has been terminated due to a specific reason related to the license mechanism. This section explains some common causes of your session termination.",source:"@site/docs/concept-ec659430-929c-43f8-bc48-553d4ebb42b9.mdx",sourceDirName:".",slug:"/administer/troubleshooting/session-termination-causes",permalink:"/administer/troubleshooting/session-termination-causes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-ec659430-929c-43f8-bc48-553d4ebb42b9.mdx",tags:[],version:"current",frontMatter:{id:"concept-ec659430-929c-43f8-bc48-553d4ebb42b9",slug:"/administer/troubleshooting/session-termination-causes"},sidebar:"tutorialSidebar",previous:{title:"Katalon API Key in Katalon TestOps",permalink:"/administer/settings/katalon-api-key-in-katalon-testops"},next:{title:"Troubleshoot activation problems overview",permalink:"/administer/troubleshooting/troubleshooting-activation-problem/troubleshoot-activation-problems-overview"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"session-termination-causes"},"Session Termination Causes"),(0,o.kt)("p",null,"You might encounter situations when your session has been terminated due to a specific reason related to the license mechanism. This section explains some common causes of your session termination."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inactive session; the license has been transferred to "),"<","another","_","user",">",(0,o.kt)("strong",{parentName:"p"},".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When your session is inactive, another licensed user from your Organization can occupy your license.")),(0,o.kt)("p",null,"*",(0,o.kt)("strong",{parentName:"p"},"*Your account has logged in on another machine.**")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Katalon account can be active on one machine at a time.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This machine has been removed from the registered list.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This happens when your Organization Admins or Owner remove your machine from the registered list on Katalon TestOps. This removal ends your session on the Katalon Studio app.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This email has been removed from the registered list.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This happens when your Organization Admins or Owner remove your email from the registered list on Katalon TestOps. This removal ends your session on the Katalon Studio app.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This session has been terminated.")," or ",(0,o.kt)("strong",{parentName:"p"},"This session has been terminated: Invalid credentials.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This happens when the connection to the licensing server fails. This failure is because your machine goes to sleep or the network is off.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Related information"),"  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/administer/troubleshooting/troubleshooting-activation-problem/troubleshoot-activation-problems-overview"},"Troubleshoot activation problems overview")))}m.isMDXComponent=!0}}]);