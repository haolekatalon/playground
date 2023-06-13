"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[77187],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=a,y=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"concept-3582618f-74e5-49d4-b7bd-f9d1e84a4a9d",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text"},i="[Mobile] Set Encrypted Text",l={unversionedId:"concept-3582618f-74e5-49d4-b7bd-f9d1e84a4a9d",id:"concept-3582618f-74e5-49d4-b7bd-f9d1e84a4a9d",title:"\\[Mobile\\] Set Encrypted Text",description:"-   Starting from version 7.2.0, this keyword is available for Mobile testing on Katalon Studio.",source:"@site/docs/concept-3582618f-74e5-49d4-b7bd-f9d1e84a4a9d.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-3582618f-74e5-49d4-b7bd-f9d1e84a4a9d.mdx",tags:[],version:"current",frontMatter:{id:"concept-3582618f-74e5-49d4-b7bd-f9d1e84a4a9d",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Select List Item By Label",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-label"},next:{title:"\\[Mobile\\] Set Slider Value",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value"}},p={},s=[{value:"setEncryptedText",id:"setencryptedtext",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mobile-set-encrypted-text"},"[","Mobile","]"," Set Encrypted Text"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Starting from ",(0,a.kt)("strong",{parentName:"li"},"version 7.2.0"),", this keyword is available for Mobile testing on Katalon Studio."))),(0,a.kt)("h2",{id:"setencryptedtext"},"setEncryptedText"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description"),": Enter an encrypted text in an input field and clear the existing value of the input field. To encrypt a raw text, from the main menu, ",(0,a.kt)("strong",{parentName:"p"},"Help ",">"," Encrypt Text"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Keyword syntax"),": Mobile.setEncryptedText","(","testObject, encryptedText, timeout, flowControl",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: testObject"),(0,a.kt)("li",{parentName:"ul"},"Description: Represent a mobile element."),(0,a.kt)("li",{parentName:"ul"},"Parameter Type: TestObject"),(0,a.kt)("li",{parentName:"ul"},"Mandatory: Required"),(0,a.kt)("li",{parentName:"ul"},"Name: encryptedText"),(0,a.kt)("li",{parentName:"ul"},"Description: The encrypted text set to the mobile element."),(0,a.kt)("li",{parentName:"ul"},"Parameter Type: String"),(0,a.kt)("li",{parentName:"ul"},"Mandatory: Required"),(0,a.kt)("li",{parentName:"ul"},"Name: timeout"),(0,a.kt)("li",{parentName:"ul"},"Description: System will wait at most ",(0,a.kt)("em",{parentName:"li"},"timeout")," ","(","seconds",")"," to return a result."),(0,a.kt)("li",{parentName:"ul"},"Parameter Type: int"),(0,a.kt)("li",{parentName:"ul"},"Mandatory: Required"),(0,a.kt)("li",{parentName:"ul"},"Name: flowControl"),(0,a.kt)("li",{parentName:"ul"},"Description: Used to control the step if the step failed."),(0,a.kt)("li",{parentName:"ul"},"Parameter Type: FailureHandling"),(0,a.kt)("li",{parentName:"ul"},"Mandatory: Optional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns"),": void.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Throw"),": ",(0,a.kt)("strong",{parentName:"p"},"StepFailedException")," If there are some errors during execution.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Mobile.setEncryptedText(findTestObject('New One/android.widget.EditText0 (1)'), 'IEW1vyGbESL6h22Ztkgy5Q==', 0)\n\n")))))}m.isMDXComponent=!0}}]);