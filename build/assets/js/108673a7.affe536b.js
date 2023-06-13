"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[57954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-b9c85e00-4e5f-4ab5-8ee4-57e98202314e",slug:"/create-tests/manage-projects/project-settings/library-management-in-katalon-studio"},l="Library management in Katalon Studio",o={unversionedId:"concept-b9c85e00-4e5f-4ab5-8ee4-57e98202314e",id:"concept-b9c85e00-4e5f-4ab5-8ee4-57e98202314e",title:"Library management in Katalon Studio",description:"Katalon Studio allows using external Java .jar libraries either through project settings or adding them to a designated folder. You can leverage this to extend the capabilities of Katalon Studio and handle specific situations when needed.",source:"@site/docs/concept-b9c85e00-4e5f-4ab5-8ee4-57e98202314e.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/project-settings/library-management-in-katalon-studio",permalink:"/create-tests/manage-projects/project-settings/library-management-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-b9c85e00-4e5f-4ab5-8ee4-57e98202314e.mdx",tags:[],version:"current",frontMatter:{author:"Yen Nguyen <yen.nguyen@katalon.com>",id:"concept-b9c85e00-4e5f-4ab5-8ee4-57e98202314e",slug:"/create-tests/manage-projects/project-settings/library-management-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Network settings in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/network-settings-in-katalon-studio"},next:{title:"Git integration in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/git-integration/git-integration-in-katalon-studio"}},s={},p=[{value:"Add external libraries to a project",id:"add-external-libraries-to-a-project",level:2},{value:"Use Gradle in Katalon Studio",id:"use-gradle-in-katalon-studio",level:3},{value:"Use project settings",id:"use-project-settings",level:3},{value:"Copy and paste a library .jar file to the Drivers folder",id:"copy-and-paste-a-library-jar-file-to-the-drivers-folder",level:3},{value:"Exclude built-in libraries",id:"exclude-built-in-libraries",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"library-management-in-katalon-studio"},"Library management in Katalon Studio"),(0,n.kt)("p",null,"Katalon Studio allows using external Java ",(0,n.kt)("code",null,".jar")," libraries either through project settings or adding them to a designated folder. You can leverage this to extend the capabilities of Katalon Studio and handle specific situations when needed."),(0,n.kt)("p",null,"This document shows you ways to add external libraries to Katalon Studio and replace the built-in libraries with the external ones in a test project."),(0,n.kt)("h2",{id:"add-external-libraries-to-a-project"},"Add external libraries to a project"),(0,n.kt)("p",null,"You can add external libraries to a Katalon Studio project in three different ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the Gradle plugin."),(0,n.kt)("li",{parentName:"ul"},"Go to Library Management settings of a project."),(0,n.kt)("li",{parentName:"ul"},"Copy and paste a library ",(0,n.kt)("code",null,".jar")," file to the Drivers folder of a project.")),(0,n.kt)("h3",{id:"use-gradle-in-katalon-studio"},"Use Gradle in Katalon Studio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Katalon Studio supports automatically downloading libraries from Maven repositories using the Gradle plugin. You can refer to our GitHub repository here: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio/gradle-plugin"},"Katalon Studio Gradle plugin"),".")),(0,n.kt)("h3",{id:"use-project-settings"},"Use project settings"),(0,n.kt)("p",null,"To add external libraries in project settings, do as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Katalon Studio, go to ",(0,n.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Library Management"),"."),(0,n.kt)("p",{parentName:"li"},"For Katalon Studio versions before 7.8.0, go to ",(0,n.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"External Library"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Library Management"),", click ",(0,n.kt)("strong",{parentName:"p"},"Add")," to browse your ",(0,n.kt)("code",null,".jar")," file","(","s",")"," ","(","and its dependencies if any",")","."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Libraries_Management/Images/KS-LIBRARY-Add-external-library.png",width:500,alt:"Add external libraries"}),(0,n.kt)("p",{parentName:"li"},"To remove an added external library, select a library and click ",(0,n.kt)("strong",{parentName:"p"},"Remove")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"OK"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Apply and Close")," to save the settings."))),(0,n.kt)("p",null,"After saving the settings, Katalon Studio will add the library file","(","s",")"," to the project ",(0,n.kt)("strong",{parentName:"p"},"Drivers")," folder and load the libraries."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Libraries_Management/Images/KS-LIBRARY-View-add-external-library-in-folder.png",width:500,alt:"Libraries added in the Drivers folder"}),(0,n.kt)("h3",{id:"copy-and-paste-a-library-jar-file-to-the-drivers-folder"},"Copy and paste a library .jar file to the Drivers folder"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("code",null,".jar")," file ","(","and its dependencies, if any",")"," you want to add to the project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to your project folder, select the ",(0,n.kt)("strong",{parentName:"p"},"Drivers")," folder and paste the ",(0,n.kt)("code",null,".jar")," file."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Libraries_Management/Images/ks-paste-file-in-drivers.png",width:500,alt:"Manually add the library"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Close and re-open the project in Katalon Studio to reload the class paths."))),(0,n.kt)("p",null,"When your ",(0,n.kt)("code",null,".jar")," library file is recognized by Katalon Studio, you should be able to use it."),(0,n.kt)("h2",{id:"exclude-built-in-libraries"},"Exclude built-in libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An active Katalon Studio Enterprise license."),(0,n.kt)("li",{parentName:"ul"},"Katalon Studio version 7.8.0 onwards.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Exclude built-in libraries")," feature allows you to remove built-in libraries stored in the ",(0,n.kt)("code",null,".classpath")," file of a project folder. This feature applies to all libraries in the ",(0,n.kt)("code",null,".classpath")," file, excluding the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"com.kms.katalon.<.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"selenium-server-standalone-3.141.59.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"poi-3.17.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"poi-ooxml-3.17.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"poi-ooxml-schemas-3.17.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"java-client-7.0.0.jar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"io.cucumber.<.jar"))),(0,n.kt)("p",null,"Removing the above libraries may cause failure of the relevant features."),(0,n.kt)("p",null,"You can also replace the excluded built-in library with an external one for flexible libraries usage in a test project."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Katalon Studio, go to ",(0,n.kt)("strong",{parentName:"p"},"Project")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Library Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Exclude the following built-in libraries")," section, click ",(0,n.kt)("strong",{parentName:"p"},"Add")," to add a built-in library you want to remove.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"External Libraries")," section, click ",(0,n.kt)("strong",{parentName:"p"},"Add")," to browse an external library to replace the excluded one."),(0,n.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Libraries_Management/Images/KS-Exclude-the-library.png",alt:"Exclude libraries"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Apply and Close"),"."))))}u.isMDXComponent=!0}}]);