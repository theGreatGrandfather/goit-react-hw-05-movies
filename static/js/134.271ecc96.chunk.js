"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{6242:function(e,n,t){t.d(n,{Df:function(){return s},IQ:function(){return f},YJ:function(){return p},hu:function(){return v},zi:function(){return l}});var r=t(5861),a=t(4687),u=t.n(a),c=t(4569),o=t.n(c),i="3686f3666c5a0ed623dc3fa0f4b660b5";o().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("trending/all/day?language=en-US&api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("movie/".concat(n,"?language=en-US&api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("movie/".concat(n,"/credits?language=en-US&api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("movie/".concat(n,"/reviews?language=en-US&api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1134:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),o=t(2791),i=t(1087),s=t(7689),l=t(6242),p=t(184);n.default=function(e){var n,t,u=(0,i.lr)(),f=(0,a.Z)(u,2),v=f[0],h=f[1],d=null!==(n=v.get("page"))&&void 0!==n?n:"",g=null!==(t=v.get("query"))&&void 0!==t?t:"",x=(0,o.useState)(""),m=(0,a.Z)(x,2),b=m[0],y=m[1],k=(0,o.useState)(null),w=(0,a.Z)(k,2),j=w[0],_=w[1],Z=(0,o.useState)([]),S=(0,a.Z)(Z,2),U=S[0],q=S[1],C=(0,o.useState)(null),D=(0,a.Z)(C,2),z=D[0],L=D[1],M=(0,s.TH)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,l.zi)(g,d);case 5:return n=e.sent,console.log("searchResult :>> ",n),q(n.results),L(n.total_pages),e.abrupt("return");case 12:e.prev=12,e.t0=e.catch(2),console.log("error :>> ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){q([]),y(null),L(null)}}),[d,g]);var R=function(e){switch(e){case"prev":_((function(e){return Math.max(e-1,1)})),h({query:g,page:j-1});break;case"next":_((function(e){return e+1})),h({query:g,page:j+1})}};return console.log("location :>> ",M),(0,p.jsxs)("div",{children:["Movies",(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&(h({query:b,page:1}),_(1),e.target[0].value="")},children:[(0,p.jsx)("input",{name:"name",onChange:function(e){e.preventDefault(),y(e.currentTarget.value.toLowerCase())},type:"text"}),(0,p.jsx)("button",{type:"submit",children:"search"})]}),(0,p.jsx)("ul",{children:U.length?U.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"".concat(e.id),state:{from:M},children:e.title||e.original_name})},e.id)})):(0,p.jsxs)("p",{children:["No movies by request ","".concat(v)," "]})}),z&&(0,p.jsxs)("ul",{children:["1"!==d&&(0,p.jsx)("li",{children:(0,p.jsx)("button",{type:"button",onClick:function(){return R("prev")},children:"prev"})}),z>d&&z!==d&&(0,p.jsx)("li",{children:(0,p.jsx)("button",{type:"button",onClick:function(){return R("next")},children:"next"})})]})]})}}}]);
//# sourceMappingURL=134.271ecc96.chunk.js.map