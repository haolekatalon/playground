"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[69345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"concept-4591b6f4-5580-4387-a2d3-3363f750e846",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist"},l="[Mobile] Verify Element Exist",a={unversionedId:"concept-4591b6f4-5580-4387-a2d3-3363f750e846",id:"concept-4591b6f4-5580-4387-a2d3-3363f750e846",title:"\\[Mobile\\] Verify Element Exist",description:"Description",source:"@site/docs/concept-4591b6f4-5580-4387-a2d3-3363f750e846.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-4591b6f4-5580-4387-a2d3-3363f750e846.mdx",tags:[],version:"current",frontMatter:{id:"concept-4591b6f4-5580-4387-a2d3-3363f750e846",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Verify Element Checked",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-checked"},next:{title:"\\[Mobile\\] Verify Element Has Attribute",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-has-attribute"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mobile-verify-element-exist"},"[","Mobile","]"," Verify Element Exist"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Verify if a mobile element is present."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Parameter"),(0,i.kt)("th",null,"Parameter Type"),(0,i.kt)("th",null,"Mandatory"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"to"),(0,i.kt)("td",null,"TestObject"),(0,i.kt)("td",null,"Required"),(0,i.kt)("td",null,"Represent a mobile element")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"timeout"),(0,i.kt)("td",null,"Integer"),(0,i.kt)("td",null,"Required"),(0,i.kt)("td",null,"System will wait at most timeout (seconds) to return result")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"flowControl"),(0,i.kt)("td",null,"FailureHandling"),(0,i.kt)("td",null,"Optional"),(0,i.kt)("td",null,"Specify ",(0,i.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"true")," if the element is present; otherwise, ",(0,i.kt)("strong",{parentName:"p"},"false")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You want to verify if 'App' button is presented in 10 seconds timeout."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.util.internal.PathUtil as PathUtil\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(GlobalVariable.G_AndroidApp, false)\n\n'Verify App control is presented in 10 seconds timeout'\nMobile.verifyElementExist(findTestObject('Application/android.widget.TextView - App'), 10)\n\nMobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)\n\nMobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)\n\n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}u.isMDXComponent=!0}}]);