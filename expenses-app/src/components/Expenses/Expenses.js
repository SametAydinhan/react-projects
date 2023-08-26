import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList items ={filteredByYearItem}/>
      </Card>
    </div>
  );
}

export default Expenses;
