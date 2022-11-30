import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";
import React, { useState } from "react";

const dammyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setExpense] = useState(dammyExpense);
  const addExpenseHandler = (newExpense) => {
    setExpense((pervExpense) => {
      return [newExpense, ...pervExpense];
    });
    console.log("ithanu new expense enta set alle ", expense);
    console.log(expense);
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expense} onFilterChange />
    </div>
  );
};

export default App;
