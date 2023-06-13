"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[61265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:s,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const r={author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-bd707c40-3d35-484d-a7f7-8b8b510974fd",slug:"/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview"},o="Statements in Katalon Studio overview",c={unversionedId:"concept-bd707c40-3d35-484d-a7f7-8b8b510974fd",id:"concept-bd707c40-3d35-484d-a7f7-8b8b510974fd",title:"Statements in Katalon Studio overview",description:"In Katalon Studio, you can add statements as test steps. There are seven types of statements:",source:"@site/docs/concept-bd707c40-3d35-484d-a7f7-8b8b510974fd.mdx",sourceDirName:".",slug:"/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview",permalink:"/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-bd707c40-3d35-484d-a7f7-8b8b510974fd.mdx",tags:[],version:"current",frontMatter:{author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-bd707c40-3d35-484d-a7f7-8b8b510974fd",slug:"/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview"},sidebar:"tutorialSidebar",previous:{title:"Value types in Katalon Studio",permalink:"/create-tests/create-test-cases/value-types-in-katalon-studio"},next:{title:"Decision-making Statements",permalink:"/create-tests/create-test-cases/statements/decision-making-statements"}},i={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"statements-in-katalon-studio-overview"},"Statements in Katalon Studio overview"),(0,s.kt)("p",null,"In Katalon Studio, you can add statements as test steps. There are seven types of statements:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Decision-making Statements"),(0,s.kt)("li",{parentName:"ul"},"Looping Statements"),(0,s.kt)("li",{parentName:"ul"},"Branching Statements"),(0,s.kt)("li",{parentName:"ul"},"Exception Handling Statements"),(0,s.kt)("li",{parentName:"ul"},"Binary Statement"),(0,s.kt)("li",{parentName:"ul"},"Assert Statement"),(0,s.kt)("li",{parentName:"ul"},"Method Call Statement")),(0,s.kt)("p",null,"This article guides you through adding statements to your test case and define a method in both manual and script views."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"In this section"),"  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/decision-making-statements"},"Decision-making Statements")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/looping-statements"},"Looping Statements")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/branching-statements"},"Branching Statements")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/binary-statements"},"Binary Statements")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/method-call-statements"},"Method Call Statements")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/assert-statements"},"Assert Statements")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/statements/define-method"},"Define Method")))}m.isMDXComponent=!0}}]);