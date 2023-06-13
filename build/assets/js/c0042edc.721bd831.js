"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[65094],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(o),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||n;return o?r.createElement(m,l(l({ref:t},s),{},{components:o})):r.createElement(m,l({ref:t},s))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},5971:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={id:"concept-d76fac5b-19b9-4924-a063-7dc553257153",slug:"/execute/ci-cd-integrations/google-cloud-build"},l="Google Cloud Build",i={unversionedId:"concept-d76fac5b-19b9-4924-a063-7dc553257153",id:"concept-d76fac5b-19b9-4924-a063-7dc553257153",title:"Google Cloud Build",description:"Cloud Build is a service that executes your builds on the Google Cloud Platform \\(GCP\\). Cloud Build can import source code from Google Cloud Storage, Cloud Source Repositories, GitHub, or Bitbucket, to continuously build, test, and deploy projects. For more information on Cloud Build, see the Cloud Build documentation: Cloud Build.",source:"@site/docs/concept-d76fac5b-19b9-4924-a063-7dc553257153.mdx",sourceDirName:".",slug:"/execute/ci-cd-integrations/google-cloud-build",permalink:"/execute/ci-cd-integrations/google-cloud-build",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-d76fac5b-19b9-4924-a063-7dc553257153.mdx",tags:[],version:"current",frontMatter:{id:"concept-d76fac5b-19b9-4924-a063-7dc553257153",slug:"/execute/ci-cd-integrations/google-cloud-build"},sidebar:"tutorialSidebar",previous:{title:"GitLab Integration",permalink:"/execute/ci-cd-integrations/gitlab-integration"},next:{title:"Harness Integration",permalink:"/execute/ci-cd-integrations/harness-integration"}},u={},c=[{value:"Configure the GCP project",id:"configure-the-gcp-project",level:2},{value:"Configure the <code>cloudbuild.yml</code> file",id:"configure-the-cloudbuildyml-file",level:3},{value:"Create a GCP secret for Katalon API key",id:"create-a-gcp-secret-for-katalon-api-key",level:3},{value:"Create and test your build trigger",id:"create-and-test-your-build-trigger",level:2},{value:"Create a trigger",id:"create-a-trigger",level:3},{value:"Test the trigger",id:"test-the-trigger",level:3},{value:"View build results",id:"view-build-results",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"google-cloud-build"},"Google Cloud Build"),(0,a.kt)("p",null,"Cloud Build is a service that executes your builds on the Google Cloud Platform ","(","GCP",")",". Cloud Build can import source code from Google Cloud Storage, Cloud Source Repositories, GitHub, or Bitbucket, to continuously build, test, and deploy projects. For more information on Cloud Build, see the Cloud Build documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/build/docs"},"Cloud Build"),"."),(0,a.kt)("p",null,"This tutorial shows you how to integrate your Katalon project with Cloud Build."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You can find the sample project in our GitHub repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/katalon-studio-samples/ci-samples"},"katalon-studio-samples/ci-samples"),"."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"A valid Katalon API key. See: ",(0,a.kt)("a",{parentName:"li",href:"/administer/settings/katalon-api-key-in-katalon-testops#"},"Generate API keys"),"."),(0,a.kt)("li",{parentName:"ul"},"A GCP project. See Google Workspace developer documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/workspace/guides/create-project"},"Create a Google Cloud project"),"."),(0,a.kt)("li",{parentName:"ul"},"Google Cloud Build API enabled for your Google Cloud project. See Google Cloud documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/endpoints/docs/openapi/enable-api"},"Enabling an API in your Google Cloud project"),"."),(0,a.kt)("li",{parentName:"ul"},"Secret Manager API enabled for your GCP project. See Google Cloud documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/build/docs/securing-builds/use-secrets"},"Using secrets from Secret Manager"),"."))),(0,a.kt)("h2",{id:"configure-the-gcp-project"},"Configure the GCP project"),(0,a.kt)("p",null,"After setting up the GCP project, you need to configure the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("code",null,"cloudbuild.yml")," file at the root directory of your repository that contains the build configuration for Cloud Build."),(0,a.kt)("li",{parentName:"ul"},"A GCP secret to store your Katalon API key.")),(0,a.kt)("h3",{id:"configure-the-cloudbuildyml-file"},"Configure the ",(0,a.kt)("code",null,"cloudbuild.yml")," file"),(0,a.kt)("p",null,"Here in the sample GitHub repository, we have the following ",(0,a.kt)("code",null,"cloudbuild.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"steps:\n- name: 'docker'\n  args: ['pull', 'katalonstudio/katalon']\n- name: 'docker'\n  entrypoint: 'sh'\n  args: ['-c', 'docker run -t --rm -v /workspace:/tmp/project katalonstudio/katalon katalonc.sh -projectPath=/tmp/project -browserType=\"Chrome\" -retry=0 -retryStrategy=immediately -testSuiteCollectionPath=\"Test Suites/Simple Test Suite Collection\" --config -webui.autoUpdateDrivers=true -apiKey=$$KATALON_API_KEY']\n  secretEnv: ['KATALON_API_KEY']\navailableSecrets:\n  secretManager:\n  - versionName: projects/$PROJECT_ID/secrets/KATALON_API_KEY/versions/1\n    env: 'KATALON_API_KEY'\n\n")),(0,a.kt)("p",null,"In the build configuration file, there are two build steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a ",(0,a.kt)("code",null,"docker")," cloud builder to pull the ",(0,a.kt)("code",null,"katalonstudio/katalon")," Docker image from Docker Hub."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"args")," field, you can specify an image version with the syntax ",(0,a.kt)("code",null,"katalonstudio/katalon:","<","version","_","tag",">"),", for example ",(0,a.kt)("code",null,"katalonstudio/katalon:8.1.2"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a ",(0,a.kt)("code",null,"docker")," cloud builder to run the ",(0,a.kt)("code",null,"katalonstudio/katalon")," image as a container and execute the tests stored in the GitHub repository."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"args")," field, you can input your desired ",(0,a.kt)("code",null,"katalonc")," commands. All of ",(0,a.kt)("code",null,"katalonc")," supported arguments can be found in this document: ",(0,a.kt)("a",{parentName:"p",href:"/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine"},"Command Syntax"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"secretEnv")," field, you can input the environment variables for the build. Here we have the ",(0,a.kt)("code",null,"KATALON","_","API","_","KEY")," variable to specify the use of a secret named ",(0,a.kt)("code",null,"KATALON","_","API","_","KEY"),"."))))),(0,a.kt)("h3",{id:"create-a-gcp-secret-for-katalon-api-key"},"Create a GCP secret for Katalon API key"),(0,a.kt)("p",null,"As specified in the build configuration file, the ",(0,a.kt)("code",null,"KATALON","_","API","_","KEY")," secret represents your Katalon API key. We need to define the secret in our project."),(0,a.kt)("p",null,"For detailed instructions on creating a GCP secret, refer to this Google Cloud guide: ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"},"Creating and accessing secrets"),"."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Secret-key.png",alt:"Google Cloud Platform secret manager"}),(0,a.kt)("h2",{id:"create-and-test-your-build-trigger"},"Create and test your build trigger"),(0,a.kt)("p",null,"A Cloud Build trigger automatically starts a build whenever you make changes to your source code. You need to connect Cloud Build to the sample GitHub repository and then create a trigger that automatically monitors changes and builds code."),(0,a.kt)("p",null,"For detailed instructions on connecting to repositories and building triggers, refer to this guide: ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/build/docs/automating-builds/create-manage-triggers"},"Creating and managing build triggers"),"."),(0,a.kt)("h3",{id:"create-a-trigger"},"Create a trigger"),(0,a.kt)("p",null,"In our example, a trigger is created to build the code automatically whenever a ",(0,a.kt)("strong",{parentName:"p"},"Push to branch")," event occurs."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Created-trigger.png",alt:"Google Cloud Platform trigger created"}),(0,a.kt)("h3",{id:"test-the-trigger"},"Test the trigger"),(0,a.kt)("p",null,"To test the trigger, you can start the build manually by clicking ",(0,a.kt)("strong",{parentName:"p"},"Run")," on the trigger."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Run-trigger.png",alt:"Google Cloud Platform run trigger"}),(0,a.kt)("h3",{id:"view-build-results"},"View build results"),(0,a.kt)("p",null,"To view the build results, go to the ",(0,a.kt)("strong",{parentName:"p"},"History")," tab and select the latest build."),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-History-tab.png",alt:"Google Cloud Platform history tab"}),(0,a.kt)("p",null,"The build details are shown as follows:"),(0,a.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Build-details.png",alt:"Google Cloud Platform build details"}),(0,a.kt)("p",null,"We can see that the code build includes two steps: pulling the Docker image and executing the tests in a container."),(0,a.kt)("p",null,"To view test reports in TestOps, you can enable Katalon TestOps integration in your project. See: ",(0,a.kt)("a",{parentName:"p",href:"/get-started/set-up-your-workspace/integrate-katalon-testops-and-katalon-testcloud-with-katalon-studio"},"TestOps Integration"),"."))}p.isMDXComponent=!0}}]);