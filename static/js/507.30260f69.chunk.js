"use strict";(self.webpackChunkmoneyguard_project=self.webpackChunkmoneyguard_project||[]).push([[507],{5834:function(n,t,e){e.d(t,{W:function(){return p}});var r,a=e(168),o=e(6487),i="280px",d="1280px",l={tablet:"(min-width: ".concat("768px",")"),desktop:"(min-width: ".concat(d,")")},c=o.default.div(r||(r=(0,a.Z)(["\n  min-width: ",";\n  margin: 0 auto;\n  padding: ",";\n  position: relative;\n\n  @media screen and "," {\n    padding-top: 20px;\n  }\n\n  @media screen and "," {\n    width: ",";\n    padding: ",";\n  }\n"])),i,(function(n){return"main"===n.size&&"32px 0"}),l.tablet,l.desktop,(function(n){return"statistics"===n.size&&"800px"}),(function(n){var t=n.size;return"main"===t?"46px 0 0 70px":"statistics"===t&&"32px 0 0 54px"})),s=e(184),p=function(n){var t=n.children,e=n.size;return(0,s.jsx)(c,{size:e,children:t})}},6507:function(n,t,e){e.r(t),e.d(t,{default:function(){return Ln}});var r,a=e(5834),o=e(9439),i=e(2791),d=e(8820),l=e(9434),c=e(3281),s=e(4805),p=["title","titleId"];function x(){return x=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},x.apply(this,arguments)}function u(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function f(n,t){var e=n.title,a=n.titleId,o=u(n,p);return i.createElement("svg",x({viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),e?i.createElement("title",{id:a},e):null,r||(r=i.createElement("path",{d:"M10.5 6.333 8.167 4m-6.709 9.042 1.975-.22c.24-.026.361-.04.474-.076.1-.033.195-.078.283-.136.099-.066.185-.151.356-.323l7.704-7.704A1.65 1.65 0 0 0 9.917 2.25L2.213 9.954c-.172.171-.257.257-.323.356a1.166 1.166 0 0 0-.136.283c-.036.113-.05.233-.076.475l-.22 1.974Z",stroke:"#fff",strokeOpacity:.6,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"})))}var h,b,m,g,v,y,j,w,k,Z,C,E,z,O,P,D,N,S=i.forwardRef(f),I=(e.p,e(168)),M=e(6487),F=M.default.ul(h||(h=(0,I.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  li {\n    position: relative;\n    padding: 0 20px 0 15px;\n    background-color: var(--btn-gradient-color);\n    border-radius: 10px;\n    // border-left: 5px solid var(--dashboard-text);\n    color: var(--white);\n  }\n  li > div {\n    display: flex;\n    justify-content: space-between;\n    padding-block: 12px;\n  }\n  li > div:not(:last-child) {\n    border-bottom: 1px solid var(--transparency-20);\n  }\n\n  .transaction-head {\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .transaction-desc {\n    text-align: right;\n    font-size: 16px;\n  }\n  .delete-button {\n    padding: 4px 12px;\n    border-radius: 18px;\n    background: var(--btn-gradient-color);\n    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n    border: none;\n    color: var(--white-color);\n    text-align: center;\n    font-size: 14px;\n    line-height: normal;\n  }\n  .edit-button {\n    padding: 4px 12px;\n    background: transparent;\n    border: none;\n    text-align: center;\n    color: var(--transparency-60);\n    font-size: 16px;\n    line-height: normal;\n    letter-spacing: 0.32px;\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]))),T=e(184),U=function(n){var t=n.transactions,e=n.defineCategory,r=n.handleDelete,a=n.openUpdating;return(0,T.jsx)(F,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,T.jsxs)("li",{style:{borderLeft:"5px solid ".concat("063f1132-ba5d-42b4-951d-44011ca46262"===n.categoryId?"var(--yellow)":"var(--dashboard-text)")},children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:"transaction-head",children:"Date"}),(0,T.jsx)("p",{className:"transaction-desc",children:n.transactionDate})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:"transaction-head",children:"Type"}),(0,T.jsx)("p",{className:"transaction-desc",children:"EXPENSE"===n.type?"-":"+"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:"transaction-head",children:"Category"}),(0,T.jsx)("p",{className:"transaction-desc",children:e(n.categoryId)})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:"transaction-head",children:"Comment"}),(0,T.jsx)("p",{className:"transaction-desc",children:n.comment})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("p",{className:"transaction-head",children:"Sum"}),(0,T.jsx)("p",{className:"transaction-desc",children:n.amount})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("button",{className:"delete-button",onClick:function(){return r(n.id)},children:"Delete"}),(0,T.jsxs)("button",{className:"edit-button",onClick:function(){return a(n)},children:[(0,T.jsx)(S,{width:14,height:14}),"Edit"]})]})]},n.id)}))})},V=M.default.table(b||(b=(0,I.Z)(["\n  width: 100%;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  color: var(--white);\n  thead {\n    width: 100%;\n\n    backdrop-filter: blur(50px);\n    border-radius: 8px;\n    tr {\n      width: 704px;\n    }\n    tr > th:first-child {\n      border-top-left-radius: 8px;\n      border-bottom-left-radius: 8px;\n      padding-left: 20px;\n    }\n    tr > th:nth-child(2) {\n      text-align: center;\n    }\n    tr > th:last-child {\n      border-top-right-radius: 8px;\n      border-bottom-right-radius: 8px;\n    }\n    th {\n      background: var(--background-table);\n      padding-block: 16px;\n      text-align: left;\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 24px;\n    }\n  }\n  tbody {\n    tr > td {\n      padding-block: 16px;\n      text-align: left;\n      font-size: 14px;\n      line-height: 21px;\n    }\n    tr > td:nth-child(5) {\n      font-weight: 600;\n    }\n    tr > td:nth-child(2),\n    tr > td:first-child {\n      text-align: center;\n    }\n    tr:not(:last-child) {\n      border-bottom: 1px solid var(--transparency-20);\n    }\n    td > div {\n      .delete-button {\n        padding: 4px 12px;\n        border-radius: 18px;\n        background: var(--btn-gradient-color);\n        box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n        border: none;\n        color: var(--white-color);\n        text-align: center;\n        font-size: 14px;\n        line-height: normal;\n      }\n      .edit-button {\n        padding: 4px 12px;\n        background: transparent;\n        border: none;\n        text-align: center;\n        color: var(--transparency-60);\n        font-size: 16px;\n        line-height: normal;\n        letter-spacing: 0.32px;\n      }\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    tbody {\n        tr>td:first-child: text-align: center;\n    }\n  }\n"]))),H=function(n){var t=n.transactions,e=n.defineCategory,r=n.handleDelete,a=n.openUpdating;return(0,T.jsxs)(V,{children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:"Date"}),(0,T.jsx)("th",{children:"Type"}),(0,T.jsx)("th",{children:"Category"}),(0,T.jsx)("th",{children:"Comment"}),(0,T.jsx)("th",{children:"Sum"}),(0,T.jsx)("th",{})]})}),(0,T.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(n){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:n.transactionDate}),(0,T.jsx)("td",{children:"EXPENSE"===n.type?"-":"+"}),(0,T.jsx)("td",{children:e(n.categoryId)}),(0,T.jsx)("td",{children:n.comment}),(0,T.jsx)("td",{children:n.amount}),(0,T.jsx)("td",{children:(0,T.jsxs)("div",{children:[(0,T.jsx)("button",{className:"edit-button",onClick:function(){return a(n)},children:(0,T.jsx)(S,{width:14,height:14})}),(0,T.jsx)("button",{className:"delete-button",onClick:function(){return r(n.id)},children:"Delete"})]})})]},n.id)}))})]})},L=e(6351),B=M.default.div(m||(m=(0,I.Z)(["\n  .transaction-add-button {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    border-radius: 50%;\n    border: none;\n    background: var(--btn-gradient-color);\n    color: var(--white);\n    width: 44px;\n    height: 44px;\n    box-shadow: 1px 9px 15px 0px var(--transparency-20);\n    svg {\n        width: 28px;\n        height: 28px;\n    }\n  }\n"]))),X=e(4165),K=e(5861),q=e(5705),R=M.default.div(g||(g=(0,I.Z)(["\n  min-height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 61.38px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.5s;\n  z-index: 1000;\n  background: var(--transparency-10);\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(50px);\n\n  @media screen and (min-width: 768px) {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n\n    position: absolute;\n    top: -55%;\n    left: 10%;\n\n    width: 540px;\n    min-height: 580px;\n    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n    backdrop-filter: blur(50px);\n    border-radius: 8px;\n\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n\n    position: absolute;\n    top: 0;\n    left: -20%;\n\n    width: 540px;\n    min-height: 580px;\n    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n    backdrop-filter: blur(50px);\n    border-radius: 8px;\n\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n\n  textarea {\n    resize: none;\n    overflow-y: hidden;\n    transition: height 0.2s;\n    background-color: transparent;\n    border: none;\n    color: var(--white);\n    padding-left: 20px;\n    height: 24px;\n  }\n\n  textarea:focus {\n    outline: none;\n  }\n"]))),A=M.default.h3(v||(v=(0,I.Z)(["\n  color: var(--white);\n  text-align: center;\n  font-family: Poppins;\n  font-size: 24px;\n  font-style: 1.5;\n  font-weight: 400;\n  line-height: 36px;\n\n  margin-bottom: 32px;\n"]))),J=M.default.div(y||(y=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n\n  color: var(--white-60, rgba(255, 255, 255, 0.6));\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  margin-bottom: 60px;\n\n  &:focus {\n    color: var(--dashboard-text, #ff868d);\n  }\n"]))),Q=M.default.div(j||(j=(0,I.Z)(["\n  color: var(--white, #fbfbfb);\n  font-family: Poppins;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  border-bottom: 1px solid var(--transparency-60);\n\n  margin-bottom: 40px;\n"]))),W=M.default.div(w||(w=(0,I.Z)(["\n  margin-bottom: 40px;\n  border-bottom: 1px solid var(--transparency-60);\n"]))),_=M.default.input(k||(k=(0,I.Z)(["\n  color: var(--white, #fbfbfb);\n  font-family: Poppins;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.5;\n  padding-left: 20px;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n"]))),$=M.default.div(Z||(Z=(0,I.Z)(["\n  color: var(--white, #fbfbfb);\n  font-family: Poppins;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  border-bottom: 1px solid var(--transparency-60);\n  margin-bottom: 40px;\n\n  textarea {\n    height: auto;\n  }\n"]))),G=M.default.div(C||(C=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Y=M.default.button(E||(E=(0,I.Z)(["\n  width: 300px;\n  padding-block: 13px;\n  font-weight: 400;\n  @media screen and (max-width: 767.9px) {\n    width: 280px;\n  }\n  color: var(--white, #fbfbfb);\n  border: none;\n  border-radius: 20px;\n  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 18px;\n  line-height: normal;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  background: var(--btn-gradient-color);\n\n  margin-bottom: 20px;\n\n  &:hover {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n\n  &:focus {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n"]))),nn=M.default.button(z||(z=(0,I.Z)(["\n  width: 300px;\n  padding-block: 13px;\n  font-weight: 400;\n  @media screen and (max-width: 767.9px) {\n    width: 280px;\n  }\n  color: (--text-button, #623f8b);\n  border: none;\n  border-radius: 20px;\n  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 18px;\n  line-height: normal;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  background: var(--white, #fbfbfb);\n\n  &:hover {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n\n  &:focus {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n"]))),tn=(e(8639),e(9314)),en=e(1951),rn=M.default.div(O||(O=(0,I.Z)(["\n  position: relative;\n  margin-bottom: 40px;\n  border-bottom: 1px solid var(--transparency-60);\n  && {\n    input {\n      position: relative;\n      border: none;\n\n      font-size: 18px;\n      color: var(--white);\n      background-color: transparent;\n      padding-left: 20px;\n      padding-bottom: 4.5px;\n      cursor: pointer;\n\n      &:focus-visible {\n        outline: 0;\n      }\n    }\n\n    &.rdt {\n      position: relative;\n    }\n\n    &.rdtPicker {\n      position: absolute;\n      min-width: 250px;\n      padding: 4px;\n    }\n\n    .rdtPicker td.rdtToday:before {\n      border-bottom: 7px solid var(--picker);\n    }\n\n    @media (max-width: 767.9px) {\n      input {\n        width: 280px;\n      }\n    }\n  }\n"]))),an=M.default.div(P||(P=(0,I.Z)(["\n  position: absolute;\n  width: 22px;\n  top: 0;\n  right: 0;\n  margin-right: 10px;\n\n  fill: var(--icon-violet);\n"]))),on=["title","titleId"];function dn(){return dn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},dn.apply(this,arguments)}function ln(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function cn(n,t){var e=n.title,r=n.titleId,a=ln(n,on);return i.createElement("svg",dn({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,D||(D=i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{d:"M9 11H7v2h2v-2Zm4 0h-2v2h2v-2Zm4 0h-2v2h2v-2Zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V9h14v11Z"}))),N||(N=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{d:"M0 0h24v24H0z"})))))}var sn,pn,xn,un,fn,hn,bn,mn,gn,vn,yn,jn,wn=i.forwardRef(cn),kn=(e.p,e(9513)),Zn=e.n(kn),Cn=function(n){var t=n.name,e=(0,q.U$)(t),r=(0,o.Z)(e,1)[0],a=(0,q.u6)().setFieldValue;return(0,T.jsxs)(rn,{children:[(0,T.jsx)(Zn(),{inputProps:{readOnly:!0},selected:r.value?new Date(r.value):null,closeOnSelect:!0,onChange:function(n){(0,tn.default)(n)&&a(r.name,n,(0,en.default)(n,"yyyy-MM-dd"))},dateFormat:"yyyy-MM-dd"}),(0,T.jsx)(an,{children:(0,T.jsx)(wn,{})})]})},En={"c9d9e447-1b83-4238-8712-edc77b18b739":"Main expenses","27eb4b75-9a42-4991-a802-4aefe21ac3ce":"Products","3caa7ba0-79c0-40b9-ae1f-de1af1f6e386":"Car","bbdd58b8-e804-4ab9-bf4f-695da5ef64f4":"Self care","76cc875a-3b43-4eae-8fdb-f76633821a34":"Child care","128673b5-2f9a-46ae-a428-ec48cf1effa1":"Household products","1272fcc4-d59f-462d-ad33-a85a075e5581":"Education","c143130f-7d1e-4011-90a4-54766d4e308e":"Leisure","719626f1-9d23-4e99-84f5-289024e437a8":"Other expenses","3acd0ecd-5295-4d54-8e7c-d3908f4d0402":"Entertainment","063f1132-ba5d-42b4-951d-44011ca46262":"Income"},zn=function(n){return En[n]},On=e(7810),Pn=function(n){var t=n.selfDestruction,e=n.updatingTransaction,r=(0,l.I0)(),a=function(){var n=(0,K.Z)((0,X.Z)().mark((function n(t){var a;return(0,X.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a={id:e.id,data:{transactionDate:(0,On.s)(new Date(t.date)),type:e.type,categoryId:e.categoryId,comment:t.comment,amount:"INCOME"===e.type?Math.abs(t.amount):-t.amount}},r((0,c.zJ)(a));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,T.jsx)(R,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,T.jsx)(q.J9,{initialValues:{type:"EXPENSE"===e.type,amount:Math.abs(e.amount),date:e.transactionDate,comment:e.comment},onSubmit:function(n,e){var r=e.setSubmitting,o=e.resetForm;a(n),o(),r(!1),t()},enableReinitialize:!0,children:function(n){var r=n.handleSubmit,a=n.values,o=n.setFieldValue,i=n.handleBlur;return(0,T.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(n)},children:[(0,T.jsx)(A,{children:"Edit transaction"}),(0,T.jsxs)(J,{children:[(0,T.jsx)("span",{className:"INCOME"===e.type?"active":"",children:"Income"}),"/",(0,T.jsx)("span",{className:"EXPENSE"===e.type?"active":"",children:"Expense"})]}),(0,T.jsx)(Q,{children:(0,T.jsx)("textarea",{name:"category",autoComplete:"off",value:zn(e.categoryId),readOnly:!0})}),(0,T.jsx)(W,{children:(0,T.jsx)(_,{placeholder:"0.00",title:"Please put the transaction value",name:"value",type:"number",autoComplete:"off",value:a.amount,onChange:function(n){return o("amount",n.target.value)},onBlur:i,onKeyUp:i})}),(0,T.jsx)("div",{children:(0,T.jsx)(Cn,{dateFormat:"dd-MM-yyyy",name:"date",type:"date",timeFormat:!1})}),(0,T.jsx)($,{children:(0,T.jsx)("textarea",{placeholder:"Comment",title:"Please describe your transaction.",name:"comment",type:"text",autoComplete:"off",value:a.comment,onChange:function(n){return o("comment",n.target.value)}})}),(0,T.jsxs)(G,{children:[(0,T.jsx)(Y,{type:"submit",children:"Save"}),(0,T.jsx)(nn,{type:"button",onClick:t,children:"Cancel"})]})]})}})})},Dn=e(8007),Nn=e(1413),Sn=e(6459),In=e(458),Mn=M.default.div(sn||(sn=(0,I.Z)(["\n"]))),Fn=function(n){var t=Object.assign({},((0,Sn.Z)(n),n)),e=t.checked,r=(0,q.U$)(t),a=(0,o.Z)(r,1)[0];return(0,T.jsxs)(Mn,{children:[(0,T.jsx)("p",{className:"".concat(e?"":"active-type-text"),children:"Income"}),(0,T.jsxs)("label",{htmlFor:"type",children:[(0,T.jsx)("input",(0,Nn.Z)((0,Nn.Z)({},a),t)),(0,T.jsx)(In.L8k,{}),(0,T.jsx)(In.gKM,{})]}),(0,T.jsx)("p",{className:"".concat(e?"active-type-text":""),children:"Expense"})]})},Tn=(M.default.div(pn||(pn=(0,I.Z)(["\n  min-height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 61.38px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.5s;\n  z-index: 1000;\n  background: var(--transparency-10);\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(50px);\n\n  @media screen and (min-width: 768px) {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n\n    position: absolute;\n    top: -55%;\n    left: 10%;\n\n    width: 540px;\n    min-height: 580px;\n    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n    backdrop-filter: blur(50px);\n    border-radius: 8px;\n\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n\n    position: absolute;\n    top: 0;\n    left: -20%;\n\n    width: 540px;\n    min-height: 580px;\n    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n    backdrop-filter: blur(50px);\n    border-radius: 8px;\n\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n\n  textarea {\n    resize: none;\n    overflow-y: hidden;\n    transition: height 0.2s;\n    background-color: transparent;\n    border: none;\n    color: var(--white);\n    padding-left: 20px;\n    height: 24px;\n  }\n\n  textarea:focus {\n    outline: none;\n  }\n"]))),M.default.h3(xn||(xn=(0,I.Z)(["\n  color: var(--white);\n  text-align: center;\n  font-family: Poppins;\n  font-size: 24px;\n  font-style: 1.5;\n  font-weight: 400;\n  line-height: 36px;\n\n  margin-bottom: 32px;\n"])))),Un=(M.default.div(un||(un=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n\n  color: var(--white-60, rgba(255, 255, 255, 0.6));\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  margin-bottom: 60px;\n\n  &:focus {\n    color: var(--dashboard-text, #ff868d);\n  }\n"]))),M.default.div(fn||(fn=(0,I.Z)(["\n  color: var(--white, #fbfbfb);\n  font-family: Poppins;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  border-bottom: 1px solid var(--transparency-60);\n\n  margin-bottom: 40px;\n"]))),M.default.div(hn||(hn=(0,I.Z)(["\n  margin-bottom: 40px;\n  border-bottom: 1px solid var(--transparency-60);\n"]))),M.default.input(bn||(bn=(0,I.Z)(["\n  color: var(--white, #fbfbfb);\n  font-family: Poppins;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.5;\n  padding-left: 20px;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n"]))),M.default.div(mn||(mn=(0,I.Z)(["\n  color: var(--white, #fbfbfb);\n  font-family: Poppins;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n\n  border-bottom: 1px solid var(--transparency-60);\n  margin-bottom: 40px;\n\n  textarea {\n    height: auto;\n  }\n"]))),M.default.div(gn||(gn=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),M.default.button(vn||(vn=(0,I.Z)(["\n  width: 300px;\n  padding-block: 13px;\n  font-weight: 400;\n  @media screen and (max-width: 767.9px) {\n    width: 280px;\n  }\n  color: var(--white, #fbfbfb);\n  border: none;\n  border-radius: 20px;\n  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 18px;\n  line-height: normal;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  background: var(--btn-gradient-color);\n\n  margin-bottom: 20px;\n\n  &:hover {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n\n  &:focus {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n"]))),M.default.button(yn||(yn=(0,I.Z)(["\n  width: 300px;\n  padding-block: 13px;\n  font-weight: 400;\n  @media screen and (max-width: 767.9px) {\n    width: 280px;\n  }\n  color: (--text-button, #623f8b);\n  border: none;\n  border-radius: 20px;\n  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 18px;\n  line-height: normal;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  background: var(--white, #fbfbfb);\n\n  &:hover {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n\n  &:focus {\n    background: transparent !important;\n    color: #ffc727 !important;\n    outline: 1px solid #ffc727;\n  }\n"]))),M.default.p(jn||(jn=(0,I.Z)(["\n  color: red;\n"])))),Vn=function(n){var t=n.closeModal,e=(0,l.v9)(L.us),r=(0,l.I0)();return(0,T.jsx)(R,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,T.jsx)(q.J9,{initialValues:{type:!0,amount:"",transactionDate:new Date(Date.now()),comment:"",category:"c9d9e447-1b83-4238-8712-edc77b18b739"},validationSchema:(0,Dn.Ry)({type:(0,Dn.Xg)(),category:(0,Dn.nK)().required("Please choose transaction category."),amount:(0,Dn.Rx)().typeError("Transaction value must be a number").required("Please provide transaction value."),transactionDate:(0,Dn.hT)().required("Please provide transaction date."),comment:(0,Dn.Z_)().required()}),onSubmit:function(n,e){var a=e.setSubmitting,o=e.resetForm;!function(n){var t={transactionDate:(0,On.s)(n.transactionDate),type:n.type?"EXPENSE":"INCOME",categoryId:n.type?n.category:"063f1132-ba5d-42b4-951d-44011ca46262",comment:n.comment,amount:n.type?-n.amount:Math.abs(n.amount)};r((0,c.cQ)(t))}(n),o(),a(!1),t()},children:function(n){var t=n.handleSubmit,r=n.values,a=n.setFieldValue,o=n.handleBlur,i=n.errors,d=n.touched;return(0,T.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(n)},children:[(0,T.jsx)(Tn,{children:"Add Transaction"}),(0,T.jsx)(Fn,{type:"checkbox",name:"type",checked:r.type,onChange:function(n){a("type",n.target.checked)},onBlur:o,onKeyUp:o}),r.type&&(0,T.jsxs)("div",{children:[(0,T.jsx)("select",{name:"category",placeholder:"Select a category",onChange:function(n){return a("category",n.target.value)},children:null===e||void 0===e?void 0:e.map((function(n){return(0,T.jsx)("option",{value:n.id,children:n.name},n.id)}))}),(0,T.jsx)(Un,{children:i.category})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("input",{placeholder:"0.00",title:"Please put the transaction value",name:"value",type:"number",autoComplete:"off",value:r.amount,onChange:function(n){return a("amount",n.target.value)},onBlur:o,onKeyUp:o}),d.amount&&i.amount&&(0,T.jsx)(Un,{children:i.amount})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(Cn,{dateFormat:"dd.mm.yyyy",name:"transactionDate",type:"date",timeFormat:!1}),i.transactionDate&&(0,T.jsx)(Un,{children:i.transactionDate})]}),(0,T.jsx)("div",{children:(0,T.jsx)("input",{placeholder:"Comment",title:"Leave the description here",name:"comment",type:"textarea",autoComplete:"off",value:r.comment,onChange:function(n){return a("comment",n.target.value)},onBlur:o,onKeyUp:o})}),(0,T.jsx)("button",{type:"submit",children:"Add transaction"})]})}})})},Hn=function(){var n=(0,i.useState)(!1),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(!1),p=(0,o.Z)(a,2),x=p[0],u=p[1],f=(0,i.useState)(null),h=(0,o.Z)(f,2),b=h[0],m=h[1],g=(0,s.useMediaQuery)({query:"(max-width: 767.9px)"}),v=(0,l.I0)(),y=(0,l.v9)(L.aQ),j=(0,l.v9)(L.us);(0,i.useEffect)((function(){document.body.style.overflow=e||x?"hidden":"auto",v((0,c.yH)()),v((0,c.HV)())}),[v,e,x]);var w=function(n){m(n),r(!0)},k=function(n){return null===j||void 0===j?void 0:j.find((function(t){return t.id===n})).name},Z=function(n){v((0,c.Xj)(n))};return(0,T.jsxs)(T.Fragment,{children:[e&&(0,T.jsx)(Pn,{updatingTransaction:b,selfDestruction:function(){m(null),r(!1)}}),x&&(0,T.jsx)(Vn,{closeModal:function(){return u(!1)}}),(0,T.jsxs)(B,{children:[(null===y||void 0===y?void 0:y.length)>0?g?(0,T.jsx)(U,{transactions:y,defineCategory:k,handleDelete:Z,openUpdating:w}):(0,T.jsx)(H,{transactions:y,defineCategory:k,handleDelete:Z,openUpdating:w}):null,(0,T.jsx)("button",{className:"transaction-add-button",onClick:function(){return u(!0)},children:(0,T.jsx)(d.Lfi,{})})]})]})},Ln=function(){return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(a.W,{size:"main",children:(0,T.jsx)(Hn,{})})})}}}]);
//# sourceMappingURL=507.30260f69.chunk.js.map