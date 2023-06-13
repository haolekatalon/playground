"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[17658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-3ad093e8-da76-4e5f-b32d-f537a07fed29",slug:"/integrations/unsupported-integrations/otp-use-cases"},i="OTP use cases",l={unversionedId:"concept-3ad093e8-da76-4e5f-b32d-f537a07fed29",id:"concept-3ad093e8-da76-4e5f-b32d-f537a07fed29",title:"OTP use cases",description:"-   Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform.",source:"@site/docs/concept-3ad093e8-da76-4e5f-b32d-f537a07fed29.mdx",sourceDirName:".",slug:"/integrations/unsupported-integrations/otp-use-cases",permalink:"/integrations/unsupported-integrations/otp-use-cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-3ad093e8-da76-4e5f-b32d-f537a07fed29.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-3ad093e8-da76-4e5f-b32d-f537a07fed29",slug:"/integrations/unsupported-integrations/otp-use-cases"},sidebar:"tutorialSidebar",previous:{title:"Oracle Cloud application testing",permalink:"/integrations/unsupported-integrations/oracle-cloud-application-testing"},next:{title:"Katalon Studio - pCloudy integration",permalink:"/integrations/unsupported-integrations/katalon-studio-pcloudy-integration"}},p={},s=[{value:"Use cases",id:"use-cases",level:2},{value:"Extract OTP for test automation script",id:"extract-otp-for-test-automation-script",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"otp-use-cases"},"OTP use cases"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform."))),(0,o.kt)("p",null,"This project demonstrates how Katalon Studio helps you extract OTP ","(","one-time password",")"," from different platforms for test automation script. It contains some test cases for Mobile OTP extraction, some test cases for Outlook and Gmail OTP extraction."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extract OTP from Outlook.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extract OTP from Gmail.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extract OTP from mobile device."))),(0,o.kt)("h2",{id:"extract-otp-for-test-automation-script"},"Extract OTP for test automation script"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Katalon Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configured Outlook and Gmail for OTP extraction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connection with your mobile device for OTP extraction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/katalon-otp-usecase-sample.git"},"Sample Git repository for this project"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can refer to the video demonstration for:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://academy.katalon.com/katalon-demo-and-integration/?video=36507"},"Gmail OTP extraction using Katalon"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://academy.katalon.com/katalon-demo-and-integration/?video=36506"},"Mobile OTP extraction using Katalon"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://academy.katalon.com/katalon-demo-and-integration/?video=36505"},"Outlook OTP extraction using Katalon"),"."))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For Gmail/Outlook:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refer to the attached test cases in our sample Git repository above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the username and password for Gmail and outlook in the test cases.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the email subject and body content from where you want to extract the OTP.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the test and verify the OTP in console.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For mobile device:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect with your mobile device.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the test on Android device.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the result in the console."))))))}m.isMDXComponent=!0}}]);