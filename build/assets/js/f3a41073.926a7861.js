"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[42804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={id:"concept-b1e8da56-e3cd-47f0-b3b0-1aef24ca0c93",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema"},i="[WS] Validate an XML string against a schema",s={unversionedId:"concept-b1e8da56-e3cd-47f0-b3b0-1aef24ca0c93",id:"concept-b1e8da56-e3cd-47f0-b3b0-1aef24ca0c93",title:"\\[WS\\] Validate an XML string against a schema",description:"Requirements",source:"@site/docs/concept-b1e8da56-e3cd-47f0-b3b0-1aef24ca0c93.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-b1e8da56-e3cd-47f0-b3b0-1aef24ca0c93.mdx",tags:[],version:"current",frontMatter:{id:"concept-b1e8da56-e3cd-47f0-b3b0-1aef24ca0c93",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema"},sidebar:"tutorialSidebar",previous:{title:"\\[WS\\] Validate JSON string against a schema",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-json-string-against-a-schema"},next:{title:"\\[WS\\] Verify Element Property Value",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-property-value"}},o={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validate an XML Object against an XML Schema",id:"validate-an-xml-object-against-an-xml-schema",level:3},{value:"Validate the Response against an XML Schema",id:"validate-the-response-against-an-xml-schema",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ws-validate-an-xml-string-against-a-schema"},"[","WS","]"," Validate an XML string against a schema"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Katalon Studio version 8.4.0 onwards.")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Validate an XML response body, request body, or string against an XML schema. The XML schema input can be an XML string, URL, or file path."),(0,l.kt)("p",null,"Keyword name: ",(0,l.kt)("code",null,"WS.validateXmlAgainstSchema")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"validate-an-xml-object-against-an-xml-schema"},"Validate an XML Object against an XML Schema"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Parameter"),(0,l.kt)("th",null,"Parameter Type"),(0,l.kt)("th",null,"Mandatory"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"xmlObject"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Required"),(0,l.kt)("td",null,"Specify the XML object that needs to be validated.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"xmlSchema"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Required"),(0,l.kt)("td",null,"Specify the XML schema used to validate the XML object.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"flowControl"),(0,l.kt)("td",null,"FailureHandling"),(0,l.kt)("td",null,"Optional"),(0,l.kt)("td",null,"Specify ",(0,l.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,l.kt)("h3",{id:"validate-the-response-against-an-xml-schema"},"Validate the Response against an XML Schema"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Parameter"),(0,l.kt)("th",null,"Parameter Type"),(0,l.kt)("th",null,"Mandatory"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"response"),(0,l.kt)("td",null,"ResponseObject"),(0,l.kt)("td",null,"Required"),(0,l.kt)("td",null,"Specify the response object that needs to be validated.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"xmlSchema"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Required"),(0,l.kt)("td",null,"Specify the XML schema used to validate the response object.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"flowControl"),(0,l.kt)("td",null,"FailureHandling"),(0,l.kt)("td",null,"Optional"),(0,l.kt)("td",null,"Specify ",(0,l.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Parameter Type"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"boolean"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"true"),": the response passes the validation."),(0,l.kt)("li",null,(0,l.kt)("code",null,"false"),": the response doesn't pass the validation.")))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"If Katalon Studio cannot find the schema file or the response doesn't pass the validation, throw: ",(0,l.kt)("code",null,"StepFailedException"),"."))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'res = WS.sendRequest(findTestObject(\'XML\'))\n\nString xml = \'\'\'<?xml version="1.0" encoding="utf-8"?>\n<List>\n    <item>\n        <id>3</id>\n        <username>James Johnson</username>\n        <password>789</password>\n        <gender>FEMALE</gender>\n        <age>75</age>\n        <avatar/>\n    </item>\n</List>\'\'\'\n\nString xmlFile = FileUtils.readFileToString(new File("example/xml/person.xml"));\n\nWS.validateXmlAgainstSchema(res, "example/xml/person.xsd");\nWS.validateXmlAgainstSchema(xml, "example/xml/person.xsd");\nWS.validateXmlAgainstSchema(xmlFile, "http://localhost:8080/api/users/xsd", FailureHandling.STOP_ON_FAILURE);\n\n')))}p.isMDXComponent=!0}}]);