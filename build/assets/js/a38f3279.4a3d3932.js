"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[12215],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>b});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(i),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return i?r.createElement(b,o(o({ref:t},l),{},{components:i})):r.createElement(b,o({ref:t},l))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},60136:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=i(87462),a=(i(67294),i(3905));const n={id:"concept-9a4a8e14-ae8b-4b71-96b1-03e193e099de",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio"},o="Pass desired capabilities at runtime in Katalon Studio",s={unversionedId:"concept-9a4a8e14-ae8b-4b71-96b1-03e193e099de",id:"concept-9a4a8e14-ae8b-4b71-96b1-03e193e099de",title:"Pass desired capabilities at runtime in Katalon Studio",description:"Desired capabilities configured in project settings are applied at the project level. You can also use desired capabilities at the test case level by passing desired capabilities to the test script.",source:"@site/docs/concept-9a4a8e14-ae8b-4b71-96b1-03e193e099de.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",permalink:"/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-9a4a8e14-ae8b-4b71-96b1-03e193e099de.mdx",tags:[],version:"current",frontMatter:{id:"concept-9a4a8e14-ae8b-4b71-96b1-03e193e099de",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Set Custom Desired Capabilities in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/desired-capabilities/set-custom-desired-capabilities-in-katalon-studio"},next:{title:"Manage Desired Capabilities in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio"}},p={},c=[{value:"Pass desired capabilities at runtime for WebUI Testing",id:"pass-desired-capabilities-at-runtime-for-webui-testing",level:2},{value:"Open Firefox browser in private mode",id:"open-firefox-browser-in-private-mode",level:3},{value:"Override desired capabilities in project settings",id:"override-desired-capabilities-in-project-settings",level:3},{value:"Pass desired capabilities at runtime for remote execution",id:"pass-desired-capabilities-at-runtime-for-remote-execution",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pass-desired-capabilities-at-runtime-in-katalon-studio"},"Pass desired capabilities at runtime in Katalon Studio"),(0,a.kt)("p",null,"Desired capabilities configured in project settings are applied at the project level. You can also use desired capabilities at the test case level by passing desired capabilities to the test script."),(0,a.kt)("h2",{id:"pass-desired-capabilities-at-runtime-for-webui-testing"},"Pass desired capabilities at runtime for WebUI Testing"),(0,a.kt)("p",null,"To apply desired capabilities at runtime, place the following sample code before the test script. This also overrides the desired capabilities predefined in project settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import com.kms.katalon.core.configuration.RunConfiguration\nRunConfiguration.setWebDriverPreferencesProperty(<key>, <value>)\n\n")),(0,a.kt)("h3",{id:"open-firefox-browser-in-private-mode"},"Open Firefox browser in private mode"),(0,a.kt)("p",null,"The following example demonstrates how to configure the desired capabilities at runtime to open a test case in private mode in Firefox."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the test case in script mode.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pass the ",(0,a.kt)("code",null,"-private")," argument to the sample code as follows. Then place the code before the test script."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"import com.kms.katalon.core.configuration.RunConfiguration\nMap firefoxOptions =[args:\"-private\"]\nRunConfiguration.setWebDriverPreferencesProperty('moz:firefoxOptions', firefoxOptions)\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Continue writing the script or use Web Spy/Record Utility to complete your test case."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-firefox-private-mode-runtime.png",alt:"DC at test script"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the test with Firefox."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-run-with-firefox.png",alt:"Run Firefox"}),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Make sure to update the browser by clicking ",(0,a.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,a.kt)("strong",{parentName:"li"},"Update WebDrivers ",">"," Choose browser"),"."))),(0,a.kt)("p",{parentName:"li"},"The test successfully opens a Firefox browser in private mode."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-Open-firefox-private.png",alt:"Open Firefox in private mode"}))),(0,a.kt)("h3",{id:"override-desired-capabilities-in-project-settings"},"Override desired capabilities in project settings"),(0,a.kt)("p",null,"Suppose you want to override desired capabilities pre-configured in project settings; you can use the above sample code in the test script."),(0,a.kt)("p",null,"In the following example, we defined the desired capabilities for Chrome window-sized 1200x600 in project settings. We want to override this setting to run a test with a Chrome window in private mode sized 100x100. Do as follows:"),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/project-settings-new-ui/KS-DC-runtime-windows-sized-1200x600.png",alt:"Set DC in project settings"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To override the desired capabilities at runtime, open the test case in script mode. Pass the desired capabilities to the same key with the capabilities defined in project settings. Then place the code before the test script."),(0,a.kt)("p",{parentName:"li"},"Here, we want to override the ",(0,a.kt)("code",null,"--window-size=1200,600")," capabilities. We pass the ",(0,a.kt)("code",null,"--window-size=100,100")," and ",(0,a.kt)("code",null,"--incognito")," capabilities to the ",(0,a.kt)("code",null,"args")," key in the sample code as follows. Then place the code before the test script."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'import com.kms.katalon.core.configuration.RunConfiguration\nRunConfiguration.setWebDriverPreferencesProperty("args", ["--window-size=100,100","--incognito"])\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Continue writing the script or use Web Spy/Record Utility to complete your test case."),(0,a.kt)("img",{src:"https://github.com/Yen8298/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-window-sized-100x100-incognito-runtime.png",alt:"DC at test script"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the test with Chrome."),(0,a.kt)("img",{src:"https://github.com/Yen8298/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-Chrome-windows-100x100-incognito-run.png",alt:"Set DC in project settings"}),(0,a.kt)("p",{parentName:"li"},"The test successfully opens a Chrome window-size 100x100 in private mode ","(","overriding Chrome window-size 1200x600",")","."))),(0,a.kt)("h3",{id:"pass-desired-capabilities-at-runtime-for-remote-execution"},"Pass desired capabilities at runtime for remote execution"),(0,a.kt)("p",null,"To apply desired capabilities at runtime, place the following sample code before the test script. This also overrides the desired capabilities predefined in project settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import com.kms.katalon.core.configuration.RunConfiguration\nRunConfiguration.setDriverPreferencesProperty('Remote',  capsName , capsValue)\n")),(0,a.kt)("p",null,"For example, we want to set remote execution environment as Windows 10, enter the following sample code before the test script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.configuration.RunConfiguration\n\nRunConfiguration.setDriverPreferencesProperty('Remote', 'os', 'Windows')  \nRunConfiguration.setDriverPreferencesProperty('Remote', 'os_version', '10')  \n\nWebUI.openBrowser('google.com')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Related information"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.katalon.com/javadoc/com/kms/katalon/core/configuration/RunConfiguration.html"},"RunConfiguration")))}u.isMDXComponent=!0}}]);