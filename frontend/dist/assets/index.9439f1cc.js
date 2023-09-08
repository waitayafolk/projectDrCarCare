import{o as n,b as d,w as o,p as a,N as g,J as S,A as w,L as V,m as e,v as s,M as u,y as L,S as c,r as _,c as p,O as h,P as i,F as C,a as I,bN as k,bO as D}from"./index.08e9078e.js";import{f as M}from"./helpers.segment.1007a634.js";import{h as N}from"./moment.9709ab41.js";import{s as T}from"./vue3-datepicker.esm.70ae366a.js";import B from"./recentList.1c5ec6cc.js";import"./VDivider.6a220979.js";const R={class:"text-h6 font-weight-semibold my-2"},q={class:"text-body-2"},P={__name:"CardStatisticsVerticalSimple",props:{title:{type:String,required:!0},color:{type:String,required:!1,default:"primary"},icon:{type:String,required:!0},stats:{type:String,required:!0}},setup(t){const r=t;return(f,b)=>(n(),d(u,null,{default:o(()=>[a(g,{class:"d-flex flex-column align-center justify-center"},{default:o(()=>[r.icon?(n(),d(S,{key:0,size:"42",variant:"tonal",color:r.color},{default:o(()=>[a(w,{icon:r.icon,size:"24"},null,8,["icon"])]),_:1},8,["color"])):V("",!0),e("h6",R,s(r.stats),1),e("span",q,s(r.title),1)]),_:1})]),_:1}))}},z={computed:{moment(){return N}},components:{DatePicker:T,service:c,RecentList:B},data(){return{user_data:{email:"",username:"",credit:0,mobile:"",name:"",userCount:0},dashboardData:{member:0,memberUse:0,MostWithdraw:0,MostDeposit:0,MostTotal:0,MonthWithdraw:0,MonthDeposit:0,LessonTotal:0},statisticsVerticalSimple:[]}},mounted(){this.getdata(),this.getuserInfo()},methods:{formatNumber:M,async getdata(){await c({method:"get",url:"/agents/data-card-dashbord",data:[],params:[]}).then(t=>{this.statisticsVerticalSimple=[{title:"\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E41\u0E17\u0E07\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",color:"error",stats:"0",icon:"tabler-user"},{title:"\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",color:"warning",stats:t.allUser.toLocaleString(),icon:"tabler-users"},{title:"\u0E41\u0E17\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",color:"success",stats:t.allBetTotalToday.toLocaleString(),icon:"tabler-shopping-cart"},{title:"\u0E1D\u0E32\u0E01\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",color:"primary",stats:t.totalDeposit.toLocaleString(),icon:"tabler-credit-card"},{title:"\u0E16\u0E2D\u0E19\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",color:"error",stats:t.totalwidthdraw.toLocaleString(),icon:"tabler-list"},{title:"\u0E22\u0E2D\u0E14\u0E1D\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E40\u0E14\u0E37\u0E2D\u0E19",color:"primary",stats:t.totalDeposit.toLocaleString(),icon:"tabler-file"},{title:"\u0E22\u0E2D\u0E14\u0E16\u0E2D\u0E19\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",color:"warning",stats:t.totalwidthdraw.toLocaleString(),icon:"tabler-activity"},{title:"\u0E22\u0E2D\u0E14\u0E41\u0E17\u0E07\u0E07\u0E27\u0E14\u0E19\u0E35\u0E49",color:"success",stats:"0",icon:"tabler-activity"}]}).catch(t=>{console.log(t)})},async getuserInfo(){await c({method:"get",url:"/agents/agents-info",data:[],params:[]}).then(t=>{console.log(t),this.user_data.credit=t.agentInfo.credit_balance,this.user_data.email=t.agentInfo.email,this.user_data.username=t.agentInfo.username,this.user_data.mobile=t.agentInfo.mobile,this.user_data.name=t.agentInfo.name,this.user_data.userCount=t.userCount}).catch(t=>{console.log(t)})},async getnewToday(){await c({method:"get",url:"/agents/agents-news-today",data:[],params:[]}).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}},A=e("div",null," username : ",-1),F=e("div",null," email : ",-1),O=e("div",null,"\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15 :",-1),U=e("div",null," \u0E0A\u0E37\u0E48\u0E2D : ",-1),W=e("div",null," \u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23 : ",-1),j=e("div",null," \u0E08\u0E33\u0E19\u0E27\u0E19\u0E22\u0E39\u0E40\u0E0B\u0E2D\u0E23\u0E4C : ",-1),E=e("h3",null,"\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19",-1);function J(t,r,f,b,l,G){const y=P,v=_("v-card-header"),x=_("RecentList");return n(),p("div",null,[a(u,{style:{padding:"20px"}},{default:o(()=>[a(g,null,{default:o(()=>[a(h,null,{default:o(()=>[a(i,{cols:"12",md:"3",xs:"6"},{default:o(()=>[A,F,O]),_:1}),a(i,{cols:"12",md:"3",xs:"6",class:"mb-md-0 mb-2 text-left"},{default:o(()=>[e("div",null,s(l.user_data.username),1),e("div",null,s(l.user_data.email),1),e("div",null,s(l.user_data.credit.toLocaleString()),1)]),_:1}),a(i,{cols:"12",md:"3",xs:"6"},{default:o(()=>[U,W,j]),_:1}),a(i,{cols:"12",md:"3",xs:"6"},{default:o(()=>[e("div",null,s(l.user_data.name),1),e("div",null,s(l.user_data.mobile),1),e("div",null,s(l.user_data.userCount),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(h,{style:{"margin-top":"35px"}},{default:o(()=>[(n(!0),p(C,null,I(l.statisticsVerticalSimple,m=>(n(),d(i,{key:m.title,cols:"12",lg:"3",md:"3",sm:"4",xs:"6"},{default:o(()=>[a(y,k(D(m)),null,16)]),_:2},1024))),128))]),_:1}),a(u,{"no-body":"",class:"mb-0 p-10",style:{padding:"20px","margin-top":"35px"}},{default:o(()=>[a(v,null,{default:o(()=>[E]),_:1}),a(x)]),_:1})])}const $=L(z,[["render",J]]);export{$ as default};
