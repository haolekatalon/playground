"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[79210],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=o.createContext({}),i=function(t){var e=o.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=i(t.components);return o.createElement(l.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=i(a),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||n;return a?o.createElement(k,s(s({ref:e},c),{},{components:a})):o.createElement(k,s({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,s=new Array(n);s[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:r,s[1]=p;for(var i=2;i<n;i++)s[i]=a[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87194:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var o=a(87462),r=(a(67294),a(3905));const n={id:"concept-26f00b4f-efd7-4971-b600-3d7868f8c8f4",slug:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops"},s="Upload test reports from Mocha to Katalon TestOps",p={unversionedId:"concept-26f00b4f-efd7-4971-b600-3d7868f8c8f4",id:"concept-26f00b4f-efd7-4971-b600-3d7868f8c8f4",title:"Upload test reports from Mocha to Katalon TestOps",description:"You can submit test results from the Mocha framework to Katalon TestOps.",source:"@site/docs/concept-26f00b4f-efd7-4971-b600-3d7868f8c8f4.mdx",sourceDirName:".",slug:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops",permalink:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-26f00b4f-efd7-4971-b600-3d7868f8c8f4.mdx",tags:[],version:"current",frontMatter:{id:"concept-26f00b4f-efd7-4971-b600-3d7868f8c8f4",slug:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops"},sidebar:"tutorialSidebar",previous:{title:"Upload JUnit and report files to using command line",permalink:"/analyze/reports/upload-test-reports/upload-junit-and-report-files-to-using-command-line"},next:{title:"Upload test reports from Jest to Katalon TestOps",permalink:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jest-to-katalon-testops"}},l={},i=[],c={toc:i},m="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-test-reports-from-mocha-to-katalon-testops"},"Upload test reports from Mocha to Katalon TestOps"),(0,r.kt)("p",null,"You can submit test results from the Mocha framework to Katalon TestOps."),(0,r.kt)("p",null,"You can download this sample project: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio/testops-report-js.git"},"Katalon TestOps JavaScript Reporters"),"."),(0,r.kt)("p",null,"Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your Mocha file in a source-code editor, such as ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_open_mocha.png",alt:"open mocha in vsc"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("em",{parentName:"p"},"package.json")," file."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_package_json.png",alt:"open json file"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the ",(0,r.kt)("code",null,"npm install")," command, then press ",(0,r.kt)("em",{parentName:"p"},"Enter")," and wait for it to run."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_mocha_json_install.png",alt:"run command"}),(0,r.kt)("p",{parentName:"li"},"While waiting, go to the Katalon TestOps website.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to ",(0,r.kt)("a",{parentName:"p",href:"https://testops.katalon.io/login"},"Katalon TestOps")," and go to your Project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configurations")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Integrations"),"."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Integrations")," page appears.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Mocha")," in the dropdown list."),(0,r.kt)("p",{parentName:"li"},"The Mocha page appears as below."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/mocha-page-1.png",alt:"mocha page 1"}),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/mocha-page-2.png",alt:"mocha page 2"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the command line in the ",(0,r.kt)("strong",{parentName:"p"},"Install dependency")," section and paste it in the ",(0,r.kt)("em",{parentName:"p"},"package.json")," file, then press ",(0,r.kt)("em",{parentName:"p"},"Enter")," to run."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_mocha_paste_bash.png",alt:"install dependency command"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file with the name ",(0,r.kt)("em",{parentName:"p"},"testops-config.json")," in your source-code editor."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_creat_testops_config.png",alt:"create vsc file"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the content in the ",(0,r.kt)("strong",{parentName:"p"},"Configure TestOps plugin")," section in Katalon TestOps and paste it in the newly-created ",(0,r.kt)("em",{parentName:"p"},"testops-config.json")," file in your source-code editor. Save this file."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_paste_testops_config.png",alt:"configure testops in vsc"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the command in the ",(0,r.kt)("strong",{parentName:"p"},"Run tests and upload reports")," section in Katalon TestOps and paste it in the ",(0,r.kt)("em",{parentName:"p"},"testops-config.json")," file in your source-code editor, then press ",(0,r.kt)("em",{parentName:"p"},"Enter")," to run."),(0,r.kt)("p",{parentName:"li"},"You have uploaded reports.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the ",(0,r.kt)("code",null,"npm test")," command in the ",(0,r.kt)("em",{parentName:"p"},"testops-config.json")," file in your source-code editor, and press ",(0,r.kt)("strong",{parentName:"p"},"Enter")," to run tests."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-mocha/kt_vs_code_npm_test.png",alt:"configure testops in vsc"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Test Execution")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Test Run Calendar"),"."),(0,r.kt)("p",{parentName:"li"},"Your uploaded Test Runs now display here."))))}d.isMDXComponent=!0}}]);