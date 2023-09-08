import{J as P,aB as M,K as A,P as B,am as _,ao as G,ax as O,S as k,L as J,p as l,af as K,M as C,ah as N,ai as U,ak as X,O as j,al as H,aF as Q,ap as W,aq as Y,ar as Z,at as ee,U as ae,aG as le,a6 as te,an as ne,a1 as I,au as se,av as ie,ab as u,A as d,a2 as oe,G as S}from"./index.7138b669.js";import{m as ue,u as de,a as ce,b as re}from"./VBtn.a6b3b781.js";import{a as ve}from"./index.0ab14008.js";const x=Symbol.for("vuetify:v-chip-group");P({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:M},...ue({selectedClass:"v-chip--selected"}),...A(),...B(),..._({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{themeClasses:r}=G(e),{isSelected:t,select:v,next:f,prev:p,selected:m}=de(e,x);return O({VChip:{color:k(e,"color"),filter:k(e,"filter"),variant:k(e,"variant")}}),J(()=>{var s;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(s=n.default)==null?void 0:s.call(n,{isSelected:t,select:v,next:f,prev:p,selected:m.value})]})}),{}}});const he=P({name:"VChip",directives:{Ripple:K},props:{activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...N(),...U(),...X(),...ce(),...j(),...H(),...Q(),...A({tag:"span"}),...B(),..._({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,c){let{attrs:n,emit:r,slots:t}=c;const{borderClasses:v}=W(e),{colorClasses:f,colorStyles:p,variantClasses:m}=Y(e),{densityClasses:s}=Z(e),{elevationClasses:D}=ee(e),{roundedClasses:R}=ae(e),{sizeClasses:$}=le(e),{themeClasses:T}=G(e),g=te(e,"modelValue"),a=re(e,x,!1),h=ne(e,n);function z(i){g.value=!1,r("click:close",i)}return()=>{var i;const E=h.isLink.value?"a":e.tag,F=!!(t.append||e.appendIcon||e.appendAvatar),L=!!(t.close||e.closable),V=!!(t.filter||e.filter)&&a,q=!!(t.prepend||e.prependIcon||e.prependAvatar),b=!a||a.isSelected.value,o=!e.disabled&&(!!a||h.isClickable.value||e.link),w=e.link?e.link:a==null?void 0:a.toggle;return g.value&&I(l(E,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":o,"v-chip--filter":V,"v-chip--pill":e.pill},T.value,v.value,b?f.value:void 0,s.value,D.value,R.value,$.value,m.value,a==null?void 0:a.selectedClass.value],style:[b?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,onClick:o&&w},{default:()=>{var y;return[ie(o,"v-chip"),V&&l(u,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(ve,null,{default:()=>[I(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(d,null,null)]),[[oe,a.isSelected.value]])]})]}),q&&l(u,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(S,{start:!0},null):e.prependIcon?l(d,{start:!0},null):void 0]}),(y=(i=t.default)==null?void 0:i.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?y:e.text,F&&l(u,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(S,{end:!0},null):e.appendIcon?l(d,{end:!0},null):void 0]}),L&&l(u,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:z},[t.close?t.close():l(d,null,null)])]})]}}),[[se("ripple"),o&&e.ripple,null]])}}});export{he as V};
