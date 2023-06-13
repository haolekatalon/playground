"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[34042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-dc1b8a88-edb0-4b63-96b1-df42cf1ac1aa",slug:"/integrations/unsupported-integrations/accessibility-test-automation-in-katalon"},r="Accessibility Test Automation in Katalon",s={unversionedId:"concept-dc1b8a88-edb0-4b63-96b1-df42cf1ac1aa",id:"concept-dc1b8a88-edb0-4b63-96b1-df42cf1ac1aa",title:"Accessibility Test Automation in Katalon",description:"-   Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform.",source:"@site/docs/concept-dc1b8a88-edb0-4b63-96b1-df42cf1ac1aa.mdx",sourceDirName:".",slug:"/integrations/unsupported-integrations/accessibility-test-automation-in-katalon",permalink:"/integrations/unsupported-integrations/accessibility-test-automation-in-katalon",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-dc1b8a88-edb0-4b63-96b1-df42cf1ac1aa.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-dc1b8a88-edb0-4b63-96b1-df42cf1ac1aa",slug:"/integrations/unsupported-integrations/accessibility-test-automation-in-katalon"},sidebar:"tutorialSidebar",previous:{title:"Integrate Katalon Studio with other Katalon Platform tools",permalink:"/integrations/supported-integrations/integrate-katalon-studio-with-other-katalon-platform-tools"},next:{title:"Canvas automation",permalink:"/integrations/unsupported-integrations/canvas-automation"}},l={},c=[{value:"How to run Accessibility Test Automation in Katalon",id:"how-to-run-accessibility-test-automation-in-katalon",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accessibility-test-automation-in-katalon"},"Accessibility Test Automation in Katalon"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform."))),(0,o.kt)("p",null,"This document provides you with the step-by-step guide to achieve accessibility testing using Katalon Automation Platform on your website. ",(0,o.kt)("a",{parentName:"p",href:"https://www.deque.com/axe/"},"Axe")," is a fast and lightweight accessibility testing tool that checks the entire document against the rules and generates a report with all violations, passes, etc.It checks if your website follows the WCAG and other guidelines ","(","as supported by axe-core library",")","."),(0,o.kt)("p",null,"In this guide, you will learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How axe-core library is used with Katalon Studio to achieve Accessibility testing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What are the components of the generated report"))),(0,o.kt)("h2",{id:"how-to-run-accessibility-test-automation-in-katalon"},"How to run Accessibility Test Automation in Katalon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download the ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.deque.html.axe-core/selenium"},"axe-core jar")," file and save it in your local system and add it to ",(0,o.kt)("strong",{parentName:"p"},"Katalon Studio Project")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Library Management"),". You will use this file to import required packages in the sample code snippets. ",(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Accessibility_Testing/KS-Library_Management.png",alt:"Katalon Studio Library management"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RupeshSanjaySawant/katalon-accessibility-testing-project.git"},"sample project repository")," for your reference."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can add the following custom keyword script, the accessibility checks are invoked using the axe-core library in this script. The generated report is saved in a JSON and TXT file format as per the path provided in the script ","(","In Runtime report Folder",")","."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'import com.kms.katalon.core.util.KeywordUtil\nimport java.text.SimpleDateFormat;\nimport com.deque.html.axecore.results.Results;\nimport com.deque.html.axecore.results.Rule;\nimport com.deque.html.axecore.selenium.AxeBuilder;\nimport com.deque.html.axecore.selenium.AxeReporter;\nimport com.deque.html.axecore.selenium.ResultType;\nimport static com.deque.html.axecore.selenium.AxeReporter.getReadableAxeResults;\nimport com.kms.katalon.core.annotation.Keyword\nimport com.kms.katalon.core.configuration.RunConfiguration\nimport com.kms.katalon.core.webui.driver.DriverFactory\nclass Sample {\n    @Keyword\n    def checkAccessibility() {\n        Results results = new AxeBuilder().analyze(DriverFactory.getWebDriver())\n        List<Rule> violations = results.getViolations()\n        if(violations.size()==0){\n        KeywordUtil.logInfo("No Violation Found")\n        }\n        String AxeReportPath = RunConfiguration.getReportFolder()+ File.separator\n        String timeStamp = new SimpleDateFormat("yyyy_MM_dd_HH_mm_ss").format(new\njava.util.Date())\n        String AxeViolationReportPath=AxeReportPath + "AccessibilityViolations_" + timeStamp\n        AxeReporter.writeResultsToJsonFile(AxeViolationReportPath,results)\n        KeywordUtil.logInfo("Violation Report Path"+ AxeViolationReportPath)\nif(getReadableAxeResults(ResultType.Violations.getKey(),DriverFactory.getWebDriver(),violations) ){\n        AxeReporter.writeResultsToTextFile(AxeViolationReportPath,\n        AxeReporter.getAxeResultString())\n        }\n    }\n}\n')),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You can also write assertions in your script based on the violations in report.json and mark your test passed or failed based on these assertions.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can use this custom keyword in the test case ",(0,o.kt)("strong",{parentName:"p"},"Add")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Custom Keyword")," after you have navigated to your desired pages on the website. You can use this keyword for different pages of the website as you navigate as per your flow. You can execute on any browser ","(","Chrome, Mozilla Firefox, Edge Chromium, Safari",")","."),(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Accessibility_Testing/KS-Add_keyword.png",alt:"Add custom keyword in Katalon Studio"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After adding the test case in the test suite, You can execute and see the accessibility results in JSON and TXT format will get generated in the report folder, the same can get uploaded in TestOps as well."),(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Accessibility_Testing/TO-_reports.png",alt:"TestOps reports"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you successfully run the test script, a text and a json file are generated as per the path set in the script."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The report in TXT file contains the violation information: ",(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Accessibility_Testing/violations_in_txt_file.png",alt:"report in txt file"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JSON file contains the following accessibility test information: ",(0,o.kt)("img",{src:"/doc_images/Documents/General_Information/Unsupported-Integrations/Accessibility_Testing/JSON_file_.png"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"violations ","(","array",")",": These results indicate what elements failed in the rules.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"passes ","(","array",")",": These results indicate what elements passed in the rules.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"incomplete ","(","array",")",": It contains results that were aborted and require further testing. This can happen either because of technical restrictions to what the rule can test or because of a javascript error that occurred.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"inapplicable ","(","array",")",": These results indicate rules that did not run because no matching content was found on the page. For example, if no video exists, those rules won't run."))))))))}m.isMDXComponent=!0}}]);