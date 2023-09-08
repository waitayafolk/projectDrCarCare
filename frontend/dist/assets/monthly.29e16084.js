import{y as g,S as _,r as x,o as u,c as d,p as a,w as n,O as c,P as r,m as t,ac as p,bQ as m,E as y,A as V,z as v,M as f,N as C,F as D,a as B,v as l}from"./index.08e9078e.js";import{V as S}from"./VTable.794b1e77.js";const E={components:{service:_},data(){return{datasale:[],total_bill:0,total_customer:0,total_bet:0,total_win:0,total_winlose:0,total_commission:0,total_af:0,total_profit:0,total_shooter:0,start_date:new Date,end_date:new Date}},mounted(){this.getdata()},methods:{async getdata(){let h={end_date:this.end_date,start_date:this.start_date};await _({method:"post",url:"/admin/reportmonth",data:h,params:[]}).then(s=>{this.total_bill=0,this.total_customer=0,this.total_bet=0,this.total_win=0,this.total_winlose=0,this.total_commission=0,this.total_af=0,this.total_profit=0,this.total_shooter=0;for(let i of s)this.total_bill+=i.bill,this.total_customer+=i.customer,this.total_bet+=i.bet,this.total_win+=i.win,this.total_winlose+=i.winlose,this.total_commission+=i.commission,this.total_af+=i.af,this.total_profit+=i.profit,this.total_shooter+=i.shooter;console.log(s),this.datasale=s}).catch(s=>{console.log(s)})}}},N=t("h3",null,"\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",-1),T=t("label",null,"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21",-1),k=t("label",null,"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14",-1),F=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"\u0E1A\u0E34\u0E25"),t("th",null,"\u0E22\u0E39\u0E2A\u0E40\u0E0B\u0E2D\u0E23\u0E4C"),t("th",null,"\u0E22\u0E34\u0E07\u0E40\u0E25\u0E02"),t("th",null,"\u0E40\u0E14\u0E34\u0E21\u0E1E\u0E31\u0E19"),t("th",null,"\u0E0A\u0E19\u0E30"),t("th",null,"\u0E0A\u0E19\u0E30 \u0E41\u0E1E\u0E49"),t("th",null,"\u0E04\u0E48\u0E32\u0E04\u0E2D\u0E21\u0E21\u0E34\u0E2A\u0E0A\u0E31\u0E48\u0E19"),t("th",null,"\u0E04\u0E48\u0E32 af"),t("th",null,"\u0E01\u0E33\u0E44\u0E23")])],-1),M=t("th",null,"\u0E23\u0E27\u0E21",-1);function U(h,s,i,z,e,w){const b=x("v-card-header");return u(),d("div",null,[a(f,{"no-body":"",class:"mv-0 p-10",style:{padding:"20px"}},{default:n(()=>[a(b,null,{default:n(()=>[N]),_:1}),a(c,{style:{"margin-top":"20px"}},{default:n(()=>[a(r,{cols:"12",lg:"6",md:"6",sm:"6",xs:"12"},{default:n(()=>[a(c,null,{default:n(()=>[a(r,{cols:"6",lg:"6",md:"6",sm:"6",xs:"6"},{default:n(()=>[t("div",null,[T,p(t("input",{type:"date","onUpdate:modelValue":s[0]||(s[0]=o=>e.start_date=o),style:{width:"100%",height:"38px",border:"1px solid #C9C9EB","border-radius":"5px"}},null,512),[[m,e.start_date]])])]),_:1}),a(r,{cols:"6",lg:"6",md:"6",sm:"6",xs:"6"},{default:n(()=>[t("div",null,[k,p(t("input",{type:"date","onUpdate:modelValue":s[1]||(s[1]=o=>e.end_date=o),style:{width:"100%",height:"38px",border:"1px solid #C9C9EB","border-radius":"5px"}},null,512),[[m,e.end_date]])])]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",lg:"6",md:"6",sm:"6",xs:"12",style:{"margin-top":"20px"}},{default:n(()=>[a(y,{color:"primary",onClick:s[2]||(s[2]=o=>w.getdata())},{default:n(()=>[a(V,{icon:"tabler-search"}),v(" \u0E04\u0E49\u0E19\u0E2B\u0E32 ")]),_:1})]),_:1})]),_:1})]),_:1}),a(f,null,{default:n(()=>[a(C,null,{default:n(()=>[a(S,null,{default:n(()=>[F,t("tbody",null,[(u(!0),d(D,null,B(e.datasale,o=>(u(),d("tr",null,[t("th",null,l(`${new Date(o.date).getFullYear()}-${String(new Date(o.date).getMonth()+1).padStart(2,"0")}-${String(new Date(o.date).getDate()).padStart(2,"0")}`),1),t("th",null,l(o.bill),1),t("th",null,l(o.customer),1),t("th",null,l(o.shooter),1),t("th",null,l(o.bet),1),t("th",null,l(o.win),1),t("th",null,l(o.winlose),1),t("th",null,l(o.commission),1),t("th",null,l(o.af),1),t("th",null,l(o.profit),1)]))),256))]),t("tfoot",null,[t("tr",null,[M,t("th",null,l(e.total_bill),1),t("th",null,l(e.total_customer),1),t("th",null,l(e.total_shooter),1),t("th",null,l(e.total_bet),1),t("th",null,l(e.total_win),1),t("th",null,l(e.total_winlose),1),t("th",null,l(e.total_commission),1),t("th",null,l(e.total_af),1),t("th",null,l(e.total_profit),1)])])]),_:1})]),_:1})]),_:1})])}const L=g(E,[["render",U]]);export{L as default};
