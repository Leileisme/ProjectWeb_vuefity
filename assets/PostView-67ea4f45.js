import{A as b,o as m,y as D,Q as M,B as u,R as T,S as F,D as c,E as C,F as s,v as t,U as L,W as R,H as f,I as H,J as O,X as K,Z as z,L as P,_ as Y,ac as $,Y as X,T as d,P as i,K as j}from"./index-184141ce.js";import{V as G}from"./VContainer-2e973843.js";import{V as o}from"./VCol-5b4ee2b8.js";import{V as J}from"./VSelect-9f841541.js";import{V as y}from"./VRow-9f7ad9d9.js";import"./VList-910e3020.js";import"./VListItem-f1e1de59.js";import"./ssrBoot-c0e0a555.js";import"./VDivider-549fee90.js";import"./VMenu-792513ad.js";import"./VSlideGroup-1b6d7cf4.js";const Q={class:"me-2",style:{"font-size":"1.2rem"}},W={key:0,class:"me-2"},Z={style:{color:"#aaa"}},q={style:{border:"1px solid #25ECE0",padding:"3px 10px",color:"#FF6868"}},ee={style:{"margin-right":"10px","font-weight":"900",color:"#25ECE0"}},te={style:{color:"#aaa"}},se={key:1,style:{color:"#25ECE0"}},ye={__name:"PostView",setup(ae){const{xs:E}=b(),V=m(()=>E.value),{apiAuth:h}=K(),A=D(),x=M(),n=u(),k=u(""),r=u(),w=["臺北市","新北市","桃園市","臺中市","臺南市","高雄市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣","基隆市","新竹市","嘉義市"],_=u(5),I=()=>{_.value+=5};m(()=>S.value.slice().sort((l,a)=>{const e=l.DATE.split(" ")[0],p=a.DATE.split(" ")[0];return new Date(e)-new Date(p)}));const N=m(()=>[...g.value].sort(()=>Math.random()-.5)),v=m(()=>N.value.filter(l=>{let a=!0;n.value&&(a=l.USER_NAME.includes(n.value)||l.NICK_NAME.includes(n.value));let e=!0;return r.value&&(e=l.SCHOOL_CITY===r.value),a&&e}));T([n,r],()=>{_.value=5});const S=u([]),U=m(()=>V.value?4:2),g=u([]),B=async()=>{var l,a;try{const{data:e}=await h.get("/users/getUser",{params:{role:"1,2,3"}});g.value=e.result.data}catch(e){console.log(e);const p=((a=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";x({text:p,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return F(async()=>{B()}),(l,a)=>(c(),C(G,{style:{"max-width":"800px"},class:"d-flex justify-center"},{default:s(()=>[t(y,null,{default:s(()=>[t(o,{cols:"8"},{default:s(()=>[t(L,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),label:"使用者名稱","prepend-inner-icon":"mdi-magnify","single-line":"",variant:"outlined","hide-details":"",density:"compact",onInput:k.value},null,8,["modelValue","onInput"])]),_:1}),t(o,{cols:"4",style:{"padding-left":"0"}},{default:s(()=>[t(J,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),items:w,density:"compact",color:"#25ECE0",label:"地區",variant:"outlined",onKeydown:a[2]||(a[2]=R(e=>r.value=null,["delete"]))},null,8,["modelValue"])]),_:1}),(c(!0),f(O,null,H(v.value.slice(0,_.value),(e,p)=>(c(),C(o,{cols:"12",key:p},{default:s(()=>[t(z,{class:"rounded-lg",onClick:le=>P(A).push(`/${e.USER_NAME}`)},{default:s(()=>[t(Y,{style:{"padding-left":"0","padding-top":"0","padding-bottom":"0"}},{default:s(()=>[t(y,{style:{margin:"0"}},{default:s(()=>[t(o,{cols:U.value,class:"text-center"},{default:s(()=>[t($,{size:"90"},{default:s(()=>[t(X,{src:e.IMAGE,cover:""},null,8,["src"])]),_:2},1024)]),_:2},1032,["cols"]),t(o,{cols:"8"},{default:s(()=>[t(y,null,{default:s(()=>[t(o,{cols:"12"},{default:s(()=>[d("span",Q,i(e.NICK_NAME),1),e.CLUB_TH?(c(),f("span",W,"第 "+i(e.CLUB_TH)+" 屆",1)):j("",!0),d("span",Z,"( "+i(e.USER_NAME)+" )",1)]),_:2},1024),t(o,{cols:"12",style:{"font-size":"0.9rem","padding-top":"0"}},{default:s(()=>[d("span",q,[d("span",ee,i(e.SCHOOL_NAME),1),d("span",null,i(e.SCHOOL_CITY),1)])]),_:2},1024),t(o,{cols:"12",style:{"padding-top":"0"}},{default:s(()=>[d("span",te,i(e.DESCRIBE),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128)),t(o,{cols:"12",style:{color:"#FF3333","text-align":"right","padding-top":"10px","font-size":"1.2rem"}},{default:s(()=>[v.value.length>_.value?(c(),f("span",{key:0,class:"pe-2",style:{cursor:"pointer"},onClick:I},"and more")):(c(),f("span",se,"已經到底了（;≧皿≦）"))]),_:1})]),_:1})]),_:1}))}};export{ye as default};
