import{ac as r,k as n,a8 as u,D as c}from"./index.83f80d25.js";const l=r({eager:Boolean},"lazy");function m(e,o){const a=n(!1),s=u(()=>a.value||e.eager||o.value);c(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{l as m,m as u};
