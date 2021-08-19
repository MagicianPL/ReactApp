import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
const expenses = [
  {
    title: "Zakup psa",
    amount: 2700,
    date: new Date(2021, 3, 18)
  },
  {
    title: "Zakup samochodu",
    amount: 7500,
    date: new Date(2021, 6, 24)
  },
  {
    title: "Wycieczka",
    amount: 1200,
    date: new Date(2021, 2, 2)
  },
  {
    title: "Nowy komputer",
    amount: 3200,
    date: new Date(2021, 7, 6)
  }
];

  return <div className="App">
    <h1>Hello</h1>
    <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
    <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
    <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
    <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />
  </div>;
}

export default App;
