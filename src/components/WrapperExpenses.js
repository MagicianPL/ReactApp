import React, { useState } from "react";
import "./WrapperExpenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ComponentList from "./ComponentList"

const WrapperExpenses = ({ arr: expenses }) => {
  //In props is object with arr attribute - arr: array
  //I'm destructuring this object n changes name on expenses

  const [selectedYear, setSelectedYear] = useState("2021");
  //The year is setting again when user chooses option from dropdown in Filter component

  const selectedYearHandler = (e) => {
    console.log(e.target.value);
    setSelectedYear(e.target.value);
  };
  //above is a fn - which is given to ExpenseFilter component

  const filtered = expenses.filter((obj) => {
    return obj.date.getFullYear().toString() === selectedYear;
  });
  //new array with expenses, with selected year

  return (
    <div className="wrapper-expenses">
      <ExpensesFilter selectedYear={selectedYearHandler} />
      <ComponentList array={filtered} />
    </div>
  );
};

export default WrapperExpenses;
