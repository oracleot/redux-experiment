import * as actionType from "../actions/types";

const initialState = {
  balance: 0
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DEPOSIT:
      return {
        balance: state.balance + parseInt(action.fundDeposited)
      };
    case actionType.WITHDRAW:
      return {
        balance: state.balance - action.fundWithdrawn
      };
    default:
      return state;
  }
};

export default balanceReducer
