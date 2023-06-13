"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[79273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={id:"concept-8e882fa4-afad-4099-ae07-0c89a93b4723",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio"},r="How to check element status in conditional statement in Katalon Studio",s={unversionedId:"concept-8e882fa4-afad-4099-ae07-0c89a93b4723",id:"concept-8e882fa4-afad-4099-ae07-0c89a93b4723",title:"How to check element status in conditional statement in Katalon Studio",description:"In Web UI functional testing, you may want to ensure that an element is clickable, present, or visible before performing further actions on the element. The function used in such a case is verifyElementClickable with this specification:",source:"@site/docs/concept-8e882fa4-afad-4099-ae07-0c89a93b4723.mdx",sourceDirName:".",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio",permalink:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-8e882fa4-afad-4099-ae07-0c89a93b4723.mdx",tags:[],version:"current",frontMatter:{id:"concept-8e882fa4-afad-4099-ae07-0c89a93b4723",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"How to handle dropdown menu in Katalon Studio",permalink:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-dropdown-menu-in-katalon-studio"},next:{title:"Understand waiting keywords in Katalon Studio",permalink:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-check-element-status-in-conditional-statement-in-katalon-studio"},"How to check element status in conditional statement in Katalon Studio"),(0,a.kt)("p",null,"In Web UI functional testing, you may want to ensure that an element is clickable, present, or visible before performing further actions on the element. The function used in such a case is ",(0,a.kt)("strong",{parentName:"p"},"verifyElementClickable")," with this specification:"),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement/verifyElementClickable_1.png",alt:"verifyElementClickable"}),(0,a.kt)("p",null,"The following code block demonstrates how to check the element status in a conditional statement. You may assume that the function WebUI.verifyElementClickable will return ",(0,a.kt)("strong",{parentName:"p"},"true")," if the element is clickable, and ",(0,a.kt)("strong",{parentName:"p"},"false")," if the element is not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if (WebUI.verifyElementClickable(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'))) {\n    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'))\n} else {\n    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue'))\n}\n\n")),(0,a.kt)("p",null,"However, in practice, if the element is not found after timeout, the function does not return false. Instead, the exception below is returned:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Stack trace: com.kms.katalon.core.exception.StepFailedException: \nUnable to verify object 'Object Repository/Test Objects/Pages/Login Page/elContinue - Wrong' to be clickable (Root cause: Web element with id: 'Object Repository/Test Objects/Pages/Login Page/elContinue - Wrong' located by 'By.xpath: //button[.='Continue - Wrong']' not found)\n\n")),(0,a.kt)("p",null,"You may find it confusing since the function has been used with the proper syntax and purpose as specified in the API documentation. Here\u2019s why: In Katalon Studio, there are two overloading functions named ",(0,a.kt)("strong",{parentName:"p"},"verifyElementClickable"),"."),(0,a.kt)("p",null,"Function 1 with default FailureHandling: ",(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement/verifyElementClickable_1.png",alt:"Function 1 with default FailureHandling"})),(0,a.kt)("p",null,"Function 2 wich custom FailureHandling: ",(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement/verifyElementClickable_2.png",alt:"Function 2 wich custom FailureHandling"})),(0,a.kt)("p",null,"The first function has a default ",(0,a.kt)("strong",{parentName:"p"},"FailureHandling")," parameter; while the second allows you to customize the parameter. This will determine the function\u2019s behavior in some specific situations."),(0,a.kt)("p",null,"If you expect the function to return ",(0,a.kt)("strong",{parentName:"p"},"false")," if the element is not found, you will have to use the second function with the ",(0,a.kt)("strong",{parentName:"p"},"FailureHandling.OPTIONAL")," parameter. The following script will work with your expectation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if (WebUI.verifyElementClickable(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'), FailureHandling.OPTIONAL)) {\n    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue - Wrong'))\n} else {\n    WebUI.click(findTestObject('Test Objects/Pages/Login Page/elContinue'))\n}\n\n\n")),(0,a.kt)("p",null,"We hope this tip will help resolve your problem when checking an element status before performing actions on it."))}p.isMDXComponent=!0}}]);