"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[23049],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(h,l(l({ref:e},d),{},{components:a})):r.createElement(h,l({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58853:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"topic-0ac44697-c1be-4b67-8c99-085aece53b90",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder"},l="How to extract and verify textual patterns in a test case with Katalon Recorder",i={unversionedId:"topic-0ac44697-c1be-4b67-8c99-085aece53b90",id:"topic-0ac44697-c1be-4b67-8c99-085aece53b90",title:"How to extract and verify textual patterns in a test case with Katalon Recorder",description:"In a test project, you might want to verify that the application under test \\(AUT\\) displays information in the correct pattern. For example:",source:"@site/docs/topic-0ac44697-c1be-4b67-8c99-085aece53b90.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/topic-0ac44697-c1be-4b67-8c99-085aece53b90.mdx",tags:[],version:"current",frontMatter:{id:"topic-0ac44697-c1be-4b67-8c99-085aece53b90",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder"},sidebar:"tutorialSidebar",previous:{title:"How to Use Control Flow commands in a Test Case in Katalon Recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case-in-katalon-recorder"},next:{title:"How to extract and write data in a test case with Katalon Recorder",permalink:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case-with-katalon-recorder"}},s={},c=[{value:"Test case scenario",id:"test-case-scenario",level:2},{value:"Record the test case",id:"record-the-test-case",level:2},{value:"Extract and verify textual patterns",id:"extract-and-verify-textual-patterns",level:2}],d={toc:c},p="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder"},"How to extract and verify textual patterns in a test case with Katalon Recorder"),(0,n.kt)("p",null,"In a test project, you might want to verify that the application under test ","(","AUT",")"," displays information in the correct pattern. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Price tag pattern of a shopping item."),(0,n.kt)("li",{parentName:"ul"},"Email address pattern."),(0,n.kt)("li",{parentName:"ul"},"Phone number pattern.")),(0,n.kt)("p",null,"Katalon Recorder supports this pattern matching process with several commands. Specifically, commands in Katalon Recorder can take patterns as input to verify several data types on an AUT."),(0,n.kt)("p",null,"This tutorial shows you how to extract and verify displayed text on an AUT. The pattern used in our case is a ",(0,n.kt)("em",{parentName:"p"},"regular expression")," ","(","regex",")",": a sequence of characters that specifies a search pattern."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"To use the sample project of this tutorial, navigate to ",(0,n.kt)("strong",{parentName:"li"},"Actions")," ",">"," ",(0,n.kt)("strong",{parentName:"li"},"Sample Projects"),", then add the ",(0,n.kt)("strong",{parentName:"li"},"Extract data and verify textual patterns")," project."))),(0,n.kt)("h2",{id:"test-case-scenario"},"Test case scenario"),(0,n.kt)("p",null,'In our example, we have a scenario "extract and verify item price," which consists of these steps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the AUT - Katalon Zack Market: ",(0,n.kt)("code",null,(0,n.kt)("a",{parentName:"li",href:"https://demo-store.katalon.com"},"https://demo-store.katalon.com")),"."),(0,n.kt)("li",{parentName:"ol"},"On the homepage, select an item."),(0,n.kt)("li",{parentName:"ol"},"On the item details page, extract the item price."),(0,n.kt)("li",{parentName:"ol"},"Verify that the item price is in the correct pattern: a currency symbol ","(",(0,n.kt)("code",null,"$"),")"," followed by a numeric value.")),(0,n.kt)("p",null,"Our AUT displays the price text of an item as follows:"),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-AUT-selected-shopping-item.png",alt:"Katalon Recorder AUT overview"}),(0,n.kt)("p",null,"We can see that the price text consists of the item price ","(",(0,n.kt)("code",null,"$25.99"),")"," and the currency code ","(",(0,n.kt)("code",null,"CAD"),")","."),(0,n.kt)("p",null,"To automate the scenario with Katalon Recorder, we propose the following process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Record the test case: we record the test case to open the AUT and select an item."),(0,n.kt)("li",{parentName:"ol"},"Extract and verify textual patterns: we manually modify the recorded test case to select and verify the price text.")),(0,n.kt)("h2",{id:"record-the-test-case"},"Record the test case"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Katalon Recorder, create a test suite and a test case, then click ",(0,n.kt)("strong",{parentName:"p"},"Record")," to start recording."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-New-test-case.png",alt:"Katalon Recorder new test case"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In an active browser tab, navigate to the AUT - Katalon Zack Market: ",(0,n.kt)("code",null,(0,n.kt)("a",{parentName:"p",href:"https://demo-store.katalon.com"},"https://demo-store.katalon.com")),"."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-AUT.png",alt:"AUT"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the displayed homepage, select an item."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-AUT-select-an-item.png",alt:"AUT - Select an item"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Katalon Recorder, click ",(0,n.kt)("strong",{parentName:"p"},"Stop")," to stop the test recording."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-Click-Stop.png",alt:"Recorded test case"}))),(0,n.kt)("h2",{id:"extract-and-verify-textual-patterns"},"Extract and verify textual patterns"),(0,n.kt)("p",null,"To complete the scenario, we manually modify the test case to extract only the price from the displayed price text. Then, we verify that the price is in the correct pattern using a regex."),(0,n.kt)("p",null,"Open the recorded test case and follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Store the displayed price text. We want to store the price text into a variable."),(0,n.kt)("p",{parentName:"li"},"To do so, we use the ",(0,n.kt)("code",null,"storeText")," command."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-storeText-command.png",alt:"Katalon Recorder storeText command"}),(0,n.kt)("p",{parentName:"li"},"We need to capture the ",(0,n.kt)("strong",{parentName:"p"},"Target")," ","(","the price text locator",")"," for the command. Click on the ",(0,n.kt)("strong",{parentName:"p"},"Selector")," tool, then hover the cursor over and select the price text on the page."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-Selector-tool.png",alt:"Katalon Recorder capture target"}),(0,n.kt)("p",{parentName:"li"},"In our case, the captured locator is the XPath: ",(0,n.kt)("code",null,"xpath=//div","[@id='root']","/div/div/div/div","[2]","/div/div","[2]","/div/div","[3]"),". We then store the text into the ",(0,n.kt)("code",null,"displayedPrice")," variable."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-storeText-command-with-target-and-value.png",alt:"Katalon Recorder complete storeText command"}),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Command"),(0,n.kt)("th",null,"Target"),(0,n.kt)("th",null,"Value")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"storeText")),(0,n.kt)("td",null,(0,n.kt)("code",null,"xpath=//div[@id='root']/div/div/div/div[2]/div/div[2]/div/div[3]")),(0,n.kt)("td",null,(0,n.kt)("code",null,"displayedPrice"))),"    "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Extract the item price."),(0,n.kt)("p",{parentName:"li"},"We use the ",(0,n.kt)("code",null,"storeEval")," command to extract the item price ",(0,n.kt)("code",null,"$25.99")," ","(","the first six characters",")"," from the text."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-storeEval-command.png",alt:"Katalon Recorder storeEval command with a Javascript expression"}),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Command"),(0,n.kt)("th",null,"Target"),(0,n.kt)("th",null,"Value")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"storeEval")),(0,n.kt)("td",null,(0,n.kt)("code",null,'"$\u2774displayedPrice\u2775".substring(0, 6)')),(0,n.kt)("td",null,(0,n.kt)("code",null,"itemPrice"))),"    ")),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("code",null,"storeEval")," command evaluates a Javascript expression, then stores the result into a variable. In our example, the target Javascript expression is ",(0,n.kt)("code",null,'"$',"\u2774","displayedPrice","\u2775",'".substring(0, 6)'),". Here, ",(0,n.kt)("code",null,"substring()")," is a method that extracts characters from a string, given two indices."),(0,n.kt)("p",{parentName:"li"},"The expression evaluates the ",(0,n.kt)("code",null,"displayedPrice")," variable into its value. Then it extracts and stores the first six characters into the ",(0,n.kt)("code",null,"itemPrice"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the item price with regex."),(0,n.kt)("p",{parentName:"li"},"We use the ",(0,n.kt)("code",null,"verifyEval")," command with a regex in the ",(0,n.kt)("strong",{parentName:"p"},"Value")," field. This command verifies that the item price is displayed in the correct price pattern."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-verifyEval-command.png",alt:"Katalon Recorder verifyEval command with a Javascript expression and regular expression"}),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Command"),(0,n.kt)("th",null,"Target"),(0,n.kt)("th",null,"Value")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"verifyEval")),(0,n.kt)("td",null,(0,n.kt)("code",null,'"$\u2774itemPrice\u2775"')),(0,n.kt)("td",null,(0,n.kt)("code",null,"regexp:^[$](\\d+\\.\\d+)"))),"    ")),(0,n.kt)("p",{parentName:"li"},"To input a regex as a value, we prefix the expression with ",(0,n.kt)("code",null,"regexp:"),". For our purpose, we use the regex ",(0,n.kt)("code",null,"^","[","$","]","(\\d+",".","\\d+)")," that checks if the item price starts with a dollar sign and ends with a numeric value.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Play the test case and verify the ",(0,n.kt)("strong",{parentName:"p"},"Log")," view results."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-Log-view-results.png",alt:"Katalon Recorder Log view results"}))))}u.isMDXComponent=!0}}]);