"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[83305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-1464e0b6-825a-4235-ac17-eba05c367bae",slug:"/analyze/analytics/defects-report"},s="Defects Report",i={unversionedId:"concept-1464e0b6-825a-4235-ac17-eba05c367bae",id:"concept-1464e0b6-825a-4235-ac17-eba05c367bae",title:"Defects Report",description:"A defect is an error in the software that prevents the intended action from completing, making it the tester's most important task to find them. Software defects can be present at any stage of the software development process, so it's crucial to identify and take appropriate action.",source:"@site/docs/concept-1464e0b6-825a-4235-ac17-eba05c367bae.mdx",sourceDirName:".",slug:"/analyze/analytics/defects-report",permalink:"/analyze/analytics/defects-report",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-1464e0b6-825a-4235-ac17-eba05c367bae.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-1464e0b6-825a-4235-ac17-eba05c367bae",slug:"/analyze/analytics/defects-report"},sidebar:"tutorialSidebar",previous:{title:"Compare test results in Katalon TestOps",permalink:"/analyze/analytics/compare-test-results-in-katalon-testops"},next:{title:"Visual Testing overview",permalink:"/analyze/analytics/visual-testing/visual-testing-overview"}},c={},l=[{value:"How to use Defects Report",id:"how-to-use-defects-report",level:2}],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defects-report"},"Defects Report"),(0,n.kt)("p",null,"A defect is an error in the software that prevents the intended action from completing, making it the tester's most important task to find them. Software defects can be present at any stage of the software development process, so it's crucial to identify and take appropriate action."),(0,n.kt)("p",null,"Defects Report provides traceability and actionable insights to users, such as the defects' assignee, effort, status, priority, the day created, and the defects trendline for overall visibility."),(0,n.kt)("h2",{id:"how-to-use-defects-report"},"How to use Defects Report"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users have enabled ",(0,n.kt)("a",{parentName:"li",href:"/organize/integration-for-organizing-tests/jira-integration/enable-testops-jira-integration-for-test-management"},"Katalon Platform - Jira integration"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Identify defects through failed results of your test runs and ",(0,n.kt)("a",{parentName:"p",href:"/analyze/integration-for-test-analyzing/jira-integration/link-test-runs-to-jira-defects-in-katalon-testops"},"link or create Jira defects with the failed test result"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The linked Jira defects will be fetched to Defects Report. To view Defects Report, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Reports")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Defects"),". ",(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Analytics/Defects_report/TO-Reports-Defects_report.png",alt:"Defects report"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The trend graph gives users a snapshot of the defects situation, specifically the number of resolved defects ","(","green line",")"," and the total number of defects ","(","red line",")",".",(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Analytics/Defects_report/TO-Reports-Defects_report_trendline.png",alt:"Defects report trendline"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Gain new insights into trends by using various filters to analyze defect data. By filtering defects based on Created time range, Status, Priority, Release/Build, and Assignee, you can view trend graphs from multiple perspectives. ",(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Analytics/Defects_report/TO-Reports-filtering_Defect_report.png",alt:"Defect reports filter"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The defects table list out all defects affected by the filters, including useful insights such as defects status, test case, test results, requirements tickets, assignee."),(0,n.kt)("p",{parentName:"li"},"Select a defect to see all its information.",(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Analytics/Defects_report/TO-Reports-Defects_detail.png",alt:"Defects report detail"})))))}u.isMDXComponent=!0}}]);