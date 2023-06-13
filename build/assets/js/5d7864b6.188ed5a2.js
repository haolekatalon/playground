"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[54096],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return a?o.createElement(g,s(s({ref:t},p),{},{components:a})):o.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=a(87462),n=(a(67294),a(3905));const i={id:"concept-cf29d51b-3a90-45e3-9f96-85b6d8c7d85d",slug:"/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio"},s="Web Image-based Testing in Katalon Studio",r={unversionedId:"concept-cf29d51b-3a90-45e3-9f96-85b6d8c7d85d",id:"concept-cf29d51b-3a90-45e3-9f96-85b6d8c7d85d",title:"Web Image-based Testing in Katalon Studio",description:"Katalon Studio provides an image locator method to associate Test Objects with images. With this method, you can perform image-based testing when elements of the web application under tests \\(AUT\\) retain their appearance even though the underlying structures have changed.",source:"@site/docs/concept-cf29d51b-3a90-45e3-9f96-85b6d8c7d85d.mdx",sourceDirName:".",slug:"/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",permalink:"/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-cf29d51b-3a90-45e3-9f96-85b6d8c7d85d.mdx",tags:[],version:"current",frontMatter:{id:"concept-cf29d51b-3a90-45e3-9f96-85b6d8c7d85d",slug:"/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Automation testing of shadow DOM elements with Katalon Studio",permalink:"/create-tests/test-objects/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio"},next:{title:"Optimizing Object Identification and Tools in Katalon Studio",permalink:"/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Enable Image-based object recognition",id:"enable-image-based-object-recognition",level:2},{value:"Capture screenshots for object recognition",id:"capture-screenshots-for-object-recognition",level:2},{value:"Using built-in tools",id:"using-built-in-tools",level:3},{value:"Add image locator to objects",id:"add-image-locator-to-objects",level:2},{value:"Reduce image-based testing failures",id:"reduce-image-based-testing-failures",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"web-image-based-testing-in-katalon-studio"},"Web Image-based Testing in Katalon Studio"),(0,n.kt)("p",null,"Katalon Studio provides an image locator method to associate Test Objects with images. With this method, you can perform image-based testing when elements of the web application under tests ","(","AUT",")"," retain their appearance even though the underlying structures have changed."),(0,n.kt)("p",null,"This guide shows you how to configure image-based object recognition, capture screenshots, and reduce the chance of failures in image-based testing."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Katalon Studio version 7.2.2 onwards."),(0,n.kt)("li",{parentName:"ul"},"An active Katalon Studio Enterprise license.")),(0,n.kt)("h2",{id:"enable-image-based-object-recognition"},"Enable Image-based object recognition"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"From 7.6 onwards")),(0,n.kt)("p",null,"Image-based object recognition is enabled by default for web test execution in ",(0,n.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Self-Healing ",">"," Web UI ",">"," Test Execution")," ","(",(0,n.kt)("a",{parentName:"p",href:"/maintain/self-healing-tests-in-katalon-studio"},"See Self-healing Tests"),")","."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/image-enabled.png",width:650}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before 7.6")),(0,n.kt)("p",null,"By default, image-based object recognition is disabled in Project Settings. Go to ",(0,n.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Execution")," and check ",(0,n.kt)("strong",{parentName:"p"},"Enable Image Recognition")," to turn on this fallback strategy."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/enable.png",width:650}),(0,n.kt)("h2",{id:"capture-screenshots-for-object-recognition"},"Capture screenshots for object recognition"),(0,n.kt)("h3",{id:"using-built-in-tools"},"Using built-in tools"),(0,n.kt)("p",null,"To produce images associated with captured Test objects, Katalon Studio includes the ",(0,n.kt)("strong",{parentName:"p"},"Add Screenshot")," button in both Web Recorder and Spy utility."),(0,n.kt)("p",null,"Here we use the ",(0,n.kt)("strong",{parentName:"p"},"Spy Web Utility")," to capture screenshots. Follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To open the Spy Web Utility, from the main toolbar, select ",(0,n.kt)("strong",{parentName:"p"},"Spy Web"),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Spy-Web-Utility.png",width:650,alt:"Toolbar"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the displayed ",(0,n.kt)("strong",{parentName:"p"},"Object Spy")," dialog, specify the URL of your AUT and the web browser. Click on the ",(0,n.kt)("strong",{parentName:"p"},"Start")," button to start capturing."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-dialog.png",width:500,alt:"Object Spy dialog"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To capture an object, hover your mouse cursor over the web element and press the combination of ",(0,n.kt)("strong",{parentName:"p"},"\\"," keys. You can also right-click on the web element and select")," Capture."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-capture-object.png",width:700,alt:"Capture object"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Captured Objects")," view, select the captured object and click the ",(0,n.kt)("strong",{parentName:"p"},"Add Screenshot")," button on the bottom right corner."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-add-screenshot.png",width:500,alt:"Add screenshot"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the Spy utility verifies the image with the message ",(0,n.kt)("strong",{parentName:"p"},'"Screenshot taken!"'),", click on the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button to save the captured object and its screenshot."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-screenshot-taken.png",width:500,alt:"Screenshot taken message"}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The image comparison algorithm in Katalon Studio compares a screenshot of an object with the displayed image of the corresponding web element on the active browser, pixel by pixel. Therefore, if you capture object images using other tools, you have to resize the images to the displayed sizes of the web elements on the active browser."))),(0,n.kt)("h2",{id:"add-image-locator-to-objects"},"Add image locator to objects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"From 7.6 onwards")),(0,n.kt)("p",null,"After you capture a screenshot using the Web Recorder/Spy utility, Katalon Studio automatically adds an image locator to the associated object."),(0,n.kt)("p",null,"To use the image locator of an object:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the object in the ",(0,n.kt)("strong",{parentName:"p"},"Object Repository"),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-repository-select-object.png",width:700,alt:"Select the object"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Object")," view, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Selection Method")," and select the ",(0,n.kt)("strong",{parentName:"p"},"Image")," option."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-view-select-image.png",width:500,alt:"Select the image locator"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before 7.6")),(0,n.kt)("p",null,"After you capture a screenshot using Web Recorder/Spy utility, Katalon Studio adds a property called ",(0,n.kt)("strong",{parentName:"p"},"screenshot")," to the associated Test object. This property contains the absolute path to the captured screenshot."),(0,n.kt)("p",null,"To enable the image locator of an object:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the object in the ",(0,n.kt)("strong",{parentName:"p"},"Object Repository"),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-view-image-path.png",width:600,alt:"Object view"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Attributes")," as the ",(0,n.kt)("strong",{parentName:"p"},"Selection Method"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Object's Properties")," table, tick the ",(0,n.kt)("strong",{parentName:"p"},"screenshot")," property."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/property.png",width:700,alt:"Object's Properties table"}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To add screenshots captured using other tools, provide the absolute path to the screenshot in the ",(0,n.kt)("strong",{parentName:"p"},"Path")," property when enabling the image locator."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-screenshot-path.png",width:500,alt:"object screenshot absolute path"})),(0,n.kt)("h2",{id:"reduce-image-based-testing-failures"},"Reduce image-based testing failures"),(0,n.kt)("p",null,"Since reliable image-based testing depends on image comparison, you can reduce the chance of failures in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Screen Resolution"),": The screen resolutions of screenshot capturing devices and test executing devices can affect the accuracy of image comparison. We recommend capturing screenshots and executing tests on the same device for the best results.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Capture tool"),": We recommend using built-in capture tools in Web Recorder and Spy utility since they automatically resize the captured images."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See also"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio-samples/image-recognition-web"},"Sample Project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/maintain/self-healing-tests-in-katalon-studio"},"Self-Healing Tests"))))}m.isMDXComponent=!0}}]);