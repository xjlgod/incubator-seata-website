"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[1690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801-Client\u7aef\u542f\u52a8\u6d41\u7a0b",author:"\u6768\u6653\u5175|\u4e2d\u539f\u94f6\u884c",date:"2020/08/25",keywords:["fescar\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"]},s=void 0,i={permalink:"/blog/seata-sourcecode-client-bootstrap",source:"@site/blog/seata-sourcecode-client-bootstrap.md",title:"\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801-Client\u7aef\u542f\u52a8\u6d41\u7a0b",description:"\u3010\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801\u89e3\u8bfb\u4e8c\u3011Client\u7aef\u542f\u52a8\u6d41\u7a0b",date:"2020-08-25T00:00:00.000Z",formattedDate:"August 25, 2020",tags:[],readingTime:11.405,hasTruncateMarker:!1,authors:[{name:"\u6768\u6653\u5175|\u4e2d\u539f\u94f6\u884c"}],frontMatter:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801-Client\u7aef\u542f\u52a8\u6d41\u7a0b",author:"\u6768\u6653\u5175|\u4e2d\u539f\u94f6\u884c",date:"2020/08/25",keywords:["fescar\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"]},prevItem:{title:"Seata\u6570\u636e\u6e90\u4ee3\u7406\u89e3\u6790",permalink:"/blog/seata-datasource-proxy"},nextItem:{title:"Mac\u4e0b\u7684Seata Demo\u73af\u5883\u642d\u5efa\uff08AT\u6a21\u5f0f\uff09",permalink:"/blog/seata-at-demo-in-mac"}},l={authorsImageUrls:[void 0]},c=[{value:"\u3010\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801\u89e3\u8bfb\u4e8c\u3011Client\u7aef\u542f\u52a8\u6d41\u7a0b",id:"\u5206\u5e03\u5f0f\u4e8b\u52a1seata\u6e90\u7801\u89e3\u8bfb\u4e8cclient\u7aef\u542f\u52a8\u6d41\u7a0b",level:2},{value:"seata-spring-boot-starter",id:"seata-spring-boot-starter",level:2},{value:"GlobalTransactionScanner",id:"globaltransactionscanner",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5206\u5e03\u5f0f\u4e8b\u52a1seata\u6e90\u7801\u89e3\u8bfb\u4e8cclient\u7aef\u542f\u52a8\u6d41\u7a0b"},"\u3010\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801\u89e3\u8bfb\u4e8c\u3011Client\u7aef\u542f\u52a8\u6d41\u7a0b"),(0,a.kt)("p",null,"\u672c\u6587\u4ece\u6e90\u7801\u7684\u89d2\u5ea6\u5206\u6790\u4e00\u4e0bAT\u6a21\u5f0f\u4e0bClient\u7aef\u542f\u52a8\u6d41\u7a0b\uff0c\u6240\u8c13\u7684Client\u7aef\uff0c\u5373\u4e1a\u52a1\u5e94\u7528\u65b9\u3002\u5206\u5e03\u5f0f\u4e8b\u52a1\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757\uff1aTC\u3001TM\u3001RM\u3002\u5176\u4e2dTC\u4f4d\u4e8eseata-server\u7aef\uff0c\u800cTM\u3001RM\u901a\u8fc7SDK\u7684\u65b9\u5f0f\u8fd0\u884c\u5728client\u7aef\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86Seata\u5b98\u65b9Demo\u7684\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u573a\u666f\uff0c\u5206\u4e3a\u5982\u4e0b\u51e0\u4e2a\u5fae\u670d\u52a1\uff0c\u5171\u540c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u4e0b\u8ba2\u5355\u3001\u6263\u5e93\u5b58\u3001\u6263\u4f59\u989d\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BusinessService\uff1a")," \u4e1a\u52a1\u670d\u52a1\uff0c\u4e0b\u5355\u670d\u52a1\u7684\u5165\u53e3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"StorageService\uff1a")," \u5e93\u5b58\u5fae\u670d\u52a1\uff0c\u7528\u4e8e\u6263\u51cf\u5546\u54c1\u5e93\u5b58"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OrderService\uff1a")," \u8ba2\u5355\u5fae\u670d\u52a1\uff0c\u521b\u5efa\u8ba2\u5355"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AccountService\uff1a")," \u8d26\u6237\u5fae\u670d\u52a1\uff0c\u6263\u51cf\u7528\u6237\u8d26\u6237\u7684\u4f59\u989d")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200820184156758.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTE0NTg0OA==,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u4ece\u4e0a\u56fe\u4e5f\u53ef\u4ee5\u770b\u51fa\uff0c\u5728AT\u6a21\u5f0f\u4e0bSeata Client\u7aef\u4e3b\u8981\u901a\u8fc7\u5982\u4e0b\u4e09\u4e2a\u6a21\u5757\u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GlobalTransactionScanner\uff1a"),"  GlobalTransactionScanner\u8d1f\u8d23\u521d\u59cbTM\u3001RM\u6a21\u5757\uff0c\u5e76\u4e3a\u6dfb\u52a0\u5206\u5e03\u5f0f\u4e8b\u52a1\u6ce8\u89e3\u7684\u65b9\u6cd5\u6dfb\u52a0\u62e6\u622a\u5668\uff0c\u62e6\u622a\u5668\u8d1f\u8d23\u5168\u5c40\u4e8b\u52a1\u7684\u5f00\u542f\u3001\u63d0\u4ea4\u6216\u56de\u6eda"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DatasourceProxy\uff1a")," DatasourceProxy\u4e3aDataSource\u6dfb\u52a0\u62e6\u622a\uff0c\u62e6\u622a\u5668\u4f1a\u62e6\u622a\u6240\u6709SQL\u6267\u884c\uff0c\u5e76\u4f5c\u4e3aRM\u4e8b\u52a1\u53c2\u4e0e\u65b9\u7684\u89d2\u8272\u53c2\u4e0e\u5206\u5e03\u5f0f\u4e8b\u52a1\u6267\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rpc Interceptor\uff1a")," \u5728\u4e0a\u4e00\u7bc7",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_45145848/article/details/106930538"},"\u5206\u5e03\u5f0f\u4e8b\u52a1Seata\u6e90\u7801\u89e3\u8bfb\u4e00"),"\u4e2d\u6709\u63d0\u5230\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u51e0\u4e2a\u6838\u5fc3\u8981\u70b9\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u662f\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u8de8\u670d\u52a1\u5b9e\u4f8b\u4f20\u64ad\u3002Rpc Interceptor\u7684\u804c\u8d23\u5c31\u662f\u8d1f\u8d23\u5728\u591a\u4e2a\u5fae\u670d\u52a1\u4e4b\u95f4\u4f20\u64ad\u4e8b\u52a1\u3002")),(0,a.kt)("h2",{id:"seata-spring-boot-starter"},"seata-spring-boot-starter"),(0,a.kt)("p",null,"\u5f15\u7528seata\u5206\u5e03\u5f0f\u4e8b\u52a1SDK\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4f9d\u8d56seata-all\u6216\u8005seata-spring-boot-starter\uff0c\u63a8\u8350\u4f7f\u7528seata-spring-boot-starter\uff0c\u56e0\u4e3a\u8be5starter\u5df2\u7ecf\u81ea\u52a8\u6ce8\u5165\u4e86\u4e0a\u9762\u63d0\u5230\u7684\u4e09\u4e2a\u6a21\u5757\uff0c\u7528\u6237\u53ea\u8981\u6dfb\u52a0\u76f8\u5e94\u7684\u914d\u7f6e\uff0c\u5728\u4e1a\u52a1\u4ee3\u7801\u6dfb\u52a0\u5168\u5c40\u5206\u5e03\u5f0f\u4e8b\u52a1\u6ce8\u89e3\u5373\u53ef\u3002\u4e0b\u9762\u4eceseata-spring-boot-starter\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u5165\u624b\uff1a"),(0,a.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\u662fseata-spring-boot-starter\u7684\u9879\u76ee\u7ed3\u6784\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200810204518853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTE0NTg0OA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6a21\u5757\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"properties\uff1a")," properties\u76ee\u5f55\u4e0b\u90fd\u662fSpringboot \u9002\u914dseata\u7684\u76f8\u5173\u914d\u7f6e\u7c7b\uff0c\u5373\u53ef\u4ee5\u901a\u8fc7SpringBoot\u7684\u914d\u7f6e\u65b9\u5f0f\u6765Seata\u7684\u76f8\u5173\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provider\uff1a")," provider\u76ee\u5f55\u4e0b\u7684\u7c7b\u8d1f\u8d23\u628aSpringboot\u3001SpringCloud\u7684\u914d\u7f6e\u9002\u914d\u5230Seata\u914d\u7f6e\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resources\uff1a")," resources\u76ee\u5f55\u4e0b\u4e3b\u8981\u6709\u4e24\u4e2a\u6587\u4ef6\uff0cspring.factories\u7528\u4e8e\u6ce8\u518cSpringboot\u7684\u81ea\u52a8\u88c5\u914d\u7c7b\uff0cExtConfigurationProvider\u7528\u4e8e\u6ce8\u518cSpringbootConfigurationProvider\u7c7b\uff0c\u8be5Provider\u7c7b\u8d1f\u8d23\u628aSpringBoot\u7684\u76f8\u5173\u914d\u7f6e\u7c7b\u9002\u914d\u5230Seata\u4e2d\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8espringboot-starter\u9879\u76ee\uff0c\u6211\u4eec\u5148\u67e5\u770bresources/META-INF/spring.factories\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Auto Configure\norg.springframework.boot.autoconfigure.EnableAutoConfiguration=\nio.seata.spring.boot.autoconfigure.SeataAutoConfiguration\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5728spring.factories\u4e2d\u914d\u7f6e\u4e86\u81ea\u52a8\u88c5\u914d\u7c7b\uff1aSeataAutoConfiguration\uff0c\u5728\u8be5\u88c5\u914d\u7c7b\u4e2d\u4e3b\u8981\u6ce8\u5165\u4e86GlobalTransactionScanner\u548cseataAutoDataSourceProxyCreator\u4e24\u4e2a\u5b9e\u4f8b\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan(basePackages = "io.seata.spring.boot.autoconfigure.properties")\n@ConditionalOnProperty(prefix = StarterConstants.SEATA_PREFIX, name = "enabled",\n        havingValue = "true",\n        matchIfMissing = true)\n@Configuration\n@EnableConfigurationProperties({SeataProperties.class})\npublic class SeataAutoConfiguration {\n\n  ...\n  \n  // GlobalTransactionScanner\u8d1f\u8d23\u4e3a\u6dfb\u52a0GlobalTransaction\u6ce8\u89e3\u7684\u65b9\u6cd5\u6dfb\u52a0\u62e6\u622a\u5668\uff0c\n  // \u5e76\u4e14\u8d1f\u8d23\u521d\u59cb\u5316RM\u3001TM\n  @Bean\n  @DependsOn({BEAN_NAME_SPRING_APPLICATION_CONTEXT_PROVIDER, BEAN_NAME_FAILURE_HANDLER})\n  @ConditionalOnMissingBean(GlobalTransactionScanner.class)\n  public GlobalTransactionScanner globalTransactionScanner(SeataProperties seataProperties,\n                                                           FailureHandler failureHandler) {\n    if (LOGGER.isInfoEnabled()) {\n      LOGGER.info("Automatically configure Seata");\n    }\n    return new GlobalTransactionScanner(seataProperties.getApplicationId(),\n            seataProperties.getTxServiceGroup(),\n            failureHandler);\n  }\n  \n  // SeataAutoDataSourceProxyCreator\u8d1f\u8d23\u4e3aSpring\u4e2d\u7684\u6240\u6709DataSource\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\uff0c\n  // \u4ece\u800c\u5b9e\u73b0\u62e6\u622a\u6240\u6709SQL\u7684\u6267\u884c\n  @Bean(BEAN_NAME_SEATA_AUTO_DATA_SOURCE_PROXY_CREATOR)\n  @ConditionalOnProperty(prefix = StarterConstants.SEATA_PREFIX, name = {\n          "enableAutoDataSourceProxy", "enable-auto" +\n          "-data-source-proxy"}, havingValue = "true", matchIfMissing = true)\n  @ConditionalOnMissingBean(SeataAutoDataSourceProxyCreator.class)\n  public SeataAutoDataSourceProxyCreator seataAutoDataSourceProxyCreator(SeataProperties seataProperties) {\n    return new SeataAutoDataSourceProxyCreator(seataProperties.isUseJdkProxy(),\n            seataProperties.getExcludesForAutoProxying());\n  }\n}\n')),(0,a.kt)("h3",{id:"globaltransactionscanner"},"GlobalTransactionScanner"),(0,a.kt)("p",null,"GlobalTransactionScanner\u7ee7\u627f\u4e8eAutoProxyCreator\uff0cAutoProxyCreator\u662fSpring\u4e2d\u5b9e\u73b0AOP\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u62e6\u622aSpring\u4e2d\u7684\u6240\u6709\u5b9e\u4f8b\uff0c\u5224\u65ad\u662f\u5426\u9700\u8981\u8fdb\u884c\u4ee3\u7406\u3002\u4e0b\u9762\u5217\u51fa\u4e86GlobalTransactionScanner\u4e2d\u4e00\u4e9b\u6bd4\u8f83\u91cd\u8981\u7684\u5b57\u6bb5\u548c\u62e6\u622a\u4ee3\u7406\u7684\u6838\u5fc3\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class GlobalTransactionScanner extends AbstractAutoProxyCreator\n        implements InitializingBean, ApplicationContextAware,\n        DisposableBean {\n  ...\n  // interceptor\u5b57\u6bb5\u662f\u5bf9\u5e94\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\u7684\u62e6\u622a\u5668\uff0c\n  // \u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e00\u4e2a\u4e34\u65f6\u53d8\u91cf\uff0c\u6709\u6548\u671f\u662f\u4e00\u4e2a\u88ab\u4ee3\u7406\u5bf9\u8c61\n  private MethodInterceptor interceptor;\n  \n  // globalTransactionalInterceptor\u662f\u901a\u7528\u7684Interceptor\uff0c\n  // \u975eTCC\u4e8b\u52a1\u65b9\u5f0f\u7684\u90fd\u4f7f\u7528\u8be5Interceptor\n  private MethodInterceptor globalTransactionalInterceptor;\n  \n  // PROXYED_SET\u5b58\u50a8\u5df2\u7ecf\u4ee3\u7406\u8fc7\u7684\u5b9e\u4f8b\uff0c\u9632\u6b62\u91cd\u590d\u5904\u7406\n  private static final Set<String> PROXYED_SET = new HashSet<>();\n  \n  // applicationId\u662f\u4e00\u4e2a\u670d\u52a1\u7684\u552f\u4e00\u6807\u8bc6\uff0c\n  // \u5bf9\u5e94springcloud\u9879\u76ee\u4e2d\u7684spring.application.name\n  private final String applicationId;\n  // \u4e8b\u52a1\u7684\u5206\u7ec4\u6807\u8bc6\uff0c\u53c2\u8003\u6587\u7ae0wiki\uff1ahttp://seata.io/zh-cn/docs/user/txgroup/transaction-group.html\n  private final String txServiceGroup;\n  \n  ...\n\n  // \u5224\u65ad\u662f\u5426\u9700\u8981\u4ee3\u7406\u76ee\u6807\u5bf9\u8c61\uff0c\u5982\u679c\u9700\u8981\u4ee3\u7406\uff0c\u5219\u751f\u6210\u62e6\u622a\u5668\u8d4b\u503c\u5230\u7c7b\u53d8\u91cfinterceptor\u4e2d\n  @Override\n  protected Object wrapIfNecessary(Object bean, String beanName, Object cacheKey) {\n    // \u5224\u65ad\u662f\u5426\u7981\u7528\u5206\u5e03\u5f0f\u4e8b\u52a1\n    if (disableGlobalTransaction) {\n      return bean;\n    }\n    try {\n      synchronized (PROXYED_SET) {\n        if (PROXYED_SET.contains(beanName)) {\n          return bean;\n        }\n        \n        // \u6bcf\u6b21\u5904\u7406\u4e00\u4e2a\u88ab\u4ee3\u7406\u5bf9\u8c61\u65f6\u5148\u628ainterceptor\u7f6e\u4e3anull\uff0c\u6240\u4ee5interceptor\u7684\n        // \u751f\u547d\u5468\u671f\u662f\u4e00\u4e2a\u88ab\u4ee3\u7406\u5bf9\u8c61\uff0c\u7531\u4e8e\u662f\u5728\u53e6\u5916\u4e00\u4e2a\u65b9\u6cd5getAdvicesAndAdvisorsForBean\n        // \u4e2d\u4f7f\u7528interceptor\uff0c\u6240\u4ee5\u8be5interceptor\u8981\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u7c7b\u53d8\u91cf\n        interceptor = null;\n        \n        // \u5224\u65ad\u662f\u5426\u662fTCC\u4e8b\u52a1\u6a21\u5f0f\uff0c\u5224\u65ad\u7684\u4e3b\u8981\u4f9d\u636e\u662f\u65b9\u6cd5\u4e0a\u662f\u5426\u6709TwoPhaseBusinessAction\u6ce8\u89e3\n        if (TCCBeanParserUtils.isTccAutoProxy(bean, beanName,\n                applicationContext)) {\n          // \u521b\u5efa\u4e00\u4e2aTCC\u4e8b\u52a1\u7684\u62e6\u622a\u5668\n          interceptor =\n                  new TccActionInterceptor(TCCBeanParserUtils.getRemotingDesc(beanName));\n        } else {\n          // \u83b7\u53d6\u5f85\u5904\u7406\u5bf9\u8c61\u7684class\u7c7b\u578b\n          Class<?> serviceInterface = SpringProxyUtils.findTargetClass(bean);\n          // \u83b7\u53d6\u5f85\u5904\u7406\u5bf9\u8c61\u7ee7\u627f\u7684\u6240\u6709\u63a5\u53e3\n          Class<?>[] interfacesIfJdk = SpringProxyUtils.findInterfaces(bean);\n          \n          // \u5982\u679c\u5f85\u5904\u7406\u5bf9\u8c61\u7684class\u6216\u8005\u7ee7\u627f\u7684\u63a5\u53e3\u4e0a\u6709GlobalTransactional\u6ce8\u89e3\uff0c\n          // \u6216\u8005\u5f85\u5904\u7406\u5bf9\u8c61\u7684class\u7684\u4efb\u4e00\u4e2a\u65b9\u6cd5\u4e0a\u6709GlobalTransactional\u6216\u8005\n          // GlobalLock\u6ce8\u89e3\u5219\u8fd4\u56detrue\uff0c\u5373\u9700\u8981\u88ab\u4ee3\u7406\n          if (!existsAnnotation(new Class[]{serviceInterface})\n                  && !existsAnnotation(interfacesIfJdk)) {\n            return bean;\n          }\n          \n          // \u5982\u679cinterceptor\u4e3anull\uff0c\u5373\u4e0d\u662fTCC\u6a21\u5f0f\uff0c\n          // \u5219\u4f7f\u7528globalTransactionalInterceptor\u4f5c\u4e3a\u62e6\u622a\u5668\n          if (interceptor == null) {\n            // globalTransactionalInterceptor\u53ea\u4f1a\u88ab\u521b\u5efa\u4e00\u6b21\n            if (globalTransactionalInterceptor == null) {\n              globalTransactionalInterceptor =\n                      new GlobalTransactionalInterceptor(failureHandlerHook);\n              ConfigurationCache.addConfigListener(\n                      ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,\n                      (ConfigurationChangeListener) globalTransactionalInterceptor);\n            }\n            interceptor = globalTransactionalInterceptor;\n          }\n        }\n\n        if (!AopUtils.isAopProxy(bean)) {\n          // \u5982\u679cbean\u672c\u8eab\u4e0d\u662fProxy\u5bf9\u8c61\uff0c\u5219\u76f4\u63a5\u8c03\u7528\u7236\u7c7b\u7684wrapIfNecessary\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u5373\u53ef\n          // \u5728\u7236\u7c7b\u4e2d\u4f1a\u8c03\u7528getAdvicesAndAdvisorsForBean\u83b7\u53d6\u5230\u4e0a\u9762\u5b9a\u4e49\u7684interceptor\n          bean = super.wrapIfNecessary(bean, beanName, cacheKey);\n        } else {\n          // \u5982\u679c\u8be5bean\u5df2\u7ecf\u662f\u4ee3\u7406\u5bf9\u8c61\u4e86\uff0c\u5219\u76f4\u63a5\u5728\u4ee3\u7406\u5bf9\u8c61\u7684\u62e6\u622a\u8c03\u7528\u94feAdvisedSupport\n          // \u4e0a\u76f4\u63a5\u6dfb\u52a0\u65b0\u7684interceptor\u5373\u53ef\u3002\n          AdvisedSupport advised = SpringProxyUtils.getAdvisedSupport(bean);\n          Advisor[] advisor = buildAdvisors(beanName,\n                  getAdvicesAndAdvisorsForBean(null, null, null));\n          for (Advisor avr : advisor) {\n            advised.addAdvisor(0, avr);\n          }\n        }         \n        // \u6807\u8bc6\u8be5beanName\u5df2\u7ecf\u5904\u7406\u8fc7\u4e86\n        PROXYED_SET.add(beanName);\n        return bean;\n      }\n    } catch (Exception exx) {\n      throw new RuntimeException(exx);\n    }\n  }\n  \n  // \u8fd4\u56dewrapIfNecessary\u65b9\u6cd5\u4e2d\u8ba1\u7b97\u51fa\u7684interceptor\u5bf9\u8c61\n  @Override\n  protected Object[] getAdvicesAndAdvisorsForBean(Class beanClass, String beanName,\n                                                  TargetSource customTargetSource)\n          throws BeansException {\n    return new Object[]{interceptor};\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ecb\u7ecd\u4e86GlobalTransactionScanner\u662f\u5982\u4f55\u901a\u8fc7\u6ce8\u89e3\u62e6\u622a\u5168\u5c40\u4e8b\u52a1\u7684\uff0c\u5177\u4f53\u62e6\u622a\u5668\u5b9e\u73b0\u4e3aTccActionInterceptor\u548cGlobalTransactionalInterceptor\uff0c\u5bf9\u4e8eAT\u6a21\u5f0f\u6765\u8bf4\u6211\u4eec\u4e3b\u8981\u5173\u5fc3GlobalTransactionalInterceptor\uff0c\u5728\u540e\u7eed\u7684\u6587\u7ae0\u4e2d\u4f1a\u4ecb\u7ecdGlobalTransactionalInterceptor\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u53e6\u5916GloabalTransactionScanner\u8fd8\u8d1f\u8d23TM\u3001RM\u7684\u521d\u59cb\u5316\u5de5\u4f5c\uff0c\u662f\u5728initClient\u65b9\u6cd5\u4e2d\u5b9e\u73b0\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private void initClient() {\n    ...\n    \n    //\u521d\u59cb\u5316TM\n    TMClient.init(applicationId, txServiceGroup);\n    ...\n    \n    //\u521d\u59cb\u5316RM\n    RMClient.init(applicationId, txServiceGroup);\n    ...\n    \n    // \u6ce8\u518cSpring shutdown\u7684\u56de\u8c03\uff0c\u7528\u6765\u91ca\u653e\u8d44\u6e90\n    registerSpringShutdownHook();\n\n }\n")),(0,a.kt)("p",null,"TMClient\u3001RMClient\u90fd\u662fSeata\u57fa\u4e8eNetty\u5b9e\u73b0\u7684Rpc\u6846\u67b6\u7684\u5ba2\u6237\u7aef\u7c7b\uff0c\u53ea\u662f\u4e1a\u52a1\u903b\u8f91\u4e0d\u540c\uff0c\u7531\u4e8eTMClient\u76f8\u5bf9\u6765\u8bf4\u66f4\u7b80\u5355\u4e00\u4e9b\uff0c\u6211\u4eec\u4ee5RMClient\u4e3a\u4f8b\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class RMClient {\n  // RMClient\u7684init\u662f\u4e00\u4e2astatic\u65b9\u6cd5\uff0c\u521b\u5efa\u4e86\u4e00\u4e2aRmNettyRemotingClient\u5b9e\u4f8b\uff0c\u5e76\u8c03\u7528init\u65b9\u6cd5\n  public static void init(String applicationId, String transactionServiceGroup) {\n    RmNettyRemotingClient rmNettyRemotingClient =\n            RmNettyRemotingClient.getInstance(applicationId, transactionServiceGroup);\n    rmNettyRemotingClient.setResourceManager(DefaultResourceManager.get());\n    rmNettyRemotingClient.setTransactionMessageHandler(DefaultRMHandler.get());\n    rmNettyRemotingClient.init();\n  }\n}\n")),(0,a.kt)("p",null,"RmNettyRemotingClient\u7684\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Sharable\npublic final class RmNettyRemotingClient extends AbstractNettyRemotingClient {\n  // ResourceManager\u8d1f\u8d23\u5904\u7406\u4e8b\u52a1\u53c2\u4e0e\u65b9\uff0c\u652f\u6301AT\u3001TCC\u3001Saga\u4e09\u79cd\u6a21\u5f0f\n  private ResourceManager resourceManager;\n  // RmNettyRemotingClient\u5355\u4f8b\n  private static volatile RmNettyRemotingClient instance;\n  private final AtomicBoolean initialized = new AtomicBoolean(false);\n  // \u5fae\u670d\u52a1\u7684\u552f\u4e00\u6807\u8bc6\n  private String applicationId;\n  // \u5206\u5e03\u5f0f\u4e8b\u52a1\u5206\u7ec4\u540d\u79f0\n  private String transactionServiceGroup;\n  \n  // RMClient\u4e2dinit\u65b9\u6cd5\u4f1a\u8c03\u7528\u8be5init\u65b9\u6cd5\n  public void init() {\n    // \u6ce8\u518cSeata\u81ea\u5b9a\u4e49Rpc\u7684Processor\n    registerProcessor();\n    if (initialized.compareAndSet(false, true)) {\n      // \u8c03\u7528\u7236\u7c7b\u7684init\u65b9\u6cd5\uff0c\u5728\u7236\u7c7b\u4e2d\u8d1f\u8d23Netty\u7684\u521d\u59cb\u5316\uff0c\u4e0eSeata-Server\u5efa\u7acb\u8fde\u63a5\n      super.init();\n    }\n  }\n  \n  // \u6ce8\u518cSeata\u81ea\u5b9a\u4e49Rpc\u7684Processor\n  private void registerProcessor() {\n    // 1.\u6ce8\u518cSeata-Server\u53d1\u8d77branchCommit\u7684\u5904\u7406Processor\n    RmBranchCommitProcessor rmBranchCommitProcessor =\n            new RmBranchCommitProcessor(getTransactionMessageHandler(), this);\n    super.registerProcessor(MessageType.TYPE_BRANCH_COMMIT, rmBranchCommitProcessor,\n            messageExecutor);\n            \n    // 2.\u6ce8\u518cSeata-Server\u53d1\u8d77branchRollback\u7684\u5904\u7406Processor\n    RmBranchRollbackProcessor rmBranchRollbackProcessor =\n            new RmBranchRollbackProcessor(getTransactionMessageHandler(), this);\n    super.registerProcessor(MessageType.TYPE_BRANCH_ROLLBACK, rmBranchRollbackProcessor\n            , messageExecutor);\n            \n    // 3.\u6ce8\u518cSeata-Server\u53d1\u8d77\u5220\u9664undoLog\u7684\u5904\u7406Processor\n    RmUndoLogProcessor rmUndoLogProcessor =\n            new RmUndoLogProcessor(getTransactionMessageHandler());\n    super.registerProcessor(MessageType.TYPE_RM_DELETE_UNDOLOG, rmUndoLogProcessor,\n            messageExecutor);\n            \n    // 4.\u6ce8\u518cSeata-Server\u8fd4\u56deResponse\u7684\u5904\u7406Processor\uff0cClientOnResponseProcessor\n    // \u7528\u4e8e\u5904\u7406\u7531Client\u4e3b\u52a8\u53d1\u8d77Request\uff0cSeata-Server\u8fd4\u56de\u7684Response\u3002\n    // ClientOnResponseProcessor\u8d1f\u8d23\u628aClient\u53d1\u9001\u7684Request\u548cSeata-Server\n    // \u8fd4\u56de\u7684Response\u5bf9\u5e94\u8d77\u6765\uff0c\u4ece\u800c\u5b9e\u73b0Rpc\n    ClientOnResponseProcessor onResponseProcessor =\n            new ClientOnResponseProcessor(mergeMsgMap, super.getFutures(),\n                    getTransactionMessageHandler());\n    super.registerProcessor(MessageType.TYPE_SEATA_MERGE_RESULT, onResponseProcessor,\n            null);\n    super.registerProcessor(MessageType.TYPE_BRANCH_REGISTER_RESULT,\n            onResponseProcessor, null);\n    super.registerProcessor(MessageType.TYPE_BRANCH_STATUS_REPORT_RESULT,\n            onResponseProcessor, null);\n    super.registerProcessor(MessageType.TYPE_GLOBAL_LOCK_QUERY_RESULT,\n            onResponseProcessor, null);\n    super.registerProcessor(MessageType.TYPE_REG_RM_RESULT, onResponseProcessor, null);\n    \n    // 5. \u5904\u7406Seata-Server\u8fd4\u56de\u7684Pong\u6d88\u606f\n    ClientHeartbeatProcessor clientHeartbeatProcessor = new ClientHeartbeatProcessor();\n    super.registerProcessor(MessageType.TYPE_HEARTBEAT_MSG, clientHeartbeatProcessor,\n            null);\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u903b\u8f91\u770b\u8d77\u6765\u6bd4\u8f83\u590d\u6742\uff0c\u76f8\u5173\u7c7b\u4e5f\u6bd4\u8f83\u591a\uff0c\u5982\uff1a\u5404\u79cdProcessor\u3001\u5404\u79cdMessageType\u3001TransactionMessageHandler\u3001ResourceManager\u3002\u5176\u5b9e\u672c\u8d28\u4e0a\u5c31\u662fRpc\u8c03\u7528\uff0c\u5206\u4e3aRm\u4e3b\u52a8\u8c03\u7528\u548cSeata\u4e3b\u52a8\u8c03\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rm\u4e3b\u52a8\u8c03\u7528\u65b9\u6cd5\uff1a")," \u5982\uff1a\u6ce8\u518c\u5206\u652f\u3001\u6c47\u62a5\u5206\u652f\u72b6\u6001\u3001\u7533\u8bf7\u5168\u5c40\u9501\u7b49\u3002Rm\u4e3b\u52a8\u8c03\u7528\u7684\u65b9\u6cd5\u90fd\u9700\u8981\u5728ClientOnResponseProcessor\u4e2d\u5904\u7406Seata-Server\u8fd4\u56de\u7684Response"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Seata-Server\u4e3b\u52a8\u8c03\u7528\u65b9\u6cd5\uff1a")," \u5982\uff1a\u63d0\u4ea4\u5206\u652f\u4e8b\u52a1\u3001\u56de\u6eda\u5206\u652f\u4e8b\u52a1\u3001\u5220\u9664undolog\u65e5\u5fd7\u3002Seata-Server\u4e3b\u52a8\u8c03\u7528\u7684\u65b9\u6cd5\uff0cClient\u7aef\u5206\u522b\u5bf9\u5e94\u4e0d\u540c\u7684Processor\u6765\u5904\u7406\uff0c\u5e76\u4e14\u5904\u7406\u7ed3\u675f\u540e\u8981\u8fd4\u56de\u7ed9Seata-Server\u5904\u7406\u7ed3\u679cResponse\u3002\u800c\u4e8b\u52a1\u63d0\u4ea4\u3001\u56de\u6eda\u7684\u6838\u5fc3\u5b9e\u73b0\u903b\u8f91\u90fd\u5728TransactionMessageHandler\u3001ResourceManager\u4e2d\u3002")),(0,a.kt)("p",null,"\u5173\u4e8eTransactionMessageHandler\u3001ResourceManager\u7684\u5177\u4f53\u5b9e\u73b0\u4e5f\u4f1a\u5728\u540e\u7eed\u7684\u7ae0\u8282\u4e2d\u8be6\u7ec6\u63cf\u8ff0\u3002"),(0,a.kt)("p",null,"\u4e0b\u4e00\u7bc7\u4f1a\u4ecb\u7ecd\u4e00\u4e0bSeataAutoDataSourceProxyCreator\u3001Rpc Interceptor\u662f\u5982\u4f55\u521d\u59cb\u5316\u4ee5\u53ca\u62e6\u622a\u7684\u3002"))}g.isMDXComponent=!0}}]);