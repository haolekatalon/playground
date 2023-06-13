"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[87803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),k=o,m=c["".concat(l,".").concat(k)]||c[k]||d[k]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={id:"concept-647c27a5-9d6c-4334-b9b4-823e72ae6a9c",slug:"/execute/ci-cd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windows-macos"},r="Use Katalon plugins for Jenkins integration on Windows/macOS",s={unversionedId:"concept-647c27a5-9d6c-4334-b9b4-823e72ae6a9c",id:"concept-647c27a5-9d6c-4334-b9b4-823e72ae6a9c",title:"Use Katalon plugins for Jenkins integration on Windows/macOS",description:"This tutorial shows you how to integrate Katalon with Jenkins on Windows and macOS via the Katalon plugin for Jenkins.",source:"@site/docs/concept-647c27a5-9d6c-4334-b9b4-823e72ae6a9c.mdx",sourceDirName:".",slug:"/execute/ci-cd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windows-macos",permalink:"/execute/ci-cd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windows-macos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-647c27a5-9d6c-4334-b9b4-823e72ae6a9c.mdx",tags:[],version:"current",frontMatter:{id:"concept-647c27a5-9d6c-4334-b9b4-823e72ae6a9c",slug:"/execute/ci-cd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windows-macos"},sidebar:"tutorialSidebar",previous:{title:"Jenkins Integration Overview",permalink:"/execute/ci-cd-integrations/jenkins-integration/jenkins-integration-overview"},next:{title:"Use Katalon plugins for Jenkins integration on Ubuntu",permalink:"/execute/ci-cd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Execute Katalon Studio tests in Jenkins with the Katalon plugin",id:"execute-katalon-studio-tests-in-jenkins-with-the-katalon-plugin",level:2},{value:"Install the Katalon plugin on Jenkins",id:"install-the-katalon-plugin-on-jenkins",level:3},{value:"Upload Katalon projects on Jenkins",id:"upload-katalon-projects-on-jenkins",level:3},{value:"Build your project",id:"build-your-project",level:3},{value:"Troubleshoot empty videos recorded after running tests on Windows",id:"troubleshoot-empty-videos-recorded-after-running-tests-on-windows",level:3},{value:"See also",id:"see-also",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-katalon-plugins-for-jenkins-integration-on-windowsmacos"},"Use Katalon plugins for Jenkins integration on Windows/macOS"),(0,o.kt)("p",null,"This tutorial shows you how to integrate Katalon with Jenkins on Windows and macOS via the ",(0,o.kt)("strong",{parentName:"p"},"Katalon")," plugin for Jenkins."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"An active Katalon Runtime Engine license. To learn more about activating the Katalon Runtime Engine license, you can refer to this document: Activate Katalon License."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install Jenkins. Follow the instructions in the following Jenkins documents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Windows: ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/installing/windows/"},"Windows"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For macOS: ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/installing/macos/"},"macOS")))),(0,o.kt)("h2",{id:"execute-katalon-studio-tests-in-jenkins-with-the-katalon-plugin"},"Execute Katalon Studio tests in Jenkins with the Katalon plugin"),(0,o.kt)("h3",{id:"install-the-katalon-plugin-on-jenkins"},"Install the Katalon plugin on Jenkins"),(0,o.kt)("p",null,"To run Katalon tests on Jenkins, you need to install the Katalon plugin on Jenkins. Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to Jenkins and go to ",(0,o.kt)("strong",{parentName:"p"},"Manage Jenkins")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Manage Plugins"),"."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Plugin Manager")," page appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Available")," tab and search for the Katalon plugin."),(0,o.kt)("img",{src:"/doc_images/Global_reuse/Common_tasks_warehouse/Integration/image/jenkins-install-plugin.png",width:850,alt:"plugin-manager"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the plugin and choose ",(0,o.kt)("strong",{parentName:"p"},"Install without restart"),"."))),(0,o.kt)("h3",{id:"upload-katalon-projects-on-jenkins"},"Upload Katalon projects on Jenkins"),(0,o.kt)("p",null,"After installing the ",(0,o.kt)("strong",{parentName:"p"},"Katalon")," plugin, you can now start the Katalon Studio test in Jenkins."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Jenkins Dashboard, go to ",(0,o.kt)("strong",{parentName:"p"},"New Item")," and create a ",(0,o.kt)("strong",{parentName:"p"},"Freestyle project"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/jenkins-plugin-windows/KS-JENKINS-Create-a-freestyle-project.png",alt:"Create a new Freestyle project"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To upload your Katalon project on Jenkins, you can upload your Katalon project from a Git repository or your local workspace. Here, we use a Git repository."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Source Code Management")," section, choose ",(0,o.kt)("strong",{parentName:"p"},"Git"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter your repository URL, then select branches to build, repository browser, and additional behaviors, if any."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/jenkins-plugin-windows/Picture4.png",alt:"Upload Katalon project"}))))),(0,o.kt)("h3",{id:"build-your-project"},"Build your project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Build")," section, click ",(0,o.kt)("strong",{parentName:"p"},"Add build step")," and choose ",(0,o.kt)("strong",{parentName:"p"},"Execute Katalon Studio Tests"),". The ",(0,o.kt)("strong",{parentName:"p"},"Execute Katalon Studio Tests")," box opens, asking you to input the Katalon Runtime Engine version and command arguments.",(0,o.kt)("img",{src:"/doc_images/Documents/Execute/CICD_Integrations/Jenkins-Integration/Use-Katalon-plugins-for-Jenkins-Integration/katalon-plugin-jenkins-window-macOS/image/Jenkins_-_Execute_Katalon_Studio_Tests.png",alt:"jenkins - Execute Katalon Studio Tests"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify the Katalon Studio version you wish to execute with:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you haven't downloaded Katalon Runtime Engine ","(","KRE",")",", you can input the KRE version you wish to execute with in the ",(0,o.kt)("strong",{parentName:"p"},"Download Katalon Studio version")," box. KRE will be downloaded and deployed automatically. You can retrieve the list of all releases on our Github repository: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio/katalon-studio/releases"},"Releases"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to use a pre-installed version, manually input the KRE version you have installed in the ",(0,o.kt)("strong",{parentName:"p"},"Use pre-installed Katalon Studio")," box with the following command line:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"<KRE stored folder>-<KRE pre-installed-version>\n")),(0,o.kt)("p",{parentName:"li"},"For example: ",(0,o.kt)("code",null,"/Users/USERNAME/Downloads/Katalon","_","Studio","_","Engine","_","MacOS-8.1.0"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Input your command in the ",(0,o.kt)("strong",{parentName:"p"},"Command arguments")," box:"),(0,o.kt)("p",{parentName:"li"},"Here is a sample of command arguments to run test with TestCloud configurations. You can generate the Command arguments for tests with TestCloud configurations by using Katalon Studio ",(0,o.kt)("a",{parentName:"p",href:"https://docs.katalon.com/docs/execute/cloud-based-test-execution/test-execution-with-testcloud/integrate-testcloud-with-katalon-runtime-engine"},"Command Builder"),". To understand about the syntax of the command, see: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.katalon.com/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine"},"Command-Line Syntax in Katalon Runtime Engine"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'-browserType="Chrome" -retry=0 -statusDelay=15 -testSuitePath="Test Suites/TS_RegressionTest" -apikey=<YOUR_API_KEY>\n\n\n')),(0,o.kt)("img",{src:"/doc_images/Documents/Execute/CICD_Integrations/Jenkins-Integration/Use-Katalon-plugins-for-Jenkins-Integration/katalon-plugin-jenkins-window-macOS/image/jenkins-sample-command.png",alt:"jenkins build command arguments"}),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"When you use the ",(0,o.kt)("strong",{parentName:"li"},"Katalon")," plugin on Jenkins, or copying commands generated by Command Builder from Katalon Studio, please remove argument ",(0,o.kt)("code",null,"-noSplash")," and ",(0,o.kt)("code",null,"-runMode=console"),"."))),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"From version 7.7.0 onwards, if you belong to more than one Organization subscribing to Runtime Engine licenses, you can choose which Organization validates your license usage with the following command line: ",(0,o.kt)("code",null,"-orgID=","<","Katalon","_","OrgID",">"),"."),(0,o.kt)("li",{parentName:"ul"},"Make sure your current browser version is compatible with the KRE Webdriver version. To learn more about upgrading or downgrading WebDrivers, you can refer to this document: ",(0,o.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio#"},"Update or Downgrade WebDrivers"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you are done with the configuration, click ",(0,o.kt)("strong",{parentName:"p"},"Save"),", then click ",(0,o.kt)("strong",{parentName:"p"},"Build Now")," to run the project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To view the console log, click on your current build on Jenkins and select ",(0,o.kt)("strong",{parentName:"p"},"Console Output"),"."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/jenkins-plugin-windows/KS-JENKINS-console-output.png",alt:"View console output"}))),(0,o.kt)("h3",{id:"troubleshoot-empty-videos-recorded-after-running-tests-on-windows"},"Troubleshoot empty videos recorded after running tests on Windows"),(0,o.kt)("p",null,"If you encounter an issue of having empty videos recorded after running your tests in Jenkins on Window, it is because the WebDriver hasn't launched during test execution. To fix this issue, please uninstall Jenkins of Windows services, and replace it by a DOS batch file containing the following codes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd D:\\Tools\\Jenkins //path to Jenkins folder\njava -jar --webroot=jenkins.war\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Code sample courtesy of S\xe9bastien Taniere")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/execute/ci-cd-integrations/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile"},"Execute Katalon Studio tests with Jenkins Pipeline Script ","(","Jenkinsfile",")"),".")))}d.isMDXComponent=!0}}]);