import{_ as w}from"./DialogCloseBtn.e584b7a2.js";import{s as v}from"./axios.4960f1a7.js";import{y as k,bn as C,bo as D,o as d,c as u,m as s,p as e,w as a,A as V,z as r,a1 as U,a2 as N,bq as B,F as S,a as T,bg as c,bi as P,bp as _,x as i,b9 as h}from"./index.7138b669.js";import{f as q}from"./helpers.segment.1007a634.js";import{d as z,t as F}from"./derlimiter.d68341e6.js";import{a as n,V as x}from"./VRow.71f27439.js";import{V as g}from"./VBtn.a6b3b781.js";import{V as E}from"./VTable.d94d2277.js";import{V as I}from"./VPagination.f6804d4c.js";import{V as m}from"./VTextField.e3a82c45.js";import{V as L}from"./VSwitch.05168bf6.js";import{V as R}from"./VDialog.b6576d0e.js";import{V as y}from"./VChip.5acfabce.js";import"./axios.364130a5.js";import"./index.0ab14008.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VSelectionControl.234f4b9e.js";import"./scopeId.8cf76934.js";import"./lazy.858355b6.js";const j={name:"user-profile",computed:{moment(){return C}},data(){return{loading:!0,derlimiter:z,thaiDateNotime:F,pagination:[],page:1,route:D(),show:!1,agent:{name:"",surname:"",username:"",password:"",email:"",mobile:"",status:!1},marketing:[]}},methods:{formatNumber:q,async getData(){this.loading=!0;const p={page:this==null?void 0:this.page};await v({method:"get",url:`/${localStorage.getItem("permission")}/marketing`,data:[],params:p}).then(t=>{this.marketing=t.data,this.pagination=t.meta,this.loading=!1}).catch(t=>{console.log(t),this.loading=!1})},async saveData(){console.log(this.agent),this.show=!1}},mounted(){this.getData()}},A={mode:"out-in"},G=s("h1",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14",-1),H={class:"v-overlay--absolute text-center w-100 h-100",style:{"background-color":"rgba(255,255,255,.8)","z-index":"9"}},J=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"start"}},"\u0E23\u0E2B\u0E31\u0E2A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19"),s("th",{style:{"text-align":"start"}},"\u0E22\u0E39\u0E40\u0E0B\u0E2D\u0E23\u0E4C"),s("th",{style:{"text-align":"start"}},"\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E17\u0E33\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14"),s("th",{style:{"text-align":"start"}},"\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"),s("th",{style:{"text-align":"center"}},"\u0E2A\u0E16\u0E32\u0E19\u0E30"),s("th",{style:{"text-align":"center"}},"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19"),s("th",{style:{"text-align":"center"}},"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"),s("th",{style:{"text-align":"center"}},"\u0E41\u0E01\u0E49\u0E44\u0E02")])],-1),K={style:{"text-align":"start"}},M={style:{"text-align":"start"}},O={style:{"text-align":"start"}},Q={style:{"text-align":"start"}},W={style:{"text-align":"center"}},X={key:0},Y={key:1},Z={style:{"text-align":"center"}},$={style:{"text-align":"center"}},ee={style:{"text-align":"center"}};function te(p,t,le,oe,o,f){const b=w;return d(),u("div",null,[s("div",A,[e(x,{class:"mb-3"},{default:a(()=>[e(n,null,{default:a(()=>[G]),_:1}),e(n,{md:"2",class:"text-end"},{default:a(()=>[e(g,{onClick:t[0]||(t[0]=l=>o.show=!0)},{default:a(()=>[e(V,{start:"",icon:"tabler-square-rounded-plus-filled"}),r(" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14 ")]),_:1})]),_:1})]),_:1})]),e(c,null,{default:a(()=>[U(s("div",H,[e(B,{indeterminate:"",color:"primary"})],512),[[N,o.loading]]),e(E,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:a(()=>[J,s("tbody",null,[(d(!0),u(S,null,T(o.marketing,l=>(d(),u("tr",null,[s("td",K,"code0"+i(l),1),s("td",M,"Username0"+i(l),1),s("td",O,"https://naruto168.com/af/0/?m="+i(l),1),s("td",Q,"Name"+i(l)+" Surname"+i(l),1),s("td",W,[l%2==!0?(d(),u("div",X,[e(y,{color:"success"},{default:a(()=>[r("\u0E40\u0E1B\u0E34\u0E14")]),_:1})])):h("",!0),l%2==!1?(d(),u("div",Y,[e(y,{color:"error"},{default:a(()=>[r("\u0E1B\u0E34\u0E14")]),_:1})])):h("",!0)]),s("td",Z,i(o.thaiDateNotime(new Date)),1),s("td",$,i(l),1),s("td",ee,[e(g,{size:"small",color:"primary",onClick:t[1]||(t[1]=ae=>o.show=!0)},{default:a(()=>[e(V,{start:"",icon:"tabler-edit"}),r(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),_:1})])]))),256))])]),_:1}),e(I,{modelValue:o.page,"onUpdate:modelValue":t[2]||(t[2]=l=>o.page=l),length:o.pagination.last_page,"total-visible":20,onClick:f.getData},null,8,["modelValue","length","onClick"])]),_:1}),e(R,{modelValue:o.show,"onUpdate:modelValue":t[13]||(t[13]=l=>o.show=l),"max-width":"800"},{default:a(()=>[e(b,{onClick:t[3]||(t[3]=l=>o.show=!1)}),e(c,null,{default:a(()=>[e(P,null,{default:a(()=>[r(" \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14 ")]),_:1}),e(_,null,{default:a(()=>[e(x,null,{default:a(()=>[e(n,{cols:"12",md:"12"},{default:a(()=>[e(m,{modelValue:o.agent.username,"onUpdate:modelValue":t[4]||(t[4]=l=>o.agent.username=l),label:"Username"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"12"},{default:a(()=>[e(m,{type:"password",modelValue:o.agent.password,"onUpdate:modelValue":t[5]||(t[5]=l=>o.agent.password=l),label:"Password"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6",md:"6"},{default:a(()=>[e(m,{modelValue:o.agent.name,"onUpdate:modelValue":t[6]||(t[6]=l=>o.agent.name=l),label:"\u0E0A\u0E37\u0E48\u0E2D"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6",md:"6"},{default:a(()=>[e(m,{modelValue:o.agent.surname,"onUpdate:modelValue":t[7]||(t[7]=l=>o.agent.surname=l),label:"\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"12"},{default:a(()=>[e(m,{modelValue:o.agent.email,"onUpdate:modelValue":t[8]||(t[8]=l=>o.agent.email=l),label:"Email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"12"},{default:a(()=>[e(m,{modelValue:o.agent.mobile,"onUpdate:modelValue":t[9]||(t[9]=l=>o.agent.mobile=l),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"12"},{default:a(()=>[e(L,{modelValue:o.agent.status,"onUpdate:modelValue":t[10]||(t[10]=l=>o.agent.status=l),label:"\u0E2A\u0E16\u0E32\u0E19\u0E30"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(_,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(g,{variant:"tonal",color:"secondary",onClick:t[11]||(t[11]=l=>o.show=!1)},{default:a(()=>[r(" \u0E1B\u0E34\u0E14 ")]),_:1}),e(g,{color:"success",onClick:t[12]||(t[12]=l=>f.saveData())},{default:a(()=>[r(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Ce=k(j,[["render",te]]);export{Ce as default};
