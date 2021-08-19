import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div clasName="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">25.89</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
