import{y as S,d as A,t as x,k as l,aJ as P,bb as V,o as p,c as d,m as c,p as i,w as k,q as a,b9 as B,a3 as C,bc as m,F as I,A as D,j as N,bd as q,be as R,bf as T}from"./index.7138b669.js";import{s as L}from"./axios.4960f1a7.js";import{V as w}from"./VBtn.a6b3b781.js";import"./axios.364130a5.js";const b=n=>(R("data-v-d2275827"),n=n(),T(),n),E={key:0,class:"d-none d-md-flex align-center text-disabled"},U=b(()=>c("span",{class:"me-3"},"Search",-1)),z=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),O=[U,z],j=A({inheritAttrs:!1}),F=Object.assign(j,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=x(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=N();P(()=>{L.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=V(()=>q(()=>import("./AppBarSearch.1f2933ed.js"),["assets/AppBarSearch.1f2933ed.js","assets/index.7138b669.js","assets/index.fe3ab5db.css","assets/VTextField.e3a82c45.js","assets/index.0ab14008.js","assets/easing.36b781ab.js","assets/forwardRefs.c003b6b8.js","assets/VTextField.539df929.css","assets/VBtn.a6b3b781.js","assets/VBtn.1958adaf.css","assets/VDivider.4e8da04b.js","assets/VDivider.5d6d66e0.css","assets/VList.a1d44376.js","assets/VList.f3553822.css","assets/VRow.71f27439.js","assets/VRow.0b79ff68.css","assets/VDialog.b6576d0e.js","assets/scopeId.8cf76934.js","assets/lazy.858355b6.js","assets/scopeId.72fa3373.css","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(r,t)=>(p(),d(I,null,[c("div",C({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:t[0]||(t[0]=o=>e.value=!a(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:k(()=>[i(D,{icon:"tabler-search",size:"24"})]),_:1}),a(g)==="vertical"?(p(),d("span",E,O)):B("",!0)],16),i(a(y),{isDialogVisible:a(e),"onUpdate:isDialogVisible":t[1]||(t[1]=o=>m(e)?e.value=o:null),"search-query":a(s),"onUpdate:search-query":t[2]||(t[2]=o=>m(s)?s.value=o:null),"search-results":a(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),M=S(F,[["__scopeId","data-v-d2275827"]]);export{M as default};
