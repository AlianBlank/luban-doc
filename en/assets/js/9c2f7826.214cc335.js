"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9322],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(a),c=r,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3595:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},o="command line tools",i={unversionedId:"manual/commandtools",id:"manual/commandtools",title:"command line tools",description:"Cross-platform",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/commandtools.md",sourceDirName:"manual",slug:"/manual/commandtools",permalink:"/en/docs/manual/commandtools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"configuration definition",permalink:"/en/docs/manual/defaultschemacollector"},next:{title:"Hierarchical parameter mechanism",permalink:"/en/docs/manual/cascadingoption"}},p={},d=[{value:"Cross-platform",id:"cross-platform",level:2},{value:"command format",id:"command-format",level:2},{value:"Code Target",id:"code-target",level:2},{value:"Pipeline",id:"pipeline",level:2},{value:"xargs",id:"xargs",level:2},{value:"OutputSaver",id:"outputsaver",level:2},{value:"Example",id:"example",level:2},{value:"unity + c# + json",id:"unity--c--json",level:3},{value:"dotnet + c# + bin",id:"dotnet--c--bin",level:3},{value:"go + bin",id:"go--bin",level:3},{value:"java + bin",id:"java--bin",level:3},{value:"Used to curate and check configuration without generating any code and files",id:"used-to-curate-and-check-configuration-without-generating-any-code-and-files",level:3},{value:"Simultaneously generate cs-bin and java-bin code",id:"simultaneously-generate-cs-bin-and-java-bin-code",level:3}],u={toc:d},s="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-tools"},"command line tools"),(0,r.kt)("h2",{id:"cross-platform"},"Cross-platform"),(0,r.kt)("p",null,"Thanks to the cross-platform capabilities of .net, Luban can run on mainstream Win, Linux and macOS operating systems."),(0,r.kt)("h2",{id:"command-format"},"command format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"dotnet <path_of_luban.dll> [args]\n\nargs:\n\n   -s, --schemaCollector schema collector name\n\n   --schemaPath Required.schema path\n\n   -t, --target Required. target name\n\n   -c, --codeTarget code target name. allow multi instance.\n\n   -d, --dataTarget data target name. allow multi instance.\n\n   -p, --pipeline pipeline name\n\n   -i, --includeTag include tag. allow multi instance.\n\n   -e, --excludeTag exclude tag. allow multi instance.\n\n   -o, --outputTable output table. allow multi instance.\n\n   --timeZone timezone\n\n   --customTemplateDir custom template search dir\n\n   --validationFailAsError validation fail as error\n\n   -x, --xargs args like -x a=1 -x b=2. allow multi instance.\n\n   -v, --verbose verbose\n\n   --help Display this help screen.\n\n   --version Display version information.\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-s, --schemaCollector"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"schema root collector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--schemaPath"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the root input file for the schema root collector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-t, --target"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"generate target, take one of the schema global parameter target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --codeTarget"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated code target. There can be 0-n of them. Such as ",(0,r.kt)("inlineCode",{parentName:"td"},"-c cs-bin -c java-json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --dataTarget"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated data target. There can be 0-n of them. Such as ",(0,r.kt)("inlineCode",{parentName:"td"},"-d bin -d json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p, --pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate a pipeline. Defaults to the built-in DefaultPipeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-i, --inlcudeTag"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Records containing this tag will be output to the data target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-e, --excludeTag"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Records containing this tag will not be output to the data target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-o, --outputTable"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the table to be generated, there can be multiple, for example ",(0,r.kt)("inlineCode",{parentName:"td"},"-o item.tbItem -o bag.TbBag"),". If this parameter is not specified, the exported table list will be calculated according to the group rules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--timeZone"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the current time zone, the default is the local time zone. This parameter affects the datetime type. This parameter is the time zone name under linux or win, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"Asia/Shanghai")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"China Standard Time"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--customTemplateDir"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Custom template search path, priority search this path, and then search the default Templates path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--validationFailAsError"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Build fails if any validators fail. This parameter is generally used in official release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-x, --xargs"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify some special arguments. Which parameters are required is determined by the modules involved in the generation pipeline run")))),(0,r.kt)("p",null,"##SchemaCollector"),(0,r.kt)("p",null,"The Luban.SchemaCollector.Builtin project implements DefaultSchemaCollector, which supports a definition format similar to older versions of Luban. The schemaCollector is named default."),(0,r.kt)("h2",{id:"code-target"},"Code Target"),(0,r.kt)("p",null,"Currently built-in support for the following code targets:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code target"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-simple-json"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, use SimpleJSON to read json files, recommended for Unity clients")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cs-dotnet-json"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, use System.Text.Json library to read json files, recommended for dotnet core server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lua-lua"),(0,r.kt)("td",{parentName:"tr",align:null},"lua, read files in lua format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lua-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"lua, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"java-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"java, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"java-json"),(0,r.kt)("td",{parentName:"tr",align:null},"java, use the gson library to read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpp-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"cpp, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"go, read bin format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go-json"),(0,r.kt)("td",{parentName:"tr",align:null},"go, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python-json"),(0,r.kt)("td",{parentName:"tr",align:null},"python, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gdscript-json"),(0,r.kt)("td",{parentName:"tr",align:null},"gdscript, read json format files. Note that if you use C# language development, it is recommended to use the more efficient cs-bin format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typescript-json"),(0,r.kt)("td",{parentName:"tr",align:null},"typescript, read json format files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf2"),(0,r.kt)("td",{parentName:"tr",align:null},"generate schema file of proto2 syntax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf3"),(0,r.kt)("td",{parentName:"tr",align:null},"generate schema file of proto3 syntax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flatbuffers"),(0,r.kt)("td",{parentName:"tr",align:null},"generate schema files for flatbuffers")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The code target must match the data target, otherwise the loading will fail.")),(0,r.kt)("p",null,"When generating multiple code targets at a time, the output directory must be specified for each code target, otherwise they will overwrite each other. In practice, it is also impossible to output different codes to the same directory."),(0,r.kt)("p",null,"Most of Luban's built-in templates use the ",(0,r.kt)("a",{parentName:"p",href:"./cascadingoption"},"Cascading Option")," mechanism, you only need to specify the output directory parameters for each target with ",(0,r.kt)("inlineCode",{parentName:"p"},"<code target name>.outputCodeDir")," parameter."),(0,r.kt)("p",null,"##Data Target"),(0,r.kt)("p",null,"The following data targets are supported built-in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"data target"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bin"),(0,r.kt)("td",{parentName:"tr",align:null},"Luban's unique binary format, compact and efficient, recommended for official release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bin-offset"),(0,r.kt)("td",{parentName:"tr",align:null},"Record the index position of each record in the data file exported in bin format, which can be used for lazy loading with record granularity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"json format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lua"),(0,r.kt)("td",{parentName:"tr",align:null},"lua format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml"),(0,r.kt)("td",{parentName:"tr",align:null},"xml format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yml"),(0,r.kt)("td",{parentName:"tr",align:null},"yaml format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bson"),(0,r.kt)("td",{parentName:"tr",align:null},"bson format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgpack"),(0,r.kt)("td",{parentName:"tr",align:null},"binary format of msgpack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf-bin"),(0,r.kt)("td",{parentName:"tr",align:null},"binary format of protobuf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protobuf-json"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON format supported by protobuf3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flatbuffers-json"),(0,r.kt)("td",{parentName:"tr",align:null},"json format supported by flatbuffers")))),(0,r.kt)("p",null,"If you want to output multiple targets at a time, the solution is similar to code target. Just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<data target name>.outputDataDir")," parameter to specify the output directory parameters for each target."),(0,r.kt)("p",null,"Each code target can only read one matching data format. For example, c# code generated by cs-bin can only read data in bin format, and java code generated by java-json can only read data in json format."),(0,r.kt)("h2",{id:"pipeline"},"Pipeline"),(0,r.kt)("p",null,"A default pipeline DefaultPipeline is implemented in Luban.Core, named default. Users can implement their own Pipeline."),(0,r.kt)("h2",{id:"xargs"},"xargs"),(0,r.kt)("p",null,"There are also a large number of command line parameters. Since they are unique parameters of each customizable module in Pipeline, these parameters are not included in the standard command line parameters, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"-x --xargs")," parameter command is used uniformly."),(0,r.kt)("p",null,"The parameters used by the built-in modules are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Available Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inputDataDir"),(0,r.kt)("td",{parentName:"tr",align:null},"root directory of source data files"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x inputDataDir=/my/datatable/path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputCodeDir"),(0,r.kt)("td",{parentName:"tr",align:null},"output directory for code targets"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputCodeDir=/my/output/dir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputDataDir"),(0,r.kt)("td",{parentName:"tr",align:null},"output directory of data target"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputDataDir=/my/output/dir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"The naming style of the code target, the built-in Code Target will automatically set the codeStyle that matches the target language, no need to specify explicitly"),(0,r.kt)("td",{parentName:"tr",align:null},"none, csharp-default, java-default, go-default, lua-default, typescript -default, cpp-default, python-default"),(0,r.kt)("td",{parentName:"tr",align:null},"-x codeStyle=csharp-default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataExporter"),(0,r.kt)("td",{parentName:"tr",align:null},"data exporter"),(0,r.kt)("td",{parentName:"tr",align:null},"null, default"),(0,r.kt)("td",{parentName:"tr",align:null},"-x dataExporter=default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codePostprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"code postprocessor, can be multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"does not implement any built-in postprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"-x codePostProcess=a,b,c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataPostprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"data postprocessor, can be multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"does not implement any built-in postprocess"),(0,r.kt)("td",{parentName:"tr",align:null},"-x dataPostProcess=a,b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputSaver"),(0,r.kt)("td",{parentName:"tr",align:null},"data saver, the default is local, that is, output to the local directory, if you do not want to output any files, you can use null"),(0,r.kt)("td",{parentName:"tr",align:null},"null, local"),(0,r.kt)("td",{parentName:"tr",align:null},"-x outputSaver=local")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.textProviderName"),(0,r.kt)("td",{parentName:"tr",align:null},"Localized text provider"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.textProviderName=default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"l10n.textProviderFile"),(0,r.kt)("td",{parentName:"tr",align:null},"localized text data file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x l10n.textProviderFile=xxxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceLoadDatas"),(0,r.kt)("td",{parentName:"tr",align:null},"Load source data even if there is no data target"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x forceLoadDatas=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathValidator.rootDir"),(0,r.kt)("td",{parentName:"tr",align:null},"Root directory for path validator to search for files"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-x pathValidator.rootDir=/xx/yy")))),(0,r.kt)("h2",{id:"outputsaver"},"OutputSaver"),(0,r.kt)("p",null,"Holder for the final generated data. Currently two savers local and null are implemented."),(0,r.kt)("p",null,"local saves the file to the local directory. null does nothing. local is the saver used by default, and the general generation task uses local. For those who only want to verify the configuration table and do not want to generate any data, using the null saver can achieve this goal."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Some examples of common build commands are shown below. For more examples, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects"},"luban_examples/Projects"),"."),(0,r.kt)("p",null,"###unity + c# + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_bin"},"Csharp_Unity_bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c cs-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=Assets/Gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n")),(0,r.kt)("h3",{id:"unity--c--json"},"unity + c# + json"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_json"},"Csharp_Unity_json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset GEN_CLIENT=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %GEN_CLIENT% ^\n    -t all ^\n    -c cs-simple-json ^\n    -d json  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=Assets/Gen ^\n    -x outputDataDir=..\\GenerateDatas\\json ^\n    -x pathValidator.rootDir=D:\\workspace2\\luban_examples\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@D:\\workspace2\\luban_examples\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n\n")),(0,r.kt)("h3",{id:"dotnet--c--bin"},"dotnet + c# + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_DotNet_bin"},"Csharp_DotNet_bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c cs-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=Gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n")),(0,r.kt)("h3",{id:"go--bin"},"go + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Go_bin"},"Go_bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c go-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json ^\n    -x lubanGoModule=demo/luban\n\n")),(0,r.kt)("h3",{id:"java--bin"},"java + bin"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Java_bin"},"Java_bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c java-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x outputCodeDir=src/main/gen ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n")),(0,r.kt)("h3",{id:"used-to-curate-and-check-configuration-without-generating-any-code-and-files"},"Used to curate and check configuration without generating any code and files"),(0,r.kt)("p",null,"Example project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/DesignerConfigs"},"ConfigCheck"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"set WORKSPACE=..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json ^\n    -x forceLoadDatas=1\n")),(0,r.kt)("h3",{id:"simultaneously-generate-cs-bin-and-java-bin-code"},"Simultaneously generate cs-bin and java-bin code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"\nset WORKSPACE=..\\..\n\nset LUBAN_DLL=%WORKSPACE%\\Tools\\Luban\\Luban.dll\nset CONF_ROOT=%WORKSPACE%\\DesignerConfigs\n\ndotnet %LUBAN_DLL% ^\n    -t all ^\n    -c cs-bin ^\n    -c java-bin ^\n    -d bin  ^\n    --schemaPath %CONF_ROOT%\\Defines\\__root__.xml ^\n    -x inputDataDir=%CONF_ROOT%\\Datas ^\n    -x cs-bin.outputCodeDir=cs_output_path ^\n    -x java-bin.outputCodeDir=java_output_path ^\n    -x outputDataDir=..\\GenerateDatas\\bytes ^\n    -x pathValidator.rootDir=%WORKSPACE%\\Projects\\Csharp_Unity_bin ^\n    -x l10n.textProviderFile=*@%WORKSPACE%\\DesignerConfigs\\Datas\\l10n\\texts.json\n\n")))}m.isMDXComponent=!0}}]);