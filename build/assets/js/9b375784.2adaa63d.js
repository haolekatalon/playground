"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[79996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"concept-387dd02a-9c73-44e5-8591-0d9a5360acc5",slug:"/plugins-and-add-ons/katalium-server/katalium-server-execute-katalon-studio-s-scripts-on-remote-machines"},o="Katalium Server - Execute Katalon Studio's scripts on Remote Machines",s={unversionedId:"concept-387dd02a-9c73-44e5-8591-0d9a5360acc5",id:"concept-387dd02a-9c73-44e5-8591-0d9a5360acc5",title:"Katalium Server - Execute Katalon Studio's scripts on Remote Machines",description:"You can execute your scripts in Katalon Studio on remote machines by using Katalium Server.",source:"@site/docs/concept-387dd02a-9c73-44e5-8591-0d9a5360acc5.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalium-server/katalium-server-execute-katalon-studio-s-scripts-on-remote-machines",permalink:"/plugins-and-add-ons/katalium-server/katalium-server-execute-katalon-studio-s-scripts-on-remote-machines",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-387dd02a-9c73-44e5-8591-0d9a5360acc5.mdx",tags:[],version:"current",frontMatter:{id:"concept-387dd02a-9c73-44e5-8591-0d9a5360acc5",slug:"/plugins-and-add-ons/katalium-server/katalium-server-execute-katalon-studio-s-scripts-on-remote-machines"},sidebar:"tutorialSidebar",previous:{title:"Get Started with Katalium Server",permalink:"/plugins-and-add-ons/katalium-server/get-started-with-katalium-server"},next:{title:"WebDriver Auto-update for Katalium Server",permalink:"/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server"}},l={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"katalium-server---execute-katalon-studios-scripts-on-remote-machines"},"Katalium Server - Execute Katalon Studio's scripts on Remote Machines"),(0,n.kt)("p",null,"You can execute your scripts in Katalon Studio on remote machines by using ",(0,n.kt)("a",{parentName:"p",href:"/plugins-and-add-ons/katalium-server/katalium-server-overview"},"Katalium Server"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow ",(0,n.kt)("a",{parentName:"p",href:"/plugins-and-add-ons/katalium-server/get-started-with-katalium-server"},"this user guide")," to set up and activate Katalium Server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the desired capabilities for a remote machine. Open Katalon Studio. Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Desired Capabilities")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Remote")," ",">"," Enter required information and then click ",(0,n.kt)("strong",{parentName:"p"},"OK"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Remote Server URL")," should be in the format of ",(0,n.kt)("code",null,"http://","<","hub-ip-address",">",":","<","port",">","/wd/hub"),". E.g.: ",(0,n.kt)("a",{parentName:"p",href:"http://192.168.37.35:45339/wd/hub"},"http://192.168.37.35:45339/wd/hub"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Remote Server type"),": Selenium.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add properties"),". Currently, all ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#used-by-the-selenium-server-for-browser-selection"},"desired capabilities")," of the Selenium Server will be supported by Katalon Studio."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The value of properties is case sensitive."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the drop-down list of the ",(0,n.kt)("strong",{parentName:"p"},"Run")," button, select ",(0,n.kt)("strong",{parentName:"p"},"Remote"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you're executing Katalium Server in the Grid mode, you can view all session details. Refer to ",(0,n.kt)("a",{parentName:"p",href:"/plugins-and-add-ons/katalium-server/sessions-monitoring-for-katalium-server"},"Sessions monitoring")," for further instructions."))))}m.isMDXComponent=!0}}]);