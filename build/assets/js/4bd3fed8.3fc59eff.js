"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={id:"concept-4d18d741-40d9-4f3e-83ce-bd6c42f88ec4",slug:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments"},r="Load Balancing for Local Test Environments",i={unversionedId:"concept-4d18d741-40d9-4f3e-83ce-bd6c42f88ec4",id:"concept-4d18d741-40d9-4f3e-83ce-bd6c42f88ec4",title:"Load Balancing for Local Test Environments",description:"With Katalon TestOps, your tests can be executed in parallel using load-balanced configurations.",source:"@site/docs/concept-4d18d741-40d9-4f3e-83ce-bd6c42f88ec4.mdx",sourceDirName:".",slug:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments",permalink:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-4d18d741-40d9-4f3e-83ce-bd6c42f88ec4.mdx",tags:[],version:"current",frontMatter:{id:"concept-4d18d741-40d9-4f3e-83ce-bd6c42f88ec4",slug:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments"},sidebar:"tutorialSidebar",previous:{title:"Create a Local Test Environment with an Agent",permalink:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent"},next:{title:"Run multiple Test Suites in parallel with Agents",permalink:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents"}},l={},c=[{value:"Configure an Agent&#39;s Threshold",id:"configure-an-agents-threshold",level:2},{value:"Assign an Agent to execute Test Runs",id:"assign-an-agent-to-execute-test-runs",level:2},{value:"For a new Test Plan",id:"for-a-new-test-plan",level:3},{value:"For an existing Test Plan",id:"for-an-existing-test-plan",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-balancing-for-local-test-environments"},"Load Balancing for Local Test Environments"),(0,o.kt)("p",null,"With Katalon TestOps, your tests can be executed in parallel using load-balanced configurations."),(0,o.kt)("p",null,"To do so, Katalon TestOps distributes Test Executions over Agents to optimize Remote Execution efficiency."),(0,o.kt)("p",null,"Each Agent can be configured with a unique Threshold. Test Executions can then be setup to minimize Agent idleness."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You have at least one active Local Test Environment. See: ",(0,o.kt)("a",{parentName:"li",href:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent"},"Create a Local Test Environment with an Agent"),"."))),(0,o.kt)("h2",{id:"configure-an-agents-threshold"},"Configure an Agent's Threshold"),(0,o.kt)("p",null,"An Agent's Threshold is the maximum number of sessions that an Agent can execute concurrently in a Local Test Environment."),(0,o.kt)("p",null,"You must configure the Threshold value to assign the number of jobs to an Agent."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"By default, the Threshold value of all Agents is set as ",(0,o.kt)("strong",{parentName:"li"},"1"),"."))),(0,o.kt)("p",null,"To configure an Agent's Threshold, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to ",(0,o.kt)("a",{parentName:"p",href:"https://testops.katalon.io/login"},"Katalon TestOps")," and go to your Project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Configurations")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Environments"),"."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Test Environments")," page appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the Local Test Environment you want to configure the Agent's Threshold for."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Agent Details")," page appears as below."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-load-balancing/configure-agent-threshold-2.png",alt:"agent details page"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the value in the ",(0,o.kt)("strong",{parentName:"p"},"Threshold")," section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Update"),"."))),(0,o.kt)("p",null,"The maximum number of concurrent sessions that an Agent can execute is equal to the Threshold value you have configured."),(0,o.kt)("p",null,"You can check the sessions in the ",(0,o.kt)("strong",{parentName:"p"},"Test Environments")," page."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-load-balancing/test-environment-page-with-agents-highlight-session-2.png",alt:"test environment page highlight assigned sessions"}),(0,o.kt)("h2",{id:"assign-an-agent-to-execute-test-runs"},"Assign an Agent to execute Test Runs"),(0,o.kt)("h3",{id:"for-a-new-test-plan"},"For a new Test Plan"),(0,o.kt)("p",null,"You can create a new Test Runs Schedule to assign an Agent for Test Executions. See: ",(0,o.kt)("a",{parentName:"p",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops"},"Schedule Test Runs"),"."),(0,o.kt)("p",null,"When creating a new Test Runs Schedule, you are asked to select Test Environments. You can select an Agent here to assign it to your new Test Plan."),(0,o.kt)("h3",{id:"for-an-existing-test-plan"},"For an existing Test Plan"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to your Project ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Execution")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Run List"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on a Test Run List."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-load-balancing/a-verify-match-exact-name-page-2.png",alt:"a verify match exact name page"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Edit"),"."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Schedule Test Run")," dialog appears as below."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-load-balancing/assign-test-environjment-agent-2.png",alt:"highlight select test environment section"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Test Environments")," section, select a new Agent.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You can reassign an old Test Run List or assign multiple new Test Run Lists to any configured Agent."))),(0,o.kt)("p",null,"To check the Test Execution process, go back to the ",(0,o.kt)("strong",{parentName:"p"},"Test Environments")," page."))}m.isMDXComponent=!0}}]);