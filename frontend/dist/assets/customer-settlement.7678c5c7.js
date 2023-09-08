import{y as g,S as f,o,c as u,p as l,w as r,P as V,O as i,N as b,m as t,F as y,a as P,b as m,z as h,v as n,M as k}from"./index.08e9078e.js";import{V as x}from"./VTable.794b1e77.js";import{V as p}from"./VChip.d13526f8.js";import{V as C}from"./VPagination.f453cc9a.js";const F=f.create({baseURL:"https://api.niyomlotto.com/"}),w={components:{},data(){return{currentPage:1,length:0,userData:[]}},mounted(){this.getUser()},methods:{async getUser(){const a=await F.post("/administrator/users/customer-settlement",{limit:100,sort:"desc",page:this.currentPage},{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-Type":"application/json"}}).then(s=>s.data).catch(s=>s.response.data);this.length=a.data.lastPage,this.userData=a.data.data}}},N=t("h1",null,"\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",-1),S=t("thead",null,[t("tr",null,[t("th",null,"\u0E2A\u0E16\u0E32\u0E19\u0E30"),t("th",null,"\u0E22\u0E39\u0E2A\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E21"),t("th",{class:"text-end"},"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15"),t("th",{class:"text-end"},"\u0E42\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32"),t("th",{class:"text-end"},"\u0E22\u0E2D\u0E14\u0E41\u0E17\u0E07"),t("th",{class:"text-end"},"\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E48\u0E32\u0E07"),t("th",{class:"text-center"},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C"),t("th",null,"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E21\u0E31\u0E04\u0E23")])],-1),U={class:"text-center"},v={class:"text-end"},B={class:"text-end"},D={class:"text-end"},T={class:"text-end"},j={class:"text-center"};function z(a,s,I,L,c,_){return o(),u("div",null,[l(i,{class:"mb-3"},{default:r(()=>[l(V,null,{default:r(()=>[N]),_:1})]),_:1}),l(i,{justify:"space-between",class:"mb-3"}),l(k,null,{default:r(()=>[l(b,null,{default:r(()=>[l(x,null,{default:r(()=>[S,t("tbody",null,[(o(!0),u(y,null,P(c.userData,e=>{var d;return o(),u("tr",null,[t("td",null,[t("td",U,[e.status=="use"?(o(),m(p,{key:0,color:"success"},{default:r(()=>[h("\u0E1B\u0E01\u0E15\u0E34")]),_:1})):(o(),m(p,{key:1,color:"error"},{default:r(()=>[h("\u0E23\u0E30\u0E07\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")]),_:1}))])]),t("td",null,"Player"+n(e.username),1),t("td",v,n(a.numeralFormat(e.credit_balance,"0,0[.]00")),1),t("td",B,n(a.numeralFormat(e.credit_deposit,"0,0[.]00")),1),t("td",D,n(a.numeralFormat(e.summary_bet,"0,0[.]00")),1),t("td",T,n(a.numeralFormat(e.credit_balance-e.credit_deposit,"0,0[.]00")),1),t("td",j,n((d=e.mobile)!=null?d:"-"),1),t("td",null,n(e.created_at),1)])}),256))])]),_:1})]),_:1}),l(C,{class:"text-center",style:{padding:"10px"},modelValue:c.currentPage,"onUpdate:modelValue":s[0]||(s[0]=e=>c.currentPage=e),length:c.length,onClick:s[1]||(s[1]=e=>_.getUser()),rounded:"circle"},null,8,["modelValue","length"])]),_:1})])}const J=g(w,[["render",z]]);export{J as default};
