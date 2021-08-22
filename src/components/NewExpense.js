import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = () => {
  const dataFromForm = (oldObjct) => {
    const dataObject = {
      ...oldObjct,
    };
    console.log(dataObject);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={dataFromForm} />
    </div>
  );
};

export default NewExpense;
