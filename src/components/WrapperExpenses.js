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
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
};

export default WrapperExpenses;
