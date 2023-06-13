"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[39597],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(a),m=o,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80099:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={author:"Xuan Tran <xuan.tran@katalon.com>",id:"concept-ee6a1124-44c3-47f4-9d9b-c312332319e8",slug:"/create-tests/introduction-to-test-creation/introduction-to-test-creation"},i="Introduction to test creation",s={unversionedId:"concept-ee6a1124-44c3-47f4-9d9b-c312332319e8",id:"concept-ee6a1124-44c3-47f4-9d9b-c312332319e8",title:"Introduction to test creation",description:"Test creation is the activity when you write different steps to conduct a test.",source:"@site/docs/concept-ee6a1124-44c3-47f4-9d9b-c312332319e8.mdx",sourceDirName:".",slug:"/create-tests/introduction-to-test-creation/introduction-to-test-creation",permalink:"/create-tests/introduction-to-test-creation/introduction-to-test-creation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-ee6a1124-44c3-47f4-9d9b-c312332319e8.mdx",tags:[],version:"current",frontMatter:{author:"Xuan Tran <xuan.tran@katalon.com>",id:"concept-ee6a1124-44c3-47f4-9d9b-c312332319e8",slug:"/create-tests/introduction-to-test-creation/introduction-to-test-creation"},sidebar:"tutorialSidebar",previous:{title:"Link Test Cases to Jira Requirements",permalink:"/plan/integration-for-test-planning/link-test-cases-to-jira-requirements"},next:{title:"Introduction to Web testing in Katalon Studio",permalink:"/create-tests/introduction-to-test-creation/introduction-to-web-testing-in-katalon-studio"}},c={},l=[{value:"Set up your projects in Katalon Studio",id:"set-up-your-projects-in-katalon-studio",level:2},{value:"Playback and Debug your test case",id:"playback-and-debug-your-test-case",level:2},{value:"Organize your test scripts in test suites and test suite collections",id:"organize-your-test-scripts-in-test-suites-and-test-suite-collections",level:2},{value:"Troubleshooting for test creation",id:"troubleshooting-for-test-creation",level:2}],u={toc:l},p="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-test-creation"},"Introduction to test creation"),(0,o.kt)("p",null,"Test creation is the activity when you write different steps to conduct a test."),(0,o.kt)("p",null,"In this phase, you are mostly working with Katalon Studio - the test creation IDE of the Katalon Platform."),(0,o.kt)("p",null,"Before you begin, make sure that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You already have a Katalon account. Sign up at our official website: ",(0,o.kt)("a",{parentName:"p",href:"https://katalon.com/sign-up"},"Sign up"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You already downloaded and installed Katalon Studio. See ",(0,o.kt)("a",{parentName:"p",href:"/get-started/katalon-studio-installation/katalon-studio-installation-overview"},"Installation overview"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You already belonged to an Organization on Katalon Platform. See ",(0,o.kt)("a",{parentName:"p",href:"/administer/administration-tasks/create-an-organization-and-project"},"Create Organization and Projects"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You already created a project on Katalon TestOps. See Create a new project."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Start by checking out the test planning activity beforehand. See ",(0,o.kt)("a",{parentName:"li",href:"/plan/introduction-to-test-planning"},"Introduction to test planning"),"."))),(0,o.kt)("p",null,"Once everything is set, it\u2019s time to explore the power of the Katalon Platform."),(0,o.kt)("h2",{id:"set-up-your-projects-in-katalon-studio"},"Set up your projects in Katalon Studio"),(0,o.kt)("p",null,"First, open your project in Katalon Studio. See ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/manage-test-projects/manage-test-project-in-katalon-studio-overview"},"Manage test projects"),"."),(0,o.kt)("p",null,"Depending on your projects, you can customize the workspace and configure your project accordingly. See ",(0,o.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform"},"Set up your workspace"),"."),(0,o.kt)("p",null,"Here are things that you can configure in your projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up desired capabilities. See ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio"},"Introduction to desired capabilities"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Integrate your projects with other tools. See ",(0,o.kt)("a",{parentName:"p",href:"/integrations/supported-integrations/integrate-katalon-studio-with-other-katalon-platform-tools"},"Supported Integrations"),"."))),(0,o.kt)("p",null,"Once your project is ready, you can create your first test case. There are two approaches to creating test scripts in Katalon Studio:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate test scripts for WebUI and mobile applications using record and spy utilities. See ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio"},"Spy Web utility")," and ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio"},"Record Web utility"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keyword-driven testing using the manual view and script view. See ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-manual-view"},"Generate test steps in manual view")," and ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view"},"Generate test steps in script view"),"."))),(0,o.kt)("h2",{id:"playback-and-debug-your-test-case"},"Playback and Debug your test case"),(0,o.kt)("p",null,"After you created your first test case, you can playback the test to see if it works as expected."),(0,o.kt)("p",null,"If there is any error with your test case, you can use the debug mode of Katalon Studio."),(0,o.kt)("h2",{id:"organize-your-test-scripts-in-test-suites-and-test-suite-collections"},"Organize your test scripts in test suites and test suite collections"),(0,o.kt)("p",null,"In Katalon Studio, you can group relevant test scripts together into test suites and test suite collections for certain testing goals. See ",(0,o.kt)("a",{parentName:"p",href:"/organize/manage-tests/test-suite/manage-test-suites-in-katalon-studio#"},"Manage test cases in test suites")," and ",(0,o.kt)("a",{parentName:"p",href:"/organize/manage-tests/test-suite/manage-test-suites-in-katalon-studio"},"Manage test suites in Katalon Studio"),"."),(0,o.kt)("p",null,"That's the basic cover of the test creation activity. You then can execute your test, view reports and maintain your tests in the Katalon Platform. See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/execute/test-execution-overview"},"Introduction test executing"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/maintain/introduction-to-test-maintenance"},"Introduction to test maintenance"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/analyze/introduction-to-test-analysis"},"Introduction to analyzing")))),(0,o.kt)("p",null,"Katalon Platform also has a lightweight extension for record and playback. Explore this extension here: ",(0,o.kt)("a",{parentName:"p",href:"/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-overview"},"Katalon Recorder overview"),"."),(0,o.kt)("h2",{id:"troubleshooting-for-test-creation"},"Troubleshooting for test creation"),(0,o.kt)("p",null,"For troubleshooting in test creation, refer to this document: ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/troubleshoot-common-exceptions-for-test-creation"},"Troubleshoot common exceptions for test creation"),"."))}d.isMDXComponent=!0}}]);