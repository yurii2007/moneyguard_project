"use strict";(self.webpackChunkmoneyguard_project=self.webpackChunkmoneyguard_project||[]).push([[920],{5834:function(n,t,e){e.d(t,{W:function(){return s}});var i,a=e(168),r=e(6487),o="280px",d="1280px",l={tablet:"(min-width: ".concat("768px",")"),desktop:"(min-width: ".concat(d,")")},c=r.default.div(i||(i=(0,a.Z)(["\n  min-width: ",";\n  margin: 0 auto;\n  padding: ",";\n  @media screen and "," {\n    padding-top: 20px;\n  }\n\n  @media screen and "," {\n    width: ",";\n    padding: ",";\n  }\n"])),o,(function(n){return"main"===n.Size&&"32px 0"}),l.tablet,l.desktop,(function(n){return"statistics"===n.Size&&"800px"}),(function(n){var t=n.Size;return"main"===t?"46px 0 0 70px":"statistics"===t&&"32px 0 0 54px"})),h=e(184),s=function(n){var t=n.children,e=n.Size;return(0,h.jsx)(c,{Size:e,children:t})}},5920:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var i,a=e(5834),r=e(2791),o=e(9434),d=e(168),l=e(6487).default.div(i||(i=(0,d.Z)(["\n  margin: 0 auto;\n  position: relative;\n  overflow-y: overlay;\n\n  // &.expense::before {\n  //   content: '';\n  //   position: absolute;\n  //   left: 0;\n  //   height: 300px;\n  //   width: 5px;\n  //   background-color: var(--dashboard-text);\n  // }\n\n  // &.income::before {\n  //   content: '';\n  //   position: absolute;\n  //   left: 0;\n  //   height: 300px;\n  //   width: 5px;\n  //   background-color: var(--yellow);\n  // }\n\n  // li {\n  //   height: 48px;\n  //   display: flex;\n  //   justify-content: space-between;\n  //   align-items: center;\n  //   position: relative;\n  // }\n\n  // li:nth-child(4) p {\n  //   text-align: right;\n  // }\n\n  // li:not(:last-child)::after {\n  //   content: '';\n  //   position: absolute;\n  //   left: -20px;\n  //   right: -20px;\n  //   bottom: -1px;\n  //   height: 1px;\n  //   border-bottom: 1px solid white;\n  //   opacity: 0.2;\n  // }\n\n  // li:last-child {\n  //   height: 53px;\n  // }\n\n  // &.expense li:nth-child(5) p {\n  //   font-weight: 600;\n  //   color: var(--dashboard-text);\n  //   text-align: right;\n  // }\n\n  // &.income li:nth-child(5) p {\n  //   font-weight: 600;\n  //   color: var(--yellow);\n  //   text-align: right;\n  // }\n\n  // b {\n  //   font-weight: 600;\n  //   margin-right: 27px;\n  // }\n\n  // button.edit {\n  //   width: 48px;\n  //   height: 24px;\n  //   background-color: transparent;\n  //   color: var(--white-60);\n  //   box-shadow: none;\n  // }\n\n  // button.edit:hover {\n  //   color: var(--white);\n  // }\n\n  // button.delete {\n  //   color: var(--white);\n  //   background: var(--gradient-button);\n  //   width: 69px;\n  //   height: 29px;\n  //   border-radius: 20px;\n  //   font-size: 14px;\n  //   box-shadow: var(--button-shadow);\n  // }\n\n  // @media only screen and (max-width: 767px) {\n  //   padding: 0 20px;\n  //   height: 293px;\n  //   margin-bottom: 8px;\n  //   border-radius: 10px;\n  //   height: 293px;\n  //   background: rgba(255, 255, 255, 0.1);\n\n  //   button.edit {\n  //     display: flex;\n  //     justify-content: space-between;\n  //   }\n  // }\n\n  // @media only screen and (min-width: 768px) {\n  //   display: block;\n  //   max-height: 318px;\n  //   overflow: auto;\n  //   width: 704px;\n  //   &::-webkit-scrollbar {\n  //     width: 8px;\n  //     border-radius: 4px;\n  //     background-color: #734aef;\n  //   }\n\n  //   &::-webkit-scrollbar-thumb {\n  //     background-color: var(--balance-background-color);\n  //     border-radius: 4px;\n  //   }\n\n  //   .income {\n  //     font-weight: 600;\n  //     color: var(--yellow);\n  //     text-align: right;\n  //   }\n  //   .expense {\n  //     font-weight: 600;\n  //     color: var(--dashboard-text);\n  //     text-align: right;\n  //   }\n\n  //   table {\n  //     width: 100%;\n  //     border-spacing: 0px;\n  //     border-collapse: collapse;\n  //     max-height: 308px;\n  //   }\n\n  //   thead {\n  //     height: 56px;\n  //     background-color: var(--balance-background-color);\n  //     backdrop-filter: var(--backdrop-filter);\n  //     position: sticky;\n  //     top: 0;\n  //     z-index: 2;\n  //   }\n\n  //   tbody {\n  //     max-height: 265px;\n  //     overflow: hidden;\n  //   }\n\n  //   th {\n  //     padding: 0;\n  //     font-weight: 600;\n  //     text-align: left;\n  //   }\n  //   th:first-child {\n  //     border-top-left-radius: 8px;\n  //     border-bottom-left-radius: 8px;\n  //     text-align: left;\n  //     padding-left: 20px;\n  //     width: 91px;\n  //   }\n\n  //   th:nth-child(2) {\n  //     text-align: center;\n  //   }\n\n  //   th:nth-child(3) {\n  //     width: 146px;\n  //   }\n\n  //   th:nth-child(4) {\n  //     width: 135px;\n  //   }\n\n  //   th:nth-child(5) {\n  //     text-align: right;\n  //   }\n\n  //   th:last-child {\n  //     border-top-right-radius: 8px;\n  //     border-bottom-right-radius: 8px;\n  //     width: 141px;\n  //   }\n\n  //   tbody {\n  //     font-size: 14px;\n  //   }\n\n  //   tr {\n  //     position: relative;\n  //     height: 53px;\n  //   }\n\n  //   tr:not(:last-child)::after {\n  //     content: '';\n  //     position: absolute;\n  //     left: 0;\n  //     right: 0;\n  //     bottom: -1px;\n  //     height: 1px;\n  //     border-bottom: 1px solid white;\n  //     opacity: 0.2;\n  //   }\n\n  //   td {\n  //     text-align: left;\n  //     padding: 0;\n  //   }\n\n  //   td:first-child {\n  //     padding-left: 20px;\n  //   }\n\n  //   td:nth-child(2) {\n  //     width: 123px;\n  //     text-align: center;\n  //   }\n\n  //   /* td:nth-child(4) {\n  //           text-transform: capitalize;\n  //       } */\n\n  //   td:last-child {\n  //     text-align: right;\n  //     padding-right: 6px;\n  //   }\n\n  //   button.edit {\n  //     width: 14px;\n  //     height: 14px;\n  //     margin-right: 8px;\n  //   }\n  // }\n\n\n"]))),c=e(9439),h=e(3281),s=e(5763),p=e(184),x=function(n){var t=n.id,e=n.transactionDate,i=n.type,a=n.categoryId,d=n.comment,l=n.amount,x=(0,r.useState)(!1),u=(0,c.Z)(x,2),g=u[0],b=u[1],m=(0,o.I0)();return(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:e})," |",(0,p.jsx)("span",{children:i})," |",(0,p.jsx)("span",{children:a})," | ",(0,p.jsx)("span",{children:d})," | ",(0,p.jsx)("span",{children:l})," ","|",(0,p.jsxs)("span",{children:[(0,p.jsx)("button",{onClick:function(){return b(!0)},children:(0,p.jsx)(s.LBv,{})}),(0,p.jsx)("button",{onClick:function(){return n=t,void m((0,h.Xj)(n));var n},children:"Delete"})]}),g&&(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.transactionDate.value,i=n.currentTarget.elements.type.value,r=n.currentTarget.elements.comment.value,o=n.currentTarget.elements.amount.value,d={transactionId:t,transactionDate:e,type:i,categoryId:a,comment:r,amount:Number(o)};m((0,h.zJ)(d))},children:[(0,p.jsx)("button",{onClick:function(){return b(!1)},children:"\xd7"}),(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{children:"Date:"}),(0,p.jsx)("input",{defaultValue:e,type:"text",name:"transactionDate"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{children:"Type:"}),(0,p.jsx)("input",{defaultValue:i,type:"text",name:"type"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{children:"Comment:"}),(0,p.jsx)("input",{defaultValue:d,type:"text",name:"comment"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{children:"Amount:"}),(0,p.jsx)("input",{defaultValue:l,type:"text",name:"amount"})]}),(0,p.jsx)("button",{type:"submit",children:"Update transaction"})]})]})},u=function(){var n=(0,o.I0)(),t=(0,o.v9)((function(n){return n.transactions.data}));(0,r.useEffect)((function(){n((0,h.yH)()),n((0,h.HV)())}),[n]);return(0,p.jsxs)(l,{children:[(0,p.jsx)("button",{onClick:function(){n((0,h.cQ)({transactionDate:"2023-09-28",type:"EXPENSE",categoryId:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",comment:"Car",amount:-150}))},children:"Add test transaction"}),Array.isArray(t)&&t.length>0?(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Date"}),(0,p.jsx)("th",{children:"Type"}),(0,p.jsx)("th",{children:"Category"}),(0,p.jsx)("th",{children:"Comment"}),(0,p.jsx)("th",{children:"Sum"}),(0,p.jsx)("th",{})]})}),(0,p.jsx)("tbody",{children:t.map((function(n){var t=n.id,e=n.transactionDate,i=n.type,a=n.categoryId,r=n.comment,o=n.amount;return(0,p.jsx)(x,{id:t,transactionDate:e,type:i,categoryId:a,comment:r,amount:o},t)}))})]}):(0,p.jsx)("thead",{children:"There are no transactions added!"})]})},g=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(a.W,{Size:"main",children:(0,p.jsx)(u,{})})})}}}]);
//# sourceMappingURL=920.e6b892c6.chunk.js.map