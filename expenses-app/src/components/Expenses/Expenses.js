import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  for (let index = 0; index < props.expenses.length; index++) {
    props.expenses[index].date =  new Date(props.expenses[index].date)
   
    
  }
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
        <ExpensesChart expenses= {filteredByYearItem}/>
        <ExpensesList items ={filteredByYearItem}/>
      </Card>
    </div>
  );
}

export default Expenses;
