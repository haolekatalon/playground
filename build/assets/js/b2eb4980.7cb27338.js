"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[80627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"concept-942d8079-06e8-439d-b94e-5745af2d182f",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text"},i="[Windows] Set Text",s={unversionedId:"concept-942d8079-06e8-439d-b94e-5745af2d182f",id:"concept-942d8079-06e8-439d-b94e-5745af2d182f",title:"\\[Windows\\] Set Text",description:"Requirements",source:"@site/docs/concept-942d8079-06e8-439d-b94e-5745af2d182f.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-942d8079-06e8-439d-b94e-5745af2d182f.mdx",tags:[],version:"current",frontMatter:{id:"concept-942d8079-06e8-439d-b94e-5745af2d182f",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text"},sidebar:"tutorialSidebar",previous:{title:"\\[Windows\\] Send Keys",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-send-keys"},next:{title:"\\[Windows\\] Start Application with Title",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application-with-title"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"setText",id:"settext",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows-set-text"},"[","Windows","]"," Set Text"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Katalon Studio version 7.0.0 onwards.")),(0,a.kt)("h2",{id:"settext"},"setText"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description"),": Perform a text setting action on the Web element found by using the locator value of the given Windows object. This action clears the current text and appends the given text to the element.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Keyword name"),": setText")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Keyword syntax"),": Windows.setText","(","windowsObject,text",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Name: windowsObject."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Description: An object describing the locator and locator strategy to find a Windows element.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Parameter Type: WindowsTestObject.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mandatory: Required.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Name: text"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Description: The text content to set on the element.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Parameter Type: String.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mandatory: Required.")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example"),":"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\"Set 'Welcome to Katalon Studio' on the edit panel\"\nWindows.setText(findWindowsObject(\"Object Repository/Edit\"), 'Welcome to Katalon Studio')\n\n")))}u.isMDXComponent=!0}}]);