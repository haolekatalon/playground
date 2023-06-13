"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[74812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"concept-97498a50-b1a3-4fc9-9572-50f81d49f1ef",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder"},i="Data-driven testing in Katalon Recorder",l={unversionedId:"concept-97498a50-b1a3-4fc9-9572-50f81d49f1ef",id:"concept-97498a50-b1a3-4fc9-9572-50f81d49f1ef",title:"Data-driven testing in Katalon Recorder",description:"Data-driven testing \\(DDT\\) allows you to execute test cases using data from external data files in table or spreadsheet format. Katalon Recorder facilitates DDT by providing DDT commands and enabling you to bind test cases with data files.",source:"@site/docs/concept-97498a50-b1a3-4fc9-9572-50f81d49f1ef.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-97498a50-b1a3-4fc9-9572-50f81d49f1ef.mdx",tags:[],version:"current",frontMatter:{id:"concept-97498a50-b1a3-4fc9-9572-50f81d49f1ef",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder"},sidebar:"tutorialSidebar",previous:{title:"Writing Custom Script Formatter in Katalon Recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/writing-custom-script-formatter-in-katalon-recorder"},next:{title:"How to implement data-driven testing in a test case with Katalon Recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case-with-katalon-recorder"}},s={},d=[{value:"Data-driven commands",id:"data-driven-commands",level:2},{value:"loadVars",id:"loadvars",level:3},{value:"endLoadVars",id:"endloadvars",level:3},{value:"Data-driven testing process",id:"data-driven-testing-process",level:3},{value:"Data file formats",id:"data-file-formats",level:2},{value:"Data files in CSV format",id:"data-files-in-csv-format",level:3},{value:"Data files in JSON format",id:"data-files-in-json-format",level:3},{value:"Sample projects",id:"sample-projects",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-driven-testing-in-katalon-recorder"},"Data-driven testing in Katalon Recorder"),(0,r.kt)("p",null,"Data-driven testing ","(","DDT",")"," allows you to execute test cases using data from external data files in table or spreadsheet format. Katalon Recorder facilitates DDT by providing DDT commands and enabling you to bind test cases with data files."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Katalon Recorder version 5.6.0 onwards.")),(0,r.kt)("p",null,"This article introduces you to the DDT commands and data file formats supported by Katalon Recorder."),(0,r.kt)("h2",{id:"data-driven-commands"},"Data-driven commands"),(0,r.kt)("p",null,"Katalon Recorder provides two commands for DDT: ",(0,r.kt)("code",null,"loadVars")," and ",(0,r.kt)("code",null,"endLoadVars"),"."),(0,r.kt)("h3",{id:"loadvars"},"loadVars"),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"loadVars")," command starts a loop to repeatedly load the values from the data file specified in the ",(0,r.kt)("strong",{parentName:"p"},"Target")," field."),(0,r.kt)("h3",{id:"endloadvars"},"endLoadVars"),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"endLoadVars")," command terminates the data-driven block. You need to add it to your test; otherwise, you will get an error message."),(0,r.kt)("h3",{id:"data-driven-testing-process"},"Data-driven testing process"),(0,r.kt)("p",null,"When you execute a test containing ",(0,r.kt)("code",null,"loadVars")," and ",(0,r.kt)("code",null,"endLoadVars")," commands, the following process will take place, with ",(0,r.kt)("em",{parentName:"p"},"i")," starting with 1 and ending with the number of rows in the data file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},"ith")," row of the data file will be fetched."),(0,r.kt)("li",{parentName:"ol"},"The values of the row will be mapped to the variables used in the test case."),(0,r.kt)("li",{parentName:"ol"},"The steps between ",(0,r.kt)("code",null,"loadVars")," and ",(0,r.kt)("code",null,"endLoadVars")," will be executed using these mapped values.")),(0,r.kt)("h2",{id:"data-file-formats"},"Data file formats"),(0,r.kt)("p",null,"Katalon Recorder supports two data file formats: CSV and JSON."),(0,r.kt)("h3",{id:"data-files-in-csv-format"},"Data files in CSV format"),(0,r.kt)("p",null,"While performing DDT with a CSV data file, Katalon Recorder navigates the file using the column names, and extracts data from the file, row by row. Therefore, you need to create a CSV file with specific column names."),(0,r.kt)("p",null,"Katalon Recorder also treats CSV column names as case-sensitive."),(0,r.kt)("p",null,"For example, a data-driven test that fills in a form with dates and comments might have a CSV data file as follows:"),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/ddt-guide/KR-Sample-CSV-file.png",alt:"Sample CSV file for Katalon Recorder"}),(0,r.kt)("h3",{id:"data-files-in-json-format"},"Data files in JSON format"),(0,r.kt)("p",null,"Katalon Recorder uses JSON data files with specific syntax. Test data in a JSON file must be organized in an array. Each element ","(","data row",")"," in the array is represented as an object with ",(0,r.kt)("em",{parentName:"p"},"name/value")," pairs; the name specifies the column name, and the value specifies the value in the respective row."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/ddt-guide/KR-DDT-Sample-JSON-syntax.png",alt:"Sample JSON syntax"}),(0,r.kt)("p",null,"For example, a JSON data file with two columns, dates and comments, might be written as follows:"),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/ddt-guide/KR-Sample-JSON-file.png",alt:"Sample JSON file for Katalon Recorder"}),(0,r.kt)("h2",{id:"sample-projects"},"Sample projects"),(0,r.kt)("p",null,"Katalon Recorder comes with a set of built-in sample projects to get you started with DDT."),(0,r.kt)("p",null,"Follow these steps to add a sample project:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Actions")," sidebar, select ",(0,r.kt)("strong",{parentName:"p"},"Sample Projects"),"."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/ddt-guide/KR-Action-sidebar-Sample-Projects.png",alt:"Action sidebar"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the displayed dialog, select the ",(0,r.kt)("strong",{parentName:"p"},"Fill a form with data from CSV file with Sample Test Data")," sample project. Click ",(0,r.kt)("strong",{parentName:"p"},"Add")," to add the project."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/ddt-guide/KR-Sample-Project-dialog.png",alt:"Sample project dialog"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See also"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Katalon Academy course: ",(0,r.kt)("a",{parentName:"li",href:"https://academy.katalon.com/courses/katalon-recorder-data-driven-testing/"},"Data-Driven Testing with Katalon Recorder"),".")))}m.isMDXComponent=!0}}]);