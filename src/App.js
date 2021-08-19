import "./App.css";
import WrapperExpenses from "./components/WrapperExpenses";

function App() {
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

  return (
    <div className="App">
      <h1>Hello</h1>
      <WrapperExpenses arr = {expenses} />
    </div>
  );
}

export default App;
