"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?o.createElement(f,r(r({ref:t},u),{},{components:a})):o.createElement(f,r({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const i={},r="design philosophy",s={unversionedId:"manual/architecture",id:"manual/architecture",title:"design philosophy",description:"In most people's minds, the implementation of configuration tools should be very simple. In fact, you can implement a simple configuration tool with a few hundred lines of code, but it is only usable and far from meeting the various requirements of the configuration workflow in actual game projects.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/architecture.md",sourceDirName:"manual",slug:"/manual/architecture",permalink:"/en/docs/manual/architecture",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/en/docs/basic"},next:{title:"Features",permalink:"/en/docs/manual/traits"}},l={},c=[{value:"complete type system",id:"complete-type-system",level:2},{value:"DDP pipeline",id:"ddp-pipeline",level:2},{value:"Enhanced support for excel format",id:"enhanced-support-for-excel-format",level:2},{value:"Performance and cross-platform",id:"performance-and-cross-platform",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"design-philosophy"},"design philosophy"),(0,n.kt)("p",null,"In most people's minds, the implementation of configuration tools should be very simple. In fact, you can implement a simple configuration tool with a few hundred lines of code, but it is only usable and far from meeting the various requirements of the configuration workflow in actual game projects.\nThe basic goal of Luban design at the beginning is to meet the needs of at least heavy projects like open world MMORPG, so it must solve the common pain points in large projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Although some data tables are also written in excel, they have more complex data formats, and these complex data need to be elegantly configured in excel"),(0,n.kt)("li",{parentName:"ul"},"Complicated logic such as skills, AI, and replicas are not suitable for filling in excel, and must be able to handle such non-excel formats"),(0,n.kt)("li",{parentName:"ul"},"It must be able to treat traditional standard tables (row lists like excel) and non-standard tables (skills, AI, etc.) in a unified manner, instead of introducing multiple sets of configuration schemes"),(0,n.kt)("li",{parentName:"ul"},"There are a lot of fields like prop id and resource path in the configuration. The tool needs to be able to check for data errors in advance, rather than waiting until the program is running to find out."),(0,n.kt)("li",{parentName:"ul"},"It should be able to directly generate the code related to the configuration structure, instead of letting the front-end and back-end programmers write the analysis once, such work is time-consuming, laborious and error-prone"),(0,n.kt)("li",{parentName:"ul"},"It should support an efficient export format, and it should also support the use of easy-to-read export file types such as json during development"),(0,n.kt)("li",{parentName:"ul"},"The generation should be fast, try to complete it in seconds, instead of taking 30 seconds or even longer"),(0,n.kt)("li",{parentName:"ul"},"Can run cross-platform, that is, it can work on windows, linux, macOS")),(0,n.kt)("p",null,"In a nutshell, a mature configuration tool that can be widely used in various types of games must support rich data source formats, have strong data expression capabilities (this is the basis for parsing and generating code and data), and contain rich data The verification mechanism can support a variety of common game languages, and can export a variety of data formats, and the generation is as fast as lightning. In addition, since it is impossible to fully meet all project requirements, it is also required to have a clear design, facilitate secondary development, and customize a unique configuration tool for the project."),(0,n.kt)("h2",{id:"complete-type-system"},"complete type system"),(0,n.kt)("p",null,"A very hard-to-recognize fact is that the ",(0,n.kt)("strong",{parentName:"p"},"type system (data structure) is the core of the configuration tool"),"."),(0,n.kt)("p",null,"The importance of the type system to the configuration tool is similar to the status of the CPU in the computer. Most configuration tools only have a simple concept of type system and data structure (such as only supporting table structure), and the table header is their only data structure, so they lack powerful and flexible data expression capabilities. This makes them incapable of handling complex configuration formats, forcing developers to use all kinds of tricks to express and configure data."),(0,n.kt)("p",null,"A weak configuration tool, the root of the defect lies in premature coupling with formats such as xlsx. Just imagine, if there is no strong data expression ability, even if complex data can be configured, how to parse them, which means that the complex data appearing in the configuration will be unknowable data. At this time, the tool can only do These data are treated as generic string or binary stream data. There is no way to perform follow-up processing on them, no data verification (you don\u2019t even know what data type it is, where to start with verification), let alone generate code, and also cannot generate efficient data."),(0,n.kt)("p",null,"Breaking away from the specification table restrictions of excel's row and column constraints, and having a complete type system, it is natural to find that it is a matter of course to support various types of source data formats. Because what you have to do is to parse the data from this type of file according to the table definition! Therefore, it is very simple to extend the data source from excel to json, xml, yaml, lua, and it is extremely easy to expand new data sources."),(0,n.kt)("p",null,"With a powerful type system and support for rich source data formats, the complex configuration problems encountered in large-scale game projects are also easily solved. No matter how complicated the game configuration is, it can be easily expressed with a powerful type system, and then these configurations can be processed, no matter what form they are saved in (complex configurations are often in non-excel format), because at most it is just a new source Just the data format."),(0,n.kt)("p",null,"After perfectly solving complex data such as dungeons, skills, and AI, unifying the configuration of most modules in the game is a matter of course. Programmers no longer need to use multiple methods to manage game configuration, and the code has become more standardized, unified and elegant."),(0,n.kt)("p",null,"Before the unified configuration, if the skill table id generated by an editor is referenced in the excel table, it is often difficult to verify. After the game configuration is unified, work such as data verification of various configurations of the game can also be handled uniformly."),(0,n.kt)("p",null,"With a unified data expression and processing method, all data can share an efficient output format. Prior to this, it was impossible for game configurations saved in json format, such as skills, to properly group the data into front-end and back-end data, and then convert it into an efficient binary format, because it would consume a lot of programmer development time. Most projects cannot handle such things finely, resulting in loading json format data at runtime, which is a considerable waste of space and time!"),(0,n.kt)("p",null,"With a unified data expression method, the code for loading and expressing all configurations can be automatically generated. Programmers can also be completely freed from the mechanical work of manually configuring and loading code. This kind of thing is too error-prone and a waste of time!"),(0,n.kt)("p",null,"Looking back at the entire derivation process, you may understand this point more deeply: ",(0,n.kt)("strong",{parentName:"p"},"The core and source of Luban's powerful capabilities come from a complete type system"),"."),(0,n.kt)("h2",{id:"ddp-pipeline"},"DDP pipeline"),(0,n.kt)("p",null,"We have continuously summarized the development experience of configuration tools from years of large-scale project development practice, and finally abstracted the design of Data Process Pipeline (DPP), as shown in the figure below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pipeline",src:a(1296).Z,width:"946",height:"868"})),(0,n.kt)("p",null,"The DPP pipeline is the basis of Luban's powerful features and expansion capabilities. Each part of the process can be flexibly expanded or modified to meet various complex needs of the project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The schema processing module can adapt to various special agreed configuration items, and developers can customize the usage agreements of configuration projects according to their own preferences"),(0,n.kt)("li",{parentName:"ul"},"The data loading module can process a variety of source data files and parse them into a unified format, which is convenient for subsequent stages of processing"),(0,n.kt)("li",{parentName:"ul"},"The data verification module supports rich data verification methods, and finds problems as much as possible before the configuration is submitted"),(0,n.kt)("li",{parentName:"ul"},"The code generation module can support rich code languages, and the new language support does not affect other implementations"),(0,n.kt)("li",{parentName:"ul"},"The data generation module can support rich output formats, perfect for various special and high-performance occasions"),(0,n.kt)("li",{parentName:"ul"},"Code post-processing module to facilitate code formatting"),(0,n.kt)("li",{parentName:"ul"},"Data post-processing module to facilitate the realization of functions such as json compact"),(0,n.kt)("li",{parentName:"ul"},"The output file module can not only support traditional file output, but also customize the output to zip or output to the database")),(0,n.kt)("p",null,"The Luban.Core project contains all the core mechanisms of Luban and provides an extremely flexible extension mechanism. Based on this, Luban.XXX.Buitin and extension projects in various languages or formats constitute the current rich features of Luban. "),(0,n.kt)("p",null,"Based on Luban.Core, you can customize features that are completely different from standard Luban. It can be said with great confidence that Luban is currently the most feature-rich and scalable configuration solution. Even with features that are completely different from standard Luban, ",(0,n.kt)("strong",{parentName:"p"},"Luban is the best starting point for your custom configuration tools"),"."),(0,n.kt)("p",null,"It provides a very general and powerful core and implements a large number of trivial functions. You only need to make a configuration solution that perfectly meets your needs without making too complicated modifications on this basis."),(0,n.kt)("h2",{id:"enhanced-support-for-excel-format"},"Enhanced support for excel format"),(0,n.kt)("p",null,"Although Luban supports extremely rich source data types, the vast majority (more than 80%) of configurations in practical projects are edited in excel. The root of this matter is that the data that drives most game logic is still standardized and consistent, and it is most reasonable for these game configurations to be read, edited, and saved in table form. This is determined by the characteristics of the data and cannot be controlled by planning preferences."),(0,n.kt)("p",null,"Most excel table configurations are indeed very standardized and simple, but it is common to encounter tables with data complexity between simple tables and GamePlay tables (such as skills). Examples include enumerations, lists, lists of structures, polymorphism (structures like Shape), and more complex nested structures. These tables are not so complicated that they need to be expressed with special editors and json, but they do bring a lot of trouble to the design of matching tables."),(0,n.kt)("p",null,"Thanks to a complete type system, Luban can naturally configure any complex data in Excel. All it needs to do is how to make the work of configuring complex data more intuitive and easy to use. After our careful design, it is basically realized that moderately complex data structures can be configured in excel elegantly and concisely. An obvious improvement brought about is that programmers and planners no longer have to worry about using various tricks and redundant mechanisms to configure data. They only need to formulate the data structure according to the game logic, and then choose an appropriate way to use it. Just configure it. In actual projects, most of the time the data structure and the final configuration method are very satisfactory to the program and planning. This greatly reduces the mental burden of developers, especially developers with code cleanliness!"),(0,n.kt)("p",null,"Another obscure but noticeable improvement in practice is that due to Luban\u2019s powerful configuration expression ability, planning and procedures will gradually develop the habit of designing an elegant structure first, and then filling in the form, which virtually promotes the configuration of the entire project to be more efficient. Standardize and unify. For example structs like rewards are public structs"),(0,n.kt)("p",null,"After Luban supports custom structures, the reward structures in each table are unified. Before this kind of support, it often appeared that the reward definition of each table was willful and arbitrary, which was very ugly and had a great impact on the development of the program."),(0,n.kt)("h2",{id:"performance-and-cross-platform"},"Performance and cross-platform"),(0,n.kt)("p",null,"Although python is suitable for developing such tools, its own inefficiency and inability to support concurrency well make it difficult to handle the massive configuration data of large-scale projects. Luban chooses to use C# language to develop, based on the cross-platform capability and powerful performance of .net core, it solves the problem of cross-platform and performance from the root."),(0,n.kt)("p",null,"Due to its many features, Luban itself is also a medium-scale project. Based on a strongly typed language like C#, code refactoring becomes much easier."))}p.isMDXComponent=!0},1296:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pipeline-0c712820bc26a780dc8a354979b378d1.jpg"}}]);