"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[16239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=a,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},40140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const l={id:"concept-8fb9d339-184a-45a4-8c88-924dd8461037",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio"},r="How to develop a Custom Keywords plugin in Katalon Studio",i={unversionedId:"concept-8fb9d339-184a-45a4-8c88-924dd8461037",id:"concept-8fb9d339-184a-45a4-8c88-924dd8461037",title:"How to develop a Custom Keywords plugin in Katalon Studio",description:"A custom keywords plugin is a Katalon Studio project with some custom keywords implementation. To develop a custom keywords plugin, follow these steps:",source:"@site/docs/concept-8fb9d339-184a-45a4-8c88-924dd8461037.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio",permalink:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-8fb9d339-184a-45a4-8c88-924dd8461037.mdx",tags:[],version:"current",frontMatter:{id:"concept-8fb9d339-184a-45a4-8c88-924dd8461037",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Create your first Katalon Studio plugin",permalink:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/create-your-first-katalon-studio-plugin"},next:{title:"How to resolve external dependencies for a plugin in Katalon Studio",permalink:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin-in-katalon-studio"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Develop a custom keywords plugin in Katalon Studio",id:"develop-a-custom-keywords-plugin-in-katalon-studio",level:2},{value:"Add your dependencies to the <code>build.gradle</code> file",id:"add-your-dependencies-to-the-buildgradle-file",level:3},{value:"Implement your custom keywords with a <code>katalon-plugin.json</code> file",id:"implement-your-custom-keywords-with-a-katalon-pluginjson-file",level:3},{value:"Package the plugins with Gradle",id:"package-the-plugins-with-gradle",level:3},{value:"Test the custom keywords plugin in Katalon Studio",id:"test-the-custom-keywords-plugin-in-katalon-studio",level:2},{value:"Publish the plugin to Katalon Store",id:"publish-the-plugin-to-katalon-store",level:2},{value:"See also",id:"see-also",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-develop-a-custom-keywords-plugin-in-katalon-studio"},"How to develop a Custom Keywords plugin in Katalon Studio"),(0,a.kt)("p",null,"A custom keywords plugin is a Katalon Studio project with some custom keywords implementation. To develop a custom keywords plugin, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a new Katalon Studio project with the ",(0,a.kt)("code",null,"build.gradle")," file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Implement your custom keywords with a ",(0,a.kt)("code",null,"katalon-plugin.json")," file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can add test cases to help verify these custom keywords and serve as samples for plugin users."))),(0,a.kt)("p",null,"This tutorial introduces a detailed process of sharing custom keywords as plugins. You can download our sample custom keywords plugin on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/katalon-studio/katalon-studio-zip-custom-keywords-plugin"},"Zip custom keywords plugin"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Katalon Studio version 6.0.6 onwards.")),(0,a.kt)("h2",{id:"develop-a-custom-keywords-plugin-in-katalon-studio"},"Develop a custom keywords plugin in Katalon Studio"),(0,a.kt)("h3",{id:"add-your-dependencies-to-the-buildgradle-file"},"Add your dependencies to the ",(0,a.kt)("code",null,"build.gradle")," file"),(0,a.kt)("p",null,"To open the ",(0,a.kt)("code",null,"build.gradle")," file in Katalon Studio, do as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"File")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"New")," ",">"," ",(0,a.kt)("strong",{parentName:"p"},"Project"),", check the ",(0,a.kt)("strong",{parentName:"p"},"Generate build.gradle file")," box."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/publisher/KS-8.2.5-Generate-build.gradle-file.png",width:700,alt:"Generate build.gradle file"}),(0,a.kt)("p",{parentName:"li"},"Katalon Studio will generate a default ",(0,a.kt)("code",null,"build.gradle")," template."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/publisher/KS-8.2.5-Template-build-gradle.png",alt:"The build.gradle template"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add your dependencies to the ",(0,a.kt)("code",null,"build.gradle")," file."),(0,a.kt)("p",{parentName:"li"},"For example, we want to add our dependencies to the ",(0,a.kt)("strong",{parentName:"p"},"Zip custom keywords")," plugin. We enter the following code in the ",(0,a.kt)("code",null,"build.gradle")," file:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"For Gradle 7")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"plugins {\n  id 'java-library'\n  id 'groovy'\n  id 'com.github.johnrengelman.shadow' version '7.1.2'\n  id 'com.katalon.gradle-plugin' version '0.1.1'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndef pluginSources = [\n  'Keywords',\n  'Test Listeners',\n  'Include/scripts/groovy'\n]\n\nsourceSets {\n   main {\n    groovy {\n      srcDirs = pluginSources\n      srcDir 'Libs' // generated by Katalon Studio\n    }\n  }\n}\n\nshadowJar {\n  exclude 'Temp*.class'\n}\n\ngroovydoc {\n  source = pluginSources\n  docTitle = 'Zip Custom Keywords'\n}\n\ndependencies {\n  implementation 'net.lingala.zip4j:zip4j:1.3.2'\n}\n\n")),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/publisher/KS-8.2.5-Gradle-7.png",alt:"The build.gradle file for Gradle 7"}),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"For Gradle 5-6")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"plugins {\n\n  id 'java'\n\n  id 'groovy'\n\n  id 'com.github.johnrengelman.shadow' version '4.0.4'\n\n  id \"com.katalon.gradle-plugin\" version \"0.0.7\"\n\n}\n\nrepositories {\n\n  jcenter()\n\n  mavenCentral()\n\n}\n\nsourceSets {\n\n  main {\n\n    groovy {\n\n      srcDirs = ['Keywords', 'Libs', 'Test Listeners', 'Include/scripts/groovy']\n\n    }\n\n  }\n\n}\n\ndependencies {\n\n  compile 'net.lingala.zip4j:zip4j:1.3.2'\n\n}\n\nshadowJar {\n\n  exclude 'Temp*.class'\n\n}\n\nkatalon {\n\n  dependencyPrefix = \"com.katalon\"\n\n  minimize = false\n\n}\n\n")),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/publisher/KS-8.2.5-Gradle-5-6.png",alt:"The build.gradle file for Gradle 5-6"}))),(0,a.kt)("h3",{id:"implement-your-custom-keywords-with-a-katalon-pluginjson-file"},"Implement your custom keywords with a ",(0,a.kt)("code",null,"katalon-plugin.json")," file"),(0,a.kt)("p",null,"In the ",(0,a.kt)("code",null,"Keywords")," folder, add a ",(0,a.kt)("code",null,"katalon-plugin.json")," file with the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "keywords": [keywordClass1, keywordClass2]\n}\n\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "keywords": ["com.katalon.plugin.keyword.zip.ZipKeywords"]\n}\n\n')),(0,a.kt)("h3",{id:"package-the-plugins-with-gradle"},"Package the plugins with Gradle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Gradle. Follow the instruction on the Gradle website: ",(0,a.kt)("a",{parentName:"p",href:"https://gradle.org/install/"},"Install Gradle"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},"Terminal/Command Prompt"),", then go to the plugin project directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside the plugin project folder, run:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gradle katalonCopyDependencies\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the plugin project with Katalon Studio.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, run ",(0,a.kt)("code",null,"gradle katalonPluginPackage"),"in the same ",(0,a.kt)("strong",{parentName:"p"},"Terminal/Command Prompt"),", then check the ",(0,a.kt)("code",null,"build/libs")," for the JAR package of the plugin."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"To execute ",(0,a.kt)("code",null,"katalonPluginPackage")," across platforms, open the plugin project with Katalon Studio first to repopulate the ",(0,a.kt)("code",null,".classpath")," file. The packaging task uses these paths to look up Katalon Studio libraries."))),(0,a.kt)("p",null,"You can refer to some other custom keywords plugins on our GitHub repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio/katalon-studio-excel-custom-keywords-plugin"},"Excel custom keywords plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio/katalon-studio-ashot-custom-keywords-plugin"},"Ashot custom keywords plugin"))),(0,a.kt)("h2",{id:"test-the-custom-keywords-plugin-in-katalon-studio"},"Test the custom keywords plugin in Katalon Studio"),(0,a.kt)("p",null,"In a new Katalon Studio project, put the JAR package of the plugin in the ",(0,a.kt)("code",null,"Plugins")," folder. Reopen this project to use imported custom keywords."),(0,a.kt)("h2",{id:"publish-the-plugin-to-katalon-store"},"Publish the plugin to Katalon Store"),(0,a.kt)("p",null,"Once you\u2019re done developing your plugins, submit them to Katalon Store. To learn more about submitting plugins to Katalon Store, you can refer to this document: ",(0,a.kt)("a",{parentName:"p",href:"/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin-on-katalon-store"},"Submit plugins"),". Katalon will review your contents against ",(0,a.kt)("a",{parentName:"p",href:"https://www.katalon.com/terms/#katalon-plugin-license-agreement"},"our policies")," before listing them on the Katalon Store."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin-in-katalon-studio"},"Resolve external dependencies for a plugin"))))}c.isMDXComponent=!0}}]);