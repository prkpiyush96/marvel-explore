(this["webpackJsonpmarvel-explore"]=this["webpackJsonpmarvel-explore"]||[]).push([[0],{45:function(t,e,r){},46:function(t,e,r){},72:function(t,e,r){"use strict";r.r(e);var n=r(1),c=r.n(n),a=r(32),s=r.n(a),i=(r(45),r(74)),o=r(37),l=r(19),u=r(5),d=(r(46),r(2));function w(){return Object(d.jsx)("footer",{className:"tw-sticky tw-bottom-0 tw-w-full tw-bg-black tw-p-1",children:Object(d.jsx)("div",{className:"tw-text-center tw-text-white tw-bg-primaryRed tw-p-1 tw-w-80 tw-ml-auto",children:"Data Provided By Marvel. \xa9 2021 MARVEL"})})}function j(){return Object(d.jsx)("header",{className:"tw-sticky tw-top-0 tw-bg-black tw-p-2",children:Object(d.jsx)("h3",{className:"tw-text-center tw-text-white tw-bg-primaryRed tw-w-40 tw-p-2 tw-mx-auto",children:"Marvel Explorer"})})}var h="standard_large",b="/characters";function p(){var t=Object(u.g)(),e=function(e){t.push(e)};return Object(d.jsxs)("aside",{className:"tw-bg-primaryRed tw-p-2 tw-min-h-screen",children:[Object(d.jsx)("div",{className:"tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer",onClick:function(){return e(b)},children:"Characters"}),Object(d.jsx)("div",{className:"tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer",onClick:function(){return e("test")},children:"Comics"}),Object(d.jsx)("div",{className:"tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer",onClick:function(){return e("test")},children:"Creators"}),Object(d.jsx)("div",{className:"tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer",onClick:function(){return e("test")},children:"Events"}),Object(d.jsx)("div",{className:"tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer",onClick:function(){return e("test")},children:"Series"}),Object(d.jsx)("div",{className:"tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer",onClick:function(){return e("test")},children:"Stories"})]})}function x(t){var e=t.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"tw-flex tw-min-h-screen",children:[Object(d.jsx)("div",{className:"tw-fixed tw-w-60",children:Object(d.jsx)(p,{})}),Object(d.jsx)("main",{className:"tw-bg-secondaryRed tw-ml-60",children:e})]}),Object(d.jsx)(w,{})]})}var f=r(38),m=r(73);function v(t){var e=t.character,r="\n    ".concat(e.thumbnail.path,"/").concat(h,".").concat(e.thumbnail.extension,"\n  ");return Object(d.jsxs)("div",{className:"tw-w-32",children:[Object(d.jsx)("img",{src:r,alt:e.name}),Object(d.jsx)("h4",{children:e.name})]})}var O=r(21),g=r.n(O),y=r(39),N=r(35),k=r(36),C=r.n(k),P=function(){var t=Object(N.a)(g.a.mark((function t(e,r){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get(e,{params:Object(y.a)({ts:1,apikey:"96c29bda100ea829ab3f03af3ffbc182",hash:"02c5c0c8e08cc91e335fed164e660d65"},r)});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.error(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}();var E=[{name:"Characters",path:b,component:function(){var t=Object(o.b)(),e=Object(n.useRef)(null),r=Object(n.useState)(""),c=Object(f.a)(r,2),a=c[0],s=c[1],i=Object(n.useCallback)((function(t){var e=t.pageParam;return P("https://gateway.marvel.com/v1/public/characters",{offset:void 0===e?0:e,limit:32,nameStartsWith:a||void 0})}),[a]),l=Object(m.a)("getCharacters",i,{getNextPageParam:function(t){if(!(t.data.offset>t.data.total||t.data.limit>t.data.total))return t.data.offset+32}}),u=l.data,w=l.error,j=l.isLoading,h=l.fetchNextPage,b=l.hasNextPage,p=Object(n.useCallback)((function(t){b&&(t[0].isIntersecting&&h())}),[h,b]);return Object(n.useEffect)((function(){var t=new IntersectionObserver(p,{root:null,rootMargin:"20px",threshold:0});e.current&&t.observe(e.current)}),[p]),Object(n.useEffect)((function(){h({pageParam:0}).then((function(e){t.setQueryData("getCharacters",(function(){var t,r,n,c;return{pages:[null===(t=e.data)||void 0===t?void 0:t.pages[(null===(r=e.data)||void 0===r?void 0:r.pages.length)-1]],pageParams:null===(n=e.data)||void 0===n?void 0:n.pageParams[(null===(c=e.data)||void 0===c?void 0:c.pageParams.length)-1]}}))}))}),[h,t,a]),Object(d.jsxs)("div",{children:[w?Object(d.jsx)("div",{children:JSON.stringify(w)}):j?Object(d.jsx)("div",{children:"Loading Data..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"search",onKeyPress:function(t){"Enter"===t.code&&s(t.currentTarget.value)},placeholder:"press enter to search",className:"tw-mx-8 tw-my-2 tw-float-right tw-w-40 tw-p-2 tw-border tw-border-black tw-border-solid"}),Object(d.jsx)("article",{className:"tw-m-8 tw-flex tw-flex-wrap tw-gap-x-4 tw-gap-y-4 tw-clear-both",children:null===u||void 0===u?void 0:u.pages.map((function(t){return t.data.results.map((function(t,e){return Object(d.jsx)(v,{character:t},"".concat(t.id," + ").concat(e))}))}))})]}),Object(d.jsx)("div",{ref:e,style:{textAlign:"center"},children:b?"Loading More Data...":""})]})}}],F=new i.a({defaultOptions:{queries:{cacheTime:864e5,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1}}});var M=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(x,{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsx)(u.a,{to:b})}),Object(d.jsx)(o.a,{client:F,children:E.map((function(t){return Object(d.jsx)(u.b,{path:t.path,component:t.component},t.name)}))})]})})})},R=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,75)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;r(t),n(t),c(t),a(t),s(t)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),R()}},[[72,1,2]]]);
//# sourceMappingURL=main.247056dd.chunk.js.map