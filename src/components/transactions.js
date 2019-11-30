import React from "react";
import moment from "moment";

const Transactions = props => {
  const { date, transType, amount } = props.transaction;

  return (
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      <small style={{color: 'grey'}}>{moment(date).format("dddd, MMMM Do YYYY, h:mmA")}</small>
      <br />
      <span style={{ fontSize: 17 }}>
        You {transType === "deposit" ? "deposited" : "withdrew"}{" "}
        <strong style={{color: transType === "deposit" ? "green" : "red"}}>{amount}</strong>
      </span>
      <hr />
    </div>
  );
};

export default Transactions;
