"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[46473],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>m});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function s(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var i=n.createContext({}),o=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):s(s({},e),t)),l},d=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=o(l),k=a,m=c["".concat(i,".").concat(k)]||c[k]||p[k]||r;return l?n.createElement(m,s(s({ref:e},d),{},{components:l})):n.createElement(m,s({ref:e},d))}));function m(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,s=new Array(r);s[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[c]="string"==typeof t?t:a,s[1]=u;for(var o=2;o<r;o++)s[o]=l[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},35954:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=l(87462),a=(l(67294),l(3905));const r={id:"concept-ea6783a8-f646-4bbf-9d49-87a2de2572b3",slug:"/create-tests/create-test-cases/value-types-in-katalon-studio"},s="Value types in Katalon Studio",u={unversionedId:"concept-ea6783a8-f646-4bbf-9d49-87a2de2572b3",id:"concept-ea6783a8-f646-4bbf-9d49-87a2de2572b3",title:"Value types in Katalon Studio",description:"While designing automation tests in Katalon Studio, you might need to configure data for certain test steps, such as:",source:"@site/docs/concept-ea6783a8-f646-4bbf-9d49-87a2de2572b3.mdx",sourceDirName:".",slug:"/create-tests/create-test-cases/value-types-in-katalon-studio",permalink:"/create-tests/create-test-cases/value-types-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-ea6783a8-f646-4bbf-9d49-87a2de2572b3.mdx",tags:[],version:"current",frontMatter:{id:"concept-ea6783a8-f646-4bbf-9d49-87a2de2572b3",slug:"/create-tests/create-test-cases/value-types-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Generate test steps in Katalon Studio script view",permalink:"/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view"},next:{title:"Statements in Katalon Studio overview",permalink:"/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview"}},i={},o=[],d={toc:o},c="wrapper";function p(t){let{components:e,...l}=t;return(0,a.kt)(c,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"value-types-in-katalon-studio"},"Value types in Katalon Studio"),(0,a.kt)("p",null,"While designing automation tests in Katalon Studio, you might need to configure data for certain test steps, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pass input parameters to a test step."),(0,a.kt)("li",{parentName:"ul"},"Get the output value from a test step.")),(0,a.kt)("p",null,"You can select from a wide range of value types supported by Katalon Studio as below:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Constant"),(0,a.kt)("td",null,"The data is a value that will not change over time.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Variable"),(0,a.kt)("td",null,"The data is a value that might be changed during execution. This type of data can only be referred to within the scope of the test case where it is defined.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Global Variable"),(0,a.kt)("td",null,"The data is a value that might be changed during execution. This type of data can be referred to anywhere in the project.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Test Data Value"),(0,a.kt)("td",null,"The data is a value coming from a test data file.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Binary"),(0,a.kt)("td",null,"The data is a binary expression.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Boolean"),(0,a.kt)("td",null,"The data is a Boolean value that can be evaluated from a Boolean expression.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Test Case"),(0,a.kt)("td",null,"The data is a test case.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Test Data"),(0,a.kt)("td",null,"The data is a test data file.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Test Object"),(0,a.kt)("td",null,"The data is a test object.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Method Call"),(0,a.kt)("td",null,"The data is a method call.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Property"),(0,a.kt)("td",null,"The data is a public property value of an object.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"List"),(0,a.kt)("td",null,"The data is a list of values.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Dictionary"),(0,a.kt)("td",null,"The data is a collection of keys and values.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Number"),(0,a.kt)("td",null,"This is a numeric value of which data type can be short, long, integer, double, float, byte.")))),(0,a.kt)("p",null,"This list describes how to provide data for each data type:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value Type"),(0,a.kt)("th",null,"How to provide value for the property?")),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"String"),(0,a.kt)("li",null,"Integer"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Enter value directly into the ",(0,a.kt)("strong",null,"Value")," cell."),(0,a.kt)("p",null,(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/type-string.png",width:150})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Variable"),(0,a.kt)("li",null,"Global Variable"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Select preferred option from the ",(0,a.kt)("strong",null,"Value")," drop-down list."),(0,a.kt)("p",null,(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/ks-variable.png",width:400})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Boolean"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Select preferred option from the ",(0,a.kt)("strong",null,"Value")," drop-down list."),(0,a.kt)("p",null,(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/ks-boolean.png",width:200})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"List"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("strong",null,"Value")," cell."),(0,a.kt)("li",null,(0,a.kt)("p",null,"The ",(0,a.kt)("strong",null,"List Property Builder")," displays.")),(0,a.kt)("li",null,(0,a.kt)("p",null,"Add new properties to the list, then click ",(0,a.kt)("strong",null,"OK")," to save."),(0,a.kt)("p",null,(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/new-properties.png",width:400}))),(0,a.kt)("li",null,(0,a.kt)("p",null,"The defined values are added in the ",(0,a.kt)("strong",null,"Value")," cell:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/ks-value.png",width:400})))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Dictionary"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("strong",null,"Value")," cell."),(0,a.kt)("li",null,(0,a.kt)("p",null,"The ",(0,a.kt)("strong",null,"Dictionary Property Builder")," displays.")),(0,a.kt)("li",null,(0,a.kt)("p",null,"Add new properties to the list, then click ",(0,a.kt)("strong",null,"OK")," to save.",(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/ks-dictionary-builder.png",width:400}))),(0,a.kt)("li",null,"The defined values are added in the ",(0,a.kt)("strong",null,"Value")," cell:",(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/ks-defined-dictionary.png",width:400}))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Number"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Enter value directly into the ",(0,a.kt)("strong",null,"Value")," cell. ",(0,a.kt)("img",{src:"/doc_images/Documents/Create_tests/Create_Test_Cases/Value_Types/image/type-number.png",width:150})))))))}p.isMDXComponent=!0}}]);