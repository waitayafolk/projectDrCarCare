import{t as u,B as l,C as p,D as _,o as r,b as m,w as x,p as d,A as T,q as f}from"./index.83f80d25.js";import{V as g}from"./VBtn.b09f0d8d.js";const v={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(s){const t=s,{theme:n}=u(),{state:c,next:a,index:o}=l(t.themes.map(e=>e.name),{initialValue:n.value}),h=()=>{n.value=a()},i=p(n,()=>{const e=o.value+1===t.themes.length?0:o.value+1;return t.themes[e].icon});return _(n,e=>{c.value=e}),(e,w)=>(r(),m(g,{icon:"",variant:"text",color:"default",size:"small",onClick:h},{default:x(()=>[d(T,{icon:f(i),size:"24"},null,8,["icon"])]),_:1}))}},b={__name:"NavbarThemeSwitcher",setup(s){const t=[{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon"}];return(n,c)=>{const a=v;return r(),m(a,{themes:t})}}};export{b as default};
