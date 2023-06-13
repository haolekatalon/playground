"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[46622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),y=a,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"concept-01a0a9df-3888-40b6-a80c-e2dd3a9f5d59",slug:"/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio"},s="Request History in Katalon Studio",i={unversionedId:"concept-01a0a9df-3888-40b6-a80c-e2dd3a9f5d59",id:"concept-01a0a9df-3888-40b6-a80c-e2dd3a9f5d59",title:"Request History in Katalon Studio",description:"-   Request History panel is displayed when you create an API-only project.",source:"@site/docs/concept-01a0a9df-3888-40b6-a80c-e2dd3a9f5d59.mdx",sourceDirName:".",slug:"/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio",permalink:"/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-01a0a9df-3888-40b6-a80c-e2dd3a9f5d59.mdx",tags:[],version:"current",frontMatter:{id:"concept-01a0a9df-3888-40b6-a80c-e2dd3a9f5d59",slug:"/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Verification Snippets in Katalon Studio",permalink:"/create-tests/test-objects/api-test-objects/verification-snippets-in-katalon-studio"},next:{title:"Draft Request in Katalon Studio",permalink:"/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-history-in-katalon-studio"},"Request History in Katalon Studio"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Request History")," panel is displayed when you create an API-only project."))),(0,a.kt)("p",null,"All web service requests sending in Katalon Studio are stored in the Request History panel in which you can retrieve anytime. The history list lets you try web service request with the variation of data quickly without creating new requests. You can load a previous request by clicking on the request name."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/request-history/request_history.png"}),(0,a.kt)("p",null,"Once you've selected a request, there are two things you can do with it:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Action"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Save"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Save a request as a Web Service object.")," ",(0,a.kt)("p",null,"Katalon Studio only saves the latest changes when you ",(0,a.kt)("strong",null,"'Send Request'"),", any changes made ",(0,a.kt)("strong",null,"without")," ",(0,a.kt)("em",null,"'Send Request'")," will not be saved."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Remove"),(0,a.kt)("td",null,"Remove the current request from the history list.")))))}p.isMDXComponent=!0}}]);