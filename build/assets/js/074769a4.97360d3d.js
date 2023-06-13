"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[43573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(b,a(a({ref:t},u),{},{components:r})):o.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={id:"troubleshooting-d1422968-b09a-4c99-b421-9d9600422af2",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command"},a="An unknown server-side error occurred while processing the command",s={unversionedId:"troubleshooting-d1422968-b09a-4c99-b421-9d9600422af2",id:"troubleshooting-d1422968-b09a-4c99-b421-9d9600422af2",title:"An unknown server-side error occurred while processing the command",description:"When you encounter the error java.util.concurrent.ExecutionException An unknown server-side error occurred while processing the command.",source:"@site/docs/troubleshooting-d1422968-b09a-4c99-b421-9d9600422af2.mdx",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting-d1422968-b09a-4c99-b421-9d9600422af2.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-d1422968-b09a-4c99-b421-9d9600422af2",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting automated mobile testing overview",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview"},next:{title:"Appium directory is not set",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"an-unknown-server-side-error-occurred-while-processing-the-command"},"An unknown server-side error occurred while processing the command"),(0,n.kt)("p",null,"When you encounter the error ",(0,n.kt)("code",null,"java.util.concurrent.ExecutionException: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command"),"."),(0,n.kt)("p",null,"Original error: ",(0,n.kt)("code",null,"Could not proxy command to the remote server"),"."),(0,n.kt)("p",null,"Original error: ",(0,n.kt)("code",null,"timeout of 240000ms exceeded"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio"},"Webdriveragent"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Kill the running appium proccesses with the following command: ",(0,n.kt)("code",null,"killall -9 node"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the AUT again."))))}p.isMDXComponent=!0}}]);