import React from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actions/types";
import Transactions from "./components/transactions";

function App(props) {
  const [amount, setAmount] = React.useState("");
  const [toggleBalanceDisplay, setToggleBalanceDisplay] = React.useState(true);

  const handleAmountChange = e => {
    setAmount(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold", color: "grey", fontSize: 40 }}>
        {toggleBalanceDisplay ? "NGN " + props.balance : "XXX"}
        <br />
        <button
          onClick={() => setToggleBalanceDisplay(!toggleBalanceDisplay)}
          style={{ textTransform: "uppercase", backgroundColor: "skyblue" }}
        >
          {toggleBalanceDisplay ? "hide" : "show"} my balance
        </button>
      </h1>
      <p>Please enter the amount you'd like to deposit or withdraw.</p>
      <p>
        <input
          type="number"
          placeholder="Input Amount"
          style={{ padding: 10, fontSize: 16, border: "solid thin grey" }}
          onChange={handleAmountChange}
          value={amount}
        />
        <br />
        <small style={{ color: "skyblue" }}>
          Note: You can only <strong>withdraw</strong> if your{" "}
          <strong>account balance</strong> is more than the amount you're
          requesting to withdraw
        </small>
      </p>
      <button
        style={{
          backgroundColor: "green",
          color: "#FFF",
          fontWeight: "bold",
          padding: 10,
          fontSize: 16,
          border: "none"
        }}
        onClick={() => props.depositFund(amount)}
      >
        + DEPOSIT
      </button>
      &nbsp;
      <button
        disabled={amount >= props.balance}
        style={{
          backgroundColor: amount >= props.balance ? "#FFF" : "orange",
          color: amount >= props.balance ? "orange" : "#FFF",
          fontWeight: "bold",
          padding: 10,
          fontSize: 16,
          border: "none",
          opacity: amount >= props.balance ? 0.3 : 1
        }}
        onClick={() => props.withdrawFund(amount)}
      >
        - WITHDRAW
      </button>
      <div style={{ marginTop: 20, borderTop: 'solid thin #f1f1f1', paddingTop: 10 }}>
        {props.transactions.length > 0
          ? props.transactions.map(transaction => (
              <Transactions key={Math.random()} transaction={transaction} />
            ))
          : "No transactions to display"}
      </div>
    </div>
  );
}

const mapS2P = state => {
  return {
    balance: state.bal.balance,
    transactions: state.trans.transactions
  };
};

const mapD2P = dispatch => {
  return {
    depositFund: amount =>
      dispatch({ type: actionType.DEPOSIT, fundDeposited: amount }),
    withdrawFund: amount =>
      dispatch({ type: actionType.WITHDRAW, fundWithdrawn: amount })
  };
};

export default connect(mapS2P, mapD2P)(App);
