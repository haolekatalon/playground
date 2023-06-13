"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[40733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(k,s(s({ref:t},l),{},{components:a})):r.createElement(k,s({ref:t},l))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={id:"concept-87fc38ab-371e-4600-b637-e6ca3c70bddd",slug:"/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio"},s="[WebUI] Create and Run Web UI Test Case using Record and Playback in Katalon Studio",i={unversionedId:"concept-87fc38ab-371e-4600-b637-e6ca3c70bddd",id:"concept-87fc38ab-371e-4600-b637-e6ca3c70bddd",title:"\\[WebUI\\] Create and Run Web UI Test Case using Record and Playback in Katalon Studio",description:"This tutorial demonstrates how to create a Web UI test case with Katalon Studio using Record and Playback.",source:"@site/docs/concept-87fc38ab-371e-4600-b637-e6ca3c70bddd.mdx",sourceDirName:".",slug:"/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",permalink:"/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-87fc38ab-371e-4600-b637-e6ca3c70bddd.mdx",tags:[],version:"current",frontMatter:{id:"concept-87fc38ab-371e-4600-b637-e6ca3c70bddd",slug:"/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Sample projects overview",permalink:"/get-started/sample-projects/sample-projects-overview"},next:{title:"Sample WebUI tests project \\(Healthcare sample\\) in Katalon Studio",permalink:"/get-started/sample-projects/webui/sample-webui-tests-project-healthcare-sample-in-katalon-studio"}},c={},p=[{value:"Create and Run your first Web UI test case",id:"create-and-run-your-first-web-ui-test-case",level:2},{value:"Create New Project",id:"create-new-project",level:3},{value:"Record",id:"record",level:3},{value:"Playback a test case",id:"playback-a-test-case",level:3},{value:"View the test case in script mode",id:"view-the-test-case-in-script-mode",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio"},"[","WebUI","]"," Create and Run Web UI Test Case using Record and Playback in Katalon Studio"),(0,o.kt)("p",null,"This tutorial demonstrates how to create a Web UI test case with Katalon Studio using ",(0,o.kt)("strong",{parentName:"p"},"Record")," and ",(0,o.kt)("strong",{parentName:"p"},"Playback"),"."),(0,o.kt)("p",null,'Go through the scenario "Sign in the shopping page to purchase a tank top" to get familiar with these features. The basic steps are:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new project to store recorded actions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Interact with the web page."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sign in."),(0,o.kt)("li",{parentName:"ul"},"Purchase a tank top."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop recording and Save scripts."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Shopping Cart")," sample project is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/shopping-cart-tests"},"here"),"."),(0,o.kt)("h2",{id:"create-and-run-your-first-web-ui-test-case"},"Create and Run your first Web UI test case"),(0,o.kt)("h3",{id:"create-new-project"},"Create New Project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Test Explorer")," on the sidebar ",">"," click ",(0,o.kt)("strong",{parentName:"p"},"New Project"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the displayed ",(0,o.kt)("strong",{parentName:"p"},"New Project")," dialog:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter project ",(0,o.kt)("strong",{parentName:"p"},"Name"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In project ",(0,o.kt)("strong",{parentName:"p"},"Type"),", select ",(0,o.kt)("strong",{parentName:"p"},"Web"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Project"),", select ",(0,o.kt)("strong",{parentName:"p"},"Sample Web UI...","(","Shopping Cart",")"),", the ",(0,o.kt)("strong",{parentName:"p"},"Repository URL")," is filled automatically.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Browse a ",(0,o.kt)("strong",{parentName:"p"},"Location")," to store your project ",">"," click ",(0,o.kt)("strong",{parentName:"p"},"OK"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/new-project.png",width:750}))))),(0,o.kt)("h3",{id:"record"},"Record"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Web Recorder Utility")," icon to open the Web Recorder."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/web-record-icon.png",width:200})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the displayed ",(0,o.kt)("strong",{parentName:"p"},"Web Recorder"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter URL: ",(0,o.kt)("code",null,(0,o.kt)("a",{parentName:"p",href:"https://demo-store.katalon.com"},"https://demo-store.katalon.com")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select a browser to start recording ","(","Chrome is recommended",")","."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/selectb-browser.png",width:750})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait until the browser is launched and ready to interact."),(0,o.kt)("p",{parentName:"li"},"When you hover an element, the browser highlights and displays that element's correspondent XPath on the top of the page."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/xpath.png"}),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You can use hotkey to capture objects ","(","pressing the combination of ","<","Command + back quote",">",")",". The captured object will be highlighted with a green border.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Interact with the web page. In this scenario, we will sign in and purchase a tank top."),(0,o.kt)("p",{parentName:"li"},"During your recording, ",(0,o.kt)("strong",{parentName:"p"},"Katalon Web Recorder")," captures all the objects that you have interacted with. When you enter the ",(0,o.kt)("strong",{parentName:"p"},"Password")," field, ",(0,o.kt)("strong",{parentName:"p"},"Katalon Web Recorder")," uses the '",(0,o.kt)("a",{parentName:"p",href:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-encrypted-text"},"Set Encrypted Text"),"' keyword automatically. This input value will be encrypted to ensure security."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/recorded-actions.png",width:750})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you finish purchasing ",">"," click ",(0,o.kt)("strong",{parentName:"p"},"Save script")," to stop recording and save the captured objects. ",(0,o.kt)("strong",{parentName:"p"},"Katalon Web Recorder")," exports a list of objects used in the test case."),(0,o.kt)("p",{parentName:"li"},"Create a new folder or select an existing one in ",(0,o.kt)("strong",{parentName:"p"},"Object Repository")," ",">"," click ",(0,o.kt)("strong",{parentName:"p"},"OK"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/select-repo.png",width:750}),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Katalon Studio allows you to continue recording using the existing test case to reduce your effort on modifying existing ones. ",(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/test-case-modifying.png",width:750})))))),(0,o.kt)("h3",{id:"playback-a-test-case"},"Playback a test case"),(0,o.kt)("p",null,"To playback the recorded scenario:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the test case where you saved the recorded actions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main toolbar, select any browser on the drop-down list next to ",(0,o.kt)("strong",{parentName:"p"},"Run"),"."),(0,o.kt)("p",{parentName:"li"},"Katalon Studio will execute the chosen test case with the recorded steps accordingly."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/healthcare-samples/KS-TOOLBAR-Chrome.png",width:250,alt:"Playback"}))),(0,o.kt)("h2",{id:"view-the-test-case-in-script-mode"},"View the test case in script mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows\nimport internal.GlobalVariable as GlobalVariable\nimport org.openqa.selenium.Keys as Keys\n\nWebUI.openBrowser('')\n\nWebUI.navigateToUrl('https://demo-store.katalon.com/')\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/svg_Zack Market_svg-inline--fa fa-user fa-w-14'))\n\nWebUI.setText(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_Email_email'), 'thuy.ngo@katalon.com')\n\nWebUI.setEncryptedText(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_Password_password'), 'GklqZBguAPQ=')\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_Password_button_btn__2lzmo'))\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/div_All Products_search_auto__TZ-uB'))\n\nWebUI.setText(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_All Products_auto_input__2ud9e'), 'tank top')\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/span_Tank Top'))\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/img_Clear All_card-img-top'))\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/img'))\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/span_Buy Now'))\n\nWebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/span_Confirm checkout'))\n\nWebUI.closeBrowser()\n\n")),(0,o.kt)("p",null,"Next: ",(0,o.kt)("a",{parentName:"p",href:"/execute/execute-tests-with-katalon-studio/execute-a-test-case"},"Execute and Debug a Test Case"),"."),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview"},"Troubleshoot automated web testing"),"."))}u.isMDXComponent=!0}}]);