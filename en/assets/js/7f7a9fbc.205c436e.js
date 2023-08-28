"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},l="Editor support",i={unversionedId:"manual/editor",id:"manual/editor",title:"Editor support",description:"GamePlay-related functions often require a custom editor, and the data of a custom editor is often recorded in units, and the data structure is relatively complex, and each record is saved as a separate json file. luban supports this type of editor workflow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/manual/editor.md",sourceDirName:"manual",slug:"/manual/editor",permalink:"/en/docs/manual/editor",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Generate relevant parameters",id:"generate-relevant-parameters",level:2},{value:"generate",id:"generate",level:2},{value:"Unity",id:"unity",level:2},{value:"UE4",id:"ue4",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"editor-support"},"Editor support"),(0,a.kt)("p",null,"GamePlay-related functions often require a custom editor, and the data of a custom editor is often recorded in units, and the data structure is relatively complex, and each record is saved as a separate json file. luban supports this type of editor workflow."),(0,a.kt)("p",null,"Luban generates the code used by the editor to read and write the json file of the record. Editor developers only need to use the Load and Save functions to load and save the record as a json file that conforms to the Luban parser configuration rules."),(0,a.kt)("h2",{id:"generate-relevant-parameters"},"Generate relevant parameters"),(0,a.kt)("p",null,"The default namespace of the generated editor code class is \"editor.\" + topmodule . This default value can be modified by option 'editor.topmodule' in the root definition file, for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<root>\n     <topmodule name="cfg"/>\n     <option name="editor.topmodule" value="MyEditorConfig"/>\n</root>\n')),(0,a.kt)("h2",{id:"generate"},"generate"),(0,a.kt)("p",null,"The code generated by luban for the editor is very different from the code used for the project runtime, with the following key differences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Table code will not be generated. Because the editor generally operates data in units of records, there is no need to generate codes for table loading and saving."),(0,a.kt)("li",{parentName:"ul"},"Tables code will not be generated. Because there is no such need."),(0,a.kt)("li",{parentName:"ul"},"Generate additional metadata for enum xxx_Metadata class, which defines the metadata of all enum enumeration items"),(0,a.kt)("li",{parentName:"ul"},"The generated bean code contains ToJson and FromJson functions"),(0,a.kt)("li",{parentName:"ul"},"The datetime type corresponds to the string type, and the text corresponds to the EditorText class")),(0,a.kt)("h2",{id:"unity"},"Unity"),(0,a.kt)("p",null,"Take --gen_types code_cs_unity_editor_json to generate it."),(0,a.kt)("p",null,"Refer to the example project ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_Unity_Editor_json"},"Csharp_Unity_Editor_json")),(0,a.kt)("p",null,"An example of use is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// load\nvar skill = new editor. skill. Skill();\nskill.LoadJsonFile("10001.json");\nUnityEngine.Debug.Log("skill id:{0}, name:{1}", skill.Id, skill.Name);\n\n// save\nvar skill = new editor. skill. Skill();\nskill.Id = 10001;\nskill.Name = "attack";\nskill.SaveJsonFile("10001.json");\n')),(0,a.kt)("h2",{id:"ue4"},"UE4"),(0,a.kt)("p",null,"Take --gen_types code_cpp_ue_editor_json."),(0,a.kt)("p",null,"Not yet rigorously tested. Wait until there is actual demand and then test."))}p.isMDXComponent=!0}}]);