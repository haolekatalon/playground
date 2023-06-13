"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[53846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={id:"concept-13f34cfa-6447-4d5e-821e-a803ac5d3a23",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element"},a="[Mobile] Uncheck Element",l={unversionedId:"concept-13f34cfa-6447-4d5e-821e-a803ac5d3a23",id:"concept-13f34cfa-6447-4d5e-821e-a803ac5d3a23",title:"\\[Mobile\\] Uncheck Element",description:"Description",source:"@site/docs/concept-13f34cfa-6447-4d5e-821e-a803ac5d3a23.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-13f34cfa-6447-4d5e-821e-a803ac5d3a23.mdx",tags:[],version:"current",frontMatter:{id:"concept-13f34cfa-6447-4d5e-821e-a803ac5d3a23",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Unlock Screen",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-unlock-screen"},next:{title:"\\[Mobile\\] Use Fingerprint",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-uncheck-element"},"[","Mobile","]"," Uncheck Element"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Un-check a check-box mobile element ","(","android.widget.CheckBox for Android, UIASwitch for iOS",")"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Parameter Type"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"to"),(0,o.kt)("td",null,"TestObject"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"Represent a mobile element.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"timeout"),(0,o.kt)("td",null,"int"),(0,o.kt)("td",null,"Required"),(0,o.kt)("td",null,"System will wait at most timeout (seconds) to return a result.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"flowControl"),(0,o.kt)("td",null,"FailureHandling"),(0,o.kt)("td",null,"Optional"),(0,o.kt)("td",null,"Specify ",(0,o.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You want to uncheck 'Subscribe' checkbox."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.util.internal.PathUtil as PathUtil\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(GlobalVariable.G_AndroidApp, false)\n\n'Tap and hold app control for 10 seconds'\nMobile.tapAndHold(findTestObject('Application/android.widget.TextView - App'),10, 10)\n\nMobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)\n\nMobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)\n\n'Uncheck subscribe checkbox'\nMobile.uncheckElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)\n\n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}u.isMDXComponent=!0}}]);