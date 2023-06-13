"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[46386],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),k=i,u=m["".concat(l,".").concat(k)]||m[k]||d[k]||n;return o?a.createElement(u,r(r({ref:t},c),{},{components:o})):a.createElement(u,r({ref:t},c))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<n;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}k.displayName="MDXCreateElement"},72870:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=o(87462),i=(o(67294),o(3905));const n={id:"concept-f134d389-082e-4229-90a3-791bf5b8cb69",slug:"/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio"},r="Sample iOS mobile tests project in Katalon Studio",s={unversionedId:"concept-f134d389-082e-4229-90a3-791bf5b8cb69",id:"concept-f134d389-082e-4229-90a3-791bf5b8cb69",title:"Sample iOS mobile tests project in Katalon Studio",description:"This sample demonstrates iOS testing fundamentals in Katalon Studio.",source:"@site/docs/concept-f134d389-082e-4229-90a3-791bf5b8cb69.mdx",sourceDirName:".",slug:"/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio",permalink:"/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-f134d389-082e-4229-90a3-791bf5b8cb69.mdx",tags:[],version:"current",frontMatter:{id:"concept-f134d389-082e-4229-90a3-791bf5b8cb69",slug:"/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Create and Run iOS Test Case in Katalon Studio",permalink:"/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio"},next:{title:"Sample Android mobile tests project in Katalon Studio",permalink:"/get-started/sample-projects/mobile/sample-android-mobile-tests-project-in-katalon-studio"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Open the sample iOS test project",id:"open-the-sample-ios-test-project",level:2},{value:"In Katalon Studio",id:"in-katalon-studio",level:3},{value:"In Katalon Studio - Platform Edition",id:"in-katalon-studio---platform-edition",level:3},{value:"Prepare the iOS application file",id:"prepare-the-ios-application-file",level:2},{value:"For iOS simulators",id:"for-ios-simulators",level:3},{value:"For real iOS devices",id:"for-real-ios-devices",level:3},{value:"iOS sample project components",id:"ios-sample-project-components",level:2},{value:"Test cases",id:"test-cases",level:3},{value:"Test suites",id:"test-suites",level:3},{value:"Execute iOS tests",id:"execute-ios-tests",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sample-ios-mobile-tests-project-in-katalon-studio"},"Sample iOS mobile tests project in Katalon Studio"),(0,i.kt)("p",null,"This sample demonstrates iOS testing fundamentals in Katalon Studio."),(0,i.kt)("p",null,"The application under test is the ",(0,i.kt)("code",null,"Coffee Timer")," application, which contains different timers for different coffee types."),(0,i.kt)("p",null,"You can learn more about mobile testing in these guides:",(0,i.kt)("a",{parentName:"p",href:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio#"},"Introduction to mobile testing")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/create-tests/record-and-spy/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio#"},"Introduction to mobile testing"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio"},"[","Mobile","]"," Create and Run iOS Test Case")))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS setup. To set up Xcode simulators/ real iOS devices, you can refer to this document: ",(0,i.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-ios-setup-real-devices-in-katalon-studio"},"[","Mobile","]"," iOS Setup"),".")),(0,i.kt)("h2",{id:"open-the-sample-ios-test-project"},"Open the sample iOS test project"),(0,i.kt)("h3",{id:"in-katalon-studio"},"In Katalon Studio"),(0,i.kt)("p",null,"To open the iOS sample project, in Katalon Studio, go to ",(0,i.kt)("strong",{parentName:"p"},"File")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"New Sample Project")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Sample iOS Mobile Tests Project"),"."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/iOS-sample-projects/KS-iOS-Open-the-iOS-sample.png",width:700,alt:"Open iOS sample project"}),(0,i.kt)("p",null,"Alternatively, you can download the iOS sample project from our GitHub repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/ios-mobile-tests"},"iOS sample"),"."),(0,i.kt)("h3",{id:"in-katalon-studio---platform-edition"},"In Katalon Studio - Platform Edition"),(0,i.kt)("p",null,"On Katalon TestOps, open a project and clone this sample iOS test from our GitHub repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/ios-mobile-tests"},"iOS sample"),". See: ",(0,i.kt)("a",{parentName:"p",href:"/organize/upload-test-scripts-from-a-git-repository/upload-test-scripts-from-the-git-repository-to-testops"},"Upload Test Scripts from a Git Repository"),"."),(0,i.kt)("p",null,"In Katalon Studio - Platform Edition, open that project by going to ",(0,i.kt)("strong",{parentName:"p"},"File")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Open Project"),"."),(0,i.kt)("h2",{id:"prepare-the-ios-application-file"},"Prepare the iOS application file"),(0,i.kt)("p",null,"The ",(0,i.kt)("code",null,"Coffee Timer")," application located in the ",(0,i.kt)("code",null,"App")," folder of this sample project is pre-built and signed by the Katalon team to only run on Katalon devices."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/iOS-sample-projects/KS-iOS-Coffee-timer-app.png",width:350,alt:"The sample coffee timer application"}),(0,i.kt)("p",null,"As part of the iOS development procedure, to execute the sample test cases with your iOS devices, you need to build and sign the ",(0,i.kt)("code",null,"Coffee Timer")," application for your iOS devices."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("code",null,"Coffee Timer.xcodeproj")," project file with Xcode. To find the project save location, go to ",(0,i.kt)("strong",{parentName:"p"},"<","your-project-folder",">"," ",">"," App ",">"," Your-First-iOS-App ",">"," Coffee Timer"),". Double-click the ",(0,i.kt)("code",null,"Coffee Timer.xcodeproj")," file."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/open-xcode-file.png",width:700,alt:"Open Coffee Timer Xcode project"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After opening the project in Xcode, select a registered iOS device to launch the apps."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/select-device.png",width:350,alt:"Choose the iOS device"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"General")," tab, set the deployment iOS version and select the device type in the ",(0,i.kt)("strong",{parentName:"p"},"Deployment Info")," section."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/deployment.png",width:450,alt:"Choose the iOS system"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch to the ",(0,i.kt)("strong",{parentName:"p"},"Signing & Capabilities")," tab, check the ",(0,i.kt)("strong",{parentName:"p"},"Automatically manage signing")," box, then choose the team that has your device registered in the Apple Developer Portal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To build the ",(0,i.kt)("code",null,".ipa")," file, click ",(0,i.kt)("strong",{parentName:"p"},"Product ",">"," Build"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To archive the ",(0,i.kt)("code",null,".ipa")," file, click ",(0,i.kt)("strong",{parentName:"p"},"Product ",">"," Archive"),". If the archive builds successfully, it appears in the Archives organizer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To open the Archives organizer, choose ",(0,i.kt)("strong",{parentName:"p"},"Window")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Organizer")," and click ",(0,i.kt)("strong",{parentName:"p"},"Archives"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the archive you want to export, then click ",(0,i.kt)("strong",{parentName:"p"},"Distribute App")," and follow the instructions to get the ",(0,i.kt)("code",null,".ipa")," file. Here, we choose a development provisioning profile to export the ",(0,i.kt)("code",null,"Coffee Timer.ipa")," file."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/export.gif",alt:"Build the Coffee Timer.ipa"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the ",(0,i.kt)("code",null,".ipa")," file, do as follows:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Window ",">"," Devices and Simulators")," in Xcode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose your device from the ",(0,i.kt)("strong",{parentName:"p"},"Devices")," list.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("em",{parentName:"p"},"Add")," ","(","+",")"," to browse the ",(0,i.kt)("code",null,".ipa")," file."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-on-macos/image2016-8-8-143A313A5.png",alt:"Add the .ipa file to Xcode devices"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once installed successfully, the application appears in the ",(0,i.kt)("strong",{parentName:"p"},"Installed Apps")," section."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-on-macos/image2016-8-8-143A313A14.png",alt:"Add the .ipa file to Xcode devices"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Put the ",(0,i.kt)("code",null,"Coffee Time.ipa")," file into the ",(0,i.kt)("code",null,"App")," folder of the sample project. Katalon will use this file to start the ",(0,i.kt)("code",null,"Coffee Time")," application."))),(0,i.kt)("h3",{id:"for-ios-simulators"},"For iOS simulators"),(0,i.kt)("p",null,"To execute the sample test cases with Xcode simulators, you need to prepare an ",(0,i.kt)("code",null,".app")," file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("code",null,"Coffee Timer.xcodeproj")," project file with Xcode. To find the project save location, go to ",(0,i.kt)("code",null,"<","your-project-folder",">")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"App")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Your-First-iOS-App")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Coffee Timer"),". Double-click the ",(0,i.kt)("code",null,"Coffee Timer.xcodeproj")," file."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/open-xcode-file.png",width:700,alt:"Open Coffee Timer Xcode project"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After opening the project in Xcode, choose one of the iOS simulators to launch the apps."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/iOS-sample-projects/KS-iOS-Choose-simulator-1.png",width:500,alt:"Choose the iOS simulators"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To build the ",(0,i.kt)("code",null,".app")," file, click ",(0,i.kt)("strong",{parentName:"p"},"Product")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Build"),"."),(0,i.kt)("p",{parentName:"li"},"When the build is finished, to find the ",(0,i.kt)("code",null,".app")," file, go to ",(0,i.kt)("code",null,"~/Library/Developer/Xcode/DerivedData/Coffee Timer/Build/Products/Debug-iphonesimulator/Coffee Timer.app"),"."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To quickly search for the ",(0,i.kt)("code",null,"DerivedData")," folder, copy and paste the following path ",(0,i.kt)("code",null,"~/Library/Developer/Xcode/DerivedData")," into the Spotlight Search."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy and paste the ",(0,i.kt)("code",null,"Coffee Time.app")," file into the ",(0,i.kt)("code",null,"App")," folder of the sample project. Katalon will use this file to start the ",(0,i.kt)("code",null,"Coffee Time")," application."))),(0,i.kt)("h3",{id:"for-real-ios-devices"},"For real iOS devices"),(0,i.kt)("p",null,"To execute mobile testing with real iOS devices, you need to prepare an ",(0,i.kt)("code",null,".ipa")," file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("code",null,"Coffee Timer.xcodeproj")," project file with Xcode. To find the project save location, go to ",(0,i.kt)("code",null,"<","your-project-folder",">")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"App")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Your-First-iOS-App")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Coffee Timer"),". Double-click the ",(0,i.kt)("code",null,"Coffee Timer.xcodeproj")," file."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/open-xcode-file.png",width:700,alt:"Open Coffee Timer Xcode project"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After opening the project in Xcode, select a registered iOS device to launch the apps."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/select-device.png",width:350,alt:"Choose the iOS device"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"General")," tab, set the deployment iOS version and select the device type in the ",(0,i.kt)("strong",{parentName:"p"},"Deployment Info")," section."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/deployment.png",width:450,alt:"Choose the iOS system"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch to the ",(0,i.kt)("strong",{parentName:"p"},"Signing & Capabilities")," tab, check the ",(0,i.kt)("strong",{parentName:"p"},"Automatically manage signing")," box, then choose the team that has your device registered in the Apple Developer Portal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To build the ",(0,i.kt)("code",null,".ipa")," file, click ",(0,i.kt)("strong",{parentName:"p"},"Product")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Build"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To archive the ",(0,i.kt)("code",null,".ipa")," file, click ",(0,i.kt)("strong",{parentName:"p"},"Product")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Archive"),". If the archive builds successfully, it appears in the Archives organizer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To open the Archives organizer, choose ",(0,i.kt)("strong",{parentName:"p"},"Window")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Organizer")," and click ",(0,i.kt)("strong",{parentName:"p"},"Archives"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the archive you want to export, then click ",(0,i.kt)("strong",{parentName:"p"},"Distribute App")," and follow the instructions to get the ",(0,i.kt)("code",null,".ipa")," file. Here, we choose a development provisioning profile to export the ",(0,i.kt)("code",null,"Coffee Timer.ipa")," file."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/export.gif",alt:"Build the Coffee Timer.ipa"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the ",(0,i.kt)("code",null,".ipa")," file."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Window")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Devices")," and ",(0,i.kt)("strong",{parentName:"p"},"Simulators")," in Xcode.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose your device from the ",(0,i.kt)("strong",{parentName:"p"},"Devices")," list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add ","(","+",")")," to browse the ",(0,i.kt)("code",null,".ipa")," file."))),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-on-macos/image2016-8-8-143A313A5.png",alt:"Add the .ipa file to Xcode devices"}),(0,i.kt)("p",{parentName:"li"},"Once installed successfully, the application appears in the ",(0,i.kt)("strong",{parentName:"p"},"Installed Apps"),"."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-on-macos/image2016-8-8-143A313A14.png",alt:"Add the .ipa file to Xcode devices"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Put the ",(0,i.kt)("code",null,"Coffee Time.ipa")," file into the ",(0,i.kt)("code",null,"App")," folder of the sample project. Katalon will use this file to start the ",(0,i.kt)("code",null,"Coffee Time")," application."))),(0,i.kt)("h2",{id:"ios-sample-project-components"},"iOS sample project components"),(0,i.kt)("h3",{id:"test-cases"},"Test cases"),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/iOS-sample-projects/KS-iOS-Test-cases.png",alt:"Sample test cases"}),(0,i.kt)("p",null,"There are two test cases for different purposes:"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Mexican Coffee Timer")," test case starts and stops the timer for making a Mexican coffee. In this example, we run the test case with a real iOS device."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the ",(0,i.kt)("code",null,"Coffee Timer.ipa")," application. Here, we use the ",(0,i.kt)("code",null,"sample.Common.startApplication")," custom keyword to run the application."),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Mexican"),". We set the timeout for 0 seconds."),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Start"),". We set the timeout for 0 seconds."),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"3:19"),". We set the timeout for 0 seconds."),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Stop"),". We set the timeout for 0 seconds."),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Back"),". We set the timeout for 0 seconds."),(0,i.kt)("li",{parentName:"ul"},"Close the application.")),(0,i.kt)("p",null,"You can see the test script as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\nCustomKeywords.'sample.Common.startAppliucation'()\n\nMobile.verifyElementText(findTestObject('Spy/XCUIElementTypeStaticText - Mexican'), 'Mexican')\n\nMobile.tap(findTestObject('XCUIElementTypeStaticText - Mexican'), 0)\n\nMobile.tap(findTestObject('XCUIElementTypeButton - Start'), 0)\n\nMobile.tap(findTestObject('XCUIElementTypeStaticText - 319'), 0)\n\nMobile.tap(findTestObject('XCUIElementTypeButton - Stop'), 0)\n\nMobile.tap(findTestObject('XCUIElementTypeButton - Back'), 0)\n\nMobile.closeApplication()\n\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Verify the main list")," test case verifies the list of the coffee name in the application. In this example, we run the test case with a real iOS device."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the ",(0,i.kt)("code",null,"Coffee Timer.ipa")," application. Here, we use the ",(0,i.kt)("code",null,"sample.Common.startApplication")," custom keyword to run the application."),(0,i.kt)("li",{parentName:"ul"},"Verify if the application is showing the ",(0,i.kt)("strong",{parentName:"li"},"Mexican")," item."),(0,i.kt)("li",{parentName:"ul"},"Verify if the application is showing the ",(0,i.kt)("strong",{parentName:"li"},"Colombian")," item."),(0,i.kt)("li",{parentName:"ul"},"Verify if the application is showing the ",(0,i.kt)("strong",{parentName:"li"},"Coffees")," item."),(0,i.kt)("li",{parentName:"ul"},"Close the application.")),(0,i.kt)("p",null,"You can see the test script as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\nCustomKeywords.'sample.Common.startAppliucation'()\n\nMobile.verifyElementText(findTestObject('Spy/XCUIElementTypeStaticText - Mexican'), 'Mexican')\n\nMobileBuiltInKeywords.verifyElementText(findTestObject('Spy/XCUIElementTypeStaticText - Colombian'), 'Colombian')\n\nMobileBuiltInKeywords.verifyElementText(findTestObject('Spy/XCUIElementTypeStaticText - Coffees'), 'Coffees')\n\nMobile.closeApplication()\n\n")),(0,i.kt)("h3",{id:"test-suites"},"Test suites"),(0,i.kt)("p",null,"To access the test suite in this project, in the ",(0,i.kt)("strong",{parentName:"p"},"Test Explorer")," panel, go to the ",(0,i.kt)("strong",{parentName:"p"},"Test Suites")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Smoke Tests")," folder. This test suite combines the two test cases shown above."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/iOS-sample-projects/KS-iOS-Test-suite.png",width:650,alt:"Test Suites"}),(0,i.kt)("h2",{id:"execute-ios-tests"},"Execute iOS tests"),(0,i.kt)("p",null,"To execute a test case or a test suite in the sample project, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the test case/test suite you want to execute.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the main toolbar, click on the ",(0,i.kt)("strong",{parentName:"p"},"Run")," dropdown menu and select ",(0,i.kt)("strong",{parentName:"p"},"iOS")," as the device type."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/KS-TOOLBAR-iOS.png",width:250,alt:"Execute iOS"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the displayed ",(0,i.kt)("strong",{parentName:"p"},"iOS Devices")," dialog, select an iOS device or Xcode simulator, then click ",(0,i.kt)("strong",{parentName:"p"},"OK"),"."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-recorder-76/iOS/ios-devices-list.png",width:500,alt:"Choose iOS device"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Observe the test result in the ",(0,i.kt)("strong",{parentName:"p"},"Log Viewer")," tab."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/android-sample-prj/KS-ANDROID-Log-viewer.png",width:750,alt:"View results"}))))}d.isMDXComponent=!0}}]);