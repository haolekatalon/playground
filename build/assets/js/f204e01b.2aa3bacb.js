"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[20729],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),d=o,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56525:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={id:"concept-b2678f3c-4bde-4c51-931d-7dfc9766005a",slug:"/execute/ci-cd-integrations/circleci-katalon-orb"},i="CircleCI - Katalon Orb",l={unversionedId:"concept-b2678f3c-4bde-4c51-931d-7dfc9766005a",id:"concept-b2678f3c-4bde-4c51-931d-7dfc9766005a",title:"CircleCI - Katalon Orb",description:"-   Katalon TestOps CI is another way to execute or schedule Katalon Studio tests remotely. To learn more about Katalon TestOps CI, see Test Planning Overview.",source:"@site/docs/concept-b2678f3c-4bde-4c51-931d-7dfc9766005a.mdx",sourceDirName:".",slug:"/execute/ci-cd-integrations/circleci-katalon-orb",permalink:"/execute/ci-cd-integrations/circleci-katalon-orb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-b2678f3c-4bde-4c51-931d-7dfc9766005a.mdx",tags:[],version:"current",frontMatter:{id:"concept-b2678f3c-4bde-4c51-931d-7dfc9766005a",slug:"/execute/ci-cd-integrations/circleci-katalon-orb"},sidebar:"tutorialSidebar",previous:{title:"Bamboo Add-on",permalink:"/execute/ci-cd-integrations/bamboo-add-on"},next:{title:"GitLab Integration",permalink:"/execute/ci-cd-integrations/gitlab-integration"}},c={},s=[{value:"Setup and Configuration",id:"setup-and-configuration",level:2},{value:"Prepare Your Project In GitHub",id:"prepare-your-project-in-github",level:3},{value:"Configure Environment Variables In CircleCI",id:"configure-environment-variables-in-circleci",level:3},{value:"Execute tests with Katalon Orb",id:"execute-tests-with-katalon-orb",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],p={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"circleci---katalon-orb"},"CircleCI - Katalon Orb"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Katalon TestOps CI is another way to execute or schedule Katalon Studio tests remotely. To learn more about Katalon TestOps CI, see ",(0,o.kt)("a",{parentName:"li",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops"},"Test Planning Overview"),"."))),(0,o.kt)("p",null,"Orbs are shareable packages of configuration elements, including jobs, commands, and executors. See CircleCI documents about Orbs: ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/orb-intro/"},"Orbs Introduction Cloud"),"."),(0,o.kt)("p",null,"Katalon Orb enables you to execute Katalon tests with your CircleCI CI/CD pipeline. We recommend getting the latest version from the CircleCI Orb registry page. Download the latest Katalon Orb on CircleCI: ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/orb/katalon/katalon-studio"},"katalon/katalon-studio"),"."),(0,o.kt)("h2",{id:"setup-and-configuration"},"Setup and Configuration"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Katalon Studio version 7.0.0 onwards."),(0,o.kt)("li",{parentName:"ul"},"An active ",(0,o.kt)("a",{parentName:"li",href:"/execute/katalon-runtime-engine/katalon-runtime-engine-overview"},"Katalon Runtime Engine license"),"."))),(0,o.kt)("p",null,"To run your test with Katalon Orb, you need to establish a connection between your Katalon project in GitHub and CircleCI. Log in to ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/vcs-authorize/"},"CircleCI")," using your GitHub account."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/log%20in%20with%20github.png",alt:"log in with Git"}),(0,o.kt)("h3",{id:"prepare-your-project-in-github"},"Prepare Your Project In GitHub"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use your repository on GitHub or create a new one to store your Katalon project code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To run the test in CircleCI, create a ",(0,o.kt)("code",null,".circleci")," folder in the GitHub repository and add a ",(0,o.kt)("code",null,".yml")," file containing Katalon commands ","(","e.g., ",(0,o.kt)("code",null,"katalon-studio-samples/ci-samples/.circleci/config.yml"),")",", then commit. See the example of the ",(0,o.kt)("code",null,"config.yml")," file below."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You can only configure ",(0,o.kt)("code",null,"katalonstudio/run")," to run Katalon tests in the Orb source code. For the supported options, see Command syntax document."))),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/integration-circleci/circleci4.png"}))),(0,o.kt)("h3",{id:"configure-environment-variables-in-circleci"},"Configure Environment Variables In CircleCI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest Katalon Orbs in CircleCI: ",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/orbs/registry/orb/katalon/katalon-studio"},"katalon/katalon-studio"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In CircleCI, click ",(0,o.kt)("strong",{parentName:"p"},"Go to application"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/go%20to%20application.png",alt:"go to application"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Application page appears. Choose a Git Organization."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/choose%20organisation.png",width:400,alt:"choose organisation"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your preferred project, select ",(0,o.kt)("strong",{parentName:"p"},"Projects Settings"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/Projects%20Settings.png",alt:"project settings"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Project Settings")," page appears. Select ",(0,o.kt)("strong",{parentName:"p"},"Environment Variables"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/environment%20variables.png",alt:"environment variables"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Import Variables")," or ",(0,o.kt)("strong",{parentName:"p"},"Add Variable")," to your project. E.g., KATALON",(0,o.kt)("em",{parentName:"p"},"API"),"KEY."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/Add%20Environment.png",width:500,alt:"add variable"}),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"To secure your project settings, you must get the API Key from ",(0,o.kt)("a",{parentName:"li",href:"https://testops.katalon.io/"},"Katalon TestOps"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"KATALON","_","API","_","KEY")," as an environment variable in CircleCI. Do not store this API Key in source code. See also: ",(0,o.kt)("a",{parentName:"li",href:"/administer/settings/katalon-api-key-in-katalon-testops"},"How to create API Keys in Katalon TestOps")))))),(0,o.kt)("h2",{id:"execute-tests-with-katalon-orb"},"Execute tests with Katalon Orb"),(0,o.kt)("p",null,"Katalon Orb automatically executes Katalon tests after each commit to the configured GitHub repository."),(0,o.kt)("p",null,"To execute tests with Katalon Orb, go to CircleCI, then navigate to ",(0,o.kt)("strong",{parentName:"p"},"Projects ",">"," Branch"),", select ",(0,o.kt)("strong",{parentName:"p"},"Run Pipeline"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/circleci/run%20pipeline.png",alt:"run pipeline"}),(0,o.kt)("p",null,"After running Katalon tests in CircleCI, you can download test execution reports in the ",(0,o.kt)("strong",{parentName:"p"},"Artifact")," tab."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/integration-circleci/circleci5.png"}),(0,o.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"For CI sample projects of Katalon Studio, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio-samples/ci-samples/"},"CI Samples"),"."))),(0,o.kt)("p",null,"Below is an example demonstrating how to use Katalon Orb to execute a test suite with the latest version of Katalon Studio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"version: 2.1\norbs:\n  katalon-studio: katalon/katalon-studio@23.0.2\nworkflows:\n  build:\n    jobs:\n      - katalon-studio/run:\n          version: latest\n          command_arguments: >-\n            -browserType='Chrome' -retry=0 -statusDelay=15 -testSuitePath='Test\n            Suites/TS_RegressionTest'\n\n")))}m.isMDXComponent=!0}}]);