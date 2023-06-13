"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[73699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,k=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(k,s(s({ref:t},d),{},{components:n})):r.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"concept-a9972251-8740-46bd-84b4-936cdd6e1d7e",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text"},s="[WS] Verify Element Text",l={unversionedId:"concept-a9972251-8740-46bd-84b4-936cdd6e1d7e",id:"concept-a9972251-8740-46bd-84b4-936cdd6e1d7e",title:"\\[WS\\] Verify Element Text",description:"Description",source:"@site/docs/concept-a9972251-8740-46bd-84b4-936cdd6e1d7e.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-a9972251-8740-46bd-84b4-936cdd6e1d7e.mdx",tags:[],version:"current",frontMatter:{id:"concept-a9972251-8740-46bd-84b4-936cdd6e1d7e",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text"},sidebar:"tutorialSidebar",previous:{title:"\\[WS\\] Verify Elements Count",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-elements-count"},next:{title:"\\[WS\\] Verify Response Status Code",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ws-verify-element-text"},"[","WS","]"," Verify Element Text"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Verify an element with expected text appeared in the returned data from a web service call."),(0,o.kt)("p",null,"Keyword name: ",(0,o.kt)("code",null,"WS.verifyElementText")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Parameter Type"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"response"),(0,o.kt)("td",null,"ResponseObject"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"The object that represents an HTTP response.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"locator"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"The element locator that Katalon uses to look for the expected data. To learn more about element locators, you can refer to this document: ",(0,o.kt)("a",{href:"/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio"},"Handle Response messages"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"text"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"The expected text of element you want to verify in the responded data (usually JSON/XML)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Optional"),(0,o.kt)("td",null,"Specify failure handling schema to determine whether the execution should be allowed to continue or stop. To learn more about failure handling settings, you can refer to this document: ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio#"},"Failure handling"),".")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"true"),", if your element text is found, otherwise; ",(0,o.kt)("strong",{parentName:"li"},"false"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Given the following sample ",(0,o.kt)("strong",{parentName:"p"},"SOAP","_","TransactionResult")," SOAP object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<env:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">\n  <env:Body>\n    <ns:PreAuthorizeResponse xmlns:ns="beep" xmlns:ns2="bop" xmlns:xlink="foo" >\n      <ns:Receipt>\n        <xlink:DataKey>123</xlink:DataKey>\n        <xlink:CustomerId>12345</xlink:CustomerId>\n        <xlink:PaymentId>123456</xlink:PaymentId>\n        <xlink:TransactionResult>Approved</xlink:TransactionResult>\n\n\n')),(0,o.kt)("p",null,"We want to verify the ",(0,o.kt)("code",null,"TransactionResult")," element in the SOAP response after sending the request. We use the ",(0,o.kt)("code",null,"WS.verifyElementText()")," keyword as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.testobject.ConditionType as ConditionType\nimport com.kms.katalon.core.testobject.RequestObject as RequestObject\nimport com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WebAPI\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\n\n'Send a SOAP request and returns its response'\ndef response = WS.sendRequest(findTestObject('SOAP_TransactionResult'))\n\n'Verify the selected element in the response'\nWS.verifyElementText(response, 'PreAuthorizeResponse.Receipt.TransactionResult', 'Approved')\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Katalon checks if the XML element content text is strictly equal to the expected value. For example, if there is whitespace after the ",(0,o.kt)("code",null,"Approved")," value, you need to add it to the third argument as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Katalon checks if the XML element content text is strictly equal to the expected value. For example, if there is whitespace after the ",(0,o.kt)("code",null,"Approved")," value, you need to add it to the third argument as below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"groovy WS.verifyElementText(response, 'PreAuthorizeResponse.Receipt.TransactionResult', 'Approved  ')\n")))),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"WS.verifyElementText(response, 'PreAuthorizeResponse.Receipt.TransactionResult', 'Approved ')\n"))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-property-value"},"[","WS","]"," Verify Element Property Value"))))}u.isMDXComponent=!0}}]);