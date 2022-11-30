import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  const titileChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onAddExpense(expenseData);
  };
  // setEnterdAmount("");
  // setEnterdDate("");
  // setEnterdTitle("");
  return (
    <form onSubmit={submitHandler}>
      <div className="add-expense__controls">
        <div className="add-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titileChangeHandler}
            required
          />
        </div>
        <div className="add-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            value={enterdAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="add-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterdDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="add-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
