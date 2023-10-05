import{_ as C}from"./DialogCloseBtn.7f629336.js";import{y as k,bp as D,bq as N,bd as p,o as i,c as u,m as o,p as t,w as e,bm as d,A as h,z as n,bl as _,a1 as S,a2 as B,bs as T,F as z,a as F,bh as g,bj as U,br as x,x as c,b9 as V}from"./index.982c45c7.js";import{f as j}from"./helpers.segment.1007a634.js";import{t as q}from"./thaiDateNotime.28095d2c.js";import{d as L}from"./derlimiter.4329166e.js";import{S as y}from"./sweetalert2.all.e105506d.js";import{V as m}from"./VBtn.dd0be6a2.js";import{V as M}from"./VTable.72454dd9.js";import{V as b}from"./VTextField.7da1d2e1.js";import{V as R}from"./VDialog.0df03e9e.js";import{V as w}from"./VChip.be025994.js";import"./index.bec81b91.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.77e27523.js";import"./lazy.33f651dc.js";const A={name:"user-profile",computed:{moment(){return D}},data(){return{loading:!0,derlimiter:L,thaiDateNotime:q,pagination:[],page:1,route:N(),show:!1,customer:{id:0,mobile:"",name:"",status:!1},customers:[]}},methods:{formatNumber:j,async getData(){this.loading=!0,await p({method:"get",url:"/customers",data:[],params:[]}).then(r=>{this.customers=r.data,this.loading=!1}).catch(r=>{console.log(r)})},async saveData(){await p({method:"post",url:"/customers/save-customer",data:this.customer,params:[]}).then(r=>{r.status=="success"&&(y.fire({icon:"success",title:"Success",text:r.message}),this.show=!1,this.getData())}).catch(r=>{console.log(r),this.show=!1,y.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})})},async openModal(){this.show=!0,this.customer={id:0,mobile:"",name:"",status:!1}}},mounted(){this.getData()}},E={mode:"out-in"},I=o("h1",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",-1),O={class:"v-overlay--absolute text-center w-100 h-100",style:{"background-color":"rgba(255,255,255,.8)","z-index":"9"}},P=o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"start"}},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"),o("th",{style:{"text-align":"start"}},"\u0E0A\u0E37\u0E48\u0E2D"),o("th",{style:{"text-align":"center"}},"\u0E2A\u0E16\u0E32\u0E19\u0E30"),o("th",{style:{"text-align":"center"}},"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07"),o("th",{style:{"text-align":"center"}},"\u0E41\u0E01\u0E49\u0E44\u0E02")])],-1),G={style:{"text-align":"start"}},H={style:{"text-align":"start"}},J={style:{"text-align":"center"}},K={key:0},Q={key:1},W={style:{"text-align":"center"}},X={style:{"text-align":"center"}};function Y(r,l,Z,$,a,f){const v=C;return i(),u("div",null,[o("div",E,[t(_,{class:"mb-3"},{default:e(()=>[t(d,null,{default:e(()=>[I]),_:1}),t(d,{md:"2",class:"text-end"},{default:e(()=>[t(m,{onClick:l[0]||(l[0]=s=>f.openModal())},{default:e(()=>[t(h,{start:"",icon:"tabler-square-rounded-plus-filled"}),n(" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 ")]),_:1})]),_:1})]),_:1})]),t(g,null,{default:e(()=>[S(o("div",O,[t(T,{indeterminate:"",color:"primary"})],512),[[B,a.loading]]),t(M,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:e(()=>[P,o("tbody",null,[(i(!0),u(z,null,F(a.customers,s=>(i(),u("tr",null,[o("td",G,c(s.mobile),1),o("td",H,c(s.name),1),o("td",J,[s.status=="use"?(i(),u("div",K,[t(w,{color:"success"},{default:e(()=>[n("\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")]),_:1})])):V("",!0),s.status!="use"?(i(),u("div",Q,[t(w,{color:"error"},{default:e(()=>[n("\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")]),_:1})])):V("",!0)]),o("td",W,c(a.thaiDateNotime(s.create_date)),1),o("td",X,[t(m,{size:"small",color:"primary",onClick:tt=>(a.customer=s,a.show=!0)},{default:e(()=>[t(h,{start:"",icon:"tabler-edit"}),n(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),_:2},1032,["onClick"])])]))),256))])]),_:1})]),_:1}),t(R,{modelValue:a.show,"onUpdate:modelValue":l[6]||(l[6]=s=>a.show=s),"max-width":"800"},{default:e(()=>[t(v,{onClick:l[1]||(l[1]=s=>a.show=!1)}),t(g,null,{default:e(()=>[t(U,null,{default:e(()=>[n(" \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 ")]),_:1}),t(x,null,{default:e(()=>[t(_,null,{default:e(()=>[t(d,{cols:"6",md:"6"},{default:e(()=>[t(b,{type:"text",modelValue:a.customer.mobile,"onUpdate:modelValue":l[2]||(l[2]=s=>a.customer.mobile=s),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"},null,8,["modelValue"])]),_:1}),t(d,{cols:"6",md:"6"},{default:e(()=>[t(b,{type:"text",modelValue:a.customer.name,"onUpdate:modelValue":l[3]||(l[3]=s=>a.customer.name=s),label:"\u0E0A\u0E37\u0E48\u0E2D"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(x,{class:"d-flex justify-end flex-wrap gap-3"},{default:e(()=>[t(m,{variant:"tonal",color:"secondary",onClick:l[4]||(l[4]=s=>a.show=!1)},{default:e(()=>[n(" \u0E1B\u0E34\u0E14 ")]),_:1}),t(m,{color:"primary",onClick:l[5]||(l[5]=s=>f.saveData())},{default:e(()=>[n(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const gt=k(A,[["render",Y]]);export{gt as default};
