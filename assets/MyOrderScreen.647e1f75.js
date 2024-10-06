import{u as g,r as k,o as w,n as a,p as r,f as t,s as o,q as e,Q as h,F as d,a6 as _,a4 as n,v as b,aa as C,a9 as Q,a5 as m}from"./index.4b170bd6.js";import{Q as S,a as x}from"./QCard.4e7af3a7.js";import{Q as u}from"./QSkeleton.82f36181.js";import{Q as N}from"./QImg.b9bfcb0b.js";import{S as O}from"./formatting.897fab98.js";import{N as B}from"./NoData.876d7a8e.js";import{u as D}from"./authStore.72342b7c.js";import{u as V}from"./cart-store.38711521.js";import"./use-dark.005e8194.js";import"./axios.boot.e43e317f.js";const M={class:"wrapper-my-profile"},T={class:"row items-center"},F=e("div",{class:"text-h5 q-ml-md"},"My Order",-1),L={class:"q-pl-sm full-width"},$={class:"text-weight-medium text-h6 q-mb-xs"},z={key:0,class:"q-mt-lg text-center"},A=e("p",{class:"text-center text-h5 q-py-md"},"You order list is empty",-1),E=["onClick"],H={class:"q-pl-sm"},I=e("div",{class:"tt-spacer"},null,-1),R={class:"text-h5 text-weight-bold text-primary"},ae={__name:"MyOrderScreen",setup(Y){const i=g();D();const l=V(),c=k(!0),f=()=>{i.back()},y=()=>{i.push({name:"home"})},v=async()=>{try{c.value=!0,await l.getOrders()}finally{c.value=!1}},q=p=>{i.push({name:"my-orders-detail",params:{id:p}})};return w(()=>{v()}),(p,j)=>(a(),r("div",M,[t(S,{class:"bg-grey-3"},{default:o(()=>[t(x,{class:"row items-center header-action-bar q-px-xs"},{default:o(()=>[e("div",T,[t(h,{round:"",unelevated:"",icon:"arrow_back",onClick:f}),F])]),_:1}),t(x,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:o(()=>[c.value?(a(),r(d,{key:0},_(5,s=>e("div",{class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex no-wrap items-center bg-white",key:s},[e("div",null,[t(u,{height:"50px",width:"50px",square:""})]),e("div",L,[e("div",$,[t(u,{height:"30px",square:""})]),e("div",null,[t(u)])])])),64)):(a(),r(d,{key:1},[n(l).orders.length==0?(a(),r("div",z,[t(B),A,t(h,{onClick:y,class:"q-px-xl",outline:"",color:"primary","no-caps":"",unelevated:"",rounded:""},{default:o(()=>[b(" Order Now ")]),_:1})])):C("",!0),(a(!0),r(d,null,_(n(l).orders,s=>(a(),r("div",{class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white",key:s.id,onClick:G=>q(s.id)},[e("div",null,[t(N,{class:"rounded-borders",style:{width:"60px"},src:s.items[0].image},null,8,["src"])]),e("div",H,[e("div",{class:Q(["text-weight-medium text-h6 q-mb-xs",`text-${n(O)(s.status)}`])}," Order "+m(s.status),3),e("div",null,"Date "+m(s.created_at_formated),1)]),I,e("div",R," \u20B9 "+m(s.total_price),1)],8,E))),128))],64))]),_:1})]),_:1})]))}};export{ae as default};
