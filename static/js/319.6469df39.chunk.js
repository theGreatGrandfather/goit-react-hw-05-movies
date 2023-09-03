"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{2789:function(n,t,e){e.d(t,{Z:function(){return f}});e(2791);var r,a,i,u=e(168),c=e(41),o=c.Z.div(r||(r=(0,u.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n\n"]))),s=c.Z.div(a||(a=(0,u.Z)(["\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n"]))),l=c.Z.p(i||(i=(0,u.Z)(["\n    display: block;\n    color: red;\n    font-weight: 700;\n    text-align: center;\n    font-size: 28px;\n"]))),p=e(184);var f=function(){return(0,p.jsx)(o,{children:(0,p.jsx)(s,{children:(0,p.jsx)(l,{children:"Something went wrong... Try reload the page"})})})}},6242:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return f},YJ:function(){return p},hu:function(){return d},zi:function(){return l}});var r=e(5861),a=e(4687),i=e.n(a),u=e(4569),c=e.n(u),o="3686f3666c5a0ed623dc3fa0f4b660b5";c().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/all/day?language=en-US&api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=").concat(e,"&api_key=").concat(o));case 2:return r=n.sent,console.log("searchQuery :>> ",t),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"?language=en-US&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/credits?language=en-US&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/reviews?language=en-US&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4836:function(n,t,e){e.d(t,{Dx:function(){return d},Ei:function(){return f},FB:function(){return p},ck:function(){return l}});var r,a,i,u,c=e(168),o=e(41),s=e(1087),l=o.Z.li(r||(r=(0,c.Z)(["\n    display: flex;\n    gap:20px;\n    align-items: center;\n    justify-content: center;\n    flex-basis: calc((100% - 100px) / 5);\n\n    \n"]))),p=(0,o.Z)(s.rU)(a||(a=(0,c.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    max-width: 200px;\n    text-decoration: none;\n    font-weight: 500;\n    color: #111;\n    white-space: normal;\n    border: 2px solid #e7e7e7;\n    border-radius: 8px;\n    padding: 8px;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s ease;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    &:hover,\n    &:focus{\n        transform: scale(1.1);\n    }    \n"]))),f=o.Z.img(i||(i=(0,c.Z)(["\n    display: block;\n    max-width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n"]))),d=o.Z.p(u||(u=(0,c.Z)(["\n    display: block;\n    text-align: center;\n"])))},9677:function(n,t,e){e.d(t,{Z:function(){return f}});e(2791);var r,a,i,u=e(168),c=e(41),o=c.Z.section(r||(r=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\npadding-top: 20px;\npadding-bottom: 20px;\nmax-width: 99vw;\n\n\n/* align-items: center; */\n"]))),s=c.Z.div(a||(a=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\n\n \npadding-left: 20px;\npadding-right: 20px;\n/* margin-left: auto;\nmargin-right: auto; */\n\n"]))),l=c.Z.h1(i||(i=(0,u.Z)(["\ntext-align: center;\n"]))),p=e(184),f=function(n){var t=n.title,e=n.children;return(0,p.jsx)(o,{children:(0,p.jsxs)(s,{children:[t&&(0,p.jsx)(l,{children:t}),e]})})}},1823:function(n,t,e){e.d(t,{K:function(){return i}});var r=e(9439),a=e(2791),i=function(){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),e=t[0],i=t[1];return{error:e,toggle:function(){return i((function(n){return!n}))},on:function(){return i(!0)},off:function(){return i(!1)}}}},1319:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r,a,i,u=e(5861),c=e(9439),o=e(4687),s=e.n(o),l=e(2791),p=e(1087),f=e(7689),d=e(6242),x=e(168),g=e(41),h=g.Z.form(r||(r=(0,x.Z)(["\ndisplay: flex;\ngap: 4px;\nmargin-top: 20px;\nmargin-bottom: 20px;\n\n"]))),v=g.Z.input(a||(a=(0,x.Z)(["\ndisplay: flex;\npadding: 12px;\nborder: 2px solid lightblue;\nborder-radius: 8px;\nwidth: 300px;\n\n"]))),m=g.Z.button(i||(i=(0,x.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\npadding: 12px;\nborder: 2px solid lightblue;\nborder-radius: 8px;\nbackground-color: transparent;\ntransition: all 0.3s ease;\ncursor: pointer;\n&:hover,\n&:focus{\n    background-color: #3f51b5;\n    border-color: #3f51b5;\n}\n"]))),b=e(184);var y,Z=function(n){var t=n.setQuery,e=n.onInputChange;return(0,b.jsxs)(h,{onSubmit:t,children:[(0,b.jsx)(v,{name:"name",onChange:e,type:"text"}),(0,b.jsx)(m,{type:"submit",children:"search"})]})},w=g.Z.ul(y||(y=(0,x.Z)(["\ndisplay: flex;\nalign-items: start;\nflex-wrap: wrap;\ngap: 20px;\njustify-content: space-around;\n"]))),j=e(4836);var k=function(n){var t=n.id,e=n.img,r=n.title,a=n.to,i=n.state;return(0,b.jsx)(j.ck,{children:(0,b.jsxs)(j.FB,{to:a,state:i,children:[(0,b.jsx)(j.Ei,{src:e,alt:r}),(0,b.jsx)(j.Dx,{children:r})]})},t)};var _=function(n){var t=n.searchResult,e=n.state;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(w,{children:t&&t.map((function(n){return(0,b.jsx)(k,{to:"".concat(n.id),state:e,img:null!==n.poster_path?"https://image.tmdb.org/t/p/w200".concat(n.poster_path):"https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg",title:n.title||n.original_title},n.id)}))})})},S=e(9677),C=e(1823),U=e(2789);var q=function(){var n,t,e=(0,p.lr)(),r=(0,c.Z)(e,2),a=r[0],i=r[1],o=null!==(n=a.get("page"))&&void 0!==n?n:"",x=null!==(t=a.get("query"))&&void 0!==t?t:"",g=(0,l.useState)(""),h=(0,c.Z)(g,2),v=h[0],y=h[1],w=(0,l.useState)(null),j=(0,c.Z)(w,2),k=j[0],q=j[1],D=(0,l.useState)([]),z=(0,c.Z)(D,2),Q=z[0],E=z[1],F=(0,l.useState)(null),I=(0,c.Z)(F,2),R=I[0],T=I[1],B=(0,f.TH)(),G=(0,C.K)(!1),K=G.error,L=G.on,H=G.off;(0,l.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(H(!0),x){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,(0,d.zi)(x,o);case 6:return t=n.sent,E(t.results),T(t.total_pages),n.abrupt("return");case 12:n.prev=12,n.t0=n.catch(3),L(!0);case 15:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){E([]),y(""),T(null)}}),[o,x]);var J=function(n){switch(n){case"prev":q((function(n){return Math.max(n-1,1)})),i({query:x,page:k-1});break;case"next":q((function(n){return n+1})),i({query:x,page:k+1})}};return(0,b.jsxs)(S.Z,{children:[K&&(0,b.jsx)(U.Z,{}),(0,b.jsx)(Z,{setQuery:function(n){n.preventDefault(),""!==v.trim()&&(i({query:v,page:1}),q(1),n.target[0].value="",H(!0))},onInputChange:function(n){n.preventDefault(),y(n.currentTarget.value.toLowerCase())}}),(0,b.jsx)(_,{searchResult:Q,state:{from:B},query:"'".concat(x,"'")}),R&&(0,b.jsxs)("ul",{style:{display:"flex",gap:"8px"},children:["1"!==o&&(0,b.jsx)("li",{children:(0,b.jsx)(m,{type:"button",onClick:function(){return J("prev")},children:"prev"})}),R>o&&R!==o&&(0,b.jsx)("li",{children:(0,b.jsx)(m,{type:"button",onClick:function(){return J("next")},children:"next"})})]})]})}}}]);
//# sourceMappingURL=319.6469df39.chunk.js.map