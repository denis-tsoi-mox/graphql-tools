(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),o=(a(0),a(177)),c={id:"remote-schemas",title:"Remote schemas",description:"Generate GraphQL schema objects that delegate to a remote server"},s={id:"remote-schemas",isDocsHomePage:!1,title:"Remote schemas",description:"Generate GraphQL schema objects that delegate to a remote server",source:"@site/docs/remote-schemas.md",permalink:"/docs/remote-schemas",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/remote-schemas.md",sidebar:"someSidebar",previous:{title:"Schema delegation",permalink:"/docs/schema-delegation"},next:{title:"Schema wrapping",permalink:"/docs/schema-wrapping"}},i=[{value:"Use Loaders to load schemas easily",id:"use-loaders-to-load-schemas-easily",children:[]},{value:"Create a remote executable schema with custom executor and subscriber methods",id:"create-a-remote-executable-schema-with-custom-executor-and-subscriber-methods",children:[{value:"Creating an executor",id:"creating-an-executor",children:[]},{value:"Using cross-fetch",id:"using-cross-fetch",children:[]},{value:"Creating a subscriber",id:"creating-a-subscriber",children:[]}]},{value:"API",id:"api",children:[{value:"introspectSchema(executor, context)",id:"introspectschemaexecutor-context",children:[]},{value:"wrapSchema(schemaConfig)",id:"wrapschemaschemaconfig",children:[]},{value:"makeRemoteExecutableSchema(options)",id:"makeremoteexecutableschemaoptions",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It can be valuable to be able to treat remote GraphQL endpoints as if they were local executable schemas. This is especially useful for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema-stitching/"}),"schema stitching"),", but there may be other use cases."),Object(o.b)("p",null,"There two ways to create remote schemas;"),Object(o.b)("h2",{id:"use-loaders-to-load-schemas-easily"},"Use Loaders to load schemas easily"),Object(o.b)("p",null,"Check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema-loading"}),"Schema Loading")," to load schemas from an URL and/or different sources easily without implementing an executor or subscriber."),Object(o.b)("h2",{id:"create-a-remote-executable-schema-with-custom-executor-and-subscriber-methods"},"Create a remote executable schema with custom executor and subscriber methods"),Object(o.b)("p",null,"Generally, to create a remote schema, you generally need just three steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#creating-an-executor"}),"executor")," that can retrieve results from that schema"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#introspectschemaexecutor-context"}),Object(o.b)("inlineCode",{parentName:"a"},"introspectSchema"))," to get the non-executable schema of the remote server"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#wrapschemaschemaconfig"}),Object(o.b)("inlineCode",{parentName:"a"},"wrapSchema"))," to create a schema that uses the executor to delegate requests to the underlying service")),Object(o.b)("p",null,"You can optionally also include a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#creating-a-subscriber"}),"subscriber")," that can retrieve real time subcription results from the remote schema (only if you are using GraphQL Subscriptions)"),Object(o.b)("h3",{id:"creating-an-executor"},"Creating an executor"),Object(o.b)("p",null,"You can use an executor with an HTTP Client implementation (like cross-fetch). An executor is a function capable of retrieving GraphQL results. It is the same way that a GraphQL Client handles fetching data and is used by several ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools")," features to do introspection or fetch results during execution."),Object(o.b)("p",null,"We've chosen to split this functionality up to give you the flexibility to choose when to do the introspection step. For example, you might already have the remote schema information, allowing you to skip the ",Object(o.b)("inlineCode",{parentName:"p"},"introspectSchema")," step entirely. Here's a complete example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"type Executor = (operation: ExecutionParams) => Promise<ExecutionResult>;\n\ntype ExecutionParams = {\n  document: DocumentNode;\n  variables?: Object;\n  context?: Object;\n  info?: GraphQLResolveInfo\n}\n")),Object(o.b)("h3",{id:"using-cross-fetch"},"Using cross-fetch"),Object(o.b)("p",null,"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { fetch } from 'cross-fetch';\nimport { print } from 'graphql';\n\nconst executor = async ({ document, variables }) => {\n  const query = print(document);\n  const fetchResult = await fetch('http://example.com/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ query, variables })\n  });\n  return fetchResult.json();\n};\n\nexport default async () => {\n  const schema = wrapSchema({\n    schema: await introspectSchema(executor),\n    executor,\n  });\n  return schema\n}\n")),Object(o.b)("p",null,"Authentication headers from context"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { fetch } from 'cross-fetch';\nimport { print } from 'graphql';\n\nconst executor = async ({ document, variables, context }) => {\n  const query = print(document);\n  const fetchResult = await fetch('http://example.com/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': `Bearer ${context.authKey}`,\n    },\n    body: JSON.stringify({ query, variables })\n  });\n  return fetchResult.json();\n};\n\nexport default async () => {\n  const schema = wrapSchema({\n    schema: await introspectSchema(executor),\n    executor,\n  });\n\n  return schema\n}\n")),Object(o.b)("h3",{id:"creating-a-subscriber"},"Creating a subscriber"),Object(o.b)("p",null,"For subscriptions, we need to define a subscriber that returns ",Object(o.b)("inlineCode",{parentName:"p"},"AsyncIterator"),". Other than that, it has the similar API with ",Object(o.b)("inlineCode",{parentName:"p"},"executor"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type Subscriber = (executionParams: ExecutionParams) => Promise<AsyncIterator<ExecutionResult>>;\n")),Object(o.b)("h4",{id:"using-subscriptions-transport-ws"},"Using ",Object(o.b)("inlineCode",{parentName:"h4"},"subscriptions-transport-ws")),Object(o.b)("p",null,"You can learn more about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollographql/subscriptions-transport-ws"}),Object(o.b)("inlineCode",{parentName:"a"},"subscriptions-transport-ws")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { Executor, Subscriber, wrapSchema } from '@graphql-tools/wrap';\nimport { fetch } from 'cross-fetch';\nimport { print } from 'graphql';\nimport { observableToAsyncIterable } from '@graphql-tools/utils';\nimport { SubscriptionClient } from 'subscriptions-transport-ws';\n\nconst HTTP_GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';\nconst WS_GRAPHQL_ENDPOINT = 'ws://localhost:3000/graphql';\n\nconst executor: Executor = async ({ document, variables }) => {\n  const query = print(document);\n  const fetchResult = await fetch(HTTP_GRAPHQL_ENDPOINT, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ query, variables })\n  });\n  return fetchResult.json();\n};\n\nconst subscriptionClient = new SubscriptionClient(WS_GRAPHQL_ENDPOINT, {\n  reconnect: true,\n});\n\nconst subscriber: Subscriber = ({ document, variables, context, info }) => observableToAsyncIterable(\n  subscriptionClient.request({\n    query: document,\n    variables,\n    context,\n  })\n);\n\nexport default async () => {\n  const schema = wrapSchema({\n    schema: await introspectSchema(executor),\n    executor,\n    subscriber,\n  });\n\n  return schema\n}\n")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"introspectschemaexecutor-context"},"introspectSchema(executor, ","[context]",")"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," to obtain a non-executable client schema from a remote schema using a full introspection query. ",Object(o.b)("inlineCode",{parentName:"p"},"introspectSchema")," is used to acquire the non-executable form of a remote schema that must be passed to ",Object(o.b)("inlineCode",{parentName:"p"},"wrapSchema"),". It returns a promise to a non-executable GraphQL.js schema object. Accepts optional second argument ",Object(o.b)("inlineCode",{parentName:"p"},"context"),", which is passed to the executor; see the docs about executors above for more details."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { introspectSchema } from '@graphql-tools/wrap';\n\nintrospectSchema(executor).then((schema) => {\n  // use the schema\n});\n\n// or, with async/await:\nconst schema = await introspectSchema(executor);\n")),Object(o.b)("h3",{id:"wrapschemaschemaconfig"},"wrapSchema(schemaConfig)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"wrapSchema")," comes most in handly when wrapping a remote schema. When using the function to wrap a remote schema, it takes a single object: an subschema configuration object with properties describing how the schema should be accessed and wrapped. The ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," and ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," options are required."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { wrapSchema } from '@graphql-tools/wrap';\n\nconst schema = wrapSchema({\n  schema,\n  executor,\n  transforms,\n});\n")),Object(o.b)("p",null,"Transforms are further described within the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema-wrapping/"}),"general schema wrapping section"),". When using a schema configuration object, transforms should be placed as a property within the configuration, rather than as a separate argument to ",Object(o.b)("inlineCode",{parentName:"p"},"wrapSchema"),"."),Object(o.b)("p",null,"Batching and caching can be accomplished by specifying customized executors that manage this for you. We export a ",Object(o.b)("inlineCode",{parentName:"p"},"linkToExecutor")," function in ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-tools/links")," package that can be used to transform the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma-labs/http-link-dataloader"}),Object(o.b)("inlineCode",{parentName:"a"},"HTTPLinkDataloader"))," Apollo-style link (created by Prisma) that will batch and cache all requests. Per request caching is a simple add-on, as the ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," function is provided the context, so a global ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," specified by wrapSchema can simply forward all arguments to a request-specific ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," provided on the context."),Object(o.b)("p",null,"For users who need to customize the root proxying resolvers at the time that the wrapping schema is generated, you can also specify a custom ",Object(o.b)("inlineCode",{parentName:"p"},"createProxyingResolver")," function that will create your own root resolvers for the new outer, wrapping schema. This function has the following signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export type CreateProxyingResolverFn = (options: ICreateProxyingResolverOptions) => GraphQLFieldResolver<any, any>;\n\nexport interface ICreateProxyingResolverOptions {\n  schemaOrSubschemaConfig: GraphQLSchema | SubschemaConfig;   // target schema for delegation\n  transforms?: Array<Transform>;   // array of transformations to apply\n  transformedSchema?: GraphQLSchema;   // pre-processed result of applying those transforms to the target schema\n  operation?: Operation;   // target operation type = 'query' | 'mutation' | 'subscription'\n  fieldName?: string;   // target root field name\n};\n")),Object(o.b)("p",null,"You may not need all the options to accomplish what you need. For example, the default proxying resolver creator just uses a subset of the passed arguments:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export function defaultCreateProxyingResolver({\n  schemaOrSubschemaConfig,\n  transforms,\n  transformedSchema,\n}: ICreateProxyingResolverOptions): GraphQLFieldResolver<any, any> {\n  return (_parent, _args, context, info) =>\n    delegateToSchema({\n      schema: schemaOrSubschemaConfig,\n      context,\n      info,\n      transforms,\n      transformedSchema,\n    });\n}\n")),Object(o.b)("p",null,"Parentheticaly, note that that ",Object(o.b)("inlineCode",{parentName:"p"},"args")," from the root field resolver are not directly passed to the target schema. These arguments have already been parsed into their corresponding internal values by the GraphQL execution algorithm. The correct, serialized form of the arguments are available within the ",Object(o.b)("inlineCode",{parentName:"p"},"info")," object, ready for proxying. Specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"args")," property for ",Object(o.b)("inlineCode",{parentName:"p"},"delegateToSchema")," allows one to pass ",Object(o.b)("em",{parentName:"p"},"additional")," arguments to the target schema, which is not necessary when creating a simple proxying schema."),Object(o.b)("p",null,"The above can can all be put together like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const schema = wrapSchema({\n  schema,\n  executor: myCustomExecutor,\n  createProxyingResolver: myCustomCreateProxyingResolverFn\n});\n")),Object(o.b)("p",null,"Note that within the ",Object(o.b)("inlineCode",{parentName:"p"},"defaultCreateProxyingResolver")," function, ",Object(o.b)("inlineCode",{parentName:"p"},"delegateToSchema")," receives ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscriber")," functions stored on the subschema config object originally passed to ",Object(o.b)("inlineCode",{parentName:"p"},"wrapSchema"),". As above, use of the the ",Object(o.b)("inlineCode",{parentName:"p"},"createProxyingResolver")," option is helpful when you want to customize additional functionality at resolver creation time. If you just want to customize how things are proxied at the time that they are proxied, you can make do just with custom executors and subscribers."),Object(o.b)("h3",{id:"makeremoteexecutableschemaoptions"},"makeRemoteExecutableSchema(options)"),Object(o.b)("p",null,"What about ",Object(o.b)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema"),", the function used in older versions to access remote schemas? It still works -- just now under the hood calling ",Object(o.b)("inlineCode",{parentName:"p"},"wrapSchema"),". There is essentially no longer any need to use ",Object(o.b)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema")," directly, but we've kept it around for backwards compatibility."),Object(o.b)("p",null,"You can  still pass a ",Object(o.b)("inlineCode",{parentName:"p"},"createResolver")," function to ",Object(o.b)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema")," to override how the fetch resolvers are created and executed. The ",Object(o.b)("inlineCode",{parentName:"p"},"createResolver")," param accepts an ",Object(o.b)("inlineCode",{parentName:"p"},"Executor")," as its first argument (and a ",Object(o.b)("inlineCode",{parentName:"p"},"Subscriber")," as its second) and returns a resolver function. This opens up the possibility for users to create batching mechanisms for fetches. As above, it is likely easier to just customize the ",Object(o.b)("inlineCode",{parentName:"p"},"executor")," function itself."),Object(o.b)("p",null,"Given a GraphQL.js schema (can be a non-executable client schema made by ",Object(o.b)("inlineCode",{parentName:"p"},"buildClientSchema"),") and a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#creating-an-executor"}),"executor"),", ",Object(o.b)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema")," produce a GraphQL Schema that routes all requests to the executor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const createResolver: (executor: Executor) => GraphQLFieldResolver<any, any> = // . . .\n\nconst schema = makeRemoteExecutableSchema({\n  schema,\n  executor,\n  createResolver\n});\n")))}p.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(c,".").concat(u)]||m[u]||b[u]||o;return a?r.a.createElement(h,s({ref:t},l,{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);