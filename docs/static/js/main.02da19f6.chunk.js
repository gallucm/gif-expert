(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(5),r=a.n(c),i=a(2),s=a(0),u=function(t){var e=t.setCategory,a=t.setLimit,c=Object(n.useState)(""),r=Object(i.a)(c,2),u=r[0],o=r[1],j=Object(n.useState)(0),l=Object(i.a)(j,2),b=l[0],d=l[1],m=function(t){t.preventDefault(),u.trim().length>0&&b>0&&(e(u),a(b),d(0),o(""))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{onSubmit:m,children:[Object(s.jsx)("input",{type:"text",className:"form-control w-25 m-auto mb-3 mt-3 mw-200 input-value",value:u,onChange:function(t){o(t.target.value)},placeholder:"Busca algo..."}),Object(s.jsx)("input",{type:"number",max:50,className:"form-control m-auto mb-3 mt-3 mw-200 limit-value",value:b,onChange:function(t){d(t.target.value)},placeholder:"Cantidad..."}),Object(s.jsx)("button",{type:"submit",disabled:""===u||b<=0||void 0===b,className:"btn btn-success btn-search",title:"Buscar...",onSubmit:m,children:"Buscar"})]}),Object(s.jsx)("br",{})]})},o=a(7),j=a(4),l=a.n(j),b=a(6),d=function(){var t=Object(b.a)(l.a.mark((function t(e){var a,n,c,r,i,s,u=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:10,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat(a,"&api_key=5fcjMhpIDMMGEGMPXB37bREwCBtiJREF"),t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,i=r.data,s=i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.title,a=t.url;return Object(s.jsx)("div",{className:"card animate__animated animate__bounce",children:Object(s.jsx)("img",{src:a,alt:e})})},O=function(t){var e=function(t,e){var a=Object(n.useState)({data:[],loading:!0}),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){d(t,e).then((function(t){s({data:t,loading:!1})}))}),[t,e]),r}(t.category,t.limit).data;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"card-grid",children:e.map((function(t){return Object(s.jsx)(m,Object(o.a)({},t),t.id)}))})]})},f=function(t){var e=t.defaultCategory,a=void 0===e?"":e,c=t.defaultLimit,r=void 0===c?5:c,o=Object(n.useState)(a),j=Object(i.a)(o,2),l=j[0],b=j[1],d=Object(n.useState)(r),m=Object(i.a)(d,2),f=m[0],h=m[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h2",{className:"the-title",children:"Buscador de GIFS"})}),Object(s.jsx)(u,{setCategory:b,setLimit:h}),Object(s.jsx)("hr",{}),Object(s.jsx)("ul",{children:Object(s.jsx)(O,{category:l,limit:f})})]})};a(14);r.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.02da19f6.chunk.js.map