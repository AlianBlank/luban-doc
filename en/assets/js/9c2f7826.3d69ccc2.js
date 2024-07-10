"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9322],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3595:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Command line tools",o={unversionedId:"manual/commandtools",id:"manual/commandtools",title:"Command line tools",description:"Cross-platform",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/commandtools.md",sourceDirName:"manual",slug:"/manual/commandtools",permalink:"/en/docs/manual/commandtools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"configuration definition",permalink:"/en/docs/manual/defaultschemacollector"},next:{title:"Hierarchical parameter mechanism",permalink:"/en/docs/manual/cascadingoption"}},d={},p=[{value:"Cross-platform",id:"cross-platform",level:2},{value:"Command format",id:"command-format",level:2},{value:"SchemaCollector",id:"schemacollector",level:2},{value:"Code Target",id:"code-target",level:2},{value:"Data Target",id:"data-target",level:2},{value:"Pipeline",id:"pipeline",level:2},{value:"xargs",id:"xargs",level:2},{value:"OutputSaver",id:"outputsaver",level:2},{value:"Example",id:"example",level:2},{value:"unity + c# + bin",id:"unity--c--bin",level:3},{value:"unity + c# + json",id:"unity--c--json",level:3},{value:"dotnet + c# + bin",id:"dotnet--c--bin",level:3},{value:"go + bin",id:"go--bin",level:3},{value:"java + bin",id:"java--bin",level:3},{value:"Used for planning and checking configuration, no code or files are generated.",id:"used-for-planning-and-checking-configuration-no-code-or-files-are-generated",level:3},{value:"Generate cs-bin and java-bin code at the same time",id:"generate-cs-bin-and-java-bin-code-at-the-same-time",level:3}],u={toc:p},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-tools"},"Command line tools"),(0,r.kt)("h2",{id:"cross-platform"},"Cross-platform"),(0,r.kt)("p",null,"Thanks to the cross-platform capabilities of .net, Luban can run on mainstream Win, Linux and macOS operating systems."),(0,r.kt)("h2",{id:"command-format"},"Command format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\ndotnet <path_of_luban.dll> [args]\n\nargs:\n\n   -s, --schemaCollector schema collector name\n\n   --conf Required. luban conf file\n\n   -t, --target Required. target name\n\n   -c, --codeTarget code target name\n\n   -d, --dataTarget data target name\n\n   -p, --pipeline pipeline name\n\n   -f, --forceLoadTableDatas force load table datas when not any dataTarget\n\n   -i, --includeTag include tag\n\n   -e, --excludeTag exclude tag\n\n   -o, --outputTable output table\n\n   --timeZone time zone\n\n   --customTemplateDir custom template dirs\n\n   --validationFailAsError validation fail as error\n\n   -x, --xargs args like -x a=1 -x b=2\n\n   -v, --verbose verbose\n\n   --help Display this help screen.\n\n   --version Display version information.\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-s, --schemaCollector"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"schema root collector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--conf"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"luban configuration item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-t, --target"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"to generate the target, taking one of the schema global parameters target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --codeTarget"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated code target. There can be 0-n. Such as ",(0,r.kt)("inlineCode",{parentName:"td"},"-c cs-bin -c java-json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --dataTarget"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The generated data target. There can be 0-n. Such as ",(0,r.kt)("inlineCode",{parentName:"td"},"-d bin -d json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-f, --forceLoadTableDatas"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Forcibly load the configuration data even if no dataTarget is specified, suitable for checking the legality of the configuration before submitting the configuration table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p, --pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate pipeline. Defaults to the built-in DefaultPipeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-i, --inlcudeTag"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Records containing this tag will be output to the data target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-e, --excludeTag"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Records containing this tag will not be output to the data target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-o, --outputTable"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the table to be generated, there can be multiple, for example ",(0,r.kt)("inlineCode",{parentName:"td"},"-o item.tbItem -o bag.TbBag"),". If this parameter is not specified, the exported table list is calculated according to group rules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--timeZone"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the current time zone, which defaults to the local time zone. This parameter affects datetime types. This parameter is the time zone name under linux or win, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"Asia/Shanghai")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"China Standard Time"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--customTemplateDir"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Customize the template search path, search this path first, and then search the default Templates path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--validationFailAsError"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The build fails if any validator fails. This parameter is generally used during official release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-x, --xargs"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify some special parameters. The exact parameters required are determined by the modules involved in the run of the build pipeline")))),(0,r.kt)("h2",{id:"schemacollector"},"SchemaCollector"),(0,r.kt)("p",null,"The Luban.SchemaCollector.Builtin project implements DefaultSchemaCollector, which supports a definition format similar to older versions of Luban. The schemaCollector is named default."),(0,r.kt)("h2",{id:"code-target"},"Code Target"),(0,r.kt)("p",null,"Currently, the following code targets are supported built-in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code target"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-simple-json"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, use SimpleJSON to read json files, recommended for Unity client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-dotnet-json"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, use System.Text.Json library to read json files, recommended for dotnet core server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-newtonsoft-json"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, use Newtonsoft.Json library to read json files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-editor-json"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, read and save records as a single json file, suitable for custom editors to save and load original configuration files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-protobuf"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate code to load all protobuf bin format data, only contains Tables class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lua-lua"),(0,r.kt)("td",{parentName:"tr",align:null},"lua, read lua format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lua-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"lua, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"java-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"java, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"java-json"),(0,r.kt)("td",{parentName:"tr",align:null},"java, use gson library to read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"cpp-bin")),(0,r.kt)("td",{parentName:"tr",align:null},"cpp, read bin format files. Removed since v2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpp-sharedptr-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"cpp, use smart pointers to save dynamically allocated objects, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpp-rawptr-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"cpp, use raw pointers to save dynamically allocated objects, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"go, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go-json"),(0,r.kt)("td",{parentName:"tr",align:null},"go, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python-json"),(0,r.kt)("td",{parentName:"tr",align:null},"python, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gdscript-json"),(0,r.kt)("td",{parentName:"tr",align:null},"gdscript, read json format files. Note that if you use C# language development, it is recommended to use the more efficient cs-bin format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typescript-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"typescript, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typescript-json"),(0,r.kt)("td",{parentName:"tr",align:null},"typescript, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typescript-protobuf"),(0,r.kt)("td",{parentName:"tr",align:null},"typescript, generate code to read protobuf format data, only contains Tables class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rust-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate rust code, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rust-json"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate rust code, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"php-json"),(0,r.kt)("td",{parentName:"tr",align:null},"php, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf2"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate proto2 syntax schema files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf3"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate proto3 syntax schema files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flatbuffers"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate flatbuffers schema files")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The code target must match the data target, otherwise the loading will fail.")),(0,r.kt)("p",null,"When generating multiple code targets at one time, the output directory must be specified separately for each code target, otherwise they will overwrite each other. In practice, it is impossible to output different codes to the same directory."),(0,r.kt)("p",null,"Most of Luban's built-in templates use the ",(0,r.kt)("a",{parentName:"p",href:"./cascadingoption"},"Cascading Option")," mechanism. You only need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<code target name>.outputCodeDir")," parameter\nJust specify the output directory parameters for each target separately."),(0,r.kt)("h2",{id:"data-target"},"Data Target"),(0,r.kt)("p",null,"Built-in support for the following data targets:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"data target"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bin"),(0,r.kt)("td",{parentName:"tr",align:null},"Luban\u2019s unique binary format, compact and efficient, recommended for official release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bin-offset"),(0,r.kt)("td",{parentName:"tr",align:null},"Records the index position of each record in the data file exported in bin format, which can be used for lazy loading with record granularity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"json format, map output is [","[key, value]","] format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json2"),(0,r.kt)("td",{parentName:"tr",align:null},'is similar to json format, but map output is {"key":"value"} format')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lua"),(0,r.kt)("td",{parentName:"tr",align:null},"lua format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml"),(0,r.kt)("td",{parentName:"tr",align:null},"xml format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yml"),(0,r.kt)("td",{parentName:"tr",align:null},"yaml format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bson"),(0,r.kt)("td",{parentName:"tr",align:null},"bson format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgpack"),(0,r.kt)("td",{parentName:"tr",align:null},"binary format of msgpack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"binary format of protobuf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf-json"),(0,r.kt)("td",{parentName:"tr",align:null},"json format supported from protobuf3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flatbuffers-json"),(0,r.kt)("td",{parentName:"tr",align:null},"json format supported by flatbuffers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text-list"),(0,r.kt)("td",{parentName:"tr",align:null},"Output all text keys that appear in the configuration, sorted from small to large")))),(0,r.kt)("p",null,"If you want to output multiple targets at one time, the solution is similar to code target. Just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<data target name>.outputDataDir")," parameter\nJust specify the output directory parameters for each target separately."),(0,r.kt)("p",null,"Each code target can only read one matching data format. For example, the c# code generated by cs-bin can only read bin format data, and the java code generated by java-json can only read json format."),(0,r.kt)("h2",{id:"pipeline"},"Pipeline"),(0,r.kt)("p",null,"A default pipeline DefaultPipeline is implemented in Luban.Core, named default. Users can implement their own Pipeline."),(0,r.kt)("h2",{id:"xargs"},"xargs"),(0,r.kt)("p",null,"There are also a large number of command line parameters. Since they are unique to each customizable module in the Pipeline, these parameters are not included in the standard command line parameters and are uniformly used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"-x --xargs")," parameter instructions."),(0,r.kt)("p",null,"The parameters used by the built-in modules are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Available values"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{codeTarget}.outputCodeDir"),(0,r.kt)("td",{parentName:"tr",align:null},"Output directory of code target"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputCodeDir=/my/output/dir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{dataTarget}.outputDataDir"),(0,r.kt)("td",{parentName:"tr",align:null},"Output directory of data target"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputDataDir=/my/output/dir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming style of code target. Built-in Code Target will automatically set codeStyle that matches the target language. No explicit specification is required."),(0,r.kt)("td",{parentName:"tr",align:null},"none, csharp-default, java-default, go-default, lua-default, typescript-default, cpp-default, python-default"),(0,r.kt)("td",{parentName:"tr",align:null},"-x codeStyle=csharp-default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namingConvention.{codeTarget}.{location}"),(0,r.kt)("td",{parentName:"tr",align:null},"codeTarget is the target name specified in the ",(0,r.kt)("inlineCode",{parentName:"td"},"--codeTarget")," parameter. location is the style location. Optional values \u200b\u200bare namespace, type, method, property, field, enumItem. For details, see ",(0,r.kt)("a",{parentName:"td",href:"./codestyle"},"Code Style"),". This parameter is a hierarchical option. If {codeTarget} is not specified, it will take effect on all targets"),(0,r.kt)("td",{parentName:"tr",align:null},"none, pascal, camel, upper, snake"),(0,r.kt)("td",{parentName:"tr",align:null},"-x namingConvention.cs-bin.field=pascal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataExporter"),(0,r.kt)("td",{parentName:"tr",align:null},"Data exporter"),(0,r.kt)("td",{parentName:"tr",align:null},"null, default"),(0,r.kt)("td",{parentName:"tr",align:null},"-x dataExporter=default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codePostprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"Code postprocessor, can be multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"No built-in postprocess is implemented"),(0,r.kt)("td",{parentName:"tr",align:null},"-x codePostProcess=a,b,c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataPostprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"Data postprocessor, can be multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"No built-in postprocess is implemented"),(0,r.kt)("td",{parentName:"tr",align:null},"-x dataPostProcess=a,b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputSaver"),(0,r.kt)("td",{parentName:"tr",align:null},"Data saver, default is local, that is, output to the local directory. If you do not want to output any files, you can use null"),(0,r.kt)("td",{parentName:"tr",align:null},"null, local"),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputSaver=local")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputSaver.{codeTarget","|","dataTarget}.cleanUpOutputDir"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to clean up the redundant files in the outputCodeDir or outputDataDir directory before outputting files, default is true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputSaver.cs-bin.cleanUpOutputDir=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Localized text provider. If this parameter is not set, no localization-related operations will be performed, including text verification and static conversion."),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.provider=default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.textFile.path"),(0,r.kt)("td",{parentName:"tr",align:null},"Localized text data file. This value must be filled in when l10.provider is set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.textFile.path=xxxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.textFile.keyFieldName"),(0,r.kt)("td",{parentName:"tr",align:null},"The field name of the key field of the data item in the localized text data file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.textFile.keyFieldName=key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.textFile.languageFieldName"),(0,r.kt)("td",{parentName:"tr",align:null},"The field name of the text value field of the corresponding language of the data item in the localized text data file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.languageFieldName=en")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.convertTextKeyToValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform static localization and replace key with the text value of the corresponding language"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.convertTextKeyToValue=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.textListFile"),(0,r.kt)("td",{parentName:"tr",align:null},"The output file of all text key lists in the configuration, used with DataTarget text-list"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathValidator.rootDir"),(0,r.kt)("td",{parentName:"tr",align:null},"The root directory used by the path validator to search for files"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x pathValidator.rootDir=/xx/yy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineEnding"),(0,r.kt)("td",{parentName:"tr",align:null},"The line ending of the generated code file"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be CR, LF, CRLF. If not specified, Environment.NewLine is used as the line ending"),(0,r.kt)("td",{parentName:"tr",align:null},"-x lineEnding=LF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json.compact"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to output compact json data without indentation, used with json or json2 dataTarget, the default is 0"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1, true, false"),(0,r.kt)("td",{parentName:"tr",align:null},"-x compact=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{dataTarget}.fileExt"),(0,r.kt)("td",{parentName:"tr",align:null},"The file name suffix of the output data file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x bin.fileExt=bin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"{dataTarget}.outputDataExtension")),(0,r.kt)("td",{parentName:"tr",align:null},"The file name suffix of the output data file. Removed in v2.12.0, renamed to fileExt"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x bin.outputDataExtension=bin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{codeTarget","|","dataTarget}.fileEncoding"),(0,r.kt)("td",{parentName:"tr",align:null},"Character encoding of output file"),(0,r.kt)("td",{parentName:"tr",align:null},"-x lua.fileEncoding=gb2313"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"outputsaver"},"OutputSaver"),(0,r.kt)("p",null,"The holder of the final generated data. Two savers, local and null, are currently implemented."),(0,r.kt)("p",null,"local saves files to a local directory. null performs no operation. Local is the saver used by default. Generally, local is used for generation tasks. If you only want to verify the configuration table and do not want to generate any data, use null\nSaver can achieve this goal."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Some common generation command examples are shown below. For more examples, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects"},"luban_examples/Projects"),"."),(0,r.kt)("h3",{id:"unity--c--bin"},"unity + c# + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_bin"},"Csharp_Unity_bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %LUBAN_DLL% ^\n     -t all ^\n     -c cs-bin ^\n     -dbin^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x outputCodeDir=Assets/Gen ^\n     -x outputDataDir=..\\GenerateDatas\\bytes ^\n     -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@%WORKSPACE%\\DataTables\\Datas\\l10n\\texts.json\n\n")),(0,r.kt)("h3",{id:"unity--c--json"},"unity + c# + json"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_json"},"Csharp_Unity_json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset GEN_CLIENT=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %GEN_CLIENT% ^\n     -t all ^\n     -c cs-simple-json ^\n     -djson^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x outputCodeDir=Assets/Gen ^\n     -x outputDataDir=..\\GenerateDatas\\json ^\n     -x pathValidator.rootDir=D:\\workspace2\\luban_examples\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@D:\\workspace2\\luban_examples\\DataTables\\Datas\\l10n\\texts.json\n\n\n")),(0,r.kt)("h3",{id:"dotnet--c--bin"},"dotnet + c# + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_DotNet_bin"},"Csharp_DotNet_bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %LUBAN_DLL% ^\n     -t all ^\n     -c cs-bin ^\n     -dbin^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x outputCodeDir=Gen ^\n     -x outputDataDir=..\\GenerateDatas\\bytes ^\n     -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@%WORKSPACE%\\DataTables\\Datas\\l10n\\texts.json\n\n")),(0,r.kt)("h3",{id:"go--bin"},"go + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Go_bin"},"Go_bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %LUBAN_DLL% ^\n     -t all ^\n     -c go-bin ^\n     -dbin^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x outputCodeDir=gen ^\n     -x outputDataDir=..\\GenerateDatas\\bytes ^\n     -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@%WORKSPACE%\\DataTables\\Datas\\l10n\\texts.json ^\n     -x lubanGoModule=demo/luban\n\n")),(0,r.kt)("h3",{id:"java--bin"},"java + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Java_bin"},"Java_bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %LUBAN_DLL% ^\n     -t all ^\n     -c java-bin ^\n     -dbin^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x outputCodeDir=src/main/gen ^\n     -x outputDataDir=..\\GenerateDatas\\bytes ^\n     -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@%WORKSPACE%\\DataTables\\Datas\\l10n\\texts.json\n")),(0,r.kt)("h3",{id:"used-for-planning-and-checking-configuration-no-code-or-files-are-generated"},"Used for planning and checking configuration, no code or files are generated."),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/DataTables"},"ConfigCheck"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %LUBAN_DLL% ^\n     -t all ^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@%WORKSPACE%\\DataTables\\Datas\\l10n\\texts.json ^\n     -x forceLoadDatas=1\n")),(0,r.kt)("h3",{id:"generate-cs-bin-and-java-bin-code-at-the-same-time"},"Generate cs-bin and java-bin code at the same time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DataTables\n\ndotnet %LUBAN_DLL% ^\n     -t all ^\n     -c cs-bin ^\n     -c java-bin ^\n     -dbin^\n     --conf %CONF_ROOT%\\luban.conf ^\n     -x cs-bin.outputCodeDir=cs_output_path ^\n     -x java-bin.outputCodeDir=java_output_path ^\n     -x outputDataDir=..\\GenerateDatas\\bytes ^\n     -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n     -x l10n.textProviderFile=*@%WORKSPACE%\\DataTables\\Datas\\l10n\\texts.json\n\n")))}s.isMDXComponent=!0}}]);