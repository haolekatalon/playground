"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[38422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"concept-24bbf3c5-0f35-499c-83d9-def73b34d785",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot"},o="[Mobile] Take Area Screenshot",l={unversionedId:"concept-24bbf3c5-0f35-499c-83d9-def73b34d785",id:"concept-24bbf3c5-0f35-499c-83d9-def73b34d785",title:"\\[Mobile\\] Take Area Screenshot",description:"-   From version 7.9.0, this keyword is available.",source:"@site/docs/concept-24bbf3c5-0f35-499c-83d9-def73b34d785.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-24bbf3c5-0f35-499c-83d9-def73b34d785.mdx",tags:[],version:"current",frontMatter:{id:"concept-24bbf3c5-0f35-499c-83d9-def73b34d785",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Take Screenshot",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-screenshot"},next:{title:"\\[Mobile\\] Take Element Screenshot",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-element-screenshot"}},s={},p=[{value:"takeAreaScreenshot",id:"takeareascreenshot",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mobile-take-area-screenshot"},"[","Mobile","]"," Take Area Screenshot"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"From version ",(0,n.kt)("strong",{parentName:"li"},"7.9.0"),", this keyword is available."))),(0,n.kt)("h2",{id:"takeareascreenshot"},"takeAreaScreenshot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description"),": Take a screenshot of a specific area. The area should be inside the application viewport; otherwise, this keyword will fail.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyword name"),": takeAreaScreenshot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyword syntax"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Mobile.takeAreaScreenshot(String fileName, Rectangle rect,\n               List<TestObject> ignoredElements, Color hidingColor,\n               FailureHandling flowControl)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: fileName"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description: Absolute path to the stored image file. fileName should contain '.png' as images are stored to the '.png' format. If the file name is not defined, the test engine will generate a random file name."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: String"),(0,n.kt)("li",{parentName:"ul"},"Mandatory: Optional"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: rect"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description: A rectangle definding the position and size of the area to be captured."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: Rectangle"),(0,n.kt)("li",{parentName:"ul"},"Mandatory: Required"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: ignoredElements"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description: List of the ignored elements. These elements will be hidden by drawing an overlap color layer. If the test engine failed to hide the element by any problems, this keyword would continue without impacting the result."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: List"),(0,n.kt)("li",{parentName:"ul"},"Mandatory: Optional"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: hidingColor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description: The color used to draw the overlap layer. If not defined, Color.GRAY is used."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: Color"),(0,n.kt)("li",{parentName:"ul"},"Mandatory: Optional"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: flowControl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Description: Specify ",(0,n.kt)("a",{parentName:"li",href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop."),(0,n.kt)("li",{parentName:"ul"},"STOP",(0,n.kt)("em",{parentName:"li"},"ON"),"FAILURE: throws a StepFailedException if the step failed ","(","default",")","."),(0,n.kt)("li",{parentName:"ul"},"CONTINUE",(0,n.kt)("em",{parentName:"li"},"ON"),"FAILURE: continues the test if the test failed, but the test result is still Failed."),(0,n.kt)("li",{parentName:"ul"},"OPTIONAL: continues the test and ignores the test result."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: FailureHandling"),(0,n.kt)("li",{parentName:"ul"},"Mandatory: Optional"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return"),": a String representing the path to the captured image.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Throw"),": StepFailedException if the defined rectangle is outside the application viewport or Katalon Studio can't store the image in the disk.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example"),":"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// add import libs first\nimport org.openqa.selenium.Rectangle as Rectangle\nimport com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration\n// take sreenshot of an area start at (x: 0 , y: 0) with size (height: 1500, width: 1000) and store to report folder\nMobile.takeAreaScreenshot(RunConfiguration.getReportFolder() + '/area_screenshot.png', new Rectangle(0, 0, 1500, 1000), [findTestObject('hide_element_1'), findTestObject('hide_element_2')], Color.BLUE)\n\n")))}d.isMDXComponent=!0}}]);