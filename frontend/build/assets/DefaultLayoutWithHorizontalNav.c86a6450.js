import{o as s,c as d,F as g,a as $,b as f,e as w,_ as b,f as k,g as C,i as N,j as S,k as V,l as z,m as t,n as m,p as o,q as e,s as v,t as L,w as r,V as R,v as h,x as I,T as x,r as y}from"./index.86c412e1.js";import B from"./Footer.e9fa771f.js";import E from"./NavbarThemeSwitcher.e03d9a7d.js";import H from"./UserProfile.d5aa5b23.js";import{V as T}from"./VSpacer.ded02d8b.js";import"./VBtn.109c336b.js";import"./sweetalert2.all.e105506d.js";import"./VBadge.ac597b22.js";import"./VMenu.e205bd21.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.521ae612.js";import"./easing.36b781ab.js";import"./lazy.72574a30.js";import"./VList.ad2ad9f6.js";import"./index.beaccebb.js";import"./VDivider.cb7200e8.js";const W={class:"nav-items"},q={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(u){const i=l=>"children"in l?b:k;return(l,p)=>(s(),d("ul",W,[(s(!0),d(g,null,$(u.navItems,(a,c)=>(s(),f(w(i(a)),{key:c,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},P={class:"horizontal-nav-content-container"},Y={class:"layout-page-content"},A={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(u){const{y:i}=C(),{width:l}=N(),p=S(),a=V(!1);p.beforeEach(()=>{a.value=!0}),p.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=z();return(n,O)=>(s(),d("div",{class:v(["layout-wrapper",e(c)(e(l),e(i))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[t("div",D,[t("div",F,[m(n.$slots,"navbar")])]),t("div",j,[t("div",P,[o(e(q),{"nav-items":u.navItems},null,8,["nav-items"])])])],2),t("main",Y,[n.$slots["content-loading"]?(s(),d(g,{key:0},[e(a)?m(n.$slots,"content-loading",{key:0}):m(n.$slots,"default",{key:1})],64)):m(n.$slots,"default",{key:1})]),t("footer",A,[t("div",G,[m(n.$slots,"footer")])])],2))}},K=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],M={class:"app-title font-weight-bold leading-normal text-xl"},pe={__name:"DefaultLayoutWithHorizontalNav",setup(u){const{appRouteTransition:i}=L();return(l,p)=>{const a=y("RouterLink"),c=y("RouterView");return s(),f(e(J),{"nav-items":e(K)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(e(R),{nodes:e(h).app.logo},null,8,["nodes"]),t("h1",M,I(e(h).app.title),1)]),_:1}),o(T),o(E,{class:"me-2"}),o(H)]),footer:r(()=>[o(B)]),default:r(()=>[o(c,null,{default:r(({Component:_,route:n})=>[o(x,{name:e(i),mode:"out-in"},{default:r(()=>[(s(),f(w(_),{key:n.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{pe as default};