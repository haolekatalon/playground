"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[78112],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),g=p(n),k=i,u=g["".concat(l,".").concat(k)]||g[k]||c[k]||o;return n?a.createElement(u,r(r({ref:e},m),{},{components:n})):a.createElement(u,r({ref:e},m))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[g]="string"==typeof t?t:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6777:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"concept-2c77c9ed-56f0-42a5-b7b2-ccc35da8b56e",slug:"/administer/administration-tasks/organization-management/single-sign-on-configurations"},r="Single Sign-On Configurations",s={unversionedId:"concept-2c77c9ed-56f0-42a5-b7b2-ccc35da8b56e",id:"concept-2c77c9ed-56f0-42a5-b7b2-ccc35da8b56e",title:"Single Sign-On Configurations",description:"-   You need to subscribe to Katalon Platform Ultimate plan. See: TestOps Trial Plans.",source:"@site/docs/concept-2c77c9ed-56f0-42a5-b7b2-ccc35da8b56e.mdx",sourceDirName:".",slug:"/administer/administration-tasks/organization-management/single-sign-on-configurations",permalink:"/administer/administration-tasks/organization-management/single-sign-on-configurations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-2c77c9ed-56f0-42a5-b7b2-ccc35da8b56e.mdx",tags:[],version:"current",frontMatter:{id:"concept-2c77c9ed-56f0-42a5-b7b2-ccc35da8b56e",slug:"/administer/administration-tasks/organization-management/single-sign-on-configurations"},sidebar:"tutorialSidebar",previous:{title:"IP Address Restrictions",permalink:"/administer/administration-tasks/organization-management/ip-address-restrictions"},next:{title:"Configure Session Timeout",permalink:"/administer/administration-tasks/organization-management/configure-session-timeout"}},l={},p=[{value:"Configure an identity provider",id:"configure-an-identity-provider",level:2},{value:"Configure Single Sign-On",id:"configure-single-sign-on",level:2},{value:"Enable SSO for new members and existing members",id:"enable-sso-for-new-members-and-existing-members",level:2},{value:"For a new User",id:"for-a-new-user",level:3},{value:"For an existing User",id:"for-an-existing-user",level:3},{value:"View Pending SSO invitations",id:"view-pending-sso-invitations",level:2},{value:"Revoke pending SSO invitations",id:"revoke-pending-sso-invitations",level:2},{value:"For existing Users",id:"for-existing-users",level:3},{value:"For new Users",id:"for-new-users",level:3},{value:"Activate SSO in Katalon Studio",id:"activate-sso-in-katalon-studio",level:2},{value:"Enable SSO as a User",id:"enable-sso-as-a-user",level:2}],m={toc:p},g="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(g,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-sign-on-configurations"},"Single Sign-On Configurations"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You need to subscribe to Katalon Platform Ultimate plan. See: ",(0,i.kt)("a",{parentName:"li",href:"/administer/katalon-platform-packages/katalon-platform-plans"},"TestOps Trial Plans"),"."))),(0,i.kt)("h2",{id:"configure-an-identity-provider"},"Configure an identity provider"),(0,i.kt)("p",null,"To generate metadata for SSO configuration in Katalon TestOps, you need to set up an identity provider as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single sign-on SSO URL: ",(0,i.kt)("code",null,(0,i.kt)("a",{parentName:"li",href:"https://sso.katalon.io/saml/SSO"},"https://sso.katalon.io/saml/SSO"))),(0,i.kt)("li",{parentName:"ul"},"SP Entity ID: ",(0,i.kt)("code",null,"com:katalon:testops")),(0,i.kt)("li",{parentName:"ul"},"Attribute statement: ",(0,i.kt)("code",null,"Email"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The values for the above configurations are case-sensitive."))),(0,i.kt)("p",null,"Your metadata is then automatically encrypted in the Katalon database. To learn more about the identity provider, you can refer to this Okta document: ",(0,i.kt)("a",{parentName:"p",href:"https://help.okta.com/oie/en-us/Content/Topics/Security/Identity_Providers.htm"},"Identity Providers"),"."),(0,i.kt)("h2",{id:"configure-single-sign-on"},"Configure Single Sign-On"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must be an ",(0,i.kt)("strong",{parentName:"p"},"Owner")," or ",(0,i.kt)("strong",{parentName:"p"},"Admin")," of an Organization.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You have configured a Subdomain. See ",(0,i.kt)("a",{parentName:"p",href:"/administer/administration-tasks/organization-management/subdomain-configurations"},"Configure a Subdomain for an Organization"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You have configured an identity provider for SSO in Katalon TestOps, see above: ",(0,i.kt)("a",{parentName:"p",href:"/administer/administration-tasks/organization-management/single-sign-on-configurations#"},"Configure identity provider"),".")))),(0,i.kt)("p",null,"As an Owner or Admin, you can configure SSO by following these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign in to ",(0,i.kt)("a",{parentName:"p",href:"https://testops.katalon.io/login"},"Katalon TestOps"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Organization Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll down to the ",(0,i.kt)("strong",{parentName:"p"},"Single Sign-On ","(","SSO",")"," Settings")," section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch ",(0,i.kt)("strong",{parentName:"p"},"Enable SSO")," to ",(0,i.kt)("strong",{parentName:"p"},"Active"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the metadata from the configured identity provider."))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Update"),".")),(0,i.kt)("h2",{id:"enable-sso-for-new-members-and-existing-members"},"Enable SSO for new members and existing members"),(0,i.kt)("p",null,"After configuring SSO, you can enable SSO for new members when inviting them to your Organization."),(0,i.kt)("p",null,"You can also enable SSO for the existing members of your Organization. To learn more about user management in TestOps, refer to this guide: ",(0,i.kt)("a",{parentName:"p",href:"/administer/administration-tasks/user-management/manage-users"},"User Management"),"."),(0,i.kt)("h3",{id:"for-a-new-user"},"For a new User"),(0,i.kt)("p",null,"To enable SSO for a new User, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"User Management"),"."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"User Management")," page appears.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the top-right corner of the ",(0,i.kt)("strong",{parentName:"p"},"User Management")," page, click on the ",(0,i.kt)("strong",{parentName:"p"},"Invite User")," button."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-User-Management-Active-User.png",alt:"User Invitation Window"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the displayed ",(0,i.kt)("strong",{parentName:"p"},"User Invitation")," window, insert the new User's email address."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-User-Invitation-Window.png",alt:"User Invitation Window"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Login Settings")," section, toggle on the ",(0,i.kt)("strong",{parentName:"p"},"Log in to ","[","custom.katalon.io","]"," by Single Sign-On")," option."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-User-Management-Toggle-SSO.png",alt:"User Invitation Window"}),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You can choose to select or deselect both options.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," to continue the User invitation process as usual."))),(0,i.kt)("p",null,"Once the User invitation process is completed, an email is sent to the User asking them to join the Organization. After the User joins the Organization, they will receive a request email to enable SSO."),(0,i.kt)("h3",{id:"for-an-existing-user"},"For an existing User"),(0,i.kt)("p",null,"To enable SSO for an existing User, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"User Management"),"."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"User Management")," page appears.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Active Users")," tab, nagivate to a User's row, click on the ",(0,i.kt)("em",{parentName:"p"},"more options")," icon, and select ",(0,i.kt)("strong",{parentName:"p"},"Edit Login Options"),"."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-User-Management-Active-Users-tab-more-options.png",alt:"More options icon"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the new ",(0,i.kt)("strong",{parentName:"p"},"Login Settings")," pop-up, toggle on the ",(0,i.kt)("strong",{parentName:"p"},"Log in to ","[","custom.katalon.io","]"," by Single Sign-On")," option."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-Log-Settings-Username_Password-enabled.png",width:500,alt:"SSO toggle turned on"}),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You can choose to select or deselect both options."))),(0,i.kt)("p",{parentName:"li"},"If the selected User already has a pending SSO invitation, the pop-up will display the invitation link. You can copy this link to send to the User."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-Login-Settings-Pending-Invitation-Link.png",width:500,alt:"SSO toggle turned on"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save")," to complete the configuration."),(0,i.kt)("p",{parentName:"li"},"A request email is then sent to the selected User."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Users must join the Organization to log in to the custom domain by either SSO or username and password."))),(0,i.kt)("h2",{id:"view-pending-sso-invitations"},"View Pending SSO invitations"),(0,i.kt)("p",null,"To view the pending invitations and SSO requests, in the ",(0,i.kt)("strong",{parentName:"p"},"User Management")," page, switch to the ",(0,i.kt)("strong",{parentName:"p"},"Pending Invitation")," tab."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-Pending-Invitations.png",alt:"SSO toggle turned on"}),(0,i.kt)("p",null,"Users with pending SSO invitations are tagged with the ",(0,i.kt)("em",{parentName:"p"},"SSO")," icon."),(0,i.kt)("h2",{id:"revoke-pending-sso-invitations"},"Revoke pending SSO invitations"),(0,i.kt)("p",null,"As an Owner or Admin, you can revoke pending SSO invitations."),(0,i.kt)("h3",{id:"for-existing-users"},"For existing Users"),(0,i.kt)("p",null,"To revoke pending SSO invitation for Users who join the Organization, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"User Management")," page, switch to the ",(0,i.kt)("strong",{parentName:"p"},"Active Users")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Active Users")," tab, nagivate to the desired User's row, click on the ",(0,i.kt)("em",{parentName:"p"},"more options")," icon, and select ",(0,i.kt)("strong",{parentName:"p"},"Edit Login Options"),"."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-User-Management-Active-Users-tab-more-options.png",alt:"More options icon"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the new ",(0,i.kt)("strong",{parentName:"p"},"Login Settings")," pop-up, toggle off the ",(0,i.kt)("strong",{parentName:"p"},"Log in to ","[","custom.katalon.io","]"," by Single Sign-On")," option."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-Log-Settings-Username_Password-enabled.png",width:500,alt:"SSO toggle turned on"}))),(0,i.kt)("h3",{id:"for-new-users"},"For new Users"),(0,i.kt)("p",null,"To revoke pending SSO invitations for Users who have not joined the Organization, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"User Management")," page, switch to the ",(0,i.kt)("strong",{parentName:"p"},"Pending Invitation")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Users with SSO invitations that you want to revoke, then click on the ",(0,i.kt)("strong",{parentName:"p"},"Revoke SSO")," button."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-Revoke-SSO-button.png",alt:"SSO toggle turned on"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Revoke Single Sign-On Invitation")," pop-up, verify the list of selected Users and click on the ",(0,i.kt)("strong",{parentName:"p"},"Revoke SSO")," button."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-SSO-Revoke-Popup.png",alt:"Revoke SSO pop-up"}))),(0,i.kt)("p",null,"The SSO invitation links sent to the selected Users will be revoked."),(0,i.kt)("h2",{id:"activate-sso-in-katalon-studio"},"Activate SSO in Katalon Studio"),(0,i.kt)("p",null,"After configuring SSO in Katalon TestOps, you must reactivate Katalon Studio to enable SSO."),(0,i.kt)("p",null,"Follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Katalon Studio.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("em",{parentName:"p"},"Profile")," icon at the top right corner, and select ",(0,i.kt)("strong",{parentName:"p"},"Deactivate"),"."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Katalon Studio Activation")," box appears as below."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/activate-sso-in-studio.png",alt:"ks activation box"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the required information."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Server URL"),": enter the Subdomain you have configured ","(","e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://techwrite.katalon.io%5C"},"https://techwrite.katalon.io\\"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Email"),": enter your registered Katalon account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Password"),": enter an API key generated in Katalon TestOps. See: ",(0,i.kt)("a",{parentName:"p",href:"/administer/settings/katalon-api-key-in-katalon-testops"},"API Keys"),"."))))),(0,i.kt)("h2",{id:"enable-sso-as-a-user"},"Enable SSO as a User"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"If you are a new User, you must first accept the invitation to join an Organization. Then you will receive the SSO request email."))),(0,i.kt)("p",null,"To enable SSO, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to your email and find the ",(0,i.kt)("em",{parentName:"p"},"[","Katalon TestOps","]"," Verify Single Sign-On ","(","SSO",")"," authentication")," email, then click ",(0,i.kt)("strong",{parentName:"p"},"Click here to confirm")," in the email."),(0,i.kt)("p",{parentName:"li"},"You will be directed to Katalon TestOps and see the below message."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/K1-Accept-SSO-request.png",alt:"user accept sso"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the information, then click ",(0,i.kt)("strong",{parentName:"p"},"Yes, enable SSO")," to confirm."),(0,i.kt)("p",{parentName:"li"},"After accepting the SSO request, you are automatically navigated to the Subdomain."),(0,i.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-analytics/docs/testops-revamp-july-sso-settings/subdomain-signin-using-sso-blurred.png",alt:"subdomain sign in using SSO"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Sign in using SSO"),"."))))}c.isMDXComponent=!0}}]);