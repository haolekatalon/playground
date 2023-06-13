"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[99600],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(o),k=n,m=u["".concat(s,".").concat(k)]||u[k]||p[k]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},45952:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={id:"concept-8725d721-ef99-4b41-9474-2d7f797b3a25",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property"},i="[WebUI] Modify Object Property",l={unversionedId:"concept-8725d721-ef99-4b41-9474-2d7f797b3a25",id:"concept-8725d721-ef99-4b41-9474-2d7f797b3a25",title:"\\[WebUI\\] Modify Object Property",description:"Description",source:"@site/docs/concept-8725d721-ef99-4b41-9474-2d7f797b3a25.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-8725d721-ef99-4b41-9474-2d7f797b3a25.mdx",tags:[],version:"current",frontMatter:{id:"concept-8725d721-ef99-4b41-9474-2d7f797b3a25",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property"},sidebar:"tutorialSidebar",previous:{title:"\\[WebUI\\] Maximize Window",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-maximize-window"},next:{title:"\\[WebUI\\] Mouse Over",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webui-modify-object-property"},"[","WebUI","]"," Modify Object Property"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Modify existing property or add a new property to test object. Use when test object has attributes changing in runtime. This keyword does not modify the object saved in Object Repository, instead, it creates another test object, modifies and returns this test object. Hence, users must use a variable to store the returned object."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Param Type"),(0,n.kt)("th",null,"Mandatory"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"testObject"),(0,n.kt)("td",null,"Test Object"),(0,n.kt)("td",null,"Required"),(0,n.kt)("td",null,"Represent a web element.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"propertyName"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Required"),(0,n.kt)("td",null,"Name of the property, for example, xpath, id, name,... If the property already exists in the object, the keyword will modify its related artifacts; if not, the keyword will add a new property.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"matchCondition"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Required"),(0,n.kt)("td",null,"Condition to match property name with property value, for example, equals, not equals,... In case the property already exists, input null to this argument to keep the old value of match condition.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"modifyValue"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Required"),(0,n.kt)("td",null,"Value of the property. In case the property already exists, input null to this argument to keep the old property value.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"isActive"),(0,n.kt)("td",null,"Boolean"),(0,n.kt)("td",null,"Required"),(0,n.kt)("td",null,"True if the property is checked (used to find the test object); otherwise, false. In case the property already exists, input null to this argument to keep the old value.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"flowControl"),(0,n.kt)("td",null,"FailureHandling"),(0,n.kt)("td",null,"Optional"),(0,n.kt)("td",null,"Specify ",(0,n.kt)("a",{href:"/maintain/configure-failure-handling-settings-in-katalon-studio"},"failure handling")," schema to determine whether the execution should be allowed to continue or stop.")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"TestObject"),(0,n.kt)("td",null,"The newly created TestObject.")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,'You want to modify property "xpath" of the object "btn',"_",'Login" and saved the modified object as "new',"_",'btn".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory\nimport com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository\nimport com.kms.katalon.core.testobject.TestObject as TestObject\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport internal.GlobalVariable as GlobalVariable\n\n'Open browser and navigate to AUT'\nWebUI.openBrowser(GlobalVariable.G_SiteURL)\n\n'Input username'\nWebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)\n\n'Input password'\nWebUI.setText(findTestObject('Page_Login/txt_Password'), Password)\n \n'Modify xpath of \\'Login\\' button'\nnew_btn = WebUI.modifyObjectProperty(findTestObject('Page_Login/btn_Login'), 'xpath', 'equals', '//*[@type=\\\"button\\\"]', false)\n\n'Click on new_btn'\nWebUI.click(new_btn)\n\n'Close browser'\nWebUI.closeBrowser()\n\n")))}p.isMDXComponent=!0}}]);