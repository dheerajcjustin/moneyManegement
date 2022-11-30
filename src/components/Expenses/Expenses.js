import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  let filterdExpense = props.items;
  const [filteredYear, setFilteredYear] = useState("all");
  const [deleteId, setDeleteId] = useState([]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("on expense page ", filterdExpense);
  };
  if (filteredYear !== "all") {
    filterdExpense = props.items.filter(
      (values) => values.date.getFullYear() == filteredYear
    );
  }

  const deleteHandler = (id) => {
    setDeleteId((prevArray) => [...prevArray, id]);
    console.log("deleted id is ", id);
  };

  filterdExpense = filterdExpense.filter(
    (values) => !deleteId.includes(values.id)
  );
  console.log("so ", filterdExpense);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filterdExpense.map((values) => (
        // props.items.map((values) => (

        <ExpenseItem
          id={values.id}
          key={values.id}
          title={values.title}
          amount={values.amount}
          date={values.date}
          onDelete={deleteHandler}
        />
      ))}
    </Card>
  );
};

export default Expenses;
