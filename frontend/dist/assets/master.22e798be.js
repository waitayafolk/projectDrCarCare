import{_ as T}from"./DialogCloseBtn.a9eea126.js";import{y as A,S as O,U as c,o as u,c as h,p as e,w as s,P as o,O as p,Q as m,E as w,A as V,z as d,N as g,m as r,F as _,a as y,v as k,M as x,ac as D,bv as v,b as M}from"./index.08e9078e.js";import{V as j}from"./index.631492ba.js";import{V as N}from"./VTable.794b1e77.js";import{V as z}from"./VChip.d13526f8.js";import{V as E}from"./VDialog.74576e46.js";import"./scopeId.7dd2bcb9.js";import"./lazy.06c7709b.js";const C=O.create({baseURL:"https://api.niyomlotto.com/"}),I={components:{},data(){return{isPasswordVisible:!1,userData:{name:"",username:"",password:"",email:"",id:"",mobile:"",changpassword:!1,menu:[{title:"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",to:{name:"master-dashboard"},icon:{icon:"tabler-smart-home"},show:!0},{title:"\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",icon:{icon:"tabler-users"},show:!0,children:[{title:"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",to:"master-users-agent",show:!0},{title:"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",to:"master-users-customer",show:!0},{title:"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22",to:"master-users-master",show:!0}]},{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E22",to:"master-bill",icon:{icon:"tabler-list-check"},show:!0},{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14",to:{name:"agents-price-user"},icon:{icon:"tabler-chart-arrows-vertical"},show:!0,children:[{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",to:"master-report-daily",show:!0},{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",to:"master-report-monthly",show:!0}]},{title:"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E19\u0E30\u0E19\u0E33",to:{name:"master-af"},icon:{icon:"tabler-share"}},{title:"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15",icon:{icon:"tabler-arrows-transfer-down"},show:!0,children:[{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35",to:"master-credit-history",show:!0},{title:"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19",to:"master-credit-transfer-admin",show:!0},{title:"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",to:"master-credit-transfer-agent",show:!0}]},{title:"\u0E1D\u0E32\u0E01/\u0E16\u0E2D\u0E19",icon:{icon:"tabler-a-b-2"},show:!0,children:[{title:"\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19",to:"master-transfer-request-admin",show:!0},{title:"\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",to:"master-transfer-request-agent",show:!0},{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19",to:"master-transfer-summary",show:!0},{title:"\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19",to:"master-transfer-bank",show:!0},{title:"\u0E04\u0E2D\u0E21\u0E21\u0E34\u0E0A\u0E0A\u0E31\u0E48\u0E19",to:"master-transfer-commission",show:!0}]},{title:"\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C",icon:{icon:"tabler-rss"},show:!0,children:[{title:"\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28",to:"master-news-recent",show:!0},{title:"\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32",to:"master-news",show:!0}]},{title:"\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E08\u0E14\u0E2B\u0E21\u0E32\u0E22",to:{name:"admin-mail"},icon:{icon:"tabler-mail"},show:!0}]},admins:[],showModal:!1}},mounted(){this.getAgent()},methods:{async getAgent(){let n=await C.get("/master/get_master_subport",{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-Type":"application/json"}}).then(t=>t.data).catch(t=>t.response.data);for(let t of n.data)t.menu=JSON.parse(t.menu);this.admins=n.data},async openModal(){this.showModal=!0,this.userData={name:"",username:"",password:"",email:"",id:"",mobile:"",changpassword:!1,menu:[{title:"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",to:{name:"master-dashboard"},icon:{icon:"tabler-smart-home"},show:!0},{title:"\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",icon:{icon:"tabler-users"},show:!0,children:[{title:"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",to:"master-users-agent",show:!0},{title:"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",to:"master-users-customer",show:!0},{title:"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22",to:"master-users-master",show:!0}]},{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E22",to:"master-bill",icon:{icon:"tabler-list-check"},show:!0},{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14",to:{name:"agents-price-user"},icon:{icon:"tabler-chart-arrows-vertical"},show:!0,children:[{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",to:"master-report-daily",show:!0},{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",to:"master-report-monthly",show:!0}]},{title:"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E19\u0E30\u0E19\u0E33",to:{name:"master-af"},icon:{icon:"tabler-share"}},{title:"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15",icon:{icon:"tabler-arrows-transfer-down"},show:!0,children:[{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35",to:"master-credit-history",show:!0},{title:"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19",to:"master-credit-transfer-admin",show:!0},{title:"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",to:"master-credit-transfer-agent",show:!0}]},{title:"\u0E1D\u0E32\u0E01/\u0E16\u0E2D\u0E19",icon:{icon:"tabler-a-b-2"},show:!0,children:[{title:"\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19",to:"master-transfer-request-admin",show:!0},{title:"\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",to:"master-transfer-request-agent",show:!0},{title:"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19",to:"master-transfer-summary",show:!0},{title:"\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E1D\u0E32\u0E01-\u0E16\u0E2D\u0E19",to:"master-transfer-bank",show:!0},{title:"\u0E04\u0E2D\u0E21\u0E21\u0E34\u0E0A\u0E0A\u0E31\u0E48\u0E19",to:"master-transfer-commission",show:!0}]},{title:"\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C",icon:{icon:"tabler-rss"},show:!0,children:[{title:"\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28",to:"master-news-recent",show:!0},{title:"\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32",to:"master-news",show:!0}]},{title:"\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E08\u0E14\u0E2B\u0E21\u0E32\u0E22",to:{name:"admin-mail"},icon:{icon:"tabler-mail"},show:!0}]}},async saveData(){(await C.post("/master/add_master_subport",this.userData,{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-Type":"application/json"}}).then(t=>t.data).catch(t=>t.response.data)).status=="success"?(c.fire({title:"Success!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"success",confirmButtonText:"Ok"}),this.getAgent(),this.showModal=!1):(this.showModal=!1,c.fire({title:"Error!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"error",confirmButtonText:"Ok"}))},async editData(n){this.userData=n,this.userData.changpassword=!1,this.showModal=!0},async deleteAdmin(n){c.fire({title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A?",showCancelButton:!0,confirmButtonText:"\u0E25\u0E1A"}).then(async t=>{t.isConfirmed&&((await C.delete("/admin/del_master/"+n,{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-Type":"application/json"}}).then(f=>f.data).catch(f=>f.response.data)).status=="success"?(c.fire({title:"Success!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"success",confirmButtonText:"Ok"}),this.getAgent(),this.showModal=!1):(this.showModal=!1,c.fire({title:"Error!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"error",confirmButtonText:"Ok"})))})}}},P=r("h1",null,"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22",-1),q=r("thead",null,[r("tr",null,[r("th",null,"\u0E2A\u0E16\u0E32\u0E19\u0E30"),r("th",null,"\u0E22\u0E39\u0E2A\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E21"),r("th",null,"\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"),r("th",null,"\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14"),r("th",null,"\u0E01\u0E23\u0E30\u0E17\u0E33")])],-1),J=r("td",null,"07-032023 09:38:22",-1),F=["disabled"],L={style:{"background-color":"aliceblue",padding:"10px"}},R=["value","onUpdate:modelValue"],Q=["value","onUpdate:modelValue"],G={for:"jack",style:{"padding-left":"10px"}};function H(n,t,U,f,l,b){const S=T;return u(),h("div",null,[e(p,{class:"mb-3"},{default:s(()=>[e(o,null,{default:s(()=>[P]),_:1})]),_:1}),e(p,{justify:"space-between",class:"mb-3"},{default:s(()=>[e(o,{md:"7"},{default:s(()=>[e(p,null,{default:s(()=>[e(o,{md:"6"},{default:s(()=>[e(m,{label:"\u0E04\u0E49\u0E19\u0E2B\u0E32","prepend-inner-icon":"tabler-search"})]),_:1})]),_:1})]),_:1}),e(o,{md:"auto"},{default:s(()=>[e(w,{color:"primary",onClick:t[0]||(t[0]=a=>b.openModal())},{default:s(()=>[e(V,{start:"",icon:"tabler-plus"}),d(" \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 ")]),_:1})]),_:1})]),_:1}),e(x,null,{default:s(()=>[e(g,null,{default:s(()=>[e(N,null,{default:s(()=>[q,r("tbody",null,[(u(!0),h(_,null,y(l.admins,a=>(u(),h("tr",null,[r("td",null,[e(z,{color:"success"},{default:s(()=>[d("\u0E1B\u0E01\u0E15\u0E34")]),_:1})]),r("td",null,k(a.username),1),r("td",null,[e(j,null,{default:s(()=>[d("admin/credit/system")]),_:1})]),J,r("td",null,[e(w,{onClick:i=>b.editData(a),size:"small",class:"mr-2"},{default:s(()=>[e(V,{icon:"tabler-settings"}),d(" \u0E41\u0E01\u0E49\u0E44\u0E02")]),_:2},1032,["onClick"]),e(w,{onClick:i=>b.deleteAdmin(a.id),color:"error",size:"small"},{default:s(()=>[e(V,{icon:"tabler-x"})]),_:2},1032,["onClick"])])]))),256))])]),_:1})]),_:1})]),_:1}),e(E,{modelValue:l.showModal,"onUpdate:modelValue":t[11]||(t[11]=a=>l.showModal=a),"max-width":"800"},{default:s(()=>[e(S,{onClick:t[1]||(t[1]=a=>l.showModal=!1)}),e(x,{title:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19"},{default:s(()=>[e(g,null,{default:s(()=>[e(p,null,{default:s(()=>[e(o,{cols:"6",sm:"6",md:"6"},{default:s(()=>[e(m,{modelValue:l.userData.name,"onUpdate:modelValue":t[2]||(t[2]=a=>l.userData.name=a),label:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",placeholder:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"},null,8,["modelValue"])]),_:1}),e(o,{cols:"6",sm:"6",md:"6"},{default:s(()=>[e(m,{modelValue:l.userData.email,"onUpdate:modelValue":t[3]||(t[3]=a=>l.userData.email=a),label:"E-mail",placeholder:"E-mail"},null,8,["modelValue"])]),_:1}),e(o,{cols:"6",sm:"6",md:"6"},{default:s(()=>[e(m,{modelValue:l.userData.mobile,"onUpdate:modelValue":t[4]||(t[4]=a=>l.userData.mobile=a),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",placeholder:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23"},null,8,["modelValue"])]),_:1}),e(o,{cols:"6",sm:"6",md:"6"}),e(o,{cols:"12",sm:"12",md:"12"},{default:s(()=>[e(m,{modelValue:l.userData.username,"onUpdate:modelValue":t[5]||(t[5]=a=>l.userData.username=a),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",sm:"12",md:"12"},{default:s(()=>[D(r("input",{disabled:l.userData.id=="",type:"checkbox",id:"checkbox","onUpdate:modelValue":t[6]||(t[6]=a=>l.userData.changpassword=a)},null,8,F),[[v,l.userData.changpassword]]),e(m,{disabled:l.userData.id==""?!1:l.userData.changpassword!=!0,type:l.isPasswordVisible?"text":"password",rules:[n.requiredValidator],"append-inner-icon":l.isPasswordVisible?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[7]||(t[7]=a=>l.isPasswordVisible=!l.isPasswordVisible),modelValue:l.userData.password,"onUpdate:modelValue":t[8]||(t[8]=a=>l.userData.password=a),label:"password",placeholder:"password"},null,8,["disabled","type","rules","append-inner-icon","modelValue"])]),_:1})]),_:1}),e(x,{title:"\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"},{default:s(()=>[(u(!0),h(_,null,y(l.userData.menu,a=>(u(),M(o,{cols:"12",sm:"12",md:"12"},{default:s(()=>[r("div",L,[d(k(a.title)+" ",1),D(r("input",{type:"checkbox",id:"jack",value:a.show,"onUpdate:modelValue":i=>a.show=i},null,8,R),[[v,a.show]]),r("div",null,[e(p,{style:{"background-color":"aliceblue",padding:"10px"}},{default:s(()=>[(u(!0),h(_,null,y(a.children,i=>(u(),M(o,{class:"text-left",style:{padding:"10px"},cols:"4",sm:"4",md:"4"},{default:s(()=>[D(r("input",{type:"checkbox",id:"jack",value:i.show,"onUpdate:modelValue":B=>i.show=B},null,8,Q),[[v,i.show]]),r("label",G,k(i.title),1)]),_:2},1024))),256))]),_:2},1024)])])]),_:2},1024))),256))]),_:1})]),_:1}),e(g,{class:"d-flex justify-end flex-wrap gap-3"},{default:s(()=>[e(w,{variant:"tonal",color:"secondary",onClick:t[9]||(t[9]=a=>l.showModal=!1)},{default:s(()=>[d(" Close ")]),_:1}),e(w,{onClick:t[10]||(t[10]=a=>b.saveData())},{default:s(()=>[d(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const se=A(I,[["render",H]]);export{se as default};
