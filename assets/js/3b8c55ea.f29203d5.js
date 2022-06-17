"use strict";(self.webpackChunkreact_native_pdf_extractor_docs=self.webpackChunkreact_native_pdf_extractor_docs||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Installation",u={unversionedId:"installation",id:"installation",title:"Installation",description:"Requirements",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/react-native-pdf-extractor/docs/installation",draft:!1,editUrl:"https://github.com/1fabiopereira/react-native-pdf-extractor/edit/master/website/docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Before you start",permalink:"/react-native-pdf-extractor/docs/before-you-start"},next:{title:"Configuration",permalink:"/react-native-pdf-extractor/docs/configuration"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"NPM or Yarn",id:"npm-or-yarn",level:2},{value:"Autolinking installation",id:"autolinking-installation",level:2},{value:"Work in progress",id:"work-in-progress",level:4},{value:"Manual installation",id:"manual-installation",level:2},{value:"settings.gradle",id:"settingsgradle",level:3},{value:"MainApplication.java",id:"mainapplicationjava",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Working in progress",id:"working-in-progress",level:4}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node >= 8"),(0,o.kt)("li",{parentName:"ul"},"React Native >= 0.51")),(0,o.kt)("h2",{id:"npm-or-yarn"},"NPM or Yarn"),(0,o.kt)("p",null,"To install ",(0,o.kt)("strong",{parentName:"p"},"react-native-pdf-extractor")," you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-pdf-extractor\n")),(0,o.kt)("p",null,"or "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-native-pdf-extractor\n")),(0,o.kt)("h2",{id:"autolinking-installation"},"Autolinking installation"),(0,o.kt)("p",null,"If you're using RN 0.60 or higher, you can benefit from autolinking for some of installation steps. We are working to make ",(0,o.kt)("strong",{parentName:"p"},"react-native-pdf-extractor")," compatible, but at moment you just only can use manual installation."),(0,o.kt)("h4",{id:"work-in-progress"},"Work in progress"),(0,o.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,o.kt)("h3",{id:"settingsgradle"},"settings.gradle"),(0,o.kt)("p",null,"On your ",(0,o.kt)("inlineCode",{parentName:"p"},"android/settings.gradle")," file you need to add the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"include ':reactnativepdfextractor'\nproject(':reactnativepdfextractor').projectDir = new File(rootProject.projectDir, '../../android')\n\n")),(0,o.kt)("h3",{id:"mainapplicationjava"},"MainApplication.java"),(0,o.kt)("p",null,"On ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/java/<your-project-package>/MainApplication.java")," file you need add the following line on method ",(0,o.kt)("inlineCode",{parentName:"p"},"getPackages"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"packages.add(new PdfExtractorPackage());\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"working-in-progress"},"Working in progress"))}f.isMDXComponent=!0}}]);