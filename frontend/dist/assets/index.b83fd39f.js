import{_ as D}from"./DialogCloseBtn.a9eea126.js";import{y as S,S as B,U as c,o as i,c as d,p as e,w as t,P as r,O as m,Q as k,E as f,A as _,z as u,N as w,m as s,F as N,a as O,v as T,L as b,M as C,ac as g,bv as V}from"./index.08e9078e.js";import{V as A,a as U}from"./VTabs.e0e0f4e0.js";import{V as z}from"./VTable.794b1e77.js";import{V as j}from"./VChip.d13526f8.js";import{V as I}from"./VDialog.74576e46.js";import"./scopeId.7dd2bcb9.js";import"./lazy.06c7709b.js";const x=B.create({baseURL:"https://api.niyomlotto.com/"}),E={components:{},data(){return{showModal:!1,news:[],newTitle:{id:"",title_news:"",master:!0,agents:!0,member:!0}}},mounted(){this.getData()},methods:{async openModal(){this.showModal=!0,this.newTitle={id:"",title_news:"",master:!0,agents:!0,member:!0}},async getData(){let n=await x.get("/agents/get_news",{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-type":"application/json"}}).then(l=>l.data).catch(l=>l.response.data);this.news=n.data},async saveData(){(await x.post("/admin/save_news_list",this.newTitle,{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-Type":"application/json"}}).then(l=>l.data).catch(l=>l.response.data)).status=="success"?(this.showModal=!1,c.fire({title:"Success!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"success",confirmButtonText:"Ok"}),this.getData()):(this.showModal=!1,c.fire({title:"Error!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"error",confirmButtonText:"Ok"}))},async editData(n){n.master=="1"&&(n.master=!0),n.agents=="1"&&(n.agents=!0),n.member=="1"&&(n.member=!0),this.newTitle=n,this.showModal=!0},async deleteAdmin(n){c.fire({title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A?",showCancelButton:!0,confirmButtonText:"\u0E25\u0E1A"}).then(async l=>{l.isConfirmed&&((await x.delete("/admin/delete_news/"+n,{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-Type":"application/json"}}).then(p=>p.data).catch(p=>p.response.data)).status=="success"?(c.fire({title:"Success!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"success",confirmButtonText:"Ok"}),this.getData(),this.showModal=!1):(this.showModal=!1,c.fire({title:"Error!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"error",confirmButtonText:"Ok"})))})}}},F=s("h1",null,"\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32",-1),J=s("thead",null,[s("tr",null,[s("th",null,"\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D"),s("th",null,"\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25"),s("th",null,"\u0E2A\u0E16\u0E32\u0E19\u0E30"),s("th",null,"\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"),s("th",null,"\u0E01\u0E23\u0E30\u0E17\u0E33")])],-1),L={key:0},R={key:1},P={key:2},Q=s("label",null,"\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E2B\u0E49 \u0E21\u0E32\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C",-1),Y=s("label",null,"\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E2B\u0E49 \u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19",-1),q=s("label",null,"\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E2B\u0E49 \u0E40\u0E21\u0E40\u0E40\u0E1A\u0E2D\u0E23\u0E4C",-1);function G(n,l,y,p,o,h){const v=D;return i(),d("div",null,[e(m,{class:"mb-3"},{default:t(()=>[e(r,null,{default:t(()=>[F]),_:1})]),_:1}),e(m,{justify:"space-between",class:"mb-3"},{default:t(()=>[e(r,{md:"5"},{default:t(()=>[e(m,null,{default:t(()=>[e(r,{md:"7"},{default:t(()=>[e(k,{label:"\u0E04\u0E49\u0E19\u0E2B\u0E32","prepend-inner-icon":"tabler-search"})]),_:1})]),_:1})]),_:1}),e(r,{md:"auto"},{default:t(()=>[e(m,null,{default:t(()=>[e(r,null,{default:t(()=>[e(f,{onClick:l[0]||(l[0]=a=>h.openModal())},{default:t(()=>[e(_,{icon:"tabler-plus"}),u(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E48\u0E32\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:t(()=>[e(A,null,{default:t(()=>[u("\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E40\u0E23\u0E32")]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(w,null,{default:t(()=>[e(z,null,{default:t(()=>[J,s("tbody",null,[(i(!0),d(N,null,O(o.news,a=>(i(),d("tr",null,[s("td",null,T(a.title_news),1),s("td",null,[a.agents=="1"?(i(),d("label",L,"Agent | ")):b("",!0),a.master=="1"?(i(),d("label",R,"Master | ")):b("",!0),a.member=="1"?(i(),d("label",P,"Customer")):b("",!0)]),s("td",null,[e(j,{color:"success"},{default:t(()=>[u("\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48")]),_:1})]),s("td",null,T(`${new Date(a.created_at).getFullYear()}/${new Date(a.created_at).getMonth()+1}/${new Date(a.created_at).getDate()}`),1),s("td",null,[e(f,{onClick:M=>h.editData(a),size:"small",class:"mr-2"},{default:t(()=>[e(_,{icon:"tabler-settings"}),u(" \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),_:2},1032,["onClick"]),e(f,{onClick:M=>h.deleteAdmin(a.id),color:"error",size:"small"},{default:t(()=>[e(_,{icon:"tabler-x"})]),_:2},1032,["onClick"])])]))),256))])]),_:1})]),_:1})]),_:1}),e(I,{modelValue:o.showModal,"onUpdate:modelValue":l[8]||(l[8]=a=>o.showModal=a),"max-width":"800"},{default:t(()=>[e(v,{onClick:l[1]||(l[1]=a=>o.showModal=!1)}),e(C,{title:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E32\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C"},{default:t(()=>[e(w,null,{default:t(()=>[e(m,null,{default:t(()=>[e(r,{cols:"12",sm:"12",md:"12"},{default:t(()=>[e(k,{modelValue:o.newTitle.title_news,"onUpdate:modelValue":l[2]||(l[2]=a=>o.newTitle.title_news=a),label:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",placeholder:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"},null,8,["modelValue"])]),_:1}),e(r,{cols:"4",sm:"4",md:"4"},{default:t(()=>[Q,u(),g(s("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":l[3]||(l[3]=a=>o.newTitle.master=a)},null,512),[[V,o.newTitle.master]])]),_:1}),e(r,{cols:"4",sm:"4",md:"4"},{default:t(()=>[Y,u(),g(s("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":l[4]||(l[4]=a=>o.newTitle.agents=a)},null,512),[[V,o.newTitle.agents]])]),_:1}),e(r,{cols:"4",sm:"4",md:"4"},{default:t(()=>[q,u(),g(s("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":l[5]||(l[5]=a=>o.newTitle.member=a)},null,512),[[V,o.newTitle.member]])]),_:1})]),_:1})]),_:1}),e(w,{class:"d-flex justify-end flex-wrap gap-3"},{default:t(()=>[e(f,{variant:"tonal",color:"secondary",onClick:l[6]||(l[6]=a=>o.showModal=!1)},{default:t(()=>[u(" Close ")]),_:1}),e(f,{onClick:l[7]||(l[7]=a=>h.saveData())},{default:t(()=>[u(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const le=S(E,[["render",G]]);export{le as default};
