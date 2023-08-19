import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterExpensesHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = {filteredYear} onFilterExpenses={filterExpensesHandler} />
            
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;
