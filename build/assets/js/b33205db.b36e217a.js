"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[92626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?s.createElement(h,n(n({ref:t},c),{},{components:a})):s.createElement(h,n({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,n[1]=i;for(var l=2;l<o;l++)n[l]=a[l];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=a(87462),r=(a(67294),a(3905));const o={id:"concept-30b39971-7917-4a67-bf98-2974cceeb1ff",slug:"/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio"},n="REST Request in Katalon Studio",i={unversionedId:"concept-30b39971-7917-4a67-bf98-2974cceeb1ff",id:"concept-30b39971-7917-4a67-bf98-2974cceeb1ff",title:"REST Request in Katalon Studio",description:"Katalon Studio supports sending RESTful requests with parameters, body data, and authorization details needed. When sending a request, you can receive a response from the API server for examination, and troubleshooting. This section gives you detailed information on how to create, and configure a RESTful request.",source:"@site/docs/concept-30b39971-7917-4a67-bf98-2974cceeb1ff.mdx",sourceDirName:".",slug:"/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio",permalink:"/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-30b39971-7917-4a67-bf98-2974cceeb1ff.mdx",tags:[],version:"current",frontMatter:{id:"concept-30b39971-7917-4a67-bf98-2974cceeb1ff",slug:"/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Import SOAP requests from WSDLs to Katalon Studio",permalink:"/create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio"},next:{title:"Create REST API requests manually in Katalon Studio",permalink:"/create-tests/test-objects/api-test-objects/rest-request/create-rest-api-requests-manually-in-katalon-studio"}},u={},l=[{value:"Create a RESTful Request",id:"create-a-restful-request",level:2},{value:"Specify request details",id:"specify-request-details",level:2},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Authentication",id:"request-authentication",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response",id:"response",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Header",id:"response-header",level:3},{value:"Verification Log",id:"verification-log",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rest-request-in-katalon-studio"},"REST Request in Katalon Studio"),(0,r.kt)("p",null,"Katalon Studio supports sending RESTful requests with parameters, body data, and authorization details needed. When sending a request, you can receive a response from the API server for examination, and troubleshooting. This section gives you detailed information on how to create, and configure a RESTful request."),(0,r.kt)("h2",{id:"create-a-restful-request"},"Create a RESTful Request"),(0,r.kt)("p",null,"You can create a new RESTful request object in two ways. First, you can ",(0,r.kt)("strong",{parentName:"p"},"add")," a Web Service request to a ",(0,r.kt)("em",{parentName:"p"},"New")," or any ",(0,r.kt)("em",{parentName:"p"},"Existing")," test case directly in the object details view by a click on the ",(0,r.kt)("strong",{parentName:"p"},"plus")," icon."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/soap-request/Screen-Shot-2018-09-20-at-5.06.42-PM.png",alt:"Add web service request to a test case"}),(0,r.kt)("p",null,"Or select ",(0,r.kt)("strong",{parentName:"p"},"File ",">"," New ",">"," Web Service Request")," from the main menu."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"New Web Service Request")," dialog, specify a name for your request; select ",(0,r.kt)("strong",{parentName:"p"},"RESTful")," in the Request Type's drop-down list; and set request URLs. Then click OK to create a request."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/KS-RESTFUL-Create-a-new-object.png",width:500,alt:"Create a new web service request"}),(0,r.kt)("h2",{id:"specify-request-details"},"Specify request details"),(0,r.kt)("p",null,"After you have created a request successfully, double-click on the request to open its editor for adding details."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/KS-RESTFUL-Parameterize-the-object.png",width:700,alt:"Specify a new web service request"}),(0,r.kt)("h3",{id:"request-method"},"Request Method"),(0,r.kt)("p",null,"The request method indicates the expected action to be executed on the specified resource. For REST services, Katalon Studio supports the following methods: GET, POST, PUT, DELETE, PATCH, HEAD, CONNECT, OPTIONS, and TRACE. You can refer to REST API Tutorial: ",(0,r.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-methods/"},"HTTP Methods")," for more details, and specifications of each method."),(0,r.kt)("p",null,"For Katalon Studio Enterprise users, you can use custom methods added in ",(0,r.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Test Design ",">"," Web Service ",">"," Custom Method"),"."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/creat-first-API-testing/KS-API-Create-custom-webservice-method.png",alt:"Create a custom method"}),(0,r.kt)("p",null,"In Tests Explorer, there is a small ",(0,r.kt)("strong",{parentName:"p"},"icon")," next to the object that indicates its used method. By default, the GET method is selected for new requests."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/KS-RESTFUL-Get-object.png",width:500,alt:"a GET object"}),(0,r.kt)("h3",{id:"request-url"},"Request URL"),(0,r.kt)("p",null,"You need to specify a URL indicating the service endpoint of each request. For example, the following URL ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/v2/pet/findByStatus?status=$%E2%9D%B4status%E2%9D%B4"},"https://petstore.swagger.io/v2/pet/findByStatus?status=$","\u2774","status","\u2775"),";")," is registered for the RESTful request we've created. In URLs, you can use variables, ",(0,r.kt)("code",null,"status=$","\u2774","status","\u2775"),", for instance, to update the Query Parameter dynamically. ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/test-objects/api-test-objects/rest-request/parameterize-a-web-service-object-in-katalon-studio"},"More details"),"."),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("p",null,"This table displays any parameter to be passed along with the RESTful request object. These values are generated automatically based on the Request URL or can be manually added. To learn more about ",(0,r.kt)("strong",{parentName:"p"},"Query Parameters"),", see: ",(0,r.kt)("a",{parentName:"p",href:"/create-tests/test-objects/api-test-objects/rest-request/parameterize-a-web-service-object-in-katalon-studio"},"Parameterize a Web Service Object"),"."),(0,r.kt)("p",null,"Starting from version 7.0.0, Katalon Studio encodes special characters in query parameters before sending requests."),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"You can add the body information needed to be sent along with a RESTful request object. Katalon Studio supports the following body data types: text, x-www-form-urlencoded, form-data, and file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Text"),": With this type, the supported formats include Text, JSON, XML, HTML, and Javascript."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/KS-RESTFUL-Input-HTTP-body.png",width:600,alt:"Specify HTTP body"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Form-data"),": This data type allows you to send data to APIs as multipart/form-data, and attach files as well. From ",(0,r.kt)("strong",{parentName:"p"},"version 7.5.0+"),", you can specify the content type in the form-data body. ",(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/form-data.png",width:700})))),(0,r.kt)("h3",{id:"request-authentication"},"Request Authentication"),(0,r.kt)("p",null,"This part is used for authenticating, and authorizing the request, which means to verify if the client is permitted to send the request, and to perform the endpoint operation."),(0,r.kt)("p",null,"For more details on using each type of auth, see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/authorization/bearer-authentication-in-katalon-studio#"},"Bearer")," ","(","version 8.4.0 onwards",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/authorization/basic-authentication-in-katalon-studio"},"Basic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/authorization/authorization-oauth-1-0-in-katalon-studio"},"OAuth 1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/authorization/authorization-oauth-2-0-in-katalon-studio"},"OAuth 2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/authorization/ntlm-authentication-in-katalon-studio"},"NTLM")," ","(","version 8.4.0 beta onwards",")")),(0,r.kt)("h3",{id:"request-headers"},"Request Headers"),(0,r.kt)("p",null,"You can configure the header information needed for sending the RESTful request object. By default, the ",(0,r.kt)("strong",{parentName:"p"},"Content-Type")," value of ",(0,r.kt)("strong",{parentName:"p"},"Header")," is generated automatically based on the HTTP Body. You can also select headers from the list of suggested options ","(","by double-clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Name")," cell",")"," or enter another header of your interest. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"},"Supported HTTP Headers")," for more details."),(0,r.kt)("p",null,"Starting from version ",(0,r.kt)("strong",{parentName:"p"},"7.2.5"),", Katalon Studio supports disabling specifying the content type of HTTP Header based on HTTP Body automatically. This allows users to configure content types for HTTP Header, and Body separately."),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful/auto-update.png",width:700}),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"After you send a request, Katalon Studio supports reading its response in a separate ",(0,r.kt)("strong",{parentName:"p"},"Response")," view. A service response comprises Status, Elapsed time, and Size fields; Body section, Header, and Verification Log."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status"),": The status code of the response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Elapsed"),": The total time that starts from the request is sent until Katalon Studio receives the last byte of the response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": Size of the response package.")),(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/image2018-9-5-143A253A46.png"}),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"Katalon can read a service response in JSON, XML, HTML, and JavaScript. The response body can be displayed in three formats: pretty, raw, and preview."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pretty"),": Response is displayed in a pretty format which is easier to read ",(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/Screen-Shot-2018-04-10-at-17.23.21.png"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"raw"),": Response is displayed in the raw text without any format ",(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/image2018-9-5-143A253A6.png"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"preview"),": Response is displayed as visualized ","(","e.g., If a Response is from loading a specific webpage, it is displayed as the screenshot below",")"," ",(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/image2018-4-1-19_10_26.png"})))),(0,r.kt)("h3",{id:"response-header"},"Response Header"),(0,r.kt)("p",null,"The response's header is displayed in the ",(0,r.kt)("strong",{parentName:"p"},"Header")," tab: ",(0,r.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/restful-web-services/image2018-9-5-143A243A48.png"})),(0,r.kt)("h3",{id:"verification-log"},"Verification Log"),(0,r.kt)("p",null,"This tab displays the verification results after the request is tested and verified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/rest-request/parameterize-a-web-service-object-in-katalon-studio"},"Parameterize a Web Service Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/test-objects/api-test-objects/verification-snippets-in-katalon-studio"},"Verification Snippets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/create-tests/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio"},"Using Web Services in a Test Case"))))}d.isMDXComponent=!0}}]);