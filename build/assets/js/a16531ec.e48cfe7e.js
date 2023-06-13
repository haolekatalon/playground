"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[72010],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),g=i,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||r;return a?n.createElement(d,o(o({ref:e},u),{},{components:a})):n.createElement(d,o({ref:e},u))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},89582:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={id:"concept-9d80283e-f4eb-497b-84a3-1baa7e326c38",slug:"/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio"},o="Configure Jira integration in Katalon Studio",s={unversionedId:"concept-9d80283e-f4eb-497b-84a3-1baa7e326c38",id:"concept-9d80283e-f4eb-497b-84a3-1baa7e326c38",title:"Configure Jira integration in Katalon Studio",description:"This article shows you how to configure Jira integration in Katalon Studio.",source:"@site/docs/concept-9d80283e-f4eb-497b-84a3-1baa7e326c38.mdx",sourceDirName:".",slug:"/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio",permalink:"/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-9d80283e-f4eb-497b-84a3-1baa7e326c38.mdx",tags:[],version:"current",frontMatter:{id:"concept-9d80283e-f4eb-497b-84a3-1baa7e326c38",slug:"/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Enable TestOps - Jira integration for test management",permalink:"/organize/integration-for-organizing-tests/jira-integration/enable-testops-jira-integration-for-test-management"},next:{title:"Manage BDD test cases with Jira integration",permalink:"/organize/integration-for-organizing-tests/jira-integration/manage-bdd-test-cases-with-jira-integration"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Enable Jira integration in Katalon Studio",id:"enable-jira-integration-in-katalon-studio",level:2},{value:"Import BDD custom fields from Jira to Katalon Studio (Applicable to Jira Cloud integration)",id:"import-bdd-custom-fields-from-jira-to-katalon-studio-applicable-to-jira-cloud-integration",level:2},{value:"Import test cases from Jira to Katalon Studio",id:"import-test-cases-from-jira-to-katalon-studio",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-jira-integration-in-katalon-studio"},"Configure Jira integration in Katalon Studio"),(0,i.kt)("p",null,"This article shows you how to configure Jira integration in Katalon Studio."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An active Katalon Studio Enterprise license."),(0,i.kt)("li",{parentName:"ul"},"Install the ",(0,i.kt)("strong",{parentName:"li"},"Jira Integration")," plugin for Katalon Studio. You can find the plugin here: ",(0,i.kt)("a",{parentName:"li",href:"https://store.katalon.com/product/3/Jira-Integration"},"Jira Integration"),"."),(0,i.kt)("li",{parentName:"ul"},"In Jira, install this plugin from the Atlassian Marketplace website: ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.atlassian.com/apps/1217501/katalon-bdd-test-automation-for-jira"},"Katalon Studio and TestOps integration"),".")),(0,i.kt)("h2",{id:"enable-jira-integration-in-katalon-studio"},"Enable Jira integration in Katalon Studio"),(0,i.kt)("p",null,"To enable Jira integration in a Katalon Studio project , follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Katalon Studio, go to ",(0,i.kt)("strong",{parentName:"p"},"Projects")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Plugins")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"JIRA"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Enable integration")," checkbox.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," section, fill in the criteria as shown below:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Server URL"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Jira Cloud: ",(0,i.kt)("code",null,"https://","<","site","_","name",">",".atlassian.net")),(0,i.kt)("li",{parentName:"ul"},"For Jira Data Center ","(","Jira Server",")",": ",(0,i.kt)("code",null,"https://domain")," without any trailing parts, for example, ",(0,i.kt)("code",null,"/secure"),". Your server URL for Jira Data Center should have a valid SSL certificate."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Username"),": your username or the registered email of the Atlassian account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Password/API token"),": The Atlassian Cloud's API token. To learn more about generating API in Atlassian, you can refer to the Atlassian document: ",(0,i.kt)("a",{parentName:"p",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"Manage Atlassian token for your Atlassian account"),".",(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/KS-TDAP-733-Fill-in-Jira-username-password.png",alt:"Fill in Jira username and password"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Connect")," to start the authentication process. A pop-up dialog indicates that the Atlassian account connects successfully.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After successfully authenticating with Jira, all relevant ",(0,i.kt)("strong",{parentName:"p"},"JIRA Projects")," and ",(0,i.kt)("strong",{parentName:"p"},"Issue Types")," will be retrieved and displayed under the ",(0,i.kt)("strong",{parentName:"p"},"Submit Options")," section. You can specify the default project and the default issue type for submission here."),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Field"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Default Jira Project"),(0,i.kt)("td",null,"The default Jira project to submit tickets.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Default Jira Issue Type"),(0,i.kt)("td",null,"The default Jira issue type to create when submitting tickets.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Use Test Case name as Summary for Jira ticket"),(0,i.kt)("td",null,"To use the test case name as a summary for submitted tickets.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Attach Screenshot to Jira ticket"),(0,i.kt)("td",null,"To include taken screenshots during test execution in submitted tickets.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Attach Log to Jira ticket"),(0,i.kt)("td",null,"To include the execution log in submitted tickets.")),"    ")),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/KS-TDAP-733-Submit-options-Jira-integration.png",alt:"Submit options in Jira integration"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply and Close")," to complete the Jira integration."))),(0,i.kt)("p",null,"You have successfully enabled Jira integration in Katalon Studio."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Jira integration configuration is available in the project scope only. If you want to integrate Jira in another Katalon project, you have to repeat the above steps."))),(0,i.kt)("h2",{id:"import-bdd-custom-fields-from-jira-to-katalon-studio-applicable-to-jira-cloud-integration"},"Import BDD custom fields from Jira to Katalon Studio ","(","Applicable to Jira Cloud integration",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This step is necessary if you want to conduct BDD testing with Jira. If you don't run BDD tests or you are integrating Jira Data Center ","(","Jira Server",")"," with Katalon, skip this section and move to ",(0,i.kt)("a",{parentName:"p",href:"/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio#"},"Import test cases from Jira to Katalon Studio"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You have configured the Katalon BDD fields in Jira. See: ",(0,i.kt)("a",{parentName:"p",href:"/organize/integration-for-organizing-tests/jira-integration/manage-bdd-test-cases-with-jira-integration"},"Manage BDD test cases with Jira integration"),"."))),(0,i.kt)("p",null,"From Katalon Studio version 7.8.0 onwards, you can import the BDD custom fields to Katalon Studio when importing BDD feature files for Jira Cloud integration. Follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Projects")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Plugin")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Jira"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Fetch Options")," section, check the ",(0,i.kt)("strong",{parentName:"p"},"Enable retrieving content of the specified custom field")," box."),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-Jira-integration-BDD-testing/Image/KS-TDAP-733-Enable-fetch-BDD-custom-fields.png",width:500,alt:"Fetch BDD custom fields to Katalon Studio"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a custom field from the dropdown list."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Only the existing custom field ID is valid for this configuration."),(0,i.kt)("li",{parentName:"ul"},"In case you can not find the custom field in the dropdown list, click ",(0,i.kt)("strong",{parentName:"li"},"Fetch Custom Fields")," to fetch the latest list from the connected Jira Cloud.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply and Close")," to apply your settings."))),(0,i.kt)("p",null,"You have successfully imported BDD custom fields from Jira to Katalon Studio. You can now start importing your BDD test cases to Katalon Studio to execute and view test results."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next step"),"  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio"},"Configure Jira integration in Katalon Studio")),(0,i.kt)("h2",{id:"import-test-cases-from-jira-to-katalon-studio"},"Import test cases from Jira to Katalon Studio"),(0,i.kt)("p",null,"Katalon Studio allows you to pull test cases from Jira and link Jira issues to Katalon, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Katalon toolbar, select ",(0,i.kt)("strong",{parentName:"p"},"Jira")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Import Test Case from JIRA JQL"),". An ",(0,i.kt)("strong",{parentName:"p"},"Import Test Case from JIRA JQL")," dialog opens."),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/KS-TDAP-733-Import-Jira-test-cases-options.png",width:300,alt:"Import Jira test cases"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the open dialog, fill the JIRA Query Language ","(","JQL",")"," script of the desired test case in the ",(0,i.kt)("strong",{parentName:"p"},"Jira JQL")," box. To find out the JQL script of your test case, you can refer to the Atlassian document here: ",(0,i.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/jirasoftwarecloud/advanced-searching-764478330.html"},"Search for issues using JQL"),"."),(0,i.kt)("p",{parentName:"li"},"For example, we want to import test cases from the ",(0,i.kt)("strong",{parentName:"p"},"TDAP")," project with ",(0,i.kt)("strong",{parentName:"p"},"Bug")," type and ",(0,i.kt)("strong",{parentName:"p"},"Complete")," status. After searching for the Jira ticket using the JQL query, copy and paste the JQL script into the ",(0,i.kt)("strong",{parentName:"p"},"Jira JQL")," box."),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/ks-jira-advanced-search.png",alt:"Search the Jira tickets via JQL query"}),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/ks-import-jira.png",width:500,alt:"Copy the JQL query from Jira to Katalon Studio"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," By default, the ",(0,i.kt)("strong",{parentName:"p"},"Import BDD feature files")," box is selected. This option allows you to import BDD feature files to run BDD tests. In case you don't want to run BDD tests, uncheck this option.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"OK"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Test Case Folder Selection")," dialog opens. Select the destination to store the issues. Click ",(0,i.kt)("strong",{parentName:"p"},"OK"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"Jira Issues")," dialog opens. Click ",(0,i.kt)("strong",{parentName:"p"},"OK")," to import the test case from Jira."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You can only import test cases from a Jira ticket once. You can not repeat this action."))))),(0,i.kt)("p",null,"Once done, you can see a new test case in Katalon Studio with the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The test case name is the Jira ticket summary/subject.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The test case description is the Jira ticket content.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you select ",(0,i.kt)("strong",{parentName:"p"},"Import BDD feature file")," as in step 3, Katalon Studio creates a new corresponding feature file in ",(0,i.kt)("strong",{parentName:"p"},"Include/Feature")," with the following information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The feature file name is the same as the test case name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The scenario in the feature file is the scenario specified in the fetched BDD custom field of the imported Jira ticket."),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/KS-TDAP-733-Final-results-after-importing-test-cases.png",alt:"Results after importing Jira tickets"}),(0,i.kt)("img",{src:"/doc_images/Documents/Organize/Integration_For_Organizing_Tests/Jira_Integration/configure-jira-integration-in-KS/Image/KS-TDAP-733-Results-after-importing-BDD-feature-files.png",alt:"Results after importing BDD feature file"}))))),(0,i.kt)("p",null,"You can continue to add additional steps in the test case as needed. Then click ",(0,i.kt)("strong",{parentName:"p"},"Run")," for playback."),(0,i.kt)("p",null,"After importing test cases from Jira to Katalon Studio, you can view test results and submit tickets to Jira."),(0,i.kt)("p",null,"If you conduct BDD testing, you can view the results in Katalon TestOps."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.katalon.com/katalon-analytics/docs/overview.html"},"Katalon TestOps")," is an enterprise-ready platform for QA Orchestration, test analytics, and reporting."),(0,i.kt)("p",null,"Refer to: ",(0,i.kt)("a",{parentName:"p",href:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-bdd-test-results-in-testops"},"View BDD test results in Katalon TestOps"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next step"),"  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/analyze/integration-for-test-analyzing/jira-integration/view-katalon-studio-test-results-in-jira-tickets"},"View Katalon Studio test results in Jira tickets")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/analyze/integration-for-test-analyzing/jira-integration/submit-an-issue-from-katalon-studio-to-jira"},"Submit an issue from Katalon Studio to Jira")))}m.isMDXComponent=!0}}]);