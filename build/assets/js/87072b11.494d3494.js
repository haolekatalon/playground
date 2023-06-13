"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[30984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"concept-6d0d365f-c6fc-40b7-a967-8cd550fe1b01",slug:"/execute/ci-cd-integrations/teamcity-plugin"},o="TeamCity Plugin",l={unversionedId:"concept-6d0d365f-c6fc-40b7-a967-8cd550fe1b01",id:"concept-6d0d365f-c6fc-40b7-a967-8cd550fe1b01",title:"TeamCity Plugin",description:"This tutorial shows you the step by step guide on how to install and run Katalon for TeamCity for Web UI Testing.",source:"@site/docs/concept-6d0d365f-c6fc-40b7-a967-8cd550fe1b01.mdx",sourceDirName:".",slug:"/execute/ci-cd-integrations/teamcity-plugin",permalink:"/execute/ci-cd-integrations/teamcity-plugin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-6d0d365f-c6fc-40b7-a967-8cd550fe1b01.mdx",tags:[],version:"current",frontMatter:{id:"concept-6d0d365f-c6fc-40b7-a967-8cd550fe1b01",slug:"/execute/ci-cd-integrations/teamcity-plugin"},sidebar:"tutorialSidebar",previous:{title:"Katalon Studio GitHub Action",permalink:"/execute/ci-cd-integrations/katalon-studio-github-action"},next:{title:"Schedule Test Runs in TestOps",permalink:"/execute/schedule-test-execution/schedule-test-runs-in-testops"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Enable the plugin",id:"enable-the-plugin",level:2},{value:"Configuration steps",id:"configuration-steps",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teamcity-plugin"},"TeamCity Plugin"),(0,r.kt)("p",null,"This tutorial shows you the step by step guide on how to install and run Katalon for TeamCity for Web UI Testing."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Katalon TestOps CI is an easier way to execute Katalon Studio tests remotely or schedule remote Katalon Studio execution. ",(0,r.kt)("a",{parentName:"li",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops"},"Learn more")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"See how to install and configure the TeamCity server ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/teamcity/installing-and-configuring-the-teamcity-server.html"},"here"),". Install ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/12653-katalon"},"Katalon TestOps for TeamCity"),". See how to install TeamCity plugins ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/teamcity/installing-additional-plugins.html"},"here"),"."),(0,r.kt)("h2",{id:"enable-the-plugin"},"Enable the plugin"),(0,r.kt)("p",null,"Since TeamCity 2018.2, to enable plugin after installation, click the plugin context menu and select Load. The plugin will be enabled without server restart."),(0,r.kt)("h2",{id:"configuration-steps"},"Configuration steps"),(0,r.kt)("p",null,"One you have installed the plugin, you will need to configure Execute Katalon Studio Test task to complete the integration."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create and configure a new project in TeamCity. Read more on TeamCity\u2019s instructions to create a new project ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/teamcity/configure-and-run-your-first-build.html"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In TeamCity, select Katalon as Build runner type. ",(0,r.kt)("img",{src:"/doc_images/Documents/Execute/CICD_Integrations/teamcity-plugin/1-configuration.png"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Regarding the Command Arguments, you can enter the arguments directly in the text area or generate them from your in use Katalon Studio."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You need to remove any irrelevant argument such as ",(0,r.kt)("code",null,"-runmode"),". See Command Arguments for more details."))),(0,r.kt)("img",{src:"/doc_images/Documents/Execute/CICD_Integrations/teamcity-plugin/2-configuration.png"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"X11 DISPLAY and Xvfb-run configuration: Learn more ",(0,r.kt)("a",{parentName:"p",href:"http://manpages.ubuntu.com/manpages/xenial/man1/xvfb-run.1.html"},"here"),". If you are not sure, only change the resolution 1024x768x24 and leave other options as-is.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now everything is set up and ready to be built."))))}m.isMDXComponent=!0}}]);