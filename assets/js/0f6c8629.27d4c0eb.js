"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3461],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>o});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=n.createContext({}),u=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},k=function(t){var a=u(t.components);return n.createElement(i.Provider,{value:a},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),d=u(e),N=l,o=d["".concat(i,".").concat(N)]||d[N]||g[N]||r;return e?n.createElement(o,p(p({ref:a},k),{},{components:e})):n.createElement(o,p({ref:a},k))}));function o(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=N;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=t,m[d]="string"==typeof t?t:l,p[1]=m;for(var u=2;u<r;u++)p[u]=e[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},913:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var n=e(7462),l=(e(7294),e(3905));const r={},p="schema \u903b\u8f91\u7ed3\u6784",m={unversionedId:"manual/schema",id:"manual/schema",title:"schema \u903b\u8f91\u7ed3\u6784",description:"\u5728\u8bbe\u8ba1\u54f2\u5b66\u6587\u6863\u5df2\u7ecf\u4ecb\u7ecd\u4e86\uff0cLuban\u7684\u6838\u5fc3\u4e3a\u5b8c\u5907\u7684\u7c7b\u578b\u7cfb\u7edf\uff0c\u800cDPP\u7ba1\u7ebf\u5219\u662f\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\u7684\u57fa\u7840\u3002",source:"@site/docs/manual/schema.md",sourceDirName:"manual",slug:"/manual/schema",permalink:"/docs/manual/schema",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7279\u6027",permalink:"/docs/manual/traits"},next:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/docs/manual/commandtools"}},i={},u=[{value:"\u5168\u5c40\u914d\u7f6e",id:"\u5168\u5c40\u914d\u7f6e",level:2},{value:"group",id:"group",level:3},{value:"target",id:"target",level:3},{value:"\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"enum",id:"enum",level:3},{value:"bean",id:"bean",level:3},{value:"table",id:"table",level:2},{value:"\u516c\u5171\u5c5e\u6027",id:"\u516c\u5171\u5c5e\u6027",level:2},{value:"groups",id:"groups",level:3},{value:"tags",id:"tags",level:3},{value:"typeMapper",id:"typemapper",level:3}],k={toc:u},d="wrapper";function g(t){let{components:a,...e}=t;return(0,l.kt)(d,(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"schema-\u903b\u8f91\u7ed3\u6784"},"schema \u903b\u8f91\u7ed3\u6784"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"./architecture"},"\u8bbe\u8ba1\u54f2\u5b66"),"\u6587\u6863\u5df2\u7ecf\u4ecb\u7ecd\u4e86\uff0cLuban\u7684\u6838\u5fc3\u4e3a\u5b8c\u5907\u7684\u7c7b\u578b\u7cfb\u7edf\uff0c\u800cDPP\u7ba1\u7ebf\u5219\u662f\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\u7684\u57fa\u7840\u3002\n\u4e0d\u540c\u4e8e\u65e7\u7248\u672cLuban\u57fa\u672c\u56fa\u5b9a\u4e86\u914d\u7f6e\u8868\u7684\u5b9a\u4e49\u683c\u5f0f\uff0c\u65b0\u7248\u672c\u7684\u5b9a\u4e49\u662f\u72ec\u7acb\u7684\uff0c\u4e0d\u518d\u4e0e\u5177\u4f53\u7684\u5b9a\u4e49\u683c\u5f0f\u7ed1\u5b9a\u3002\u5c3d\u7ba1\u63d0\u4f9b\u7684\u9ed8\u8ba4\nschema\u6536\u96c6\u548c\u52a0\u8f7d\u5668\u4ecd\u7136\u5904\u7406\u4e0e\u65e7\u7248\u672cLuban\u7c7b\u4f3c\u7684\u5b9a\u4e49\u683c\u5f0f\uff0c\u4f46\u5f00\u53d1\u8005\u53ef\u4ee5\u5b8c\u5168\u81ea\u5b9a\u4e49\u683c\u5f0f\u4ee5\u6ee1\u8db3\u5b9e\u9645\u9879\u76ee\u7684\u4e60\u60ef\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4e2d\u53ea\u4ecb\u7ecdschema\u7684\u903b\u8f91\u7ed3\u6784\uff0c\u5177\u4f53\u7684\u5b9a\u4e49\u683c\u5f0f\u5219\u7531schema\u6536\u96c6\u548c\u52a0\u8f7d\u5668\u51b3\u5b9a\uff0c\u5728",(0,l.kt)("a",{parentName:"p",href:"./schema"},"\u914d\u7f6e\u5b9a\u4e49"),"\u4e2d\u4ecb\u7ecd\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u7531\u4e8eschema\u7684\u903b\u8f91\u7ed3\u6784\u4e0e\u5b9e\u73b0\u5206\u4eab\u3002\u903b\u8f91\u7ed3\u6784\u5b9a\u4e49\u4e0e\u5b9e\u73b0\u4e2d\u7684\u5b9a\u4e49\u4e0d\u4e00\u5b9a\u4e00\u81f4\uff0c\u7531\u5177\u4f53\u5b9e\u73b0\u5c06\u5b83\u63a5\u53d7\u7684\u5b9a\u4e49\u683c\u5f0f\u8f6c\u6210\u6700\u7ec8\u7684\u903b\u8f91\u7ed3\u6784\u5bf9\u5e94\u7684\u5b9a\u4e49\u3002\n\u5982xml\u4e2d\u6709module\u7684\u6982\u5ff5\uff0c\u800cschema\u903b\u8f91\u7ed3\u6784\u4e2d\u6bcf\u4e2a\u7c7b\u578b\u6709namespace\uff0c\u4f46\u6ca1\u6709\u5355\u72ec\u7684module\u7ed3\u6784\u3002\u53e6\u5916\u903b\u8f91\u7ed3\u6784\u4e2d\u7684\u5b57\u6bb5\u540d\u4e0e\u5b9e\u73b0\u4e2d\u7684\u5b57\u6bb5\u540d\u4e0d\u4e00\u5b9a\u76f8\u540c\u3002")),(0,l.kt)("h2",{id:"\u5168\u5c40\u914d\u7f6e"},"\u5168\u5c40\u914d\u7f6e"),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e86\u7c7b\u578b\u7cfb\u7edf\u6216\u8005\u751f\u6210\u4f9d\u8d56\u7684\u5168\u5c40\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"group"},"group"),(0,l.kt)("p",null,"group\u5b9a\u4e49\u4e86\u914d\u7f6e\u5185\u53ef\u7528\u7684\u5206\u7ec4\u3002\u5b9e\u8df5\u4e2d\u524d\u540e\u7aef\u9700\u8981\u7684\u6570\u636e\u8868\u548c\u8868\u5185\u5b57\u6bb5\u7ecf\u5e38\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u8fd9\u79cd\u6839\u636e\u8f93\u51fa\u76ee\u6807\u5bf9\u8f93\u51fa\u5185\u5bb9\u7684\u5206\u7c7b\uff0c\u5bf9\u5e94luban\u5185\u7684\u6982\u5ff5\u4e3agroup\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3atable\u7684\u9ed8\u8ba4\u5bfc\u51fa\u76ee\u6807\uff0c\u5373\u5982\u679ctable\u7684group\u4e3a\u7a7a\uff0c\u81ea\u52a8\u5c5e\u4e8e\u6b64\u5206\u7ec4")))),(0,l.kt)("p",null,"group\u7684name\u5b57\u6bb5\u53ef\u4ee5\u4e3a\u4efb\u610f\u503c\uff0c\u4f46\u4e0d\u8981\u91cd\u590d\u51fa\u73b0\u3002\u53d6client\u8fd9\u6837\u7684name\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u5b9e\u8df5\u4e3a\u4e86\u65b9\u4fbf\u586b\u5199\uff0c\u4e00\u822c\u662fc\u3001s\u8fd9\u6837\u7684\u7b80\u5355\u7684\u5355\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"group\u7684default\u5b57\u6bb5\u5bf9\u4e8eenum\u3001bean\u53cafield\uff08bean\u7684\u6210\u5458\u5b57\u6bb5\uff09\u4e0d\u751f\u6548\u3002"),(0,l.kt)("p",null,"Luban\u7684\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u4f1a\u4ece\u5bfc\u51fatable\u51fa\u53d1\uff0c\u9012\u5f52\u6536\u96c6\u6240\u6709\u76f8\u5173\u7684enum\u53cabean\u5b9a\u4e49\u3002\n\u5f53enum\u548cbean\u7684group\u4e3a\u7a7a\u65f6\uff0c\u53ea\u6709\u88ab\u5bfc\u51fa\u8868\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5f15\u7528\uff0c\u624d\u4f1a\u6807\u8bb0\u5b83\u4eec\u4e3a\u5bfc\u51fa\u7c7b\u578b\uff0c\u4e3a\u4ed6\u4eec\u751f\u6210\u4ee3\u7801\u3002\u5982\u679c\u624b\u52a8\u8bbe\u7f6e\u4e86\u5b83\u4eec\u7684group\uff0c\u4e0d\u5c5e\u4e8e\u5f53\u524d\n\u5bfc\u51fa\u76ee\u6807\uff0c\u4f46\u5b83\u4eec\u88ab\u5bfc\u51fa\u8868\u95f4\u63a5\u5f15\u7528\u65f6\uff0c\u4f1a\u5ffd\u7565group\u800c\u5f3a\u884c\u5bfc\u51fa\u3002"),(0,l.kt)("p",null,"\u5982\u679cfield\u7684group\u4e3a\u7a7a\uff0c\u5219\u9ed8\u8ba4\u5c5e\u4e8e\u6240\u6709\u5206\u7ec4\uff0c\u4e0d\u53ef\u914d\u7f6e\u3002\u8fd9\u662f\u56e0\u4e3a\u5927\u591a\u6570field\u4f1a\u5c5e\u4e8e\u6240\u6709\u5206\u7ec4\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9field\u7684\ngroup\u90fd\u4e3a\u7a7a\u5c31\u80fd\u8868\u793a\u5bfc\u51fa\u7ed9\u6240\u6709\u76ee\u6807\uff0c\u800c\u4e0d\u662f\u5570\u55e6\u5730\u8bbe\u7f6e\u5b83\u7684\u5206\u7ec4\u4e3a\u6240\u6709\u5206\u7ec4\u3002"),(0,l.kt)("p",null,"group\u6709\u591a\u4e2a\uff0c\u4e00\u822c\u9879\u76ee\u81f3\u5c11\u5305\u542bc\uff08\u5373client\uff09\u548cs\uff08\u5373server\uff09\u5206\u7ec4\u3002\u5982\u679c\u9879\u76ee\u6709\u81ea\u5b9a\u4e49\u914d\u7f6e\u7f16\u8f91\u5668\uff0c\u4e00\u822c\u8fd8\u4f1a\u6709\u4e00\u4e2a\u989d\u5916\u7684\u76ee\u6807e\uff08\u5373editor\uff09\u3002\ngroup\u7684\u4e2a\u6570\u548c\u547d\u540d\u6ca1\u6709\u9650\u5236\uff0c\u53ea\u4e0d\u8fc7\u7ea6\u5b9a\u4fd7\u6210\u4f1a\u8fd9\u4e48\u8bbe\u8ba1\u3002"),(0,l.kt)("h3",{id:"target"},"target"),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e86\u5bfc\u51fa\u76ee\u6807\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u5bf9\u4e8e\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u5668\u7684\u5bfc\u51fa\uff0c\u9700\u8981\u4e00\u4e9b\u72ec\u6709\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5bf9\u5e94luban\u7684\u6982\u5ff5\u4e3atarget\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u76ee\u6807\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manager"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684\u7ba1\u7406\u6240\u6709\u5bfc\u51faTable\u7684\u7ba1\u7406\u7c7b\u7684\u540d\u79f0\uff0c\u4e00\u822c\u53d6Tables")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u8f93\u51fa\u76ee\u6807\u5305\u542b\u54ea\u4e9b\u5206\u7ec4\uff0c\u53ef\u4ee5\u4e3a1\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topModule"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u989d\u5916\u7684\u9876\u5c42\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4e3a\u7a7a\u3002\u5f53\u4f60\u60f3\u8ba9\u751f\u6210\u7684\u6240\u6709\u914d\u7f6e\u4ee3\u7801\u90fd\u5728cfg\u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u4e0d\u9700\u8981\u7ed9\u6bcf\u4e2aenum\u3001bean\u3001table\u4e4b\u7c7b\u7684\u547d\u540d\u7a7a\u95f4\u90fd\u52a0\u4e0acfg\u524d\u7f00\uff0c\u8ba9topModule\u4e3acfg\u5373\u53ef")))),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b"},"\u81ea\u5b9a\u4e49\u7c7b\u578b"),(0,l.kt)("h3",{id:"enum"},"enum"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFlags"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u6807\u5fd7\u4f4d\u7c7b\u578b\uff0c\u5bf9\u5e94c#\u7684FlagsAttribute\u8bed\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isUniqueItemId"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u503c\u662f\u5426\u552f\u4e00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"map,string,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49tag\u5bf9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u5206\u7ec4\uff0c\u53ef\u4ee5\u4e3a0\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"items"),(0,l.kt)("td",{parentName:"tr",align:null},"list,EnumItem"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u9879\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"typeMappers"),(0,l.kt)("td",{parentName:"tr",align:null},"list,TypeMapper"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u7c7b\u578b\u6620\u5c04\u76f8\u5173\u914d\u7f6e")))),(0,l.kt)("p",null,"groups\u3001tags\u3001typeMappers\u8bf7\u9605\u8bfb\u516c\u5171\u5c5e\u6027\u5c0f\u8282\u4e2d\u7684\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,l.kt)("p",null,"EnumItem\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u9879\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alias"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u522b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"map,string,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49tag\u5bf9")))),(0,l.kt)("p",null,"value\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u81ea\u52a8\u4ece\u4e0a\u4e00\u4e2a\u679a\u4e3e\u9879\u503c\u5f00\u59cb\u9012\u589e\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u4e2a\u679a\u4e3e\u503c\uff0c\u5219\u503c\u53d60\u3002value\u53ef\u4ee5\u4e3a10\u8fdb\u5236\u6574\u6570\u6216\u80050x10\u4e4b\u7c7b\u768416\u8fdb\u5236\u6574\u6570\u3002\nvalue\u4e5f\u53ef\u4ee5\u662f\u5176\u4ed6\u679a\u4e3e\u503c\u7684\u6216\u7ec4\u5408\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"A|B"),"\u3002"),(0,l.kt)("h3",{id:"bean"},"bean"),(0,l.kt)("p",null,"\u7528\u4e8e\u5b9a\u4e49\u590d\u5408\u7ed3\u6784\uff0c\u5bf9\u5e94\u4e8eC#\u91cc\u7684class\u6216struct\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u7c7b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isValueType"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u503c\u7c7b\u578b\uff0c\u4f8b\u5982\u4e3ac#\u8fd9\u79cd\u652f\u6301\u503c\u7c7b\u578b\u7684\u8bed\u8a00\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u751f\u6210struct\u800c\u4e0d\u662fclass\u7c7b\u578b\uff0c\u5bf9\u4e8ejava\u8fd9\u79cd\u8bed\u8a00\u6ca1\u6709\u6548\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"map,string,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49tag\u5bf9\uff0c\u53ef\u4ee50\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alias"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u522b\u540d\uff0c\u4e3b\u8981\u7528\u4e8e\u82f1\u6587\u4e0d\u597d\u7684\u7b56\u5212\u586b\u5199\u591a\u6001\u540d\uff0c\u5982Circle\u7c7b\u4e5f\u80fd\u586b'\u5706'\u6765\u8868\u8fbe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sep"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5b57\u6bb5\u5206\u5272\u7b26\uff0c\u7528\u4e8eexcel\u4e2d\u7d27\u51d1\u5730\u586b\u5199\u590d\u5408\u7ed3\u6784\uff0c\u5982\u5728\u4e00\u4e2a\u5355\u5143\u683c\u5185",(0,l.kt)("inlineCode",{parentName:"td"},"1,2,3"),"\u8868\u8fbe\u4e00\u4e2avector3\u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u5f3a\u884c\u5360\u636e\u591a\u4e2a\u5355\u5143\u683c\u3002sep\u53ef\u4ee5\u662f\u591a\u4e2a\u5b57\u7b26\uff0c\u8868\u793a\u7528sep\u4e2d\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26\u5206\u5272\uff0c\u800c\u4e0d\u662f\u6574\u4e2asep\u4f5c\u4e3a\u5206\u5272\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u5206\u7ec4\uff0c\u53ef\u4ee5\u4e3a0\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"list,Field"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"typeMappers"),(0,l.kt)("td",{parentName:"tr",align:null},"list,TypeMapper"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u7c7b\u578b\u6620\u5c04\u76f8\u5173\u914d\u7f6e")))),(0,l.kt)("p",null,"groups\u3001tags\u3001typeMappers\u8bf7\u9605\u8bfb\u516c\u5171\u5c5e\u6027\u5c0f\u8282\u4e2d\u7684\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"bean\u652f\u6301\u7ee7\u627f\u548c\u591a\u6001"),"\u3002\u5982\u679cparent\u5b57\u6bb5\u4e3a\u975e\u7a7a\uff0c\u5219\u8868\u793a\u7ee7\u627f\u8be5\u7236\u7c7b\u7684\u5b57\u6bb5\u3002\u5982\u679cparent\u4e0d\u5305\u542b\u547d\u540d\u7a7a\u95f4\uff0c\u4f1a\u4ecebean\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u5185\u67e5\u627e\u8be5\u7c7b\u578b\uff0c\u5426\u5219\u5168\u5c40\u67e5\u627e\u3002\n\u6240\u6709\u8865\u7ee7\u627f\u7684bean\u90fd\u662f\u62bd\u8c61\u7c7b\uff0c\u4e0d\u53ef\u5b9e\u4f8b\u5316\u3002\u7c7b\u578b\u7cfb\u7edf\u4e2d\u5141\u8bb8\u4f7f\u7528\u62bd\u8c61bean\u4e3a\u7c7b\u578b\uff0c\u4f46\u57f4\u5199\u6570\u636e\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528\u67d0\u4e2a\u5b50\u7c7b\u53bb\u5b9e\u4f8b\u5316\u5b83\u3002\n\u8fd9\u79cd\u591a\u6001\u7279\u6027\u4f7f\u5f97luban\u5177\u5907\u8868\u8fbe\u4efb\u610f\u590d\u6742\u6570\u636e\u7ed3\u6784\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"Field\u7684\u5373bean\u7684\u6210\u5458\u5b57\u6bb5\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b\uff0c\u8be6\u89c1",(0,l.kt)("a",{parentName:"td",href:"./types"},"\u7c7b\u578b\u7cfb\u7edf"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"map,string,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49tag\u5bf9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NotNameValidation"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u68c0\u67e5\u5b57\u6bb5\u540d\u5408\u6cd5\u6027")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4")))),(0,l.kt)("p",null,"groups\u8be6\u7ec6\u8bf4\u660e\u8bf7\u9605\u8bfb\u516c\u5171\u5c5e\u6027\u5c0f\u8282\u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"table"},"table"),(0,l.kt)("p",null,"table\u662f\u6570\u636e\u8868\u7684\u903b\u8f91\u8868\u793a\u3002table\u5e76\u975e\u7c7b\u578b\uff0c\u4e0d\u80fd\u7528\u4e8efield\u7684type\u5b9a\u4e49\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u5b57\u6bb5\u5217\u8868\uff0c\u53ef\u4e3a0\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"TableMode"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u6a21\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valueType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readSchemaFromFile"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4eceinputFiles\u4e2d\u89e3\u6790valueType\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comment"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"map,string,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49tag\u5bf9\uff0c\u53ef\u4ee50\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u5206\u7ec4\uff0c\u53ef\u4ee5\u4e3a0\u5230\u591a\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputFiles"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u7684\u6570\u636e\u6587\u4ef6\u5217\u8868\uff0c\u4e0d\u53ef\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputFileName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u7684\u6587\u4ef6\u540d\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u53d6 ",(0,l.kt)("inlineCode",{parentName:"td"},"FullName.LowerCase().Replace('.', '_')"))))),(0,l.kt)("p",null,"\u5982\u679cindex\u4e3a\u7a7a\uff0c\u5e76\u4e14mode=map\u6216\u7a7a\uff0c\u5219\u81ea\u52a8\u53d6valueType\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u4e3aindex\u3002\u5f53table\u6709\u591a\u4e2a\u4e3b\u952e\u65f6\uff0c\u5982\u679c\u662f\u8054\u5408\u4e3b\u952e\uff0c\u5219\u4ee5'key1+key2+,,,+keyn'\u65b9\u5f0f\u586b\u5199\uff0c\u5982\u679c\u662f\u72ec\u7acb\u4e3b\u952e\uff0c\n\u5219\u4ee5'key1,key2,,,keyn'\u65b9\u5f0f\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"TableMode\u4e3a\u8868\u6a21\u5f0f\u679a\u4e3e\uff0c\u53ef\u53d6one(\u6216singleton)\u3001map\u3001list\u3002\u7559\u7a7a\u5219\u6839\u636eindex\u51b3\u5b9a\u5177\u4f53mode\u503c\uff1a\u5982\u679cindex\u4e3a\u7a7a\u62161\u4e2a\u4e3b\u952e\u5219\u4e3amap\uff0cindex\u4e3avalueType\u7684\u7b2c1\u4e2a\u5b57\u6bb5\uff1b\n\u5982\u679cindex\u4e3a\u591a\u4e2a\u4e3b\u952e\uff0c\u5219mode\u4e3alist\u3002"),(0,l.kt)("p",null,"inputFiles\u6307\u5b9a\u4e86\u591a\u4e2a\u8f93\u5165\u6570\u636e\u6e90\uff0c\u5b9a\u4e49\u65b9\u5f0f\u6781\u5176\u7075\u6d3b\u3002\u6bcf\u4e2a\u6570\u636e\u6e90\u53ef\u4ee5\u662f\u4ee5\u4e0b\u503c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6765\u81ea\u67d0\u4e2aexcel\u6587\u4ef6\u7684\u6240\u6709\u5355\u5143\u8584\u3002\u4f8b\u5982 xxx.xlsx"),(0,l.kt)("li",{parentName:"ul"},"\u6765\u81ea\u67d0\u4e2aexcel\u6587\u4ef6\u7684\u6307\u5b9a\u5355\u5143\u8584\u3002\u4f8b\u5982 ",(0,l.kt)("a",{parentName:"li",href:"mailto:sheet@xxx.xlsx"},"sheet@xxx.xlsx")),(0,l.kt)("li",{parentName:"ul"},"\u6765\u81eajson\u3001xml\u3001lua\u3001yaml\u3001unity scriptable asset\u6587\u4ef6\u3002\u4f8b\u5982 xx.json\u6216xx.xml\u6216xx.lua\u6216xx.yml"),(0,l.kt)("li",{parentName:"ul"},"\u6765\u81eajson\u3001xml\u3001lua\u3001yaml\u3001unity scriptable asset\u5b50\u5b57\u6bb5\u3002 \u4f8b\u5982 *",(0,l.kt)("a",{parentName:"li",href:"mailto:items@item_module.json"},"items@item_module.json"),"\u6216",(0,l.kt)("a",{parentName:"li",href:"mailto:item.consts@item_module.json"},"item.consts@item_module.json"),"\u4e4b\u7c7b\uff0c\u5176\u4ed6\u683c\u5f0f\u540c\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u6765\u81ea\u76ee\u5f55\u3002\u76ee\u5f55\u6811\u4e0b\u6240\u6709\u6587\u4ef6\uff08\u5305\u542b\u9012\u5f52\u5b50\u76ee\u5f55\uff09\u90fd\u4f1a\u88ab\u5f53\u4f5c\u6570\u636e\u6e90\u8bfb\u5165\uff0c\u6bcf\u4e2a\u6587\u4ef6(excel\u65cf\u4f8b\u5916)\u5bf9\u5e94\u4e00\u4e2a\u8bb0\u5f55\u3002\u4f8b\u5982 skill_json_dir"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u7684\u968f\u610f\u7ec4\u5408\u3002\u5982  xx.xlsx,",(0,l.kt)("a",{parentName:"li",href:"mailto:sheet2@yy.xls"},"sheet2@yy.xls"),",",(0,l.kt)("a",{parentName:"li",href:"mailto:abc@zz.json"},"abc@zz.json"),",ccc_dir")),(0,l.kt)("h2",{id:"\u516c\u5171\u5c5e\u6027"},"\u516c\u5171\u5c5e\u6027"),(0,l.kt)("h3",{id:"groups"},"groups"),(0,l.kt)("p",null,"\u7531\u5bfc\u51fatable\u7684valueType\u8ba1\u7b97\u51fa\u6240\u6709\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5f15\u7528\u7684\u7c7b\u578b\uff08enum\u548cbean\uff09\uff0c\u79f0\u4e4b\u4e3a\u9ed8\u8ba4\u5bfc\u51fa\u96c6\u5408\u3002\u5982\u679c\u67d0\u4e2a\u7c7b\u578b\u5728\u9ed8\u8ba4\u5bfc\u51fa\u96c6\u5408\u5185\uff0c\u5373\u4f7f\u5b83\u7684groups\u4e0d\u5c5e\u4e8e\u5f53\u524d\u5bfc\u51fa\u76ee\u6807\uff0c\u4e5f\u4f1a\u88ab\u5bfc\u51fa\u3002"),(0,l.kt)("p",null,"field\uff08bean\u7684\u5b57\u6bb5\u5217\u8868\uff09\u6ca1\u6709\u9ed8\u8ba4\u5bfc\u51fa\u96c6\u5408\u7684\u6982\u5ff5\uff0c\u5982\u679cgroups\u4e3a\u7a7a\uff0c\u5219\u5bfc\u51fa\u7ed9\u6240\u6709\u5206\u7ec4\u3002"),(0,l.kt)("h3",{id:"tags"},"tags"),(0,l.kt)("p",null,"tags\u4e3b\u8981\u6709\u4e24\u4e2a\u7528\u9014\uff1a",(0,l.kt)("a",{parentName:"p",href:"./validator"},"\u6821\u9a8c\u5668"),"\u548c\u7279\u6b8a\u4ee3\u7801\u751f\u6210\u3002"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u60f3\u5bf9\u67d0\u4e2a\u7c7b\u578b\u751f\u6210\u4e00\u4e9b\u7279\u6b8a\u4ee3\u7801\u65f6\uff0c\u53ef\u4ee5\u7ed9\u8be5\u7c7b\u578b\u6dfb\u52a0\u4e00\u4e9b\u7279\u6b8atag\u5c5e\u6027\uff0c\u7136\u540e\u5728\u4ee3\u7801\u6a21\u677f\u4e2d\u6839\u636etag\u5c5e\u6027\u503c\u4f5c\u7279\u6b8a\u5904\u7406\u3002\u8fd9\u79cd\u673a\u5236\u4e0d\u5e38\u7528\uff0c\u4f46\u6709\u65f6\u5019\u5f88\u6709\u7528\u3002\nhas_tag\u51fd\u6570\u7528\u4e8e\u68c0\u67e5\u662f\u5426\u6709\u67d0\u4e2atag, get_tag\u7528\u4e8e\u83b7\u5f97\u67d0\u4e2atag\u5bf9\u5e94\u7684\u503c\uff0c\u5177\u4f53\u8bf7\u770b\u6a21\u677f\u76f8\u5173\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"typemapper"},"typeMapper"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u751f\u6210\u7684\u4ee3\u7801\u4e2d\u80fd\u76f4\u63a5\u4f7f\u7528\u73b0\u6210\u7684\u7ed3\u6784\u7c7b\u578b\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b\u4ee3\u7801\u3002\u4f8b\u5982vector3\u662f\u975e\u5e38\u5e38\u89c1\u7684\u7c7b\u578b\uff0c\u4f60\u5728\u914d\u7f6e\u4e2d\u5b9a\u4e49\u4e86vector3\u540e\uff0c\u53ef\u80fd\u5e0c\u671b\u751f\u6210\u7684C#\u4ee3\u7801\u4e2d\u6d89\u53ca\u5230\nvector3\u7c7b\u578b\u7684\u5730\u65b9\u80fd\u76f4\u63a5\u4f7f\u7528UnityEngine.Vector3\uff0c\u800c\u4e0d\u662f\u751f\u6210\u7684vector3\u7c7b\u3002Luban\u652f\u6301\u8fd9\u79cd\u5916\u90e8\u7c7b\u578b\u6620\u5c04\u673a\u5236\uff0c\u53ef\u4ee5\u5c06\u914d\u7f6e\u7c7b\u6620\u5c04\u5230\u5916\u90e8\u73b0\u6210\u7684enum\u6216\u8005class\u7c7b\u578b\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"targets"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u7684\u8f93\u51fa\u76ee\u6807\uff0c\u6b64target\u5373\u4e3a\u5168\u5c40\u5b9a\u4e49\u4e2d\u7684target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"codeTargets"),(0,l.kt)("td",{parentName:"tr",align:null},"list,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u7684\u4ee3\u7801\u76ee\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"map,string,string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u9700\u8981\u7684\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u7684\u8bed\u8a00\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u6709\u53ef\u80fd\u5ba2\u6237\u7aef\u9700\u8981\u5bf9\u67d0\u4e2a\u7c7b\u578b\u6620\u5c04\uff0c\u800c\u670d\u52a1\u5668\u4e0d\u9700\u8981\u3002targets\u548ccodeTargets\u5373\u7528\u6765\u5904\u7406\u8fd9\u79cd\u60c5\u5f62\uff0c\u53ea\u6709target\u548ccodeTarget\n\u90fd\u5339\u914d\u65f6\uff0c\u624d\u4f1a\u5bf9\u751f\u6210\u7684\u4ee3\u7801\u4f5c\u7c7b\u578b\u6620\u5c04\u3002"),(0,l.kt)("p",null,"options\u5e94\u8be5\u6709\u54ea\u4e9b\u53c2\u6570\uff0c\u5b8c\u5168\u7531\u5177\u4f53\u7684CodeTarget\u51b3\u5b9a\uff0c\u4e0d\u540c\u7684codeTarget\u9700\u8981\u7684\u53c2\u6570\u4e0d\u540c\u3002"))}g.isMDXComponent=!0}}]);