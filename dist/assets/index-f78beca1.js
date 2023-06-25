import{l as N,k as d,o as p,c as B,v as U,d as x,w,W as A,b as M,n as m,x as t,t as Z,X as j,Y as q,Z as ae,r as S,i as re,m as le,g as h,E as ie,G as T,D as ue,F as ce,N as de,_ as G,$ as O}from"./index-b00f478c.js";import{d as pe,u as me}from"./constants-ed51d6c3.js";import{b as W,u as fe,j as _,_ as X,w as ge,d as F,k as Y,E as H,l as ye,a as P,e as $,m as ve,n as Ce}from"./base-30298023.js";import{m as he}from"./el-input-9821280b.js";import{i as be,T as R,b as Te}from"./use-form-item-565e7b7e.js";import{d as we}from"./use-global-config-65eb4fd7.js";import{E as Ne}from"./aria-60e0cdc6.js";const V={},ke=W({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Ee=["textContent"],Se=N({name:"ElBadge"}),Be=N({...Se,props:ke,setup(s,{expose:n}){const e=s,o=fe("badge"),a=d(()=>e.isDot?"":_(e.value)&&_(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),B("div",{class:m(t(o).b())},[U(l.$slots,"default"),x(q,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[A(M("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:Z(t(a))},null,10,Ee),[[j,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Me=X(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const _e=ge(Me),J=["success","info","warning","error"],i=he({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Y?document.body:void 0}),$e=W({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:be,default:i.icon},id:{type:String,default:i.id},message:{type:F([String,Object,Function]),default:i.message},onClose:{type:F(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:J,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=ae([]),ze=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},Ie=s=>{const{prev:n}=ze(s);return n?n.vm.exposed.bottom.value:0},De=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,Le=["id"],Oe=["innerHTML"],Fe=N({name:"ElMessage"}),He=N({...Fe,props:$e,emits:xe,setup(s,{expose:n}){const e=s,{Close:o}=Te,{ns:a,zIndex:l}=we("message"),{currentZIndex:u,nextZIndex:f}=l,g=S(),v=S(!1),C=S(0);let k;const Q=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&R[r]}}),z=d(()=>e.icon||R[e.type]||""),se=d(()=>Ie(e.id)),I=d(()=>De(e.id,e.offset)+se.value),ne=d(()=>C.value+I.value),te=d(()=>({top:`${I.value}px`,zIndex:u.value}));function E(){e.duration!==0&&({stop:k}=ye(()=>{b()},e.duration))}function D(){k==null||k()}function b(){v.value=!1}function oe({code:r}){r===Ne.esc&&b()}return re(()=>{E(),f(),v.value=!0}),le(()=>e.repeatNum,()=>{D(),E()}),pe(document,"keydown",oe),me(g,()=>{C.value=g.value.getBoundingClientRect().height}),n({visible:v,bottom:ne,close:b}),(r,L)=>(p(),h(q,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:L[0]||(L[0]=Ze=>r.$emit("destroy")),persisted:""},{default:w(()=>[A(M("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:ie(t(te)),role:"alert",onMouseenter:D,onMouseleave:E},[r.repeatNum>1?(p(),h(t(_e),{key:0,value:r.repeatNum,type:t(Q),class:m(t(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(z)?(p(),h(t(H),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:w(()=>[(p(),h(ue(t(z))))]),_:1},8,["class"])):T("v-if",!0),U(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),B(ce,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,Oe)],2112)):(p(),B("p",{key:0,class:m(t(a).e("content"))},Z(r.message),3))]),r.showClose?(p(),h(t(H),{key:2,class:m(t(a).e("closeBtn")),onClick:de(b,["stop"])},{default:w(()=>[x(t(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,Le),[[j,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=X(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Re=1;const K=s=>{const n=!s||P(s)||G(s)||$(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(P(e.appendTo)){let o=document.querySelector(e.appendTo);ve(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ue=({appendTo:s,...n},e)=>{const o=`message_${Re++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),Ve(C)},onDestroy:()=>{O(null,l)}},f=x(Pe,u,$(u.message)||G(u.message)?{default:$(u.message)?u.message:()=>u.message}:null);f.appContext=e||y._context,O(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},y=(s={},n)=>{if(!Y)return{close:()=>{}};if(_(V.max)&&c.length>=V.max)return{close:()=>{}};const e=K(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ue(e,n);return c.push(o),o.handler};J.forEach(s=>{y[s]=(n={},e)=>{const o=K(n);return y({...o,type:s},e)}});function Ae(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=Ae;y._context=null;const Ke=Ce(y,"$message");export{Ke as E};
