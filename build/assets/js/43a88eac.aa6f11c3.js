"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[33294],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>m});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(i),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||s;return i?a.createElement(m,n(n({ref:t},l),{},{components:i})):a.createElement(m,n({ref:t},l))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,n=new Array(s);n[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,n[1]=o;for(var p=2;p<s;p++)n[p]=i[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},4379:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=i(87462),r=(i(67294),i(3905));const s={id:"concept-a06d3e5a-559e-4e7c-94a3-a68337b5a6d8",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio"},n="Introduction to Desired Capabilities in Katalon Studio",o={unversionedId:"concept-a06d3e5a-559e-4e7c-94a3-a68337b5a6d8",id:"concept-a06d3e5a-559e-4e7c-94a3-a68337b5a6d8",title:"Introduction to Desired Capabilities in Katalon Studio",description:"Desired capabilities are key/value pairs that tell the browser properties such as browser name, browser version, and the path of the browser driver in the system to determine the browsers' behaviors at runtime. Desired capabilities which can be used to configure such additional driver instances as FirefoxDriver, ChromeDriver, InternetExplorerDriver, Selenium WebDriver are useful in the following cases:",source:"@site/docs/concept-a06d3e5a-559e-4e7c-94a3-a68337b5a6d8.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio",permalink:"/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-a06d3e5a-559e-4e7c-94a3-a68337b5a6d8.mdx",tags:[],version:"current",frontMatter:{id:"concept-a06d3e5a-559e-4e7c-94a3-a68337b5a6d8",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Git integration authentication with SSH Keys in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/git-integration/git-integration-authentication-with-ssh-keys-in-katalon-studio"},next:{title:"Set up Desired Capabilities for WebUI Testing in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-for-webui-testing-in-katalon-studio"}},c={},p=[{value:"Supported environments for desired capabilities settings",id:"supported-environments-for-desired-capabilities-settings",level:2},{value:"Manage desired capabilities",id:"manage-desired-capabilities",level:2},{value:"Use desired capabilities in Katalon projects",id:"use-desired-capabilities-in-katalon-projects",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-desired-capabilities-in-katalon-studio"},"Introduction to Desired Capabilities in Katalon Studio"),(0,r.kt)("p",null,"Desired capabilities are key/value pairs that tell the browser properties such as browser name, browser version, and the path of the browser driver in the system to determine the browsers' behaviors at runtime. Desired capabilities which can be used to configure such additional driver instances as FirefoxDriver, ChromeDriver, InternetExplorerDriver, Selenium WebDriver are useful in the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting the browser and device properties in mobile testing."),(0,r.kt)("li",{parentName:"ul"},"Adding extra settings to browsers in web testing.")),(0,r.kt)("p",null,"Katalon Studio allows you to define these desired capabilities in different environments for a Katalon project in ",(0,r.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Desired Capabilities"),"."),(0,r.kt)("h2",{id:"supported-environments-for-desired-capabilities-settings"},"Supported environments for desired capabilities settings"),(0,r.kt)("p",null,"In each selected environment, you can add, delete or clear ","(","delete all",")"," desired capabilities settings. To learn more about configuring desired capabilities for different testing environment, you can refer to the following documents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-for-webui-testing-in-katalon-studio"},"Set up desired capabilities in WebUI testing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-mobile-testing-in-katalon-studio"},"Set up desired capabilities in mobile testing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing-in-katalon-studio"},"Set up desired capabilities in Windows Desktop App testing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/set-up-remote-server-in-desired-capabilities-in-katalon-studio"},"Set up remote server in desired capabilities"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/set-custom-desired-capabilities-in-katalon-studio"},"Set custom desired capabilities"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio"},"Pass desired capabilities at runtime")))),(0,r.kt)("h2",{id:"manage-desired-capabilities"},"Manage desired capabilities"),(0,r.kt)("p",null,"From version 8.0.0 onwards, you can reuse desired capabilities across Katalon Studio projects by importing and exporting desired capabilities in a JSON file. To learn more about reusing desired capabilities across projects, you can refer to this document: ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio"},"Reuse desired capabilities across projects"),"."),(0,r.kt)("h2",{id:"use-desired-capabilities-in-katalon-projects"},"Use desired capabilities in Katalon projects"),(0,r.kt)("p",null,"Desired capabilities can be configured to customize your testing environment, you can refer to the following tutorials for better guidance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/project-settings/desired-capabilities/start-browsers-in-private-mode-in-katalon-studio"},"Start browsers in private mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/project-settings/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities-in-katalon-studio"},"Test different browser locales in Chrome with desired capabilities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/project-settings/desired-capabilities/selenium-grid-execution-on-remote-machines-with-katalon-studio"},"Selenium Grid - Execution on remote machines"))))}u.isMDXComponent=!0}}]);