"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[21277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={id:"concept-a89a7c21-e68f-48dd-b602-9c91b9379b9c",slug:"/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio"},i="Share test reports via email in Katalon Studio",l={unversionedId:"concept-a89a7c21-e68f-48dd-b602-9c91b9379b9c",id:"concept-a89a7c21-e68f-48dd-b602-9c91b9379b9c",title:"Share test reports via email in Katalon Studio",description:"After a test suite or test suite collection execution, you might want to automatically send summary reports to your own email or other stakeholders to notify them about the test result. This document shows you how to set up your mail server and customize email reports to automatically send out a summary report email whenever a test execution finishes.",source:"@site/docs/concept-a89a7c21-e68f-48dd-b602-9c91b9379b9c.mdx",sourceDirName:".",slug:"/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio",permalink:"/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-a89a7c21-e68f-48dd-b602-9c91b9379b9c.mdx",tags:[],version:"current",frontMatter:{id:"concept-a89a7c21-e68f-48dd-b602-9c91b9379b9c",slug:"/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Upload test reports from Pytest to Katalon TestOps",permalink:"/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops"},next:{title:"Add mail recipients in Katalon Studio test suites",permalink:"/analyze/reports/manage-reports/add-mail-recipients-in-katalon-studio-test-suites"}},s={},u=[{value:"What you can do in email settings",id:"what-you-can-do-in-email-settings",level:2},{value:"Set up your mail server",id:"set-up-your-mail-server",level:2},{value:"Email Template",id:"email-template",level:2},{value:"Report Format",id:"report-format",level:2},{value:"Body Template",id:"body-template",level:2},{value:"Support Global Variables in Email Settings",id:"support-global-variables-in-email-settings",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"share-test-reports-via-email-in-katalon-studio"},"Share test reports via email in Katalon Studio"),(0,n.kt)("p",null,"After a test suite or test suite collection execution, you might want to automatically send summary reports to your own email or other stakeholders to notify them about the test result. This document shows you how to set up your mail server and customize email reports to automatically send out a summary report email whenever a test execution finishes."),(0,n.kt)("h2",{id:"what-you-can-do-in-email-settings"},"What you can do in email settings"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"From version 7.5.0 onwards, Katalon Studio Enterprise users can send email reports after executing Test Suite Collections."))),(0,n.kt)("p",null,"In Katalon Studio, you can configure a global email settings in ",(0,n.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Email")," for the mail server, email template, and report format. You can customize the email template to match the report requirements of your stakeholders and choose which types of report files to be sent as attachments, for example, HTML, CSV, PDF, Log, or PNG."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execution-settings/KS-Project-Settings-Email.png",alt:"Email settings"}),(0,n.kt)("p",null,"By default, after you successfully set up your mail server, sender, and recipients, Katalon Studio sends all email reports for test suite executions, including test suites inside a test suite collection."),(0,n.kt)("p",null,"As an exclusive feature for Katalon Studio Enterprise, you have an option to keep your mailbox tidy by only sending email reports for test suite collection executions and skipping all emails for test suites stored inside that test suite collection. This option is useful when executing test suite collections containing many test suites."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/emails-settings/options.png",alt:"Email settings"}),(0,n.kt)("h2",{id:"set-up-your-mail-server"},"Set up your mail server"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mail Server Settings")," define the mail server Katalon Studio uses for sending emails. To set up your mail server, you need to fill in your mail server host, port, credential, and choose a protocol option."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Host and Port"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host"),": The domain name of the mail server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Port"),": The port to be used for that server.\nBelow is a list of some common outgoing mail ","(","SMTP",")"," server configurations:")))),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Email sever"),(0,n.kt)("th",null,"Host"),(0,n.kt)("th",null,"Port"),(0,n.kt)("th",null,"Reference")),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Gmail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"smtp.gmail.com")),(0,n.kt)("td",null,"465 or 587"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://support.google.com/mail/answer/7126229"},"Check Gmail through other email platforms"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Outlook"),(0,n.kt)("td",null,(0,n.kt)("code",null,"smtp.office365.com")),(0,n.kt)("td",null,"587 or 25"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365"},"How to set up a multifunction device or application to send email using Microsoft 365 or Office 365"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Yahoo! Mail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"smtp.mail.yahoo.com")),(0,n.kt)("td",null,"465"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://help.yahoo.com/kb/SLN4724.html"},"POP access settings and instructions for Yahoo Mail"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Username and Password"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Username"),": Your full email account to authenticate with the server ","(","e.g., ",(0,n.kt)("a",{parentName:"p",href:"mailto:yourusername@gmail.com"},"yourusername@gmail.com"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Password"),": Your email password to authenticate with the server. This could be a password generated from App Passwords.\nFor Gmail users:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If your email accounts are using two-step authentication, you can use Google App Passwords to set up a Gmail account in Katalon Studio. An App Password is a 16-digit passcode that gives Katalon Studio permission to access your Google Account. In the ",(0,n.kt)("strong",{parentName:"p"},"Select app")," dropdown of App Passwords, select the option ",(0,n.kt)("strong",{parentName:"p"},"Other ","(","Custom name",")")," to generate an app password for Katalon Studio. Then, use the generated passwords to put in the password section of ",(0,n.kt)("strong",{parentName:"p"},"Mail Server Settings"),". For details, see Google Account Help documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/185833"},"Sign in with App Passwords"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you do not use two-step authentication, you can allow less secure apps to access your account. However, to help keep your account secure, starting May 30, 2022, \u200b\u200bGoogle will no longer support the use of third-party apps or devices which ask you to sign in to your Google Account using only your username and password. For detail, see Google Account Help documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/6010255"},"Less secure apps & your Google Account"),".\nFor Yahoo! Mail, make sure to allow less secure apps to access your account. Follow this guide: ",(0,n.kt)("a",{parentName:"p",href:"https://help.yahoo.com/kb/account/SLN27791.html"},"Ways to securely access Yahoo Mail"),"."))),(0,n.kt)("p",{parentName:"li"},"As some SMTP servers do not require authentication and username in email address format, Katalon Studio version 8.3.0 onwards does not validate usernames and passwords.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Protocol"),": The protocol to communicate with the mail server. There are three options:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"None"),(0,n.kt)("li",{parentName:"ul"},"SSL ","(","Secure Sockets Layer",")"),(0,n.kt)("li",{parentName:"ul"},"TLS ","(","Transport Layer Security",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Encrypt authentication data"),": For sensitive data protection, we recommend enabling ",(0,n.kt)("strong",{parentName:"p"},"Encrypt authentication data"),"."))),(0,n.kt)("p",null,"After you fill in your mail server information, you can send a test email to check if the mail server is set up correctly. Input an email in the ",(0,n.kt)("strong",{parentName:"p"},"Recipients")," field, then click ",(0,n.kt)("strong",{parentName:"p"},"Send Test Email"),". The ",(0,n.kt)("strong",{parentName:"p"},"Send test email")," button is only enabled once ",(0,n.kt)("strong",{parentName:"p"},"Mail Server Settings")," and ",(0,n.kt)("strong",{parentName:"p"},"Recipients")," are filled correctly."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/emails-settings/send-test-email.png",alt:"send test email"}),(0,n.kt)("h2",{id:"email-template"},"Email Template"),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execution-settings/KS-Project-Settings-Email-Template-Report-Format.png",alt:"Email Template and Report format"}),(0,n.kt)("p",null,"You can define the sender, recipients ","(","the list of emails to receive reports",")",", email subject, and body template in this section."),(0,n.kt)("p",null,"From version 8.3.0 onwards, Katalon Studio also supports adding Test Suite and Test Suite Collection names in your email subject with the placeholders ",(0,n.kt)("code",null,"$","\u2774","suiteName","\u2775")," and ",(0,n.kt)("code",null,"$","\u2774","suiteCollectionName","\u2775"),", respectively."),(0,n.kt)("h2",{id:"report-format"},"Report Format"),(0,n.kt)("p",null,"You can decide whether to include a test execution report as an email attachment or not. Specifically, you are given options to include ",(0,n.kt)("strong",{parentName:"p"},"log files")," and configure which ",(0,n.kt)("strong",{parentName:"p"},"report format")," ","(","HTML, CSV, and PDF",")"," of test executions to be sent as attachments in the email report."),(0,n.kt)("h2",{id:"body-template"},"Body Template"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"From version 8.5.5, you might see the TinyMCE logo on the email body template in ",(0,n.kt)("strong",{parentName:"li"},"Email Settings"),", but not on the final email sent to the recipient list. TinyMCE is an open-source licensed under MIT. The logo appears because Katalon Studio upgraded the TinyMCE to version 6.2.0 to ensure security."))),(0,n.kt)("p",null,"To customize the email's body templates:"),(0,n.kt)("p",null,"For Test Suite's email, click ",(0,n.kt)("strong",{parentName:"p"},"Edit Template for Test Suite Execution")," or go to ",(0,n.kt)("strong",{parentName:"p"},"Project/Settings/Email/Template/Test Suite"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Manage_Reports/Share-reports-via-emails-in-Studio/image/ks-855-email-template.png",width:700}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hostName: Host's name"),(0,n.kt)("li",{parentName:"ul"},"os: Operating system"),(0,n.kt)("li",{parentName:"ul"},"browser: Browser's name and version"),(0,n.kt)("li",{parentName:"ul"},"deviceId: Id of the executed device"),(0,n.kt)("li",{parentName:"ul"},"deviceName: Name of the executed device"),(0,n.kt)("li",{parentName:"ul"},"suiteId: Id of the test suite"),(0,n.kt)("li",{parentName:"ul"},"suiteName: Name of the test suite"),(0,n.kt)("li",{parentName:"ul"},"executionProfile: Profile for Test Suite execution"),(0,n.kt)("li",{parentName:"ul"},"totalPassed: Total passed test cases"),(0,n.kt)("li",{parentName:"ul"},"totalFailed: Total failed test cases"),(0,n.kt)("li",{parentName:"ul"},"totalError: Total error test cases")),(0,n.kt)("p",null,"For Test Suite Collection's email, ",(0,n.kt)("strong",{parentName:"p"},"Edit Template for Test Suite Collection Execution")," or go to ",(0,n.kt)("strong",{parentName:"p"},"Project/Settings/Email/Template/Test Suite Collection"),"."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Manage_Reports/Share-reports-via-emails-in-Studio/image/ks-855-tsc.png",width:700,alt:"test suite collection"}),(0,n.kt)("p",null,"All fields in the templates are editable. Click ",(0,n.kt)("strong",{parentName:"p"},"Apply")," when finished."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Where:")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"executionProfile")," is not available in the **Test Suite Collection Execution** email reports."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hostName: Host's name"),(0,n.kt)("li",{parentName:"ul"},"os: Operating system"),(0,n.kt)("li",{parentName:"ul"},"suiteCollectionName: Name of Test Suite Collection"),(0,n.kt)("li",{parentName:"ul"},"startTime: When the Test Suite Collection started running"),(0,n.kt)("li",{parentName:"ul"},"duration: The duration of test execution"),(0,n.kt)("li",{parentName:"ul"},"totalPassed: Total passed test cases"),(0,n.kt)("li",{parentName:"ul"},"totalFailed: Total failed test cases"),(0,n.kt)("li",{parentName:"ul"},"totalError: Total error test cases")),(0,n.kt)("h2",{id:"support-global-variables-in-email-settings"},"Support Global Variables in Email Settings"),(0,n.kt)("p",null,"From version 7.7.0 onwards, you can customize Email Settings with Global Variables and override their default values via the Command line."),(0,n.kt)("p",null,"The below section guides you on how to do that with a usage example."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Scope of application"),":"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When sending email reports on a Test Suite, the Global Variables in the selected Execution Profile are applied.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When sending email reports on a Test Suite Collection:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For the Test Suite Collection: only the Global Variables in the Default Profile are applied."),(0,n.kt)("li",{parentName:"ul"},"For Test Suites contained in that Test Suite Collection: the Global Variables in the selected Execution Profile of each Test Suite are applied."))))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/create-tests/data-driven-testing/global-variables"},"Define a Global Variable")," in your Execution Profile."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/emails-settings/global-variable.png",width:668})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Call the ",(0,n.kt)("a",{parentName:"p",href:"/create-tests/data-driven-testing/global-variables#"},"parameterized Global Variable")," in supported locations including Sender, Recipients, Cc, Bcc, and Subject by using the syntax ",(0,n.kt)("code",null,"$","\u2774","GlobalVariable.name","\u2775"),"."),(0,n.kt)("p",{parentName:"li"},"From version 8.3.0 onwards, Katalon Studio supports using global variables in Body Template."),(0,n.kt)("p",{parentName:"li"},'For example, the declared value, "Regression Test - Latest Release", is prepended to the email subject:'),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/emails-settings/subject.png",width:578}),(0,n.kt)("p",{parentName:"li"},"Send a test email so you can see the effect."),(0,n.kt)("img",{src:"/doc_images/Documents/Analyze/Reports/Manage_Reports/Share-reports-via-emails-in-Studio/image/ks-email.png"}))),(0,n.kt)("p",null,"When running your Test Suite/Test Suite Collection in console mode, you can also pass another value to override the default value of that Global Variable with the ",(0,n.kt)("code",null,"-g","_","<","variableName",">","=","<","variableValue",">")," syntax. For instance, ",(0,n.kt)("code",null,"-g","_","<","subject",">","=","<","Release 7.7",">"),"."))}c.isMDXComponent=!0}}]);