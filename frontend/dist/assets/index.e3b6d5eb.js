import{y as x,S as l,U as c,o as r,c as u,p as t,w as e,P as o,O as d,N as h,z as s,F as V,a as g,b as v,v as B,Q as k,m,E as w,M as y}from"./index.08e9078e.js";const C={components:{service:l},data(){return{rotation:[]}},mounted(){this.getAgentRotation()},methods:{async getAgentRotation(){await l({method:"get",url:"/admin/agents_rotation",data:[],params:[]}).then(a=>{this.rotation=a}).catch(a=>{console.log(a)})},async saveRotation(){await l({method:"post",url:"/admin/save/agents_rotation",data:{data:this.rotation},params:[]}).then(a=>{a=="success"?c.fire({title:"Success!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"success",confirmButtonText:"Ok"}):c.fire({title:"Error!",text:"\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",icon:"error",confirmButtonText:"Ok"})}).catch(a=>{console.log(a)}),console.log()}}},R=m("h1",null,"\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E42\u0E23\u0E40\u0E17\u0E0A\u0E31\u0E48\u0E19\u0E40\u0E2D\u0E40\u0E22\u0E48\u0E19\u0E15\u0E4C",-1),T={class:"text-center",style:{padding:"10px"}};function b(a,i,N,S,_,f){return r(),u("div",null,[t(d,{class:"mb-3"},{default:e(()=>[t(o,null,{default:e(()=>[R]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(h,null,{default:e(()=>[t(d,null,{default:e(()=>[t(o,{md:"4"},{default:e(()=>[s("\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E40\u0E22\u0E19\u0E15\u0E4C")]),_:1}),t(o,null,{default:e(()=>[s("\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19\u0E15\u0E4C")]),_:1})]),_:1}),(r(!0),u(V,null,g(_.rotation,n=>(r(),v(d,{align:"center"},{default:e(()=>[t(o,{md:"4"},{default:e(()=>[s(B(n.username),1)]),_:2},1024),t(o,null,{default:e(()=>[t(k,{type:"number",modelValue:n.rotation,"onUpdate:modelValue":p=>n.rotation=p,label:"\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),256))]),_:1}),m("div",T,[t(w,{onClick:i[0]||(i[0]=n=>f.saveRotation()),color:"success",size:"small"},{default:e(()=>[s("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")]),_:1})])]),_:1})])}const F=x(C,[["render",b]]);export{F as default};
