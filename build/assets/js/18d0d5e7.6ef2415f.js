"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[64927],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>m});var o=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,o,n=function(e,t){if(null==e)return{};var s,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(s),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return s?o.createElement(m,a(a({ref:t},d),{},{components:s})):o.createElement(m,a({ref:t},d))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,a=new Array(r);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<r;l++)a[l]=s[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,s)}h.displayName="MDXCreateElement"},1445:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=s(87462),n=(s(67294),s(3905));const r={id:"concept-3aed08f2-0d83-4604-b8b7-d4714ad2c68c",slug:"/execute/execute-tests-with-katalon-studio/headless-browsers-execution-in-katalon-studio"},a="Headless Browsers Execution in Katalon Studio",i={unversionedId:"concept-3aed08f2-0d83-4604-b8b7-d4714ad2c68c",id:"concept-3aed08f2-0d83-4604-b8b7-d4714ad2c68c",title:"Headless Browsers Execution in Katalon Studio",description:"\u200bIn essence, headless browser testing is testing the functionality of a Web page without the presence of a GUI. \u200b \u200b",source:"@site/docs/concept-3aed08f2-0d83-4604-b8b7-d4714ad2c68c.mdx",sourceDirName:".",slug:"/execute/execute-tests-with-katalon-studio/headless-browsers-execution-in-katalon-studio",permalink:"/execute/execute-tests-with-katalon-studio/headless-browsers-execution-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-3aed08f2-0d83-4604-b8b7-d4714ad2c68c.mdx",tags:[],version:"current",frontMatter:{id:"concept-3aed08f2-0d83-4604-b8b7-d4714ad2c68c",slug:"/execute/execute-tests-with-katalon-studio/headless-browsers-execution-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Execute dynamic test suites in Katalon Studio",permalink:"/execute/execute-tests-with-katalon-studio/execute-dynamic-test-suites-in-katalon-studio"},next:{title:"Skip test cases in Katalon Studio",permalink:"/execute/execute-tests-with-katalon-studio/skip-test-cases-in-katalon-studio"}},c={},l=[{value:"Configuring headless browsers",id:"configuring-headless-browsers",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"headless-browsers-execution-in-katalon-studio"},"Headless Browsers Execution in Katalon Studio"),(0,n.kt)("p",null,"\u200bIn essence, headless browser testing is testing the functionality of a Web page without the presence of a GUI. \u200b \u200b"),(0,n.kt)("p",null,"One of the major advantages of using a headless browser and performing headless testing is that you can run tests more quickly in a real browser environment. Headless browsers can save project teams a tremendous amount of time and smoothly integrate into the CI/CD process.\u200b \u200b"),(0,n.kt)("p",null,"Katalon Studio supports headless browser execution for both Chrome and Firefox. To learn more about headless browsers, see Chrome Developers document: ",(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/headless-chrome/"},"Getting Started with Headless Chrome.")),(0,n.kt)("p",null,"You can execute test cases, test suites, test suite collections, and execute tests using console mode execution with a headless browser. The step-by-step guide to executing tests using headless browsers is the same as executing with other environments, you only need to choose Chrome ","(","headless",")"," or Firefox ","(","headless",")"," from the test environment list."),(0,n.kt)("h2",{id:"configuring-headless-browsers"},"Configuring headless browsers"),(0,n.kt)("p",null,"This tutorial shows you how to add additional configurations when executing using headless browser."),(0,n.kt)("p",null,"By default, when executing automation tests using one of these headless browsers: Firefox or Chrome, you do not need to add any additional configurations."),(0,n.kt)("p",null,"In case you need to add more desired capabilities to those headless browsers:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Desired Capabilities")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"WebUI")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Chrome ","(","headless",")"),"/ ",(0,n.kt)("strong",{parentName:"p"},"Firefox ","(","headless",")"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add your desired capabilities."),(0,n.kt)("p",{parentName:"li"},"For example, to make your Chrome ","(","headless",")"," start with a smaller Window size: ",(0,n.kt)("code",null,"--window-size=300,400"),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/headless-browsers-execution/KS-HEADLESS-Set-DC.png",width:850,alt:"Set up desired capabilities for Chrome/Firefox (headless)"}),(0,n.kt)("p",{parentName:"li"},"You can learn more about desired capabilities in this document: ",(0,n.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio"},"Desired capabilities"),"."))))}p.isMDXComponent=!0}}]);