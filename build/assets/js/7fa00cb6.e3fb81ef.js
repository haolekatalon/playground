"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[36390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"concept-7339a179-d28e-4c96-ad2d-fd502015d443",slug:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents"},o="Run multiple Test Suites in parallel with Agents",i={unversionedId:"concept-7339a179-d28e-4c96-ad2d-fd502015d443",id:"concept-7339a179-d28e-4c96-ad2d-fd502015d443",title:"Run multiple Test Suites in parallel with Agents",description:"Configure parallel executions",source:"@site/docs/concept-7339a179-d28e-4c96-ad2d-fd502015d443.mdx",sourceDirName:".",slug:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents",permalink:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-7339a179-d28e-4c96-ad2d-fd502015d443.mdx",tags:[],version:"current",frontMatter:{id:"concept-7339a179-d28e-4c96-ad2d-fd502015d443",slug:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents"},sidebar:"tutorialSidebar",previous:{title:"Load Balancing for Local Test Environments",permalink:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments"},next:{title:"Auto-Distributed Executions",permalink:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/auto-distributed-executions"}},l={},p=[{value:"Configure parallel executions",id:"configure-parallel-executions",level:2},{value:"Update existing Test Run List",id:"update-existing-test-run-list",level:3},{value:"Run Test Suites in parallel",id:"run-test-suites-in-parallel",level:2},{value:"View Test Suites results",id:"view-test-suites-results",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-multiple-test-suites-in-parallel-with-agents"},"Run multiple Test Suites in parallel with Agents"),(0,r.kt)("h2",{id:"configure-parallel-executions"},"Configure parallel executions"),(0,r.kt)("p",null,"Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create two Local Test Environments. See: ",(0,r.kt)("a",{parentName:"p",href:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent"},"Create a Local Test Environment with an Agent"),"."),(0,r.kt)("p",{parentName:"li"},"You then start two Agents to prepare for Test Suites execution."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt_run_parallel_agent/kt_start_two_agent.png",alt:"start 2 agents"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update each Agent's Threshold to ",(0,r.kt)("strong",{parentName:"p"},"2"),". See ",(0,r.kt)("a",{parentName:"p",href:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments#"},"Configure an Agent's Threshold"),"."),(0,r.kt)("p",{parentName:"li"},"The assigned sessions for each Agent is now ",(0,r.kt)("strong",{parentName:"p"},"2"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Script Repository. See: ",(0,r.kt)("a",{parentName:"p",href:"/organize/upload-test-scripts-from-a-git-repository/upload-test-scripts-from-the-git-repository-to-testops"},"Upload Test Scripts from a Git Repository"),"."),(0,r.kt)("p",{parentName:"li"},"You can now see the newly-created Script Repository appear in the ",(0,r.kt)("strong",{parentName:"p"},"Script Repositories")," page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Script Repository you have created."),(0,r.kt)("p",{parentName:"li"},"The Script Repository page appears. In the ",(0,r.kt)("strong",{parentName:"p"},"Test Suite Collection")," section, you will see a ",(0,r.kt)("strong",{parentName:"p"},"Play")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Play")," button."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Schedule Test Run")," dialog appears.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the required information. See: ",(0,r.kt)("a",{parentName:"p",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops#"},"Schedule Test Runs"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Test Environments")," section, select the Agents you have configured earlier."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Advanced settings")," section, go to ",(0,r.kt)("strong",{parentName:"li"},"Execution Mode")," and choose ",(0,r.kt)("strong",{parentName:"li"},"Parallel"),". See: ",(0,r.kt)("a",{parentName:"li",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops#"},"Advanced settings"),"."))))),(0,r.kt)("p",null,"You have created a new Test Run List for parallel executions of Test Suites."),(0,r.kt)("h3",{id:"update-existing-test-run-list"},"Update existing Test Run List"),(0,r.kt)("p",null,"If you have previously scheduled Test Runs in sequential mode, you can also update your existing Test Run List so that it can be executed in parallel."),(0,r.kt)("p",null,"Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start two Agents.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update each Agent's Threshold to ",(0,r.kt)("strong",{parentName:"p"},"2"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Test Execution")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Test Run List"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Test Run List you want to update.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button in the top right corner."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Schedule Test Run")," dialog appears."),(0,r.kt)("p",{parentName:"li"},"Update the schedule as follow:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Test Environments")," section, select the Agents you have started earlier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Advanced settings")," section, choose ",(0,r.kt)("strong",{parentName:"p"},"Parallel")," for ",(0,r.kt)("strong",{parentName:"p"},"Execution Mode"),". See: ",(0,r.kt)("a",{parentName:"p",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops#"},"Advanced settings"),"."))))),(0,r.kt)("h2",{id:"run-test-suites-in-parallel"},"Run Test Suites in parallel"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Test Execution")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Test Run List"),"."),(0,r.kt)("p",{parentName:"li"},"You can see the new Test Run List here.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("em",{parentName:"p"},"Run")," icon."),(0,r.kt)("p",{parentName:"li"},"The two Agents are now running at the same time."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt_run_parallel_agent/kt_two_agents_run.png",alt:"2 agents run concurrently"}))),(0,r.kt)("h2",{id:"view-test-suites-results"},"View Test Suites results"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Reports")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Test Runs")," to see the result of Test Suites you have run in parallel."),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/auto-distributed-executions"},"Auto-Distributed Executions"),"."))}d.isMDXComponent=!0}}]);