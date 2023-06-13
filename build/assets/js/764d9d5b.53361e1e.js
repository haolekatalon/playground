"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[23333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?i.createElement(y,n(n({ref:t},c),{},{components:a})):i.createElement(y,n({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,n[1]=l;for(var s=2;s<o;s++)n[s]=a[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=a(87462),r=(a(67294),a(3905));const o={id:"task-58007a3c-c546-4349-ae18-944cc445c435",slug:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio"},n="Spy mobile utility in Katalon Studio",l={unversionedId:"task-58007a3c-c546-4349-ae18-944cc445c435",id:"task-58007a3c-c546-4349-ae18-944cc445c435",title:"Spy mobile utility in Katalon Studio",description:"Katalon Studio fully supports selector strategies supported by Appium except for Android Data Matcher. To learn more about locator strategies, see Locator strategies for detecting a mobile object.",source:"@site/docs/task-58007a3c-c546-4349-ae18-944cc445c435.mdx",sourceDirName:".",slug:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio",permalink:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/task-58007a3c-c546-4349-ae18-944cc445c435.mdx",tags:[],version:"current",frontMatter:{id:"task-58007a3c-c546-4349-ae18-944cc445c435",slug:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Record mobile utility in Katalon Studio",permalink:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/record-mobile-utility-in-katalon-studio"},next:{title:"Generate test scripts for a Progressive Web App using mobile recorder in Katalon Studio",permalink:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder-in-katalon-studio"}},p={},s=[],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spy-mobile-utility-in-katalon-studio"},"Spy mobile utility in Katalon Studio"),(0,r.kt)("p",null,"Katalon Studio fully supports selector strategies supported by Appium except for Android Data Matcher. To learn more about locator strategies, see ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio#"},"Locator strategies for detecting a mobile object"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Katalon Studio version 7.6 onwards.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have configured the environment for mobile testing. See ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-android-setup-in-katalon-studio"},"[","Mobile","]"," Android Setup in Katalon Studio"),"."))),(0,r.kt)("p",null,"This tutorial helps you get familiar with capturing Mobile objects on an application by using ",(0,r.kt)("strong",{parentName:"p"},"Spy Mobile Utility"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the main Toolbar, click on the ",(0,r.kt)("strong",{parentName:"p"},"Spy Mobile")," icon and select your device type, for instance, ",(0,r.kt)("strong",{parentName:"p"},"Android Devices"),"."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-select-spy-mobile.png",width:300})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the displayed ",(0,r.kt)("strong",{parentName:"p"},"Mobile Object Spy")," dialog, specify the following information at the ",(0,r.kt)("strong",{parentName:"p"},"Configurations")," section:"),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-spy-config.png",width:300}),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Device Name"),": A mobile device where Katalon Studio launches the application. All of your connected devices should be displayed in this list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start with"),": In the drop-down list, you can select either Application File or Application ID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Application File"),": Browse your tested application ","(",(0,r.kt)("code",null,".apk")," file for Android, ",(0,r.kt)("code",null,".ipa")," for iOS",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Application ID"),": Specify the application ID of your tested application, which is either the package name of an Android app or the bundle identifier of an iOS app")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Start")," to begin spying the application under test ","(","AUT",")",". Wait until the AUT is launched, and the ",(0,r.kt)("strong",{parentName:"p"},"Device View")," and ",(0,r.kt)("strong",{parentName:"p"},"All Objects")," are ready for you to capture objects of the AUT."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-spy-mobile-dialog.png",width:700})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can click on any object either in the tree of ",(0,r.kt)("strong",{parentName:"p"},"All Objects")," or in ",(0,r.kt)("strong",{parentName:"p"},"Device View"),". Katalon Studio highlights their counterpart accordingly for verification."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Device View")," is a simulator of the device's screen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"All Objects")," captures and organizes all the displayed mobile objects of ",(0,r.kt)("strong",{parentName:"p"},"Device View")," in a tree."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-all-object-device-view.png",width:500}))),(0,r.kt)("p",{parentName:"li"},"To make sure the ",(0,r.kt)("strong",{parentName:"p"},"Device View")," displays the current screen of the AUT on the device, you can click on the ",(0,r.kt)("strong",{parentName:"p"},"Capture Object")," button to reload ",(0,r.kt)("strong",{parentName:"p"},"Device View")," and refresh ",(0,r.kt)("strong",{parentName:"p"},"All Objects"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tick on any object checkbox in ",(0,r.kt)("strong",{parentName:"p"},"All Objects"),". Katalon Studio captures the selected objects and displays objects' properties in the ",(0,r.kt)("strong",{parentName:"p"},"Object Properties")," table."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-spy-mobile-object-properties.png",width:700}),(0,r.kt)("p",{parentName:"li"},"The most important property of an object is its locator strategy and value. The default locator is a unique value in detecting that object. If you prefer another locator strategy among the provided option, you can choose it and generate a new locator. Then click ",(0,r.kt)("strong",{parentName:"p"},"Highlight")," to see if your newly updated locator can detect the target object on its screen correctly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add to Object Repository")," to save them to Katalon Studio."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-spy-add-object.png",width:300})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the displayed ",(0,r.kt)("strong",{parentName:"p"},"Folder Browser")," dialog, you can decide where to save the captured objects. Select your preferred location then click ",(0,r.kt)("strong",{parentName:"p"},"OK"),"."),(0,r.kt)("p",{parentName:"li"},"The captured objects will be added to ",(0,r.kt)("strong",{parentName:"p"},"Object Repository")," accordingly."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-folder-browser.png",width:250}),(0,r.kt)("p",{parentName:"li"},"You can continue with the current mobile screen or navigate to other interfaces as needed."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Appium known limitation:"),"You may get incorrect object highlighting when rotating the device to landscape view.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Workaround:")," After rotating, you need to click on the ",(0,r.kt)("strong",{parentName:"p"},"Capture Object")," button to refresh the ",(0,r.kt)("strong",{parentName:"p"},"All Objects")," tree, then the highlighting will work normally."),(0,r.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/Mobile_Record_And_Spy_Utilities/Mobile_Spy_Utility/images/ks-capture-object-button.png",width:300})))))))}m.isMDXComponent=!0}}]);