import{k as o,o as y,b as k,w as t,p as e,bg as L,bp as d,bD as w,q as i,bc as c,z as S,m as I,H as v}from"./index.d3d8cff1.js";import{a as B}from"./axios.364130a5.js";import{u as f,m as C,a as N}from"./misc-mask-light.20dfc673.js";import{V as D,r as p}from"./validators.26e74500.js";import{S as g}from"./sweetalert2.all.e105506d.js";import{a as R,b as T,c as U,d as J}from"./auth-v2-login-illustration-light.a2530d13.js";import{b as V}from"./route-block.011d1056.js";import{V as _,a as u}from"./VRow.fac2c1a6.js";import{V as b}from"./VTextField.b1821405.js";import{V as M}from"./VBtn.677289e9.js";import"./forwardRefs.c003b6b8.js";import"./index.380a4757.js";import"./easing.36b781ab.js";const O=I("h5",{class:"text-h5 font-weight-semibold mb-1"}," \u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E02\u0E34\u0E01 Dr.Carcare ! \u{1F44B}\u{1F3FB} ",-1),j={__name:"register",setup(q){f(J,U,T,R,!0),f(N,C),o(!1);const r=o(""),l=o("");o(!1),o(0);const h=B.create({baseURL:"http://188.166.221.231:4600/"}),x=async()=>{let m=new URL(window.location).search.split("?user_id=")[1],a={mobile:r.value,name:l.value,user_id:m},s=await h.post("register/",a,{headers:{"Content-Type":"application/json"}}).then(n=>n.data).catch(n=>n.response.data);s.status=="success"?(localStorage.setItem("isLogin",JSON.stringify(!0)),localStorage.setItem("token",JSON.stringify(s.token)),localStorage.setItem("user_data",JSON.stringify(s.data)),v.push({path:"/success"}),g.fire({icon:"success",title:"Success",text:"Login success!"})):g.fire({icon:"error",title:"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08...",text:"\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A!"})};return(m,a)=>(y(),k(_,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(u,{cols:"12",lg:"12",class:"d-flex align-center justify-center"},{default:t(()=>[e(L,{class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(d,null,{default:t(()=>[O]),_:1}),e(d,null,{default:t(()=>[e(D,{onSubmit:a[2]||(a[2]=w(()=>{x()},["prevent"]))},{default:t(()=>[e(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(b,{modelValue:i(l),"onUpdate:modelValue":a[0]||(a[0]=s=>c(l)?l.value=s:null),label:"\u0E0A\u0E37\u0E48\u0E2D",type:"text",rules:[i(p)]},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(b,{modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=s=>c(r)?r.value=s:null),label:"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",type:"text",rules:[i(p)]},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(M,{block:"",type:"submit"},{default:t(()=>[S(" \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof V=="function"&&V(j);export{j as default};
