import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";

const AddExpense = (props) => {
  const saveExpenseDataHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    console.log("insede the add expense", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="add-expense">
      <ExpenseForm onAddExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default AddExpense;
