"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[36359],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,f=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},11715:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const i={id:"troubleshooting-0fe6aa07-9d31-4243-93f6-8720fbf9805d",slug:"/administer/troubleshooting/troubleshooting-activation-problem/oops-there-s-something-wrong-with-this-invitation"},a="Oops! There's something wrong with this invitation.",s={unversionedId:"troubleshooting-0fe6aa07-9d31-4243-93f6-8720fbf9805d",id:"troubleshooting-0fe6aa07-9d31-4243-93f6-8720fbf9805d",title:"Oops! There's something wrong with this invitation.",description:"Although you receive an invitation email to join Katalon Platform from your organization's admin, there is a error message pops up:",source:"@site/docs/troubleshooting-0fe6aa07-9d31-4243-93f6-8720fbf9805d.mdx",sourceDirName:".",slug:"/administer/troubleshooting/troubleshooting-activation-problem/oops-there-s-something-wrong-with-this-invitation",permalink:"/administer/troubleshooting/troubleshooting-activation-problem/oops-there-s-something-wrong-with-this-invitation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-0fe6aa07-9d31-4243-93f6-8720fbf9805d.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-0fe6aa07-9d31-4243-93f6-8720fbf9805d",slug:"/administer/troubleshooting/troubleshooting-activation-problem/oops-there-s-something-wrong-with-this-invitation"},sidebar:"tutorialSidebar",previous:{title:"Cannot receive verification link",permalink:"/administer/troubleshooting/troubleshooting-activation-problem/cannot-receive-verification-link"},next:{title:"Integrate Katalon Studio with other Katalon Platform tools",permalink:"/integrations/supported-integrations/integrate-katalon-studio-with-other-katalon-platform-tools"}},l={},u=[],p={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oops-theres-something-wrong-with-this-invitation"},"Oops! There's something wrong with this invitation."),(0,r.kt)("p",null,"Although you receive an invitation email to join Katalon Platform from your organization's admin, there is a error message pops up:",(0,r.kt)("img",{src:"/doc_images/Documents/Administer/Troubleshooting/Troubleshoot/troubleshoot-activation-problems/Troubleshooting/image/TO_-_oops_theres_somethign_wrong_.jpeg",alt:"TestOps error: there's something wrong with this invitation"})),(0,r.kt)("p",null,"There are some possible causes leading to this error:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The invitation link has expired. Please note that the invitation will be valid only in 24 hours. In this case, you can revoke the previous link and renew the link.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The invited users have not signed up for a Katalon account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the steps in this article to verify your email: ",(0,r.kt)("a",{parentName:"p",href:"/administer/troubleshooting/troubleshooting-activation-problem/this-account-has-been-blocked"},"This account has been blocked"),"."))))}h.isMDXComponent=!0}}]);