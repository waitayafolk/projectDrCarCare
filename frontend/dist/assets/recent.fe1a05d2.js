import{y as i,S as u,r as o,o as p,c as _,p as t,w as e,O as s,P as r,M as m,z as f,m as h}from"./index.08e9078e.js";import{Q as g}from"./vue-quill.snow.48baeb12.js";import w from"./recentList.03ba739d.js";import{V as y,a as V}from"./VTabs.e0e0f4e0.js";import"./VDivider.6a220979.js";const b=u.create({baseURL:"https://api.niyomlotto.com/"}),x={name:"Recent",components:{QuillEditor:g,RecentList:w},data(){return{news:[],new:{id:"",title_news:"",master:!0,agents:!0,member:!0}}},mounted(){this.getData()},methods:{async getData(){let n=await b.get("agents/get_news_all",{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-type":"application/json"}}).then(a=>a.data).catch(a=>a.response.data);this.news=n.data}}},R=h("h1",null,"\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28",-1);function v(n,a,C,$,E,L){const l=o("QuillEditor"),c=o("v-card-body"),d=o("RecentList");return p(),_("div",null,[t(m,{style:{padding:"20px"}},{default:e(()=>[t(c,null,{default:e(()=>[t(s,null,{default:e(()=>[t(r,null,{default:e(()=>[R]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(r,null,{default:e(()=>[t(l,{theme:"snow",toolbar:"full",style:{height:"400px"}})]),_:1})]),_:1})]),_:1})]),_:1}),t(V,{style:{"margin-top":"35px"}},{default:e(()=>[t(y,null,{default:e(()=>[f("\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28")]),_:1})]),_:1}),t(d)])}const T=i(x,[["render",v]]);export{T as default};
