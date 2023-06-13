"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[28028],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={id:"concept-f61dcb1e-084b-4e14-a3af-da57203397ce",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags"},o="[Cucumber] Run Feature Folder with Tags",u={unversionedId:"concept-f61dcb1e-084b-4e14-a3af-da57203397ce",id:"concept-f61dcb1e-084b-4e14-a3af-da57203397ce",title:"\\[Cucumber\\] Run Feature Folder with Tags",description:"Description",source:"@site/docs/concept-f61dcb1e-084b-4e14-a3af-da57203397ce.mdx",sourceDirName:".",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-f61dcb1e-084b-4e14-a3af-da57203397ce.mdx",tags:[],version:"current",frontMatter:{id:"concept-f61dcb1e-084b-4e14-a3af-da57203397ce",slug:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags"},sidebar:"tutorialSidebar",previous:{title:"\\[Cucumber\\] Run Feature File",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file"},next:{title:"\\[Cucumber\\] Run Feature Folder",permalink:"/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Using the AND tag expression",id:"using-the-and-tag-expression",level:2},{value:"Using the OR tag expression",id:"using-the-or-tag-expression",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cucumber-run-feature-folder-with-tags"},"[","Cucumber","]"," Run Feature Folder with Tags"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Katalon Studio supports executing feature files in a folder with the ",(0,n.kt)("code",null,"runFeatureFolderWithTags")," function, using the following tag expressions:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,(0,n.kt)("strong",null,"Expression")),(0,n.kt)("th",null,(0,n.kt)("strong",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"@tag1 and @tag2")),(0,n.kt)("td",null,"Features or scenarios tagged with both ",(0,n.kt)("code",null,"@tag1")," and ",(0,n.kt)("code",null,"@tag2"),".")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"@tag1 or @tag2")),(0,n.kt)("td",null,"Features or scenarios tagged with either ",(0,n.kt)("code",null,"@tag1")," or ",(0,n.kt)("code",null,"@tag2"),".")))),(0,n.kt)("p",null,"To learn more about tag expressions, refer to this Cucumber document: ",(0,n.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/cucumber/api/#tag-expressions"},"Cucumber tag expression"),"."),(0,n.kt)("h2",{id:"using-the-and-tag-expression"},"Using the AND tag expression"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description"),": query the feature files in the specified folder, and execute the features or scenarios associated with all the input tags.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyword name"),": runFeatureFolderWithTags.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyword syntax"),": runFeatureFolderWithTags","(","folderRelativePath, tags, flowControl",")",".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Name: folderRelativePath"),(0,n.kt)("li",{parentName:"ul"},"Description: the folder relative path that starts from the current project location."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: ",(0,n.kt)("code",null,"String"),"."),(0,n.kt)("li",{parentName:"ul"},"Mandatory: required."),(0,n.kt)("li",{parentName:"ul"},"Name: tags"),(0,n.kt)("li",{parentName:"ul"},"Description: the tags of the features or scenarios that you want to execute."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: ",(0,n.kt)("code",null,"String"),", ",(0,n.kt)("code",null,"String[]"),", or ",(0,n.kt)("code",null,"String...")," ","(","Varargs",")","."),(0,n.kt)("li",{parentName:"ul"},"Mandatory: required."),(0,n.kt)("li",{parentName:"ul"},"Name: flowControl ","(","only valid when tags are of ",(0,n.kt)("code",null,"String[]")," type",")"),(0,n.kt)("li",{parentName:"ul"},"Description: a ",(0,n.kt)("code",null,"com.kms.katalon.core.model.FailureHandling")," instance that controls the running flow."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: ",(0,n.kt)("code",null,"FailureHandling"),"."),(0,n.kt)("li",{parentName:"ul"},"Mandatory: optional."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns"),": an instance of ",(0,n.kt)("code",null,"CucumberRunnerResult")," that includes the status of keyword and report folder location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example ","#","1"),": tags of ",(0,n.kt)("code",null,"String")," type"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", "@tag1 and @tag2")\n\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example ","#","2"),": tags of ",(0,n.kt)("code",null,"String[]")," type"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'String[] logTags = ["@tag1", "@tag2"] as String[]\nCucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", logTags, FailureHandling.STOP_ON_FAILURE)\n\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example ","#","3"),": tags of ",(0,n.kt)("code",null,"String...")," type ","(","Varargs",")"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", "@tag1", "@tag2")\n\n')))),(0,n.kt)("h2",{id:"using-the-or-tag-expression"},"Using the OR tag expression"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description"),": query the feature files in the specified folder, and execute the features or scenarios associated with any of the input tags.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyword name"),": runFeatureFolderWithTags.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyword syntax"),": runFeatureFolderWithTags","(","folderRelativePath, tags, flowControl",")",".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Name: folderRelativePath"),(0,n.kt)("li",{parentName:"ul"},"Description: the folder relative path that starts from the current project location."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: ",(0,n.kt)("code",null,"String"),"."),(0,n.kt)("li",{parentName:"ul"},"Mandatory: required."),(0,n.kt)("li",{parentName:"ul"},"Name: tags"),(0,n.kt)("li",{parentName:"ul"},"Description: the tags of the features or scenarios that you want to execute."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: ",(0,n.kt)("code",null,"String")," or ",(0,n.kt)("code",null,"String[]"),"."),(0,n.kt)("li",{parentName:"ul"},"Mandatory: required."),(0,n.kt)("li",{parentName:"ul"},"Name: flowControl ","(","only valid when tags are of ",(0,n.kt)("code",null,"String[]")," type",")"),(0,n.kt)("li",{parentName:"ul"},"Description: a ",(0,n.kt)("code",null,"com.kms.katalon.core.model.FailureHandling")," instance that controls the running flow."),(0,n.kt)("li",{parentName:"ul"},"Parameter Type: ",(0,n.kt)("code",null,"FailureHandling"),"."),(0,n.kt)("li",{parentName:"ul"},"Mandatory: optional."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns"),": an instance of ",(0,n.kt)("code",null,"CucumberRunnerResult")," that includes the status of keyword and report folder location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example ","#","1"),": tags of ",(0,n.kt)("code",null,"String")," type"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", "@tag1 or @tag2")\n// Or \nCucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", "@tag1, @tag2")\n\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Example ","#","2"),": tags of ",(0,n.kt)("code",null,"String[]")," type"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'String[] logTags1 = ["@tag1, @tag2"] as String[]\nCucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", logTags1, FailureHandling.STOP_ON_FAILURE)\n// Or \nString[] logTags2 = ["@tag1 or @tag2"] as String[]\nCucumberKW.runFeatureFolderWithTags("Include/features/BDD Cucumber Tests/", logTags2, FailureHandling.STOP_ON_FAILURE)\n\n')))))}d.isMDXComponent=!0}}]);