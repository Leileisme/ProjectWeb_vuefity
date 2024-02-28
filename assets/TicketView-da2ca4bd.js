import{A as N,o as c,D as n,E as f,F as t,v as e,G as s,P as x,K as _,y as L,x as $,B as b,_ as J,ac as Z,Y as q,T as O,M as z,N as h,Z as Q,z as ee,H as E,J as g,L as i,I as A}from"./index-0eb08b0e.js";import{_ as te}from"./TicketAppBar-66b21749.js";import{_ as ae}from"./InfoAll-b29c81e9.js";import{V as p}from"./VRow-6e68ae2b.js";import{V as l}from"./VCol-9bab3b3b.js";import{T}from"./TicketUseState-e7a697a0.js";import{V as j}from"./VDivider-37310a29.js";import{V as S}from"./VContainer-1434162f.js";import{V as le,a as K}from"./VTabs-724fe4da.js";import{V as oe,a as R}from"./VWindowItem-7e037b4e.js";import"./VAppBarTitle-9c2d4363.js";import"./ssrBoot-1906c851.js";import"./VSlideGroup-c91acd9e.js";const B={__name:"TicketDate",props:{item:{type:Object},isStart:{type:Boolean},isEnd:{type:Boolean}},setup(o){const{xs:r,sm:D}=N(),C=c(()=>r.value),d=c(()=>D.value),y=v=>{const u=v.split(" "),a=u[0].split("/"),V=u[1].split(" "),m=u[2].split(" "),k=a[0],P=a[1].padStart(2,"0")+"."+a[2].padStart(2,"0"),F=V[0].slice(0,2)+":"+V[0].slice(2),M=m[0].slice(0,2)+":"+m[0].slice(2),W=w=>w.replace(/\//g,"-"),G=w=>{const Y=new Date(w);return["日","一","二","三","四","五","六"][Y.getDay()]},H=W(u[0]),X=G(H);return{year:k,monthDay:P,week:X,startTime:F,endTime:M}},I=c(()=>C.value?5:d.value?4:3);return(v,u)=>(n(),f(l,{cols:I.value,style:{}},{default:t(()=>[e(p,{style:{"background-color":""}},{default:t(()=>[e(l,{cols:"12",style:{padding:"0","padding-left":"12px","font-size":"0.8rem",color:"#aaa"}},{default:t(()=>[s(x(y(o.item.EVENT.DATE).year),1)]),_:1}),e(l,{cols:"8",style:{"background-color":"","font-size":"1.55rem","padding-right":"0","padding-top":"0px"}},{default:t(()=>[s(x(y(o.item.EVENT.DATE).monthDay),1)]),_:1}),e(l,{cols:"4",class:"d-flex align-center",style:{"padding-top":"0px","padding-bottom":"0"}},{default:t(()=>[e(p,{style:{color:"#aaa","margin-top":"-20px"}},{default:t(()=>[o.isStart?(n(),f(l,{key:0,cols:"12",style:{padding:"0","font-size":"0.7rem"}},{default:t(()=>[s(x(y(o.item.EVENT.DATE).week),1)]),_:1})):_("",!0),o.isEnd?(n(),f(l,{key:1,cols:"12",style:{padding:"0","font-size":"0.85rem","margin-top":"-3px"}},{default:t(()=>[s(x(y(o.item.EVENT.DATE).endTime),1)]),_:1})):_("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"]))}},se=O("span",{class:"me-3"},"票券編號　/ ",-1),ne={style:{border:"0px solid #1BBCA9","padding-right":"4px","padding-left":"0.5px","padding-bottom":"0px","font-size":"0.9rem",color:"#1BBCA9"}},U={__name:"IsTicket",props:{item:Object},setup(o){L(),$();const{xs:r,sm:D}=N(),C=c(()=>r.value);c(()=>D.value);const d=b(!1),y=b("使用票券"),I=()=>{d.value=!1},v=V=>{V.USED===T.USED||V.USED===T.CANCEL?d.value=!1:d.value=!0},u=c(()=>C.value?"0.5rem":"2rem"),a=c(()=>C.value?40:50);return(V,m)=>(n(),f(Q,{width:"100%",class:"rounded-lg mt-1"},{default:t(()=>[e(J,{style:{"padding-right":"0"}},{default:t(()=>[e(p,null,{default:t(()=>[e(l,{cols:"9",style:{position:"relative"}},{default:t(()=>[e(p,null,{default:t(()=>[e(l,{cols:"2",class:"d-flex",style:{"max-height":"60px"}},{default:t(()=>[e(Z,{size:a.value,style:{cursor:"pointer"}},{default:t(()=>[e(q,{src:o.item.EVENT.HOST.IMAGE,cover:""},null,8,["src"])]),_:1},8,["size"])]),_:1}),e(l,{cols:"10",style:{"font-size":"0.9rem",color:"#aaa","padding-right":"0","padding-left":"0","padding-bottom":"5px"}},{default:t(()=>[e(l,{cols:"12",style:{"padding-top":"0","padding-bottom":"0"},class:"d-flex align-center"},{default:t(()=>[se,O("span",ne,[e(z,{style:{"font-size":"0.8rem","margin-top":"-2px"}},{default:t(()=>[s("mdi-map-marker")]),_:1}),s(" "+x(o.item.EVENT.CITY),1)])]),_:1}),e(l,{cols:"12",style:{"padding-top":"7px","padding-bottom":"0"}},{default:t(()=>[s(x(o.item.TICKET),1)]),_:1})]),_:1}),e(l,{cols:"12",style:{"font-size":"1.3rem","font-weight":"900","padding-top":"12px"},class:"d-flex align-center"},{default:t(()=>[s(x(o.item.EVENT.TITLE),1)]),_:1}),e(l,{cols:"12",style:{"padding-top":"12px"}},{default:t(()=>[e(p,null,{default:t(()=>[e(B,{item:o.item,isStart:""},null,8,["item"]),e(l,{cols:"2",class:"d-flex align-center",style:{"padding-top":"18px"}},{default:t(()=>[e(j,{color:"#aaa",thickness:"2px",style:{opacity:"1"}})]),_:1}),e(B,{item:o.item,isEnd:""},null,8,["item"])]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"2",style:{"border-left":"2px dashed #999","margin-left":"5px",padding:"0"},class:"d-flex align-center"},{default:t(()=>[e(p,{style:h([{color:"#aaa"},{"margin-left":u.value}])},{default:t(()=>[e(l,{cols:"12",style:{"padding-bottom":"5px","font-size":"1.2rem","padding-top":"10px"},class:"d-flex justify-center"},{default:t(()=>[e(z,{onClick:m[0]||(m[0]=k=>v(o.item))},{default:t(()=>[s("mdi-eye")]),_:1})]),_:1}),e(l,{cols:"12",style:{"padding-top":"0","font-size":"0.8rem"},class:"d-flex justify-center",onClick:m[1]||(m[1]=k=>v(o.item))},{default:t(()=>[s("查看")]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),e(ae,{InfoSwitch:d.value,InfoText:o.item.TICKET,InfoTitle:y.value,closeInfo:I,"onUpdate:InfoSwitch":m[2]||(m[2]=k=>d.value=k)},null,8,["InfoSwitch","InfoText","InfoTitle"])]),_:1}))}},Ce={__name:"TicketView",setup(o){L(),ee();const r=$(),{xs:D,sm:C}=N();c(()=>D.value),c(()=>C.value),b(!1),b("使用票券");const d=b("one"),y=c(()=>d.value==="one"?"color:#25ECE0; border:1.8px #25ECE0 solid;":"color:#fff; border:1.8px rgba(204,204,204,0.5) solid;"),I=c(()=>d.value==="two"?"color:#25ECE0; border:1.8px #25ECE0 solid;":"color:#fff; border:1.8px rgba(204,204,204,0.5) solid;");return(v,u)=>(n(),E(g,null,[e(te),e(S,{style:{"margin-top":"1rem","max-width":"800px"}},{default:t(()=>[e(p,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(le,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=a=>d.value=a),"align-tabs":"start"},{default:t(()=>[e(K,{value:"one",class:"rounded-ts-xl me-2",style:h([{"min-width":"80px"},y.value])},{default:t(()=>[s("報名完成")]),_:1},8,["style"]),e(K,{value:"two",class:"rounded-ts-xl me-2",style:h([{"min-width":"80px"},I.value])},{default:t(()=>[s("已取消")]),_:1},8,["style"])]),_:1},8,["modelValue"]),e(j,{color:"#fff",class:"border-opacity-50"})]),_:1}),e(oe,{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=a=>d.value=a),style:{width:"100%"}},{default:t(()=>[e(R,{value:"one"},{default:t(()=>[e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[!i(r).TICKET_CART.some(a=>a.USED!==i(T).N_USE)&!i(r).TICKET_CART.some(a=>a.USED!==i(T).USED)?(n(),f(l,{key:0,style:{color:"#aaa"}},{default:t(()=>[s("目前沒有任何票券")]),_:1})):_("",!0),i(r).TICKET_CART.some(a=>a.USED===i(T).N_USE)?(n(),E(g,{key:1},[e(S,{style:{"padding-bottom":"0"}},{default:t(()=>[s("未使用票券")]),_:1}),(n(!0),E(g,null,A(i(r).TICKET_CART.filter(a=>a.USED===0),a=>(n(),f(l,{cols:"12",key:a._id},{default:t(()=>[e(U,{item:a},null,8,["item"])]),_:2},1024))),128))],64)):_("",!0),i(r).TICKET_CART.some(a=>a.USED===i(T).USED)?(n(),E(g,{key:2},[e(S,{style:{"padding-bottom":"0","margin-top":"1rem",opacity:"0.6"}},{default:t(()=>[s("已使用票券")]),_:1}),(n(!0),E(g,null,A(i(r).TICKET_CART.filter(a=>a.USED===1),a=>(n(),f(l,{cols:"12",key:a._id,style:{opacity:"0.6"}},{default:t(()=>[e(U,{item:a},null,8,["item"])]),_:2},1024))),128))],64)):_("",!0)]),_:1})]),_:1})]),_:1}),e(R,{value:"two"},{default:t(()=>[e(S,null,{default:t(()=>[e(p,null,{default:t(()=>[i(r).TICKET_CART.some(a=>a.USED!==i(T).CANCEL)?_("",!0):(n(),f(l,{key:0,style:{color:"#aaa"}},{default:t(()=>[s("目前沒有任何票券")]),_:1})),i(r).TICKET_CART.some(a=>a.USED===i(T).CANCEL)?(n(),E(g,{key:1},[e(S,{style:{"padding-bottom":"0","margin-top":"1rem",opacity:"0.6"}},{default:t(()=>[s("已使用票券")]),_:1}),(n(!0),E(g,null,A(i(r).TICKET_CART.filter(a=>a.USED===1),a=>(n(),f(l,{cols:"12",key:a._id,style:{opacity:"0.6"}},{default:t(()=>[e(U,{item:a},null,8,["item"])]),_:2},1024))),128))],64)):_("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}};export{Ce as default};