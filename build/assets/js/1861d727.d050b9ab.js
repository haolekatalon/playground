"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[56224],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(a),h=o,u=m["".concat(l,".").concat(h)]||m[h]||g[h]||r;return a?n.createElement(u,i(i({ref:e},p),{},{components:a})):n.createElement(u,i({ref:e},p))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3806:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={id:"concept-f1cf9d73-71d3-40a8-924a-3bf7d06570e5",slug:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio"},i="Work with Git in Katalon Studio",s={unversionedId:"concept-f1cf9d73-71d3-40a8-924a-3bf7d06570e5",id:"concept-f1cf9d73-71d3-40a8-924a-3bf7d06570e5",title:"Work with Git in Katalon Studio",description:"Katalon Studio supports a seamless built-in Git integration. Once enabled, you can access all Git features at Katalon Studio's main toolbar.",source:"@site/docs/concept-f1cf9d73-71d3-40a8-924a-3bf7d06570e5.mdx",sourceDirName:".",slug:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio",permalink:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-f1cf9d73-71d3-40a8-924a-3bf7d06570e5.mdx",tags:[],version:"current",frontMatter:{id:"concept-f1cf9d73-71d3-40a8-924a-3bf7d06570e5",slug:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Git integration in Katalon Studio",permalink:"/create-tests/manage-projects/project-settings/git-integration/git-integration-in-katalon-studio"},next:{title:"Work with Git in Katalon Studio - Platform Edition",permalink:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio-platform-edition"}},l={},c=[{value:"Enable Git integration",id:"enable-git-integration",level:2},{value:"Clone a Git repository",id:"clone-a-git-repository",level:2},{value:"Connect to Git with HTTPS",id:"connect-to-git-with-https",level:3},{value:"Connect to Git with SSH Keys",id:"connect-to-git-with-ssh-keys",level:3},{value:"Publish a local non-Git project as a Git repository",id:"publish-a-local-non-git-project-as-a-git-repository",level:2},{value:"Commit",id:"commit",level:2},{value:"Manage Branches",id:"manage-branches",level:2},{value:"New Branch",id:"new-branch",level:3},{value:"Checkout Branch",id:"checkout-branch",level:3},{value:"Delete Branch",id:"delete-branch",level:3},{value:"Push",id:"push",level:2},{value:"Pull",id:"pull",level:2},{value:"Fetch",id:"fetch",level:2},{value:"Resolve Git conflicts using Katalon Studio",id:"resolve-git-conflicts-using-katalon-studio",level:2},{value:"Why do we have Git conflicts?",id:"why-do-we-have-git-conflicts",level:3},{value:"Best practices",id:"best-practices",level:3}],p={toc:c},m="wrapper";function g(t){let{components:e,...a}=t;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"work-with-git-in-katalon-studio"},"Work with Git in Katalon Studio"),(0,o.kt)("p",null,"Katalon Studio supports a seamless built-in Git integration. Once enabled, you can access all Git features at Katalon Studio's main toolbar."),(0,o.kt)("p",null,"This document shows you how to integrate and use Git in Katalon Studio."),(0,o.kt)("h2",{id:"enable-git-integration"},"Enable Git integration"),(0,o.kt)("p",null,"To enable Git integration, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Katalon Studio")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Katalon")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Git"),"."),(0,o.kt)("p",{parentName:"li"},"Check the ",(0,o.kt)("strong",{parentName:"p"},"Enable Git Integration")," box.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-enable-git-integration.png",width:700,alt:"Enable Git integration"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply and Close"),"."),(0,o.kt)("p",{parentName:"li"},"You can start using Git at Katalon Studio main toolbar.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-pe-git-enabled-1.png",width:400,alt:"Git in main toolbar"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want specific settings, go to ",(0,o.kt)("strong",{parentName:"p"},"Katalon Studio")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Team")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Git")," for advanced configurations."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-git-team.png",width:700,alt:"Git Team"}))),(0,o.kt)("h2",{id:"clone-a-git-repository"},"Clone a Git repository"),(0,o.kt)("p",null,"After enabling Git Integration, you can clone an existing ",(0,o.kt)("strong",{parentName:"p"},"Git repository")," into a new directory on the local machine."),(0,o.kt)("p",null,"Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on the ",(0,o.kt)("em",{parentName:"p"},"Git")," icon and select ",(0,o.kt)("strong",{parentName:"p"},"Clone Project"),"."),(0,o.kt)("p",{parentName:"li"},"You can also click on ",(0,o.kt)("strong",{parentName:"p"},"Clone Git Project")," in the ",(0,o.kt)("strong",{parentName:"p"},"Tests Explorer")," section. ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-pe-clone-git-1.png",width:400}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Clone Git Repository")," dialog appears."))),(0,o.kt)("h3",{id:"connect-to-git-with-https"},"Connect to Git with HTTPS"),(0,o.kt)("p",null,"To let Katalon Studio get details about your repository, enter all required information and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-clone-git-repo.png",width:600,alt:"clone Git repository"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Repository URL"),": the remote URL to your Git repository in HTTPS protocol. See Git documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/which-remote-url-should-i-use"},"About remote repositories"),". To get HTTPS Protocol, go to your account on GitHub, GitLab, Bitbucket, or AzureDevOps, then go to the repository you want to clone to Katalon Studio. Click ",(0,o.kt)("strong",{parentName:"p"},"Clone")," and select ",(0,o.kt)("strong",{parentName:"p"},"HTTPS"),", then copy the ",(0,o.kt)("strong",{parentName:"p"},"HTTPS Protocol"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authentication"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Username"),": the username to access the Git repository.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Password"),": the personal access token to access the Git repository. To learn how to create a Git personal access token, you can refer to these documents:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Creating a personal access token"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Azure Repos: To clone your repository from Azure DevOps, you need to click ",(0,o.kt)("strong",{parentName:"p"},"Generate Git Credential"),". Copy the ",(0,o.kt)("strong",{parentName:"p"},"Username")," and the generated ",(0,o.kt)("strong",{parentName:"p"},"Password"),", then paste them accordingly in the ",(0,o.kt)("strong",{parentName:"p"},"Authentication")," section in Katalon Studio. See: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows"},"Use personal access tokens"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/generate-git-credential-azure.png",width:500})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bitbucket: ",(0,o.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html"},"HTTP access tokens"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GitLab: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token"},"Create a personal access token"),"."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When your Git credentials on GitHub change, you need to return to this step: ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio#"},"Clone a Git repository"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"AWS CodeCommit is currently not supported in Katalon Studio.")))))))))),(0,o.kt)("p",null,"If you cannot access the repository after clicking ",(0,o.kt)("strong",{parentName:"p"},"Next"),", the connection might have issues with SSL verification. You can use the command below to bypass SSL verification ","(","Not recommended",")",":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git config --global http.sslVerify false\n\n")),(0,o.kt)("h3",{id:"connect-to-git-with-ssh-keys"},"Connect to Git with SSH Keys"),(0,o.kt)("p",null,"To connect to Git with SSH keys, see ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/manage-projects/project-settings/git-integration/git-integration-authentication-with-ssh-keys-in-katalon-studio"},"Git Integration Authentication with SSH Keys"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Known issues:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Currently, the Git integration in Katalon Studio supports SSH SHA-1, RSA-1024 and RSA-2048 private keys. Since GitHub has dropped the support for DSA and RSA SHA-1, you cannot integrate Katalon Studio with GitHub via SSH. You can still integrate Katalon Studio with other cloud-hosted services of Git, such as GitLab, BitBucket, and Microsoft Azure DevOps.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The workaround for this issue is to use:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"HTTPS protocol with GitHub personal access token. See ",(0,o.kt)("a",{parentName:"li",href:"/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio#"},"Connect to Git with HTTPS"),"."),(0,o.kt)("li",{parentName:"ul"},"Git with a terminal."),(0,o.kt)("li",{parentName:"ul"},"3rd party tools.")))),(0,o.kt)("h2",{id:"publish-a-local-non-git-project-as-a-git-repository"},"Publish a local non-Git project as a Git repository"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Share Project")," is a step to enable Git configuration for your new Katalon Studio project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click the ",(0,o.kt)("strong",{parentName:"p"},"Git icon ",">"," Share Project"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-share-project.png",width:200})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Folder ",(0,o.kt)("strong",{parentName:"p"},".git")," and file ",(0,o.kt)("strong",{parentName:"p"},".gitignore")," are created within the Katalon project."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},".gitignore")," tells Git which files ","(","or patterns",")"," it should ignore. By default, ",(0,o.kt)("strong",{parentName:"p"},".gitignore")," contains these files and patterns: ",(0,o.kt)("code",null,"/bin /Libs .settings .classpath /.svn")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Share Project"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-share-project.png",width:200})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Folder ",(0,o.kt)("strong",{parentName:"p"},".git")," and file ",(0,o.kt)("strong",{parentName:"p"},".gitignore")," are created within the Katalon project."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},".gitignore")," tells Git which files ","(","or patterns",")"," it should ignore. By default, ",(0,o.kt)("strong",{parentName:"p"},".gitignore")," contains the following files and patterns: ",(0,o.kt)("code",null,"/bin /Libs .settings .classpath /.svn")))),(0,o.kt)("h2",{id:"commit"},"Commit"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Commit")," option allows users to view all current changes and decide which changes are stored in the local branch. For more information on the commit command, refer to this Git document: ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-commit"},"Git commit"),"."),(0,o.kt)("p",null,"Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Commit"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/Platform-Edition/image/ks-850-pe-commit.png",width:250,alt:"Git commit"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Git Staging")," tab is displayed for configuration."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-commit.png",width:700,alt:"Git staging"}),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Field"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Unstaged Changes"),(0,o.kt)("td",null,"Changes which have been made.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Staged Changes"),(0,o.kt)("td",null,"Selected changes from Unstaged Changes. These changes are committed.")),"    "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Unstaged Changes")," list, select the changes to be committed, then right-click on them and select ",(0,o.kt)("strong",{parentName:"p"},"Add To Index"),". You can also drag and drop items from the Unstaged Changes to the Staged Changes."),(0,o.kt)("p",{parentName:"li"},"Selected changes are added to the ",(0,o.kt)("strong",{parentName:"p"},"Staged Changes")," list.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter your comments into the ",(0,o.kt)("strong",{parentName:"p"},"Commit Message"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Commit")," to store your staged changes into the local branch."))),(0,o.kt)("h2",{id:"manage-branches"},"Manage Branches"),(0,o.kt)("h3",{id:"new-branch"},"New Branch"),(0,o.kt)("p",null,"To create a new branch, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Manage Branches")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"New Branch"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/Platform-Edition/image/ks-pe-new-branch.png",width:300})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Create Branch")," dialog displays."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-create-new-branch.png",width:500,alt:"Create branch dialog"}),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Field"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Source"),(0,o.kt)("td",null,"Select either remote or local branch, which is your source branch.",(0,o.kt)("p",null,(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-select-source.png",width:500,alt:"Select source dialog"})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Branch name"),(0,o.kt)("td",null,"The name to be used for the new branch.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Checkout new branch"),(0,o.kt)("td",null,"Option to let ",(0,o.kt)("span",null,"Katalon Studio")," checkout that branch after created.")),"    "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Finish")," to create a new branch."))),(0,o.kt)("h3",{id:"checkout-branch"},"Checkout Branch"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Checkout Branch")," option allows you to switch from one branch to another."),(0,o.kt)("p",null,"Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Manage Branches")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Checkout Branch"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-check-out-branch.png",width:300,alt:"Checkout branch"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Select Source")," dialog displays."),(0,o.kt)("p",{parentName:"li"},"Select the local branch you want to check out to be the current branch. The branch with a ",(0,o.kt)("strong",{parentName:"p"},"\u221a")," icon is your current local branch."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-select-source-branch.png",width:500,alt:"Select source dialog"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"OK")," when you finish."))),(0,o.kt)("h3",{id:"delete-branch"},"Delete Branch"),(0,o.kt)("p",null,"To delete a branch, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Manage Branches")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Delete Branch"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-delete-branch.png",width:300})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Delete Branch")," dialog, both local and remote branches are displayed. Select a branch to delete."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-delete-branch-dialog.png",width:500,alt:"Delete branch dialog"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"OK")," when you finish."))),(0,o.kt)("h2",{id:"push"},"Push"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Before doing any push, you need to commit your changes."))),(0,o.kt)("p",null,"You can use push command to upload the local branch to the remote branch. For more information on the push command, refer to this Git document: ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-push"},"Git push"),"."),(0,o.kt)("p",null,"Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Push"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/Platform-Edition/image/ks-pe-850-push.png",width:250}),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Push Branch master")," dialog appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose from the ",(0,o.kt)("strong",{parentName:"p"},"Remote branch")," list which branch to be updated ","(","All remote branches in your Git repository are listed here",")","."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-push-branch.png",width:500}),(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next")," after finishing selecting your remote branch."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If you enter a name besides the listed branches, a new remote branch with that name is created accordingly.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Push Confirmation")," dialog appears with details of your commit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Finish")," to push your commits to the remote repository."))),(0,o.kt)("h2",{id:"pull"},"Pull"),(0,o.kt)("p",null,"You can use the pull command to incorporate changes from a remote repository into the current branch. For more information on the pull command, refer to this Git document: ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-pull"},"Git pull"),"."),(0,o.kt)("p",null,"Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Pull"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/Platform-Edition/image/ks-pe-850-pull.png",width:250}),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Pull")," dialog appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the remote branch to be pulled into your local branch."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-remote-branch.png",width:500})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Finish"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Pull Result")," dialog displays information about pulling requests on the selected branch."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-pull-result.png",width:350,alt:"Pull result dialog"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"OK")," when you finish."))),(0,o.kt)("h2",{id:"fetch"},"Fetch"),(0,o.kt)("p",null,"You can retrieve all information about changes that have occurred in remote branches. For more information on the fetch command, refer to this Git document: ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-fetch"},"Git fetch"),"."),(0,o.kt)("p",null,"Do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click on ",(0,o.kt)("strong",{parentName:"p"},"Git")," dropdown arrow ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Fetch"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/Platform-Edition/image/ks-pe-850-fetch.png",width:250,alt:"Git Fetch"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Fetch Results")," dialog appears."),(0,o.kt)("p",{parentName:"li"},"Remote branches, tags, and remote changes are fetched automatically."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-fetch-result.png",width:500,alt:"Fetch results dialog"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the main toolbar, click ",(0,o.kt)("strong",{parentName:"p"},"Show History"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/Platform-Edition/image/ks-pe-850-show-history.png",width:250})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"History")," tab appears."),(0,o.kt)("p",{parentName:"li"},"Details regarding all the branches and tags you've just fetched are displayed."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/ks-840-history.png",width:750,alt:"History tab"}))),(0,o.kt)("h2",{id:"resolve-git-conflicts-using-katalon-studio"},"Resolve Git conflicts using Katalon Studio"),(0,o.kt)("h3",{id:"why-do-we-have-git-conflicts"},"Why do we have Git conflicts?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In a source control system like Git, conflicts occur when two or more people make changes to the same file concurrently. The conflicts may appear at a member's local repository or Git remote repository.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To avoid conflicts, the team must collaborate following several Git practices. For example, before ",(0,o.kt)("strong",{parentName:"p"},"pushing")," new source code to the Git remote repository, one must remember to ",(0,o.kt)("strong",{parentName:"p"},"fetch")," the latest version from Git remote repository, ",(0,o.kt)("strong",{parentName:"p"},"resolve")," any conflicts, and ",(0,o.kt)("strong",{parentName:"p"},"merge")," the code with the local version."))),(0,o.kt)("p",null,"Below is an example of how to resolve Git conflicts using Katalon Studio:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The chart below demonstrates how conflicts may occur when Tom and Emma are working on the same project. The conflicts occur when Tom and Emma try to push new code to the Git remote repository without updating the changes from each other."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Git-conflict.png",width:700,alt:"Git conflict"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Given situation:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tom and Emma are working on the same test case in a test project. Emma added a new comment ","(",'"EMMA ADDED THIS COMMENT"',")",", then committed and pushed the change to the Git remote repository."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Git-conflict-2.png",width:700,alt:"git conflict 2"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At almost the same time, Tom added a new comment ","(",'"TOM ADDED THIS COMMENT"',")",", then committed and tried to push to the Git remote repository."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Resolve-Git-conflict-2.png",width:700})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Unfortunately, since Emma had pushed the code before Tom, so the version of code in Git was different from the version of code in Tom's local repository. Therefore, Git rejected Tom's push action."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question: What should Tom do to push its change to the Git remote control?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, Tom has to pull the code from the Git remote repository to his local machine."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Resolve-Git-conflict-3.png",width:700,alt:"pull the code"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Obviously, Tom will see a message about the conflict:"),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Resolve-Git-conflict-4.png",width:400,alt:"message about the conflict"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Script")," mode of the test case ",(0,o.kt)("strong",{parentName:"p"},"TC2","_","Verify Successful Appointment")," in Tom's Katalon Studio project, there are errors with indicators such as \"","<","<","<","<","<","<","<",'" ',"(","convention from Git",")",". Let's look at the script more carefully:"),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Resolve-Git-conflict-5.png",width:700,alt:"script"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Recall that the comments were added by Tom and Emma, and the conflict is now on Tom's Katalon Studio project. Everything within ",(0,o.kt)("strong",{parentName:"p"},'"',"<","<","<","<","<","<","<",' HEAD"')," and ",(0,o.kt)("strong",{parentName:"p"},'"======="')," is the change from Tom. And, everything within ",(0,o.kt)("strong",{parentName:"p"},'"======="')," and ",(0,o.kt)("strong",{parentName:"p"},'"',">",">",">",">",">",">",">"," branch 'master'\u2026\"")," comes from Emma, which is currently in the Git remote repository.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Now Tom has to decide which change is correct, or both are correct or wrong. Tom has to replace these lines of code with the correct ones. For example, "THIS IS THE CORRECT COMMENT":'),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Manage_Projects/Project_Settings/Git-Integration/Git_Integration/image/Resolve-Git-conflict-6.png",width:700,alt:"decide which change is correct"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After resolving the conflict, Tom is now able to commit and push the change to the Git remote repository."))),(0,o.kt)("h3",{id:"best-practices"},"Best practices"),(0,o.kt)("p",null,"To minimize the conflict in a team having more than one member, you should define a process from the very beginning so that all team members are on the same page when using Git."),(0,o.kt)("p",null,"Below are some suggestions for good practices:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Commit often"),": do not wait until many scripts are created to commit and push to the Git remote repository. The smaller the set of scripts is pushed, the easier you resolve the conflict."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pull")," changes from the Git remote repository ",(0,o.kt)("strong",{parentName:"li"},"before")," working on new scripts and before ",(0,o.kt)("strong",{parentName:"li"},"committing"),". Each member works on ",(0,o.kt)("strong",{parentName:"li"},"each feature at a time"),".")))}g.isMDXComponent=!0}}]);