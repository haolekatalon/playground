"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[5294],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>k});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return o?a.createElement(k,i(i({ref:t},l),{},{components:o})):a.createElement(k,i({ref:t},l))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85667:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));const r={id:"concept-44c6145c-6b33-451a-acca-b54b43023876",slug:"/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio"},i="Native Windows Recorder in Katalon Studio",s={unversionedId:"concept-44c6145c-6b33-451a-acca-b54b43023876",id:"concept-44c6145c-6b33-451a-acca-b54b43023876",title:"Native Windows Recorder in Katalon Studio",description:"From version 7.0.0, Katalon supports the recording utility for Desktop apps testing. From version 7.5.0, Native Windows Recorder is available for Windows machines. This new-generation Windows Recorder gives you a seamless recording experience that is similar to Web Recorder.",source:"@site/docs/concept-44c6145c-6b33-451a-acca-b54b43023876.mdx",sourceDirName:".",slug:"/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio",permalink:"/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-44c6145c-6b33-451a-acca-b54b43023876.mdx",tags:[],version:"current",frontMatter:{id:"concept-44c6145c-6b33-451a-acca-b54b43023876",slug:"/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Windows Record Tutorials in Katalon Studio",permalink:"/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-tutorials-in-katalon-studio"},next:{title:"Data-driven testing with Katalon Studio",permalink:"/create-tests/data-driven-testing/data-driven-testing-with-katalon-studio"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Coordinate-based Recording",id:"coordinate-based-recording",level:2},{value:"Recording",id:"recording",level:2},{value:"Executing a test case",id:"executing-a-test-case",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"native-windows-recorder-in-katalon-studio"},"Native Windows Recorder in Katalon Studio"),(0,n.kt)("p",null,"From version 7.0.0, Katalon supports the recording utility for Desktop apps testing. From version ",(0,n.kt)("strong",{parentName:"p"},"7.5.0"),", Native Windows Recorder is available for Windows machines. This new-generation Windows Recorder gives you a seamless recording experience that is similar to Web Recorder."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your Katalon Studio version must be ",(0,n.kt)("strong",{parentName:"li"},"7.5.0+")),(0,n.kt)("li",{parentName:"ul"},"You need an active ",(0,n.kt)("strong",{parentName:"li"},"Katalon Studio Enterprise")," license"),(0,n.kt)("li",{parentName:"ul"},"This feature is supported on ",(0,n.kt)("strong",{parentName:"li"},"Windows only")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio"},"Setting up WinAppDriver"),". If your machine hasn't installed it yet, open Katalon Studio and go to ",(0,n.kt)("strong",{parentName:"li"},"Tools ",">"," Windows ",">"," Install WinAppDrivers")," and follow the set-up wizard."),(0,n.kt)("li",{parentName:"ul"},"Installing ",(0,n.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet-framework/net452"},"Microsoft .NET Framework 4.5.2 or later"))),(0,n.kt)("h2",{id:"coordinate-based-recording"},"Coordinate-based Recording"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"From ",(0,n.kt)("strong",{parentName:"li"},"version 7.8"),", you can record and locate a Windows element by its relative coordinates."))),(0,n.kt)("p",null,"In ",(0,n.kt)("strong",{parentName:"p"},"Native Windows Recorder"),", with the enabled ",(0,n.kt)("strong",{parentName:"p"},"coordinate-based recording"),", ",(0,n.kt)("code",null,"click")," and ",(0,n.kt)("code",null,"rightClick")," actions are recorded as ",(0,n.kt)("code",null,"clickElementOffset")," and ",(0,n.kt)("code",null,"rightClickElementOffset")," actions respectively. The following keywords are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click-element-offset"},"[","Windows","]"," Click Element Offset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click-element-offset"},"[","Windows","]"," Right-click Element Offset"))),(0,n.kt)("p",null,"With coordinates-based recording, Katalon Studio records an element's relative coordinates in addition to its selector. For instance, you want to click on the red X part to close a tab in Notepad. Katalon Recorder records the button's offsets ","(","its relative coordinates to its top-left corner",")"," as a set of parameters representing an X and Y offset, and save them in clickElementOffset. It uses them to identify the exact location to perform a click action during runtime."),(0,n.kt)("p",null,"Without that element's offsets, the test engine can only click on the button's center, resulting in a failed test."),(0,n.kt)("h2",{id:"recording"},"Recording"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click on the Windows Recorder icon and select ",(0,n.kt)("strong",{parentName:"p"},"Native Windows Recorder")," to open the Native Windows Recorder windows."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/open.png"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Native Windows Recorder")," dialog box is displayed. Specify the information at the CONFIGURATIONS section."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Application File"),": the absolute path to the Windows Executable File ","(","*",".exe",")"," on the testing machine. Click the ",(0,n.kt)("strong",{parentName:"p"},"Browse...")," button to locate the application file."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/app-file.png"}),(0,n.kt)("p",{parentName:"li"},"To start a UWP application, the application's execute file should be:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"ApplicationID")," if your app is published on Microsoft store"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"PackageFamilyName!Application ID")," if your app is still in development."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Start")," deploy and open the specified Windows application."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/action-bar.png"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you hover over an element of the AUT, Katalon Studio highlights the identified object with a red rectangle."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/hover-highlight.png"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you perform an action on the AUT, the action is recorded in the ",(0,n.kt)("strong",{parentName:"p"},"Recorded Actions")," section. The list of available actions is the same as Katalon Studio's built-in keywords. You can add any action, call another test case, and/or use Custom Keywords."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/recorded-actions.png"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All of the specified actions above are recorded at the ",(0,n.kt)("strong",{parentName:"p"},"Recorded Actions")," section."),(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Captured Objects"),", you can view all elements captured during the recording session. Here you can customize the locator of a captured object by modifying it in the ",(0,n.kt)("strong",{parentName:"p"},"Locator")," tab of ",(0,n.kt)("strong",{parentName:"p"},"Object Properties"),". The captured objects\u2019 locators are their absolute XPaths."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/captured-objects.png"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you\u2019re done with recording, click ",(0,n.kt)("strong",{parentName:"p"},"OK")," to save the recorded actions in Katalon Studio.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be prompted to save the captured objects in the Object Repository of Katalon Studio. Choose an existing folder or create a new one, then click ",(0,n.kt)("strong",{parentName:"p"},"OK")," to continue."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Step9.png",width:267})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you finish your recording session, export the recorded steps to a new test case."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Export-new-TC.png",width:494})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Recorded objects and actions are saved in the test case."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/test-case.png",width:609}))),(0,n.kt)("h2",{id:"executing-a-test-case"},"Executing a test case"),(0,n.kt)("p",null,"Remember to turn on the WinAppDriver before executing a test case."),(0,n.kt)("p",null,"Select the ",(0,n.kt)("strong",{parentName:"p"},"Windows")," icon in the ",(0,n.kt)("strong",{parentName:"p"},"Run")," button on the main Toolbar to execute the script."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/run-with-windows.png",width:250,alt:"run with windows"}),(0,n.kt)("p",null,"The Windows test is executed with those recorded steps accordingly."))}u.isMDXComponent=!0}}]);