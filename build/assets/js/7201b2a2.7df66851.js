"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[77222],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={id:"concept-c9b3d106-c177-45f9-aa47-6514c536f12e",slug:"/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio"},i="Set a new default JRE for test projects in Katalon Studio",l={unversionedId:"concept-c9b3d106-c177-45f9-aa47-6514c536f12e",id:"concept-c9b3d106-c177-45f9-aa47-6514c536f12e",title:"Set a new default JRE for test projects in Katalon Studio",description:"Katalon Studio uses the default embedded Java Runtime Environment \\(JRE\\) v8 to run a Katalon Studio instance and compile test projects. You can learn more about JRE v8 in the Oracle document here: JRE v8.",source:"@site/docs/concept-c9b3d106-c177-45f9-aa47-6514c536f12e.mdx",sourceDirName:".",slug:"/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio",permalink:"/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-c9b3d106-c177-45f9-aa47-6514c536f12e.mdx",tags:[],version:"current",frontMatter:{id:"concept-c9b3d106-c177-45f9-aa47-6514c536f12e",slug:"/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Object Spy Preferences in Katalon Studio",permalink:"/get-started/set-up-your-workspace/katalon-studio-preferences/object-spy-preferences-in-katalon-studio"},next:{title:"Sample projects overview",permalink:"/get-started/sample-projects/sample-projects-overview"}},s={},c=[{value:"Set a new default JRE for a Katalon Studio instance",id:"set-a-new-default-jre-for-a-katalon-studio-instance",level:2},{value:"Use the newly added JRE in a test project",id:"use-the-newly-added-jre-in-a-test-project",level:2},{value:"Run tests with another JRE in the command line",id:"run-tests-with-another-jre-in-the-command-line",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-a-new-default-jre-for-test-projects-in-katalon-studio"},"Set a new default JRE for test projects in Katalon Studio"),(0,o.kt)("p",null,"Katalon Studio uses the default embedded Java Runtime Environment ","(","JRE",")"," v8 to run a Katalon Studio instance and compile test projects. You can learn more about JRE v8 in the Oracle document here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/jre8-readme.html"},"JRE v8"),"."),(0,o.kt)("p",null,"From Katalon Studio version 7.9.0 onwards, you can set your desired JRE package as the default one to compile and run test projects. You can also override the default configuration in console mode by using the environment variable."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This change applies to the JRE used to run your test projects, not the JRE used to run Katalon Studio."))),(0,o.kt)("p",null,"This guide takes you through the steps to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set a new default JRE for a Katalon Studio instance."),(0,o.kt)("li",{parentName:"ul"},"Apply the new JRE to a test project."),(0,o.kt)("li",{parentName:"ul"},"Run tests with another JRE in the command line.")),(0,o.kt)("h2",{id:"set-a-new-default-jre-for-a-katalon-studio-instance"},"Set a new default JRE for a Katalon Studio instance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Katalon Studio version 7.9.0 onwards."),(0,o.kt)("li",{parentName:"ul"},"The desired JRE version ","(","from v8 to v14",")"," installed on your machine.")),(0,o.kt)("p",null,"You need to set your desired JRE as the default JRE in Katalon Preferences. In this example, we set JRE 11 as the default one. Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Katalon Studio")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Java")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Installed JREs"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the button ",(0,o.kt)("strong",{parentName:"p"},"Add..."),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Get_Started/Set_Up_Your_Workspace/Katalon_Studio_Preferences/Set_A_New_Default_JRE_For_Test_Projects/images/ks-add-jre.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Add JRE")," dialog, select ",(0,o.kt)("strong",{parentName:"p"},"Standard VM"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Get_Started/Set_Up_Your_Workspace/Katalon_Studio_Preferences/Set_A_New_Default_JRE_For_Test_Projects/images/ks-standard-vm.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse to the ",(0,o.kt)("code",null,"Home")," folder of the JRE you wish to add and give it a name. Here, we name it JRE 11. Click ",(0,o.kt)("strong",{parentName:"p"},"Finish"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Get_Started/Set_Up_Your_Workspace/Katalon_Studio_Preferences/Set_A_New_Default_JRE_For_Test_Projects/images/ks-browse-jre.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Installed JREs")," section, check the newly added JRE to set it the default one."),(0,o.kt)("img",{src:"/doc_images/Documents/Get_Started/Set_Up_Your_Workspace/Katalon_Studio_Preferences/Set_A_New_Default_JRE_For_Test_Projects/images/ks-set-jre-default.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply & close"),"."))),(0,o.kt)("h2",{id:"use-the-newly-added-jre-in-a-test-project"},"Use the newly added JRE in a test project"),(0,o.kt)("p",null,"To run a test project with the new JRE, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download ",(0,o.kt)("code",null,"jaxb-api-2.3.1.jar")," library. You can download JAXB API 2.3.1 from the Maven Repository website here: ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/javax.xml.bind/jaxb-api/2.3.1"},"JAXB API 2.3.1"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("code",null,"jaxb-api-2.3.1.jar")," library to your test project. To do so, you can follow the instructions in this document: ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/library-management-in-katalon-studio#"},"Add an external library to a project"),"."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The JRE version used to run test projects and JRE compiler compliance level should be compatible. For instance, Java 8 test projects are compatible with the default JRE compiler level 1.8. To alter JRE compiler compliance level, go to ",(0,o.kt)("strong",{parentName:"li"},"Preferences")," ",">"," ",(0,o.kt)("strong",{parentName:"li"},"Java")," ",">"," ",(0,o.kt)("strong",{parentName:"li"},"Compiler"),"."),(0,o.kt)("li",{parentName:"ul"},"In case you want to check which Java version the test project is developed with, add the following script to a test case, then run it and see the log.")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"println System.getProperty('java.version')\n"))))),(0,o.kt)("h2",{id:"run-tests-with-another-jre-in-the-command-line"},"Run tests with another JRE in the command line"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Katalon Runtime Engine ","(","KRE",")"," version 7.9.0 onwards."),(0,o.kt)("li",{parentName:"ul"},"The desired JRE version ","(","from v8 to v14",")"," installed on your machine."),(0,o.kt)("li",{parentName:"ul"},"An active KRE license. To learn more about activating licenses, you can refer to this document here: ",(0,o.kt)("a",{parentName:"li",href:"/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/license-overview"},"Katalon Runtime Engine license overview"),"."))),(0,o.kt)("p",null,"To execute a test suite or a test suite collection with another JRE in console mode, you need to add the ",(0,o.kt)("code",null,"KATALON","_","JAVA","_","HOME= ","<","JRE","_","location",">")," environment variable and use it before Katalon commands. Below is a sample command on macOS and Linux for your reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export KATALON_JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home.\n./katalonc ...\n")))}d.isMDXComponent=!0}}]);