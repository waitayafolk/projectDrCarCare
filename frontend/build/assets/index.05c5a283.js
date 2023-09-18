import{_ as C}from"./DialogCloseBtn.f5c00f5f.js";import{s as f}from"./axios.4960f1a7.js";import{y as S,bn as D,bo as k,o as h,c as g,m as a,p as t,w as i,A as v,z as n,a1 as N,a2 as B,bq as G,F as T,a as I,bg as x,bi as O,bp as V,x as c,b9 as U}from"./index.cfd2c744.js";import{f as z}from"./helpers.segment.1007a634.js";import{t as F}from"./thaiDateNotime.4f45951f.js";import{d as J}from"./derlimiter.4329166e.js";import{S as u}from"./sweetalert2.all.e105506d.js";import{a as d,V as y}from"./VRow.c95046c8.js";import{V as m}from"./VBtn.f4eede80.js";import{V as j}from"./VTable.18032752.js";import{V as _}from"./VTextField.7b9f99c8.js";import{a as q}from"./VSelect.96e5900a.js";import{V as L}from"./VDialog.9de128e5.js";import{V as M}from"./VChip.573df108.js";import"./axios.364130a5.js";import"./index.b4445147.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VList.663edbfa.js";import"./VDivider.21b3dabc.js";import"./scopeId.75d2bf56.js";import"./lazy.cc2d275a.js";import"./VMenu.e7ac9c6e.js";import"./VSelectionControl.f7fb9dcf.js";const R={name:"user-profile",computed:{moment(){return D}},data(){return{loading:!0,derlimiter:J,thaiDateNotime:F,pagination:[],page:1,route:k(),show:!1,servicesGroup:[],service:{id:0,title:"",detail:"",price:0,status:!1,admin_id:JSON.parse(localStorage.getItem("user_data")).id,service_group_id:0},services:[]}},methods:{formatNumber:z,async getData(){this.loading=!0,await f({method:"get",url:"/services",data:[],params:[]}).then(l=>{this.services=l.data,this.loading=!1}).catch(l=>{console.log(l)})},async saveData(){let l={id:this.service.id,title:this.service.title,detail:this.service.detail,price:this.service.price,status:!0,admin_id:JSON.parse(localStorage.getItem("user_data")).id,service_group_id:this.service.service_group_id.id==null?this.service.service_group_id:this.service.service_group_id.id};await f({method:"post",url:"/services/save-service",data:l,params:[]}).then(e=>{e.status=="success"&&(u.fire({icon:"success",title:"Success",text:e.message}),this.show=!1,this.getData())}).catch(e=>{console.log(e),this.show=!1,u.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})})},async openModal(){this.show=!0,this.service={id:0,title:"",detail:"",price:0,status:!1,admin_id:JSON.parse(localStorage.getItem("user_data")).id}},async deleteService(l){u.fire({title:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23?",text:"\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(async e=>{e.isConfirmed&&await f({method:"delete",url:`/services/${l.id}`,data:[],params:[]}).then(o=>{o.status=="success"&&(u.fire({icon:"success",title:"Success",text:o.message}),this.show=!1,this.getData())}).catch(o=>{console.log(o),this.show=!1,u.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})})})},async getDataGroup(){this.loading=!0,await f({method:"get",url:"/services/group",data:[],params:[]}).then(l=>{let e=[];for(let o of l.data)e.push({id:o.id,name:o.name});this.servicesGroup=e}).catch(l=>{console.log(l)})},async editData(l){this.service.id=l.id,this.service.detail=l.detail,this.service.price=l.price,this.service.title=l.title;let e=this.servicesGroup.findIndex(o=>o.id===l.service_group_id);this.service.service_group_id=this.servicesGroup[e],this.show=!0}},mounted(){this.getData(),this.getDataGroup()}},A={mode:"out-in"},E=a("h1",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",-1),P={class:"v-overlay--absolute text-center w-100 h-100",style:{"background-color":"rgba(255,255,255,.8)","z-index":"9"}},Y=a("thead",null,[a("tr",null,[a("th",{style:{"text-align":"start"}},"\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"),a("th",{style:{"text-align":"start"}},"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"),a("th",{style:{"text-align":"start"}},"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"),a("th",{style:{"text-align":"start"}},"\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"),a("th",{style:{"text-align":"center"}},"\u0E2A\u0E16\u0E32\u0E19\u0E30"),a("th",{style:{"text-align":"center"}},"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07"),a("th",{style:{"text-align":"center"}},"\u0E41\u0E01\u0E49\u0E44\u0E02")])],-1),H={style:{"text-align":"start"}},K={style:{"text-align":"start"}},Q={style:{"text-align":"start"}},W={style:{"text-align":"start"}},X={style:{"text-align":"center"}},Z={key:0},$={style:{"text-align":"center"}},ee={style:{"text-align":"center"}};function te(l,e,o,se,r,p){const w=C;return h(),g("div",null,[a("div",A,[t(y,{class:"mb-3"},{default:i(()=>[t(d,null,{default:i(()=>[E]),_:1}),t(d,{md:"2",class:"text-end"},{default:i(()=>[t(m,{onClick:e[0]||(e[0]=s=>p.openModal())},{default:i(()=>[t(v,{start:"",icon:"tabler-square-rounded-plus-filled"}),n(" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 ")]),_:1})]),_:1})]),_:1})]),t(x,null,{default:i(()=>[N(a("div",P,[t(G,{indeterminate:"",color:"primary"})],512),[[B,r.loading]]),t(j,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:i(()=>[Y,a("tbody",null,[(h(!0),g(T,null,I(r.services,s=>(h(),g("tr",null,[a("td",H,c(s.title),1),a("td",K,c(s.name),1),a("td",Q,c(s.detail),1),a("td",W,c(s.price),1),a("td",X,[s.status=="use"?(h(),g("div",Z,[t(M,{color:"success"},{default:i(()=>[n("\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")]),_:1})])):U("",!0)]),a("td",$,c(r.thaiDateNotime(s.create_date)),1),a("td",ee,[t(m,{size:"small",color:"error",onClick:b=>p.deleteService(s)},{default:i(()=>[t(v,{start:"",icon:"tabler-trash"}),n(" \u0E25\u0E1A ")]),_:2},1032,["onClick"]),t(m,{size:"small",color:"primary",onClick:b=>p.editData(s)},{default:i(()=>[t(v,{start:"",icon:"tabler-edit"}),n(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),_:2},1032,["onClick"])])]))),256))])]),_:1})]),_:1}),t(L,{modelValue:r.show,"onUpdate:modelValue":e[8]||(e[8]=s=>r.show=s),"max-width":"800"},{default:i(()=>[t(w,{onClick:e[1]||(e[1]=s=>r.show=!1)}),t(x,null,{default:i(()=>[t(O,null,{default:i(()=>[n(" \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 ")]),_:1}),t(V,null,{default:i(()=>[t(y,null,{default:i(()=>[t(d,{cols:"6",md:"6"},{default:i(()=>[t(_,{type:"text",modelValue:r.service.title,"onUpdate:modelValue":e[2]||(e[2]=s=>r.service.title=s),label:"\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"},null,8,["modelValue"])]),_:1}),t(d,{cols:"6",md:"6"},{default:i(()=>[t(_,{type:"number",modelValue:r.service.price,"onUpdate:modelValue":e[3]||(e[3]=s=>r.service.price=s),label:"\u0E23\u0E32\u0E04\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"},null,8,["modelValue"])]),_:1}),t(d,{cols:"12",md:"12"},{default:i(()=>[t(_,{type:"text",modelValue:r.service.detail,"onUpdate:modelValue":e[4]||(e[4]=s=>r.service.detail=s),label:"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"},null,8,["modelValue"])]),_:1}),t(d,{cols:"12",md:"12"},{default:i(()=>[t(q,{modelValue:r.service.service_group_id,"onUpdate:modelValue":e[5]||(e[5]=s=>r.service.service_group_id=s),items:r.servicesGroup,"item-title":"name","item-value":"id",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(V,{class:"d-flex justify-end flex-wrap gap-3"},{default:i(()=>[t(m,{variant:"tonal",color:"secondary",onClick:e[6]||(e[6]=s=>r.show=!1)},{default:i(()=>[n(" \u0E1B\u0E34\u0E14 ")]),_:1}),t(m,{color:"primary",onClick:e[7]||(e[7]=s=>p.saveData())},{default:i(()=>[n(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const ke=S(R,[["render",te]]);export{ke as default};
