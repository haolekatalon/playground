"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[17481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),g=n,p=f["".concat(l,".").concat(g)]||f[g]||b[g]||a;return r?o.createElement(p,i(i({ref:t},u),{},{components:r})):o.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},25278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:"troubleshooting-528e0777-6a9b-4a8a-9fe7-b71880d3b4a0",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target"},i="Xcode fails to create a provisioning profile for the WebDriverAgentRunner target",c={unversionedId:"troubleshooting-528e0777-6a9b-4a8a-9fe7-b71880d3b4a0",id:"troubleshooting-528e0777-6a9b-4a8a-9fe7-b71880d3b4a0",title:"Xcode fails to create a provisioning profile for the WebDriverAgentRunner target",description:"1.  This necessitates manually changing the bundle id for the target by going into the Build Settings tab, and changing the Product Bundle Identifier from com.facebook.WebDriverAgentRunner to something that Xcode will accept.",source:"@site/docs/troubleshooting-528e0777-6a9b-4a8a-9fe7-b71880d3b4a0.mdx",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-528e0777-6a9b-4a8a-9fe7-b71880d3b4a0.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-528e0777-6a9b-4a8a-9fe7-b71880d3b4a0",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target"},sidebar:"tutorialSidebar",previous:{title:"Unable to start application",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application"},next:{title:"No Chromedriver found that can automate Chrome '&lt;chrome\\_version&gt;'",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/no-chromedriver-found-that-can-automate-chrome-chrome-version"}},l={},s=[],u={toc:s},f="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target"},"Xcode fails to create a provisioning profile for the WebDriverAgentRunner target"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This necessitates manually changing the bundle id for the target by going into the ",(0,n.kt)("strong",{parentName:"li"},"Build Settings")," tab, and changing the ",(0,n.kt)("strong",{parentName:"li"},"Product Bundle Identifier")," from ",(0,n.kt)("code",null,"com.facebook.WebDriverAgentRunner")," to something that Xcode will accept.")))}b.isMDXComponent=!0}}]);