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
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterExpenses={filterExpensesHandler}
                />
                {props.expenses.map((expense,key) => (
                    <ExpenseItem
                        key = {key}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
