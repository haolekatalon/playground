"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[29991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={id:"concept-07cf6e3e-7fae-440a-94a8-22b722291d45",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder"},i="Export test projects from Katalon Recorder",s={unversionedId:"concept-07cf6e3e-7fae-440a-94a8-22b722291d45",id:"concept-07cf6e3e-7fae-440a-94a8-22b722291d45",title:"Export test projects from Katalon Recorder",description:"From version 5.6.0 onwards, Katalon Recorder \\(KR\\) you can export multiple tests into a single file. This file is compatible with many other frameworks, such as Katalon Studio, Java Maven or Python. From version 5.9.0 onwards, you can export your project to Selenium 4.",source:"@site/docs/concept-07cf6e3e-7fae-440a-94a8-22b722291d45.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-07cf6e3e-7fae-440a-94a8-22b722291d45.mdx",tags:[],version:"current",frontMatter:{id:"concept-07cf6e3e-7fae-440a-94a8-22b722291d45",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder"},sidebar:"tutorialSidebar",previous:{title:"Export Katalon Recorder scripts to other frameworks",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-katalon-recorder-scripts-to-other-frameworks"},next:{title:"Writing Custom Script Formatter in Katalon Recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/writing-custom-script-formatter-in-katalon-recorder"}},l={},p=[{value:"Export to Katalon Studio and other frameworks",id:"export-to-katalon-studio-and-other-frameworks",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export-test-projects-from-katalon-recorder"},"Export test projects from Katalon Recorder"),(0,a.kt)("p",null,"From version 5.6.0 onwards, Katalon Recorder ","(","KR",")"," you can export multiple tests into a single file. This file is compatible with many other frameworks, such as Katalon Studio, Java Maven or Python. From version 5.9.0 onwards, you can export your project to Selenium 4."),(0,a.kt)("p",null,"The export feature is especially useful to outgrow the capabilities of KR. As your work requirements and projects complexity increase, you can move your test artifacts and projects to other frameworks. This allows you to benefit from further advanced testing without losing your work."),(0,a.kt)("p",null,"The table below shows the full list of exporting features that KR offers, compared with Selenium IDE:"),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/5.6.0-release/KR%20vs.%20Selenium%20exporting%20features.png",alt:"KR vs Selenium in exporting"}),(0,a.kt)("h2",{id:"export-to-katalon-studio-and-other-frameworks"},"Export to Katalon Studio and other frameworks"),(0,a.kt)("p",null,"Requirements ","(","for Java/Python frameworks",")",":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver installed."),(0,a.kt)("li",{parentName:"ul"},"Java/Python IDE installed ","(","preferably IntelliJ",")",".")),(0,a.kt)("p",null,"Follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Katalon Recorder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left sidebar, go to ",(0,a.kt)("strong",{parentName:"p"},"Export")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Export to other frameworks"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a framework ","(","e.g., Katalon Studio or Selenium 3, Java ","(","WebDriver + TestNG",")",")",".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the tests you want to export."),(0,a.kt)("img",{src:"/doc_images/Documents/Plugins_And_Add-ons/Katalon_Recorder_Extension/Get-your-job-done/Export-scenarios/export-test-script/KR-590-selenium-4.jpeg"}),(0,a.kt)("p",{parentName:"li"},"Katalon Recorder also notifies you here if there are incompatible commands.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Export"),"."))),(0,a.kt)("p",null,"You can now import the file/project with your framework of choice."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Java JUnit, Java TestNG and Python, the data is exported as a full project. You can open the project in the Java/Python IDE.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For other frameworks, the data is exported as a .zip file.")))))}d.isMDXComponent=!0}}]);