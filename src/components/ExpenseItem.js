import "./ExpenseItem.css";
import Calendar from "./Calendar";

const ExpenseItem = (props) => {
  return (
    <li className="expense-item">
      <Calendar date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} PLN</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
