"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4467],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(a),s=r,g=u["".concat(m,".").concat(s)]||u[s]||c[s]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7400:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(2389);const l={},o="data tag",i={unversionedId:"manual/tag",id:"manual/tag",title:"data tag",description:"Luban supports record-level tag marking, and each data can have 0 or more tags. tag can be used to identify a record as a comment, either to filter the export, or to instruct the validator not to check this record.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/tag.md",sourceDirName:"manual",slug:"/manual/tag",permalink:"/en/docs/manual/tag",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"custom template",permalink:"/en/docs/manual/template"},next:{title:"localization",permalink:"/en/docs/manual/l10n"}},m={},d=[{value:"Format Introduction",id:"format-introduction",level:2},{value:"excel format",id:"excel-format",level:3},{value:"json format",id:"json-format",level:3},{value:"lua format",id:"lua-format",level:3},{value:"xml format",id:"xml-format",level:3},{value:"yaml format",id:"yaml-format",level:3},{value:"special tag name",id:"special-tag-name",level:2},{value:"Record filter export",id:"record-filter-export",level:2}],p={toc:d},u="wrapper";function c(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-tag"},"data tag"),(0,r.kt)("p",null,"Luban supports record-level tag marking, and each data can have 0 or more tags. tag can be used to identify a record as a comment, either to filter the export, or to instruct the validator not to check this record."),(0,r.kt)("h2",{id:"format-introduction"},"Format Introduction"),(0,r.kt)("p",null,"In different file formats, the way to fill in the record tag is similar, you can also refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/DesignerConfigs/Datas/tag_datas"},"luban_examples/DesignerConfigs/Data/tag_datas")," directory examples."),(0,r.kt)("h3",{id:"excel-format"},"excel format"),(0,r.kt)("p",null,"Fill in the tag in the first column of the record."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tag",src:a(7123).Z,width:"582",height:"326"})),(0,r.kt)("h3",{id:"json-format"},"json format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "__tag__": "dev",\n   "id": 1,\n   "name":"xxx"\n}\n')),(0,r.kt)("h3",{id:"lua-format"},"lua format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n   __tag__ = "dev",\n   id = 1,\n   name = "xxx",\n}\n')),(0,r.kt)("h3",{id:"xml-format"},"xml format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<data>\n   <__tag__>dev</__tag__>\n   <id>1</id>\n   <name>xxx</name>\n</data>\n")),(0,r.kt)("h3",{id:"yaml-format"},"yaml format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"__tag__ : dev\nid : 1\nname: xxx\n")),(0,r.kt)("h2",{id:"special-tag-name"},"special tag name"),(0,r.kt)("p",null,"There are some special tag names that are used for special meaning."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"##. Indicates that this record is annotated and will never be exported"),(0,r.kt)("li",{parentName:"ul"},"unchecked. Indicates that the validator does not check this record")),(0,r.kt)("h2",{id:"record-filter-export"},"Record filter export"),(0,r.kt)("p",null,"There are several occasions where filter export is used"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some records are only used for internal testing and do not want to be exported for official release"),(0,r.kt)("li",{parentName:"ul"},"Some records want different versions for testing and publishing"),(0,r.kt)("li",{parentName:"ul"},"Some simple multi-version management, such as a record is only exported in a certain version or branch")),(0,r.kt)("p",null,"Use the command line parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--includeTag")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--excludeTag")," to include or exclude the data of the specified tag. The following is an example of usage."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"##var"),(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"##type"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"##"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"desc1"),(0,r.kt)("td",{parentName:"tr",align:null},"comment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"item1"),(0,r.kt)("td",{parentName:"tr",align:null},"export forever")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"##"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"item2"),(0,r.kt)("td",{parentName:"tr",align:null},"never export")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"test"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"item4"),(0,r.kt)("td",{parentName:"tr",align:null},"--excludeTag do not export when testing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEST"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"item5"),(0,r.kt)("td",{parentName:"tr",align:null},"Do not export when --excludeTag test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"item6"),(0,r.kt)("td",{parentName:"tr",align:null},"--excludeTag dev does not export")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"item7"),(0,r.kt)("td",{parentName:"tr",align:null},"export forever")))))}c.isMDXComponent=!0},7123:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tag2-97dd5819722449854c1016c031d28572.jpg"}}]);