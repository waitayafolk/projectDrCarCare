import{j as p,k as h}from"./VTextField.b859009d.js";import{f as b}from"./forwardRefs.c003b6b8.js";import{J as v,k as y,L as V,p as F}from"./index.c9a23eda.js";const S=v({name:"VForm",props:{...p()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:o,emit:d}=l;const i=h(e),s=y();function f(r){r.preventDefault(),i.reset()}function u(r){const n=r,t=i.validate();n.then=t.then.bind(t),n.catch=t.catch.bind(t),n.finally=t.finally.bind(t),d("submit",n),n.defaultPrevented||t.then(m=>{let{valid:c}=m;if(c){var a;(a=s.value)==null||a.submit()}}),n.preventDefault()}return V(()=>{var r;return F("form",{ref:s,class:"v-form",novalidate:!0,onReset:f,onSubmit:u},[(r=o.default)==null?void 0:r.call(o,i)])}),b(i,s)}}),R=e=>e==null,g=e=>Array.isArray(e)&&e.length===0,D=e=>R(e)||g(e)||e===!1?"This field is required":!!String(e).trim().length||"This field is required";export{S as V,D as r};