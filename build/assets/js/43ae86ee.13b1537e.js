"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[17112],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(a),f=o,k=c["".concat(l,".").concat(f)]||c[f]||d[f]||r;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3313:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-345e6941-70df-4f6c-9e4b-935a2c1e87df",slug:"/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform"},i="Set up overview in Katalon Platform",s={unversionedId:"concept-345e6941-70df-4f6c-9e4b-935a2c1e87df",id:"concept-345e6941-70df-4f6c-9e4b-935a2c1e87df",title:"Set up overview in Katalon Platform",description:"This article guide you through setting up your workspace to start working with Katalon Platform.",source:"@site/docs/concept-345e6941-70df-4f6c-9e4b-935a2c1e87df.mdx",sourceDirName:".",slug:"/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform",permalink:"/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-345e6941-70df-4f6c-9e4b-935a2c1e87df.mdx",tags:[],version:"current",frontMatter:{author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-345e6941-70df-4f6c-9e4b-935a2c1e87df",slug:"/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform"},sidebar:"tutorialSidebar",previous:{title:"Import Selenium IDE version 3 projects to Katalon Studio",permalink:"/get-started/migration-from-other-tools/import-selenium-ide-version-3-projects-to-katalon-studio"},next:{title:"Integrate Katalon TestOps and Katalon TestCloud with Katalon Studio",permalink:"/get-started/set-up-your-workspace/integrate-katalon-testops-and-katalon-testcloud-with-katalon-studio"}},l={},u=[{value:"Integrate Katalon TestOps with Katalon Studio",id:"integrate-katalon-testops-with-katalon-studio",level:2},{value:"GUI and preferences in Katalon Studio",id:"gui-and-preferences-in-katalon-studio",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-overview-in-katalon-platform"},"Set up overview in Katalon Platform"),(0,o.kt)("p",null,"This article guide you through setting up your workspace to start working with Katalon Platform."),(0,o.kt)("h2",{id:"integrate-katalon-testops-with-katalon-studio"},"Integrate Katalon TestOps with Katalon Studio"),(0,o.kt)("p",null,"In Katalon Platform, you journey starts with Katalon TestOps. This document shows you how to get started with Katalon TestOps: ",(0,o.kt)("a",{parentName:"p",href:"/administer/administration-tasks/create-an-organization-and-project"},"Create Account, Organization, and Projects"),"."),(0,o.kt)("p",null,"If you are using Katalon Studio, refer to this document to see how to integrate Katalon Studio with Katalon TestOps for test planning, management, reporting and analytics: ",(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/integrate-katalon-testops-and-katalon-testcloud-with-katalon-studio"},"Integrate Katalon TestOps with Katalon Studio"),"."),(0,o.kt)("p",null,"If you are using Katalon Studio - Platform Edition, Katalon TestOps is integrated by default. You can open your project and start testing."),(0,o.kt)("h2",{id:"gui-and-preferences-in-katalon-studio"},"GUI and preferences in Katalon Studio"),(0,o.kt)("p",null,"After successfully downloading Katalon Studio and activating your license, it's time to get started with Katalon Studio. Learn how to activate your licenses at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.katalon.com/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/activate-katalon-license"},"Activate Katalon License"),"."),(0,o.kt)("p",null,"This section guides you through the onboarding tour in Katalon Studio. Below are some essential tools and configurations you need to know before jumping into your first test project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/toolbars-and-views-in-katalon-studio#"},"Toolbar and view in Katalon Studio"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/keyboard-shortcuts-in-katalon-studio"},"Keyboard shortcuts in Katalon Studio"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/configure-key-bindings-in-katalon-studio#"},"Configure key bindings in Katalon Studio"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/katalon-studio-preferences/preferences-in-katalon-studio"},"Katalon Preferences"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/change-katalon-studio-theme"},"How to change theme in Katalon Studio"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/katalon-help-in-katalon-studio"},"Katalon Help"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/update-katalon-studio"},"Update Katalon Studio")))))}d.isMDXComponent=!0}}]);