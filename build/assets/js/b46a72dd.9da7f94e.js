"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(b,l(l({ref:t},d),{},{components:n})):o.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={id:"concept-ee206ebc-83a6-49fc-9657-1eabe7803646",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width"},l="[Mobile] Get Element Width",a={unversionedId:"concept-ee206ebc-83a6-49fc-9657-1eabe7803646",id:"concept-ee206ebc-83a6-49fc-9657-1eabe7803646",title:"\\[Mobile\\] Get Element Width",description:"Description",source:"@site/docs/concept-ee206ebc-83a6-49fc-9657-1eabe7803646.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-ee206ebc-83a6-49fc-9657-1eabe7803646.mdx",tags:[],version:"current",frontMatter:{id:"concept-ee206ebc-83a6-49fc-9657-1eabe7803646",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Get Element Top Position",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-top-position"},next:{title:"\\[Mobile\\] Get Current Orientation",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-current-orientation"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mobile-get-element-width"},"[","Mobile","]"," Get Element Width"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Get the width of a mobile element"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Parameter Type"),(0,r.kt)("th",null,"Mandatory"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"to"),(0,r.kt)("td",null,"TestObject"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"Represent a mobile element")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"timeout"),(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"Required"),(0,r.kt)("td",null,"System will wait at most timeout (seconds) to return result")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"flowControl"),(0,r.kt)("td",null,"FailureHandling"),(0,r.kt)("td",null,"Optional"),(0,r.kt)("td",null,"Specify ",(0,r.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param Type"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"width of a mobile element")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You want to get the width of a button in 10 seconds timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport internal.GlobalVariable as GlobalVariable\nimport com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.util.internal.PathUtil as PathUtil\n\n'Get full directory\\'s path of android application'\ndef appPath = PathUtil.relativeToAbsolutePath(GlobalVariable.G_AndroidApp, RunConfiguration.getProjectDir())\n\n'Start application on current selected android\\'s device'\nMobile.startApplication(appPath, false)\n\nMobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)\n\nMobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)\n\nMobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)\n\n'Drag and drop a button into another frame'\nMobile.getElementWidth(findTestObject('Application/App/Activity/android.widget.Button'), 10)\n\n'Close application on current selected android\\'s device'\nMobile.closeApplication()\n\n")))}u.isMDXComponent=!0}}]);