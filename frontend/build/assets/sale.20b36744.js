import{_ as D}from"./DialogCloseBtn.e584b7a2.js";import{s as f}from"./axios.4960f1a7.js";import{y as k,o as d,c as u,p as t,w as e,bp as g,z as n,A as U,bg as y,bi as S,m as l,F as x,a as v,x as c}from"./index.7138b669.js";import{V as h,a as i}from"./VRow.71f27439.js";import{V as m}from"./VBtn.a6b3b781.js";import{V}from"./VTable.d94d2277.js";import{V as B}from"./VDialog.b6576d0e.js";import{a as w}from"./VSelect.53fd42df.js";import{V as b}from"./VTextField.e3a82c45.js";import"./axios.364130a5.js";import"./scopeId.8cf76934.js";import"./easing.36b781ab.js";import"./lazy.858355b6.js";import"./forwardRefs.c003b6b8.js";import"./VList.a1d44376.js";import"./index.0ab14008.js";import"./VDivider.4e8da04b.js";import"./VMenu.7f2b4ed7.js";import"./VSelectionControl.234f4b9e.js";import"./VChip.5acfabce.js";const T={components:{},data(){return{tital:"All the best for your new project.",customers:[],service_group:[],service:[],show:!1,data:{customer_id:null,service_group_id:null,service:[]}}},mounted(){this.getDataCuctomer(),this.getDataServiceGroup()},methods:{async openModal(){this.data.customer_id=null,this.data.service_group_id=null,this.data.service=[],this.show=!0},async getDataCuctomer(){await f({method:"get",url:"/customers",data:[],params:[]}).then(s=>{this.customers=s.data}).catch(s=>{console.log(s)})},async getDataServiceGroup(){await f({method:"get",url:"/services/group",data:[],params:[]}).then(s=>{this.service_group=s.data}).catch(s=>{console.log(s)})},async getDataService(){await f({method:"get",url:`/services/service_id/${this.data.service_group_id}`,data:[],params:[]}).then(s=>{this.service=s.data}).catch(s=>{console.log(s)})},async choose(s){this.data.service.push({id:s.id,price:s.price,discount:0,name:s.title})}}},F=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"start"}},"id"),l("th",{style:{"text-align":"start"}},"\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"),l("th",{style:{"text-align":"start"}},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"),l("th",{style:{"text-align":"start"}},"\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A"),l("th",{style:{"text-align":"end"}},"\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"),l("th",{style:{"text-align":"end"}},"\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14"),l("th",{style:{"text-align":"end"}},"\u0E23\u0E27\u0E21"),l("th",{style:{"text-align":"center"}},"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E23\u0E16"),l("th",{style:{"text-align":"center"}},"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")])],-1),N=l("tbody",null,null,-1),j=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"start"}},"id"),l("th",{style:{"text-align":"start"}},"\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"),l("th",{style:{"text-align":"end"}},"\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"),l("th",{style:{"text-align":"center"}})])],-1),A={style:{"text-align":"start"}},G={style:{"text-align":"start"}},M={style:{"text-align":"end"}},z={style:{"text-align":"center"}};function E(s,o,I,L,r,_){const C=D;return d(),u("div",null,[t(y,{class:"mb-6",title:"\u0E23\u0E31\u0E1A\u0E23\u0E16"},{default:e(()=>[t(g,null,{default:e(()=>[t(h,null,{default:e(()=>[t(i,{cols:"6",md:"6"},{default:e(()=>[n(" \u0E23\u0E31\u0E1A\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E25\u0E49\u0E32\u0E07 ")]),_:1}),t(i,{class:"text-end",cols:"6",md:"6"},{default:e(()=>[t(m,{color:"primary",onClick:o[0]||(o[0]=a=>_.openModal())},{default:e(()=>[t(U,{start:"",icon:"tabler-receipt"}),n(" \u0E23\u0E31\u0E1A\u0E23\u0E16\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 ")]),_:1})]),_:1})]),_:1}),t(V,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:e(()=>[F,N]),_:1})]),_:1}),t(B,{modelValue:r.show,"onUpdate:modelValue":o[6]||(o[6]=a=>r.show=a),"max-width":"800"},{default:e(()=>[t(C,{onClick:o[1]||(o[1]=a=>r.show=!1)}),t(y,null,{default:e(()=>[t(S,null,{default:e(()=>[n(" \u0E23\u0E31\u0E1A\u0E23\u0E16\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 ")]),_:1}),t(g,null,{default:e(()=>[t(h,null,{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[t(w,{modelValue:r.data.customer_id,"onUpdate:modelValue":o[2]||(o[2]=a=>r.data.customer_id=a),items:r.customers,"item-title":"name","item-value":"id",label:"\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32","persistent-hint":""},null,8,["modelValue","items"])]),_:1}),t(i,{cols:"12"},{default:e(()=>[t(w,{modelValue:r.data.service_group_id,"onUpdate:modelValue":o[3]||(o[3]=a=>r.data.service_group_id=a),items:r.service_group,"item-title":"name","item-value":"id",label:"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E15\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23","persistent-hint":""},null,8,["modelValue","items"])]),_:1}),t(i,{cols:"12"},{default:e(()=>[t(m,{color:"primary",onClick:o[4]||(o[4]=a=>_.getDataService())},{default:e(()=>[n(" \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 ")]),_:1})]),_:1}),t(i,{cols:"12"},{default:e(()=>[t(V,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:e(()=>[j,l("tbody",null,[(d(!0),u(x,null,v(r.service,a=>(d(),u("tr",null,[l("td",A,c(a.id),1),l("td",G,c(a.title),1),l("td",M,c(a.price),1),l("td",z,[t(m,{variant:"tonal",color:"primary",onClick:p=>_.choose(a)},{default:e(()=>[n(" \u0E40\u0E25\u0E37\u0E2D\u0E01 ")]),_:2},1032,["onClick"])])]))),256))])]),_:1})]),_:1}),(d(!0),u(x,null,v(r.data.service,a=>(d(),u("div",null,[t(h,{style:{padding:"5px"}},{default:e(()=>[t(i,{style:{padding:"15px"},cols:"3",md:"3"},{default:e(()=>[n(" \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 : "+c(a.name)+" ",1)]),_:2},1024),t(i,{cols:"3",md:"3"},{default:e(()=>[t(b,{type:"number",modelValue:a.price,"onUpdate:modelValue":p=>a.price=p,label:"\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{cols:"3",md:"3"},{default:e(()=>[t(b,{type:"number",modelValue:a.discount,"onUpdate:modelValue":p=>a.discount=p,label:"\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{style:{padding:"15px"},cols:"3",md:"3"},{default:e(()=>[n(" \u0E23\u0E27\u0E21 : "+c(a.price-a.discount),1)]),_:2},1024)]),_:2},1024)]))),256))]),_:1})]),_:1}),t(g,{class:"d-flex justify-end flex-wrap gap-3"},{default:e(()=>[t(m,{variant:"tonal",color:"secondary",onClick:o[5]||(o[5]=a=>r.show=!1)},{default:e(()=>[n(" \u0E1B\u0E34\u0E14 ")]),_:1}),t(m,{color:"primary"},{default:e(()=>[n(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const it=k(T,[["render",E]]);export{it as default};
