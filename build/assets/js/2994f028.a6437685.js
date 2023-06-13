"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[51563],{3905:(t,e,o)=>{o.d(e,{Zo:()=>i,kt:()=>f});var a=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,r=function(t,e){if(null==t)return{};var o,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)o=l[a],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)o=l[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):n(n({},e),t)),o},i=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var o=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),d=u(o),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return o?a.createElement(f,n(n({ref:e},i),{},{components:o})):a.createElement(f,n({ref:e},i))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=o.length,n=new Array(l);n[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[d]="string"==typeof t?t:r,n[1]=s;for(var u=2;u<l;u++)n[u]=o[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},78108:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=o(87462),r=(o(67294),o(3905));const l={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-02e2a06b-d534-4c2c-a628-540cea8d5dda",slug:"/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually"},n="Upload test results from Katalon Studio to Katalon TestOps manually",s={unversionedId:"concept-02e2a06b-d534-4c2c-a628-540cea8d5dda",id:"concept-02e2a06b-d534-4c2c-a628-540cea8d5dda",title:"Upload test results from Katalon Studio to Katalon TestOps manually",description:"Upload test results from Katalon Studio to Katalon TestOps manually",source:"@site/docs/concept-02e2a06b-d534-4c2c-a628-540cea8d5dda.mdx",sourceDirName:".",slug:"/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually",permalink:"/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-02e2a06b-d534-4c2c-a628-540cea8d5dda.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-02e2a06b-d534-4c2c-a628-540cea8d5dda",slug:"/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually"},sidebar:"tutorialSidebar",previous:{title:"Generate screen-based videos in Katalon Studio reports",permalink:"/analyze/reports/generate-test-reports/generate-screen-based-videos-in-katalon-studio-reports"},next:{title:"Upload JUnit and Katalon Studio reports to TestOps manually",permalink:"/analyze/reports/upload-test-reports/upload-junit-and-katalon-studio-reports-to-testops-manually"}},p={},u=[{value:"Upload test results from Katalon Studio to Katalon TestOps manually",id:"upload-test-results-from-katalon-studio-to-katalon-testops-manually-1",level:2},{value:"Upload local test report files to Katalon TestOps",id:"upload-local-test-report-files-to-katalon-testops",level:2}],i={toc:u},d="wrapper";function c(t){let{components:e,...o}=t;return(0,r.kt)(d,(0,a.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-test-results-from-katalon-studio-to-katalon-testops-manually"},"Upload test results from Katalon Studio to Katalon TestOps manually"),(0,r.kt)("h2",{id:"upload-test-results-from-katalon-studio-to-katalon-testops-manually-1"},"Upload test results from Katalon Studio to Katalon TestOps manually"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Katalon Studio version 7.0.0 onwards supports video capture of test results when uploading them to Katalon TestOps."))),(0,r.kt)("p",null,"Once executed in Katalon Studio, the test results are automatically uploaded to Katalon TestOps. If the test results fail to upload automatically, you can also upload them manually."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Katalon Studio and go to the project you are working on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Test Suites")," or ",(0,r.kt)("strong",{parentName:"p"},"Test Suite Collection"),", choose your test suite, then switch to the ",(0,r.kt)("strong",{parentName:"p"},"Result")," tab."),(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/KS-TESTOPS-Upload-result-manually.png"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Katalon TestOps")," dropdown menu at the top right corner and select ",(0,r.kt)("strong",{parentName:"p"},"Upload"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the Team and Project you want to upload test results to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Upload"),"."))),(0,r.kt)("p",null,"You have uploaded test results manually to Katalon TestOps from Katalon Studio."),(0,r.kt)("h2",{id:"upload-local-test-report-files-to-katalon-testops"},"Upload local test report files to Katalon TestOps"),(0,r.kt)("p",null,"Katalon TestOps ",(0,r.kt)("strong",{parentName:"p"},"Reports")," module has a ",(0,r.kt)("strong",{parentName:"p"},"Files")," section, where you see the test results uploaded from Katalon Studio. You can also upload local files from your computer to ",(0,r.kt)("strong",{parentName:"p"},"Files")," if you want to have extra details to the test reports, such as UI images, diff files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate ",(0,r.kt)("strong",{parentName:"p"},"Reports")," folder within ",(0,r.kt)("strong",{parentName:"p"},"Text Explorer")," on the right hand side of Katalon Studio. Right-click the test report folder and select ",(0,r.kt)("strong",{parentName:"p"},"Open containing folder"),"."),(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/image/KS-openning_Reports_folder.png"}),(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/image/KS-openning_Reports_folder.png"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Place the local file into the opened folder."),(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/image/KS-place_test_report_file_into_folder.png"}),(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/image/KS-place_test_report_file_into_folder.png"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Katalon TestOps dropdown menu at the top right corner and select ",(0,r.kt)("strong",{parentName:"p"},"Upload"),". ",(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/image/KS-upload_report_files.png",alt:"upload test"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the Team and Project where you want to upload test results and click ",(0,r.kt)("strong",{parentName:"p"},"Upload"),".",(0,r.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Upload_Test_Reports/Upload_test_results_from_KS_to_TestOps/image/KS-choose_project_and_upload_report_files.png",alt:"choose report files and upload"})))),(0,r.kt)("p",null,"You have uploaded local files manually to Katalon TestOps from Katalon Studio."))}c.isMDXComponent=!0}}]);