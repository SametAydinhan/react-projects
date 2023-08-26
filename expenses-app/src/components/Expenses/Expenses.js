import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredByYearItem = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenses={filterExpensesHandler}
        />
        {filteredByYearItem.length === 0 && <p>No expenses found.</p>}
        {filteredByYearItem.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredByYearItem.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
