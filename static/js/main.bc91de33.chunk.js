(this.webpackJsonpgraphic=this.webpackJsonpgraphic||[]).push([[0],{319:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),s=a.n(r),i=a(31),l=a(323),o=a(322),d=a(324),j=a(96);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var m=n.createElement("path",{opacity:.8,d:"M46.5084 30.2537L63.0084 15.7537L46.5084 0.253698C46.5084 0.253698 25.5084 -3.2463 25.0084 15.7537C24.5084 34.7537 46.5084 30.2537 46.5084 30.2537Z",fill:"#4553D5"}),f=n.createElement("path",{opacity:.8,d:"M32.5084 30.2537L49.0084 15.7537L32.5084 0.253698C32.5084 0.253698 11.5084 -3.2463 11.0084 15.7537C10.5084 34.7537 32.5084 30.2537 32.5084 30.2537Z",fill:"#3248FE"}),p=n.createElement("path",{opacity:.8,d:"M21.5084 30.2537L38.0084 15.7537L21.5084 0.253698C21.5084 0.253698 0.508395 -3.2463 0.0083954 15.7537C-0.491605 34.7537 21.5084 30.2537 21.5084 30.2537Z",fill:"#8AC6FD"});function h(e,t){var a=e.title,c=e.titleId,r=b(e,["title","titleId"]);return n.createElement("svg",u({width:64,height:31,viewBox:"0 0 64 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,m,f,p)}var O=n.forwardRef(h),x=(a.p,a(7)),y=function(){return Object(x.jsx)(O,{})},_=a(82),g=a.n(_),v=function(){return Object(x.jsxs)(j.Header,{className:g.a.header,children:[Object(x.jsx)(y,{}),Object(x.jsxs)("ul",{className:g.a.menu,children:[Object(x.jsx)("li",{className:g.a.active,children:Object(x.jsx)("a",{href:"/#",children:"Exchange"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/#",children:"Dashboard"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/#",children:"Balances"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/#",children:"Wallet"})})]}),Object(x.jsx)(d.a,{children:"Login"})]})},Y=a(56),M=a(136),D=a.n(M),w=a(62),N=a.n(w),H=a(4),k=a.n(H),C=function(e){var t=e.categories,a=e.onSelectCategory,n=e.currentIndex;return Object(x.jsxs)(D.a,{width:330,className:N.a.aside,children:[Object(x.jsx)(o.a.Title,{level:2,className:N.a.title,children:"Popular pair"}),Object(x.jsx)("ul",{className:N.a.siderMenu,onClick:a,children:t.map((function(e,t){return Object(x.jsx)("li",{"data-category":e,"data-index":t,className:k()(Object(Y.a)({},N.a.active,t===n)),children:e},e)}))})]})},S=a(100),E=a.n(S),T=a(143),B=a.n(T),L=a(36),I=a.n(L),z=B.a.create({baseURL:"https://api.pro.coinbase.com/products/"}),P=[{name:"3d",end:I()().format("YYYY-MM-DDTHH:mm:ss"),start:I()().subtract(3,"day").format("YYYY-MM-DDTHH:mm:ss"),granularity:900},{name:"7d",end:I()().format("YYYY-MM-DDTHH:mm:ss"),start:I()().subtract(1,"week").format("YYYY-MM-DDTHH:mm:ss"),granularity:3600},{name:"14d",end:I()().format("YYYY-MM-DDTHH:mm:ss"),start:I()().subtract(2,"week").format("YYYY-MM-DDTHH:mm:ss"),granularity:21600},{name:"1m",end:I()().format("YYYY-MM-DDTHH:mm:ss"),start:I()().subtract(1,"month").format("YYYY-MM-DDTHH:mm:ss"),granularity:21600}],R={chart:{height:350,type:"candlestick"},title:{text:"",align:"left"},annotations:{xaxis:[{x:"Oct 06 14:00",borderColor:"#00E396",label:{borderColor:"#00E396",style:{fontSize:"12px",color:"#fff",background:"#00E396"},orientation:"horizontal",offsetY:7,text:"Annotation Test"}}]},tooltip:{enabled:!0},xaxis:{type:"category",labels:{formatter:function(e){return I()(e).format("MMM DD HH:mm")}}},yaxis:{tooltip:{enabled:!0}}},Z=a(40),J=a.n(Z),W=function(e){var t=e.category,a=Object(n.useState)(0),c=Object(i.a)(a,2),r=c[0],s=c[1],l=Object(n.useState)(P[r]),j=Object(i.a)(l,2),u=j[0],b=j[1],m=Object(n.useState)([]),f=Object(i.a)(m,2),p=f[0],h=f[1],O=Object(n.useState)("candlestick"),y=Object(i.a)(O,2),_=y[0],g=y[1];Object(n.useEffect)((function(){z.get("".concat(t,"/candles?granularity=").concat(u.granularity,"&start=").concat(u.start,"&end=").concat(u.end)).then((function(e){return e.data})).then((function(e){var t;t=e.length>75?e.slice(0,75).map((function(e){var t=Object(i.a)(e,5),a=t[0],n=t[1],c=t[2],r=t[3],s=t[4];return{x:new Date(1e3*a),y:[r,c,n,s]}})):e.map((function(e){var t=Object(i.a)(e,5),a=t[0],n=t[1],c=t[2],r=t[3],s=t[4];return{x:new Date(1e3*a),y:[r,c,n,s]}})),h([{name:"candle",data:t}])}))}),[t,u]);return Object(x.jsxs)("main",{className:J.a.main,children:[Object(x.jsxs)("div",{className:J.a.top,children:[Object(x.jsx)(o.a.Title,{level:2,className:J.a.title,children:t}),Object(x.jsxs)("div",{className:J.a.buttonsWrapper,children:[Object(x.jsx)(d.a,{className:k()(Object(Y.a)({},J.a.activeBtn,"candlestick"===_)),onClick:function(){"line"===_&&g("candlestick")},type:"primary",size:"large",children:"Coin"}),Object(x.jsx)(d.a,{className:k()(Object(Y.a)({},J.a.activeBtn,"line"===_)),onClick:function(){"candlestick"===_&&g("line")},type:"primary",size:"large",children:"Line"})]}),Object(x.jsx)("ul",{className:J.a.period,onClick:function(e){var t=e.target;b(P[Number(t.dataset.index)]),s(Number(t.dataset.index))},children:P.map((function(e,t){var a=e.name;return Object(x.jsx)("li",{"data-index":t,className:k()(Object(Y.a)({},J.a.active,t===r)),children:a},a)}))})]}),"line"===_&&Object(x.jsx)(E.a,{options:R,series:p,type:"line",height:350}),"candlestick"===_&&Object(x.jsx)(E.a,{options:R,series:p,type:"candlestick",height:350})]})},F=a(83),G=a.n(F),V=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),d=s[0],j=s[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),m=b[0],f=b[1],p=Object(n.useState)(-1),h=Object(i.a)(p,2),O=h[0],y=h[1];Object(n.useEffect)((function(){z.get("").then((function(e){return e.data})).then((function(e){return c(e.slice(0,5).map((function(e){return e.id})))}))}),[]);return Object(x.jsxs)(l.a,{className:G.a.wrapper,children:[Object(x.jsx)(v,{}),Object(x.jsxs)(l.a,{className:G.a.content,children:[Object(x.jsx)(C,{categories:a,onSelectCategory:function(e){var t=e.target,a=t.dataset.category,n=t.dataset.index;j(!0),a&&f(a),n&&y(Number(n))},currentIndex:O}),d?Object(x.jsx)(W,{category:m}):Object(x.jsx)(o.a.Title,{level:2,className:G.a.title,children:"Please, select any category"})]})]})};a(317),a(318),a(319);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root"))},40:function(e,t,a){e.exports={main:"styles_main__1abou",top:"styles_top__1bmGH",title:"styles_title__1V86t",buttonsWrapper:"styles_buttonsWrapper__1kiR7",activeBtn:"styles_activeBtn__2v7_w",period:"styles_period__2gZfa",active:"styles_active__1JB8R"}},62:function(e,t,a){e.exports={aside:"styles_aside__bcIVr",title:"styles_title__3x83b",siderMenu:"styles_siderMenu__2j1mf",active:"styles_active__1_ryz"}},82:function(e,t,a){e.exports={header:"styles_header__2lR6V",menu:"styles_menu__3Dxhv",active:"styles_active__3SFBf"}},83:function(e,t,a){e.exports={wrapper:"styles_wrapper__1GiCv",content:"styles_content__3ZJD9",title:"styles_title__1Gph7"}}},[[320,1,2]]]);
//# sourceMappingURL=main.bc91de33.chunk.js.map