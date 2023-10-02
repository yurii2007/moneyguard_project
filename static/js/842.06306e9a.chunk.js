"use strict";(self.webpackChunkmoneyguard_project=self.webpackChunkmoneyguard_project||[]).push([[842],{5834:function(n,e,t){t.d(e,{W:function(){return u}});var r,a=t(168),i=t(6487),o="280px",d="1280px",c={tablet:"(min-width: ".concat("768px",")"),desktop:"(min-width: ".concat(d,")")},l=i.default.div(r||(r=(0,a.Z)(["\n  min-width: ",";\n  margin: 0 auto;\n  padding: ",";\n  position: relative;\n\n  @media screen and "," {\n    padding-top: 20px;\n  }\n\n  @media screen and "," {\n    width: ",";\n    padding: ",";\n  }\n"])),o,(function(n){return"main"===n.size&&"32px 0"}),c.tablet,c.desktop,(function(n){return"statistics"===n.size&&"800px"}),(function(n){var e=n.size;return"main"===e?"46px 0 0 70px":"statistics"===e&&"32px 0 0 54px"})),s=t(184),u=function(n){var e=n.children,t=n.size;return(0,s.jsx)(l,{size:t,children:e})}},6842:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,a=t(5834),i=t(9439),o=t(2791),d=t(8820),c=t(9434),l=t(3281),s=t(4805),u=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function h(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function x(n,e){var t=n.title,a=n.titleId,i=h(n,u);return o.createElement("svg",p({viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},i),t?o.createElement("title",{id:a},t):null,r||(r=o.createElement("path",{d:"M10.5 6.333 8.167 4m-6.709 9.042 1.975-.22c.24-.026.361-.04.474-.076.1-.033.195-.078.283-.136.099-.066.185-.151.356-.323l7.704-7.704A1.65 1.65 0 0 0 9.917 2.25L2.213 9.954c-.172.171-.257.257-.323.356a1.166 1.166 0 0 0-.136.283c-.036.113-.05.233-.076.475l-.22 1.974Z",stroke:"#fff",strokeOpacity:.6,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"})))}var f,m,b,v,g,y,j,w=o.forwardRef(x),k=(t.p,t(168)),C=t(6487),E=C.default.ul(f||(f=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  li {\n    position: relative;\n    padding: 0 20px 0 15px;\n    background-color: var(--btn-gradient-color);\n    border-radius: 10px;\n    // border-left: 5px solid var(--dashboard-text);\n    color: var(--white);\n  }\n  li > div {\n    display: flex;\n    justify-content: space-between;\n    padding-block: 12px;\n  }\n  li > div:not(:last-child) {\n    border-bottom: 1px solid var(--transparency-20);\n  }\n\n  .transaction-head {\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .transaction-desc {\n    text-align: right;\n    font-size: 16px;\n  }\n  .delete-button {\n    padding: 4px 12px;\n    border-radius: 18px;\n    background: var(--btn-gradient-color);\n    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n    border: none;\n    color: var(--white-color);\n    text-align: center;\n    font-size: 14px;\n    line-height: normal;\n  }\n  .edit-button {\n    padding: 4px 12px;\n    background: transparent;\n    border: none;\n    text-align: center;\n    color: var(--transparency-60);\n    font-size: 16px;\n    line-height: normal;\n    letter-spacing: 0.32px;\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]))),O=t(184),N=function(n){var e=n.transactions,t=n.defineCategory,r=n.handleDelete,a=n.openUpdating;return(0,O.jsx)(E,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,O.jsxs)("li",{style:{borderLeft:"5px solid ".concat("063f1132-ba5d-42b4-951d-44011ca46262"===n.categoryId?"var(--yellow)":"var(--dashboard-text)")},children:[(0,O.jsxs)("div",{children:[(0,O.jsx)("p",{className:"transaction-head",children:"Date"}),(0,O.jsx)("p",{className:"transaction-desc",children:n.transactionDate})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("p",{className:"transaction-head",children:"Type"}),(0,O.jsx)("p",{className:"transaction-desc",children:"EXPENSE"===n.type?"-":"+"})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("p",{className:"transaction-head",children:"Category"}),(0,O.jsx)("p",{className:"transaction-desc",children:t(n.categoryId)})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("p",{className:"transaction-head",children:"Comment"}),(0,O.jsx)("p",{className:"transaction-desc",children:n.comment})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("p",{className:"transaction-head",children:"Sum"}),(0,O.jsx)("p",{className:"transaction-desc",children:n.amount})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("button",{className:"delete-button",onClick:function(){return r(n.id)},children:"Delete"}),(0,O.jsxs)("button",{className:"edit-button",onClick:function(){return a(n)},children:[(0,O.jsx)(w,{width:14,height:14}),"Edit"]})]})]},n.id)}))})},S=C.default.table(m||(m=(0,k.Z)(["\n  width: 100%;\n  border-spacing: 0px;\n  border-collapse: collapse;\n  color: var(--white);\n  thead {\n    width: 100%;\n\n    backdrop-filter: blur(50px);\n    border-radius: 8px;\n    tr {\n      width: 704px;\n    }\n    tr > th:first-child {\n      border-top-left-radius: 8px;\n      border-bottom-left-radius: 8px;\n      padding-left: 20px;\n    }\n    tr > th:nth-child(2) {\n      text-align: center;\n    }\n    tr > th:last-child {\n      border-top-right-radius: 8px;\n      border-bottom-right-radius: 8px;\n    }\n    th {\n      background: var(--background-table);\n      padding-block: 16px;\n      text-align: left;\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 24px;\n    }\n  }\n  tbody {\n    tr > td {\n      padding-block: 16px;\n      text-align: left;\n      font-size: 14px;\n      line-height: 21px;\n    }\n    tr > td:nth-child(5) {\n      font-weight: 600;\n    }\n    tr > td:nth-child(2),\n    tr > td:first-child {\n      text-align: center;\n    }\n    tr:not(:last-child) {\n      border-bottom: 1px solid var(--transparency-20);\n    }\n    td > div {\n      .delete-button {\n        padding: 4px 12px;\n        border-radius: 18px;\n        background: var(--btn-gradient-color);\n        box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);\n        border: none;\n        color: var(--white-color);\n        text-align: center;\n        font-size: 14px;\n        line-height: normal;\n      }\n      .edit-button {\n        padding: 4px 12px;\n        background: transparent;\n        border: none;\n        text-align: center;\n        color: var(--transparency-60);\n        font-size: 16px;\n        line-height: normal;\n        letter-spacing: 0.32px;\n      }\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    tbody {\n        tr>td:first-child: text-align: center;\n    }\n  }\n"]))),D=function(n){var e=n.transactions,t=n.defineCategory,r=n.handleDelete,a=n.openUpdating;return(0,O.jsxs)(S,{children:[(0,O.jsx)("thead",{children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:"Date"}),(0,O.jsx)("th",{children:"Type"}),(0,O.jsx)("th",{children:"Category"}),(0,O.jsx)("th",{children:"Comment"}),(0,O.jsx)("th",{children:"Sum"}),(0,O.jsx)("th",{})]})}),(0,O.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(n){return(0,O.jsxs)("tr",{children:[(0,O.jsx)("td",{children:n.transactionDate}),(0,O.jsx)("td",{children:"EXPENSE"===n.type?"-":"+"}),(0,O.jsx)("td",{children:t(n.categoryId)}),(0,O.jsx)("td",{children:n.comment}),(0,O.jsx)("td",{children:n.amount}),(0,O.jsx)("td",{children:(0,O.jsxs)("div",{children:[(0,O.jsx)("button",{className:"edit-button",onClick:function(){return a(n)},children:(0,O.jsx)(w,{width:14,height:14})}),(0,O.jsx)("button",{className:"delete-button",onClick:function(){return r(n.id)},children:"Delete"})]})})]},n.id)}))})]})},Z=t(6351),I=C.default.div(b||(b=(0,k.Z)(["\n  .transaction-add-button {\n    position: fixed;\n    right: 20px;\n    bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    border-radius: 50%;\n    border: none;\n    background: var(--btn-gradient-color);\n    color: var(--white);\n    width: 44px;\n    height: 44px;\n    box-shadow: 1px 9px 15px 0px var(--transparency-20);\n    svg {\n        width: 28px;\n        height: 28px;\n    }\n  }\n"]))),M=t(4165),P=t(5861),z=t(5705),F=C.default.div(v||(v=(0,k.Z)(["\n  min-height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 61.38px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.5s;\n  z-index: 1000;\n  background: var(--transparency-10);\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  backdrop-filter: blur(50px);\n"]))),V=(t(8639),t(9314)),L=t(1951),U=C.default.div(g||(g=(0,k.Z)(["\n  && {\n    input {\n      position: relative;\n      border: none;\n      border-bottom: 1px solid var(--transparency-60);\n      font-size: 18px;\n      color: var(--white);\n      background-color: transparent;\n      padding-left: 20px;\n      padding-bottom: 4.5px;\n      cursor: pointer;\n\n      &:focus-visible {\n        outline: 0;\n      }\n    }\n\n    &.rdt {\n      position: relative;\n    }\n\n    &.rdtPicker {\n      position: absolute;\n      min-width: 250px;\n      padding: 4px;\n    }\n\n    .rdtPicker td.rdtToday:before {\n      border-bottom: 7px solid var(--picker);\n    }\n\n    @media (max-width: 767.9px) {\n      input {\n        width: 280px;\n      }\n    }\n  }\n"]))),H=["title","titleId"];function B(){return B=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},B.apply(this,arguments)}function T(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function X(n,e){var t=n.title,r=n.titleId,a=T(n,H);return o.createElement("svg",B({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,y||(y=o.createElement("g",{clipPath:"url(#a)"},o.createElement("path",{d:"M9 11H7v2h2v-2Zm4 0h-2v2h2v-2Zm4 0h-2v2h2v-2Zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V9h14v11Z"}))),j||(j=o.createElement("defs",null,o.createElement("clipPath",{id:"a"},o.createElement("path",{d:"M0 0h24v24H0z"})))))}var K,q=o.forwardRef(X),A=(t.p,t(9513)),J=t.n(A),Q=function(n){var e=n.name,t=(0,z.U$)(e),r=(0,i.Z)(t,1)[0],a=(0,z.u6)().setFieldValue;return(0,O.jsxs)(U,{children:[(0,O.jsx)(J(),{inputProps:{readOnly:!0},selected:r.value?new Date(r.value):null,closeOnSelect:!0,onChange:function(n){(0,V.default)(n)&&a(r.name,n,(0,L.default)(n,"yyyy-MM-dd"))},dateFormat:"yyyy-MM-dd"}),(0,O.jsx)(q,{})]})},R={"c9d9e447-1b83-4238-8712-edc77b18b739":"Main expenses","27eb4b75-9a42-4991-a802-4aefe21ac3ce":"Products","3caa7ba0-79c0-40b9-ae1f-de1af1f6e386":"Car","bbdd58b8-e804-4ab9-bf4f-695da5ef64f4":"Self care","76cc875a-3b43-4eae-8fdb-f76633821a34":"Child care","128673b5-2f9a-46ae-a428-ec48cf1effa1":"Household products","1272fcc4-d59f-462d-ad33-a85a075e5581":"Education","c143130f-7d1e-4011-90a4-54766d4e308e":"Leisure","719626f1-9d23-4e99-84f5-289024e437a8":"Other expenses","3acd0ecd-5295-4d54-8e7c-d3908f4d0402":"Entertainment","063f1132-ba5d-42b4-951d-44011ca46262":"Income"},W=function(n){return R[n]},$=t(7810),_=function(n){var e=n.selfDestruction,t=n.updatingTransaction,r=(0,c.I0)(),a=function(){var n=(0,P.Z)((0,M.Z)().mark((function n(e){var a;return(0,M.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a={id:t.id,data:{transactionDate:(0,$.s)(new Date(e.date)),type:t.type,categoryId:t.categoryId,comment:e.comment,amount:"INCOME"===t.type?Math.abs(e.amount):-e.amount}},r((0,l.zJ)(a));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,O.jsx)(F,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,O.jsx)(z.J9,{initialValues:{type:"EXPENSE"===t.type,amount:Math.abs(t.amount),date:t.transactionDate,comment:t.comment},onSubmit:function(n,t){var r=t.setSubmitting,i=t.resetForm;a(n),i(),r(!1),e()},enableReinitialize:!0,children:function(n){var r=n.handleSubmit,a=n.values,i=n.setFieldValue,o=n.handleBlur;return(0,O.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(n)},children:[(0,O.jsx)("h3",{children:"Edit transaction"}),(0,O.jsxs)("div",{children:[(0,O.jsx)("span",{className:"INCOME"===t.type?"active":"",children:"Income"}),"/",(0,O.jsx)("span",{className:"EXPENSE"===t.type?"active":"",children:"Expense"})]}),(0,O.jsx)("div",{children:(0,O.jsx)("textarea",{name:"category",autoComplete:"off",value:W(t.categoryId),readOnly:!0})}),(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{children:(0,O.jsx)("input",{placeholder:"0.00",title:"Please put the transaction value",name:"value",type:"number",autoComplete:"off",value:a.amount,onChange:function(n){return i("amount",n.target.value)},onBlur:o,onKeyUp:o})}),(0,O.jsx)("div",{children:(0,O.jsx)(Q,{dateFormat:"dd-MM-yyyy",name:"date",type:"date",timeFormat:!1})})]}),(0,O.jsx)("div",{children:(0,O.jsx)("textarea",{placeholder:"Comment",title:"Please describe your transaction.",name:"comment",type:"text",autoComplete:"off",value:a.comment,onChange:function(n){return i("comment",n.target.value)}})}),(0,O.jsx)("button",{type:"submit",children:"Save"}),(0,O.jsx)("button",{type:"button",onClick:e,children:"Cancel"})]})}})})},G=t(1413),Y=t(6459),nn=t(458),en=C.default.div(K||(K=(0,k.Z)(["\n"]))),tn=function(n){var e=Object.assign({},((0,Y.Z)(n),n)),t=e.checked,r=(0,z.U$)(e),a=(0,i.Z)(r,1)[0];return(0,O.jsxs)(en,{children:[(0,O.jsx)("p",{className:"".concat(t?"":"active-type-text"),children:"Income"}),(0,O.jsxs)("label",{htmlFor:"type",children:[(0,O.jsx)("input",(0,G.Z)((0,G.Z)({},a),e)),(0,O.jsx)(nn.L8k,{}),(0,O.jsx)(nn.gKM,{})]}),(0,O.jsx)("p",{className:"".concat(t?"active-type-text":""),children:"Expense"})]})},rn=function(n){var e=n.closeModal,t=(0,c.v9)(Z.us),r=(0,c.I0)();return(0,O.jsx)(F,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,O.jsx)(z.J9,{initialValues:{type:!0,amount:0,transactionDate:new Date(Date.now()),comment:"",category:"c9d9e447-1b83-4238-8712-edc77b18b739"},onSubmit:function(n,t){var a=t.setSubmitting,i=t.resetForm;!function(n){var e={transactionDate:(0,$.s)(n.transactionDate),type:n.type?"EXPENSE":"INCOME",categoryId:n.type?n.category:"063f1132-ba5d-42b4-951d-44011ca46262",comment:n.comment,amount:n.type?-n.amount:Math.abs(n.amount)};r((0,l.cQ)(e))}(n),i(),a(!1),e()},children:function(n){var e=n.handleSubmit,r=n.values,a=n.setFieldValue,i=n.handleBlur;return(0,O.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(n)},children:[(0,O.jsx)("h2",{children:"Add Transaction"}),(0,O.jsx)(tn,{type:"checkbox",name:"type",checked:r.type,onChange:function(n){a("type",n.target.checked)},onBlur:i,onKeyUp:i}),r.type&&(0,O.jsx)("div",{children:(0,O.jsx)("select",{name:"category",onChange:function(n){return a("category",n.target.value)},children:null===t||void 0===t?void 0:t.map((function(n){return(0,O.jsx)("option",{value:n.id,defaultValue:"c9d9e447-1b83-4238-8712-edc77b18b739",children:n.name},n.id)}))})}),(0,O.jsx)("div",{children:(0,O.jsx)("input",{placeholder:"0.00",title:"Please put the transaction value",name:"value",type:"number",autoComplete:"off",value:r.amount,onChange:function(n){return a("amount",n.target.value)},onBlur:i,onKeyUp:i,required:!0})}),(0,O.jsx)("div",{children:(0,O.jsx)(Q,{dateFormat:"dd.mm.yyyy",name:"transactionDate",type:"date",timeFormat:!1})}),(0,O.jsx)("div",{children:(0,O.jsx)("input",{placeholder:"Comment",title:"Leave the description here",name:"comment",type:"textarea",autoComplete:"off",value:r.comment,onChange:function(n){return a("comment",n.target.value)},onBlur:i,onKeyUp:i,required:!0})}),(0,O.jsx)("button",{type:"submit",children:"Add transaction"})]})}})})},an=function(){var n=(0,o.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,o.useState)(!1),u=(0,i.Z)(a,2),p=u[0],h=u[1],x=(0,o.useState)(null),f=(0,i.Z)(x,2),m=f[0],b=f[1],v=(0,s.useMediaQuery)({query:"(max-width: 767.9px)"}),g=(0,c.I0)(),y=(0,c.v9)(Z.aQ),j=(0,c.v9)(Z.us);(0,o.useEffect)((function(){document.body.style.overflow=t||p?"hidden":"auto",g((0,l.yH)()),g((0,l.HV)())}),[g,t,p]);var w=function(){return h(!0)},k=function(n){b(n),r(!0)},C=function(n){return null===j||void 0===j?void 0:j.find((function(e){return e.id===n})).name},E=function(n){g((0,l.Xj)(n))};return 0===(null===y||void 0===y?void 0:y.length)?(0,O.jsxs)(I,{children:[(0,O.jsx)("p",{children:"No transactions"}),(0,O.jsx)("button",{className:"transaction-add-button",onClick:w,children:(0,O.jsx)(d.Lfi,{})})]}):(0,O.jsxs)(O.Fragment,{children:[t&&(0,O.jsx)(_,{updatingTransaction:m,selfDestruction:function(){b(null),r(!1)}}),p&&(0,O.jsx)(rn,{closeModal:function(){return h(!1)}}),(0,O.jsxs)(I,{children:[v?(0,O.jsx)(N,{transactions:y,defineCategory:C,handleDelete:E,openUpdating:k}):(0,O.jsx)(D,{transactions:y,defineCategory:C,handleDelete:E,openUpdating:k}),(0,O.jsx)("button",{className:"transaction-add-button",onClick:w,children:(0,O.jsx)(d.Lfi,{})})]})]})},on=function(){return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(a.W,{size:"main",children:(0,O.jsx)(an,{})})})}}}]);
//# sourceMappingURL=842.06306e9a.chunk.js.map