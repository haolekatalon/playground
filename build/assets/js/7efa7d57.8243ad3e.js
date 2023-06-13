"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[36103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),f=r,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},42386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-15fbaa89-6bbe-4a19-a568-97d371dfa8f9",slug:"/integrations/unsupported-integrations/upload-files-for-web-applications"},i="Upload files for web applications",p={unversionedId:"concept-15fbaa89-6bbe-4a19-a568-97d371dfa8f9",id:"concept-15fbaa89-6bbe-4a19-a568-97d371dfa8f9",title:"Upload files for web applications",description:"-   Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform.",source:"@site/docs/concept-15fbaa89-6bbe-4a19-a568-97d371dfa8f9.mdx",sourceDirName:".",slug:"/integrations/unsupported-integrations/upload-files-for-web-applications",permalink:"/integrations/unsupported-integrations/upload-files-for-web-applications",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-15fbaa89-6bbe-4a19-a568-97d371dfa8f9.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-15fbaa89-6bbe-4a19-a568-97d371dfa8f9",slug:"/integrations/unsupported-integrations/upload-files-for-web-applications"},sidebar:"tutorialSidebar",previous:{title:"TestProject migration",permalink:"/integrations/unsupported-integrations/testproject-migration"},next:{title:"WireMock integration",permalink:"/integrations/unsupported-integrations/wiremock-integration"}},l={},s=[{value:"Upload files for web applications",id:"upload-files-for-web-applications-1",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-files-for-web-applications"},"Upload files for web applications"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform."))),(0,r.kt)("p",null,"This article demonstrates how Katalon Studio perform a file upload operation on web applications."),(0,r.kt)("h2",{id:"upload-files-for-web-applications-1"},"Upload files for web applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Katalon Studio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.autoitscript.com/site/autoit/downloads/"},"AutoIT")," and Scite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/conceptual/ASLR_script_objects.html#//apple_ref/doc/uid/TP40000983-CH207-BAJJCIAA"},"Apple Script"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/awt/Robot.html"},"Robot Class"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Files to be uploaded"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Record the test via Katalon Recorder save test objects and test cases. See ",(0,r.kt)("a",{parentName:"p",href:"/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio"},"[","WebUI","]"," Create and Run Web UI Test Case using Record and Playback in Katalon Studio"),"."),(0,r.kt)("p",{parentName:"li"},"The file uploading action can be done in several ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file"},"Upload File")," keyword.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file-by-drag-and-drop"},"Upload File by Drag-and-Drop")," keyword.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-send-keys"},"Send Keys")," keyword.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using a Robot class.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using Apple Script ","(","or AutoIT for Windows environment",")",".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the test execution. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"/execute/execute-tests-with-katalon-studio/execute-tests-with-katalon-studio-overview"},"Execute tests with Katalon Studio overview"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the test execution result. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops"},"View test results and execution logs in Katalon TestOps"),"."))))}d.isMDXComponent=!0}}]);