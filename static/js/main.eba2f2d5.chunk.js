(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(0),o=n.n(c),a=n(19),i=n.n(a),s=n(40),u=n(21);function b(){var e=Object(s.a)(["\n    html {\n        box-sizing:border-box;\n    };\n    *, ::after, ::before {\n        box-sizing: inherit;\n    };\n    body {\n        background: ",';\n        font-family: "Poppins", sans-serif;\n    };\n']);return b=function(){return e},e}var j=Object(u.b)(b(),(function(e){return e.theme.colors.Mercury})),l=n(18),p=n(22),d=Object(p.b)({name:"movies",initialState:{popularMovies:[],loading:!1,activePage:1},reducers:{fetchPopularMovies:function(e){e.loading=!0},fetchPopularMoviesSuccess:function(e,t){var n=t.payload;e.popularMovies=n,e.loading=!1},fetchPopularMoviesError:function(e){e.loading=!1},setActivePage:function(e,t){var n=t.payload;e.activePage=n}}}),f=d.actions,h=f.fetchPopularMovies,v=f.fetchPopularMoviesSuccess,O=f.fetchPopularMoviesError,x=(f.setActivePage,function(e){return e.movies.popularMovies}),g=function(e){return e.movies.loading},m=d.reducer,P=n(47),w=n(14),M=n.n(w),y=n(16),k=n(45),E=n(46),S=n.n(E),F=function(){var e=Object(k.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.themoviedb.org/3/movie/popular?api_key=db28f87903ed5f61125cde9d85f339b2&language=en-US&page=1").then((function(e){return t=e})).catch((function(){return console.log("error")}));case 2:return e.abrupt("return",t.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=M.a.mark(C),B=M.a.mark(L);function C(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.b)(1e3);case 3:return t.next=5,Object(y.a)(F);case 5:return e=t.sent,t.next=8,Object(y.c)(v(e.results));case 8:t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(y.c)(O());case 14:return t.next=16,Object(y.a)(alert,"Something went wrong...");case 16:case"end":return t.stop()}}),A,null,[[0,10]])}function L(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(h.type,C);case 2:case"end":return e.stop()}}),B)}var z=Object(P.a)(),I=Object(p.a)({reducer:{movies:m},middleware:[z]});z.run(L);var J=I,T=n(23),D=n(6),U=function(){var e=Object(l.c)(x),t=Object(l.c)(g),n=Object(l.b)();return Object(c.useEffect)((function(){n(h())}),[]),Object(r.jsx)("div",{children:t?"loading":e.map((function(e){return Object(r.jsx)("p",{children:e.title},e.id)}))})},W=function(){return Object(r.jsx)("p",{children:"Person Page"})};var _=function(){return Object(r.jsx)(T.a,{children:Object(r.jsxs)("nav",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(T.b,{to:"/movies",children:"Movies"})}),Object(r.jsx)("li",{children:Object(r.jsx)(T.b,{to:"/people",children:"People"})})]}),Object(r.jsxs)(D.d,{children:[Object(r.jsx)(D.b,{path:"/movies",children:Object(r.jsx)(U,{})}),Object(r.jsx)(D.b,{path:"/people",children:Object(r.jsx)(W,{})}),Object(r.jsx)(D.b,{path:"/",children:Object(r.jsx)(D.a,{to:"/movies"})})]})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(l.a,{store:J,children:Object(r.jsxs)(u.a,{theme:{colors:{Mercury:"#E5E5E5",Black:"#000000",WaterLoo:"#7E839A"}},children:[Object(r.jsx)(j,{}),Object(r.jsx)(_,{})]})})}),document.getElementById("root")),q()}},[[76,1,2]]]);
//# sourceMappingURL=main.eba2f2d5.chunk.js.map