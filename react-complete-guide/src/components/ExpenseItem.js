import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 2, 23);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 250;

  return (
    <div className="expense-item">
      <div>23rd Feb, 2023</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price"> $250 </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
