import * as actionType from "../actions/types";

const initialState = {
  transactions: []
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DEPOSIT:
      return {
        transactions: state.transactions.concat({
          amount: action.fundDeposited,
          transType: "deposit",
          date: new Date()
        })
      };
    case actionType.WITHDRAW:
      return {
        transactions: state.transactions.concat({
          amount: action.fundWithdrawn,
          transType: "withdraw",
          date: new Date()
        })
      };
    default:
      return state;
  }
};

export default transactionsReducer;
