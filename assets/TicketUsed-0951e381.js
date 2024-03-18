import{y as O,z as $,x as z,ad as G,A as L,o as P,a2 as q,a4 as H,B as I,S as J,D as d,H as f,v as e,F as t,J as y,X,a6 as Y,L as l,U as Q,O as W,G as u,T,P as c,I as w,ac as b,Y as V,$ as Z,a0 as ee}from"./index-da7f7eb4.js";import{u as te,a as se,V as ae}from"./vee-validate.esm-22b359d1.js";import{B as C}from"./BlankLine-5662eb50.js";import{_ as A}from"./InfoAll-75444bee.js";import{T as r}from"./TicketUseState-e7a697a0.js";import{u as le}from"./mitt-43e253ae.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ne}from"./VContainer-b965c37c.js";import{V as i}from"./VRow-43dae47c.js";import{V as a}from"./VCol-ee419190.js";import"./VDivider-34b8293d.js";const ce=_=>(Z("data-v-eb8cc8ac"),_=_(),ee(),_),ue=ce(()=>T("span",{style:{color:"#25ECE0"},class:"font-weight-bold"},"登記票券",-1)),re={style:{color:"#aaa"}},ie={style:{color:"#aaa"}},de={__name:"TicketUsed",setup(_){O();const R=$(),N=z(),{apiAuth:U}=X(),p=G("routeEvent"),h=le(),{xs:D}=L();P(()=>D.value);const M=q({ticketId:H().required("票券編號必填")}),{handleSubmit:B,isSubmitting:K}=te({validationSchema:M}),m=se("ticketId"),j=B(async v=>{var n,s;try{const g=(await U.patch("/events/"+R.params.id+"/useTicket",{ticketId:v.ticketId,used:r.USED})).data.USER_NAME;await U.patch("/users/usedTicket",{USER_NAME:g,TICKET_CART:{TICKET:v.ticketId,USED:r.USED}}),await N.getProfile(),h.emit("updateEvent"),h.on("updateEventOk",async()=>{E.value=!0,m.value.value=""})}catch(o){console.log(o);const g=((s=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";k.value=g,S.value=!0}}),E=I(!1),F=I("登記成功！"),S=I(!1),k=I(""),x=()=>{S.value=!1,E.value=!1};return J(async()=>{}),(v,n)=>(d(),f(y,null,[e(ne,null,{default:t(()=>[e(i,null,{default:t(()=>[e(C,{style:{"margin-top":"1rem"}}),e(a,{cols:"12"},{default:t(()=>[ue]),_:1}),e(a,{cols:"12",style:{"padding-top":"0","padding-bottom":"0"}},{default:t(()=>[e(ae,{onSubmit:Y(l(j),["prevent"]),disabled:l(K)},{default:t(()=>[e(i,{class:"d-flex justify-center"},{default:t(()=>[e(a,{cols:"9"},{default:t(()=>[e(Q,{modelValue:l(m).value.value,"onUpdate:modelValue":n[0]||(n[0]=s=>l(m).value.value=s),"error-messages":l(m).errorMessage.value,label:"輸入票券編號",type:"text",counter:"",color:"#25ECE0",variant:"outlined"},null,8,["modelValue","error-messages"])]),_:1}),e(a,{cols:"3",style:{"margin-top":"5px"}},{default:t(()=>[e(W,{type:"submit",block:"",class:"rounded-lg",style:{"background-color":"#1BBCA9","font-weight":"900",height:"45px"}},{default:t(()=>[u(" 確定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1}),e(C),e(a,{cols:"12",style:{color:"#25ECE0"},class:"font-weight-bold"},{default:t(()=>[u(" 未入場名單 "),T("span",re,"( 共 "+c(l(p).TICKET.filter(s=>s.USED===l(r).N_USE).length)+" 人 )",1)]),_:1}),e(a,{cols:"12"},{default:t(()=>[(d(!0),f(y,null,w(l(p).TICKET.filter(s=>s.USED===l(r).N_USE),(s,o)=>(d(),f("div",{key:o},[e(i,null,{default:t(()=>[e(a,{cols:"1"},{default:t(()=>[u(c(o+1)+".",1)]),_:2},1024),e(a,{cols:"1",class:"d-flex justify-center align-center me-3",style:{height:"55px"}},{default:t(()=>[e(b,{size:"35"},{default:t(()=>[e(V,{src:s.USER.IMAGE,cover:""},null,8,["src"])]),_:2},1024)]),_:2},1024),e(a,{cols:"9",class:"d-flex justify-center align-center"},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{cols:"12",style:{padding:"0",margin:"0"}},{default:t(()=>[u(c(s.USER.NICK_NAME)+" ("+c(s.USER.USER_NAME)+")",1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))]),_:1}),e(a,{cols:"12",style:{color:"#25ECE0"},class:"font-weight-bold"},{default:t(()=>[u(" 已入場名單 "),T("span",ie,"( 共 "+c(l(p).TICKET.filter(s=>s.USED===l(r).USED).length)+" 人 )",1)]),_:1}),e(a,{cols:"12"},{default:t(()=>[(d(!0),f(y,null,w(l(p).TICKET.filter(s=>s.USED===l(r).USED),(s,o)=>(d(),f("div",{key:o},[e(i,null,{default:t(()=>[e(a,{cols:"1"},{default:t(()=>[u(c(o+1)+".",1)]),_:2},1024),e(a,{cols:"1",class:"d-flex justify-center align-center me-3",style:{height:"55px"}},{default:t(()=>[e(b,{size:"35"},{default:t(()=>[e(V,{src:s.USER.IMAGE},null,8,["src"])]),_:2},1024)]),_:2},1024),e(a,{cols:"9",class:"d-flex justify-center align-center"},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{cols:"12",style:{padding:"0",margin:"0"}},{default:t(()=>[u(c(s.USER.NICK_NAME)+" ("+c(s.USER.USER_NAME)+")",1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))]),_:1})]),_:1})]),_:1}),e(A,{InfoSwitch:E.value,InfoText:F.value,closeInfo:x,"onUpdate::InfoSwitch":n[1]||(n[1]=s=>E.value=s)},null,8,["InfoSwitch","InfoText"]),e(A,{InfoSwitch:S.value,InfoText:k.value,closeInfo:x,"onUpdate:InfoSwitch":n[2]||(n[2]=s=>S.value=s)},null,8,["InfoSwitch","InfoText"])],64))}},Ue=oe(de,[["__scopeId","data-v-eb8cc8ac"]]);export{Ue as default};