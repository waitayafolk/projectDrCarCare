import{j as _,o,b as l,w as e,p as t,A as r,bh as h,bi as g,bj as x,z as V,q as u,bk as y,bl as v,c as A,F as C,a as S,bm as k,s as z,G as w,m as p,x as d}from"./index.982c45c7.js";import{V as B}from"./VMenu.75647eec.js";import{V as m}from"./VBtn.dd0be6a2.js";import{V as I}from"./VDivider.960e3676.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.77e27523.js";import"./easing.36b781ab.js";import"./lazy.33f651dc.js";const D={class:"text-base font-weight-semibold mt-2 mb-0"},N={class:"text-sm"},q={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(n){const s=n,i=_();return(b,c)=>(o(),l(m,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(r,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(B,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(h,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(g,{class:"py-4"},{append:e(()=>[t(m,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(r,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(x,null,{default:e(()=>[V("Shortcuts")]),_:1})]),_:1}),t(I),t(u(y),{options:{wheelPropagation:!1}},{default:e(()=>[t(v,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),A(C,null,S(s.shortcuts,(a,f)=>(o(),l(k,{key:a.title,cols:"6",class:z(["text-center border-t cursor-pointer pa-4",(f+1)%2?"border-e":""]),onClick:F=>u(i).push(a.to)},{default:e(()=>[t(w,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),p("h6",D,d(a.title),1),p("span",N,d(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},G={__name:"NavbarShortcuts",setup(n){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,b)=>{const c=q;return o(),l(c,{shortcuts:s})}}};export{G as default};
