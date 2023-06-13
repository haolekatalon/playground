"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[36972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"concept-d00bf75b-5e2b-4d92-92c5-9841a052a7af",slug:"/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio"},i="Parameterize Web Test Objects in Katalon Studio",s={unversionedId:"concept-d00bf75b-5e2b-4d92-92c5-9841a052a7af",id:"concept-d00bf75b-5e2b-4d92-92c5-9841a052a7af",title:"Parameterize Web Test Objects in Katalon Studio",description:"Parameterize Web Test Objects and their properties",source:"@site/docs/concept-d00bf75b-5e2b-4d92-92c5-9841a052a7af.mdx",sourceDirName:".",slug:"/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio",permalink:"/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-d00bf75b-5e2b-4d92-92c5-9841a052a7af.mdx",tags:[],version:"current",frontMatter:{id:"concept-d00bf75b-5e2b-4d92-92c5-9841a052a7af",slug:"/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Manage Web Test Objects in Katalon Studio",permalink:"/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio"},next:{title:"Automation testing of shadow DOM elements with Katalon Studio",permalink:"/create-tests/test-objects/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio"}},l={},p=[{value:"Parameterize Web Test Objects and their properties",id:"parameterize-web-test-objects-and-their-properties",level:2},{value:"Example",id:"example",level:3},{value:"Escaping special characters",id:"escaping-special-characters",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parameterize-web-test-objects-in-katalon-studio"},"Parameterize Web Test Objects in Katalon Studio"),(0,n.kt)("h2",{id:"parameterize-web-test-objects-and-their-properties"},"Parameterize Web Test Objects and their properties"),(0,n.kt)("p",null,"With parameterizing test objects, you can update test objects' locators dynamically by using either local or global variables. This feature comes in handy in these use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to perform a bulk action on a group of similar elements without defining multiple Test Objects, such as checking on multiple checkboxes;"),(0,n.kt)("li",{parentName:"ul"},"You can only identify an object's locator during runtime because there's a group of similar objects and the chosen one cannot be specified beforehand in test scripts.")),(0,n.kt)("p",null,"Katalon Studio supports parameterizing properties of test objects to handle dynamic objects. Dynamic objects are those that have some particular changes in their properties based on specific business rules. The example below describes how to apply this feature."),(0,n.kt)("p",null,"Open ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio-samples/healthcare-tests"},"the Health Care sample project"),", navigate to Object Repository/Page","_","Login."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the object whose properties you want to parameterize. In this case, the selected test object is ",(0,n.kt)("code",null,"txt","_","Username"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Capture its locator and create a variable with this syntax ",(0,n.kt)("code",null,"$","\u2774","variable","_","name","\u2775")," as a place holder for its dynamic property. For example, we create the ",(0,n.kt)("code",null,"$","\u2774","id","\u2775")," variable for the ",(0,n.kt)("code",null,"id")," property's value. You can parameterize test objects with different selection methods."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attributes ",(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-web-object/attributes.png",width:896}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"XPath ",(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-web-object/xpath-id.png",width:606}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CSS ",(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-web-object/css-id.png",width:395}))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using the parameterized test objects."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Manual View")),(0,n.kt)("p",{parentName:"li"},"Open your Test Case in the ",(0,n.kt)("strong",{parentName:"p"},"Manual View")," and double-click on the object that you want to parameterize its properties."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-web-object/1.declare.png",width:907}),(0,n.kt)("p",{parentName:"li"},"In the displayed ",(0,n.kt)("strong",{parentName:"p"},"Test Object Input")," dialog, declare the expected dynamic property as a variable in the ",(0,n.kt)("strong",{parentName:"p"},"Variables")," panel."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-web-object/2.variables-tab.png",width:576}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Param Type: the variable type ","(","The default type is String",")","."),(0,n.kt)("li",{parentName:"ul"},"Param: the variable name."),(0,n.kt)("li",{parentName:"ul"},"Value Type: the type of the variable's value."),(0,n.kt)("li",{parentName:"ul"},"Value: a specific value of that variable.\nIn this case, Katalon Studio uses the ",(0,n.kt)("code",null,"id")," variable with its specific value as ",(0,n.kt)("code",null,"4TH4T934253&#^%(")," to find the ",(0,n.kt)("code",null,"txt","_","UserName")," object."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Script View")),(0,n.kt)("p",{parentName:"li"},"Once the property is declared, you can switch to the ",(0,n.kt)("strong",{parentName:"p"},"Script View")," and adjust the perceived value of the property. Typically, users want to pass the property value as a variable or refer to data files."),(0,n.kt)("p",{parentName:"li"},"The general syntax to find a test object using a dynamic property is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"findTestObject('{your test object}', [('{property}') : '{value of property}'])\n\n")),(0,n.kt)("p",{parentName:"li"},"For example:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"One dynamic property:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"findTestObject('Page_Login/txtUserName', ['id' : '48415648'])\n\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Two dynamic properties:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"findTestObject('Page_Login/txtUserName', ['id' : '48415648', [('name') : 'controler14585']])\n\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Using the variable for the dynamic property's value:",(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-test-object/image2017-6-30-203A223A13.png"}))))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"There are some cases in which you can identify an object's locator only when it's runtime. In other words, the exact locator of the intended object cannot be specified beforehand in test scripts. In the",(0,n.kt)("a",{parentName:"p",href:"https://katalon-demo-cura.herokuapp.com/profile.php#login"},"Cura Healthcare Center appointment web page"),", for instance, there are three options of the healthcare program, and the selected one is only known with passing data during execution."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-web-test-object/medicare.png",width:670}),(0,n.kt)("p",null,"How can we specify an option in a test script? By parameterizing its locator. You need to create only one Test Object, and you can determine which the exact object is with the passed data during execution."),(0,n.kt)("p",null,"Now for the exciting part: How do you determine which attribute","(","s",")"," you have to adjust to parameterize this object's XPath? The answer to this question is mainly based on your knowledge of the web AUT. Knowing the pattern of how similar objects are grouped is the key. In this case, the index's value of ",(0,n.kt)("strong",{parentName:"p"},"label attribute")," is the value to parameterize for options on the current web screen."),(0,n.kt)("p",null,"Depending on your preferred ",(0,n.kt)("a",{parentName:"p",href:"/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio"},"selection method"),", including XPath ","(","Smart XPath",")",", Attributes or CSS, the captured object has a corresponding selected locator."),(0,n.kt)("p",null,"Below steps are how to apply parameterizing test objects in this case:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Capture the ",(0,n.kt)("strong",{parentName:"p"},"XPath")," locator of those 3 options and save them to the Object Repository in Katalon Studio."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Medicare"),": ",(0,n.kt)("code",null,"//","<",'[@id=\\"appointment\\"]',"/div/div/form/div","[3]","/div/label","[1]"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Medicaid"),": ",(0,n.kt)("code",null,"//","<",'[@id=\\"appointment\\"]',"/div/div/form/div","[3]","/div/label","[2]"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"None"),": ",(0,n.kt)("code",null,"//","<",'[@id=\\"appointment\\"]',"/div/div/form/div","[3]","/div/label","[3]")))))),(0,n.kt)("p",null,"As can be seen in the captured XPath locators of those 3 options, they share this same pattern ",(0,n.kt)("code",null,"//","<",'[@id=\\"appointment\\"]',"/div/div/form/div","[3]","/div/label"),"; hence, in this case, the property variation is the label index."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the test object view of the ",(0,n.kt)("em",{parentName:"li"},"Medicare"),"object, create an XPath property and enter the captured XPath locator as its value.")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-web-object/label1.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a variable as a place holder for the property change in the locator with this syntax:",(0,n.kt)("code",null,"$","\u2774","Variable","_","name","\u2775")),(0,n.kt)("p",{parentName:"li"},"In this case, it's the label index so we create ",(0,n.kt)("code",null,"[$","\u2774","index","\u2775]"),"."),(0,n.kt)("p",{parentName:"li"},"Modify this XPath value with that variable. There are two options for you: to parameterize the whole XPath value or merely a part of it."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"$\u2774index\u2775")," = ",(0,n.kt)("code",null,'//<[@id=\\"appointment\\"]/div/div/form/div[3]/div/label[1]'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"$\u2774index\u2775")," = ",(0,n.kt)("code",null,"[1]")," => the XPath locator: ",(0,n.kt)("code",null,'//<[@id=\\"appointment\\"]/div/div/form/div[3]/div/label[$\u2774index\u2775]'),".")))),(0,n.kt)("p",null,"Above is a simple approach to leverage the '",(0,n.kt)("strong",{parentName:"p"},"Parameterized Test Object"),"', a powerful feature. There are other approaches you can apply in your test scripts to reduce the efforts of maintaining many Test Objects at the same time."),(0,n.kt)("h3",{id:"escaping-special-characters"},"Escaping special characters"),(0,n.kt)("p",null,"To use a special character like ",(0,n.kt)("code",null,"$")," or ",(0,n.kt)("code",null,"\\")," as a regular one in any place that uses parameterized test objects, prepend it with a backslash: ",(0,n.kt)("code",null,"\\")," ","(","the so-called escape character",")","."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "productName": ${GlobalVariable.productName},\n    "unit": "\\\\bottle\\",\n    "quantity": 50,\n    "discount": ${ if (productName == "wine") { return 30 } else { return 0}}\n    "note": "Currency unit of ${GlobalVariable.productName} is \\$."\n\n}\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Without ",(0,n.kt)("code",null,"\\"),": ",(0,n.kt)("em",{parentName:"li"},"note: Currency unit of $","{","GlobalVariable.productName","}"," is $"),"."),(0,n.kt)("li",{parentName:"ul"},"With ",(0,n.kt)("code",null,"\\"),": ",(0,n.kt)("em",{parentName:"li"},"note: Currency unit of wine is $"),".")))}d.isMDXComponent=!0}}]);