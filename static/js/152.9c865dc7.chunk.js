"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[152],{2789:function(n,e,t){t.d(e,{Z:function(){return d}});t(2791);var r,a,i,c=t(168),o=t(41),s=o.Z.div(r||(r=(0,c.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n\n"]))),u=o.Z.div(a||(a=(0,c.Z)(["\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n"]))),l=o.Z.p(i||(i=(0,c.Z)(["\n    display: block;\n    color: red;\n    font-weight: 700;\n    text-align: center;\n    font-size: 28px;\n"]))),p=t(184);var d=function(){return(0,p.jsx)(s,{children:(0,p.jsx)(u,{children:(0,p.jsx)(l,{children:"Something went wrong... Try reload the page"})})})}},6242:function(n,e,t){t.d(e,{Df:function(){return u},IQ:function(){return d},YJ:function(){return p},hu:function(){return f},zi:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),c=t(4569),o=t.n(c),s="3686f3666c5a0ed623dc3fa0f4b660b5";o().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/all/day?language=en-US&api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(s));case 2:return r=n.sent,console.log("searchQuery :>> ",e),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4836:function(n,e,t){t.d(e,{Dx:function(){return f},Ei:function(){return d},FB:function(){return p},ck:function(){return l}});var r,a,i,c,o=t(168),s=t(41),u=t(1087),l=s.Z.li(r||(r=(0,o.Z)(["\n    display: flex;\n    gap:20px;\n    align-items: center;\n    justify-content: center;\n    flex-basis: calc((100% - 100px) / 5);\n\n    \n"]))),p=(0,s.Z)(u.rU)(a||(a=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    max-width: 200px;\n    text-decoration: none;\n    font-weight: 500;\n    color: #111;\n    white-space: normal;\n    border: 2px solid #e7e7e7;\n    border-radius: 8px;\n    padding: 8px;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s ease;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    &:hover,\n    &:focus{\n        transform: scale(1.1);\n    }    \n"]))),d=s.Z.img(i||(i=(0,o.Z)(["\n    display: block;\n    max-width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n"]))),f=s.Z.p(c||(c=(0,o.Z)(["\n    display: block;\n    text-align: center;\n"])))},9677:function(n,e,t){t.d(e,{Z:function(){return d}});t(2791);var r,a,i,c=t(168),o=t(41),s=o.Z.section(r||(r=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\npadding-top: 20px;\npadding-bottom: 20px;\nmax-width: 99vw;\n\n\n/* align-items: center; */\n"]))),u=o.Z.div(a||(a=(0,c.Z)(["\ndisplay: flex;\nflex-direction: column;\n\n \npadding-left: 20px;\npadding-right: 20px;\n/* margin-left: auto;\nmargin-right: auto; */\n\n"]))),l=o.Z.h1(i||(i=(0,c.Z)(["\ntext-align: center;\n"]))),p=t(184),d=function(n){var e=n.title,t=n.children;return(0,p.jsx)(s,{children:(0,p.jsxs)(u,{children:[e&&(0,p.jsx)(l,{children:e}),t]})})}},1823:function(n,e,t){t.d(e,{K:function(){return i}});var r=t(9439),a=t(2791),i=function(){var n=(0,a.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1];return{error:t,toggle:function(){return i((function(n){return!n}))},on:function(){return i(!0)},off:function(){return i(!1)}}}},9152:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,c,o,s,u,l=t(5861),p=t(9439),d=t(4687),f=t.n(d),x=t(2791),g=t(7689),h=t(6242),v=t(9677),m=t(168),Z=t(41),j=Z.Z.div(r||(r=(0,m.Z)(["\n    display: flex;\n    gap: 20px;\n    text-align: start;\n"]))),w=Z.Z.div(a||(a=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    \n"]))),y=Z.Z.div(i||(i=(0,m.Z)(["\n    display: flex;\n    gap: 20px;\n    justify-content: flex-start;\n    \n"]))),b=Z.Z.h1(c||(c=(0,m.Z)(["\n    display: flex;\n    margin: 0;\n"]))),k=Z.Z.img(o||(o=(0,m.Z)(["\n    display: flex;\n    width: 300px;\n"]))),S=Z.Z.h2(s||(s=(0,m.Z)(["\n    display: flex;\n    margin: 0;\n"]))),_=Z.Z.p(u||(u=(0,m.Z)(["\n    display: flex;\n    margin: 0;\n"]))),U=t(184);var F,B,D,z=function(n){var e=n.title,t=n.img,r=n.average,a=n.overview,i=n.genres,c=n.movieData;return(0,U.jsxs)(j,{children:[c&&(0,U.jsx)(k,{src:t,alt:e}),c?(0,U.jsxs)(w,{children:[(0,U.jsx)(b,{children:e}),(0,U.jsx)(_,{children:"User Score: ".concat(r,"%")}),(0,U.jsx)(S,{children:"Overview"}),(0,U.jsx)(_,{children:a}),(0,U.jsx)(S,{children:"Genres"}),(0,U.jsx)(y,{children:i.map((function(n){return(0,U.jsx)(_,{children:n},n)}))})]}):(0,U.jsx)(S,{children:"Sorry no data"})]})},C=t(4836),G=Z.Z.div(F||(F=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n"]))),I=Z.Z.ul(B||(B=(0,m.Z)(["\n    display: flex;\n    gap: 20px;\n    justify-content: start;\n"]))),R=Z.Z.li(D||(D=(0,m.Z)(["\n    display: flex;\n    text-align: start;\n    /* padding: 40px; */\n"])));var E=function(n){var e=n.cast,t=n.reviews;return(0,U.jsxs)(G,{children:[(0,U.jsx)(_,{children:"Additionals information"}),(0,U.jsxs)(I,{children:[(0,U.jsx)(R,{children:(0,U.jsx)(C.FB,{to:e,children:"Cast"})}),(0,U.jsx)(R,{children:(0,U.jsx)(C.FB,{to:t,children:"Reviews"})})]}),(0,U.jsx)(x.Suspense,{fallback:(0,U.jsx)("div",{children:"Loading..."}),children:(0,U.jsx)(g.j3,{})})]})},J=t(1823),K=t(2789);var L=function(){var n,e,t=(0,g.UO)().movieId,r=(0,x.useState)({}),a=(0,p.Z)(r,2),i=a[0],c=a[1],o=(0,g.TH)(),s=(0,x.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),u=(0,x.useState)(""),d=(0,p.Z)(u,2),m=d[0],Z=d[1],j=(0,x.useState)(""),w=(0,p.Z)(j,2),y=w[0],b=w[1],k=(0,x.useState)(),S=(0,p.Z)(k,2),_=S[0],F=S[1],B=(0,x.useState)(""),D=(0,p.Z)(B,2),G=D[0],I=D[1],R=(0,x.useState)([]),L=(0,p.Z)(R,2),O=L[0],Q=L[1],T=(0,J.K)(!1),Y=T.error,q=T.on,A=T.off;return(0,x.useEffect)((function(){var n=function(){var n=(0,l.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,A(!0),n.next=4,(0,h.YJ)(t);case 4:e=n.sent,c(e),Z(e.title),b(e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://raw.githubusercontent.com/theGreatGrandfather/goit-react-hw-05-movies/main/public/background.jpg"),F(Number.parseInt("".concat(10*e.vote_average))),I(e.overview),Q(e.genres.map((function(n){return n.name}))),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),q(!0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[t,q,A]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(v.Z,{children:[(0,U.jsx)(C.FB,{to:s.current,children:"go back"}),(0,U.jsx)(z,{title:m,img:y,average:_,overview:G,genres:O,movieData:i})]}),(0,U.jsx)(v.Z,{children:(0,U.jsx)(E,{cast:"cast",reviews:"reviews"})}),Y&&(0,U.jsx)(K.Z,{})]})}}}]);
//# sourceMappingURL=152.9c865dc7.chunk.js.map