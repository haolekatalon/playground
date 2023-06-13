"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[65079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=s,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),s=(a(67294),a(3905));const o={author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-051ee977-e91c-448b-8d2c-5a1ee0eeb4fd",slug:"/organize/custom-field-and-tags/custom-fields-and-tags"},r="Custom Fields and Tags",i={unversionedId:"concept-051ee977-e91c-448b-8d2c-5a1ee0eeb4fd",id:"concept-051ee977-e91c-448b-8d2c-5a1ee0eeb4fd",title:"Custom Fields and Tags",description:"Custom fields & tags are great tools to create and label meta-data to your Katalon test artifacts such as test case, test run schedule, test execution. You can create as many attributes to your test entities as you need, then categorize, organize or filter them with ease throughout the testing cycle on Katalon Platform.",source:"@site/docs/concept-051ee977-e91c-448b-8d2c-5a1ee0eeb4fd.mdx",sourceDirName:".",slug:"/organize/custom-field-and-tags/custom-fields-and-tags",permalink:"/organize/custom-field-and-tags/custom-fields-and-tags",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-051ee977-e91c-448b-8d2c-5a1ee0eeb4fd.mdx",tags:[],version:"current",frontMatter:{author:"Dong Nguyen <dong.nguyen@katalon.com>",id:"concept-051ee977-e91c-448b-8d2c-5a1ee0eeb4fd",slug:"/organize/custom-field-and-tags/custom-fields-and-tags"},sidebar:"tutorialSidebar",previous:{title:"View test scripts in Katalon TestOps",permalink:"/organize/view-test-scripts-in-katalon-platform/view-test-scripts-in-katalon-testops"},next:{title:"Add Custom Fields and Tags to test cases",permalink:"/organize/manage-tests/test-case/add-custom-fields-and-tags-to-test-cases"}},l={},u=[{value:"Create Custom Fields in Configurations",id:"create-custom-fields-in-configurations",level:2},{value:"Edit your Custom Fields",id:"edit-your-custom-fields",level:2},{value:"Delete your Custom Field",id:"delete-your-custom-field",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-fields-and-tags"},"Custom Fields and Tags"),(0,s.kt)("p",null,"Custom fields & tags are great tools to create and label meta-data to your Katalon test artifacts such as test case, test run schedule, test execution. You can create as many attributes to your test entities as you need, then categorize, organize or filter them with ease throughout the testing cycle on Katalon Platform."),(0,s.kt)("p",null,"Custom field is a pair of key and value meta-data that you can assign to then differentiate among your test entities, for example: ",(0,s.kt)("strong",{parentName:"p"},"testPriority:"),"High, or, ",(0,s.kt)("strong",{parentName:"p"},"scriptLanguage:"),"Java",(0,s.kt)("strong",{parentName:"p"},".")),(0,s.kt)("p",null,"Tag is a single-word string value ","(","not including a white-space",")",", similar to a hashtag, that you can assign to tests entities and query with them later on."),(0,s.kt)("p",null,"Custom fields can only be created in ",(0,s.kt)("strong",{parentName:"p"},"Configurations")," section of Katalon Platform, while Tags can be created on-the-move in the test case detail, test run detail and test result detail module."),(0,s.kt)("p",null,"Custom fields and tags empower you throughout testing cycles on Katalon Platform:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Assign custom fields and tags to your ",(0,s.kt)("a",{parentName:"p",href:"/organize/manage-tests/test-case/add-custom-fields-and-tags-to-test-cases"},"test case")," and ",(0,s.kt)("a",{parentName:"p",href:"/organize/manage-tests/test-case/search-a-test-case-by-custom-fields-and-tags"},"query your test case")," by them.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Assign custom fields and tags to ",(0,s.kt)("a",{parentName:"p",href:"/execute/schedule-test-execution/schedule-test-runs-in-testops#"},"test run schedules")," or ",(0,s.kt)("a",{parentName:"p",href:"/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops#"},"test run results"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Assign custom fields and tags to a ",(0,s.kt)("a",{parentName:"p",href:"/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine#"},"test execution")," via Katalon Runtime Engine command-line interface.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Assign custom fields and tags when you ",(0,s.kt)("a",{parentName:"p",href:"/analyze/reports/upload-test-reports/upload-junit-and-katalon-studio-reports-to-testops-manually"},"manually import your test run results to TestOps"),"."))),(0,s.kt)("h2",{id:"create-custom-fields-in-configurations"},"Create Custom Fields in Configurations"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Login to Katalon TestOps, then navigate to ",(0,s.kt)("strong",{parentName:"p"},"Configurations")," ",">"," ",(0,s.kt)("strong",{parentName:"p"},"Custom Fields"),"."),(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("strong",{parentName:"p"},"Custom Fields")," page appears.",(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-Configurations-Custom_Fields.png",alt:"TestOps custom fields page"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("strong",{parentName:"p"},"+ Create new customer field")," button."),(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("strong",{parentName:"p"},"Create new custom field")," dialog appears. ",(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-Configuration-Create_new_custom_field_dialog.png",alt:"Create new custom field"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For ",(0,s.kt)("strong",{parentName:"p"},"Key"),", enter a key for your custom field, for example: ",(0,s.kt)("strong",{parentName:"p"},"priority"),", ",(0,s.kt)("strong",{parentName:"p"},"testing-type"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For ",(0,s.kt)("strong",{parentName:"p"},"Display Name"),", enter a name for your key what would display on Katalon Platform interface, for example: ",(0,s.kt)("strong",{parentName:"p"},"Priority"),", ",(0,s.kt)("strong",{parentName:"p"},"Testing Type"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For ",(0,s.kt)("strong",{parentName:"p"},"Values"),", enter a value for your key, for example ",(0,s.kt)("strong",{parentName:"p"},"High, Medium")," or ",(0,s.kt)("strong",{parentName:"p"},"Low")," for ",(0,s.kt)("strong",{parentName:"p"},"Priority")," key; ",(0,s.kt)("strong",{parentName:"p"},"API or Regression")," for ",(0,s.kt)("strong",{parentName:"p"},"Testing Type")," key. You can create multiple values for a key by selecting ",(0,s.kt)("strong",{parentName:"p"},"+ Add new value"),"."),(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-custom_fields-Create_.png",alt:"custom fields values"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Create"),"."))),(0,s.kt)("p",null,"Your custom field is created successfully."),(0,s.kt)("h2",{id:"edit-your-custom-fields"},"Edit your Custom Fields"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To edit your custom field, select the ",(0,s.kt)("strong",{parentName:"p"},"Edit")," button."),(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-Configurations-edit_custom_field.png",alt:"edit custom field button"}),(0,s.kt)("p",{parentName:"li"},"The Edit custom field dialog appears.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You can edit display name and values of your custom field, but not the key. When you finish editing, select ",(0,s.kt)("strong",{parentName:"p"},"Save Changes"),".",(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-Custom_Fields-Edit_custom_field.png",alt:"Edit custom field dialog"})))),(0,s.kt)("p",null,"Your custom field is updated and it will reflect in any test case, test run where it is assigned."),(0,s.kt)("h2",{id:"delete-your-custom-field"},"Delete your Custom Field"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To delete your custom field, click the ",(0,s.kt)("strong",{parentName:"p"},"Delete")," button."),(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-Configuration-delete_custom_field.png",alt:"delete custom field"}),"The delete custom field warning dialog appears."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Deleting a custom field will also remove it from any test entities such as test case, test run in your project. When you are sure, select ",(0,s.kt)("strong",{parentName:"p"},"Delete"),"."),(0,s.kt)("img",{src:"/doc_images/Documents/Organize/Custom_Field_and_Tags/images/TO-Configurations-delete_custom_field_dialog.png",alt:"delete custom field dialog"}))),(0,s.kt)("p",null,"Your custom field is deleted."))}p.isMDXComponent=!0}}]);