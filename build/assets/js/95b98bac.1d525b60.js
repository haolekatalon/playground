"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[92109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={id:"concept-759f8d0e-81b5-4960-9107-6a61a0777867",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint"},a="[Mobile] Use Fingerprint",l={unversionedId:"concept-759f8d0e-81b5-4960-9107-6a61a0777867",id:"concept-759f8d0e-81b5-4960-9107-6a61a0777867",title:"\\[Mobile\\] Use Fingerprint",description:"-   Katalon Studio version 8.3.0 onwards.",source:"@site/docs/concept-759f8d0e-81b5-4960-9107-6a61a0777867.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-759f8d0e-81b5-4960-9107-6a61a0777867.mdx",tags:[],version:"current",frontMatter:{id:"concept-759f8d0e-81b5-4960-9107-6a61a0777867",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Uncheck Element",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element"},next:{title:"\\[Mobile\\] Verify Image Present",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-image-present"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-use-fingerprint"},"[","Mobile","]"," Use Fingerprint"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Katalon Studio version 8.3.0 onwards."))),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Simulate a fingerprint touch event on Android emulators."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To enable this keyword, at least one fingerprint must be enrolled on the emulator via Android Debug Bridge ","(","adb",")","."),(0,o.kt)("li",{parentName:"ul"},"To learn more about adb, refer to this document on the Android developer site: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"Android Debug Bridge"),"."),(0,o.kt)("li",{parentName:"ul"},"To learn how to enroll a fingerprint with adb, please refer to the following Android developer guide: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/about/versions/marshmallow/android-6.0.html#fingerprint-authentication"},"Fingerprint Authentication.")))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Parameter Type"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"fingerprintId"),(0,o.kt)("td",null,"Int"),(0,o.kt)("td",null,"Yes"),(0,o.kt)("td",null,"An Android fingerprint ID (from 1 to 10).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"No"),(0,o.kt)("td",null,"Specify failure handling schema to determine whether the execution should be allowed to continue or stop. Refer to: ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"Failure Handling"),".")))),(0,o.kt)("h2",{id:"exceptions"},"Exceptions"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Throw"),(0,o.kt)("th",null,"Precondition"),(0,o.kt)("th",null,"Message")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"IllegalArgumentException")),(0,o.kt)("td",null,"If the input value for Android fingerprint ID is invalid."),(0,o.kt)("td",null,"Please enter a valid Android fingerprint ID (from 1 to 10).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"StepFailedException")),(0,o.kt)("td",null,"If the ",(0,o.kt)("code",null,"useFingerprint")," keyword is not performed on an Android emulator."),(0,o.kt)("td",null,"The ",(0,o.kt)("code",null,"useFingerprint")," keyword supports Android emulators only.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"Warning")),(0,o.kt)("td",null,"If the ",(0,o.kt)("code",null,"useFingerprint")," keyword is run on unsupported environments."),(0,o.kt)("td",null,"The ",(0,o.kt)("code",null,"useFingerprint")," keyword is not available for physical mobile devices.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint \nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase \nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData \nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject \nimport static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject \nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint \nimport com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile \nimport com.kms.katalon.core.model.FailureHandling as FailureHandling \nimport com.kms.katalon.core.testcase.TestCase as TestCase import com.kms.katalon.core.testdata.TestData as TestData \nimport com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW \nimport com.kms.katalon.core.testobject.TestObject as TestObject \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI \nimport com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows \nimport internal.GlobalVariable as GlobalVariable import org.openqa.selenium.Keys as Keys \n\n'Start application on the current selected Android emulator'\nMobile.startApplication('/Users/katalon/Downloads/Fingerprint.apk', true) \n\n'Simulate fingerprint touch with the desired fingerprint ID' \nMobile.useFingerprint(1) \n\n'Authentication is valid, do some actions' \nMobile.delay(10) \n\n'Close application on the current selected Android emulator' \nMobile.closeApplication()\n")))}p.isMDXComponent=!0}}]);