"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[7381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(b,r(r({ref:t},p),{},{components:n})):o.createElement(b,r({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={id:"concept-19e14a54-864c-4638-9797-bedf85188465",slug:"/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio"},r="Optimizing Object Identification and Tools in Katalon Studio",s={unversionedId:"concept-19e14a54-864c-4638-9797-bedf85188465",id:"concept-19e14a54-864c-4638-9797-bedf85188465",title:"Optimizing Object Identification and Tools in Katalon Studio",description:"-   If your test execution encounters errors related to your Test Object cannot be found due to some specific reasons, you can refer to troubleshooting guide first before trying to optimize your Test Object properties: Element not visible exception.",source:"@site/docs/concept-19e14a54-864c-4638-9797-bedf85188465.mdx",sourceDirName:".",slug:"/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio",permalink:"/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-19e14a54-864c-4638-9797-bedf85188465.mdx",tags:[],version:"current",frontMatter:{id:"concept-19e14a54-864c-4638-9797-bedf85188465",slug:"/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Web Image-based Testing in Katalon Studio",permalink:"/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio"},next:{title:"Handling Web element locators using Katalon Studio",permalink:"/create-tests/test-objects/web-test-objects/handling-web-element-locators-using-katalon-studio"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimizing-object-identification-and-tools-in-katalon-studio"},"Optimizing Object Identification and Tools in Katalon Studio"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If your test execution encounters errors related to your Test Object cannot be found due to some specific reasons, you can refer to troubleshooting guide first before trying to optimize your Test Object properties: ",(0,a.kt)("a",{parentName:"li",href:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-not-visible-exception"},"Element not visible exception"),"."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Always try to use fixed ID attribute if available. Try to communicate with development team to put the Id on each web element at front-end development side. In case the ID is dynamic ","(","changed in every page load",")",", should try to use other properties and below tips.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Depending on your system under test, try to use attributes that rarely changes when SUT makes changes, for example: name, ID, text, etc.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do not use attributes that can be changed when running on other environments such as HWDN, dynamic ID, properties depending on screen resolution ","(","width, height, x, y",")",", etc.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'If ID attribute is not available, we can use other attributes which identifies uniquely the object. Plus, use the combination of attributes to make the XPath more specific. For example, "',(0,a.kt)("em",{parentName:"p"},"//input","[","@name ='qty' and @type='text'","]"),'". These attributes should have the meaning for end-users, such as name, title, text, etc.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure that we do not overuse multiple attributes. When capturing objects, first focus on one attribute only. Depend on each situation, we can add more later.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the Relative XPath instead of Absolute XPath statements.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Always avoid using indexes in XPath to identify an object in capturing and static defining objects. It is not reliable and with smallest modification, XPath might break.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use XPath functions in XPath wherever necessary to better identification such as ",(0,a.kt)("em",{parentName:"p"},"position","(",")","; last","(",")","; starts-with","(",")","; contains","(",")","."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In case there are two objects with the same property value in a specific web page, try to identify a nearby object with unique identification and then locate to intended object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"There are still debates in using CSS or XPath. People in favor of CSS say that it is more readable and faster. However those in favor of XPath claim that it's ability to transverse the page while CSS cannot. Most of these debates always are outdated. You should define your own strategy to determine the best approach for you and your team. In practical experience from our internal QA experts and some from outside, CSS tends to be better than XPath. CSS is more readable, brief, concise and behaves same in all browsers, especially dealing with IE browser. XPath will behave differently in IE browser. However, using CSS, when you defining an object, it's hard to identify its parents.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tools to identify objects on web applications:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Firebug")," and ",(0,a.kt)("strong",{parentName:"li"},"FirePath"),": add-ons of Firefox browser. Please be noticed that the only difference from Automation tester point of view is FireBug returns Absolute XPath and FirePath returns Relative XPath."),(0,a.kt)("li",{parentName:"ul"},"Developer tool of Chrome browser."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"XPath Helper"),", ",(0,a.kt)("strong",{parentName:"li"},"XPath Checker"),": adds-on of Chrome browser."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WebDriver Element Locator"),": an add-on of Firefox browser.")))))}d.isMDXComponent=!0}}]);