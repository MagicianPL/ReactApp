import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./WrapperExpenses.css";
import ExpensesFilter from "./ExpensesFilter";

const WrapperExpenses = ({ arr: expenses }) => {
  //In props is object with arr attribute - arr: array
  //I'm destructuring this object n changes name on expenses

  const [selectedYear, setSelectedYear] = useState("");

  const selectedYearHandler = (e) => {
    console.log(e.target.value);
    setSelectedYear(e.target.value);
  };
  return (
    <div className="wrapper-expenses">
      <ExpensesFilter selectedYear={selectedYearHandler} />

      {expenses.map((obj) => {
        return (
          <ExpenseItem
            key={obj.title}
            date={obj.date}
            title={obj.title}
            amount={obj.amount}
          />
        );
      })}
    </div>
  );
};

export default WrapperExpenses;
