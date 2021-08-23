import React, { useState } from "react";
import "./App.css";
import WrapperExpenses from "./components/WrapperExpenses";
import NewExpense from "./components/NewExpense";

const expenses = [
  {
    title: "Zakup psa",
    amount: 2700,
    date: new Date(2021, 3, 18),
  },
  {
    title: "Zakup samochodu",
    amount: 7500,
    date: new Date(2021, 6, 24),
  },
  {
    title: "Wycieczka",
    amount: 1200,
    date: new Date(2021, 2, 2),
  },
  {
    title: "Nowy komputer",
    amount: 3200,
    date: new Date(2021, 7, 6),
  },
];

function App() {
  const [arrExpensesObj, setArrExpensesObj] = useState(expenses);

  const addNewObjectFromChild = (object) => {
    setArrExpensesObj((prevState) => {
      return [object, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddObj={addNewObjectFromChild} />
      <WrapperExpenses arr={arrExpensesObj} />
    </div>
  );
}

export default App;
