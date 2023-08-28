"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="Best Practices",l={unversionedId:"manual/bestpractices",id:"manual/bestpractices",title:"Best Practices",description:"Naming Conventions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/bestpractices.md",sourceDirName:"manual",slug:"/manual/bestpractices",permalink:"/en/docs/manual/bestpractices",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Differences from the classic version",permalink:"/en/docs/manual/migrate"},next:{title:"Extended Luban implementation",permalink:"/en/docs/manual/extendluban"}},s={},c=[{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Adjust the naming convention of the generated code",id:"adjust-the-naming-convention-of-the-generated-code",level:2},{value:"Flexible selection of xml and excel definitions",id:"flexible-selection-of-xml-and-excel-definitions",level:2},{value:"Luban.Server or Luban.ClientServer",id:"lubanserver-or-lubanclientserver",level:2},{value:"Modularity",id:"modularity",level:2},{value:"export format",id:"export-format",level:2},{value:"Elegantly configure data with complex structures in excel",id:"elegantly-configure-data-with-complex-structures-in-excel",level:2},{value:"Use OOP type inheritance to define complex GamePlay data in the game",id:"use-oop-type-inheritance-to-define-complex-gameplay-data-in-the-game",level:2},{value:"Use githooks to check the legality of the data before planning to submit the planning configuration",id:"use-githooks-to-check-the-legality-of-the-data-before-planning-to-submit-the-planning-configuration",level:2},{value:"It is recommended to use the watch mechanism to automatically monitor changes and regenerate",id:"it-is-recommended-to-use-the-watch-mechanism-to-automatically-monitor-changes-and-regenerate",level:2},{value:"planning check configuration script recommends adding --generateonly parameter",id:"planning-check-configuration-script-recommends-adding---generateonly-parameter",level:2},{value:"The data generated by the editor uses the json data format",id:"the-data-generated-by-the-editor-uses-the-json-data-format",level:2},{value:"Use tags to identify test and development data",id:"use-tags-to-identify-test-and-development-data",level:2},{value:"Use tag unchecked to identify unchecked records",id:"use-tag-unchecked-to-identify-unchecked-records",level:2},{value:"Use datetime to represent time",id:"use-datetime-to-represent-time",level:2},{value:"Polymorphic type usage occasions",id:"polymorphic-type-usage-occasions",level:2},{value:"Use polymorphic types in code",id:"use-polymorphic-types-in-code",level:2},{value:"method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3},{value:"Method 3",id:"method-3",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"best-practices"},"Best Practices"),(0,o.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"table.name recommends the TbXxxYyy class style, which is easy to distinguish between tables and ordinary bean types"),(0,o.kt)("li",{parentName:"ul"},"bean.var.name recommends the xx_yy_zz style. When generating, it will automatically generate a suitable variable name according to the target language, such as XxYyZz under c#; xxYyZz under java.")),(0,o.kt)("h2",{id:"adjust-the-naming-convention-of-the-generated-code"},"Adjust the naming convention of the generated code"),(0,o.kt)("p",null,"The default is to generate the name according to the recommended style of each language, for example, xxxx_yyyy is XxxxYyyy under c#. Sometimes you want to tweak this naming style.\nFor example, using the original form, you can achieve this with the parameter --naming_convention:bean_member none ."),(0,o.kt)("p",null,"For more information, please refer to the documentation in ",(0,o.kt)("a",{parentName:"p",href:"../manual/commandtools"},"Command Tool")),(0,o.kt)("h2",{id:"flexible-selection-of-xml-and-excel-definitions"},"Flexible selection of xml and excel definitions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For those with high aesthetic requirements, those who are used to handwriting table definitions like protobuf can complete the table definition in xml"),(0,o.kt)("li",{parentName:"ul"},"Pragmatism, convenient for planning and editing, table definition can be completely completed in excel"),(0,o.kt)("li",{parentName:"ul"},"The above two can be mixed appropriately")),(0,o.kt)("p",null,"If you use xml definition, it is recommended that each module corresponds to an xml file, and has an independent module name, which is convenient for management and search."),(0,o.kt)("h2",{id:"lubanserver-or-lubanclientserver"},"Luban.Server or Luban.ClientServer"),(0,o.kt)("p",null,"Luban.Server needs to be deployed, which may be troublesome for novices, but the advantage is that the generation time can be greatly shortened by using the cache. In addition, when updating Luban, you don\u2019t need to update tools. It is recommended to deploy Luban.Server for projects with conditions (use docker to deploy In fact, it is very simple with just one line of command, see ",(0,o.kt)("a",{parentName:"p",href:"../manual/commandtools"},"Command Line"),"."),(0,o.kt)("p",null,"For small and medium-sized projects, Luban.ClientServer can also be used directly to save trouble."),(0,o.kt)("h2",{id:"modularity"},"Modularity"),(0,o.kt)("p",null,"It is strongly recommended to manage the configuration by module, each module has a directory, and put all the configurations of the module under this directory."),(0,o.kt)("p",null,"When defining tables and structures, it is also recommended to add a suitable module name, such as item.TbItem, item.ItemInfo, instead of an empty module."),(0,o.kt)("h2",{id:"export-format"},"export format"),(0,o.kt)("p",null,"It is recommended to use the json version of the corresponding language during the development period, so that the server or client will not be republished frequently due to changes in the configuration format"),(0,o.kt)("h2",{id:"elegantly-configure-data-with-complex-structures-in-excel"},"Elegantly configure data with complex structures in excel"),(0,o.kt)("p",null,"Cooperate with multi-line record + multi-level field column name + sep mechanism (field sep, and type sep mechanism), flexibly choose column limitation mode and streaming mode, and configure complex data concisely. If you have any difficulties, you can consult in the group."),(0,o.kt)("h2",{id:"use-oop-type-inheritance-to-define-complex-gameplay-data-in-the-game"},"Use OOP type inheritance to define complex GamePlay data in the game"),(0,o.kt)("p",null,"Flexible use of OOP type inheritance to define complex GamePlay data such as skills, BUFF, AI, copies, etc. Choose excel or json data to fill in as appropriate\nthese complex data. ",(0,o.kt)("strong",{parentName:"p"},"Never")," use the traditional type + param1, param2, param3 combination to express complex data structures, which is not friendly to planning and programming, and it is difficult to check for errors."),(0,o.kt)("h2",{id:"use-githooks-to-check-the-legality-of-the-data-before-planning-to-submit-the-planning-configuration"},"Use githooks to check the legality of the data before planning to submit the planning configuration"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/githooks-demo"},"githubs-demo")),(0,o.kt)("h2",{id:"it-is-recommended-to-use-the-watch-mechanism-to-automatically-monitor-changes-and-regenerate"},"It is recommended to use the watch mechanism to automatically monitor changes and regenerate"),(0,o.kt)("p",null,"Luban.Client and Luban.ClientServer provide watch generation mechanism. Use the parameter -w dir1,dir2,.. to automatically regenerate when the corresponding directory changes. For example, an example script is as follows, which automatically triggers a rebuild when the definition or configuration directory changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"%GEN_CLIENT% -h %LUBAN_SERVER_IP% -j cfg -w %CONF_ROOT%\\Datas,%CONF_ROOT%\\Defines --^\n  -d %DEFINE_FILE%^\n  --input_data_dir %CONF_ROOT%\\Datas ^\n  --output_code_dir TsScripts/src/Gen/Cfg ^\n  --output_data_dir Assets\\StreamingAssets\\ConfigData^\n  --gen_types code_typescript_json,data_json^\n  -s client\n")),(0,o.kt)("h2",{id:"planning-check-configuration-script-recommends-adding---generateonly-parameter"},"planning check configuration script recommends adding --generateonly parameter"),(0,o.kt)("p",null,"Note that this parameter is a parameter of Luban.Client and must be added before -- . After adding this parameter, Luban.Server will still generate data, but Luban.Client will not download the generated results. The time can be shortened further."),(0,o.kt)("p",null,"A sample script is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"%LUBAN_CLIENT% -j cfg --generateonly -- ^\n  --input_data_dir %DATA_DIR^ ^\n  --...\n  --...\n")),(0,o.kt)("p",null,"##refgroup"),(0,o.kt)("p",null,"If many fields ref the same batch of tables, you can use refgroup for easy reference."),(0,o.kt)("h2",{id:"the-data-generated-by-the-editor-uses-the-json-data-format"},"The data generated by the editor uses the json data format"),(0,o.kt)("p",null,"It is recommended to save the complex configuration data generated by the editor as json data, and place a file for each record point in the directory. Set table.input to that directory. Luban supports generating codes that record loading and saving from json, don't write this serialization yourself!"),(0,o.kt)("h2",{id:"use-tags-to-identify-test-and-development-data"},"Use tags to identify test and development data"),(0,o.kt)("p",null,"Use tag to mark those test and development period data, and use --output:exclude_tags tag1,tag2,... to filter these data when it is officially released.\nDon't change it yourself!"),(0,o.kt)("h2",{id:"use-tag-unchecked-to-identify-unchecked-records"},"Use tag unchecked to identify unchecked records"),(0,o.kt)("p",null,"Some data is temporarily produced in batches, and many reference values are illegal, but they are not used by the program for the time being, and a large number of warnings are printed due to ref failure during generation. You can add unchecked tags to these records, and luban will not check these data."),(0,o.kt)("h2",{id:"use-datetime-to-represent-time"},"Use datetime to represent time"),(0,o.kt)("p",null,"Use datetime to mark the time, pay attention to use it with the time zone parameter."),(0,o.kt)("h2",{id:"polymorphic-type-usage-occasions"},"Polymorphic type usage occasions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recommended for occasions with variable types, especially GamePlay data, such as skills, AI, tasks, copies, etc."),(0,o.kt)("li",{parentName:"ul"},"Simple ones can be configured in excel, and more complex ones, especially skills that need to be edited in an independent skill editor, are recommended to save data in json format")),(0,o.kt)("h2",{id:"use-polymorphic-types-in-code"},"Use polymorphic types in code"),(0,o.kt)("p",null,"Assume the following polymorphic types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public abstract class Shape : BeanBase\n{\n     // xxxx\n}\n\npublic class Triangle : Shape\n{\n     float a;\n     float b;\n     float c;\n}\n\npublic class Circle : Shape\n{\n     float radius;\n}\n\npublic class Rectangle : Shape\n{\n     float width;\n     float height;\n}\n")),(0,o.kt)("p",null,"Suppose there is a Shape field shape in the configuration. In the actual logic code, it should be handled differently according to its actual type.\nThere are three common ways of writing. When the number of types is small, all three methods can be selected according to personal preference. When the number of types is large, it is recommended to follow method 3, which is more efficient."),(0,o.kt)("h3",{id:"method-1"},"method 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"     if (shape is Circle c)\n     {\n         // xxx\n     }\n     else if(shape is Triangle t)\n     {\n         // xxx\n     }\n     else if(shape is Rectangle r)\n     {\n         // xxx\n     }\n\n")),(0,o.kt)("h3",{id:"method-2"},"Method 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"switch(shape)\n{\n     case Circle c:\n     {\n         // xxx;\n         break;\n     }\n     case Triangle t:\n     {\n         // xxx\n         break;\n     }\n     case Rectangle r:\n     {\n         // xxx;\n         break;\n     }\n}\n")),(0,o.kt)("h3",{id:"method-3"},"Method 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"switch(shape. GetTypeId())\n{\n     case Circle::__ID__:\n     {\n         Circle c = (Circle)shape;\n         // xxx;\n         break;\n     }\n     case Triangle::__ID__:\n     {\n         Triangle t = (Triangle)shape;\n         // xxx\n         break;\n     }\n     case Rectangle::__ID__:\n     {\n         Rectangle r = (Rectangle)shape;\n         // xxx;\n         break;\n     }\n}\n")))}m.isMDXComponent=!0}}]);