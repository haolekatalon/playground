"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[29327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={id:"concept-515bed62-b176-4678-a383-2585c6479097",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio"},r="[Mobile] Image-based testing in Katalon Studio",l={unversionedId:"concept-515bed62-b176-4678-a383-2585c6479097",id:"concept-515bed62-b176-4678-a383-2585c6479097",title:"\\[Mobile\\] Image-based testing in Katalon Studio",description:"Starting from version 7.2, image-based testing is available for Katalon Studio Enterprise users.",source:"@site/docs/concept-515bed62-b176-4678-a383-2585c6479097.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-515bed62-b176-4678-a383-2585c6479097.mdx",tags:[],version:"current",frontMatter:{id:"concept-515bed62-b176-4678-a383-2585c6479097",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Perform Touch ID with iOS device simulator",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/ios/perform-touch-id-with-ios-device-simulator"},next:{title:"Testing Mobile Apps using Katalon Studio and Kobiton cloud-based device farm",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm"}},s={},c=[{value:"Set-up",id:"set-up",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Keywords",id:"keywords",level:2},{value:"Capture Images",id:"capture-images",level:2},{value:"Tutorial",id:"tutorial",level:3},{value:"Capture Tool and Storage",id:"capture-tool-and-storage",level:3},{value:"Acceptance Threshold",id:"acceptance-threshold",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-image-based-testing-in-katalon-studio"},"[","Mobile","]"," Image-based testing in Katalon Studio"),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"version 7.2"),", image-based testing is available for Katalon Studio Enterprise users."),(0,o.kt)("p",null,"This feature allows you to locate and interact with Mobile objects by their images. It is particularly helpful in the following use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dynamic test objects without unique selectors ","(","their values are passed through the parameters during execution",")"," or visual objects that are traditionally identified by their orders in a list.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Objects in a canvas of 2D or 3D game ","(","you can conventionally identify the canvas elements, not what's inside",")","."))),(0,o.kt)("p",null,"Built upon Appium, image-based testing for Mobile in Katalon Studio relies on Appium's finding image objects. Read more about it ",(0,o.kt)("a",{parentName:"p",href:"http://appium.io/docs/en/advanced-concepts/image-elements/"},"here"),". Katalon Studio automatically encodes images to Base64 for reference during test execution. The reference images will be used for finding the most matching area of the screen, which means the key to successfully finding visual elements is capturing reference images. This section will guide you through how to set up visual element testing, best practice for capturing images, and custom acceptance threshold."),(0,o.kt)("h2",{id:"set-up"},"Set-up"),(0,o.kt)("p",null,"You need the native OpenCV library in nodejs. Install ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/opencv4nodejs"},"opencv4nodejs"),", which supports OpenCV 3 and OpenCV 4."),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/download/"},"CMake"),"."),(0,o.kt)("li",{parentName:"ol"},"Add CMake binary folder to PATH in Environment Variables. ",(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-image-based-testing.md/cmake-windows.png"})),(0,o.kt)("li",{parentName:"ol"},"Run the following commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   npm install -g appium\n    npm install -g windows-build-tools\n    npm install -g opencv4nodejs\n\n")),(0,o.kt)("h3",{id:"macos"},"macOS"),(0,o.kt)("p",null,"Run the following commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   brew update\n    brew install cmake\n    npm install -g appium\n    npm install -g opencv4nodejs\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Troubleshoot"),":"),(0,o.kt)("p",null,"You may encounter this error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make: *** [all] Error 2\nERR! child process exited with code 2 (for more info, set '--loglevel silly') \nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! opencv-build@0.1.9 install: `node ./install.js`\nnpm ERR! Exit status 1\n\n")),(0,o.kt)("p",null,"That means the auto-build may fail to install opencv4nodejs, please try the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   brew unlink tesseract\n    npm install -g opencv4nodejs\n    brew link tesseract\n\n")),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/download/"},"CMake"),"."),(0,o.kt)("li",{parentName:"ol"},"Export CMake binary folder to PATH of Environment Variables."),(0,o.kt)("li",{parentName:"ol"},"Run the following commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   npm install -g appium\n    npm install -g opencv4nodejs\n\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It takes 30-40 minutes to complete the installation.")),(0,o.kt)("h2",{id:"keywords"},"Keywords"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-image-present"},"Verify Image Present")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-on-image"},"Tap On Image")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-element"},"Find Image Element")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-elements"},"Find Image Elements"))),(0,o.kt)("h2",{id:"capture-images"},"Capture Images"),(0,o.kt)("h3",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"Below is how to capture an image of the desired Mobile elements for interaction during test executions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your AUT with Mobile Spy/Recorder. Remember to have your mobile device connected to Katalon Studio.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Capture Object")," to capture an image of the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a screenshot in the ",(0,o.kt)("strong",{parentName:"p"},"screenshot")," folder and crop the recognition area that Katalon Studio will use for searching matching elements during test execution ","(","reference image",")","."))),(0,o.kt)("h3",{id:"capture-tool-and-storage"},"Capture Tool and Storage"),(0,o.kt)("p",null,"You're recommended to take a screenshot by Appium Driver in Mobile Spy/Recorder since those screenshots are automatically resized. Image size and resolution significantly affect the visual element comparison."),(0,o.kt)("p",null,"To find and view screenshots of the captured objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS: ",(0,o.kt)("strong",{parentName:"li"},"/Applications/Katalon Studio.app/Contents/MacOS/screenshot/")),(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("strong",{parentName:"li"},"Katalon Studio","\\","config","\\","screenshot"),".")),(0,o.kt)("p",null,"It is recommended to save the image representing a Mobile element in its project folder for managing objects easier."),(0,o.kt)("h2",{id:"acceptance-threshold"},"Acceptance Threshold"),(0,o.kt)("p",null,"There is an acceptance threshold to define the possible outcome of image comparison. Acceptance threshold in Katalon Studio is set 0.4 by default, which means any found image with the similarity measure less than 0.4 will be rejected. This threshold is based on the default match threshold in Appium."),(0,o.kt)("p",null,"On the scale from 0 to 1, you can customize the acceptance threshold, which defines the degrees of match by using the ",(0,o.kt)("code",null,"IMAGE","_","MATCH","_","THRESHOLD")," option. It's recommended to use the default threshold ",(0,o.kt)("strong",{parentName:"p"},"0.4")," to find your match. If you're not finding matching objects, you can try a lower acceptance level; if the returned objects are wrongly matched, raise the threshold value. For example, to set 0.6 as the match threshold:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Mobile.startExistingApplication('com.google.android.youtube')\n\nMobileDriverFactory.getDriver().setSetting(Setting.IMAGE_MATCH_THRESHOLD, 0.6)\n\nMobile.findImageElements(\"/Users/demokatalon/Katalon Studio/image based testing/Screenshot/hat.png\")\n\n")))}m.isMDXComponent=!0}}]);