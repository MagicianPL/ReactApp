import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const dataFromForm = (oldObjct) => {
    const dataObject = {
      ...oldObjct,
    };
    console.log(dataObject);
    props.onAddObj(dataObject);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={dataFromForm} />
    </div>
  );
};

export default NewExpense;
