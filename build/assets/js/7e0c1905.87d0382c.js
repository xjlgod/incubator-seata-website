"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[3645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},C="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),C=l(n),m=r,d=C["".concat(s,".").concat(m)]||C[m]||u[m]||o;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[C]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u6df1\u5ea6\u5256\u6790 Seata TCC \u6a21\u5f0f\uff08\u4e00\uff09",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001TCC"],description:"Seata \u76ee\u524d\u652f\u6301 AT \u6a21\u5f0f\u3001XA \u6a21\u5f0f\u3001TCC \u6a21\u5f0f\u548c SAGA \u6a21\u5f0f\uff0c\u4e4b\u524d\u6587\u7ae0\u66f4\u591a\u8c08\u53ca\u7684\u662f\u975e\u4fb5\u5165\u5f0f\u7684 AT \u6a21\u5f0f\uff0c\u4eca\u5929\u5e26\u5927\u5bb6\u8ba4\u8bc6\u4e00\u4e0b\u540c\u6837\u662f\u4e8c\u9636\u6bb5\u63d0\u4ea4\u7684 TCC \u6a21\u5f0f\u3002",date:"2022/01/18"},c="\u524d\u8a00",i={permalink:"/blog/seata-tcc",source:"@site/blog/seata-tcc.md",title:"\u6df1\u5ea6\u5256\u6790 Seata TCC \u6a21\u5f0f\uff08\u4e00\uff09",description:"Seata \u76ee\u524d\u652f\u6301 AT \u6a21\u5f0f\u3001XA \u6a21\u5f0f\u3001TCC \u6a21\u5f0f\u548c SAGA \u6a21\u5f0f\uff0c\u4e4b\u524d\u6587\u7ae0\u66f4\u591a\u8c08\u53ca\u7684\u662f\u975e\u4fb5\u5165\u5f0f\u7684 AT \u6a21\u5f0f\uff0c\u4eca\u5929\u5e26\u5927\u5bb6\u8ba4\u8bc6\u4e00\u4e0b\u540c\u6837\u662f\u4e8c\u9636\u6bb5\u63d0\u4ea4\u7684 TCC \u6a21\u5f0f\u3002",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[],readingTime:14.805,hasTruncateMarker:!1,authors:[{name:"\u5f20\u4e58\u8f89"}],frontMatter:{title:"\u6df1\u5ea6\u5256\u6790 Seata TCC \u6a21\u5f0f\uff08\u4e00\uff09",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001TCC"],description:"Seata \u76ee\u524d\u652f\u6301 AT \u6a21\u5f0f\u3001XA \u6a21\u5f0f\u3001TCC \u6a21\u5f0f\u548c SAGA \u6a21\u5f0f\uff0c\u4e4b\u524d\u6587\u7ae0\u66f4\u591a\u8c08\u53ca\u7684\u662f\u975e\u4fb5\u5165\u5f0f\u7684 AT \u6a21\u5f0f\uff0c\u4eca\u5929\u5e26\u5927\u5bb6\u8ba4\u8bc6\u4e00\u4e0b\u540c\u6837\u662f\u4e8c\u9636\u6bb5\u63d0\u4ea4\u7684 TCC \u6a21\u5f0f\u3002",date:"2022/01/18"},prevItem:{title:"\u963f\u91cc Seata \u65b0\u7248\u672c\u7ec8\u4e8e\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898",permalink:"/blog/seata-tcc-fence"},nextItem:{title:"\u8be6\u89e3 Seata AT \u6a21\u5f0f\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u4e0e\u5168\u5c40\u9501\u8bbe\u8ba1",permalink:"/blog/seata-at-lock"}},s={authorsImageUrls:[void 0]},l=[{value:"\u8d44\u6e90\u89e3\u6790",id:"\u8d44\u6e90\u89e3\u6790",level:2},{value:"\u8d44\u6e90\u7ba1\u7406",id:"\u8d44\u6e90\u7ba1\u7406",level:2},{value:"\u4e8b\u52a1\u5904\u7406",id:"\u4e8b\u52a1\u5904\u7406",level:2},{value:"\u5982\u4f55\u5904\u7406\u7a7a\u56de\u6eda",id:"\u5982\u4f55\u5904\u7406\u7a7a\u56de\u6eda",level:2},{value:"\u5982\u4f55\u5904\u7406\u5e42\u7b49",id:"\u5982\u4f55\u5904\u7406\u5e42\u7b49",level:2},{value:"\u5982\u4f55\u5904\u7406\u60ac\u6302",id:"\u5982\u4f55\u5904\u7406\u60ac\u6302",level:2}],p={toc:l},C="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(C,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Seata \u76ee\u524d\u652f\u6301 AT \u6a21\u5f0f\u3001XA \u6a21\u5f0f\u3001TCC \u6a21\u5f0f\u548c SAGA \u6a21\u5f0f\uff0c\u4e4b\u524d\u6587\u7ae0\u66f4\u591a\u8c08\u53ca\u7684\u662f\u975e\u4fb5\u5165\u5f0f\u7684 AT \u6a21\u5f0f\uff0c\u4eca\u5929\u5e26\u5927\u5bb6\u8ba4\u8bc6\u4e00\u4e0b\u540c\u6837\u662f\u4e8c\u9636\u6bb5\u63d0\u4ea4\u7684 TCC \u6a21\u5f0f\u3002"),(0,r.kt)("h1",{id:"\u4ec0\u4e48\u662f-tcc"},"\u4ec0\u4e48\u662f TCC"),(0,r.kt)("p",null,"TCC \u662f\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\u7684\u4e8c\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\uff0c\u5b83\u7684\u5168\u79f0\u4e3a Try-Confirm-Cancel\uff0c\u5373\u8d44\u6e90\u9884\u7559\uff08Try\uff09\u3001\u786e\u8ba4\u64cd\u4f5c\uff08Confirm\uff09\u3001\u53d6\u6d88\u64cd\u4f5c\uff08Cancel\uff09\uff0c\u4ed6\u4eec\u7684\u5177\u4f53\u542b\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Try\uff1a\u5bf9\u4e1a\u52a1\u8d44\u6e90\u7684\u68c0\u67e5\u5e76\u9884\u7559\uff1b"),(0,r.kt)("li",{parentName:"ol"},"Confirm\uff1a\u5bf9\u4e1a\u52a1\u5904\u7406\u8fdb\u884c\u63d0\u4ea4\uff0c\u5373 commit \u64cd\u4f5c\uff0c\u53ea\u8981 Try \u6210\u529f\uff0c\u90a3\u4e48\u8be5\u6b65\u9aa4\u4e00\u5b9a\u6210\u529f\uff1b"),(0,r.kt)("li",{parentName:"ol"},"Cancel\uff1a\u5bf9\u4e1a\u52a1\u5904\u7406\u8fdb\u884c\u53d6\u6d88\uff0c\u5373\u56de\u6eda\u64cd\u4f5c\uff0c\u8be5\u6b65\u9aa4\u56de\u5bf9 Try \u9884\u7559\u7684\u8d44\u6e90\u8fdb\u884c\u91ca\u653e\u3002")),(0,r.kt)("p",null,"TCC \u662f\u4e00\u79cd\u4fb5\u5165\u5f0f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u4e0a\u4e09\u4e2a\u64cd\u4f5c\u90fd\u9700\u8981\u4e1a\u52a1\u7cfb\u7edf\u81ea\u884c\u5b9e\u73b0\uff0c\u5bf9\u4e1a\u52a1\u7cfb\u7edf\u6709\u7740\u975e\u5e38\u5927\u7684\u5165\u4fb5\u6027\uff0c\u8bbe\u8ba1\u76f8\u5bf9\u590d\u6742\uff0c\u4f46\u4f18\u70b9\u662f TCC\n\u5b8c\u5168\u4e0d\u4f9d\u8d56\u6570\u636e\u5e93\uff0c\u80fd\u591f\u5b9e\u73b0\u8de8\u6570\u636e\u5e93\u3001\u8de8\u5e94\u7528\u8d44\u6e90\u7ba1\u7406\uff0c\u5bf9\u8fd9\u4e9b\u4e0d\u540c\u6570\u636e\u8bbf\u95ee\u901a\u8fc7\u4fb5\u5165\u5f0f\u7684\u7f16\u7801\u65b9\u5f0f\u5b9e\u73b0\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\uff0c\u66f4\u597d\u5730\u89e3\u51b3\u4e86\u5728\u5404\u79cd\u590d\u6742\u4e1a\u52a1\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116160157.png",alt:null})),(0,r.kt)("h1",{id:"seata-tcc-\u6a21\u5f0f"},"Seata TCC \u6a21\u5f0f"),(0,r.kt)("p",null,"Seata TCC \u6a21\u5f0f\u8ddf\u901a\u7528\u578b TCC \u6a21\u5f0f\u539f\u7406\u4e00\u81f4\uff0c\u6211\u4eec\u5148\u6765\u4f7f\u7528 Seata TCC \u6a21\u5f0f\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\uff1a"),(0,r.kt)("p",null,"\u5047\u8bbe\u73b0\u6709\u4e00\u4e2a\u4e1a\u52a1\u9700\u8981\u540c\u65f6\u4f7f\u7528\u670d\u52a1 A \u548c\u670d\u52a1 B \u5b8c\u6210\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\uff0c\u6211\u4eec\u5728\u670d\u52a1 A \u5b9a\u4e49\u8be5\u670d\u52a1\u7684\u4e00\u4e2a TCC \u63a5\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccActionOne {\n    @TwoPhaseBusinessAction(name = "DubboTccActionOne", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n\n    public boolean commit(BusinessActionContext actionContext);\n\n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u5728\u670d\u52a1 B \u5b9a\u4e49\u8be5\u670d\u52a1\u7684\u4e00\u4e2a TCC \u63a5\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccActionTwo {\n    @TwoPhaseBusinessAction(name = "DubboTccActionTwo", commitMethod = "commit", rollbackMethod = "rollback")\n    public void prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "b") String b);\n\n    public void commit(BusinessActionContext actionContext);\n\n    public void rollback(BusinessActionContext actionContext);\n}\n')),(0,r.kt)("p",null,"\u5728\u4e1a\u52a1\u6240\u5728\u7cfb\u7edf\u4e2d\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\u5e76\u6267\u884c\u670d\u52a1 A \u548c\u670d\u52a1 B \u7684 TCC \u9884\u7559\u8d44\u6e90\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GlobalTransactional\npublic String doTransactionCommit(){\n    //\u670d\u52a1A\u4e8b\u52a1\u53c2\u4e0e\u8005\n    tccActionOne.prepare(null,"one");\n    //\u670d\u52a1B\u4e8b\u52a1\u53c2\u4e0e\u8005\n    tccActionTwo.prepare(null,"two");\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u4f7f\u7528 Seata TCC \u6a21\u5f0f\u5b9e\u73b0\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u770b\u51fa\uff0cTCC \u6a21\u5f0f\u540c\u6837\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," \u6ce8\u89e3\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u800c\u670d\u52a1 A \u548c\u670d\u52a1 B \u7684 TCC \u63a5\u53e3\u4e3a\u4e8b\u52a1\u53c2\u4e0e\u8005\uff0cSeata \u4f1a\u628a\u4e00\u4e2a TCC\n\u63a5\u53e3\u5f53\u6210\u4e00\u4e2a Resource\uff0c\u4e5f\u53eb TCC Resource\u3002"),(0,r.kt)("p",null,"TCC \u63a5\u53e3\u53ef\u4ee5\u662f RPC\uff0c\u4e5f\u53ef\u4ee5\u662f JVM \u5185\u90e8\u8c03\u7528\uff0c\u610f\u5473\u7740\u4e00\u4e2a TCC \u63a5\u53e3\uff0c\u4f1a\u6709\u53d1\u8d77\u65b9\u548c\u8c03\u7528\u65b9\u4e24\u4e2a\u8eab\u4efd\uff0c\u4ee5\u4e0a\u4f8b\u5b50\uff0cTCC \u63a5\u53e3\u5728\u670d\u52a1 A \u548c\u670d\u52a1 B \u4e2d\u662f\u53d1\u8d77\u65b9\uff0c\u5728\u4e1a\u52a1\u6240\u5728\u7cfb\u7edf\u4e2d\u662f\u8c03\u7528\u65b9\u3002\u5982\u679c\u8be5 TCC \u63a5\u53e3\u4e3a Dubbo\nRPC\uff0c\u90a3\u4e48\u8c03\u7528\u65b9\u5c31\u662f\u4e00\u4e2a dubbo:reference\uff0c\u53d1\u8d77\u65b9\u5219\u662f\u4e00\u4e2a dubbo:service\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116161933.png",alt:null})),(0,r.kt)("p",null,"Seata \u542f\u52a8\u65f6\u4f1a\u5bf9 TCC \u63a5\u53e3\u8fdb\u884c\u626b\u63cf\u5e76\u89e3\u6790\uff0c\u5982\u679c TCC \u63a5\u53e3\u662f\u4e00\u4e2a\u53d1\u5e03\u65b9\uff0c\u5219\u5728 Seata \u542f\u52a8\u65f6\u4f1a\u5411 TC \u6ce8\u518c TCC Resource\uff0c\u6bcf\u4e2a TCC Resource \u90fd\u6709\u4e00\u4e2a\u8d44\u6e90 ID\uff1b\u5982\u679c TCC\n\u63a5\u53e3\u65f6\u4e00\u4e2a\u8c03\u7528\u65b9\uff0cSeata \u4ee3\u7406\u8c03\u7528\u65b9\uff0c\u4e0e AT \u6a21\u5f0f\u4e00\u6837\uff0c\u4ee3\u7406\u4f1a\u62e6\u622a TCC \u63a5\u53e3\u7684\u8c03\u7528\uff0c\u5373\u6bcf\u6b21\u8c03\u7528 Try \u65b9\u6cd5\uff0c\u4f1a\u5411 TC \u6ce8\u518c\u4e00\u4e2a\u5206\u652f\u4e8b\u52a1\uff0c\u63a5\u7740\u624d\u6267\u884c\u539f\u6765\u7684 RPC \u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u5f53\u5168\u5c40\u4e8b\u52a1\u51b3\u8bae\u63d0\u4ea4/\u56de\u6eda\u65f6\uff0cTC \u4f1a\u901a\u8fc7\u5206\u652f\u6ce8\u518c\u7684\u7684\u8d44\u6e90 ID \u56de\u8c03\u5230\u5bf9\u5e94\u53c2\u4e0e\u8005\u670d\u52a1\u4e2d\u6267\u884c TCC Resource \u7684 Confirm/Cancel \u65b9\u6cd5\u3002"),(0,r.kt)("h1",{id:"seata-\u5982\u4f55\u5b9e\u73b0-tcc-\u6a21\u5f0f"},"Seata \u5982\u4f55\u5b9e\u73b0 TCC \u6a21\u5f0f"),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684 Seata TCC \u6a21\u578b\u53ef\u4ee5\u770b\u51fa\uff0cTCC \u6a21\u5f0f\u5728 Seata \u4e2d\u4e5f\u662f\u9075\u5faa TC\u3001TM\u3001RM \u4e09\u79cd\u89d2\u8272\u6a21\u578b\u7684\uff0c\u5982\u4f55\u5728\u8fd9\u4e09\u79cd\u89d2\u8272\u6a21\u578b\u4e2d\u5b9e\u73b0 TCC \u6a21\u5f0f\u5462\uff1f\u6211\u5c06\u5176\u4e3b\u8981\u5b9e\u73b0\u5f52\u7eb3\u4e3a\u8d44\u6e90\u89e3\u6790\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u4e8b\u52a1\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u8d44\u6e90\u89e3\u6790"},"\u8d44\u6e90\u89e3\u6790"),(0,r.kt)("p",null,"\u8d44\u6e90\u89e3\u6790\u5373\u662f\u628a TCC \u63a5\u53e3\u8fdb\u884c\u89e3\u6790\u5e76\u6ce8\u518c\uff0c\u524d\u9762\u8bf4\u8fc7\uff0cTCC \u63a5\u53e3\u53ef\u4ee5\u662f RPC\uff0c\u4e5f\u53ef\u4ee5\u662f JVM \u5185\u90e8\u8c03\u7528\uff0c\u5728 Seata TCC \u6a21\u5757\u6709\u4e2d\u4e00\u4e2a remoting\n\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u4e13\u95e8\u7528\u4e8e\u89e3\u6790\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"TwoPhaseBusinessAction")," \u6ce8\u89e3\u7684 TCC \u63a5\u53e3\u8d44\u6e90\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116175059.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RemotingParser")," \u63a5\u53e3\u4e3b\u8981\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"isRemoting"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"isReference"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"isService"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"getServiceDesc")," \u7b49\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u7684\u5b9e\u73b0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultRemotingParser"),"\uff0c\u5176\u4f59\u5404\u81ea\u7684\nRPC \u534f\u8bae\u89e3\u6790\u7c7b\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultRemotingParser")," \u4e2d\u6267\u884c\uff0cSeata \u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u4e86\u5bf9 Dubbo\u3001HSF\u3001SofaRpc\u3001LocalTCC \u7684 RPC \u534f\u8bae\u7684\u89e3\u6790\uff0c\u540c\u65f6\u5177\u5907 SPI \u53ef\u6269\u5c55\u6027\uff0c\u672a\u6765\u6b22\u8fce\u5927\u5bb6\u4e3a\nSeata \u63d0\u4f9b\u66f4\u591a\u7684 RPC \u534f\u8bae\u89e3\u6790\u7c7b\u3002"),(0,r.kt)("p",null,"\u5728 Seata \u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u6709\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalTransactionScanner ")," \u6ce8\u89e3\u8fdb\u884c\u626b\u63cf\uff0c\u4f1a\u6267\u884c\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"io.seata.spring.util.TCCBeanParserUtils#isTccAutoProxy")),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u76ee\u7684\u662f\u5224\u65ad bean \u662f\u5426\u5df2\u88ab TCC \u4ee3\u7406\uff0c\u5728\u8fc7\u7a0b\u4e2d\u4f1a\u5148\u5224\u65ad bean \u662f\u5426\u662f\u4e00\u4e2a Remoting bean\uff0c\u5982\u679c\u662f\u5219\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getServiceDesc")," \u65b9\u6cd5\u5bf9 remoting bean\n\u8fdb\u884c\u89e3\u6790\uff0c\u540c\u65f6\u5224\u65ad\u5982\u679c\u662f\u4e00\u4e2a\u53d1\u8d77\u65b9\uff0c\u5219\u5bf9\u5176\u8fdb\u884c\u8d44\u6e90\u6ce8\u518c\uff1a"),(0,r.kt)("p",null,"io.seata.rm.tcc.remoting.parser.DefaultRemotingParser#parserRemotingServiceInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public RemotingDesc parserRemotingServiceInfo(Object bean,String beanName,RemotingParser remotingParser){\n    RemotingDesc remotingBeanDesc=remotingParser.getServiceDesc(bean,beanName);\n    if(remotingBeanDesc==null){\n    return null;\n    }\n    remotingServiceMap.put(beanName,remotingBeanDesc);\n\n    Class<?> interfaceClass=remotingBeanDesc.getInterfaceClass();\n    Method[]methods=interfaceClass.getMethods();\n    if(remotingParser.isService(bean,beanName)){\n    try{\n    //service bean, registry resource\n    Object targetBean=remotingBeanDesc.getTargetBean();\n    for(Method m:methods){\n    TwoPhaseBusinessAction twoPhaseBusinessAction=m.getAnnotation(TwoPhaseBusinessAction.class);\n    if(twoPhaseBusinessAction!=null){\n    TCCResource tccResource=new TCCResource();\n    tccResource.setActionName(twoPhaseBusinessAction.name());\n    tccResource.setTargetBean(targetBean);\n    tccResource.setPrepareMethod(m);\n    tccResource.setCommitMethodName(twoPhaseBusinessAction.commitMethod());\n    tccResource.setCommitMethod(interfaceClass.getMethod(twoPhaseBusinessAction.commitMethod(),\n    twoPhaseBusinessAction.commitArgsClasses()));\n    tccResource.setRollbackMethodName(twoPhaseBusinessAction.rollbackMethod());\n    tccResource.setRollbackMethod(interfaceClass.getMethod(twoPhaseBusinessAction.rollbackMethod(),\n    twoPhaseBusinessAction.rollbackArgsClasses()));\n    // set argsClasses\n    tccResource.setCommitArgsClasses(twoPhaseBusinessAction.commitArgsClasses());\n    tccResource.setRollbackArgsClasses(twoPhaseBusinessAction.rollbackArgsClasses());\n    // set phase two method\'s keys\n    tccResource.setPhaseTwoCommitKeys(this.getTwoPhaseArgs(tccResource.getCommitMethod(),\n    twoPhaseBusinessAction.commitArgsClasses()));\n    tccResource.setPhaseTwoRollbackKeys(this.getTwoPhaseArgs(tccResource.getRollbackMethod(),\n    twoPhaseBusinessAction.rollbackArgsClasses()));\n    //registry tcc resource\n    DefaultResourceManager.get().registerResource(tccResource);\n    }\n    }\n    }catch(Throwable t){\n    throw new FrameworkException(t,"parser remoting service error");\n    }\n    }\n    if(remotingParser.isReference(bean,beanName)){\n    //reference bean, TCC proxy\n    remotingBeanDesc.setReference(true);\n    }\n    return remotingBeanDesc;\n    }\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u65b9\u6cd5\uff0c\u5148\u8c03\u7528\u89e3\u6790\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"getServiceDesc")," \u65b9\u6cd5\u5bf9 remoting bean \u8fdb\u884c\u89e3\u6790\uff0c\u5e76\u5c06\u89e3\u6790\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"remotingBeanDesc")," \u653e\u5165 \u672c\u5730\u7f13\u5b58 ",(0,r.kt)("inlineCode",{parentName:"p"},"remotingServiceMap"),"\n\u4e2d\uff0c\u540c\u65f6\u8c03\u7528\u89e3\u6790\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"isService")," \u65b9\u6cd5\u5224\u65ad\u662f\u5426\u4e3a\u53d1\u8d77\u65b9\uff0c\u5982\u679c\u662f\u53d1\u8d77\u65b9\uff0c\u5219\u89e3\u6790 ",(0,r.kt)("inlineCode",{parentName:"p"},"TwoPhaseBusinessAction")," \u6ce8\u89e3\u5185\u5bb9\u751f\u6210\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCResource"),"\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u8d44\u6e90\u6ce8\u518c\u3002"),(0,r.kt)("h2",{id:"\u8d44\u6e90\u7ba1\u7406"},"\u8d44\u6e90\u7ba1\u7406"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u8d44\u6e90\u6ce8\u518c")),(0,r.kt)("p",null,"Seata TCC \u6a21\u5f0f\u7684\u8d44\u6e90\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCResource"),"\uff0c\u5176\u8d44\u6e90\u7ba1\u7406\u5668\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCResourceManager"),"\uff0c\u524d\u9762\u8bb2\u8fc7\uff0c\u5f53\u89e3\u6790\u5b8c TCC \u63a5\u53e3 RPC \u8d44\u6e90\u540e\uff0c\u5982\u679c\u662f\u53d1\u8d77\u65b9\uff0c\u5219\u4f1a\u5bf9\u5176\u8fdb\u884c\u8d44\u6e90\u6ce8\u518c\uff1a"),(0,r.kt)("p",null,"io.seata.rm.tcc.TCCResourceManager#registerResource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void registerResource(Resource resource){\n    TCCResource tccResource=(TCCResource)resource;\n    tccResourceCache.put(tccResource.getResourceId(),tccResource);\n    super.registerResource(tccResource);\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TCCResource")," \u5305\u542b\u4e86 TCC \u63a5\u53e3\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u540c\u65f6\u4f1a\u5728\u672c\u5730\u8fdb\u884c\u7f13\u5b58\u3002\u7ee7\u7eed\u8c03\u7528\u7236\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"registerResource")," \u65b9\u6cd5\uff08\u5c01\u88c5\u4e86\u901a\u4fe1\u65b9\u6cd5\uff09\u5411 TC \u6ce8\u518c\uff0cTCC \u8d44\u6e90\u7684 resourceId \u662f\nactionName\uff0cactionName \u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"@TwoParseBusinessAction")," \u6ce8\u89e3\u4e2d\u7684 name\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001\u8d44\u6e90\u63d0\u4ea4/\u56de\u6eda")),(0,r.kt)("p",null,"io.seata.rm.tcc.TCCResourceManager#branchCommit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public BranchStatus branchCommit(BranchType branchType,String xid,long branchId,String resourceId,\n    String applicationData)throws TransactionException{\n    TCCResource tccResource=(TCCResource)tccResourceCache.get(resourceId);\n    if(tccResource==null){\n    throw new ShouldNeverHappenException(String.format("TCC resource is not exist, resourceId: %s",resourceId));\n    }\n    Object targetTCCBean=tccResource.getTargetBean();\n    Method commitMethod=tccResource.getCommitMethod();\n    if(targetTCCBean==null||commitMethod==null){\n    throw new ShouldNeverHappenException(String.format("TCC resource is not available, resourceId: %s",resourceId));\n    }\n    try{\n    //BusinessActionContext\n    BusinessActionContext businessActionContext=getBusinessActionContext(xid,branchId,resourceId,\n    applicationData);\n    // ... ... \n    ret=commitMethod.invoke(targetTCCBean,args);\n    // ... ... \n    return result?BranchStatus.PhaseTwo_Committed:BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }catch(Throwable t){\n    String msg=String.format("commit TCC resource error, resourceId: %s, xid: %s.",resourceId,xid);\n    LOGGER.error(msg,t);\n    return BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }\n    }\n')),(0,r.kt)("p",null,"\u5f53 TM \u51b3\u8bae\u4e8c\u9636\u6bb5\u63d0\u4ea4\uff0cTC \u4f1a\u901a\u8fc7\u5206\u652f\u6ce8\u518c\u7684\u7684\u8d44\u6e90 ID \u56de\u8c03\u5230\u5bf9\u5e94\u53c2\u4e0e\u8005\uff08\u5373 TCC \u63a5\u53e3\u53d1\u8d77\u65b9\uff09\u670d\u52a1\u4e2d\u6267\u884c TCC Resource \u7684 Confirm/Cancel \u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u4f1a\u6839\u636e resourceId \u5728\u672c\u5730\u7f13\u5b58\u627e\u5230\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCResource"),"\uff0c\u540c\u65f6\u6839\u636e xid\u3001branchId\u3001resourceId\u3001applicationData \u627e\u5230\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContext"),"\n\u4e0a\u4e0b\u6587\uff0c\u6267\u884c\u7684\u53c2\u6570\u5c31\u5728\u4e0a\u4e0b\u6587\u4e2d\u3002\u6700\u540e\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCResource")," \u4e2d\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u7684\u65b9\u6cd5\u8fdb\u884c\u4e8c\u9636\u6bb5\u63d0\u4ea4\u3002"),(0,r.kt)("p",null,"\u4e8c\u9636\u6bb5\u56de\u6eda\u540c\u7406\u7c7b\u4f3c\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u52a1\u5904\u7406"},"\u4e8b\u52a1\u5904\u7406"),(0,r.kt)("p",null,"\u524d\u9762\u8bb2\u8fc7\uff0c\u5982\u679c TCC \u63a5\u53e3\u65f6\u4e00\u4e2a\u8c03\u7528\u65b9\uff0c\u5219\u4f1a\u4f7f\u7528 Seata TCC \u4ee3\u7406\u5bf9\u8c03\u7528\u65b9\u8fdb\u884c\u62e6\u622a\u5904\u7406\uff0c\u5e76\u5728\u5904\u7406\u8c03\u7528\u771f\u6b63\u7684 RPC \u65b9\u6cd5\u524d\u5bf9\u5206\u652f\u8fdb\u884c\u6ce8\u518c\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"io.seata.spring.util.TCCBeanParserUtils#isTccAutoProxy"),"\u9664\u4e86\u5bf9 TCC \u63a5\u53e3\u8d44\u6e90\u8fdb\u884c\u89e3\u6790\uff0c\u8fd8\u4f1a\u5224\u65ad TCC \u63a5\u53e3\u662f\u5426\u4e3a\u8c03\u7528\u65b9\uff0c\u5982\u679c\u662f\u8c03\u7528\u65b9\u5219\u8fd4\u56de true\uff1a"),(0,r.kt)("p",null,"io.seata.spring.annotation.GlobalTransactionScanner#wrapIfNecessary"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116192544.png",alt:null})),(0,r.kt)("p",null,"\u5982\u56fe\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalTransactionalScanner")," \u626b\u63cf\u5230 TCC \u63a5\u53e3\u8c03\u7528\u65b9\uff08Reference\uff09\u65f6\uff0c\u4f1a\u4f7f ",(0,r.kt)("inlineCode",{parentName:"p"},"TccActionInterceptor")," \u5bf9\u5176\u8fdb\u884c\u4ee3\u7406\u62e6\u622a\u5904\u7406\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TccActionInterceptor"),"\n\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"MethodInterceptor"),"\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TccActionInterceptor")," \u4e2d\u8fd8\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionInterceptorHandler")," \u7c7b\u578b\u6267\u884c\u62e6\u622a\u5904\u7406\u903b\u8f91\uff0c\u4e8b\u52a1\u76f8\u5173\u5904\u7406\u5c31\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionInterceptorHandler#proceed")," \u65b9\u6cd5\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Object proceed(Method method,Object[]arguments,String xid,TwoPhaseBusinessAction businessAction,\n    Callback<Object> targetCallback)throws Throwable{\n    //Get action context from arguments, or create a new one and then reset to arguments\n    BusinessActionContext actionContext=getOrCreateActionContextAndResetToArguments(method.getParameterTypes(),arguments);\n    //Creating Branch Record\n    String branchId=doTccActionLogStore(method,arguments,businessAction,actionContext);\n    // ... ... \n    try{\n    // ... ...\n    return targetCallback.execute();\n    }finally{\n    try{\n    //to report business action context finally if the actionContext.getUpdated() is true\n    BusinessActionContextUtil.reportContext(actionContext);\n    }finally{\n    // ... ... \n    }\n    }\n    }\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\uff0c\u5728\u6267\u884c TCC \u63a5\u53e3\u4e00\u9636\u6bb5\u4e4b\u524d\uff0c\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"doTccActionLogStore")," \u65b9\u6cd5\u5206\u652f\u6ce8\u518c\uff0c\u540c\u65f6\u8fd8\u4f1a\u5c06 TCC \u76f8\u5173\u4fe1\u606f\u6bd4\u5982\u53c2\u6570\u653e\u7f6e\u5728\u4e0a\u4e0b\u6587\uff0c\u4e0a\u9762\u8bb2\u7684\u8d44\u6e90\u63d0\u4ea4/\u56de\u6eda\u5c31\u4f1a\u7528\u5230\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("h1",{id:"\u5982\u4f55\u63a7\u5236\u5f02\u5e38"},"\u5982\u4f55\u63a7\u5236\u5f02\u5e38"),(0,r.kt)("p",null,"\u5728 TCC \u6a21\u578b\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8fd8\u53ef\u80fd\u4f1a\u51fa\u73b0\u5404\u79cd\u5f02\u5e38\uff0c\u5176\u4e2d\u6700\u4e3a\u5e38\u89c1\u7684\u6709\u7a7a\u56de\u6eda\u3001\u5e42\u7b49\u3001\u60ac\u6302\u7b49\u3002\u4e0b\u9762\u6211\u8bb2\u4e0b Seata \u662f\u5982\u4f55\u5904\u7406\u8fd9\u4e09\u79cd\u5f02\u5e38\u7684\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u5904\u7406\u7a7a\u56de\u6eda"},"\u5982\u4f55\u5904\u7406\u7a7a\u56de\u6eda"),(0,r.kt)("p",null,"\u4ec0\u4e48\u662f\u7a7a\u56de\u6eda\uff1f"),(0,r.kt)("p",null,"\u7a7a\u56de\u6eda\u6307\u7684\u662f\u5728\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\uff0c\u5728\u6ca1\u6709\u8c03\u7528\u53c2\u4e0e\u65b9\u7684 Try \u65b9\u6cd5\u7684\u60c5\u51b5\u4e0b\uff0cTM \u9a71\u52a8\u4e8c\u9636\u6bb5\u56de\u6eda\u8c03\u7528\u4e86\u53c2\u4e0e\u65b9\u7684 Cancel \u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u7a7a\u56de\u6eda\u662f\u5982\u4f55\u4ea7\u751f\u7684\u5462\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116201900.png",alt:null})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5168\u5c40\u4e8b\u52a1\u5f00\u542f\u540e\uff0c\u53c2\u4e0e\u8005 A \u5206\u652f\u6ce8\u518c\u5b8c\u6210\u4e4b\u540e\u4f1a\u6267\u884c\u53c2\u4e0e\u8005\u4e00\u9636\u6bb5 RPC \u65b9\u6cd5\uff0c\u5982\u679c\u6b64\u65f6\u53c2\u4e0e\u8005 A \u6240\u5728\u7684\u673a\u5668\u53d1\u751f\u5b95\u673a\uff0c\u7f51\u7edc\u5f02\u5e38\uff0c\u90fd\u4f1a\u9020\u6210 RPC \u8c03\u7528\u5931\u8d25\uff0c\u5373\u53c2\u4e0e\u8005 A \u4e00\u9636\u6bb5\u65b9\u6cd5\u672a\u6210\u529f\u6267\u884c\uff0c\u4f46\u662f\u6b64\u65f6\u5168\u5c40\u4e8b\u52a1\u5df2\u7ecf\u5f00\u542f\uff0cSeata\n\u5fc5\u987b\u8981\u63a8\u8fdb\u5230\u7ec8\u6001\uff0c\u5728\u5168\u5c40\u4e8b\u52a1\u56de\u6eda\u65f6\u4f1a\u8c03\u7528\u53c2\u4e0e\u8005 A \u7684 Cancel \u65b9\u6cd5\uff0c\u4ece\u800c\u9020\u6210\u7a7a\u56de\u6eda\u3002"),(0,r.kt)("p",null,"\u8981\u60f3\u9632\u6b62\u7a7a\u56de\u6eda\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 Cancel \u65b9\u6cd5\u4e2d\u8bc6\u522b\u8fd9\u662f\u4e00\u4e2a\u7a7a\u56de\u6eda\uff0cSeata \u662f\u5982\u4f55\u505a\u7684\u5462\uff1f"),(0,r.kt)("p",null,"Seata \u7684\u505a\u6cd5\u662f\u65b0\u589e\u4e00\u4e2a TCC \u4e8b\u52a1\u63a7\u5236\u8868\uff0c\u5305\u542b\u4e8b\u52a1\u7684 XID \u548c BranchID \u4fe1\u606f\uff0c\u5728 Try \u65b9\u6cd5\u6267\u884c\u65f6\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u8868\u793a\u4e00\u9636\u6bb5\u6267\u884c\u4e86\uff0c\u6267\u884c Cancel \u65b9\u6cd5\u65f6\u8bfb\u53d6\u8fd9\u6761\u8bb0\u5f55\uff0c\u5982\u679c\u8bb0\u5f55\u4e0d\u5b58\u5728\uff0c\u8bf4\u660e Try \u65b9\u6cd5\u6ca1\u6709\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u5904\u7406\u5e42\u7b49"},"\u5982\u4f55\u5904\u7406\u5e42\u7b49"),(0,r.kt)("p",null,"\u5e42\u7b49\u95ee\u9898\u6307\u7684\u662f TC \u91cd\u590d\u8fdb\u884c\u4e8c\u9636\u6bb5\u63d0\u4ea4\uff0c\u56e0\u6b64 Confirm/Cancel \u63a5\u53e3\u9700\u8981\u652f\u6301\u5e42\u7b49\u5904\u7406\uff0c\u5373\u4e0d\u4f1a\u4ea7\u751f\u8d44\u6e90\u91cd\u590d\u63d0\u4ea4\u6216\u8005\u91cd\u590d\u91ca\u653e\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u5e42\u7b49\u95ee\u9898\u662f\u5982\u4f55\u4ea7\u751f\u7684\u5462\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116203816.png",alt:null})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u53c2\u4e0e\u8005 A \u6267\u884c\u5b8c\u4e8c\u9636\u6bb5\u4e4b\u540e\uff0c\u7531\u4e8e\u7f51\u7edc\u6296\u52a8\u6216\u8005\u5b95\u673a\u95ee\u9898\uff0c\u4f1a\u9020\u6210 TC \u6536\u4e0d\u5230\u53c2\u4e0e\u8005 A \u6267\u884c\u4e8c\u9636\u6bb5\u7684\u8fd4\u56de\u7ed3\u679c\uff0cTC \u4f1a\u91cd\u590d\u53d1\u8d77\u8c03\u7528\uff0c\u76f4\u5230\u4e8c\u9636\u6bb5\u6267\u884c\u7ed3\u679c\u6210\u529f\u3002"),(0,r.kt)("p",null,"Seata \u662f\u5982\u4f55\u5904\u7406\u5e42\u7b49\u95ee\u9898\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u540c\u6837\u7684\u4e5f\u662f\u5728 TCC \u4e8b\u52a1\u63a7\u5236\u8868\u4e2d\u589e\u52a0\u4e00\u4e2a\u8bb0\u5f55\u72b6\u6001\u7684\u5b57\u6bb5 status\uff0c\u8be5\u5b57\u6bb5\u6709 3 \u4e2a\u503c\uff0c\u5206\u522b\u4e3a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"tried\uff1a1"),(0,r.kt)("li",{parentName:"ol"},"committed\uff1a2"),(0,r.kt)("li",{parentName:"ol"},"rollbacked\uff1a3")),(0,r.kt)("p",null,"\u4e8c\u9636\u6bb5 Confirm/Cancel \u65b9\u6cd5\u6267\u884c\u540e\uff0c\u5c06\u72b6\u6001\u6539\u4e3a committed \u6216 rollbacked \u72b6\u6001\u3002\u5f53\u91cd\u590d\u8c03\u7528\u4e8c\u9636\u6bb5 Confirm/Cancel \u65b9\u6cd5\u65f6\uff0c\u5224\u65ad\u4e8b\u52a1\u72b6\u6001\u5373\u53ef\u89e3\u51b3\u5e42\u7b49\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u5904\u7406\u60ac\u6302"},"\u5982\u4f55\u5904\u7406\u60ac\u6302"),(0,r.kt)("p",null,"\u60ac\u6302\u6307\u7684\u662f\u4e8c\u9636\u6bb5 Cancel \u65b9\u6cd5\u6bd4 \u4e00\u9636\u6bb5 Try \u65b9\u6cd5\u4f18\u5148\u6267\u884c\uff0c\u7531\u4e8e\u5141\u8bb8\u7a7a\u56de\u6eda\u7684\u539f\u56e0\uff0c\u5728\u6267\u884c\u5b8c\u4e8c\u9636\u6bb5 Cancel \u65b9\u6cd5\u4e4b\u540e\u76f4\u63a5\u7a7a\u56de\u6eda\u8fd4\u56de\u6210\u529f\uff0c\u6b64\u65f6\u5168\u5c40\u4e8b\u52a1\u5df2\u7ed3\u675f\uff0c\u4f46\u662f\u7531\u4e8e Try \u65b9\u6cd5\u968f\u540e\u6267\u884c\uff0c\u8fd9\u5c31\u4f1a\u9020\u6210\u4e00\u9636\u6bb5 Try\n\u65b9\u6cd5\u9884\u7559\u7684\u8d44\u6e90\u6c38\u8fdc\u65e0\u6cd5\u63d0\u4ea4\u548c\u91ca\u653e\u4e86\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u60ac\u6302\u662f\u5982\u4f55\u4ea7\u751f\u7684\u5462\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20220116205241.png",alt:null})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728\u6267\u884c\u53c2\u4e0e\u8005 A \u7684\u4e00\u9636\u6bb5 Try \u65b9\u6cd5\u65f6\uff0c\u51fa\u73b0\u7f51\u8def\u62e5\u5835\uff0c\u7531\u4e8e Seata \u5168\u5c40\u4e8b\u52a1\u6709\u8d85\u65f6\u9650\u5236\uff0c\u6267\u884c Try \u65b9\u6cd5\u8d85\u65f6\u540e\uff0cTM \u51b3\u8bae\u5168\u5c40\u56de\u6eda\uff0c\u56de\u6eda\u5b8c\u6210\u540e\u5982\u679c\u6b64\u65f6 RPC \u8bf7\u6c42\u624d\u5230\u8fbe\u53c2\u4e0e\u8005 A\uff0c\u6267\u884c Try\n\u65b9\u6cd5\u8fdb\u884c\u8d44\u6e90\u9884\u7559\uff0c\u4ece\u800c\u9020\u6210\u60ac\u6302\u3002"),(0,r.kt)("p",null,"Seata \u662f\u600e\u4e48\u5904\u7406\u60ac\u6302\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u5728 TCC \u4e8b\u52a1\u63a7\u5236\u8868\u8bb0\u5f55\u72b6\u6001\u7684\u5b57\u6bb5 status \u4e2d\u589e\u52a0\u4e00\u4e2a\u72b6\u6001\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"suspended\uff1a4")),(0,r.kt)("p",null,"\u5f53\u6267\u884c\u4e8c\u9636\u6bb5 Cancel \u65b9\u6cd5\u65f6\uff0c\u5982\u679c\u53d1\u73b0 TCC \u4e8b\u52a1\u63a7\u5236\u8868\u6ca1\u6709\u76f8\u5173\u8bb0\u5f55\uff0c\u8bf4\u660e\u4e8c\u9636\u6bb5 Cancel \u65b9\u6cd5\u4f18\u5148\u4e00\u9636\u6bb5 Try \u65b9\u6cd5\u6267\u884c\uff0c\u56e0\u6b64\u63d2\u5165\u4e00\u6761 status=4 \u72b6\u6001\u7684\u8bb0\u5f55\uff0c\u5f53\u4e00\u9636\u6bb5 Try \u65b9\u6cd5\u540e\u9762\u6267\u884c\u65f6\uff0c\u5224\u65ad status=4 \uff0c\u5219\u8bf4\u660e\u6709\u4e8c\u9636\u6bb5 Cancel \u5df2\u6267\u884c\uff0c\u5e76\u8fd4\u56de false \u4ee5\u963b\u6b62\u4e00\u9636\u6bb5 Try \u65b9\u6cd5\u6267\u884c\u6210\u529f\u3002"),(0,r.kt)("h1",{id:"\u4f5c\u8005\u7b80\u4ecb"},"\u4f5c\u8005\u7b80\u4ecb"),(0,r.kt)("p",null,"\u5f20\u4e58\u8f89\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u8682\u8681\u96c6\u56e2\uff0c\u70ed\u7231\u5206\u4eab\u6280\u672f\uff0c\u5fae\u4fe1\u516c\u4f17\u53f7\u300c\u540e\u7aef\u8fdb\u9636\u300d\u4f5c\u8005\uff0c\u6280\u672f\u535a\u5ba2\uff08",(0,r.kt)("a",{parentName:"p",href:"https://objcoding.com/"},"https://objcoding.com/"),"\uff09\u535a\u4e3b\uff0cSeata Committer\uff0cGitHub\nID\uff1aobjcoding\u3002"))}u.isMDXComponent=!0}}]);