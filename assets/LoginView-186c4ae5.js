import{y as T,R as H,x as U,A as $,o as f,B as j,T as q,W as _,D as v,H as b,E as O,F as t,K as w,Y as a,O as V,v as e,J as W,Z as z,G as g,N as G,L as o,_ as y,P as k,a0 as J,a1 as K}from"./index-b2b635a8.js";import{u as X,a as B,V as Y}from"./vee-validate.esm-f268b922.js";import{v as Z}from"./index-a9f2eadd.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ee,a as te}from"./VAppBarTitle-24bb658d.js";import{V as S}from"./VContainer-2abc6ac8.js";import{V as se}from"./VRow-52b84734.js";import{V as i}from"./VCol-c740c829.js";import"./ssrBoot-cf84261e.js";const h=u=>(J("data-v-9fdff098"),u=u(),K(),u),ae={key:0,style:{height:"65px",width:"100%","box-shadow":"0 1px 5px #000"},class:"d-flex justify-center align-center"},oe=h(()=>a("div",{class:"text-h5 font-weight-black"},"登入",-1)),le=[oe],re=h(()=>a("div",{class:"mb-1 mt-3"},[a("div",{class:"text-center font-weight-bold text-h3"},"LogoHere"),a("div",{class:"text-center mt-5"},[a("p",null,"馬上登入觀看社群最新活動")])],-1)),ne=h(()=>a("span",null,"忘記密碼?",-1)),ie={__name:"LoginView",setup(u){const{api:C}=z(),E=T(),x=H(),A=U(),{xs:F}=$(),d=f(()=>F.value),c=j(!1),I=f(()=>d.value?"border: none; ":"border: 1px solid #333; box-shadow: 0 1px 10px #363636;"),L=f(()=>d.value?"height:auto":"height: 100vh; align-items: center;"),N=q({email:_().required("信箱必填").max(40,"信箱長度不符").test("isEmail","信箱格式錯誤",n=>Z.isEmail(n)),password:_().required("密碼必填").min(6,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:D,isSubmitting:M}=X({validationSchema:N}),m=B("email"),p=B("password"),P=D(async n=>{var s,l;try{const{data:r}=await C.post("/users/login",{EMAIL:n.email,PASSWORD:n.password});A.login(r.result),x({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),E.push("/")}catch(r){console.log(r);const R=((l=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:l.message)||"發生錯誤，請稍後再試";x({text:R,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(n,s)=>(v(),b(W,null,[d.value?(v(),O(ee,{key:0},{default:t(()=>[e(S,{class:"d-flex align-center text-center"},{default:t(()=>[e(te,{class:"font-weight-black text-h5"},{default:t(()=>[g("登入")]),_:1})]),_:1})]),_:1})):w("",!0),a("div",{style:V(L.value),class:"boxHeigh"},[a("div",{style:V([{width:"400px"},I.value]),class:"pb-8"},[d.value?w("",!0):(v(),b("div",ae,le)),e(S,null,{default:t(()=>[re,a("div",null,[e(Y,{onSubmit:G(o(P),["prevent"]),disabled:o(M)},{default:t(()=>[e(se,{class:"d-flex justify-center w-100 mx-auto"},{default:t(()=>[e(i,{cols:"12"}),e(i,{cols:"12"},{default:t(()=>[e(y,{modelValue:o(m).value.value,"onUpdate:modelValue":s[0]||(s[0]=l=>o(m).value.value=l),"error-messages":o(m).errorMessage.value,label:"信箱",type:"email",maxlength:"40",counter:"",color:"#25ECE0",variant:"outlined"},null,8,["modelValue","error-messages"])]),_:1}),e(i,null,{default:t(()=>[e(y,{modelValue:o(p).value.value,"onUpdate:modelValue":s[1]||(s[1]=l=>o(p).value.value=l),"error-messages":o(p).errorMessage.value,minlength:"6",maxlength:"20",counter:"",label:"密碼",variant:"outlined",color:"#25ECE0","append-inner-icon":c.value?"mdi-eye":"mdi-eye-off",type:c.value?"text":"password","onClick:appendInner":s[2]||(s[2]=l=>c.value=!c.value)},null,8,["modelValue","error-messages","append-inner-icon","type"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(k,{type:"submit",block:"",class:"rounded-lg",style:{"background-color":"#1BBCA9","font-weight":"900",height:"60px"}},{default:t(()=>[g(" 登入 ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[ne,e(k,{type:"button",class:"rounded-lg mx-8",style:{"background-color":"#4F75D9","font-weight":"900",height:"42px",width:"25%"},to:"./register"},{default:t(()=>[g(" 註冊 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])])]),_:1})],4)],4)],64))}},xe=Q(ie,[["__scopeId","data-v-9fdff098"]]);export{xe as default};