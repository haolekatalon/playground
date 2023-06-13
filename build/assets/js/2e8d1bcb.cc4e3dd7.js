"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[9666],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=o.createContext({}),i=function(t){var e=o.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=i(t.components);return o.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=i(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return a?o.createElement(k,s(s({ref:e},c),{},{components:a})):o.createElement(k,s({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,s=new Array(n);s[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:r,s[1]=p;for(var i=2;i<n;i++)s[i]=a[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29736:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var o=a(87462),r=(a(67294),a(3905));const n={id:"concept-0e818e32-a8e9-4b05-8686-5743808b2113",slug:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops"},s="Upload test reports from Pytest to Katalon TestOps",p={unversionedId:"concept-0e818e32-a8e9-4b05-8686-5743808b2113",id:"concept-0e818e32-a8e9-4b05-8686-5743808b2113",title:"Upload test reports from Pytest to Katalon TestOps",description:"You can submit test results from the Pytest framework to Katalon TestOps.",source:"@site/docs/concept-0e818e32-a8e9-4b05-8686-5743808b2113.mdx",sourceDirName:".",slug:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops",permalink:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-0e818e32-a8e9-4b05-8686-5743808b2113.mdx",tags:[],version:"current",frontMatter:{id:"concept-0e818e32-a8e9-4b05-8686-5743808b2113",slug:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops"},sidebar:"tutorialSidebar",previous:{title:"Upload test reports from Jasmine to Katalon TestOps",permalink:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jasmine-to-katalon-testops"},next:{title:"Share test reports via email in Katalon Studio",permalink:"/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio"}},l={},i=[],c={toc:i},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-test-reports-from-pytest-to-katalon-testops"},"Upload test reports from Pytest to Katalon TestOps"),(0,r.kt)("p",null,"You can submit test results from the Pytest framework to Katalon TestOps."),(0,r.kt)("p",null,"You can download this sample project: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio/testops-report-js.git"},"TestOps Pytest sample"),"."),(0,r.kt)("p",null,"Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your Pytest file in a source-code editor, such as ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/kt_open_file_pytest.png",alt:"open pytest in vsc"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to ",(0,r.kt)("a",{parentName:"p",href:"https://testops.katalon.io/login"},"Katalon TestOps")," and go to your Project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Configurations")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Integrations"),"."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Integrations")," page appears.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Pytest")," in the dropdown list."),(0,r.kt)("p",{parentName:"li"},"The Pytest page appears as below."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/pytest-page-1.png",alt:"pytest page 1"}),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/pytest-page-2.png",alt:"pytest page 2"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the command line in the ",(0,r.kt)("strong",{parentName:"p"},"Install dependency")," section and paste it in the Pytest file's terminal in your source-code editor to install the Katalon TestOps plugin.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file named ",(0,r.kt)("em",{parentName:"p"},"testops-config.json")," in your source-code editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the command line in the ",(0,r.kt)("strong",{parentName:"p"},"TestOps Credentials & Project")," section on the Pytest page and paste it in the ",(0,r.kt)("em",{parentName:"p"},"testops-config.json")," file in your source-code editor."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/kt_paste_testops_config_1.png",alt:"testops config in vsc"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file named ",(0,r.kt)("em",{parentName:"p"},"conftest.py"),"."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/kt_open_conftest_py_1.png",alt:"conftest py file"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the command in the ",(0,r.kt)("strong",{parentName:"p"},"Add Report")," section on the Pytest page and paste it in the ",(0,r.kt)("em",{parentName:"p"},"conftest.py")," file in your source-code editor. Save this file."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/kt_paste_conftest_py_1.png",alt:"paste content to conftest file"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the ",(0,r.kt)("code",null,"pytest")," command and press ",(0,r.kt)("em",{parentName:"p"},"Enter")," to run tests."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/kt-upload-test-pytest/kt_command_python_test_1.png",alt:"run with pytest"}),(0,r.kt)("p",{parentName:"li"},"You have run tests and uploaded their reports via Pytest.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Test Execution")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Test Run Calendar"),"."),(0,r.kt)("p",{parentName:"li"},"Your uploaded Test Runs now display here."))))}u.isMDXComponent=!0}}]);