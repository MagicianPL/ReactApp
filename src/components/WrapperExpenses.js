import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./WrapperExpenses.css";
import ExpensesFilter from "./ExpensesFilter";

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

  let expensesContent = <p>Brak wprowadzonych danych na ten rok</p>;

  if (filtered.length > 0) {
    expensesContent = filtered.map((obj) => {
      return (
        <ExpenseItem
          key={obj.title}
          date={obj.date}
          title={obj.title}
          amount={obj.amount}
        />
      );
    });
  }

  return (
    <div className="wrapper-expenses">
      <ExpensesFilter selectedYear={selectedYearHandler} />
      {expensesContent}
    </div>
  );
};

export default WrapperExpenses;
