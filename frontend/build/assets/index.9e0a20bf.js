import{_ as k}from"./DialogCloseBtn.3dc53971.js";import{s as C}from"./axios.b493e35e.js";import{y as D,bn as U,bo as N,o as i,c as d,m as s,p as t,w as a,A as g,z as u,a1 as B,a2 as S,bq as T,F,a as P,bg as b,bi as q,bp as x,x as r,b9 as p}from"./index.3095b11b.js";import{f as z}from"./helpers.segment.1007a634.js";import{t as A}from"./thaiDateNotime.4f45951f.js";import{d as I}from"./derlimiter.4329166e.js";import{a as n,V as h}from"./VRow.6fc7a8e7.js";import{V as y}from"./VSelect.dda75ad0.js";import{V as L}from"./VAutocomplete.18c3b63f.js";import{V as _}from"./VBtn.d4d53137.js";import{V as R}from"./VTable.4303e7b7.js";import{V as j}from"./VPagination.c89a99b4.js";import{V as m}from"./VTextField.b4489767.js";import{V as v}from"./VSwitch.acfd38d6.js";import{V as E}from"./VDialog.56300656.js";import{V as f}from"./VChip.9efc2b01.js";import"./axios.364130a5.js";import"./VList.6f0d9876.js";import"./index.7e25a8eb.js";import"./VDivider.c30070ab.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.d00165e8.js";import"./easing.36b781ab.js";import"./lazy.7ca2d33f.js";import"./VMenu.cadb1fab.js";import"./VSelectionControl.44aa3818.js";const G={name:"user-profile",computed:{moment(){return U}},data(){return{loading:!0,derlimiter:I,thaiDateNotime:A,pagination:[],page:1,route:N(),show:!1,users:[],status:[{label:"\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E30",value:null},{label:"\u0E1B\u0E01\u0E15\u0E34",value:!1},{label:"\u0E23\u0E30\u0E07\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",value:!0}],active:[{label:"\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E17\u0E38\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E30",value:null},{label:"\u0E40\u0E1B\u0E34\u0E14",value:"active"},{label:"\u0E1B\u0E34\u0E14",value:"inactive"}],user:{mobile:"",password:"",name:"",surname:"",bank_id:{name:"\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E01\u0E2A\u0E34\u0E01\u0E23\u0E44\u0E17\u0E22",bank_id:0},bank_no:"",af_code:"",status:null,withdraw:null}}},methods:{formatNumber:z,async getData(){this.loading=!0;const c={page:this==null?void 0:this.page,status:this==null?void 0:this.status.value,date:this!=null&&this.data?(this==null?void 0:this.date).replace(" to ",","):""};await C({method:"get",url:`/${localStorage.getItem("permission")}/user`,data:[],params:c}).then(l=>{this.users=l.data,this.pagination=l.meta,this.loading=!1}).catch(l=>{console.log(l)})},async saveData(){console.log(this.agent),this.show=!1}},mounted(){this.getData()}},H={mode:"out-in"},J=s("h1",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",-1),K={class:"v-overlay--absolute text-center w-100 h-100",style:{"background-color":"rgba(255,255,255,.8)","z-index":"9"}},M=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"start"}},"\u0E44\u0E2D\u0E14\u0E35\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"),s("th",{style:{"text-align":"start"}},"\u0E22\u0E39\u0E40\u0E0B\u0E2D\u0E23\u0E4C"),s("th",{style:{"text-align":"start"}},"\u0E0A\u0E37\u0E48\u0E2D"),s("th",{style:{"text-align":"start"}},"\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"),s("th",{style:{"text-align":"start"}},"\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23"),s("th",{style:{"text-align":"end"}},"\u0E1D\u0E32\u0E01\u0E2A\u0E30\u0E2A\u0E21"),s("th",{style:{"text-align":"end"}},"\u0E16\u0E2D\u0E19\u0E2A\u0E30\u0E2A\u0E21"),s("th",{style:{"text-align":"end"}},"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D"),s("th",{style:{"text-align":"center"}},"\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"),s("th",{style:{"text-align":"center"}},"\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E16\u0E2D\u0E19"),s("th",{style:{"text-align":"center"}},"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07"),s("th",{style:{"text-align":"center"}},"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E22\u0E39\u0E40\u0E0B\u0E2D\u0E23\u0E4C")])],-1),O={style:{"text-align":"start"}},Q=s("br",null,null,-1),W={class:"text-secondary"},X={style:{"text-align":"start"}},Y={style:{"text-align":"start"}},Z={style:{"text-align":"start"}},$={style:{"text-align":"start"}},ee=s("br",null,null,-1),te={class:"text-secondary"},le={style:{"text-align":"end"}},se={style:{"text-align":"end"}},oe={style:{"text-align":"end"}},ae={style:{"text-align":"center"}},ne={key:0},re={key:1},ue={style:{"text-align":"center"}},ie={key:0},de={key:1},me={style:{"text-align":"center"}},pe={style:{"text-align":"center"}},_e={class:"d-flex flex-column gap-6 px-4 mt-5"};function fe(c,l,Ve,ce,o,V){const w=k;return i(),d("div",null,[s("div",H,[t(h,{class:"mb-3"},{default:a(()=>[t(n,null,{default:a(()=>[J]),_:1}),t(n,{cols:"12",md:"3"},{default:a(()=>[t(y,{items:o.status,modelValue:o.user.status,"onUpdate:modelValue":l[0]||(l[0]=e=>o.user.status=e),"item-title":"label","item-value":"value",label:"\u0E2A\u0E16\u0E32\u0E19\u0E30"},null,8,["items","modelValue"])]),_:1}),t(n,{cols:"12",md:"3"},{default:a(()=>[t(L,{items:o.active,modelValue:o.user.withdraw,"onUpdate:modelValue":l[1]||(l[1]=e=>o.user.withdraw=e),"item-title":"label","item-value":"value",label:"\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34",onChange:l[2]||(l[2]=e=>V.getData())},null,8,["items","modelValue"])]),_:1}),t(n,{cols:"12",md:"2"},{default:a(()=>[t(_,{onClick:l[3]||(l[3]=e=>o.show=!0)},{default:a(()=>[t(g,{start:"",icon:"tabler-square-rounded-plus-filled"}),u(" \u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 ")]),_:1})]),_:1})]),_:1})]),t(b,null,{default:a(()=>[B(s("div",K,[t(T,{indeterminate:"",color:"primary"})],512),[[S,o.loading]]),t(R,{"fixed-header":"",density:"compact",class:"text-no-wrap"},{default:a(()=>[M,s("tbody",null,[(i(!0),d(F,null,P(o.users,e=>(i(),d("tr",null,[s("td",O,[s("small",null,[u(r(e.username),1),Q,s("span",W,r(e.show_password),1)])]),s("td",X,r(e.mobile),1),s("td",Y,r(e.name),1),s("td",Z,r(e.surname),1),s("td",$,[s("small",null,[s("span",null,r(e.bank.nice_name),1),ee,s("span",te,r(e.bank_no)+" ("+r(e.bank_account)+")",1)])]),s("td",le,r(o.derlimiter(e.credit_deposit)),1),s("td",se,r(o.derlimiter(e.credit_withdraw)),1),s("td",oe,r(o.derlimiter(e.credit_balance)),1),s("td",ae,[e.suspended===!1?(i(),d("div",ne,[t(f,{color:"success"},{default:a(()=>[u("\u0E40\u0E1B\u0E34\u0E14")]),_:1})])):p("",!0),e.suspended===!0?(i(),d("div",re,[t(f,{color:"error"},{default:a(()=>[u("\u0E1B\u0E34\u0E14")]),_:1})])):p("",!0)]),s("td",ue,[e.status==="active"?(i(),d("div",ie,[t(f,{color:"success"},{default:a(()=>[u("\u0E40\u0E1B\u0E34\u0E14")]),_:1})])):p("",!0),e.status==="inactive"?(i(),d("div",de,[t(f,{color:"error"},{default:a(()=>[u("\u0E1B\u0E34\u0E14")]),_:1})])):p("",!0)]),s("td",me,r(o.thaiDateNotime(e.created_at)),1),s("td",pe,[t(_,{size:"x-small",color:"primary",onClick:l[4]||(l[4]=ge=>o.show=!0)},{default:a(()=>[t(g,{start:"",icon:"tabler-edit"}),u(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),_:1})])]))),256))])]),_:1}),s("div",_e,[t(j,{modelValue:o.page,"onUpdate:modelValue":l[5]||(l[5]=e=>o.page=e),length:o.pagination.last_page,"total-visible":20,onClick:V.getData},null,8,["modelValue","length","onClick"])])]),_:1}),t(E,{modelValue:o.show,"onUpdate:modelValue":l[17]||(l[17]=e=>o.show=e),"max-width":"800"},{default:a(()=>[t(w,{onClick:l[6]||(l[6]=e=>o.show=!1)}),t(b,null,{default:a(()=>[t(q,null,{default:a(()=>[u(" \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 ")]),_:1}),t(x,null,{default:a(()=>[t(h,null,{default:a(()=>[t(n,{cols:"12",md:"12"},{default:a(()=>[t(m,{type:"text",modelValue:o.user.mobile,"onUpdate:modelValue":l[7]||(l[7]=e=>o.user.mobile=e),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12",md:"12"},{default:a(()=>[t(m,{type:"password",modelValue:o.user.password,"onUpdate:modelValue":l[8]||(l[8]=e=>o.user.password=e),label:"Password"},null,8,["modelValue"])]),_:1}),t(n,{cols:"6",md:"6"},{default:a(()=>[t(m,{type:"text",modelValue:o.user.name,"onUpdate:modelValue":l[9]||(l[9]=e=>o.user.name=e),label:"\u0E0A\u0E37\u0E48\u0E2D"},null,8,["modelValue"])]),_:1}),t(n,{cols:"6",md:"6"},{default:a(()=>[t(m,{type:"text",modelValue:o.user.surname,"onUpdate:modelValue":l[10]||(l[10]=e=>o.user.surname=e),label:"\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12",md:"12"},{default:a(()=>[t(y,{modelValue:o.user.bank_id,"onUpdate:modelValue":l[11]||(l[11]=e=>o.user.bank_id=e),items:[],"item-title":"name","item-value":"bank_id",label:"\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23","persistent-hint":""},null,8,["modelValue"])]),_:1}),t(n,{cols:"6",md:"6"},{default:a(()=>[t(m,{type:"text",modelValue:o.user.af_code,"onUpdate:modelValue":l[12]||(l[12]=e=>o.user.af_code=e),label:"AF-Code"},null,8,["modelValue"])]),_:1}),t(n,{cols:"6",md:"6"},{default:a(()=>[u(" \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34 ")]),_:1}),t(n,{cols:"6",md:"6"},{default:a(()=>[t(v,{modelValue:o.user.withdraw,"onUpdate:modelValue":l[13]||(l[13]=e=>o.user.withdraw=e),label:"\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E34\u0E16\u0E2D\u0E19"},null,8,["modelValue"])]),_:1}),t(n,{cols:"6",md:"6"},{default:a(()=>[t(v,{modelValue:o.user.status,"onUpdate:modelValue":l[14]||(l[14]=e=>o.user.status=e),label:"\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(x,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[t(_,{variant:"tonal",color:"secondary",onClick:l[15]||(l[15]=e=>o.show=!1)},{default:a(()=>[u(" \u0E1B\u0E34\u0E14 ")]),_:1}),t(_,{color:"success",onClick:l[16]||(l[16]=e=>V.saveData())},{default:a(()=>[u(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Je=D(G,[["render",fe]]);export{Je as default};
