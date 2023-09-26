import styled from 'styled-components';

export const HeaderTransaction = styled.div`
  max-width: 440px;
  padding: 16px 16px;

  margin: 20px auto 14px;

  border-radius: 8px;
  background: var(--background-table);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.p`
  font-size: 16px;
  color: var(--white);
  font-weight: 600;
`;
export const SumTitleList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  margin: 0 auto;
`;
export const TransactionList = styled.ul`
  max-width: 440px;
  margin: 0 auto;
`;
export const SumTitleItem = styled.li`
  padding: 0 16px;
  display: flex;
  font-weight: 600;
  color: var(--white);
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 19px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Total = styled.p`
  &.income {
    color: #ffb627;
  }

  &.expense {
    color: #ff868d;
  }
`;

// export const Total = styled.td`
//   text-align: right;
//   padding: 16px 16px 0 0;

//   font-size: 14px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 128.56%;
//   &.income {
//     color: #ffb627;
//   }

//   &.expense {
//     color: #ff868d;
//   }
// `;

// export const TitleTrans = styled.p`
//   text-align: left;

//   font-size: 14px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 128.56%;
// `;

//!=====
// .Statistic {
//   margin-top: 40px;
//   margin-bottom: 8px;
//   color: var(--color-white);
//   font-size: 30px;
//   font-weight: 300;
// }

// .donut {
//   position: relative;
//   width: 280px;
//   height: 280px;
//   margin-bottom: 32px;
// }

// .stats_select_list {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// }

// .stats_select_item {
//   max-width: 280px;
//   height: 50px;
// }

// /* .dotut_donut {
//   margin-top: 4px;
// } */

// /* .container::-webkit-scrollbar {
//   display: none;
// } */

// .cont_stats {
//   display: flex;
//   flex-direction: column;
//   color: var(--color-white);
//   font-weight: 400;
//   padding-bottom: 32px;
// }

// .cont_select_and_list {
//   display: flex;
//   flex-direction: column;
//   width: 280px;
//   /* width: 395px; */
// }

// .transactions {
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
// }

// .transactions_item {
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 15px;

//   border-bottom: 1px solid rgba(255, 255, 255, 0.6);
//   align-items: center;
//   padding: 0 28px 15px 28px;
// }

// .transactions_item_color {
//   width: 24px;
//   height: 24px;
//   border-radius: 2px;
// }

// .transactions_item_name {
//   margin-left: 16px;
//   font-size: 14px;
//   font-weight: 400;
// }

// .transactions_item_price {
//   margin-left: auto;
// }

// .transactions_sum_list {
//   display: flex;
//   flex-direction: column;
//   padding: 0 28px;
// }

// .transactions_sum_item:not(:last-child) {
//   margin-bottom: 19px;
// }

// .transactions_sum_item {
//   font-weight: 600;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// }

// .transactions_expenses_sum {
//   color: var(--color-dashboard-text);
// }

// .transactions_income_sum {
//   color: var(--color-yellow);
// }

// .statistic_balans {
//   /* text-align: center; */
//   font-weight: 600;
//   font-size: 18px;
//   position: absolute;
//   top: 47%;
//   transform: translateY(-47%);
//   left: 50%;
//   transform: translateX(-50%);
// }

// .stats_label {
//   margin-top: 20px;
//   max-width: 280px;
//   /* height: 56px; */
//   padding: 17px 17px;

//   border-radius: 8px;
//   background: rgba(82, 59, 126, 0.6);
//   box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
//   backdrop-filter: blur(50px);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .stats_label_category_sum {
//   font-size: 16px;
//   color: var(--color-white);
//   font-weight: 600;
// }

// /* @media screen and (max-width: 320px) {
// } */
// @media screen and (min-width: 768px) {
//   .Statistic {
//     display: inline-block;
//     margin-top: 20px;
//     margin-bottom: 20px;
//     /* margin-right: 32px; */
//   }
//   .cont_stats {
//     flex-direction: row;
//   }
//   .donut {
//     width: 336px;
//     height: 336px;
//     margin-right: 32px;
//   }

//   .cont_select_and_list {
//     width: 336px;
//     margin-top: -20px;
//   }
//   .stats_select_list {
//     flex-direction: row;
//   }
//   .stats_select_item {
//     width: 160px;
//     gap: 16px;
//   }

//   .stats_label {
//     max-width: 336px;
//     padding: 17px 17px;
//   }
// }
// @media screen and (min-width: 1280px) {
//   .Statistic {
//     margin-top: 32px;
//     margin-bottom: 20px;
//     margin-left: 64px;
//   }
//   .donut {
//     width: 288px;
//     height: 288px;
//     margin-right: 32px;
//   }

//   .cont_stats {
//     flex-direction: row;
//     margin-left: 49px;
//     padding-bottom: 46px;
//   }

//   .cont_select_and_list {
//     width: 395px;
//   }

//   .stats_select_item {
//     width: 182px;
//     gap: 32px;
//   }
//   .stats_label {
//     margin-top: 20px;
//     max-width: 395px;
//     padding: 17px 17px;
//   }

//   .stats_select_list {
//     flex-direction: row;
//   }
// }
