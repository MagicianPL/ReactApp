import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ComponentList.css";

const ComponentList = ({ array: filtered }) => {
  if (filtered.length === 0) {
    return <h2 className="expenses-list__fallback">Brak danych na ten rok</h2>;
  }

  return (
    <ul className="expenses-list">
      {filtered.map((obj) => {
        return (
          <ExpenseItem
            key={obj.title}
            date={obj.date}
            title={obj.title}
            amount={obj.amount}
          />
        );
      })}
    </ul>
  );
};

export default ComponentList;
