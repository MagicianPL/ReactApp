import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
const [enteredTitle, setTitle] = useState("");
const [enteredAmount, setAmount] = useState("");
const [enteredDate, setDate] = useState("");

const titleChangeHandler = (e) => {
    setTitle(e.target.value);
};

const amountChangeHandler = (e) => {
    setAmount(e.target.value);
};

const dateChangeHandler = (e) => {
    setDate(e.target.value);
};

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Nazwa</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Cena w PLN</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input type="date" min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Dodaj</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
