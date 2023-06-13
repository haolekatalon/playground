"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[71493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,m=c["".concat(d,".").concat(u)]||c[u]||w[u]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>w,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={id:"concept-a14ec8bd-d4d3-4106-8553-856a45b1aa61",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window"},r="[Windows] Switch to Window",s={unversionedId:"concept-a14ec8bd-d4d3-4106-8553-856a45b1aa61",id:"concept-a14ec8bd-d4d3-4106-8553-856a45b1aa61",title:"\\[Windows\\] Switch to Window",description:"-   Starting from version 7.2.0, this keyword is available for Windows desktop application testing on Katalon Studio.",source:"@site/docs/concept-a14ec8bd-d4d3-4106-8553-856a45b1aa61.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-a14ec8bd-d4d3-4106-8553-856a45b1aa61.mdx",tags:[],version:"current",frontMatter:{id:"concept-a14ec8bd-d4d3-4106-8553-856a45b1aa61",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window"},sidebar:"tutorialSidebar",previous:{title:"\\[Windows\\] Switch To Application",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application"},next:{title:"\\[Windows\\] Switch to Window Title",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window-title"}},d={},l=[{value:"switchToWindow",id:"switchtowindow",level:2}],p={toc:l},c="wrapper";function w(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows-switch-to-window"},"[","Windows","]"," Switch to Window"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Starting from ",(0,a.kt)("strong",{parentName:"li"},"version 7.2.0"),", this keyword is available for Windows desktop application testing on Katalon Studio."))),(0,a.kt)("h2",{id:"switchtowindow"},"switchToWindow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description"),": Find and attach the opening application window that describes by the given windows object to the working WindowsDriver session on the current desktop."),(0,a.kt)("p",{parentName:"li"},"This keyword should be used when:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The main application window has been closed and replaced by another window."),(0,a.kt)("li",{parentName:"ul"},"The application has multiple working windows. We can switch among these windows."),(0,a.kt)("li",{parentName:"ul"},"We already have an opened application and need to switch to without reopening requires"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Keyword name"),": switchToWindow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Keyword syntax"),": Windows.switchToWindow","(","windowsObject, flowControl",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: windowsObject"),(0,a.kt)("li",{parentName:"ul"},"Description: An object that describes locator and locator strategy to find the opening application."),(0,a.kt)("li",{parentName:"ul"},"Parameter Type: WindowsTestObject."),(0,a.kt)("li",{parentName:"ul"},"Mandatory: Required."),(0,a.kt)("li",{parentName:"ul"},"Name: flowControl"),(0,a.kt)("li",{parentName:"ul"},"Description: Used to control the step if the step failed.","\\"," STOP",(0,a.kt)("em",{parentName:"li"},"ON"),"FAILURE: throws a StepFailedException if the step failed ","(","default",")",".","\\"," CONTINUE",(0,a.kt)("em",{parentName:"li"},"ON"),"FAILURE: continue the test if the test failed but the test result is still failed.","\\"," OPTIONAL: continue the test and ignore the test result."),(0,a.kt)("li",{parentName:"ul"},"Parameter Type: FailureHandling"),(0,a.kt)("li",{parentName:"ul"},"Mandatory: optional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns"),": The WindowsDriver after Katalon Studio switches successfully.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Throw"),": ",(0,a.kt)("strong",{parentName:"p"},"StepFailedException")," if Katalon Studio could not find any window that matches with the given windows object.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Windows.switchToWindow(findWindowsObject('Object Repository/Window'))\n\n")))))}w.isMDXComponent=!0}}]);