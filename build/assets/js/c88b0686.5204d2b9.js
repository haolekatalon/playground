"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[90068],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var s=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,s,o=function(t,e){if(null==t)return{};var a,s,o={},n=Object.keys(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=s.createContext({}),p=function(t){var e=s.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return s.createElement(l.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=p(a),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||n;return a?s.createElement(k,i(i({ref:e},d),{},{components:a})):s.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,i=new Array(n);i[0]=m;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r[c]="string"==typeof t?t:o,i[1]=r;for(var p=2;p<n;p++)i[p]=a[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51379:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var s=a(87462),o=(a(67294),a(3905));const n={author:"Trinh Huynh <trinh.huynh@katalon.com>",id:"concept-a384a3a8-331f-4629-b495-f15d1cbed918",slug:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/edit-draft-test-case"},i="Edit draft test case",r={unversionedId:"concept-a384a3a8-331f-4629-b495-f15d1cbed918",id:"concept-a384a3a8-331f-4629-b495-f15d1cbed918",title:"Edit draft test case",description:"The following guidance shows you how to edit a draft test case in Katalon Cloud Studio \\(Beta\\).",source:"@site/docs/concept-a384a3a8-331f-4629-b495-f15d1cbed918.mdx",sourceDirName:".",slug:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/edit-draft-test-case",permalink:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/edit-draft-test-case",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-a384a3a8-331f-4629-b495-f15d1cbed918.mdx",tags:[],version:"current",frontMatter:{author:"Trinh Huynh <trinh.huynh@katalon.com>",id:"concept-a384a3a8-331f-4629-b495-f15d1cbed918",slug:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/edit-draft-test-case"},sidebar:"tutorialSidebar",previous:{title:"Supported actions",permalink:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/supported-actions"},next:{title:"Run a draft test case",permalink:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/run-a-draft-test-case"}},l={},p=[{value:"Edit test case description",id:"edit-test-case-description",level:2},{value:"Add a new test step",id:"add-a-new-test-step",level:2},{value:"Move test steps via drag and drop",id:"move-test-steps-via-drag-and-drop",level:2},{value:"Duplicate a test step",id:"duplicate-a-test-step",level:2},{value:"Bulk-duplicate test steps",id:"bulk-duplicate-test-steps",level:2},{value:"Delete a test step",id:"delete-a-test-step",level:2},{value:"Bulk-delete test steps",id:"bulk-delete-test-steps",level:2}],d={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,s.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"edit-draft-test-case"},"Edit draft test case"),(0,o.kt)("p",null,"The following guidance shows you how to edit a draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("h2",{id:"edit-test-case-description"},"Edit test case description"),(0,o.kt)("p",null,"Learn how to edit the description of a draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hover and click the ",(0,o.kt)("strong",{parentName:"p"},"Description")," field to change the field in Edit mode, and update your draft test case description.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Edit_test_case_description.png",width:700,alt:"Edit draft test case description."}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save")," to save the description."),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Save_test_case_description.png",width:500,alt:"Save edited description of draft test case."}))),(0,o.kt)("p",null,"Your test case description is now updated."),(0,o.kt)("h2",{id:"add-a-new-test-step"},"Add a new test step"),(0,o.kt)("p",null,"Learn how to add test step/s on your draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("p",null,"There are several ways to duplicate a test step in a draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are creating a new Katalon Cloud Studio ","(","Beta",")"," test case, you can simply follow the steps in the topic ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/create-a-draft-test-case"},"Create a draft test case")," and start with the next step ","("," Step 2",")","."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can add test step/s the following ways:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"+ Add New Test Step")," at the bottom of the test steps list and select any of the ",(0,o.kt)("a",{parentName:"p",href:"/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/supported-actions"},"Supported actions")," you wish to add as a new test step. ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/click_add_new_test_step_button.png",width:700,alt:"Click + Add New Test Step button to add new test step."})," ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/select_supported_actions.png",width:700,alt:"Select supported action for your new test step."}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Plus ","(","+",")")," icon to add a new test step in between test steps. ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Add_test_step_in_between_steps.png",width:700,alt:"Add a new test step in between steps."}))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save")," to save your changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repeat Step 2 until you have added all of your test steps."))),(0,o.kt)("p",null,"Your test steps have been added to your test case."),(0,o.kt)("h2",{id:"move-test-steps-via-drag-and-drop"},"Move test steps via drag and drop"),(0,o.kt)("p",null,"Learn how to move and organize test steps in a draft test case using drag and drop in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To activate this action, hover on the selected test step to make the Drag icon appear.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Editor view, hover on the test step you wish to move and drag and drop it to your desired position from the list of test steps.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Move_test_steps_via_drag_and_drop.gif",width:700,alt:"Drag and drop to move test steps."})),(0,o.kt)("p",{parentName:"li"},"Any change using this action is automatically saved. We recommend performing a test run to validate the change."))),(0,o.kt)("p",null,"You have successfully moved/organized the test step/s for your draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("h2",{id:"duplicate-a-test-step"},"Duplicate a test step"),(0,o.kt)("p",null,"Learn how to duplicate a test step of your draft test case in Katalon Cloud Studio ","(","Beta",")",".."),(0,o.kt)("p",null,"There are several ways to duplicate a test step in a draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To activate inline and toolbar actions, hover on the selected test step.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can duplicate a test step the following ways:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Editor view, hover along the test step to the right till you see the ",(0,o.kt)("strong",{parentName:"p"},"Duplicate")," icon. Click the ",(0,o.kt)("strong",{parentName:"p"},"Duplicate")," icon to duplicate the test step: ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/duplicate_test_step_inline.png",width:700,alt:"Click inline menu - Duplicate selected test step."}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can also right-click on a test step and click the ",(0,o.kt)("strong",{parentName:"p"},"Duplicate")," icon as shown below: ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/right_click_duplicate_test_step.png",width:700,alt:"Right-click to duplicate selected test step."}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Another option is to click the checkbox corresponding to the test step, and click the ",(0,o.kt)("strong",{parentName:"p"},"Duplicate")," icon just above the test steps.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/duplicate_test_step_menu.png",width:700,alt:"Use context toolbar to duplicate selected test step."})))))),(0,o.kt)("p",null,"You have successfully duplicated a test step in your draft test case."),(0,o.kt)("h2",{id:"bulk-duplicate-test-steps"},"Bulk-duplicate test steps"),(0,o.kt)("p",null,"Learn how to bulk-duplicate test steps of a Katalon Cloud Studio ","(","Beta",")"," test case."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To activate inline and toolbar actions, hover on the selected test step.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Editor view, click the checkboxes associated to the test steps. You can also use the Shift + Arrow Down or Up keys on your keyboard to select the test steps.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can bulk duplicate test steps the following ways:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Duplicate")," icon on the toolbar.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/bulk_duplicate_test_steps.png"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Right-click and select ",(0,o.kt)("strong",{parentName:"p"},"Duplicate all test steps"),".",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Duplicate_selected_test_steps.png"})))))),(0,o.kt)("p",null,"The selected test steps of your Katalon Cloud Studio ","(","Beta",")"," test case have been duplicated. The duplicated test steps are then placed just below the last step duplicated, and in order: ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/duplicated_test_steps.png"})),(0,o.kt)("h2",{id:"delete-a-test-step"},"Delete a test step"),(0,o.kt)("p",null,"Learn how to delete a test step in a draft test case in Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("p",null,"There are two ways to delete a test step in a draft test case in There are several ways to duplicate a test step in a draft test case in Katalon Cloud Studio ","(","Beta",")","Katalon Cloud Studio ","(","Beta",")","."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To activate inline and toolbar actions, hover on the selected test step.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can delete a test step the following ways, as shown in this demo: ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Delete_a_test_step.gif",width:700,alt:"Delete test step using inline actions."})),(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Delete_test_step_icon.png",width:700}),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Editor view, hover on the test step till you see the ",(0,o.kt)("strong",{parentName:"p"},"Delete")," icon on the right. Click the ",(0,o.kt)("strong",{parentName:"p"},"Delete")," icon to delete the test step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can also right-click on a test step and click ",(0,o.kt)("strong",{parentName:"p"},"Delete"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You hover and check the checkbox associated to the selected test step and click the ",(0,o.kt)("strong",{parentName:"p"},"Delete")," icon as shown in this example below: ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/delete_test_step_toolbar.png",width:700,alt:"Delete test step using toolbar."}))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can also right-click on a test step and click ",(0,o.kt)("strong",{parentName:"p"},"Delete")," as shown in another example below:",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/right_click_delete.gif"})))),(0,o.kt)("p",null,"The selected test step of your draft test case have been deleted."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can undo and recover a deleted test step by clicking Undo on the toast notification.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/undo_delete_test_step.png",width:700,alt:"Undo deleted test step."}))),(0,o.kt)("h2",{id:"bulk-delete-test-steps"},"Bulk-delete test steps"),(0,o.kt)("p",null,"Learn how to bulk-delete multiple test steps in a Katalon Cloud Studio ","(","Beta",")"," test case."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Project home screen, go to ",(0,o.kt)("strong",{parentName:"p"},"Tests")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Test Cases")," and select the draft test case you wish to edit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Editor view, click the checkboxes associated to the test steps. You can also use the Shift + Arrow Down or Up keys on your keyboard to select the test steps.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can bulk delete test steps the following ways:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Delete")," icon on the toolbar. ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Bulk_delete_test_steps_toolbar.png"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Right-click and select ",(0,o.kt)("strong",{parentName:"p"},"Delete all test steps"),". ",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/Bulk_delete_test_steps_right_click.png"})))))),(0,o.kt)("p",null,"The selected test steps of your draft test case have been deleted."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can undo and recover a deleted test step by clicking Undo on the toast notification.",(0,o.kt)("img",{src:"/doc_images/Documents/Create_tests/Cloud_Studio/Images/undo_delete_test_step.png",width:700,alt:"Undo deleted test step."}))))}u.isMDXComponent=!0}}]);