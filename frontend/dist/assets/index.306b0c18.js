import{_ as K}from"./DialogCloseBtn.a9eea126.js";import{G as W,bG as X,Z as P,dC as Y,bZ as ee,a0 as R,$ as te,I as le,bE as oe,bJ as ae,k as se,p as e,a4 as A,dD as ie,dE as ne,bP as re,y as de,S as D,o as u,c as f,w as t,F as x,a as T,b as ue,z as d,v as b,M as w,bt as ce,O as m,P as i,E as c,A as I,m as n,N as h,bR as fe,Q as C}from"./index.08e9078e.js";import{a as me,V as pe}from"./VTabs.e0e0f4e0.js";import{m as ge,f as _e,V as ve}from"./VSelectionControl.e15bfe62.js";import{V as Ve}from"./VTable.794b1e77.js";import{V as be}from"./VForm.e626d730.js";import{V as z}from"./VDialog.74576e46.js";import{V as we}from"./VSpacer.8bfb2f5a.js";import"./scopeId.7dd2bcb9.js";import"./lazy.06c7709b.js";const he=W({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...X(),...ge()},emits:{"update:focused":o=>!0,"update:modelValue":()=>!0,"update:indeterminate":o=>!0},setup(o,l){let{attrs:g,slots:r}=l;const a=P(o,"indeterminate"),_=P(o,"modelValue"),{loaderClasses:S}=Y(o),{isFocused:s,focus:p,blur:B}=ee(o),F=R(()=>typeof o.loading=="string"&&o.loading!==""?o.loading:o.color),G=te(),L=R(()=>o.id||`switch-${G}`);function E(){a.value&&(a.value=!1)}return le(()=>{const[U,j]=oe(g),[J,Ne]=ae(o),[O,Pe]=_e(o),N=se();function $(){var v,V;(v=N.value)==null||(V=v.input)==null||V.click()}return e(re,A({class:["v-switch",{"v-switch--inset":o.inset},{"v-switch--indeterminate":a.value},S.value]},U,J,{id:L.value,focused:s.value}),{...r,default:v=>{let{id:V,isDisabled:M,isReadonly:Z,isValid:Q}=v;return e(ve,A({ref:N},O,{modelValue:_.value,"onUpdate:modelValue":[k=>_.value=k,E],id:V.value,type:"checkbox","aria-checked":a.value?"mixed":void 0,disabled:M.value,readonly:Z.value,onFocus:p,onBlur:B},j),{...r,default:()=>e("div",{class:"v-switch__track",onClick:$},null),input:k=>{let{textColorClasses:q,textColorStyles:H}=k;return e("div",{class:["v-switch__thumb",q.value],style:H.value},[o.loading&&e(ie,{name:"v-switch",active:!0,color:Q.value===!1?void 0:F.value},{default:y=>r.loader?r.loader(y):e(ne,{active:y.isActive,color:y.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}}),Ce={components:{},data(){return{lottoGroup:[],rounds:[],isDialogVisible:!1,isDialogTwoShow:!1,lottoTitle:""}},mounted(){this.getLottoGroup()},methods:{async getLottoGroup(){let o=await D.get("https://api.niyomlotto.com//lotto-groups",{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-type":"application/json"}});this.lottoGroup=o.data.data},async loadLottoRoundDetailRate(o){return(await D.get("https://api.niyomlotto.com//admin/lotto-groups-rate/"+o,{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-type":"application/json"}})).data.data},async lottoRound(o,l,g){this.lottoTitle=g;let r=await D.get("https://api.niyomlotto.com//admin/lotto-groups-detail/"+o+"?slug="+l,{headers:{Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`,"Content-type":"application/json"}});for(let a of r.data.data)a.detail=await this.loadLottoRoundDetailRate(a.id);this.rounds=r.data.data}}},Se=n("thead",null,[n("tr",null,[n("th",null,"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2B\u0E27\u0E22"),n("th",null,"\u0E23\u0E32\u0E04\u0E32\u0E08\u0E48\u0E32\u0E22"),n("th")])],-1),ke={class:"text-end"},ye=n("label",{for:"rate"},"\u0E23\u0E32\u0E04\u0E32\u0E08\u0E48\u0E32\u0E22",-1),De=n("label",{for:"min"},"\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E32\u0E04\u0E32\u0E41\u0E17\u0E07\u0E02\u0E31\u0E49\u0E19\u0E15\u0E15\u0E48\u0E33/\u0E04\u0E23\u0E31\u0E49\u0E07",-1),xe=n("label",{for:"max"},"\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E32\u0E04\u0E32\u0E41\u0E17\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14/\u0E04\u0E23\u0E31\u0E49\u0E07",-1),Te=n("label",{for:"password"},"\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E32\u0E04\u0E32\u0E41\u0E17\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14/\u0E40\u0E25\u0E02/\u0E07\u0E27\u0E14",-1);function Be(o,l,g,r,a,_){const S=K;return u(),f("div",null,[e(w,{class:"mb-3"},{default:t(()=>[e(me,null,{default:t(()=>[(u(!0),f(x,null,T(a.lottoGroup,s=>(u(),ue(pe,{onClick:p=>_.lottoRound(s.id,s.slug,s.title)},{default:t(()=>[d(b(s.title),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),_:1}),e(w,{class:"mb-3"},{default:t(()=>[e(ce,null,{default:t(()=>[e(m,{align:"center"},{default:t(()=>[e(i,null,{default:t(()=>[d(b(a.lottoTitle),1)]),_:1}),e(i,{md:"auto"},{default:t(()=>[e(he,{on:"",label:"\u0E40\u0E1B\u0E34\u0E14"})]),_:1}),e(i,{md:"auto"},{default:t(()=>[e(c,{size:"small",variant:"text"},{default:t(()=>[e(I,{icon:"mdi-gear"})]),_:1})]),_:1})]),_:1})]),_:1}),(u(!0),f(x,null,T(a.rounds,s=>(u(),f("div",null,[e(Ve,null,{default:t(()=>[Se,n("tbody",null,[(u(!0),f(x,null,T(s.detail,p=>(u(),f("tr",null,[n("td",null,b(p.title),1),n("td",null,b(p.rate),1),n("td",ke,[e(c,{size:"small",variant:"flat",color:"success",class:"mr-2",onClick:l[0]||(l[0]=B=>a.isDialogVisible=!0)},{default:t(()=>[d("\u0E15\u0E32\u0E23\u0E32\u0E07\u0E40\u0E25\u0E02")]),_:1}),e(c,{size:"small",variant:"flat",color:"warning"},{default:t(()=>[d("\u0E41\u0E01\u0E49\u0E44\u0E02")]),_:1})])]))),256))])]),_:2},1024)]))),256))]),_:1}),e(z,{modelValue:a.isDialogVisible,"onUpdate:modelValue":l[6]||(l[6]=s=>a.isDialogVisible=s),class:"v-dialog-sm"},{default:t(()=>[e(c,{icon:"",class:"v-dialog-close-btn",onClick:l[1]||(l[1]=s=>a.isDialogVisible=!a.isDialogVisible)},{default:t(()=>[e(I,{icon:"tabler-x"})]),_:1}),e(w,{title:"\u0E41\u0E01\u0E49\u0E44\u0E02: \u0E27\u0E34\u0E48\u0E07\u0E1A\u0E19 \u0E2B\u0E27\u0E22\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25 (1 \u0E40\u0E21\u0E29\u0E32\u0E22\u0E19 2566)"},{default:t(()=>[e(h,null,{default:t(()=>[e(be,{onSubmit:l[3]||(l[3]=fe(()=>{},["prevent"]))},{default:t(()=>[e(m,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(m,{"no-gutters":"",align:"center"},{default:t(()=>[e(i,{cols:"12",md:"6"},{default:t(()=>[ye]),_:1}),e(i,{cols:"12",md:"6"},{default:t(()=>[e(C,{id:"firstName",placeholder:"First Name","persistent-placeholder":""})]),_:1})]),_:1})]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(m,{"no-gutters":"",align:"center"},{default:t(()=>[e(i,{cols:"12",md:"6"},{default:t(()=>[De]),_:1}),e(i,{cols:"12",md:"6"},{default:t(()=>[e(C,{id:"min",placeholder:"Email","persistent-placeholder":""})]),_:1})]),_:1})]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(m,{"no-gutters":"",align:"center"},{default:t(()=>[e(i,{cols:"12",md:"6"},{default:t(()=>[xe]),_:1}),e(i,{cols:"12",md:"6"},{default:t(()=>[e(C,{id:"max",type:"number",placeholder:"Number","persistent-placeholder":""})]),_:1})]),_:1})]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(m,{"no-gutters":"",align:"center"},{default:t(()=>[e(i,{cols:"12",md:"6"},{default:t(()=>[Te]),_:1}),e(i,{cols:"12",md:"6"},{default:t(()=>[e(C,{id:"password",modelValue:o.password,"onUpdate:modelValue":l[2]||(l[2]=s=>o.password=s),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{class:"d-flex justify-end flex-wrap gap-3"},{default:t(()=>[e(c,{variant:"tonal",color:"secondary",onClick:l[4]||(l[4]=s=>a.isDialogVisible=!1)},{default:t(()=>[d(" \u0E1B\u0E34\u0E14 ")]),_:1}),e(c,{onClick:l[5]||(l[5]=s=>a.isDialogTwoShow=!a.isDialogTwoShow)},{default:t(()=>[d(" \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:a.isDialogTwoShow,"onUpdate:modelValue":l[9]||(l[9]=s=>a.isDialogTwoShow=s),class:"v-dialog-sm"},{default:t(()=>[e(S,{onClick:l[7]||(l[7]=s=>a.isDialogVisible=!a.isDialogVisible)}),e(w,{title:"Dialog 2"},{default:t(()=>[e(h,null,{default:t(()=>[d("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")]),_:1}),e(h,{class:"d-flex flex-wrap gap-3"},{default:t(()=>[e(we),e(c,{onClick:l[8]||(l[8]=s=>a.isDialogTwoShow=!1)},{default:t(()=>[d(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Je=de(Ce,[["render",Be]]);export{Je as default};
