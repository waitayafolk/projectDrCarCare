import{J as r,ai as d,K as h,P as v,ao as b,ar as m,L as u,p as a,ay as f}from"./index.83f80d25.js";const g=r({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...d(),...h(),...v()},setup(e,s){let{slots:t}=s;const{themeClasses:i}=b(e),{densityClasses:n}=m(e);return u(()=>{var o,l;return a(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},i.value,n.value]},{default:()=>[(o=t.top)==null?void 0:o.call(t),t.default&&a("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[a("table",null,[t.default()])]),(l=t.bottom)==null?void 0:l.call(t)]})}),{}}});export{g as V};
