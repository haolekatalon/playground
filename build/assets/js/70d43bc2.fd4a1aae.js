"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[63061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-cb17d3a6-168f-4f36-ab66-cd0db7eec41a",slug:"/integrations/unsupported-integrations/microsoft-dynamics-365"},i="Microsoft Dynamics 365",s={unversionedId:"concept-cb17d3a6-168f-4f36-ab66-cd0db7eec41a",id:"concept-cb17d3a6-168f-4f36-ab66-cd0db7eec41a",title:"Microsoft Dynamics 365",description:"-   Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform.",source:"@site/docs/concept-cb17d3a6-168f-4f36-ab66-cd0db7eec41a.mdx",sourceDirName:".",slug:"/integrations/unsupported-integrations/microsoft-dynamics-365",permalink:"/integrations/unsupported-integrations/microsoft-dynamics-365",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-cb17d3a6-168f-4f36-ab66-cd0db7eec41a.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-cb17d3a6-168f-4f36-ab66-cd0db7eec41a",slug:"/integrations/unsupported-integrations/microsoft-dynamics-365"},sidebar:"tutorialSidebar",previous:{title:"Cypress integration",permalink:"/integrations/unsupported-integrations/cypress-integration"},next:{title:"Oracle Cloud application testing",permalink:"/integrations/unsupported-integrations/oracle-cloud-application-testing"}},c={},l=[{value:"Use case",id:"use-case",level:2},{value:"Automate Microsoft Dynamics 365 applications",id:"automate-microsoft-dynamics-365-applications",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microsoft-dynamics-365"},"Microsoft Dynamics 365"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform."))),(0,o.kt)("p",null,"This project demonstrates how Katalon Studio helps users automate Microsoft Dynamic 365 applications. It contains some test cases for PowerBI. Because of the very dynamic nature of the PowerBI DOM structure, you might need to make some necessary changes before recording the test cases."),(0,o.kt)("h2",{id:"use-case"},"Use case"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create and Delete a lead in Microsoft 365 account.")),(0,o.kt)("h2",{id:"automate-microsoft-dynamics-365-applications"},"Automate Microsoft Dynamics 365 applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Katalon Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should have an active Microsoft 365 account."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/katalon-microsoft365-sample.git"},"Sample Git repository for this project."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://academy.katalon.com/katalon-demo-and-integration/?video=36516"},"video demonstration")," of the steps below."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customize Setting before recording a test case:"),(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Design")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Web UI")," and ",(0,o.kt)("a",{parentName:"p",href:"/maintain/self-healing-tests-in-katalon-studio"},"change the priority of Xpath Locators"),".",(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Microsoft_Dynamics_365/image/KS_change_priority_of_XPath_Locators.png",alt:"change Xpath Locators priority in Katalon Studio project settings"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Record test script via Katalon Recorder and save test objects and test cases. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio"},"Record web utility in Katalon Studio"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the application URL, username, and password inside the Default profile. ",(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Microsoft_Dynamics_365/image/KS-update_URL_username_password_in_Default_profile.png",alt:"Update URL, username, password in the Default profile"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the test execution. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"/execute/execute-tests-with-katalon-studio/execute-tests-with-katalon-studio-overview"},"Execute tests with Katalon Studio overview"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the test execution result. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops"},"View test results and execution logs in Katalon TestOps"),"."))),(0,o.kt)("p",null,'If the test execution fails because of "Element not interactable" exception, you can change the keyword ',(0,o.kt)("code",null,"Click")," to ",(0,o.kt)("code",null,"Enhanced Click"),".",(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Microsoft_Dynamics_365/image/KS_keyword_enhanced_click.png",alt:"Katalon Studio keyword enhanced click"})))}d.isMDXComponent=!0}}]);