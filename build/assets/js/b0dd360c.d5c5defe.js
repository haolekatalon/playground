"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[64427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||s;return a?r.createElement(m,o(o({ref:t},l),{},{components:a})):r.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:n,o[1]=u;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},30532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={author:"Xuan Tran <xuan.tran@katalon.com>",id:"concept-6f01c2c2-af34-48ed-aeab-ca7dd5c63480",slug:"/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio"},o="Create BDD test cases in Katalon Studio",u={unversionedId:"concept-6f01c2c2-af34-48ed-aeab-ca7dd5c63480",id:"concept-6f01c2c2-af34-48ed-aeab-ca7dd5c63480",title:"Create BDD test cases in Katalon Studio",description:"This section shows you how to create BDD test cases in Katalon Studio.",source:"@site/docs/concept-6f01c2c2-af34-48ed-aeab-ca7dd5c63480.mdx",sourceDirName:".",slug:"/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio",permalink:"/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-6f01c2c2-af34-48ed-aeab-ca7dd5c63480.mdx",tags:[],version:"current",frontMatter:{author:"Xuan Tran <xuan.tran@katalon.com>",id:"concept-6f01c2c2-af34-48ed-aeab-ca7dd5c63480",slug:"/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Using Web Services in a test case in Katalon Studio",permalink:"/create-tests/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio"},next:{title:"Combine Katalon Studio with SAP Scripting Tracker for Windows",permalink:"/create-tests/create-test-cases/combine-katalon-studio-with-sap-scripting-tracker-for-windows"}},i={},c=[{value:"Include a feature file in test cases",id:"include-a-feature-file-in-test-cases",level:2},{value:"Create BDD test case with Cucumber Hooks",id:"create-bdd-test-case-with-cucumber-hooks",level:2}],l={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-bdd-test-cases-in-katalon-studio"},"Create BDD test cases in Katalon Studio"),(0,n.kt)("p",null,"This section shows you how to create BDD test cases in Katalon Studio."),(0,n.kt)("h2",{id:"include-a-feature-file-in-test-cases"},"Include a feature file in test cases"),(0,n.kt)("p",null,"To include a Cucumber feature file in Katalon Studio test case, you can use Cucumber keywords in your test case. Katalon Studio supports Cucumber keywords along with the original built-in keywords. You do not have to import Cucumber libraries into Katalon Studio."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"You can only use custom keywords in your BDD tests when the step definition of the feature file belongs to the default package."))),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Use cases"),(0,n.kt)("th",null,"Cucumber keywords")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Execute a single Feature File (with or without tags)"),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file"},"[Cucumber] Run Feature File")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file-with-tags"},"[Cucumber] Run Feature File With Tags"))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Execute multiple Feature Files (with or without tags)"),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder"},"[Cucumber] Run Feature Folder")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags"},"[Cucumber] Run Feature Folder With Tags"))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Execute using Cucumber Runner"),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-with-cucumber-runner"},"[Cucumber] Run With Cucumber Runner"))))))),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CucumberKW.runFeatureFile('Include/features/logIn.feature')\n")),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Test_Artifacts/Working_With_BDD_Feature_File/image/ks-840-feature-file-in-a-test-case.png",width:600,alt:"feature file in a test case"}),"After you execute your BDD tests, you can view BDD report files generated from Katalon Studio or upload and view reports on Katalon TestOps. See: [View BDD reports](/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-bdd-reports-in-katalon-studio).",(0,n.kt)("h2",{id:"create-bdd-test-case-with-cucumber-hooks"},"Create BDD test case with Cucumber Hooks"),(0,n.kt)("p",null,"To create a BDD test case with Cucumber Hooks, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set up Cucumber hooks in Katalon Studio. See: ",(0,n.kt)("a",{parentName:"p",href:"/create-tests/manage-test-artifacts/working-with-bdd-feature-files-in-katalon-studio#"},"Set up Cucumber hooks"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new test case."),(0,n.kt)("p",{parentName:"li"},"You can refer to this document: ",(0,n.kt)("a",{parentName:"p",href:"/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio"},"Create a new test case in Katalon Studio"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Manual")," view of the new test case, click on the ",(0,n.kt)("strong",{parentName:"p"},"Add")," dropdown button and select ",(0,n.kt)("strong",{parentName:"p"},"Cucumber Keywords"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Create_BDD_Test_Case/images/KS-Add-Cucumber-keyword.png",width:700,alt:"Add Cucumber Keywords"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Run Feature File")," keyword."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Create_BDD_Test_Case/images/KS-select-run-feature-file-keyword.png",width:700,alt:"Select Run Feature File keyword"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click on the Feature file and select ",(0,n.kt)("strong",{parentName:"p"},"Copy ID")," to get the relative path."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Create_BDD_Test_Case/images/KS-Copy-ID-feature-file.png",width:500})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Double-click on the ",(0,n.kt)("strong",{parentName:"p"},"Input")," cell of the ",(0,n.kt)("strong",{parentName:"p"},"Run Feature File")," keyword. In the displayed ",(0,n.kt)("strong",{parentName:"p"},"Input")," dialog, paste the copied relative path from step 3 as the input value."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Create_BDD_Test_Case/images/KS-Feature-file-input-value.png",width:700,alt:"Input feature file value"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the test and verify the message of the Cucumber hooks in the ",(0,n.kt)("strong",{parentName:"p"},"Console")," log:"),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Create_BDD_Test_Case/images/KS-Cucumber-hooks-message.png",width:700,alt:"Cucumber hooks message"}))))}p.isMDXComponent=!0}}]);