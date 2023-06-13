"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[59449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),k=l(n),m=a,u=k["".concat(s,".").concat(m)]||k[m]||p[m]||r;return n?o.createElement(u,i(i({ref:t},d),{},{components:n})):o.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[k]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={id:"concept-a64738c2-ff95-414b-90c5-206866ac76c5",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio"},i="How to Handle Textbox Checkbox and Radio Button in Katalon Studio",c={unversionedId:"concept-a64738c2-ff95-414b-90c5-206866ac76c5",id:"concept-a64738c2-ff95-414b-90c5-206866ac76c5",title:"How to Handle Textbox Checkbox and Radio Button in Katalon Studio",description:"This tutorial illustrates how to handle Textbox, Checkbox, Radio buttons using Katalon Studio. The reference source code is provided at the end of the tutorial.",source:"@site/docs/concept-a64738c2-ff95-414b-90c5-206866ac76c5.mdx",sourceDirName:".",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio",permalink:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-a64738c2-ff95-414b-90c5-206866ac76c5.mdx",tags:[],version:"current",frontMatter:{id:"concept-a64738c2-ff95-414b-90c5-206866ac76c5",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"How to handle Web Tables in Katalon Studio",permalink:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-web-tables-in-katalon-studio"},next:{title:"How to Handle File Uploads in Katalon Studio",permalink:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-file-uploads-in-katalon-studio"}},s={},l=[{value:"How to Handle Textbox",id:"how-to-handle-textbox",level:2},{value:"How to Handle Button and Checkbox",id:"how-to-handle-button-and-checkbox",level:2},{value:"How to Handle Radio Button",id:"how-to-handle-radio-button",level:2}],d={toc:l},k="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio"},"How to Handle Textbox Checkbox and Radio Button in Katalon Studio"),(0,a.kt)("p",null,"This tutorial illustrates how to handle Textbox, Checkbox, Radio buttons using Katalon Studio. The reference source code is provided at the end of the tutorial."),(0,a.kt)("h2",{id:"how-to-handle-textbox"},"How to Handle Textbox"),(0,a.kt)("p",null,"A textbox is a field that allows users to enter text as an input. Textbox and textarea are similar but the latter allows multiple lines and more characters."),(0,a.kt)("p",null,"Users can perform certain actions on textbox such as clear text, type text and validate the provided text using Katalon Studio."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario: Verifying the provided text in textbox")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1: Launch Browser"),(0,a.kt)("li",{parentName:"ul"},"Step 2: Navigate to URL"),(0,a.kt)("li",{parentName:"ul"},"Step 3: Click on Make Appointment"),(0,a.kt)("li",{parentName:"ul"},'Step 4: Enter username as "Katalon"'),(0,a.kt)("li",{parentName:"ul"},"Step 5: Validate the Enter Username is correctly entered or not")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Script Mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\n \nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\n \nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\n \nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\n \nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\n \nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\n \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\n \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\n \nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\n \nimport com.kms.katalon.core.testcase.TestCase as TestCase\n \nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\n \nimport com.kms.katalon.core.testdata.TestData as TestData\n \nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\n \nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\n \nimport com.kms.katalon.core.testobject.TestObject as TestObject\n \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\n \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\n \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\n \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\n \nimport internal.GlobalVariable as GlobalVariable\n \n'Invoking the browser'\n \nWebUI.openBrowser('')\n \n'Passing the URL'\n \nWebUI.navigateToUrl('http://demoaut.katalon.com/')\n \n'Click on the make Appointment Button'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))\n \n'Decalre username variable and assign the value'\n \n<strong>def</strong> userName = 'katalon'\n \n'Enter text to username field'\n \nWebUI.setText(findTestObject('Page_CURA Healthcare Service (1)/input_username'), userName)\n \n'Get the attribute value of username text field'\n \ninput_Value = WebUI.getAttribute(findTestObject('Page_CURA Healthcare Service (1)/input_username'), 'value')\n \n'verify the entered text and attribute value'\n \nWebUI.verifyMatch(userName, input_Value, <strong>false</strong>)\n \nWebUI.closeBrowser()\n\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manual Mode")),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/handle_textbox_checkbox_radio_button/Handle-text-box.png",alt:"Handle textbox using Katalon Studio Manual mode"}),(0,a.kt)("p",null,"In the script mode above, ",(0,a.kt)("strong",{parentName:"p"},"Def"),' is a keyword in Groovy used for declaration of variables. Username is a variable name, here storing the value "Katalon" in the ',(0,a.kt)("strong",{parentName:"p"},"username")," variable."),(0,a.kt)("h2",{id:"how-to-handle-button-and-checkbox"},"How to Handle Button and Checkbox"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario:")," To make an appointment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1: Launch the application under test ","(","URL: ",(0,a.kt)("a",{parentName:"li",href:"http://demoaut.katalon.com/"},"http://demoaut.katalon.com/"),")","."),(0,a.kt)("li",{parentName:"ul"},"Step 2: Click on Make Appointment ","(","verify the button and click operation",")","."),(0,a.kt)("li",{parentName:"ul"},"Step 3: Enter the valid username, password and click on Login button ","(","verify the button and click operation",")","."),(0,a.kt)("li",{parentName:"ul"},"Step 4: Make an appointment ","(","check, uncheck the ",(0,a.kt)("strong",{parentName:"li"},"checkbox")," and verify check, uncheck status",")",".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Script Mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\n \nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\n \nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\n \nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\n \nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\n \nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\n \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\n \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\n \nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\n \nimport com.kms.katalon.core.testcase.TestCase as TestCase\n \nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\n \nimport com.kms.katalon.core.testdata.TestData as TestData\n \nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\n \nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\n \nimport com.kms.katalon.core.testobject.TestObject as TestObject\n \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\n \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\n \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\n \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\n \nimport internal.GlobalVariable as GlobalVariable\n \n'Invoking Browser'\n \nWebUI.openBrowser('')\n \n'Launch the url'\n \nWebUI.navigateToUrl('http://demoaut.katalon.com/')\n \n'verify the element is clickable or not'\n \nWebUI.verifyElementClickable(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))\n \n'Click on Make Appointment Button'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))\n \n'Click on Login Button'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))\n \n'Select the Hongkong CURA Healthcare Center from dropdown'\n \nWebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',\n \n<strong>true</strong>)\n \n'check Hospital readmission check box'\n \nWebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))\n \n'verify Hospital readmission check box is checked'\n \nWebUI.verifyElementChecked(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'), 30)\n \n'un check Hospital readmission check box'\n \nWebUI.uncheck(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))\n \n'Verify uncheck Hospital readmission check box'\n \nWebUI.verifyElementNotChecked(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'), 30)\n \n'click on Medicadi radio button'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/input_programs'))\n \n'Click on calendar icon'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))\n \n'CLick on Calendar date'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))\n \n'Enter katalon text in comments box'\n \nWebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')\n \n'Click on Book Appointment'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))\n \n'Close the Browser'\n \nWebUI.closeBrowser()\n\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manual Mode")),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/handle_textbox_checkbox_radio_button/Handle-Button-and-Checkbox.png",alt:"Handle Button and Checkbox using Katalon Studio Manual mode"}),(0,a.kt)("p",null,"In the script above, the keyword ",(0,a.kt)("strong",{parentName:"p"},"VerifyElementClickable")," is used to validate whether the ",(0,a.kt)("strong",{parentName:"p"},"Make Appointment Button")," is clickable."),(0,a.kt)("p",null,"The keywords ",(0,a.kt)("strong",{parentName:"p"},"VerifyElementChecked")," and ",(0,a.kt)("strong",{parentName:"p"},"VerifyElementNotChecked")," are used to validate whether an element is checked or unchecked, respectively."),(0,a.kt)("h2",{id:"how-to-handle-radio-button"},"How to Handle Radio Button"),(0,a.kt)("p",null,"Radio Button is a toggle-button that allows you to check the operations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario:")," To make an appointment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1: Launch the application under test ","(","URL: ",(0,a.kt)("a",{parentName:"li",href:"http://demoaut.katalon.com/"},"http://demoaut.katalon.com/"),")","."),(0,a.kt)("li",{parentName:"ul"},"Step 2: Click on Make Appointment ","(","verify the button and click operation",")","."),(0,a.kt)("li",{parentName:"ul"},"Step 3: Enter a valid username, password and click on Login button ","(","verify the button and click operation",")","."),(0,a.kt)("li",{parentName:"ul"},"Step 4: Make an appointment ","(","check, uncheck the ",(0,a.kt)("strong",{parentName:"li"},"Radio Button")," and verify ",(0,a.kt)("strong",{parentName:"li"},"radio button")," check, uncheck status",")",".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Script Mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\n \nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\n \nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\n \nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\n \nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\n \nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\n \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\n \nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\n \nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\n \nimport com.kms.katalon.core.testcase.TestCase as TestCase\n \nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\n \nimport com.kms.katalon.core.testdata.TestData as TestData\n \nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\n \nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\n \nimport com.kms.katalon.core.testobject.TestObject as TestObject\n \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\n \nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\n \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\n \nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\n \nimport internal.GlobalVariable as GlobalVariable\n \n'Invoking Browser'\n \nWebUI.openBrowser('')\n \n'Launch the url'\n \nWebUI.navigateToUrl('http://demoaut.katalon.com/')\n \n'Click on Make Appointment Button'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))\n \n'Click on Login Button'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (1)/button_Login'))\n \n'Select the Hongkong CURA Healthcare Center from dropdown'\n \nWebUI.selectOptionByValue(findTestObject('Page_CURA Healthcare Service (2)/select_facility'), 'Hongkong CURA Healthcare Center',\n \n<strong>true</strong>)\n \n'Check Hospital readmission check box'\n \nWebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_hospital_readmission'))\n \n'Check on Medicadi radio button'\n \nWebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_Medicaid Radio'))\n \n'Check the None Radio Button'\n \nWebUI.verifyElementChecked(findTestObject('Page_CURA Healthcare Service (2)/input_Medicaid Radio'), 30)\n \n'Check on Medicadi radio button'\n \nWebUI.check(findTestObject('Page_CURA Healthcare Service (2)/input_None Radio'))\n \n'Verify unchecked status of Medicaid Radio button'\n \nWebUI.verifyElementNotChecked(findTestObject('Page_CURA Healthcare Service (2)/input_Medicaid Radio'), 30)\n \n'Verify the checked status of the None Radio Button'\n \nWebUI.verifyElementChecked(findTestObject('Page_CURA Healthcare Service (2)/input_None Radio'), 30)\n \n'Click on calendar icon'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/div_input-group-addon'))\n \n'Click on Calendar date'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/td_3'))\n \n'Enter katalon text in comments box'\n \nWebUI.setText(findTestObject('Page_CURA Healthcare Service (2)/textarea_comment'), 'Katalon')\n \n'Click on Book Appointment'\n \nWebUI.click(findTestObject('Page_CURA Healthcare Service (2)/button_Book Appointment'))\n \n'Close the Browser'\n \nWebUI.closeBrowser()\n\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manual Mode")),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/handle_textbox_checkbox_radio_button/Handle-Radio-Button.png",alt:"Handle Radio Button using Katalon Studio Manual Mode"}),(0,a.kt)("p",null,"The source code is available to be downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio/katalon-web-automation"},"here"),"."),(0,a.kt)("p",null,"For further instructions and help, refer to ",(0,a.kt)("a",{parentName:"p",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-text"},"[","WebUI","]"," Text")," and ",(0,a.kt)("a",{parentName:"p",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-check"},"[","WebUI","]"," Checkbox"),"."),(0,a.kt)("p",null,"You can also refer to ",(0,a.kt)("a",{parentName:"p",href:"https://forum.katalon.com/"},"Katalon Forum")," for more tutorials and discussions."))}p.isMDXComponent=!0}}]);