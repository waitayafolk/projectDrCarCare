import{y as S,d as A,t as x,k as l,aJ as P,bb as V,o as p,c as d,m as c,p as i,w as k,q as a,b9 as B,a3 as C,bc as b,F as I,bd as D,A as N,j as q,be as R,bf as T,bg as L}from"./index.c9a23eda.js";import{V as w}from"./VBtn.e30531eb.js";const m=n=>(T("data-v-d2275827"),n=n(),L(),n),E={key:0,class:"d-none d-md-flex align-center text-disabled"},U=m(()=>c("span",{class:"me-3"},"Search",-1)),z=m(()=>c("span",{class:"meta-key"},"\u2318K",-1)),O=[U,z],j=A({inheritAttrs:!1}),F=Object.assign(j,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=x(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=q();P(()=>{D.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=V(()=>R(()=>import("./AppBarSearch.41753d01.js"),["assets/AppBarSearch.41753d01.js","assets/index.c9a23eda.js","assets/index.26d4631a.css","assets/VTextField.b859009d.js","assets/index.ab7780b7.js","assets/easing.36b781ab.js","assets/forwardRefs.c003b6b8.js","assets/VTextField.539df929.css","assets/VBtn.e30531eb.js","assets/VBtn.1958adaf.css","assets/VDivider.51fd3155.js","assets/VDivider.5d6d66e0.css","assets/VList.2218df87.js","assets/VList.f3553822.css","assets/VDialog.89c7b6f8.js","assets/scopeId.d7134e4e.js","assets/lazy.c926257a.js","assets/scopeId.72fa3373.css","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(r,t)=>(p(),d(I,null,[c("div",C({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:t[0]||(t[0]=o=>e.value=!a(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:k(()=>[i(N,{icon:"tabler-search",size:"24"})]),_:1}),a(g)==="vertical"?(p(),d("span",E,O)):B("",!0)],16),i(a(y),{isDialogVisible:a(e),"onUpdate:isDialogVisible":t[1]||(t[1]=o=>b(e)?e.value=o:null),"search-query":a(s),"onUpdate:search-query":t[2]||(t[2]=o=>b(s)?s.value=o:null),"search-results":a(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),J=S(F,[["__scopeId","data-v-d2275827"]]);export{J as default};