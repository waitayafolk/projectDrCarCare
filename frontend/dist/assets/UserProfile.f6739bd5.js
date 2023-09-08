import{_ as T}from"./DialogCloseBtn.a9eea126.js";import{G as $,H as O,I as R,p as e,k as p,o as v,c as A,w as l,J as k,K as C,q as t,z as u,v as x,b as J,A as I,L as z,M as F,N as S,O as M,P as d,Q as i,E as y,R as j,j as q,S as w,U as V}from"./index.08e9078e.js";import{V as G}from"./VMenu.80d823a6.js";import{V as H,a as g,b as _,c as K}from"./VList.2ba00a19.js";import{V as B}from"./VBadge.c835c37b.js";import{V as Q}from"./VDivider.6a220979.js";import{V as Y}from"./VDialog.74576e46.js";import"./scopeId.7dd2bcb9.js";import"./lazy.06c7709b.js";const h=$({name:"VListItemAction",props:{start:Boolean,end:Boolean,...O()},setup(f,m){let{slots:c}=m;return R(()=>e(f.tag,{class:["v-list-item-action",{"v-list-item-action--start":f.start,"v-list-item-action--end":f.end}]},c)),{}}}),P="/assets/avatar-1.129659bb.png",ne={__name:"UserProfile",setup(f){const m=q(),c=p(JSON.parse(localStorage.getItem("result_data"))),r=p(!1),L=p(JSON.parse(localStorage.getItem("result_data")).role_id),s=p({credit_balance:0,email:0,facebook:0,line:0,mobile_contact_1:"",mobile_contact_2:"",mobile_contact_3:"",username:0}),b=async()=>{r.value=!1},U=async()=>{await w({method:"post",url:"/agents/saveProfile",data:s,params:[]}).then(n=>{console.log(n),n=="success"?(r.value=!1,V.fire("\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!","\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E40\u0E40\u0E25\u0E49\u0E27 ","success")):(r.value=!1,V.fire("\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!","\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25","error"))}).catch(n=>{console.log(n)})},N=async()=>{r.value=!0,await w({method:"get",url:"/agents/getProfile",data:[],params:[]}).then(n=>{s.value=n}).catch(n=>{console.log(n)})},D=async()=>{V.fire({title:"\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A ?",text:"\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(async n=>{if(n.isConfirmed){let a=JSON.parse(localStorage.getItem("role"));localStorage.clear("role"),localStorage.clear("token"),localStorage.clear("result_data"),localStorage.clear("isLogin"),a=="admin"?m.push("/"):a=="masters"?m.push("/login-master"):a=="agents"&&m.push("/login-agent"),V.fire("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!","\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E40\u0E25\u0E49\u0E27 ","success")}})};return(n,a)=>{const E=T;return v(),A("div",null,[e(B,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:l(()=>[e(k,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:l(()=>[e(C,{src:t(P)},null,8,["src"]),e(G,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:l(()=>[e(H,null,{default:l(()=>[e(g,null,{prepend:l(()=>[e(h,{start:""},{default:l(()=>[e(B,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:l(()=>[e(k,{color:"primary",variant:"tonal"},{default:l(()=>[e(C,{src:t(P)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:l(()=>[e(_,{class:"font-weight-semibold text-uppercase"},{default:l(()=>[u(x(t(c).name),1)]),_:1}),e(K,{class:"text-uppercase"},{default:l(()=>[u(x(t(c).status),1)]),_:1})]),_:1}),e(Q,{class:"my-2"}),t(c).status=="agents"?(v(),J(g,{key:0,onClick:a[0]||(a[0]=o=>N())},{prepend:l(()=>[e(I,{class:"me-2",icon:"tabler-user",size:"22"})]),default:l(()=>[e(_,null,{default:l(()=>[u("Profile")]),_:1})]),_:1})):z("",!0),e(g,{onClick:a[1]||(a[1]=o=>D())},{prepend:l(()=>[e(I,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:l(()=>[e(_,null,{default:l(()=>[u("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(Y,{modelValue:t(r),"onUpdate:modelValue":a[12]||(a[12]=o=>j(r)?r.value=o:null),"max-width":"800"},{default:l(()=>[e(E,{onClick:a[2]||(a[2]=o=>b())}),e(F,{title:"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 \u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C"},{default:l(()=>[e(S,null,{default:l(()=>[e(M,null,{default:l(()=>[e(d,{cols:"12",sm:"12",md:"12"},{default:l(()=>[e(i,{disabled:!0,modelValue:t(s).username,"onUpdate:modelValue":a[3]||(a[3]=o=>t(s).username=o),label:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",placeholder:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:t(s).email,"onUpdate:modelValue":a[4]||(a[4]=o=>t(s).email=o),label:"E-mail",placeholder:"E-mail"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:t(s).mobile_contact_1,"onUpdate:modelValue":a[5]||(a[5]=o=>t(s).mobile_contact_1=o),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D 1 ",placeholder:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D 1 "},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:t(s).mobile_contact_2,"onUpdate:modelValue":a[6]||(a[6]=o=>t(s).mobile_contact_2=o),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D 2 ",placeholder:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D 2 "},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:t(s).mobile_contact_3,"onUpdate:modelValue":a[7]||(a[7]=o=>t(s).mobile_contact_3=o),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D 3 ",placeholder:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D 3 "},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:t(s).line,"onUpdate:modelValue":a[8]||(a[8]=o=>t(s).line=o),label:"LINE ID",placeholder:"LINE ID"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:t(s).facebook,"onUpdate:modelValue":a[9]||(a[9]=o=>t(s).facebook=o),label:"Page Facebook",placeholder:"Page Facebook"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,{class:"d-flex justify-end flex-wrap gap-3"},{default:l(()=>[e(y,{disabled:t(L)!=0,variant:"tonal",color:"success",onClick:a[10]||(a[10]=o=>U())},{default:l(()=>[u(" Save ")]),_:1},8,["disabled"]),e(y,{variant:"tonal",color:"secondary",onClick:a[11]||(a[11]=o=>b())},{default:l(()=>[u(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{ne as default};
