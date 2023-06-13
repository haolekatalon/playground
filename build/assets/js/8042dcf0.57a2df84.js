"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,y=d["".concat(i,".").concat(p)]||d[p]||m[p]||n;return r?o.createElement(y,s(s({ref:t},u),{},{components:r})):o.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));const n={id:"concept-3ca18d10-fb12-46a1-afe2-fd98e951c45d",slug:"/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio"},s="Import Custom Keywords classes recursively in Katalon Studio",c={unversionedId:"concept-3ca18d10-fb12-46a1-afe2-fd98e951c45d",id:"concept-3ca18d10-fb12-46a1-afe2-fd98e951c45d",title:"Import Custom Keywords classes recursively in Katalon Studio",description:"Hypothetically, you want to call a Custom Keyword within a Custom Keyword that is defined in another class. Check out the code below for a sample implementation.",source:"@site/docs/concept-3ca18d10-fb12-46a1-afe2-fd98e951c45d.mdx",sourceDirName:".",slug:"/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio",permalink:"/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-3ca18d10-fb12-46a1-afe2-fd98e951c45d.mdx",tags:[],version:"current",frontMatter:{id:"concept-3ca18d10-fb12-46a1-afe2-fd98e951c45d",slug:"/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Custom Keywords Refactoring in Katalon Studio",permalink:"/create-tests/keywords/custom-keywords/custom-keywords-refactoring-in-katalon-studio"},next:{title:"Mark test's status for a Custom Keyword in Katalon Studio",permalink:"/create-tests/keywords/custom-keywords/mark-test-s-status-for-a-custom-keyword-in-katalon-studio"}},i={},l=[],u={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"import-custom-keywords-classes-recursively-in-katalon-studio"},"Import Custom Keywords classes recursively in Katalon Studio"),(0,a.kt)("p",null,"Hypothetically, you want to call a Custom Keyword within a Custom Keyword that is defined in another class. Check out the code below for a sample implementation."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-custom-keywords-classes-recursively/f5uxhyxe7z65.png"}),(0,a.kt)("p",null,"Keywords/my.a/Greeting.groovy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"package my.aimport com.kms.katalon.core.annotation.Keywordclass Greeting { @Keyword def greet(String someone) { return my.b.AI.sayHelloTo(someone) }}\n\n")),(0,a.kt)("p",null,"Keywords/my.b/AI.groovy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'package my.bclass AI { static def sayHelloTo(String someone) { return "Hello, ${someone}." }}\n\n')),(0,a.kt)("p",null,"TC1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUIdef str = CustomKeywords.\'my.a.Greeting.greet\'("Drunda")WebUI.comment(">>> ${str}")\n\n')),(0,a.kt)("p",null,"The TC1 ran fine:"),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-custom-keywords-classes-recursively/30qrty5tymg5.png"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Credit to ",(0,a.kt)("a",{parentName:"em",href:"https://forum.katalon.com/discussion/6971/importing-custom-keywords-classes-recursively-within-a-custom-keyword#Comment_16124"},"kazurayam"))))}m.isMDXComponent=!0}}]);