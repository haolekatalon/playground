"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[88909],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>b});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=o.createContext({}),p=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(a),u=n,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?o.createElement(b,i(i({ref:e},c),{},{components:a})):o.createElement(b,i({ref:e},c))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14775:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={id:"concept-9a0a94b0-86e8-4e99-9caa-5365739cdd5d",slug:"/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio"},i="Spy Web Utility in Katalon Studio",l={unversionedId:"concept-9a0a94b0-86e8-4e99-9caa-5365739cdd5d",id:"concept-9a0a94b0-86e8-4e99-9caa-5365739cdd5d",title:"Spy Web Utility in Katalon Studio",description:"Spy Web Utility offers an intelligent object capturing capability in web testing. With the utility, you can flexibly capture test objects by specifying several properties and locating methods.",source:"@site/docs/concept-9a0a94b0-86e8-4e99-9caa-5365739cdd5d.mdx",sourceDirName:".",slug:"/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio",permalink:"/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-9a0a94b0-86e8-4e99-9caa-5365739cdd5d.mdx",tags:[],version:"current",frontMatter:{id:"concept-9a0a94b0-86e8-4e99-9caa-5365739cdd5d",slug:"/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Create test case with Record and Playback in Katalon Studio",permalink:"/create-tests/record-and-spy/webui-record-and-spy-utilities/create-test-case-with-record-and-playback-in-katalon-studio"},next:{title:"Record web utility in Katalon Studio",permalink:"/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio"}},s={},p=[{value:"Capture objects using Spy Web Utility",id:"capture-objects-using-spy-web-utility",level:2},{value:"Define additional objects manually",id:"define-additional-objects-manually",level:2},{value:"Get web element XPath or CSS locator",id:"get-web-element-xpath-or-css-locator",level:2}],c={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spy-web-utility-in-katalon-studio"},"Spy Web Utility in Katalon Studio"),(0,n.kt)("p",null,"Spy Web Utility offers an intelligent object capturing capability in web testing. With the utility, you can flexibly capture test objects by specifying several properties and locating methods."),(0,n.kt)("p",null,"This guide shows you how to use Spy Web Utility to capture and manually define test objects."),(0,n.kt)("h2",{id:"capture-objects-using-spy-web-utility"},"Capture objects using Spy Web Utility"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To open the Spy Web Utility, from the main toolbar, click on the ",(0,n.kt)("strong",{parentName:"p"},"Spy Web")," button."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Spy-Web-Utility-toolbar.png",width:500,alt:"Spy Web Utility on toolbar"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the displayed ",(0,n.kt)("strong",{parentName:"p"},"Object Spy")," dialog, specify the URL of the application under test ","(","AUT",")"," and the web browser. Click on the ",(0,n.kt)("strong",{parentName:"p"},"Start")," button to start capturing."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Object-Spy-dialog.png",width:500,alt:"New Object Spy dialog"}),(0,n.kt)("p",{parentName:"li"},"Here you have two options for web browsers: ",(0,n.kt)("strong",{parentName:"p"},"New Browsers")," and ",(0,n.kt)("strong",{parentName:"p"},"Active Browsers"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/WebUI_Record_And_Spy_Utilities/spy-web-utility/image/ks-840-browser.png",width:500,alt:"spy browser"}),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Supported browsers")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"New Browsers"),(0,n.kt)("td",null,"Start a new browser and start spying web objects from that browser."),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("p",null,"Chrome")),(0,n.kt)("li",null,(0,n.kt)("p",null,"Firefox")),(0,n.kt)("li",null,(0,n.kt)("p",null,"Edge Chromium"))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Active Browsers"),(0,n.kt)("td",null,"Focus on the current active Chrome browser and start spying web objects from it.",(0,n.kt)("p",null,"Katalon Studio installs ",(0,n.kt)("a",{href:"https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid"},"Katalon Recorder")," as an add-on to help with recording for this type of browser.")),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("p",null,"Chrome")),(0,n.kt)("li",null,(0,n.kt)("p",null,"Firefox")),(0,n.kt)("li",null,(0,n.kt)("p",null,"Edge Chromium (available from version 8.4.0)"))))),"    "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Katalon Studio launches the selected browser. Hover the mouse cursor over the web element to be captured."),(0,n.kt)("p",{parentName:"li"},"Spy Web Utility highlights the web object with a red border. An overlay pane is also displayed at the top edge of the screen to show relevant XPath information."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Web-Spy-highlighted-element.png",width:700,alt:"Web Spy highlights element"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To capture the object, right-click on the web element and select ",(0,n.kt)("strong",{parentName:"p"},"Capture"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/WebUI_Record_And_Spy_Utilities/spy-web-utility/image/ks-855-capture-object.png",width:700,alt:"capture object"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Captured objects appear in the ",(0,n.kt)("strong",{parentName:"p"},"Object Spy")," dialog",(0,n.kt)("strong",{parentName:"p"},".")),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Object-Spy-captured-object.png",width:500,alt:"Captured object"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button to add captured objects to ",(0,n.kt)("strong",{parentName:"p"},"Object Repository"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your captured objects now show in the Object Repository window. The objects are displayed in the left pane. Select your save folder from the right pane. Click ",(0,n.kt)("strong",{parentName:"p"},"OK")," when done."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Add-element-to-object-repository.png",width:650,alt:"Add Element to object repository"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The captured objects are added to ",(0,n.kt)("strong",{parentName:"p"},"Object Repository")," accordingly."))),(0,n.kt)("h2",{id:"define-additional-objects-manually"},"Define additional objects manually"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add a Page element"),": Web objects need a web page to hold them. Click on the ",(0,n.kt)("strong",{parentName:"p"},"New page")," button from the toolbar to add a new Page element manually.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add a Frame element")," ","(","optional",")",": If the new object is a nested object, a frame is needed to locate the element. Frames are web elements that usually contain many other web objects."),(0,n.kt)("p",{parentName:"li"},"In our example, the AUT doesn't contain any frame. We don't need to add a Frame element.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add an Object element"),": Click on the ",(0,n.kt)("strong",{parentName:"p"},"New object")," button from the toolbar to manually add a web object. Click ",(0,n.kt)("strong",{parentName:"p"},"Delete")," to remove any unwanted element.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Object Properties")," section, provide the object name for the recently added object, choose ",(0,n.kt)("strong",{parentName:"p"},"Selection Method")," options and specify the ",(0,n.kt)("strong",{parentName:"p"},"Properties")," for the new object."),(0,n.kt)("p",{parentName:"li"},"Here we define a button element using the ",(0,n.kt)("strong",{parentName:"p"},"Attributes")," selection method. The chosen properties are ",(0,n.kt)("strong",{parentName:"p"},"tag")," and ",(0,n.kt)("strong",{parentName:"p"},"id"),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Object-Spy-new-object.png",width:500,alt:"Add Element to object repository"}),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Selection Method")),(0,n.kt)("p",{parentName:"li"},"This is the method that Katalon Studio uses to detect web elements."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Attributes"),": Users are allowed to specify the properties of an object in the ",(0,n.kt)("strong",{parentName:"p"},"Properties Grid"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"XPath")," / ",(0,n.kt)("strong",{parentName:"p"},"CSS"),": Users can input an XPath or CSS selector of an object into the ",(0,n.kt)("strong",{parentName:"p"},"Selected Locator")," section.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Image"),": To detect a web element using its image, users need to provide a path to the image in the ",(0,n.kt)("strong",{parentName:"p"},"Selected Locator")," section."))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Properties Grid")),(0,n.kt)("p",{parentName:"li"},"This section displays all the properties of the selected object. Users can manually specify or edit the value of any property here."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Selected Locator")),(0,n.kt)("p",{parentName:"li"},"Based on the selected method, this editable text field allows users to adjust the current selector of an object or manually add a selector using either an XPath or a CSS selector. Users can also select an object using its image by providing a path to the image of the web element."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"To learn more about object selection methods, refer to this document: ",(0,n.kt)("a",{parentName:"li",href:"/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio"},"Selection Method"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Verify and Highlight")," button to verify the object."),(0,n.kt)("p",{parentName:"li"},"If there is a web object with matched properties in the ",(0,n.kt)("strong",{parentName:"p"},"Properties Grid"),", it is highlighted red in the opened browser, and the message ",(0,n.kt)("strong",{parentName:"p"},"Found X element using XPath Selector")," is displayed."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Object-Spy-verify-object.png",width:700,alt:"Verify object"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once finished, click ",(0,n.kt)("strong",{parentName:"p"},"Save")," to add the object to ",(0,n.kt)("strong",{parentName:"p"},"Object Repository")," as normal."))),(0,n.kt)("h2",{id:"get-web-element-xpath-or-css-locator"},"Get web element XPath or CSS locator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the open spying browser, right-click on the target web element and select ",(0,n.kt)("strong",{parentName:"p"},"Inspect"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Record_And_Spy/WebUI_Record_And_Spy_Utilities/spy-web-utility/image/ks-855-inspect.png"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the inspector window, the selected element is highlighted, indicating the location of the target element in the HTML DOM. Right-click on the highlighted line and select ",(0,n.kt)("strong",{parentName:"p"},"Copy")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Copy XPath")," or ",(0,n.kt)("strong",{parentName:"p"},"Copy selector"),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Web-element-copy-XPath.png",width:700,alt:"Copy XPath"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"Object Spy")," window and paste into the ",(0,n.kt)("strong",{parentName:"p"},"Selected Locator")," or the ",(0,n.kt)("strong",{parentName:"p"},"Object Properties")," section."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/spy-web-utility/KS-Object-Spy-paste-XPath.png",width:500,alt:"Paste XPath into Selected Locator section"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Verify and Highlight")," button to check if Katalon Studio can locate the object.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once finished, click ",(0,n.kt)("strong",{parentName:"p"},"Save")," to add the object to ",(0,n.kt)("strong",{parentName:"p"},"Object Repository")," as normal."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See also"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio"},"Working with Object Properties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio"},"Object Identification Best Practices"))))}m.isMDXComponent=!0}}]);