import{_ as C}from"./DialogCloseBtn.98c8174b.js";import{s as p}from"./axios.b493e35e.js";import{y as k,bn as D,bo as N,o as i,c as u,m as l,p as t,w as e,A as h,z as n,a1 as S,a2 as B,bq as T,F as U,a as z,bg as _,bi as F,bp as V,x as c,b9 as g}from"./index.d3d8cff1.js";import{f as q}from"./helpers.segment.1007a634.js";import{d as L,t as M}from"./derlimiter.d68341e6.js";import{S as x}from"./sweetalert2.all.e105506d.js";import{a as m,V as y}from"./VRow.fac2c1a6.js";import{V as d}from"./VBtn.677289e9.js";import{V as R}from"./VTable.77ce31bd.js";import{V as b}from"./VTextField.b1821405.js";import{V as j}from"./VSwitch.b14a10af.js";import{V as A}from"./VDialog.d13a9b10.js";import{V as w}from"./VChip.04371432.js";import"./axios.364130a5.js";import"./index.380a4757.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VSelectionControl.81ed823d.js";import"./scopeId.b00ccebd.js";import"./lazy.c97674e8.js";const E={name:"user-profile",computed:{moment(){return D}},data(){return{loading:!0,derlimiter:L,thaiDateNotime:M,pagination:[],page:1,route:N(),show:!1,customer:{id:0,mobile:"",name:"",status:!1},customers:[]}},methods:{formatNumber:q,async getData(){this.loading=!0,await p({method:"get",url:"/customers",data:[],params:[]}).then(r=>{this.customers=r.data,this.loading=!1}).catch(r=>{console.log(r)})},async saveData(){await p({method:"post",url:"/customers/save-customer",data:this.customer,params:[]}).then(r=>{r.status=="success"&&(x.fire({icon:"success",title:"Success",text:r.message}),this.show=!1,this.getData())}).catch(r=>{console.log(r),this.show=!1,x.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})})},async openModal(){this.show=!0,this.customer={id:0,mobile:"",name:"",status:!1}}},mounted(){this.getData()}},I={mode:"out-in"},O=l("h1",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",-1),P={class:"v-overlay--absolute text-center w-100 h-100",style:{"background-color":"rgba(255,255,255,.8)","z-index":"9"}},G=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"start"}},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"),l("th",{style:{"text-align":"start"}},"\u0E0A\u0E37\u0E48\u0E2D"),l("th",{style:{"text-align":"center"}},"\u0E2A\u0E16\u0E32\u0E19\u0E30"),l("th",{style:{"text-align":"center"}},"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07"),l("th",{style:{"text-align":"center"}},"\u0E41\u0E01\u0E49\u0E44\u0E02")])],-1),H={style:{"text-align":"start"}},J={style:{"text-align":"start"}},K={style:{"text-align":"center"}},Q={key:0},W={key:1},X={style:{"text-align":"center"}},Y={style:{"text-align":"center"}};function Z(r,o,$,tt,a,f){const v=C;return i(),u("div",null,[l("div",I,[t(y,{class:"mb-3"},{default:e(()=>[t(m,null,{default:e(()=>[O]),_:1}),t(m,{md:"2",class:"text-end"},{default:e(()=>[t(d,{onClick:o[0]||(o[0]=s=>f.openModal())},{default:e(()=>[t(h,{start:"",icon:"tabler-square-rounded-plus-filled"}),n(" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 ")]),_:1})]),_:1})]),_:1})]),t(_,null,{default:e(()=>[S(l("div",P,[t(T,{indeterminate:"",color:"primary"})],512),[[B,a.loading]]),t(R,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:e(()=>[G,l("tbody",null,[(i(!0),u(U,null,z(a.customers,s=>(i(),u("tr",null,[l("td",H,c(s.mobile),1),l("td",J,c(s.name),1),l("td",K,[s.status==!0?(i(),u("div",Q,[t(w,{color:"success"},{default:e(()=>[n("\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")]),_:1})])):g("",!0),s.status==!1?(i(),u("div",W,[t(w,{color:"error"},{default:e(()=>[n("\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")]),_:1})])):g("",!0)]),l("td",X,c(a.thaiDateNotime(s.create_date)),1),l("td",Y,[t(d,{size:"small",color:"primary",onClick:et=>(a.customer=s,a.show=!0)},{default:e(()=>[t(h,{start:"",icon:"tabler-edit"}),n(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),_:2},1032,["onClick"])])]))),256))])]),_:1})]),_:1}),t(A,{modelValue:a.show,"onUpdate:modelValue":o[7]||(o[7]=s=>a.show=s),"max-width":"800"},{default:e(()=>[t(v,{onClick:o[1]||(o[1]=s=>a.show=!1)}),t(_,null,{default:e(()=>[t(F,null,{default:e(()=>[n(" \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 ")]),_:1}),t(V,null,{default:e(()=>[t(y,null,{default:e(()=>[t(m,{cols:"6",md:"6"},{default:e(()=>[t(b,{type:"text",modelValue:a.customer.mobile,"onUpdate:modelValue":o[2]||(o[2]=s=>a.customer.mobile=s),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"},null,8,["modelValue"])]),_:1}),t(m,{cols:"6",md:"6"},{default:e(()=>[t(b,{type:"text",modelValue:a.customer.name,"onUpdate:modelValue":o[3]||(o[3]=s=>a.customer.name=s),label:"\u0E0A\u0E37\u0E48\u0E2D"},null,8,["modelValue"])]),_:1}),t(m,{cols:"12",md:"12"},{default:e(()=>[t(j,{modelValue:a.customer.status,"onUpdate:modelValue":o[4]||(o[4]=s=>a.customer.status=s),label:"\u0E2A\u0E16\u0E32\u0E19\u0E30"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(V,{class:"d-flex justify-end flex-wrap gap-3"},{default:e(()=>[t(d,{variant:"tonal",color:"secondary",onClick:o[5]||(o[5]=s=>a.show=!1)},{default:e(()=>[n(" \u0E1B\u0E34\u0E14 ")]),_:1}),t(d,{color:"primary",onClick:o[6]||(o[6]=s=>f.saveData())},{default:e(()=>[n(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const wt=k(E,[["render",Z]]);export{wt as default};