"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[8928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=l,k=c["".concat(s,".").concat(g)]||c[g]||u[g]||a;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"Seata RPC \u6a21\u5757\u7684\u91cd\u6784\u4e4b\u8def",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001RPC\u6a21\u5757\u3001\u91cd\u6784"],date:"2020/07/13"},o="\u524d\u8a00",i={permalink:"/blog/seata-rpc-refactor",source:"@site/blog/seata-rpc-refactor.md",title:"Seata RPC \u6a21\u5757\u7684\u91cd\u6784\u4e4b\u8def",description:"RPC \u6a21\u5757\u662f\u6211\u6700\u521d\u7814\u7a76 Seata \u6e90\u7801\u5f00\u59cb\u7684\u5730\u65b9\uff0c\u56e0\u6b64\u6211\u5bf9 Seata \u7684 RPC \u6a21\u5757\u6709\u8fc7\u4e00\u4e9b\u6df1\u523b\u7814\u7a76\uff0c\u5728\u6211\u7814\u7a76\u4e86\u4e00\u756a\u540e\uff0c\u53d1\u73b0 RPC \u6a21\u5757\u4e2d\u7684\u4ee3\u7801\u9700\u8981\u8fdb\u884c\u4f18\u5316\uff0c\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u4f18\u96c5\uff0c\u4ea4\u4e92\u903b\u8f91\u66f4\u52a0\u6e05\u6670\u6613\u61c2\uff0c\u672c\u7740 \u201c\u8ba9\u5929\u4e0b\u6ca1\u6709\u96be\u61c2\u7684",date:"2020-07-13T00:00:00.000Z",formattedDate:"July 13, 2020",tags:[],readingTime:11.35,hasTruncateMarker:!1,authors:[{name:"\u5f20\u4e58\u8f89"}],frontMatter:{title:"Seata RPC \u6a21\u5757\u7684\u91cd\u6784\u4e4b\u8def",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001RPC\u6a21\u5757\u3001\u91cd\u6784"],date:"2020/07/13"},prevItem:{title:"Mac\u4e0b\u7684Seata Demo\u73af\u5883\u642d\u5efa\uff08AT\u6a21\u5f0f\uff09",permalink:"/blog/seata-at-demo-in-mac"},nextItem:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801-Server\u7aef\u542f\u52a8\u6d41\u7a0b",permalink:"/blog/seata-sourcecode-server-bootstrap"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"RPC \u6a21\u5757\u662f\u6211\u6700\u521d\u7814\u7a76 Seata \u6e90\u7801\u5f00\u59cb\u7684\u5730\u65b9\uff0c\u56e0\u6b64\u6211\u5bf9 Seata \u7684 RPC \u6a21\u5757\u6709\u8fc7\u4e00\u4e9b\u6df1\u523b\u7814\u7a76\uff0c\u5728\u6211\u7814\u7a76\u4e86\u4e00\u756a\u540e\uff0c\u53d1\u73b0 RPC \u6a21\u5757\u4e2d\u7684\u4ee3\u7801\u9700\u8981\u8fdb\u884c\u4f18\u5316\uff0c\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u4f18\u96c5\uff0c\u4ea4\u4e92\u903b\u8f91\u66f4\u52a0\u6e05\u6670\u6613\u61c2\uff0c\u672c\u7740 \u201c",(0,l.kt)("strong",{parentName:"p"},"\u8ba9\u5929\u4e0b\u6ca1\u6709\u96be\u61c2\u7684\nRPC \u901a\u4fe1\u4ee3\u7801"),"\u201d \u7684\u521d\u8877\uff0c\u6211\u5f00\u59cb\u4e86 RPC \u6a21\u5757\u7684\u91cd\u6784\u4e4b\u8def\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u5efa\u8bae\u60f3\u8981\u6df1\u5165\u4e86\u89e3 Seata \u4ea4\u4e92\u7ec6\u8282\u7684\uff0c\u4e0d\u59a8\u4ece RPC \u6a21\u5757\u7684\u6e90\u7801\u5165\u624b\uff0cRPC \u6a21\u5757\u76f8\u5f53\u4e8e Seata \u7684\u4e2d\u67a2\uff0cSeata \u6240\u6709\u7684\u4ea4\u4e92\u903b\u8f91\u5728 RPC \u6a21\u5757\u4e2d\u8868\u73b0\u5f97\u6dcb\u6f13\u5c3d\u81f4\u3002"),(0,l.kt)("p",null,"\u8fd9\u6b21 RPC \u6a21\u5757\u7684\u91cd\u6784\u5c06\u4f1a\u4f7f\u5f97 Seata \u7684\u4e2d\u67a2\u53d8\u5f97\u66f4\u52a0\u5065\u58ee\u548c\u6613\u4e8e\u89e3\u8bfb\u3002"),(0,l.kt)("h1",{id:"\u91cd\u6784\u7ee7\u627f\u5173\u7cfb"},"\u91cd\u6784\u7ee7\u627f\u5173\u7cfb"),(0,l.kt)("p",null,"\u5728 Seata \u7684\u65e7\u7248\u672c\u4e2d\uff0cRPC \u6a21\u5757\u7684\u6574\u4f53\u7ed3\u6784\u6709\u70b9\u6df7\u4e71\uff0c\u5c24\u5176\u662f\u5728\u5404\u4e2a\u7c7b\u7684\u7ee7\u627f\u5173\u7cfb\u4e0a\uff0c\u4e3b\u8981\u4f53\u73b0\u5728\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5728 Remoting \u7c7b\u7ee7\u627f Netty Handler\uff0c\u4f7f\u5f97 Remoting \u7c7b\u4e0e Netty Handler \u5904\u7406\u903b\u8f91\u8026\u5408\u5728\u4e00\u8d77\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684 Reomting \u7c7b\u7ee7\u627f\u5173\u7cfb\u4e0d\u7edf\u4e00\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RemotingClient \u88ab RpcClientBootstrap \u5b9e\u73b0\uff0c\u800c RemotingServer \u5374\u88ab RpcServer \u5b9e\u73b0\uff0c\u6ca1\u6709\u4e00\u4e2a\u72ec\u7acb\u7684 ServerBootstrap\uff0c\u8fd9\u4e2a\u770b\u8d77\u6765\u5173\u7cfb\u975e\u5e38\u6df7\u4e71\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6709\u4e9b\u63a5\u53e3\u6ca1\u5fc5\u8981\u62bd\u53d6\u51fa\u6765\uff0c\u6bd4\u5982 ClientMessageSender\u3001ClientMessageListener\u3001ServerMessageSender \u7b49\u63a5\u53e3\uff0c\u56e0\u8fd9\u4e9b\u63a5\u53e3\u4f1a\u589e\u52a0\u6574\u4f53\u7ed3\u6784\u7ee7\u627f\u5173\u7cfb\u7684\u590d\u6742\u6027\u3002")),(0,l.kt)("p",null,"\u9488\u5bf9\u4e0a\u9762\u53d1\u73b0\u7684\u95ee\u9898\uff0c\u5728\u91cd\u6784\u8fc7\u7a0b\u4e2d\u6211\u5927\u81f4\u505a\u4e86\u5982\u4e0b\u4e8b\u60c5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 Netty Handler \u62bd\u8c61\u6210\u4e00\u4e2a\u5185\u90e8\u7c7b\u653e\u5728 Remoting \u7c7b\u4e2d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5c06 RemotingClient \u4e3a\u5ba2\u6237\u7aef\u9876\u7ea7\u63a5\u53e3\uff0c\u5b9a\u4e49\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92\u7684\u57fa\u672c\u65b9\u6cd5\uff0c\u62bd\u8c61\u4e00\u5c42 AbstractNettyRemotingClient\uff0c\u4e0b\u9762\u5206\u522b\u6709\nRmNettyRemotingClient\u3001TmNettyRemotingClient\uff1b\u5c06 RemotingServer \u4e3a\u670d\u52a1\u7aef\u9876\u7ea7\u63a5\u53e3\uff0c\u5b9a\u4e49\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u4ea4\u4e92\u7684\u57fa\u672c\u65b9\u6cd5\uff0c\u5b9e\u73b0\u7c7b NettyRemotingServer\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u65f6\u5c06 ClientMessageSender\u3001ClientMessageListener\u3001ServerMessageSender \u7b49\u63a5\u53e3\u65b9\u6cd5\u5f52\u5165\u5230 RemotingClient\u3001RemotingServer \u4e2d\uff0c\u7531 Reomting\n\u7c7b\u5b9e\u73b0 RemotingClient\u3001RemotingServer\uff0c\u7edf\u4e00 Remoting \u7c7b\u7ee7\u627f\u5173\u7cfb\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u65b0\u5efa RemotingBootstrap \u63a5\u53e3\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5206\u522b\u5b9e\u73b0 NettyClientBootstrap\u3001NettyServerBootstrap\uff0c\u5c06\u5f15\u5bfc\u7c7b\u903b\u8f91\u4ece Reomting \u7c7b\u62bd\u79bb\u51fa\u6765\u3002")),(0,l.kt)("p",null,"\u5728\u6700\u65b0\u7684 RPC \u6a21\u5757\u4e2d\u7684\u7ee7\u627f\u5173\u7cfb\u7b80\u5355\u6e05\u6670\uff0c\u7528\u5982\u4e0b\u7c7b\u5173\u7cfb\u56fe\u8868\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200711111637.png",alt:null})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"AbstractNettyRemoting\uff1aRemoting \u7c7b\u7684\u6700\u9876\u5c42\u62bd\u8c61\uff0c\u5305\u542b\u4e86\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u516c\u7528\u7684\u6210\u5458\u53d8\u91cf\u4e0e\u516c\u7528\u65b9\u6cd5\uff0c\u62e5\u6709\u901a\u7528\u7684\u8bf7\u6c42\u65b9\u6cd5\uff08\u6587\u7ae0\u540e\u9762\u4f1a\u8bb2\u5230\uff09\uff0cProcessor \u5904\u7406\u5668\u8c03\u7528\u903b\u8f91\uff08\u6587\u7ae0\u540e\u9762\u4f1a\u8bb2\u5230\uff09\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RemotingClient\uff1a\u5ba2\u6237\u7aef\u6700\u9876\u7ea7\u63a5\u53e3\uff0c\u5b9a\u4e49\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92\u7684\u57fa\u672c\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RemotingServer\uff1a\u670d\u52a1\u7aef\u6700\u9876\u7ea7\u63a5\u53e3\uff0c\u5b9a\u4e49\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u4ea4\u4e92\u7684\u57fa\u672c\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ol"},"AbstractNettyRemotingClient\uff1a\u5ba2\u6237\u7aef\u62bd\u8c61\u7c7b\uff0c\u7ee7\u627f AbstractNettyRemoting \u7c7b\u5e76\u5b9e\u73b0\u4e86 RemotingClient \u63a5\u53e3\uff1b"),(0,l.kt)("li",{parentName:"ol"},"NettyRemotingServer\uff1a\u670d\u52a1\u7aef\u5b9e\u73b0\u7c7b\uff0c\u7ee7\u627f AbstractNettyRemoting \u7c7b\u5e76\u5b9e\u73b0\u4e86 RemotingServer \u63a5\u53e3\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RmNettyRemotingClient\uff1aRm \u5ba2\u6237\u7aef\u5b9e\u73b0\u7c7b\uff0c\u7ee7\u627f AbstractNettyRemotingClient \u7c7b\uff1b"),(0,l.kt)("li",{parentName:"ol"},"TmNettyRemotingClient\uff1aTm \u5ba2\u6237\u7aef\u5b9e\u73b0\u7c7b\uff0c\u7ee7\u627f AbstractNettyRemotingClient \u7c7b\u3002")),(0,l.kt)("p",null,"\u540c\u65f6\u5c06\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u5f15\u5bfc\u7c7b\u903b\u8f91\u62bd\u8c61\u51fa\u6765\uff0c\u5982\u4e0b\u7c7b\u5173\u7cfb\u56fe\u8868\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200510225359.png",alt:null})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"RemotingBootstrap\uff1a\u5f15\u5bfc\u7c7b\u63a5\u53e3\uff0c\u6709 start \u548c stop \u4e24\u4e2a\u62bd\u8c61\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ol"},"NettyClientBootstrap\uff1a\u5ba2\u6237\u7aef\u5f15\u5bfc\u5b9e\u73b0\u7c7b\uff1b"),(0,l.kt)("li",{parentName:"ol"},"NettyServerBootstrap\uff1a\u670d\u52a1\u7aef\u5f15\u5bfc\u5b9e\u73b0\u7c7b\u3002")),(0,l.kt)("h1",{id:"\u89e3\u8026\u5904\u7406\u903b\u8f91"},"\u89e3\u8026\u5904\u7406\u903b\u8f91"),(0,l.kt)("p",null,"\u89e3\u8026\u5904\u7406\u903b\u8f91\u5373\u662f\u5c06 RPC \u4ea4\u4e92\u7684\u5904\u7406\u903b\u8f91\u4ece Netty Handler \u4e2d\u62bd\u79bb\u51fa\u6765\uff0c\u5e76\u5c06\u5904\u7406\u903b\u8f91\u62bd\u8c61\u6210\u4e00\u4e2a\u4e2a Processor\uff0c\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u505a\u5462\uff1f\u6211\u5927\u81f4\u8bb2\u4e0b\u73b0\u5728\u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Netty Handler \u4e0e \u5904\u7406\u903b\u8f91\u662f\u7cc5\u5408\u5728\u4e00\u8d77\u7684\uff0c\u7531\u4e8e\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u90fd\u5171\u7528\u4e86\u4e00\u5957\u5904\u7406\u903b\u8f91\uff0c\u56e0\u6b64\u4e3a\u4e86\u517c\u5bb9\u66f4\u591a\u7684\u4ea4\u4e92\uff0c\u5728\u5904\u7406\u903b\u8f91\u4e2d\u4f60\u53ef\u4ee5\u770b\u5230\u975e\u5e38\u591a\u96be\u4ee5\u7406\u89e3\u7684\u5224\u65ad\u903b\u8f91\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5728 Seata \u7684\u4ea4\u4e92\u4e2d\u6709\u4e9b\u8bf7\u6c42\u662f\u5f02\u6b65\u5904\u7406\u7684\uff0c\u4e5f\u6709\u4e00\u4e9b\u8bf7\u6c42\u662f\u540c\u6b65\u5904\u7406\u7684\uff0c\u4f46\u662f\u5728\u65e7\u7684\u5904\u7406\u4ee3\u7801\u903b\u8f91\u4e2d\u5bf9\u540c\u6b65\u5f02\u6b65\u5904\u7406\u7684\u8868\u8fbe\u975e\u5e38\u9690\u6666\uff0c\u800c\u4e14\u96be\u4ee5\u770b\u660e\u767d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u4ece\u4ee3\u7801\u903b\u8f91\u5f53\u4e2d\u6e05\u6670\u5730\u8868\u8fbe\u51fa\u8bf7\u6c42\u6d88\u606f\u7c7b\u578b\u4e0e\u5bf9\u5e94\u7684\u5904\u7406\u903b\u8f91\u5173\u7cfb\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5728 Seata \u540e\u9762\u7684\u66f4\u65b0\u8fed\u4ee3\u4e2d\uff0c\u5982\u679c\u4e0d\u5c06\u5904\u7406\u5904\u7406\u903b\u8f91\u62bd\u79bb\u51fa\u6765\uff0c\u8fd9\u90e8\u5206\u4ee3\u7801\u60f3\u8981\u589e\u52a0\u65b0\u7684\u4ea4\u4e92\u903b\u8f91\uff0c\u5c06\u4f1a\u975e\u5e38\u56f0\u96be\u3002")),(0,l.kt)("p",null,"\u5728\u5c06\u5904\u7406\u903b\u8f91\u4ece Netty Handler \u8fdb\u884c\u62bd\u79bb\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u68b3\u7406\u4e00\u4e0b Seata \u73b0\u6709\u7684\u4ea4\u4e92\u903b\u8f91\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RM \u5ba2\u6237\u7aef\u8bf7\u6c42\u670d\u52a1\u7aef\u7684\u4ea4\u4e92\u903b\u8f91\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/Xnip2020-05-12_21-41-45.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TM \u5ba2\u6237\u7aef\u8bf7\u6c42\u670d\u52a1\u7aef\u7684\u4ea4\u4e92\u903b\u8f91\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/Xnip2020-05-12_21-44-04.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u8bf7\u6c42 RM \u5ba2\u6237\u7aef\u7684\u4ea4\u4e92\u903b\u8f91\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200513000620.png",alt:null})),(0,l.kt)("p",null,"\u4ece\u4ee5\u4e0a\u7684\u4ea4\u4e92\u56fe\u4e2d\u53ef\u4ee5\u6e05\u6670\u5730\u770b\u5230\u4e86 Seata \u7684\u4ea4\u4e92\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u603b\u5171\u63a5\u6536\u670d\u52a1\u7aef\u7684\u6d88\u606f\uff1a"),(0,l.kt)("p",null,"1\uff09\u670d\u52a1\u7aef\u8bf7\u6c42\u6d88\u606f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"BranchCommitRequest\u3001BranchRollbackRequest\u3001UndoLogDeleteRequest")),(0,l.kt)("p",null,"2\uff09\u670d\u52a1\u7aef\u54cd\u5e94\u6d88\u606f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"RegisterRMResponse\u3001BranchRegisterResponse\u3001BranchReportResponse\u3001GlobalLockQueryResponse"),(0,l.kt)("li",{parentName:"ol"},"RegisterTMResponse\u3001GlobalBeginResponse\u3001GlobalCommitResponse\u3001GlobalRollbackResponse\u3001GlobalStatusResponse\u3001GlobalReportResponse"),(0,l.kt)("li",{parentName:"ol"},"HeartbeatMessage(PONG)")),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u603b\u5171\u63a5\u6536\u5ba2\u6237\u7aef\u7684\u6d88\u606f\uff1a"),(0,l.kt)("p",null,"1\uff09\u5ba2\u6237\u7aef\u8bf7\u6c42\u6d88\u606f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"RegisterRMRequest\u3001BranchRegisterRequest\u3001BranchReportRequest\u3001GlobalLockQueryRequest"),(0,l.kt)("li",{parentName:"ol"},"RegisterTMRequest\u3001GlobalBeginRequest\u3001GlobalCommitRequest\u3001GlobalRollbackRequest\u3001GlobalStatusRequest\u3001GlobalReportRequest"),(0,l.kt)("li",{parentName:"ol"},"HeartbeatMessage(PING)")),(0,l.kt)("p",null,"2\uff09\u5ba2\u6237\u7aef\u54cd\u5e94\u6d88\u606f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"BranchCommitResponse\u3001BranchRollbackResponse")),(0,l.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u7684\u4ea4\u4e92\u903b\u8f91\u5206\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5904\u7406\u6d88\u606f\u7684\u903b\u8f91\u62bd\u8c61\u6210\u82e5\u5e72\u4e2a Processor\uff0c\u4e00\u4e2a Processor \u53ef\u4ee5\u5904\u7406\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u6d88\u606f\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u53ea\u9700\u5728 Seata \u542f\u52a8\u65f6\u6ce8\u518c\u5c06\u6d88\u606f\u7c7b\u578b\u6ce8\u518c\u5230 ProcessorTable\n\u4e2d\u5373\u53ef\uff0c\u5f62\u6210\u4e00\u4e2a\u6620\u5c04\u5173\u7cfb\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6839\u636e\u6d88\u606f\u7c7b\u578b\u8c03\u7528\u5bf9\u5e94\u7684 Processor \u5bf9\u6d88\u606f\u8fdb\u884c\u5904\u7406\uff0c\u7528\u5982\u4e0b\u56fe\u8868\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/Xnip2020-05-12_22-09-17.png",alt:null})),(0,l.kt)("p",null,"\u5728\u62bd\u8c61 Remoting \u7c7b\u4e2d\u5b9a\u4e00\u4e2a processMessage \u65b9\u6cd5\uff0c\u65b9\u6cd5\u903b\u8f91\u662f\u6839\u636e\u6d88\u606f\u7c7b\u578b\u4ece ProcessorTable \u4e2d\u62ff\u5230\u6d88\u606f\u7c7b\u578b\u5bf9\u5e94\u7684 Processor\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u5c31\u6210\u529f\u5c06\u5904\u7406\u903b\u8f91\u4ece Netty Handler \u4e2d\u5f7b\u5e95\u62bd\u79bb\u51fa\u6765\u4e86\uff0cHandler#channelRead \u65b9\u6cd5\u53ea\u9700\u8981\u8c03\u7528 processMessage \u65b9\u6cd5\u5373\u53ef\uff0c\u4e14\u8fd8\u53ef\u4ee5\u7075\u6d3b\u6839\u636e\u6d88\u606f\u7c7b\u578b\u52a8\u6001\u6ce8\u518c Processor \u5230\nProcessorTable \u4e2d\uff0c\u5904\u7406\u903b\u8f91\u7684\u53ef\u6269\u5c55\u6027\u5f97\u5230\u4e86\u6781\u5927\u7684\u63d0\u5347\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f Processor \u7684\u8c03\u7528\u6d41\u7a0b\uff1a"),(0,l.kt)("p",null,"1\uff09\u5ba2\u6237\u7aef"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200510234047.png",alt:null})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"RmBranchCommitProcessor\uff1a\u5904\u7406\u670d\u52a1\u7aef\u5168\u5c40\u63d0\u4ea4\u8bf7\u6c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RmBranchRollbackProcessor\uff1a\u5904\u7406\u670d\u52a1\u7aef\u5168\u5c40\u56de\u6eda\u8bf7\u6c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RmUndoLogProcessor\uff1a\u5904\u7406\u670d\u52a1\u7aef undo log \u5220\u9664\u8bf7\u6c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"ClientOnResponseProcessor\uff1a\u5ba2\u6237\u7aef\u5904\u7406\u670d\u52a1\u7aef\u54cd\u5e94\u8bf7\u6c42\uff0c\u5982\uff1aBranchRegisterResponse\u3001GlobalBeginResponse\u3001GlobalCommitResponse \u7b49\uff1b"),(0,l.kt)("li",{parentName:"ol"},"ClientHeartbeatProcessor\uff1a\u5904\u7406\u670d\u52a1\u7aef\u5fc3\u8df3\u54cd\u5e94\u3002")),(0,l.kt)("p",null,"2\uff09\u670d\u52a1\u7aef"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200510234016.png",alt:null})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"RegRmProcessor\uff1a\u5904\u7406 RM \u5ba2\u6237\u7aef\u6ce8\u518c\u8bf7\u6c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"RegTmProcessor\uff1a\u5904\u7406 TM \u5ba2\u6237\u7aef\u6ce8\u518c\u8bf7\u6c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"ServerOnRequestProcessor\uff1a\u5904\u7406\u5ba2\u6237\u7aef\u76f8\u5173\u8bf7\u6c42\uff0c\u5982\uff1aBranchRegisterRequest\u3001GlobalBeginRequest\u3001GlobalLockQueryRequest \u7b49\uff1b"),(0,l.kt)("li",{parentName:"ol"},"ServerOnResponseProcessor\uff1a\u5904\u7406\u5ba2\u6237\u7aef\u76f8\u5173\u54cd\u5e94\uff0c\u5982\uff1aBranchCommitResponse\u3001BranchRollbackResponse \u7b49\uff1b"),(0,l.kt)("li",{parentName:"ol"},"ServerHeartbeatProcessor\uff1a\u5904\u7406\u5ba2\u6237\u7aef\u5fc3\u8df3\u54cd\u5e94\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4ee5 TM \u53d1\u8d77\u5168\u5c40\u4e8b\u52a1\u63d0\u4ea4\u8bf7\u6c42\u4e3a\u4f8b\u5b50\uff0c\u8ba9\u5927\u5bb6\u611f\u53d7\u4e0b Processor \u5728\u6574\u4e2a\u4ea4\u4e92\u4e2d\u6240\u5904\u7684\u4f4d\u7f6e\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200514191842.png",alt:null})),(0,l.kt)("h1",{id:"\u91cd\u6784\u8bf7\u6c42\u65b9\u6cd5"},"\u91cd\u6784\u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("p",null,"\u5728 Seata \u7684\u65e7\u7248\u672c\u5f53\u4e2d\uff0cRPC \u7684\u8bf7\u6c42\u65b9\u6cd5\u4e5f\u662f\u6b20\u7f3a\u4f18\u96c5\uff0c\u4e3b\u8981\u4f53\u73b0\u5728\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u65b9\u6cd5\u8fc7\u4e8e\u6742\u4e71\u65e0\u7ae0\uff0c\u6ca1\u6709\u5c42\u6b21\u611f\uff1b"),(0,l.kt)("li",{parentName:"ol"},"sendAsyncRequest \u65b9\u6cd5\u8026\u5408\u7684\u4ee3\u7801\u592a\u591a\uff0c\u903b\u8f91\u8fc7\u4e8e\u6df7\u4e71\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u90fd\u5171\u7528\u4e86\u4e00\u5957\u8bf7\u6c42\u903b\u8f91\uff0c\u65b9\u6cd5\u4e2d\u51b3\u5b9a\u662f\u5426\u6279\u91cf\u53d1\u9001\u662f\u6839\u636e\u53c2\u6570 address \u662f\u5426\u4e3a null \u51b3\u5b9a\uff0c\u51b3\u5b9a\u662f\u5426\u540c\u6b65\u8bf7\u6c42\u662f\u6839\u636e timeout \u662f\u5426\u5927\u4e8e 0\n\u51b3\u5b9a\uff0c\u663e\u5f97\u6781\u4e3a\u4e0d\u5408\u7406\uff0c\u4e14\u6279\u91cf\u8bf7\u6c42\u53ea\u6709\u5ba2\u6237\u7aef\u6709\u7528\u5230\uff0c\u670d\u52a1\u7aef\u5e76\u6ca1\u6709\u6279\u91cf\u8bf7\u6c42\uff0c\u5171\u7528\u4e00\u5957\u8bf7\u6c42\u903b\u8f91\u8fd8\u4f1a\u5bfc\u81f4\u670d\u52a1\u7aef\u5f02\u6b65\u8bf7\u6c42\u4e5f\u4f1a\u521b\u5efa MessageFuture \u653e\u5165 futures \u4e2d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u65b9\u6cd5\u540d\u79f0\u98ce\u683c\u4e0d\u7edf\u4e00\uff0c\u6bd4\u5982\u5ba2\u6237\u7aef sendMsgWithResponse\uff0c\u670d\u52a1\u7aef\u5374\u53eb sendSyncRequest\uff1b")),(0,l.kt)("p",null,"\u9488\u5bf9\u4ee5\u4e0a\u65e7\u7248\u672c RPC \u8bf7\u6c42\u65b9\u6cd5\u7684\u5404\u79cd\u7f3a\u70b9\uff0c\u6211\u4f5c\u4e86\u4ee5\u4e0b\u6539\u52a8\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8bf7\u6c42\u65b9\u6cd5\u7edf\u4e00\u653e\u5165 RemotingClient\u3001RemotingServer \u63a5\u53e3\u5f53\u4e2d\uff0c\u5e76\u4f5c\u4e3a\u9876\u7ea7\u63a5\u53e3\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5206\u79bb\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u8bf7\u6c42\u903b\u8f91\uff0c\u5c06\u6279\u91cf\u8bf7\u6c42\u903b\u8f91\u5355\u72ec\u62bd\u5230\u5ba2\u6237\u7aef\u76f8\u5173\u8bf7\u6c42\u65b9\u6cd5\u4e2d\uff0c\u4f7f\u5f97\u662f\u5426\u6279\u91cf\u53d1\u9001\u4e0d\u518d\u6839\u636e\u53c2\u6570 address \u662f\u5426\u4e3a null \u51b3\u5b9a\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7531\u4e8e Seata\n\u81ea\u8eab\u7684\u903b\u8f91\u7279\u70b9\uff0c\u5ba2\u6237\u7aef\u670d\u52a1\u7aef\u8bf7\u6c42\u65b9\u6cd5\u7684\u53c2\u6570\u65e0\u6cd5\u7edf\u4e00\uff0c\u53ef\u901a\u8fc7\u62bd\u53d6\u901a\u7528\u7684\u540c\u6b65/\u5f02\u6b65\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u6839\u636e\u81ea\u8eab\u8bf7\u6c42\u903b\u8f91\u7279\u70b9\u5b9e\u73b0\u81ea\u8eab\u7684\u540c\u6b65/\u5f02\u6b65\u8bf7\u6c42\u903b\u8f91\uff0c\u6700\u540e\u518d\u8c03\u7528\u901a\u7528\u7684\u540c\u6b65/\u5f02\u6b65\u8bf7\u6c42\u65b9\u6cd5\uff0c\u4f7f\u5f97\u540c\u6b65/\u5f02\u6b65\u8bf7\u6c42\u90fd\u6709\u660e\u786e\u7684\u65b9\u6cd5\uff0c\u4e0d\u518d\u6839\u636e\ntimeout \u662f\u5426\u5927\u4e8e 0 \u51b3\u5b9a\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7edf\u4e00\u8bf7\u6c42\u540d\u79f0\u98ce\u683c\u3002")),(0,l.kt)("p",null,"\u6700\u7ec8\uff0cSeata RPC \u7684\u8bf7\u6c42\u65b9\u6cd5\u7ec8\u4e8e\u770b\u8d77\u6765\u66f4\u52a0\u4f18\u96c5\u4e14\u6709\u5c42\u6b21\u611f\u4e86\u3002"),(0,l.kt)("p",null,"\u540c\u6b65\u8bf7\u6c42\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200513103838.png",alt:null})),(0,l.kt)("p",null,"\u5f02\u6b65\u8bf7\u6c42\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200513103904.png",alt:null})),(0,l.kt)("h1",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7c7b\u76ee\u5f55\u8c03\u6574\uff1aRPC \u6a21\u5757\u76ee\u5f55\u4e2d\u8fd8\u6709\u4e00\u4e2a netty \u76ee\u5f55\uff0c\u4e5f\u53ef\u4ee5\u4ece\u76ee\u5f55\u7ed3\u6784\u4e2d\u53d1\u73b0 Seata \u7684\u521d\u8877\u662f\u517c\u5bb9\u591a\u4e2a RPC \u6846\u67b6\uff0c\u76ee\u524d\u53ea\u5b9e\u73b0\u4e86 netty\uff0c\u4f46\u53d1\u73b0 netty \u6a21\u5757\u4e2d\u6709\u4e9b\u7c7b\u5e76\u4e0d \u201dnetty\u201c\uff0c\u4e14 RPC\n\u8ddf\u76ee\u5f55\u7684\u7c7b\u4e5f\u5e76\u4e0d\u901a\u7528\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u76f8\u5173\u7c7b\u7684\u4f4d\u7f6e\u8fdb\u884c\u8c03\u6574\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u67d0\u4e9b\u7c7b\u91cd\u65b0\u547d\u540d\uff0c\u6bd4\u5982 netty \u76f8\u5173\u7c7b\u5305\u542b \u300cnetty\u300d\uff1b")),(0,l.kt)("p",null,"\u6700\u7ec8 RPC \u6a21\u5757\u770b\u8d77\u6765\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20200711213204.png",alt:null})),(0,l.kt)("h1",{id:"\u4f5c\u8005\u7b80\u4ecb"},"\u4f5c\u8005\u7b80\u4ecb"),(0,l.kt)("p",null,"\u5f20\u4e58\u8f89\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u8682\u8681\u96c6\u56e2\uff0c\u70ed\u7231\u5206\u4eab\u6280\u672f\uff0c\u5fae\u4fe1\u516c\u4f17\u53f7\u300c\u540e\u7aef\u8fdb\u9636\u300d\u4f5c\u8005\uff0c\u6280\u672f\u535a\u5ba2\uff08",(0,l.kt)("a",{parentName:"p",href:"https://objcoding.com/"},"https://objcoding.com/"),"\uff09\u535a\u4e3b\uff0cSeata Contributor\uff0cGitHub\nID\uff1aobjcoding\u3002"))}u.isMDXComponent=!0}}]);