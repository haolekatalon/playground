"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[10451],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>k});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)o=i[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)o=i[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=a.createContext({}),u=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(o),m=n,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return o?a.createElement(k,r(r({ref:e},c),{},{components:o})):a.createElement(k,r({ref:e},c))}));function k(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:n,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},30038:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=o(87462),n=(o(67294),o(3905));const i={id:"concept-e868788a-2453-4d7e-90f6-0d12edccb1fe",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm"},r="Testing Mobile Apps using Katalon Studio and Kobiton cloud-based device farm",s={unversionedId:"concept-e868788a-2453-4d7e-90f6-0d12edccb1fe",id:"concept-e868788a-2453-4d7e-90f6-0d12edccb1fe",title:"Testing Mobile Apps using Katalon Studio and Kobiton cloud-based device farm",description:"Scripting your first mobile automation test case can be quite confusing without a specialized tool or instruction. In this tutorial, we will show you how to speed up your automation project using Katalon Studio's mobile recording utility and run your recorded test cases on hundreds of Kobiton's mobile devices on the cloud. For this tutorial, we assume that you have already installed Katalon Studio, got familiar with its basic functions and registered a Kobiton account.",source:"@site/docs/concept-e868788a-2453-4d7e-90f6-0d12edccb1fe.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-e868788a-2453-4d7e-90f6-0d12edccb1fe.mdx",tags:[],version:"current",frontMatter:{id:"concept-e868788a-2453-4d7e-90f6-0d12edccb1fe",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm"},sidebar:"tutorialSidebar",previous:{title:"\\[Mobile\\] Image-based testing in Katalon Studio",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio"},next:{title:"Testing Mobile Apps using Custom Cloud Devices in Katalon Studio",permalink:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-custom-cloud-devices-in-katalon-studio"}},l={},u=[{value:"Create mobile automation test cases using Katalon Studio recording utility",id:"create-mobile-automation-test-cases-using-katalon-studio-recording-utility",level:2},{value:"Run your mobile automation test case on Kobiton cloud devices",id:"run-your-mobile-automation-test-case-on-kobiton-cloud-devices",level:2}],c={toc:u},p="wrapper";function d(t){let{components:e,...o}=t;return(0,n.kt)(p,(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm"},"Testing Mobile Apps using Katalon Studio and Kobiton cloud-based device farm"),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/QS_high-08-1024x509.png",alt:"Testing mobile apps using Katalon Studio and Kobiton's cloud-based device farm"}),(0,n.kt)("p",null,"Scripting your first mobile automation test case can be quite confusing without a specialized tool or instruction. In this tutorial, we will show you how to speed up your automation project using Katalon Studio's mobile recording utility and run your recorded test cases on hundreds of Kobiton's mobile devices on the cloud. For this tutorial, we assume that you have already installed ",(0,n.kt)("a",{parentName:"p",href:"https://www.katalon.com/"},"Katalon Studio"),", got familiar with its basic functions and registered a ",(0,n.kt)("a",{parentName:"p",href:"https://kobiton.com/"},"Kobiton account"),"."),(0,n.kt)("h2",{id:"create-mobile-automation-test-cases-using-katalon-studio-recording-utility"},"Create mobile automation test cases using Katalon Studio recording utility"),(0,n.kt)("p",null,"Before starting, make sure that you have:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Downloaded the target app under test \u2013 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio/Material-Login-App-Test/blob/master/App%20Files/MaterialLoginExample.apk"},"Material Login Demo"),". This app provides a set of simple authentication features that will be automated as demonstrated below."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.katalon.com/display/KD/Kobiton+Integration"},"Configured your Katalon Studio instance for mobile testing."))),(0,n.kt)("p",null,"Katalon Studio provides two utilities to accelerate the automation process: Mobile Object Spy to quickly populate the project's object repository and Mobile Recorder to generate automation scripts from recorded actions. As this tutorial mainly focuses on the functionalities of the Recorder utility, for more details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.katalon.com/display/KD/Spy+Object/"},"Object Spy user guide")," available from ",(0,n.kt)("a",{parentName:"p",href:"https://docs.katalon.com/display/KD/Spy+Object/"},"Katalon Studio Documentation")," on how to use this utility."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Let's open the sample project ","(","already included in Katalon Studio",")"," and create a new test case. Click on the Mobile Recorder button to open its dialog as shown below")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/1.png",alt:"sample project Katalon Studio"}),(0,n.kt)("p",null,"Where"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Section"),(0,n.kt)("th",null,"Explanation")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Device View"),(0,n.kt)("td",null,"Device inspector view. Preview of device UI will be displayed here. Click on any elements to select.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Configurations"),(0,n.kt)("td",null,"Select setting for recording session")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"All Objects"),(0,n.kt)("td",null,"The current mobile elements hierarchy on the device. Click to select an element and view its properties in Object Properties.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Possible Actions"),(0,n.kt)("td",null,"All available actions that can be performed on the device")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Object Properties"),(0,n.kt)("td",null,"All properties of the selected element in All Objects.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Recorded Actions"),(0,n.kt)("td",null,"All recorded actions appear here")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"With the dialog opened, follow the following steps to configure your recording session:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Plug in your device or start your emulator then select it from the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Device Name"))," combo box."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Browse\u2026"))," to select the app file from your computer ","(",".apk for Android, .ipa for iOS apps",")"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Start"))," and wait for the app to launch on your device.")),(0,n.kt)("p",null,"Once the configuration is completed, the app appears as shown in the screenshot above. ","(","Note: starting the app is registered as the first recorded action.",")"),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"With your app ready on your mobile device, start recording the test case.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tap on ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},'"No account yet? Create one"'))," to navigate to the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Create Account"))," Select the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"android.widget.TextView0"))," object in the all objects tree. ","(","Or you can tap the text on the Device view to focus on the object",")","."),(0,n.kt)("li",{parentName:"ul"},"Then click the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Tap"))," button to record the action. This action simulates a tap on the app.")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/2.png",alt:"Possible Action Katalon Studio"}),(0,n.kt)("p",null,"You will be directed to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Create Account"))," screen."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill in the information to create an account.")),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"android.widget.EditText0")," ","(","or tap on the Name text box on the Device view to fill in name",")",". Then click ",(0,n.kt)("strong",{parentName:"p"},"Set Text")," to perform the set text action on the Name text."),(0,n.kt)("p",null,'Enter "name" for the text input as below. Click OK.'),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/3.png",alt:"Text input Katalon Studio"}),(0,n.kt)("p",null,"The text is set to the device, and the action is recorded in the Recorded actions table."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perform the same steps with the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Address")),' field, and enter "address" for this field',(0,n.kt)("em",{parentName:"li"},"."))),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/4.1-300x258.png",alt:"enter value Katalon Studio"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enter the value for the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Email"))," field, we will need to hide the on-screen keyboard to make the field visible by pressing the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Hide Keyboard"))," action button. Select the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Email")),' field to perform the set text action using "',(0,n.kt)("a",{parentName:"li",href:"mailto:email@domain.com"},"email@domain.com"),'"',(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"."))),(0,n.kt)("li",{parentName:"ul"},"Follow the same steps for the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Mobile Number")),", ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Password"))," and ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Re-enter Password"))," text fields."),(0,n.kt)("li",{parentName:"ul"},"Finally, click on ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Tap"))," to tap on the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Create Account."))," You will be redirected to the main screen."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Stop")," on the Mobile Recorder dialog to stop the recording.")),(0,n.kt)("p",null,"The recorded actions should look like the following:"),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/5.png",alt:"Recorded Action Katalon Studio"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"OK"))," to complete the recording and then choose a folder to store your captured objects. Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"OK"))," again for Katalon Studio to generate test scripts.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"View your test case in the Manual mode or replay it to validate all recorded steps. Let's now add validation points for this test case to verify whether the recorded inputs can set to the text fields successfully.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the first ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Set Text ","_"),"from the")," Add toolbar or by clicking on Add from the context menu, add a Mobile Keyword step and choose the keyword Verify Element Attribute Value.",(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/new-test-case.png"}),"_"),(0,n.kt)("li",{parentName:"ul"},"Select the test object representing the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Name"))," text field, which is ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"widget.EditText0")),", as an object to verify."),(0,n.kt)("li",{parentName:"ul"},"Double click on the input cell for the test step and set the following values.")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/6.png",alt:"Input Cell Katalon Studio"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perform the same procedure for other ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Set Text"))," actions.")),(0,n.kt)("p",null,"After adding the validation test steps, try to run the test case again. This time the execution takes longer for Katalon Studio to perform the validation steps, but your test case should pass successfully since the input value is identical to the validation value. You can test with different values or connect to a data source."),(0,n.kt)("h2",{id:"run-your-mobile-automation-test-case-on-kobiton-cloud-devices"},"Run your mobile automation test case on Kobiton cloud devices"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upload the Material Login Demo app to Kobiton App Repository. From the Repository view, select the more actions button and select the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Automation snippet."))," Copy the app id ","(","the one in bold, for example,",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Kobiton-store:184"))," as shown below",")"," and save it.")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/7-300x196.png",alt:"Kobiton App Repository"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Navigate to the Kobiton Devices page. Choose the devices on which you want to run your test and mark those devices as a favorite by clicking on the star icon. 3. Let's enable Kobiton integration.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open Katalon Studio Preferences ","(",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Windows"))," -",">"," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Katalon Studio Preferences")),")"," then select ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Kobiton")),".")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/8.png",alt:"Katalon Studio Preferences"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enter your Kobiton username and password. Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Connect"))," to test the connection and authentication. With a valid account, Katalon Studio automatically retrieves the API keys from Kobiton."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Apply"))," or ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"OK"))," to save the settings.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'Open the test case created from the previous section, replace the input application path for the first step "',(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},'Start Application"'))," with the Kobiton app id saved in Step 1.")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/tests-explorer.png"}),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"A new menu option appears under the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Execution"))," toolbar as below. Click on ",(0,n.kt)("strong",{parentName:"li"},"Kobiton Device")," to open the Kobiton Favorite Device dialog.")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton/9-200x300.png",alt:"menu options Katalon Studio"}),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Select your target device for execution from the Kobiton Favorite Device list. Click OK to start execution with that device. It may take some time to initialize the connection to Kobiton prior to the execution. You should be able to login to Kobiton sessions to view the result once the test execution completed.")),(0,n.kt)("p",null,"The combination of ",(0,n.kt)("a",{parentName:"p",href:"https://www.katalon.com"},"Katalon Studio")," and ",(0,n.kt)("a",{parentName:"p",href:"https://kobiton.com"},"Kobiton")," empowers automation engineers in validating the quality of mobile apps by allowing them to execute recorded test cases on hundreds of devices quickly. This solution does not only save them time but also maximizes test coverage. Katalon Studio is a FREE \u2013 a full-featured automation solution that can be downloaded at ",(0,n.kt)("a",{parentName:"p",href:"https://www.katalon.com"},"www.katalon.com"),". Kobiton is a cloud-based mobile device farm that provides real devices for both manual and automation testing with an affordable price. You can register a ",(0,n.kt)("a",{parentName:"p",href:"https://kobiton.com"},"Kobiton account")," for free trial."),(0,n.kt)("p",null,"For more details, please visit Katalon Studio ",(0,n.kt)("a",{parentName:"p",href:"https://katalon.com/resources-center/blog"},"Resources Center"),"."))}d.isMDXComponent=!0}}]);