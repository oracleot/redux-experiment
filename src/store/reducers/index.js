import { combineReducers } from "redux";
import balanceReducer from "./balance";
import transactionsReducer from "./transactions";

export const rootReducer = combineReducers({
  bal: balanceReducer,
  trans: transactionsReducer
});
