"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[25907],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(o),g=n,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return o?i.createElement(m,r(r({ref:t},c),{},{components:o})):i.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,r[1]=a;for(var u=2;u<s;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},74846:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=o(87462),n=(o(67294),o(3905));const s={id:"concept-fa2bd9f6-bafc-4209-a284-8d8568aa7d86",slug:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio"},r="View and customize execution log in Katalon Studio",a={unversionedId:"concept-fa2bd9f6-bafc-4209-a284-8d8568aa7d86",id:"concept-fa2bd9f6-bafc-4209-a284-8d8568aa7d86",title:"View and customize execution log in Katalon Studio",description:"Viewing the execution log is the very first approach when troubleshooting automation test execution. The critical information in the log can quickly help project teams pinpoint the root causes of any issues. Katalon Studio execution logs are optimized to provide such information so that you can have a comprehensive view of the tests run.",source:"@site/docs/concept-fa2bd9f6-bafc-4209-a284-8d8568aa7d86.mdx",sourceDirName:".",slug:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio",permalink:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-fa2bd9f6-bafc-4209-a284-8d8568aa7d86.mdx",tags:[],version:"current",frontMatter:{id:"concept-fa2bd9f6-bafc-4209-a284-8d8568aa7d86",slug:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Reports overview",permalink:"/analyze/reports/reports-overview"},next:{title:"View Katalon TestOps execution summary in Katalon Studio",permalink:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-katalon-testops-execution-summary-in-katalon-studio"}},l={},u=[{value:"View Execution Log",id:"view-execution-log",level:2},{value:"Tabular view vs. Tree View",id:"tabular-view-vs-tree-view",level:3},{value:"Scroll Lock",id:"scroll-lock",level:3},{value:"Customize Console Log",id:"customize-console-log",level:2},{value:"Execution Progress Debugger",id:"execution-progress-debugger",level:3},{value:"Extensive logs for Web Service testing",id:"extensive-logs-for-web-service-testing",level:3},{value:"Logs Configuration",id:"logs-configuration",level:3},{value:"Log executed test steps",id:"log-executed-test-steps",level:3},{value:"Summary",id:"summary",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"view-and-customize-execution-log-in-katalon-studio"},"View and customize execution log in Katalon Studio"),(0,n.kt)("p",null,"Viewing the execution log is the very first approach when troubleshooting automation test execution. The critical information in the log can quickly help project teams pinpoint the root causes of any issues. Katalon Studio execution logs are optimized to provide such information so that you can have a comprehensive view of the tests run."),(0,n.kt)("h2",{id:"view-execution-log"},"View Execution Log"),(0,n.kt)("p",null,"Once your test cases/test suites finish execution, you can review the results on the ",(0,n.kt)("strong",{parentName:"p"},"Log Viewer")," views."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-852-log-viewer-all.png"}),(0,n.kt)("p",null,"Using the filter options, you can specify what type of logs to be displayed:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Filter"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"All"),(0,n.kt)("td",null,"Show all the log messages.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Info"),(0,n.kt)("td",null,"Show only the log messages for information/reference.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Passed"),(0,n.kt)("td",null,"Show only the log messages indicating that a step is successfully executed.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Failed"),(0,n.kt)("td",null,"Show only the log messages indicating that a test step fails to execute.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Error"),(0,n.kt)("td",null,"Show only the log messages indicating that some error has occurred at a given step.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Warning"),(0,n.kt)("td",null,"Show only the log messages indicating that a test step is failed but accepted as a warning.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Not Run"),(0,n.kt)("td",null,"Show only the log messages indicating that a test step is skipped.")))),(0,n.kt)("h3",{id:"tabular-view-vs-tree-view"},"Tabular view vs. Tree View"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Log Viewer")," can be viewed in different modes: ",(0,n.kt)("strong",{parentName:"p"},"tabular")," view and ",(0,n.kt)("strong",{parentName:"p"},"tree")," view. You can switch to tree view by selecting the ",(0,n.kt)("strong",{parentName:"p"},"Tree View")," toggle as illustrated below:"),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-tree-view.png"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Tree View")," display logs in a structural way that relates to how the test case/test suite is organized. Additionally, you can navigate to the respective step by selecting from the context menu, as shown below:"),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-852-go-to-this-step.png"}),(0,n.kt)("h3",{id:"scroll-lock"},"Scroll Lock"),(0,n.kt)("p",null,"While the test is being executed, the ",(0,n.kt)("strong",{parentName:"p"},"Log Viewer")," is being updated with real-time log messages, where the most recent log messages is shown at the bottom. Therefore, the ",(0,n.kt)("strong",{parentName:"p"},"Log Viewer")," keeps scrolling down during the test execution. However, users may want to keep the ",(0,n.kt)("strong",{parentName:"p"},"Log Viewer")," standing still so that they can verify particular log messages. To stop this scrolling behavior, you can select ",(0,n.kt)("strong",{parentName:"p"},"Scroll Lock"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-852-scroll-lock.png"}),(0,n.kt)("h2",{id:"customize-console-log"},"Customize Console Log"),(0,n.kt)("h3",{id:"execution-progress-debugger"},"Execution Progress Debugger"),(0,n.kt)("p",null,"Katalon Studio execution log displays complete details of actions performed during the test run to help you debug better. The test log contains all relevant information about the test run. Full test step statements and desired capabilities information are also included. Log levels are ANSI color-coded for different kinds of levels: INFO, DEBUG, WARING, and ERROR for an easier view of the execution log, as shown in the screenshot below."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-console-log.png",width:700}),(0,n.kt)("h3",{id:"extensive-logs-for-web-service-testing"},"Extensive logs for Web Service testing"),(0,n.kt)("p",null,"Sending and receiving Web Service can be a troublesome task due to many factors involved on both the client and server sides. Since version 5.9.0, Katalon Studio has included the ",(0,n.kt)("code",null,"HAR")," file in the log of Web Service execution. The ",(0,n.kt)("code",null,"HAR")," file contains low-level data to help you identify critical performance problems with Web services quickly."),(0,n.kt)("p",null,"Upon sending requests, a relative ",(0,n.kt)("code",null,".har")," file is recorded and made accessible from execution logs. The file is stored directly on the current executed machine."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-har-file.png",width:700}),(0,n.kt)("p",null,"These ",(0,n.kt)("code",null,".har")," files are stored in the requests' main folder under the generated report folders if you execute Web Service Suites."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-request-har.png",width:500}),(0,n.kt)("p",null,"Using the ",(0,n.kt)("code",null,".har")," file in services analyzer such as ",(0,n.kt)("a",{parentName:"p",href:"https://toolbox.googleapps.com/apps/har_analyzer/"},"HAR Analyzer")," of Google Admin Toolbox can provide quality insights about the Web Service request and response. This helps the project team quickly identify key issues and efficiently allocate resources to address the issue. Some issues that can be identified include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Performance issues: slow page load, a timeout when performing a specific task"),(0,n.kt)("li",{parentName:"ul"},"Page rendering issues: incorrect page format or missing information")),(0,n.kt)("h3",{id:"logs-configuration"},"Logs Configuration"),(0,n.kt)("p",null,"The deepest level of logs is called TRACE. Use the TRACE level when you need more log details than DEBUG level, which is used by default. You can also lessen the logs' details by using the INFO level."),(0,n.kt)("p",null,"In case you want to change the log\u2019s level of one or multiple packages, this setting is located and stored in ",(0,n.kt)("strong",{parentName:"p"},"Include")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Config")," ",">"," ",(0,n.kt)("code",null,"log.properties")," file."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-log-properties.png",width:700}),(0,n.kt)("p",null,"By uncommenting the ",(0,n.kt)("code",null,"logging.level.com.kms=TRACE")," line, the differences are noticeable:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before")),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-debug.png",width:700}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"After")),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-trace.png",width:700}),(0,n.kt)("h3",{id:"log-executed-test-steps"},"Log executed test steps"),(0,n.kt)("p",null,"Starting from Katalon Studio version 7.0.0, an option to disable ",(0,n.kt)("strong",{parentName:"p"},"Log executed test steps")," is available in ",(0,n.kt)("strong",{parentName:"p"},"Project Settings ",">"," Executions"),". By enabling or disabling this option, you can decide whether the logs include executed test steps."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-log-executed-test-steps.png",width:700}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enabled")),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-step-enabled.png",width:700}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Disabled")),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/View_Test_Reports/View_test_reports_in_Studio/working-with-execution-log-in-Studio/image/ks-disabled.png",width:700}),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Katalon Studio execution logs are enhanced for a better debugging process and observation of execution progress."),(0,n.kt)("li",{parentName:"ul"},"The logs level can be configured directly from the ",(0,n.kt)("code",null,"log.properties")," file."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("code",null,".har")," file is generated and stored in Web Service request logs. It can be used to analyze and troubleshoot performance or connection issues ","(","if any",")","."),(0,n.kt)("li",{parentName:"ul"},"Logs can be set to include or exclude the executed test steps.")),(0,n.kt)("p",null,"Learn more about working with the execution log and more in our Katalon Academy course: ",(0,n.kt)("a",{parentName:"p",href:"https://academy.katalon.com/courses/software-test-reporting/?utm_source=kat_docs&utm_medium=execution%20_log"},"Katalon Studio: How To Work With Execution Logs and Test Reports"),"."))}p.isMDXComponent=!0}}]);