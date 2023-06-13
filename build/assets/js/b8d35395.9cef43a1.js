"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[34348],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=u(n),c=o,m=d["".concat(s,".").concat(c)]||d[c]||g[c]||l;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=c;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90811:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const l={id:"concept-35d21928-1ba3-47ef-8085-4b39bece649c",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio"},i="Installing plugin offline in Katalon Studio",r={unversionedId:"concept-35d21928-1ba3-47ef-8085-4b39bece649c",id:"concept-35d21928-1ba3-47ef-8085-4b39bece649c",title:"Installing plugin offline in Katalon Studio",description:"To leverage your testing experience, Katalon Store provides you with a library of plugins developed by Katalon and the Katalon community. The plugins are available on the Katalon Store. However, in some cases, you might want to:",source:"@site/docs/concept-35d21928-1ba3-47ef-8085-4b39bece649c.mdx",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio",permalink:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concept-35d21928-1ba3-47ef-8085-4b39bece649c.mdx",tags:[],version:"current",frontMatter:{id:"concept-35d21928-1ba3-47ef-8085-4b39bece649c",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio"},sidebar:"tutorialSidebar",previous:{title:"Install plugins online from the Katalon Store",permalink:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/install-plugins-online-from-the-katalon-store"},next:{title:"Create your first Katalon Studio plugin",permalink:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/create-your-first-katalon-studio-plugin"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"View types of plugins on the Katalon Store",id:"view-types-of-plugins-on-the-katalon-store",level:2},{value:"Download plugin packages from Katalon Store",id:"download-plugin-packages-from-katalon-store",level:2},{value:"Install plugins offline",id:"install-plugins-offline",level:2},{value:"Reload your plugins in Katalon Studio",id:"reload-your-plugins-in-katalon-studio",level:2}],p={toc:u},d="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-plugin-offline-in-katalon-studio"},"Installing plugin offline in Katalon Studio"),(0,o.kt)("p",null,"To leverage your testing experience, Katalon Store provides you with a library of plugins developed by Katalon and the Katalon community. The plugins are available on the ",(0,o.kt)("a",{parentName:"p",href:"https://store.katalon.com/"},"Katalon Store"),". However, in some cases, you might want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install and use all the plugins that are available on the Store without internet access."),(0,o.kt)("li",{parentName:"ul"},"Build your plugins and use them directly in Katalon Studio without publishing on the Store. See also: ",(0,o.kt)("a",{parentName:"li",href:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/private-plugins-in-katalon-studio"},"Private Plugins"),".")),(0,o.kt)("p",null,"Below is a step-by-step guide to installing plugins offline in Katalon Studio."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Katalon Studio version 7.0.0 onwards."),(0,o.kt)("li",{parentName:"ul"},"An active license for Katalon Studio Enterprise. See ",(0,o.kt)("a",{parentName:"li",href:"/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/license-overview"},"License overview"),".")),(0,o.kt)("h2",{id:"view-types-of-plugins-on-the-katalon-store"},"View types of plugins on the Katalon Store"),(0,o.kt)("p",null,"On ",(0,o.kt)("a",{parentName:"p",href:"https://store.katalon.com/"},"Katalon Store"),", select the plugin you want to install. In the ",(0,o.kt)("strong",{parentName:"p"},"Information")," section, check the type of that plugin. There are two types of plugins: ",(0,o.kt)("strong",{parentName:"p"},"Custom Keywords Plugin")," and ",(0,o.kt)("strong",{parentName:"p"},"Katalon Studio Plugin"),". ",(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/install-offline-plugin/KS-install-plugin-offline-plugin-type.png",alt:"Plugin Type"})),(0,o.kt)("h2",{id:"download-plugin-packages-from-katalon-store"},"Download plugin packages from Katalon Store"),(0,o.kt)("p",null,"As an exclusive feature in Katalon Studio Enterprise, you can download and use plugin packages. To download a package, follow the below steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On ",(0,o.kt)("strong",{parentName:"p"},"Katalon Store"),", click on the desired plugin to access its details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the detail page of the plugin, click on the ",(0,o.kt)("strong",{parentName:"p"},"Changelog")," link."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/user/Gettins%20Started%20Updated%20Images/K.S.E-8.3.0-getting_started_plugin_changelog.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can download the plugin packages with your preferred versions."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/user/Gettins%20Started%20Updated%20Images/K.S.E-8.3.0-getting_started_plugin_package_download.png"}))),(0,o.kt)("h2",{id:"install-plugins-offline"},"Install plugins offline"),(0,o.kt)("p",null,"To install plugins downloaded from Katalon Store or your private plugins that you developed yourselves, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move the plugin package ",(0,o.kt)("code",null,".jar")," file to the following folder:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Custom Keywords Plugin: ",(0,o.kt)("code",null,"<","project","_","name",">","/Plugins"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Katalon Studio Plugin: ",(0,o.kt)("code",null,"<","project","_","name",">","/Plugins/platform")),(0,o.kt)("img",{src:"/doc_images/Documents/Plugins_And_Add-ons/Katalon_Store/Katalon_Studio_Plugins/Install_Plugin_Offline/image/ks-plugin-folder.png",width:700})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your project in Katalon Studio and go to ",(0,o.kt)("strong",{parentName:"p"},"Project ",">"," Settings ",">"," Plugins"),". Select one of the following options to use plugins offline:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Katalon Store and Local"),": Katalon Studio installs plugins from the Store and the ",(0,o.kt)("strong",{parentName:"p"},"Plugins")," folder of each project. Make sure that you log in to Katalon Studio and Katalon Store with the same account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Local"),": Katalon Studio will install plugins from the ",(0,o.kt)("strong",{parentName:"p"},"Plugins")," folder only."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/install-offline-plugin/KS-install-plugin-offline-project%20settings.png",width:600,alt:"project settings"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply and Close"),"."))),(0,o.kt)("h2",{id:"reload-your-plugins-in-katalon-studio"},"Reload your plugins in Katalon Studio"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reload Plugins")," allows you to update a list of installed plugins in ",(0,o.kt)("strong",{parentName:"p"},"Katalon Studio"),", including newly installed plugins."),(0,o.kt)("p",null,"To reload plugins, click on the drop-down next to ",(0,o.kt)("strong",{parentName:"p"},"Profile")," and select ",(0,o.kt)("strong",{parentName:"p"},"Reload Plugins"),"."),(0,o.kt)("img",{src:"/doc_images/Documents/Plugins_And_Add-ons/Katalon_Store/Access_To_Katalon_Store_In_Katalon_Studio/image/ks-reload-plugins.png",width:300,alt:"reload plugins"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Plugins")," dialog appears with a list of installed plugins, the plugin version, the link to review that plugin in Katalon Store, and the reload plugin status to let you know if the installation has succeeded or failed."),(0,o.kt)("img",{src:"https://github.com/katalon-studio/docs-images/raw/master/katalon-store/docs/user/access-store-in-KS/reload-plugin-result.png",width:700}),(0,o.kt)("p",null,"After you reload plugins, newly installed plugins are automatically activated. If you install a Katalon Studio plugin, you can see the logo of the plugin you have installed in the main toolbar. Custom Keywords plugins do not have logos. For Custom Keywords plugins\u200b, you can find a list of custom keywords ready for use added to the ",(0,o.kt)("strong",{parentName:"p"},"Keyword Browsers"),"\u200b."))}g.isMDXComponent=!0}}]);