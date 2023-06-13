"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[67152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"concept-c7034637-2a1b-443f-bdf9-7f5f0fd9a6b7",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder"},i="Create your first automation script in Katalon Recorder",s={unversionedId:"concept-c7034637-2a1b-443f-bdf9-7f5f0fd9a6b7",id:"concept-c7034637-2a1b-443f-bdf9-7f5f0fd9a6b7",title:"Create your first automation script in Katalon Recorder",description:"Broadly speaking, there are usually two steps to create an automate scenario in Katalon Recorder: 1. Add commands to interact with websites 2. Add verify or assert commands to make sure your test case follows the correct flow.",source:"@site/docs/concept-c7034637-2a1b-443f-bdf9-7f5f0fd9a6b7.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-c7034637-2a1b-443f-bdf9-7f5f0fd9a6b7.mdx",tags:[],version:"current",frontMatter:{id:"concept-c7034637-2a1b-443f-bdf9-7f5f0fd9a6b7",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder"},sidebar:"tutorialSidebar",previous:{title:"Selenese \\(Selenium IDE\\) Commands Reference",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference"},next:{title:"Handle conditional cases in your tests with Katalon Recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests-with-katalon-recorder"}},c={},l=[{value:"Add commands to interact with websites",id:"add-commands-to-interact-with-websites",level:2},{value:"Add verify or assert commands",id:"add-verify-or-assert-commands",level:2},{value:"After the recording of a test case",id:"after-the-recording-of-a-test-case",level:3},{value:"During the recording of a test case",id:"during-the-recording-of-a-test-case",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-your-first-automation-script-in-katalon-recorder"},"Create your first automation script in Katalon Recorder"),(0,n.kt)("p",null,"Broadly speaking, there are usually two steps to create an automate scenario in Katalon Recorder: 1. Add commands to interact with websites 2. Add verify or assert commands to make sure your test case follows the correct flow."),(0,n.kt)("h2",{id:"add-commands-to-interact-with-websites"},"Add commands to interact with websites"),(0,n.kt)("p",null,"To get started, use the Recorder to automatically create a test case:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Record")," button.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch to the currently active tab.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Start interacting with your website.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch to Katalon Recorder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Stop")," button."))),(0,n.kt)("p",null,"You should see your interactions are recorded as a test case."),(0,n.kt)("h2",{id:"add-verify-or-assert-commands"},"Add verify or assert commands"),(0,n.kt)("p",null,"There are two ways to add verify or assert commands."),(0,n.kt)("h3",{id:"after-the-recording-of-a-test-case"},"After the recording of a test case"),(0,n.kt)("p",null,"If you just have just recorded a test case:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add a new test step through the toolbar item.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type ",(0,n.kt)("code",null,"verify")," or ",(0,n.kt)("code",null,"assert")," in the Command field of the new test step.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose from the list of available suggested commands ","(","for example ",(0,n.kt)("code",null,"verifyElementPresent"),")",".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on the button ",(0,n.kt)("strong",{parentName:"p"},"Select a target element for the current command")," located next to the Target field of the new test step.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch to the currently active tab.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select an element on the page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch back to Katalon Recorder."))),(0,n.kt)("p",null,"You should see the newly created assert or verify command for the target element."),(0,n.kt)("h3",{id:"during-the-recording-of-a-test-case"},"During the recording of a test case"),(0,n.kt)("p",null,"If you are recording a test case:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Right-click on the target element.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose a command from the context menu item ",(0,n.kt)("em",{parentName:"p"},"Katalon Recorder ","(","Selenium tests generator",")"),"."))))}p.isMDXComponent=!0}}]);