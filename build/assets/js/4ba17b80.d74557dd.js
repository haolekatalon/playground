"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[19220],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),p=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return o.createElement(c.Provider,{value:e},t.children)},d="mdxType",w={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||w[u]||i;return n?o.createElement(f,a(a({ref:e},l),{},{components:n})):o.createElement(f,a({ref:e},l))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67071:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>w,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={id:"concept-43eb0b32-63d8-4af4-afe8-8865a1aa3a92",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application"},a="[Windows] Switch To Application",s={unversionedId:"concept-43eb0b32-63d8-4af4-afe8-8865a1aa3a92",id:"concept-43eb0b32-63d8-4af4-afe8-8865a1aa3a92",title:"\\[Windows\\] Switch To Application",description:"-   Starting from version 7.0.0, Windows desktop application testing is available on Katalon Studio.",source:"@site/docs/concept-43eb0b32-63d8-4af4-afe8-8865a1aa3a92.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-43eb0b32-63d8-4af4-afe8-8865a1aa3a92.mdx",tags:[],version:"current",frontMatter:{id:"concept-43eb0b32-63d8-4af4-afe8-8865a1aa3a92",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application"},sidebar:"tutorialSidebar",previous:{title:"\\[Windows\\] Switch To Desktop",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-desktop"},next:{title:"\\[Windows\\] Switch to Window",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window"}},c={},p=[{value:"switchToApplication",id:"switchtoapplication",level:2}],l={toc:p},d="wrapper";function w(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"windows-switch-to-application"},"[","Windows","]"," Switch To Application"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Starting from ",(0,r.kt)("strong",{parentName:"li"},"version 7.0.0"),", Windows desktop application testing is available on Katalon Studio."))),(0,r.kt)("h2",{id:"switchtoapplication"},"switchToApplication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": Switch from the current running driver to the application Windows Driver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyword name"),": switchToApplication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyword syntax"),": Windows.switchToApplication","(",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"Start the note pad application"\nWindows.startApplication(\'C:\\\\Windows\\\\System32\\\\notepad.exe\')\n\n"Switch to control the desktop"\nWindows.switchToDesktop()\n\n// Do some stuffs with the desktop\n\n"Switch back to control the note pad application"\nWindows.switchToApplication()\n\n')))}w.isMDXComponent=!0}}]);