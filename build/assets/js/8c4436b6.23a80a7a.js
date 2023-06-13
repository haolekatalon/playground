"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[57721],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const s={id:"concept-b16bc1a3-3183-432d-9126-0b5af68bfdc8",slug:"/create-tests/debug-a-test-case/debug-a-test-case-in-katalon-studio"},r="Debug a test case in Katalon Studio",i={unversionedId:"concept-b16bc1a3-3183-432d-9126-0b5af68bfdc8",id:"concept-b16bc1a3-3183-432d-9126-0b5af68bfdc8",title:"Debug a test case in Katalon Studio",description:"Creating automation test cases is a repetitive task that requires a lot of editing and re-running test cases. In many automation tools, when a test case fails and you make certain changes to the script, you usually have to execute the whole script all over again to make sure the test is executed as expected.",source:"@site/docs/concept-b16bc1a3-3183-432d-9126-0b5af68bfdc8.mdx",sourceDirName:".",slug:"/create-tests/debug-a-test-case/debug-a-test-case-in-katalon-studio",permalink:"/create-tests/debug-a-test-case/debug-a-test-case-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-b16bc1a3-3183-432d-9126-0b5af68bfdc8.mdx",tags:[],version:"current",frontMatter:{id:"concept-b16bc1a3-3183-432d-9126-0b5af68bfdc8",slug:"/create-tests/debug-a-test-case/debug-a-test-case-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"\\[Common\\] Delay",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-delay"},next:{title:"Troubleshoot common exceptions for test creation",permalink:"/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/troubleshoot-common-exceptions-for-test-creation"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Debug: Run from here",id:"debug-run-from-here",level:2},{value:"Debug: Enable or Disable Steps",id:"debug-enable-or-disable-steps",level:2},{value:"Debug mode",id:"debug-mode",level:2},{value:"Debug from here",id:"debug-from-here",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-a-test-case-in-katalon-studio"},"Debug a test case in Katalon Studio"),(0,o.kt)("p",null,"Creating automation test cases is a repetitive task that requires a lot of editing and re-running test cases. In many automation tools, when a test case fails and you make certain changes to the script, you usually have to execute the whole script all over again to make sure the test is executed as expected."),(0,o.kt)("p",null,"To save your precious time from tedious repetitive re-running all unnecessary steps for debugging and to make debugging easier, Katalon Studio provides the following utilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Debug: Run from here"),(0,o.kt)("li",{parentName:"ul"},"Debug: Enable/Disable steps"),(0,o.kt)("li",{parentName:"ul"},"Debug mode"),(0,o.kt)("li",{parentName:"ul"},"Debug from here")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An active Katalon Studio Enterprise license.")),(0,o.kt)("h2",{id:"debug-run-from-here"},"Debug: Run from here"),(0,o.kt)("p",null,"With this feature, you can resume the existing execution quickly. Katalon Studio currently supports ",(0,o.kt)("strong",{parentName:"p"},"Run from here")," with ",(0,o.kt)("strong",{parentName:"p"},"Chrome, Firefox, and Edge Chromium")," ","(","Edge Chromium is supported in versio 7.3.0 and later",")"," only. To use it, from the ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/create-test-case-overview"},"Manual view")," of a test case:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a browser with the ",(0,o.kt)("code",null,"Open Browser")," step, or you must have a currently running browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure this browser's session is NOT terminated when the execution finishes ","(","Go to ",(0,o.kt)("strong",{parentName:"p"},"Project/Settings/Execution")," and uncheck the ",(0,o.kt)("strong",{parentName:"p"},"Terminate...")," options in ",(0,o.kt)("strong",{parentName:"p"},"Post-Execution Options")," based on your testing needs",")"),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Post-execution.png",alt:"Uncheck post execution"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Manual view of the test case, right-click on a step, select ",(0,o.kt)("strong",{parentName:"p"},"Run from here")," and select one of the ",(0,o.kt)("strong",{parentName:"p"},"currently running")," browser instances to execute your test."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If there are no running browser instances that are previously launched in Katalon Studio, ",(0,o.kt)("strong",{parentName:"li"},"Run from here")," is disabled."))),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Run-from-here.png",width:600,alt:"Debug - run from here"}),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Debug: Enable or Disable steps")))),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Disable-debug.png",width:600,alt:"Enable/Disable steps to debug"}),(0,o.kt)("h2",{id:"debug-enable-or-disable-steps"},"Debug: Enable or Disable Steps"),(0,o.kt)("p",null,"Katalon Studio allows you to enable or disable one or more test steps before executing the test case to skip unwanted steps during execution. You can use the provided keyboard shortcuts to perform the actions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Windows: ",(0,o.kt)("strong",{parentName:"li"},"Ctrl+D")," ","(","disable",")"," and ",(0,o.kt)("strong",{parentName:"li"},"Ctrl+E")," ","(","enable",")"," on selected steps."),(0,o.kt)("li",{parentName:"ul"},"For macOS: ",(0,o.kt)("strong",{parentName:"li"},"command+/")," ","(","disable",")"," and ",(0,o.kt)("strong",{parentName:"li"},"option+command+/"))),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Disable-debug.png",width:600,alt:"Enable/Disable steps to debug"}),(0,o.kt)("h2",{id:"debug-mode"},"Debug mode"),(0,o.kt)("p",null,"The Debug mode in Katalon Studio is designed to make debugging easy to use, allowing investigating the root causes more quickly. The following steps present how to debug a test case:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a test case and switch to the ",(0,o.kt)("strong",{parentName:"p"},"Script")," view."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Script-view.png",alt:"Script view Katalon Studio"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Double-click on the leftmost side of the script editor to mark a breakpoint. A breakpoint is where Katalon Studio pauses the test execution for you to start debugging."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/830-KS-EXECUTION-Line-break-point.png",width:500,alt:"mark a breakpoint for the step"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a browser for ",(0,o.kt)("strong",{parentName:"p"},"Debug")," from the main toolbar."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Run-debug.png",width:320,alt:"Run debug"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm ","(","select ",(0,o.kt)("strong",{parentName:"p"},"Yes"),")"," when being asked to display the ",(0,o.kt)("strong",{parentName:"p"},"Debug")," perspective."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/confirm-perspective.png",width:514,alt:"Confirm the debug mode"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Debug")," perspective provides convenient options for debugging purposes. You can:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigate execution using commands from the debug toolbar",(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Navigate-execution.png",alt:"debug toolbar"}))),(0,o.kt)("p",{parentName:"li"},"Where:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Command"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Resume-debugging.png"})),(0,o.kt)("td",null,"Resume debugging")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Suspend-debugging.png"})),(0,o.kt)("td",null,"Suspend debugging")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Terminate-debugging.png"})),(0,o.kt)("td",null,"Terminate debugging")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Disconnect.png"})),(0,o.kt)("td",null,"Disconnect")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Step-into-current-code-block.png"})),(0,o.kt)("td",null,"Step into the current code block")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Step-over-current-code-block.png"})),(0,o.kt)("td",null,"Step over the current code block")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Return-from-current-code-block.png"})),(0,o.kt)("td",null,"Return from the current code block")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Run-to-specific-line.png"})),(0,o.kt)("td",null,"Run to a specific line")),"    ")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Track values of variables using Watch utilities.","*","*",(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/debugging_test_case/Watch-utilities.png",alt:"Watch utilities"}))),(0,o.kt)("p",{parentName:"li"},"Where:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"View"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Variables"),(0,o.kt)("td",null,"You can view all variables associated with the current debugged action using Variables View, which is similar to Variables View in Eclipse. Refer to this ",(0,o.kt)("a",{href:"http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fexpressions%2Fref-expressions_view.htm"},"guide")," for more details.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Breakpoints"),(0,o.kt)("td",null,"You can view all breakpoints using Breakpoints View, which is similar to Breakpoints View in Eclipse. Refer to this ",(0,o.kt)("a",{href:"http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fexpressions%2Fref-expressions_view.htm"},"guide")," for more details.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Expressions"),(0,o.kt)("td",null,"You can inspect data using Expressions View, which is similar to Expressions View in Eclipse. Refer to this ",(0,o.kt)("a",{href:"http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fexpressions%2Fref-expressions_view.htm"},"guide")," for more details.")),"    ")))),(0,o.kt)("h2",{id:"debug-from-here"},"Debug from here"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Introduced in version ",(0,o.kt)("strong",{parentName:"li"},"7.5.5"),"."))),(0,o.kt)("p",null,"To use ",(0,o.kt)("strong",{parentName:"p"},"Debug from here")," with ",(0,o.kt)("strong",{parentName:"p"},"Chrome, Firefox, or Edge Chromium"),", do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a browser with the ",(0,o.kt)("code",null,"Open Browser")," step, or you must have a currently running browser")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure this browser's session is NOT terminated when the execution finishes ","(","Go to ",(0,o.kt)("strong",{parentName:"p"},"Project/Settings/Execution")," and uncheck the ",(0,o.kt)("strong",{parentName:"p"},"Terminate...")," options in ",(0,o.kt)("strong",{parentName:"p"},"Post-Execution Options")," based on your testing needs",")"),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Post-execution.png",alt:"Uncheck post execution"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a test case in its ",(0,o.kt)("strong",{parentName:"p"},"Script")," view and double-click on the leftmost side of the script editor to mark a breakpoint. A breakpoint is where Katalon Studio pauses the test execution for you to debug."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/breakpoint.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to the test case's ",(0,o.kt)("strong",{parentName:"p"},"Manual")," view, right-click on a step, select ",(0,o.kt)("strong",{parentName:"p"},"Debug from here")," and select one of the ",(0,o.kt)("strong",{parentName:"p"},"currently running")," browser instances to execute your test."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If there are no running browser instances that are previously launched in Katalon Studio, ",(0,o.kt)("strong",{parentName:"li"},"Debug from here...")," is disabled."))),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-a-test-case-or-a-test-suite/KS-EXECUTION-Debug-from-here.png",width:600,alt:"Debug from here"}))),(0,o.kt)("p",null,"See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/maintain/configure-class-file-decompilation-in-katalon-studio"},"Decompile Class File for Debugging"))))}d.isMDXComponent=!0}}]);