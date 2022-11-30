import ExpenseDate from "./ExpenseDate";
import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  console.log();
  const deleteButtonHandler = (event) => {
    console.log("delete button set anu ,props .id ", props.id);
    props.onDelete(props.id);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={deleteButtonHandler}> ✖ </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
