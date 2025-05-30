(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{86:function(e,t,i){"use strict";i.r(t);var r=i(1),n=i.n(r),a=i(23),o=i.n(a),l=i(5),c=i(18);const s=Object(c.b)({name:"list",initialState:{list:[],loading:!0,numberPages:void 0,activePath:"",error:!1,totalResults:void 0},reducers:{fetchListSuccess:(e,t)=>{let{payload:i}=t;e.list=i.results,e.numberPages=i.total_pages,e.loading=!1,e.error=!1,e.totalResults=i.total_results},fetchListError:e=>{e.loading=!1,e.error=!0},setActivePath:(e,t)=>{let{payload:i}=t;e.activePath=i,e.loading=!0}}}),{fetchListSuccess:d,fetchListError:h,setActivePath:p,setQuery:b}=s.actions,x=e=>e.list.list,m=e=>e.list.loading,g=e=>e.list.error,j=e=>e.list.numberPages,u=e=>e.list.totalResults;var f=s.reducer;const O=Object(c.b)({name:"item",initialState:{itemData:[],extraData:[],loading:!0,itemId:void 0,activeItemPath:"",activeExtraPath:"",error:!1},reducers:{setItemId:(e,t)=>{let{payload:i}=t;e.loading=!0,e.itemId=i},fetchItemSuccess:(e,t)=>{let{payload:{itemData:i,extraData:r}}=t;e.itemData=i,e.extraData=r,e.loading=!1,e.error=!1},fetchItemError:e=>{e.loading=!1,e.error=!0},setActivePath:(e,t)=>{let{payload:{path1:i,path2:r}}=t;e.activeItemPath=i,e.activeExtraPath=r}}}),{setItemId:w,fetchItemSuccess:v,fetchItemError:k,setActivePath:$}=O.actions,y=e=>e.item.itemData,C=e=>e.item.extraData,_=e=>e.item.loading,S=e=>e.item.error;var z=O.reducer;const E=Object(c.b)({name:"search",initialState:{results:[],loading:!0,activePath:"",error:!1,query:"",open:!1},reducers:{fetchSearchSuccess:(e,t)=>{let{payload:i}=t;e.results=i.results,e.loading=!1,e.error=!1},fetchSearchError:e=>{e.loading=!1,e.error=!0},setActiveSearchPath:(e,t)=>{let{payload:i}=t;e.activePath=i,e.loading=!0},setQuery:(e,t)=>{let{payload:i}=t;e.query=i},setOpen:(e,t)=>{let{payload:i}=t;e.open=i}}}),{fetchSearchSuccess:M,fetchSearchError:P,setActiveSearchPath:L,setQuery:B,setOpen:F}=E.actions,I=e=>e.search.results,D=e=>e.search.loading,N=e=>e.search.query,R=e=>e.search.open;var A=E.reducer;const Z=Object(c.b)({name:"common",initialState:{genresList:[],loading:!0,isNormalTheme:!localStorage.getItem("theme")||JSON.parse(localStorage.getItem("theme"))},reducers:{fetchCommon:e=>{e.loading=!0},fetchCommonSuccess:(e,t)=>{let{payload:i}=t;e.genresList=i.genres.map((e=>({...e,enabled:!1}))),e.loading=!1},fetchCommonError:e=>{e.loading=!1},setTheme:(e,t)=>{let{payload:i}=t;e.isNormalTheme=i,localStorage.setItem("theme",i)},switchGenreEnabled:(e,t)=>{let{genresList:i}=e,{payload:r}=t;const n=i.findIndex((e=>e.id===r));i[n].enabled=!i[n].enabled}}}),{fetchCommon:T,fetchCommonSuccess:W,fetchCommonError:q,setTheme:Q,switchGenreEnabled:G}=Z.actions,H=e=>e.common.genresList,J=e=>e.common.loading,U=e=>e.common.isNormalTheme;var V=Z.reducer,X=i(49),Y=i(8),K=i(45),ee=i.n(K);const te=async e=>{let t;return await ee.a.get(e).then((e=>t=e)).catch((()=>console.log("error"))),t.data};function*ie(){const e=xe.getState().item.activeItemPath,t=xe.getState().item.activeExtraPath;try{const i=yield Object(Y.b)(te,e),r=yield Object(Y.b)(te,t);yield Object(Y.d)(v({itemData:i,extraData:r}))}catch(i){yield Object(Y.d)(k())}}function*re(){yield Object(Y.e)(w.type,ie)}function*ne(){const e=xe.getState().list.activePath;try{const t=yield Object(Y.b)(te,e);yield Object(Y.d)(d(t))}catch(t){yield Object(Y.d)(h())}}function*ae(){yield Object(Y.f)(p.type,ne)}var oe="?api_key=db28f87903ed5f61125cde9d85f339b2";var le="&language=en-US";function*ce(){try{const e=yield Object(Y.b)(te,`https://api.themoviedb.org/3/genre/movie/list${oe}${le}`);yield Object(Y.d)(W(e))}catch(e){yield Object(Y.d)(q())}}function*se(){yield Object(Y.e)(T.type,ce)}function*de(){const e=xe.getState().search.activePath;try{const t=yield Object(Y.b)(te,e);yield Object(Y.d)(M(t))}catch(t){yield Object(Y.d)(P())}}function*he(){yield Object(Y.c)(400,L.type,de)}const pe=Object(X.a)(),be=Object(c.a)({reducer:{list:f,item:z,common:V,search:A},middleware:[pe]});pe.run((function*(){yield Object(Y.a)([he(),ae(),re(),se()])}));var xe=be,me=i(12),ge=i(9),je=i(3);const ue="link-active",fe=je.d.nav`
    min-height: 94px;
    background: ${e=>{let{theme:t}=e;return t.unchangeableColors.black}};
    color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
      min-height: 80px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
      min-height: 60px;
    }
`,Oe=je.d.div`
    max-width: 1400px;
    min-height: inherit;
    margin: 0 auto;
    padding: 16px;
`,we=Object(je.d)(Oe)`
  padding: 0;
`,ve=je.d.div`
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    min-height: inherit;
    padding: 0 10px;
    flex-wrap: wrap;
    margin: 0 auto;
`,ke=Object(je.d)(ve)`
  flex-wrap: nowrap;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    flex-basis: 60vw;
  }

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    flex-basis: 70%;
  }
`,$e=Object(je.d)(ve)`
    justify-content: flex-end;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
      flex-basis: 40%;
      justify-content: center;
      padding: 16px 0;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
      flex-basis: 100%;
      justify-content: center;
    }
`,ye=je.d.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
`,Ce=je.d.li`
    text-decoration: none;
`,_e=Object(je.d)(me.c).attrs((()=>({activeClassName:ue})))`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
    padding: 13px 24px;
    margin: 0 10px;
    border-radius: 33px;
    transition: 0.15s;

    &:hover {
      background: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
      color: ${e=>{let{theme:t}=e;return t.unchangeableColors.black}};
  }

    &.${ue} {
      border: 1px solid ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
      cursor: unset;
      
      &:hover {
        background: unset;
        color: unset;
      }
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-size: 13px;
    padding: 11px 18px;
    margin: 0 3px;
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 12px;
    padding: 8px 12px;
    margin: 0 3px;
  }
`,Se=Object(je.d)(me.b)`
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
  font-size: 24px;
  font-weight: 500;
  padding-left: 16px;
  margin: 0;
  display: flex;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
    margin-right: 30px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-size: 18px;
    padding: 10px;
    margin-right: 22px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 13px;
    padding: 0;
    margin-right: 19px;
  }
`,ze=je.d.img`
    height: 40px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    height: 28px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    height: 17px;
  }
`,Ee=e=>{const t=Object(ge.h)();return new URLSearchParams(t.search).get(e)},Me=()=>{const e=Object(ge.g)(),t=Object(ge.h)(),i=new URLSearchParams(t.search);return r=>{r.forEach((e=>{let{key:t,value:r}=e;""===r?i.delete(t):i.set(t,r)})),e.push(`${t.pathname.includes("movie")?"/movies":"/people"}?${i.toString()}`)}};var Pe;function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Le.apply(this,arguments)}function Be(e,t){let{title:i,titleId:n,...a}=e;return r.createElement("svg",Le({width:"100%",height:"100%",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),i?r.createElement("title",{id:n},i):null,Pe||(Pe=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.31201 5.3035C0.11223 5.48824 0 5.73877 0 6C0 6.26123 0.11223 6.51176 0.31201 6.6965L5.20657 11.2213C5.40509 11.4011 5.67237 11.5013 5.95033 11.5C6.22828 11.4987 6.49445 11.396 6.691 11.2143C6.88754 11.0326 6.99858 10.7866 6.99999 10.5296C7.00139 10.2727 6.89305 10.0256 6.69849 9.84207L2.54243 6L6.69849 2.15793C6.89305 1.97441 7.00139 1.72732 6.99999 1.47037C6.99858 1.21341 6.88754 0.967353 6.691 0.785657C6.49445 0.60396 6.22828 0.50131 5.95033 0.500012C5.67237 0.498715 5.40509 0.598874 5.20657 0.778726L0.31201 5.3035Z",fill:"#7E839A"})))}const Fe=r.forwardRef(Be);var Ie;i.p;function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},De.apply(this,arguments)}function Ne(e,t){let{title:i,titleId:n,...a}=e;return r.createElement("svg",De({width:"100%",height:"100%",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),i?r.createElement("title",{id:n},i):null,Ie||(Ie=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.68799 5.3035C6.88777 5.48824 7 5.73877 7 6C7 6.26123 6.88777 6.51176 6.68799 6.6965L1.79343 11.2213C1.59491 11.4011 1.32763 11.5013 1.04967 11.5C0.771718 11.4987 0.505548 11.396 0.309002 11.2143C0.112456 11.0326 0.00141732 10.7866 1.3474e-05 10.5296C-0.00139037 10.2727 0.106955 10.0256 0.301505 9.84207L4.45757 6L0.301505 2.15793C0.106955 1.97441 -0.00139037 1.72732 1.3474e-05 1.47037C0.00141732 1.21341 0.112456 0.967353 0.309002 0.785657C0.505548 0.60396 0.771718 0.50131 1.04967 0.500012C1.32763 0.498715 1.59491 0.598874 1.79343 0.778726L6.68799 5.3035Z",fill:"#0044CC"})))}const Re=r.forwardRef(Ne);i.p;const Ae=je.d.div`
    width: fit-content;
    margin: 40px auto 0;
    
    @media  (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px)  {
    display: none;
  }
`,Ze=Object(je.d)(Ae)`
  display: none;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 32px auto 0;
  }
`,Te=je.d.button`
    margin: 0 6px;
    padding: 8px 16px 8px 16px;
    background: ${e=>{let{theme:t}=e;return t.colors.activeNavButton}};
    border-radius: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    border: none;
    cursor: pointer;
    transition: filter 0.4s;

    &:disabled {
      background: ${e=>{let{theme:t}=e;return t.colors.disabledNavButton}};
      cursor: no-drop;
      transform: unset;
      transition: unset;
      filter: brightness(75%);
    }
    &:hover {
      filter: brightness(90%);
    }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    display: flex;
    padding: 8px 12px;
    margin: 0 4px;
  }
`,We=je.d.span`
    margin: 0 24px;
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>{let{theme:t}=e;return t.colors.subtitle}};

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
      font-size:10px;	    
      margin: 0 8px;	    
    }	  
`,qe=je.d.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 12px;
  }
`,Qe=Object(je.d)(Fe)`
  margin: 0 4px 0 0;
  height: 11px;
  width: 7px;
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    margin: 0 2px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    height: 8px;
    width: 5px;
  }
`,Ge=Object(je.d)(Re)`
  height: 11px;
  width:7px;
  margin: 0 0 0 4px;
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    margin: 0;
  }
`,He=je.d.div`
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    display: flex;
  }
`,Je=je.d.div`
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    display: flex;
    height: 8px;
  }
`;var Ue=i(0);var Ve=()=>{const e=+Ee("page"),t=e<1||e>500?1:e,i=Object(l.c)(j),r=Me(),n=e=>{r([{key:"page",value:e}])};return Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsxs)(Ae,{children:[Object(Ue.jsxs)(Te,{disabled:1===t,onClick:()=>n(1),children:[Object(Ue.jsx)(Qe,{}),Object(Ue.jsx)(Qe,{}),"First"]}),Object(Ue.jsxs)(Te,{disabled:1===t,onClick:()=>n(t-1),children:[Object(Ue.jsx)(Qe,{}),"Previous"]}),Object(Ue.jsxs)(We,{children:["Page ",Object(Ue.jsx)(qe,{children:t})," of ",Object(Ue.jsx)(qe,{children:i})]}),Object(Ue.jsxs)(Te,{disabled:t===i,onClick:()=>n(t+1),children:["Next",Object(Ue.jsx)(Ge,{})]}),Object(Ue.jsxs)(Te,{disabled:t===i,onClick:()=>n(i),children:["Last",Object(Ue.jsx)(Ge,{}),Object(Ue.jsx)(Ge,{})]})]}),Object(Ue.jsxs)(Ze,{children:[Object(Ue.jsx)(Te,{disabled:1===t,onClick:()=>n(1),children:Object(Ue.jsxs)(He,{children:[Object(Ue.jsx)(Qe,{}),Object(Ue.jsx)(Qe,{})]})}),Object(Ue.jsx)(Te,{disabled:1===t,onClick:()=>n(t-1),children:Object(Ue.jsx)(Je,{children:Object(Ue.jsx)(Qe,{})})}),Object(Ue.jsxs)(We,{children:["Page ",Object(Ue.jsx)(qe,{children:t})," of ",Object(Ue.jsx)(qe,{children:i})]}),Object(Ue.jsx)(Te,{disabled:t===i,onClick:()=>n(t+1),children:Object(Ue.jsx)(Je,{children:Object(Ue.jsx)(Ge,{})})}),Object(Ue.jsx)(Te,{disabled:t===i,onClick:()=>n(i),children:Object(Ue.jsxs)(He,{children:[Object(Ue.jsx)(Ge,{}),Object(Ue.jsx)(Ge,{})]})})]})]})};const Xe=je.d.div`
    display: flex;
    align-items: center;
    height: 24px;
    margin-top: 24px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
      margin-top: 8px;
  }
`,Ye=je.d.img`
    width: 24px;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    width: 16px;
    height: 15.25px;
  }
`,Ke=je.d.span`
    margin: 0 12px;
    font-weight: 600;
    font-size: ${e=>{let{big:t}=e;return t?"22px":"16px"}};
    white-space: nowrap;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-size: 14px;
    margin: 0 7px;
  }
`,et=je.d.span`
    font-size: 16px;
    color: ${e=>{let{theme:t,big:i}=e;return i?t.unchangeableColors.black:t.colors.subtitle}};    font-weight: normal;
    margin-right: 12px;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-size: 12px;
  }
`;var tt=i.p+"static/media/star.12399123.svg";var it=e=>{let{vote_average:t,vote_count:i,big:r=!1}=e;return Object(Ue.jsx)(Ue.Fragment,{children:i?Object(Ue.jsxs)(Xe,{children:[Object(Ue.jsx)(Ye,{src:tt}),Object(Ue.jsxs)(Ke,{big:r,children:[t,Object(Ue.jsxs)(et,{big:r,children:[" ",r&&"/10"]}),Object(Ue.jsxs)(et,{big:r,children:[" ",i," votes"]})]})]}):Object(Ue.jsx)(et,{big:r,children:"No votes yet"})})};const rt=Object(je.d)(me.b)`
    display: flex;
    text-decoration: none;
    background-color: ${e=>{let{theme:t}=e;return t.colors.tileBackground}};
    box-shadow: 0px 4px 12px ${e=>{let{theme:t}=e;return t.colors.shadow||"rgba(186, 199, 213, 0.5)"}};
    border-radius: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};

    &:hover {
    filter: brightness(90%);
  }
`,nt=je.d.img`
  display: block;
  border-radius: 5px;
  flex-shrink: 0;
  object-fit: cover;
  object-position: top;
`,at=je.d.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`,ot=je.d.div`
  font-weight: 500;
  font-size: ${e=>{let{textLength:t}=e;return t>40?"18px":"22px"}};
  line-height: 130%;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 16px;
  }
`,lt=je.d.div`
  font-size: 16px;
  line-height: 150%;
  color: ${e=>{let{theme:t}=e;return t.colors.subtitle}};
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 13px;
  }
`,ct=je.d.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    margin-left: 16px;
    justify-content: unset;
  }
`,st=Object(je.d)(rt)`
    flex-direction: column;
    width: 324px;
    padding: 16px;
    min-height: 650px;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        flex-direction: row;
        width: 100%;
        min-height: unset;
    }
`,dt=Object(je.d)(nt)`
    margin-bottom: 16px;
    height: 434px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    height: 230px;
    margin-right: 20px;
    margin-bottom: 0;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    height: 169px;
    margin-right: 0;
  }
`;var ht=i.p+"static/media/noPosterImage.52ef6ae4.svg";const pt=je.d.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -4px;
  
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
      margin-bottom: 0;
    }
`,bt=je.d.div`
    padding: 8px 16px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.typeBox}};
    border-radius: 5px;
    margin: 4px;
    font-size: 14px;
    line-height: 1;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    flex-grow: 0;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
      font-size: 12px;
      padding: 6px 12px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
      font-size: 10px;
      padding: 4px 8px;
    }
`,xt=Object(je.d)(bt)`
  line-height: 1.4;

  ${e=>{let{clickable:t}=e;return t&&je.c`
    cursor: pointer;
    background-color: ${e=>{let{theme:t}=e;return t.colors.activeNavButton}};

    &:hover{
      filter: brightness(120%);
    }

    &:active{
      filter: brightness(140%);
    }
  `}}

  ${e=>{let{enabled:t}=e;return t&&je.c`
    background: ${e=>{let{theme:t}=e;return t.colors.white}};
    filter: brightness(160%);
  `}}

`;var mt=e=>{let{genre_ids:t,big:i=!1,clickable:r=!1}=e;const n=Object(l.c)(H),a=Object(l.c)(J),o=Object(l.b)(),c=Me();return Object(Ue.jsx)(pt,{children:!a&&t&&n.map((e=>{let{id:n,name:a,enabled:l}=e;return t.includes(n)&&(i?r?Object(Ue.jsx)(xt,{enabled:l,clickable:r,onClick:()=>(e=>{c([{key:"page",value:1}]),o(G(e))})(n),children:a},n):Object(Ue.jsx)(xt,{children:a},n):Object(Ue.jsx)(bt,{children:a},n))}))})};var gt=e=>{let{id:t,poster_path:i,title:r,release_date:n,vote_average:a,vote_count:o,role:l,genre_ids:c}=e;return Object(Ue.jsxs)(st,{to:`/movies/movie/${t}`,children:[Object(Ue.jsx)(dt,{src:i?`https://image.tmdb.org/t/p/w342${i}`:ht,alt:`Plakat filmu ${r}`}),Object(Ue.jsxs)(ct,{children:[Object(Ue.jsxs)(at,{children:[r&&Object(Ue.jsxs)(ot,{textLength:r.length,children:[" ",r]}),n&&Object(Ue.jsx)(lt,{children:l?`${l} (${n.slice(0,4)})`:`${n.slice(0,4)}`}),Object(Ue.jsx)(mt,{genre_ids:c})]}),Object(Ue.jsx)(it,{vote_average:a,vote_count:o})]})]})},jt=i.p+"static/media/loadingCircle.e9394e55.svg";const ut=je.d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 250px;
`,ft=je.d.img`
    width: 91px;
    height: 91px;
    transform: rotate(360deg);
    animation: spin 1.25s infinite linear;  

    @keyframes spin {
    from {
      transform: unset;
    }
    to {
      transform: translateX(360deg);
    }
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        height: 40px;
    }
`;var Ot=()=>Object(Ue.jsx)(ut,{children:Object(Ue.jsx)(ft,{src:jt})});const wt=je.d.div`
    display: grid;
    max-width: 1368px;
    margin: 24px auto 40px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-gap: 24px;
    justify-content: center;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    grid-gap: 16px;
    grid-template-columns: unset;
  }
`,vt=Object(je.d)(wt)`
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, 248px);
  
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
      grid-gap: 24px;
      grid-template-columns: repeat(auto-fill, 208px);
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 173px);
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, 136px);
    }
`,kt=je.d.h1`
    margin: 56px 0 24px;
    line-height: 1.2;
    font-size: 36px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        font-size: 24px;
        margin: 42px 0 18px;
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 18px;
        margin: 24px 0 12px;
    }    
`;var $t,yt,Ct,_t,St,zt,Et,Mt=kt;function Pt(){return Pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Pt.apply(this,arguments)}function Lt(e,t){let{title:i,titleId:n,...a}=e;return r.createElement("svg",Pt({width:333,height:305,viewBox:"0 0 333 305",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),i?r.createElement("title",{id:n},i):null,$t||($t=r.createElement("path",{d:"M285.364 105.521H39.095C37.42 101.333 35.074 91.113 39.095 83.742C43.116 76.371 55.848 72.853 61.712 72.015C58.082 69.502 51.272 55.509 61.712 43.404C70.381 33.352 88.796 36.554 96.893 39.347C95.497 34.6 98.023 22.965 108.075 18.275C120.64 12.411 128.444 21.198 133.749 25.106C135.983 15.334 148.157 -2.87099 178.982 2.49001C203.567 6.76601 211.371 29.295 208.3 39.347C210.534 33.204 237.911 25.106 261.91 39.347C290.767 56.47 293.182 89.606 285.364 105.521Z",fill:"white",stroke:"black",strokeWidth:2.38571})),yt||(yt=r.createElement("path",{d:"M320.004 131.354H215.297C208.876 126.887 197.874 114.937 205.246 102.874C212.617 90.811 235.68 90.588 246.29 91.985C253.829 84.725 263.546 71.549 282.309 73.56C301.073 75.57 310.789 93.66 308.277 102.874C312.186 101.478 321.846 101.031 329.218 110.413C336.589 119.795 326.146 128.283 320.004 131.354Z",fill:"white",stroke:"black",strokeWidth:2.38571})),Ct||(Ct=r.createElement("path",{d:"M107.249 209.415L2.32001 153.219L108.402 256.447L107.249 209.415Z",fill:"white",stroke:"black",strokeWidth:2.38571})),_t||(_t=r.createElement("path",{d:"M137.239 183.256L2.32001 153.219L107.249 209.415L137.239 183.256Z",fill:"white",stroke:"black",strokeWidth:2.38571})),St||(St=r.createElement("path",{d:"M107.777 256.009L76.195 235.763L89.286 223.257C90.471 222.125 92.42 222.498 93.103 223.989L107.777 256.009Z",fill:"#D6E4FF",stroke:"black",strokeWidth:2.38571})),zt||(zt=r.createElement("path",{d:"M52.128 258.132L1.69501 152.781L91.269 221.571L52.128 258.132Z",fill:"white",stroke:"black",strokeWidth:2.38571})),Et||(Et=r.createElement("path",{d:"M111.43 260.355C113.105 271.524 124.329 293.694 155.825 293.024C187.321 292.354 196.311 279.342 196.87 272.92C198.545 266.777 198.21 253.152 183.467 247.791C165.039 241.089 160.934 260.982 163.364 267.057C165.039 271.245 167.552 283.809 201.896 298.887C229.371 310.949 256.901 296.095 267.232 287.16",stroke:"black",strokeWidth:2.38571,strokeDasharray:"7.16 7.16"})))}const Bt=r.forwardRef(Lt);i.p;const Ft=je.d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;

    @media (max-height: 500px) {
        height: 100vh;
    }
`,It=Object(je.d)(Bt)`
    text-align: center;
    max-height: 80vh;
  
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        padding: 50px;
  }
`;var Dt,Nt,Rt=e=>{let{urlQuery:t}=e;return Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsxs)(Mt,{children:["Sorry, there are no results for",t?` "${t}".`:" your search."]}),Object(Ue.jsx)(Ft,{children:Object(Ue.jsx)(It,{})})]})};function At(){return At=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},At.apply(this,arguments)}function Zt(e,t){let{title:i,titleId:n,...a}=e;return r.createElement("svg",At({width:120,height:120,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),i?r.createElement("title",{id:n},i):null,Dt||(Dt=r.createElement("path",{d:"M23.615 105.837C23.55 105.837 23.49 105.837 23.42 105.832C21.845 105.752 20.3 105.412 18.83 104.817C11.595 101.877 8.10501 93.6115 11.04 86.3815L47.645 22.2515C48.905 19.9715 50.815 18.0615 53.145 16.7715C59.97 12.9915 68.6 15.4765 72.375 22.2965L108.74 85.9365C109.55 87.8415 109.895 89.3915 109.98 90.9715C110.175 94.7515 108.885 98.3765 106.355 101.182C103.825 103.987 100.35 105.642 96.575 105.832L23.975 105.837H23.615Z",fill:"#D6E4FF"})),Nt||(Nt=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M55.6253 50.1041C55.6253 47.6941 57.5903 45.7291 60.0003 45.7291C62.4103 45.7291 64.3753 47.6941 64.3753 50.1041V64.2441C64.3753 66.6591 62.4103 68.6191 60.0003 68.6191C57.5903 68.6191 55.6253 66.6591 55.6253 64.2441V50.1041ZM55.625 81.3495C55.625 78.9245 57.59 76.9495 60 76.9495C62.41 76.9495 64.375 78.8995 64.375 81.2945C64.375 83.7595 62.41 85.7245 60 85.7245C57.59 85.7245 55.625 83.7595 55.625 81.3495Z",fill:"#200E32"})))}const Tt=r.forwardRef(Zt);i.p;const Wt=je.d.div`
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`,qt=Object(je.d)(Mt)`
  margin-top: 36px;
`,Qt=je.d.p`
  margin: 0 auto 24px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-size: 18px;
    line-height: 20px;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 14px;
  }
`,Gt=Object(je.d)(me.b)`
  font-weight: 700;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.backButton}};
  margin-bottom: 12px;
  border: none;
  transition: 0.15s;
  
  &:hover {
    transform: scale(1.01);
    filter: brightness(1.05);
  }

  ${e=>{let{big:t}=e;return t&&je.c`
      padding: 16px 24px;
    `}}
`;var Ht=Gt;var Jt=()=>Object(Ue.jsxs)(Wt,{children:[Object(Ue.jsx)(Tt,{}),Object(Ue.jsx)(qt,{children:"Ooops! Something went wrong..."}),Object(Ue.jsxs)(Qt,{children:["Please check your network connection ",Object(Ue.jsx)("br",{})," and try again"]}),Object(Ue.jsx)(Gt,{big:!0,to:"/movies",children:"Back to homepage"})]});var Ut=()=>{const e=+Ee("page"),t=Ee("search"),i=Object(l.c)(x),n=Object(l.c)(u),a=Object(l.c)(m),o=Object(l.c)(g),c=Object(l.c)(H),s=Object(l.b)();return Object(r.useEffect)((()=>{const i=c.filter((e=>e.enabled&&e.id)).map((e=>e.id));s(p(t?`https://api.themoviedb.org/3/search/movie${oe}${le}&query=${t}&page=${e<1||e>500?1:e}`:`https://api.themoviedb.org/3/discover/movie${oe}${le}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${e<1||e>500?1:e}&with_genres=${i.join(",")}`))}),[e,t,s,c]),Object(Ue.jsxs)(Oe,{children:[!t&&Object(Ue.jsx)(mt,{genre_ids:c.map((e=>e.id)),clickable:!0,big:!0}),a?Object(Ue.jsx)(Ot,{}):o?Object(Ue.jsx)(Jt,{}):i.length?Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(Mt,{children:t?`Search results for "${t}" (${n})`:"Popular Movies"}),Object(Ue.jsx)(wt,{children:i.map((e=>{let{id:t,poster_path:i,title:r,release_date:n,vote_average:a,vote_count:o,genre_ids:l}=e;return Object(Ue.jsx)(gt,{id:t,poster_path:i,title:r,release_date:n,vote_average:a,vote_count:o,genre_ids:l},t)}))}),Object(Ue.jsx)(Ve,{})]}):Object(Ue.jsx)(Rt,{urlQuery:t})]})};const Vt=Object(je.d)(rt)`
    width: 248px;
    flex-direction: column;
    overflow-wrap: anywhere;
    padding: 16px;
    align-items: center;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        width: 208px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        width: 174px;
        padding: 8px;
  }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        width: 136px;
  }
`,Xt=Object(je.d)(nt)`
  width: 208px;
  margin-bottom: 16px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        width: 176px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        width: 158px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        width: 120px;
  }
`,Yt=Object(je.d)(ct)`
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    margin: 0 auto;
`,Kt=Object(je.d)(ot)`
    text-align: center;
    font-size: ${e=>{let{subtitle:t}=e;return t?"18px":"20px"}};
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        font-size: 16px;
  }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 14px;
  }
`,ei=je.d.p`
    font-size: ${e=>{let{textLength:t}=e;return t>20?"12px":"16px"}};
    line-height: 150%;
    text-align: center;
    color: ${e=>{let{theme:t}=e;return t.colors.subtitle}};
    margin: 0;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        font-size: 14px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 13px;
  }
`;var ti=e=>{let{profile_path:t,id:i,name:r,subtitle:n=""}=e;return Object(Ue.jsxs)(Vt,{to:`/people/person/${i}`,children:[Object(Ue.jsx)(Xt,{src:t?`https://image.tmdb.org/t/p/w185${t}`:ht,alt:`Zdj\u0119cie ${r}`}),Object(Ue.jsx)(Yt,{children:Object(Ue.jsxs)(Ue.Fragment,{children:[r&&Object(Ue.jsx)(Kt,{textLength:r.length,subtitle:n,children:r}),n&&Object(Ue.jsx)(ei,{textLength:n.length,children:n})]})})]})};const ii=Object(je.d)(rt)`
  display: block;
  width: 100%;
  padding: 40px;
  margin: 40px auto 64px;
  overflow: hidden;

  &:hover {
    filter: unset;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    display: flex;
    flex-direction: column;
    min-height: unset;
    padding: 25px;
    margin: 23px 0 42px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    padding: 16px;
    margin: 7px auto 21px;
  }
`,ri=je.d.span`
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    display: flex;
  }
`,ni=je.d.div`
 display: grid;
  height: fit-content;
  grid-gap: 24px;
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    display: grid;
    grid-gap: 12px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    grid-gap: 8px;
  }
`,ai=je.d.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-bottom: 24px;
  overflow-wrap: anywhere;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 0;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 16px;
  }
`,oi=je.d.div`
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 8px;
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    font-size: 12px;
  }
`,li=je.d.span`
  color: ${e=>{let{theme:t}=e;return t.colors.detailName}};
`,ci=je.d.div`
  font-size: 20px;
  line-height: 160%;
  margin-top: 40px;
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    font-weight: 400;
    margin-top: 25px;
    font-size: 17px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`,si=Object(je.d)(nt)`
  float: left;
  object-fit: cover;
  height: 464px;
  margin: 0 40px 16px 0;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
    margin: 0 25px 6px 0;
    height: 316px;
  }
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    height: 169px;
    margin: 0 16px 0 0;
  }
`;var di=e=>{let{poster_path:t,title:i,release_date:r,vote_average:n,vote_count:a,genre_ids:o,production_countries:l,overview:c}=e;const s=new Date(r);return Object(Ue.jsxs)(ii,{as:"div",children:[Object(Ue.jsxs)(ri,{children:[Object(Ue.jsx)(si,{src:t?`https://image.tmdb.org/t/p/w342${t}`:ht,alt:`Plakat filmu ${i}`}),Object(Ue.jsxs)(ni,{children:[i&&Object(Ue.jsx)(ai,{children:i}),l&&l.length>0&&Object(Ue.jsxs)(oi,{children:[Object(Ue.jsx)(li,{children:"Production: "}),l.map((e=>e.name)).join(", ")]}),r&&Object(Ue.jsxs)(oi,{children:[Object(Ue.jsx)(li,{children:"Release date: "})," ",`${s.toLocaleDateString()}`]}),Object(Ue.jsx)(mt,{genre_ids:o}),Object(Ue.jsx)(it,{vote_average:n,vote_count:a,big:!0})]})]}),c&&Object(Ue.jsx)(ci,{children:c})]})};const hi=je.d.div`
    width: 100%;
    background-color: ${e=>{let{theme:t}=e;return t.unchangeableColors.black}};
    color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
`,pi=je.d.div`
    max-width: 1368px;
    position: relative;
    margin: auto;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        margin: 0 10%;
    }
`,bi=je.d.img`
    display: block;
    width: 100%;
`,xi=je.d.div`
    padding: 16px;
    background: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
    background-position: center;
    background-size: 140%;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: bottom;
`,mi=je.d.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        margin-bottom: 10px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
        margin-bottom: 4px;
        flex-direction: row;
        align-items: center;
    }
`,gi=je.d.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin-bottom: 24px;
    color: inherit;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        font-size: 32px;
        margin-bottom: 8px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 20px;
    }
`,ji=je.d.img`
    width: 40px;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        width: 22px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        width: 14px;
    }
`,ui=je.d.span`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        line-height: 1;
        font-size: 22px;
        margin-bottom: 12px;
        margin-right: 16px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 14px;
        margin-right: 8px;
        margin-bottom: 8px;
    }
`,fi=je.d.span`
    margin-bottom: 16px ;
    font-size: 16px;
    line-height: 120%;
    font-weight: 400;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
        margin-bottom: 0;
        font-size: 12px;
    }
    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 10px;
    }
`;var Oi=e=>{let{title:t,backdrop_path:i,vote_average:r,vote_count:n}=e;return Object(Ue.jsx)(hi,{children:Object(Ue.jsxs)(pi,{children:[Object(Ue.jsxs)(xi,{children:[Object(Ue.jsx)(gi,{children:t}),Object(Ue.jsxs)(mi,{children:[Object(Ue.jsxs)(ui,{children:[Object(Ue.jsx)(ji,{src:tt})," ",r," ",Object(Ue.jsx)(fi,{children:"/ 10"})]}),Object(Ue.jsxs)(fi,{children:[n," votes"]})]})]}),Object(Ue.jsx)(bi,{src:`https://image.tmdb.org/t/p/w1280${i}`})]})})};var wi=()=>{const e=10,{id:t}=Object(ge.i)(),i=Object(l.b)(),n=Object(l.c)(y),a=Object(l.c)(C),o=Object(l.c)(_),c=Object(l.c)(S),[s,d]=Object(r.useState)(e),[h,p]=Object(r.useState)(e);return Object(r.useEffect)((()=>{i($({path1:`https://api.themoviedb.org/3/movie/${t}${oe}${le}`,path2:`https://api.themoviedb.org/3/movie/${t}/credits${oe}`})),i(w(t))}),[t,i]),Object(Ue.jsx)(Ue.Fragment,{children:o?Object(Ue.jsx)(Ot,{}):c?Object(Ue.jsx)(Jt,{}):Object(Ue.jsxs)(Ue.Fragment,{children:[n.backdrop_path&&Object(Ue.jsx)(Oi,{title:n.title,backdrop_path:n.backdrop_path,vote_average:n.vote_average,vote_count:n.vote_count}),Object(Ue.jsxs)(Oe,{children:[Object(Ue.jsx)(di,{poster_path:n.poster_path,title:n.title,release_date:n.release_date,vote_average:n.vote_average,vote_count:n.vote_count,genre_ids:n.genres&&n.genres.map((e=>e.id)),production_countries:n.production_countries,overview:n.overview}),a.cast&&a.cast.length>0&&Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(Mt,{as:"h2",children:"Cast"}),Object(Ue.jsx)(vt,{children:a.cast.slice(0,s).map((e=>{let{profile_path:t,id:i,character:r,name:n,credit_id:a}=e;return Object(Ue.jsx)(ti,{profile_path:t,id:i,name:n,subtitle:r},a)}))}),a.cast.length>s&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{d(a.cast.length)},children:"Show All"}),a.cast.length>e&&a.cast.length===s&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{d(e)},children:"Hide"})]}),a.crew&&a.crew.length>0&&Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(Mt,{as:"h2",children:"Crew"}),Object(Ue.jsx)(vt,{children:a.crew.slice(0,h).map((e=>{let{profile_path:t,id:i,job:r,name:n,credit_id:a}=e;return Object(Ue.jsx)(ti,{profile_path:t,id:i,name:n,subtitle:r},a)}))}),a.crew.length>h&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{p(a.crew.length)},children:"Show All"}),a.crew.length>e&&a.crew.length===h&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{p(e)},children:"Hide"})]})]})]})})};var vi=()=>{const e=Object(l.b)(),t=+Ee("page"),i=Ee("search"),n=Object(l.c)(x),a=Object(l.c)(u),o=Object(l.c)(m),c=Object(l.c)(g);return Object(r.useEffect)((()=>{e(p(i?`https://api.themoviedb.org/3/search/person${oe}${le}&query=${i}&page=${t<1||t>500?1:t}`:`https://api.themoviedb.org/3/person/popular${oe}${le}&page=${t<1||t>500?1:t}`))}),[t,i,e]),Object(Ue.jsx)(Oe,{children:o?Object(Ue.jsx)(Ot,{}):c?Object(Ue.jsx)(Jt,{}):n.length?Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(Mt,{children:i?`Search results for "${i}" (${a})`:"Popular People"}),Object(Ue.jsx)(vt,{children:n.map((e=>{let{profile_path:t,id:i,name:r}=e;return Object(Ue.jsx)(ti,{profile_path:t,id:i,name:r},i)}))}),Object(Ue.jsx)(Ve,{})]}):Object(Ue.jsx)(Rt,{urlQuery:i})})};const ki=Object(je.d)(nt)`
  float: left;
  object-fit: cover;
  height: 564px;
  margin-right: 40px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.screenSmall}}px) {
    height: 439px;
    margin-right: 25px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.bigMobile}}px) {
    height: 300px;
  }
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
    height: 163px;
    margin-right: 16px;
  }
`;var $i=i.p+"static/media/noProfileImage.217e5307.svg";var yi=e=>{let{profile_path:t,name:i,birthday:r,place_of_birth:n,biography:a}=e;const o=new Date(r);return Object(Ue.jsxs)(ii,{as:"div",children:[Object(Ue.jsxs)(ri,{children:[Object(Ue.jsx)(ki,{src:t?`https://image.tmdb.org/t/p/h632${t}`:$i,alt:`Photo of ${i}`}),Object(Ue.jsxs)(ni,{children:[i&&Object(Ue.jsx)(ai,{children:i}),r&&Object(Ue.jsxs)(oi,{children:[Object(Ue.jsx)(li,{children:"Date of birth: "})," ",o.toLocaleDateString()]}),n&&Object(Ue.jsxs)(oi,{children:[Object(Ue.jsx)(li,{children:"Place of birth: "})," ",n]})]})]}),a&&Object(Ue.jsx)(ci,{children:a})]})};var Ci=()=>{const{id:e}=Object(ge.i)(),t=Object(l.b)(),i=Object(l.c)(y),n=Object(l.c)(C),a=Object(l.c)(_),o=Object(l.c)(S),[c,s]=Object(r.useState)(8),[d,h]=Object(r.useState)(8);return Object(r.useEffect)((()=>{t($({path1:`https://api.themoviedb.org/3/person/${e}${oe}${le}`,path2:`https://api.themoviedb.org/3/person/${e}/movie_credits${oe}${le}`})),t(w(e))}),[e,t]),Object(Ue.jsx)(Oe,{children:a?Object(Ue.jsx)(Ot,{}):o?Object(Ue.jsx)(Jt,{}):Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(yi,{profile_path:i.profile_path,name:i.name,birthday:i.birthday,place_of_birth:i.place_of_birth,biography:i.biography}),n.cast&&n.cast.length>0&&Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsxs)(Mt,{as:"h2",children:["Cast ",`(${n.cast.length})`]}),Object(Ue.jsx)(wt,{children:n.cast.slice(0,c).map((e=>{let{poster_path:t,id:i,title:r,release_date:n,vote_average:a,vote_count:o,character:l,credit_id:c,genre_ids:s}=e;return Object(Ue.jsx)(gt,{poster_path:t,id:i,title:r,release_date:n,vote_average:a,vote_count:o,role:l,genre_ids:s},c)}))}),n.cast.length>c&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{s(n.cast.length)},children:"Show All"}),n.cast.length>8&&n.cast.length===c&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{s(8)},children:"Hide"})]}),n.crew&&n.crew.length>0&&Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsxs)(Mt,{as:"h2",children:["Crew ",`(${n.crew.length})`]}),Object(Ue.jsx)(wt,{children:n.crew.slice(0,d).map((e=>{let{poster_path:t,id:i,title:r,release_date:n,vote_average:a,vote_count:o,job:l,credit_id:c,genre_ids:s}=e;return Object(Ue.jsx)(gt,{poster_path:t,id:i,title:r,release_date:n,vote_average:a,vote_count:o,role:l,genre_ids:s},c)}))}),n.crew.length>d&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{h(n.crew.length)},children:"Show All"}),n.crew.length>8&&n.crew.length===d&&Object(Ue.jsx)(Ht,{as:"button",onClick:()=>{h(8)},children:"Hide"})]})]})})};const _i=je.d.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    max-height: 500px;
    overflow: auto;
    background-color: ${e=>{let{theme:t}=e;return t.colors.tileBackground}};
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    border-radius: 0 0 10px 10px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.typeBox}};
    border-top: none;
    z-index: 1;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${e=>{let{theme:t}=e;return t.unchangeableColors.cornsilk}};
        border-radius: 2px;
    }
`,Si=je.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,zi=Object(je.d)(Bt)`
  text-align: center;
  margin: 70px;
  height: 200px;
`,Ei=Object(je.d)(Mt)`
  font-size: 20px;
  margin: 42px 15px 18px;
  text-align: center;
`;var Mi=e=>{let{urlQuery:t}=e;return Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsxs)(Ei,{children:['Sorry, there are no results for "',t,'"']}),Object(Ue.jsx)(Si,{children:Object(Ue.jsx)(zi,{})})]})};const Pi=Object(je.d)(me.b)`
    display: flex;
    flex-shrink: 0;
    padding: 16px;
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.typebox}};
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-decoration: none;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    
    :hover {
        background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
    }
`,Li=je.d.img`
    object-fit: cover;
    flex: 0 1 auto;
    display: block;
    width: 80px;
    height: 140px;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        height: 100px;
    }
`,Bi=je.d.p`
    margin-left: 24px;
    font-size: 20px;

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}px) {
        font-size: 12px;
        margin: 8px;
        line-height: 1.2;
    }
`;var Fi=e=>{let{pathText:t,data:{id:i,image:r,text:n}}=e;return Object(Ue.jsxs)(Pi,{to:"movie"===t?`/movies/movie/${i}`:`/people/person/${i}`,children:[Object(Ue.jsx)(Li,{src:r}),Object(Ue.jsx)(Bi,{children:n})]})};var Ii=e=>{let{query:t}=e;const i=Object(l.b)(),n=Object(l.c)(I),a=Object(l.c)(D),o=Object(ge.h)().pathname.includes("movie")?"movie":"person";return Object(r.useEffect)((()=>{i(L(`https://api.themoviedb.org/3/search/${o}${oe}${le}&query=${t}`))}),[t,i,o]),Object(Ue.jsx)(_i,{children:a?Object(Ue.jsx)(Ot,{}):n.length?n.map((e=>Object(Ue.jsx)(Fi,{pathText:o,data:"movie"===o?{id:e.id,text:e.title,image:e.poster_path?`https://image.tmdb.org/t/p/w154${e.poster_path}`:ht}:{id:e.id,text:e.name,image:e.profile_path?`https://image.tmdb.org/t/p/w185${e.profile_path}`:$i}},e.id))):Object(Ue.jsx)(Mi,{urlQuery:t})})},Di=i.p+"static/media/magnifier.95c5dc64.svg";const Ni=je.d.input`
    width: 432px;
    max-width: 90vw;
    height: 48px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.typeBox}};
    border-radius: ${e=>{let{open:t,value:i}=e;return t&&i?"24px 24px 0 0":"33px"}};
    padding: 0;
    padding-left: 64px;
    background-color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
   
    &:focus {
        outline: none;
    }

    &::placeholder {
        font-size: 16px;
        line-height: 1.5;
        color: ${e=>{let{theme:t}=e;return t.colors.subtitle}};
    }
`,Ri=je.d.form`
    position: relative;
`,Ai=je.d.button`
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url(${Di});
    background-size:24px;
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

`;var Zi=()=>{const e=Object(l.c)(N),t=Object(l.c)(R),i=Object(l.b)(),n=Me(),a=Object(ge.h)(),o=a.pathname.includes("movie")?"movies":"people";Object(r.useEffect)((()=>{i(B(""))}),[a,i]);return Object(Ue.jsxs)(Ri,{onSubmit:t=>{t.preventDefault(),n([{key:"search",value:e},{key:"page",value:1}]),i(B(""))},children:[Object(Ue.jsx)(Ai,{}),Object(Ue.jsx)(Ni,{placeholder:`Search for ${o}`,value:e,open:t,onChange:e=>{let{target:t}=e;return r=t.value,i(B(r)),void i(F(!0));var r}}),e&&t&&Object(Ue.jsx)(Ii,{query:e})]})},Ti=i.p+"static/media/logo.12cf1316.svg";const Wi=je.b`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };
    body {
        background: ${e=>{let{theme:t}=e;return t.colors.background}};
        font-family: "Poppins", sans-serif;
    };
    main {
        padding-bottom: ${75}px;
    };
    #root {
        min-height: 100vh;
        position: relative;
    };
`,qi=je.d.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background: ${e=>{let{theme:t}=e;return t.unchangeableColors.black}};
  color: ${e=>{let{theme:t}=e;return t.unchangeableColors.white}};
  height: ${50}px;
  position: absolute;
  bottom: 0;
  width: 100%;
`,Qi=je.d.div`
  width: 90px;
  padding: 5px;
  margin: 0 10px;
  border-radius: 5px;
  transition: all 0.5s;
  background: ${e=>{let{theme:t}=e;return t.colors.text}};
  cursor: pointer;
`,Gi=je.d.button`
  cursor: pointer;
  display: block;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 5px;
  height: 20px;
  width: 20px;
  padding: 0;
  transition: all 0.5s;
  transform: ${e=>{let{isNormalTheme:t}=e;return t?"unset":"translateX(300%)"}};
`;var Hi=()=>{const e=Object(l.b)(),t=Object(l.c)(U);return Object(Ue.jsxs)(qi,{children:["Light theme",Object(Ue.jsx)(Qi,{onClick:()=>e(Q(!t)),children:Object(Ue.jsx)(Gi,{isNormalTheme:t})}),"Dark theme"]})};const Ji={black:"#000000",cornsilk:"#E4E6F0",darkWoodsmoke:"#111113",frenchGray:"#B9BBC1",mineShaft:"#333333",pattensBlue:"#d6e4ff",scienceBlue:"#0044CC",shark:"#212327",stormGray:"#74788B",waterloo:"#7E839A",whisper:"#F5F5FA",white:"#FFFFFF",woodsmoke:"#18181B"},Ui={mobile:"480",bigMobile:"767",screenSmall:"1368"},Vi={colors:{activeNavButton:Ji.pattensBlue,backButton:Ji.scienceBlue,background:Ji.whisper,detailName:Ji.stormGray,disabledNavButton:Ji.cornsilk,subtitle:Ji.waterloo,text:Ji.woodsmoke,tileBackground:Ji.white,typeBox:Ji.cornsilk},unchangeableColors:Ji,breakpoints:Ui},Xi={colors:{activeNavButton:Ji.shark,backButton:Ji.scienceBlue,background:Ji.woodsmoke,detailName:Ji.stormGray,disabledNavButton:Ji.darkWoodsmoke,shadow:Ji.shark,subtitle:Ji.waterloo,text:Ji.frenchGray,tileBackground:Ji.black,typeBox:Ji.woodsmoke},unchangeableColors:Ji,breakpoints:Ui};var Yi=function(){const e=Object(l.b)(),t=Object(l.c)(U),i=Object(l.c)(R);return Object(r.useEffect)((()=>{e(T())}),[e]),Object(Ue.jsxs)(je.a,{theme:t?Vi:Xi,children:[Object(Ue.jsx)(Wi,{}),Object(Ue.jsx)(me.a,{children:Object(Ue.jsxs)("main",{onClick:()=>i&&e(F(!1)),children:[Object(Ue.jsx)(fe,{children:Object(Ue.jsx)(we,{children:Object(Ue.jsxs)(ve,{children:[Object(Ue.jsxs)(ke,{children:[Object(Ue.jsx)(Se,{to:"/movies",children:Object(Ue.jsx)(ze,{src:Ti})}),Object(Ue.jsxs)(ye,{children:[Object(Ue.jsx)(Ce,{children:Object(Ue.jsx)(_e,{to:"/movies",children:"MOVIES"})}),Object(Ue.jsx)(Ce,{children:Object(Ue.jsx)(_e,{to:"/people",children:"PEOPLE"})})]})]}),Object(Ue.jsx)($e,{children:Object(Ue.jsx)(Zi,{})})]})})}),Object(Ue.jsxs)(ge.d,{children:[Object(Ue.jsx)(ge.b,{path:"/movies/movie/:id",children:Object(Ue.jsx)(wi,{})}),Object(Ue.jsx)(ge.b,{path:"/movies",children:Object(Ue.jsx)(Ut,{})}),Object(Ue.jsx)(ge.b,{path:"/people/person/:id",children:Object(Ue.jsx)(Ci,{})}),Object(Ue.jsx)(ge.b,{path:"/people",children:Object(Ue.jsx)(vi,{})}),Object(Ue.jsx)(ge.b,{path:"/",children:Object(Ue.jsx)(ge.a,{to:"/movies"})})]})]})}),Object(Ue.jsx)(Hi,{})]})};var Ki=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,87)).then((t=>{let{getCLS:i,getFID:r,getFCP:n,getLCP:a,getTTFB:o}=t;i(e),r(e),n(e),a(e),o(e)}))};o.a.render(Object(Ue.jsx)(n.a.StrictMode,{children:Object(Ue.jsx)(l.a,{store:xe,children:Object(Ue.jsx)(Yi,{})})}),document.getElementById("root")),Ki()}},[[86,1,2]]]);
//# sourceMappingURL=main.d1af39ec.chunk.js.map