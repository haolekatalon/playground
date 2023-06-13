"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[67557],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return a?r.createElement(b,s(s({ref:t},l),{},{components:a})):r.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={id:"concept-6c2246a5-1a03-495e-a516-bffffbb99b52",slug:"/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio"},s="Draft Request in Katalon Studio",i={unversionedId:"concept-6c2246a5-1a03-495e-a516-bffffbb99b52",id:"concept-6c2246a5-1a03-495e-a516-bffffbb99b52",title:"Draft Request in Katalon Studio",description:"Katalon Studio supports the \u2018API Testing\u2019 project with new features and capabilities. Occasionally, you may want to send a request with different test data before adding the data to your test case. Katalon Studio allows you to create a Draft Request to experiment with various data. All sent requests are saved in the \u2018Request History\u2019 panel on the left sidebar which you can retrieve anytime.",source:"@site/docs/concept-6c2246a5-1a03-495e-a516-bffffbb99b52.mdx",sourceDirName:".",slug:"/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio",permalink:"/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-6c2246a5-1a03-495e-a516-bffffbb99b52.mdx",tags:[],version:"current",frontMatter:{id:"concept-6c2246a5-1a03-495e-a516-bffffbb99b52",slug:"/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Request History in Katalon Studio",permalink:"/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio"},next:{title:"Handle Response Messages in Katalon Studio",permalink:"/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio"}},c={},u=[],l={toc:u},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"draft-request-in-katalon-studio"},"Draft Request in Katalon Studio"),(0,n.kt)("p",null,"Katalon Studio supports the \u2018API Testing\u2019 project with new features and capabilities. Occasionally, you may want to send a request with different test data before adding the data to your test case. Katalon Studio allows you to create a Draft Request to experiment with various data. All sent requests are saved in the \u2018Request History\u2019 panel on the left sidebar which you can retrieve anytime."),(0,n.kt)("p",null,"To create a draft request, click on the \u2018New Draft Request\u2019 icons ","(","REST or SOAP",")"," on the main toolbar or from Quick Start Wizard in the \u2018Help\u2019 menu."),(0,n.kt)("p",null,"Katalon Studio will open a \u2018Draft Request Details\u2019 view based on the selected request type. Here, you need to enter all the required request information. You can also leverage the \u2018Verification\u2019 feature to verify the response values if they match with the predefined API specification."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/draft-request/draft-overview.png"}),(0,n.kt)("p",null,"If you decide to add a draft request to your test case, select the desired request and click \u2018Save.\u2019 You will be asked to specify the name and target folder in \u2018Object Repository."),(0,n.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/draft-request/save-draft.png"}),(0,n.kt)("p",null,"Now you can execute your test case with the new web service request as usual."))}f.isMDXComponent=!0}}]);