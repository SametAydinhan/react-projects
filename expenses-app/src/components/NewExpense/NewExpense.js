import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsShowed(false);
        
    };
    const [isShowed, setIsShowed] = useState(false);
    const addNewExpenseHandler = () => {
        setIsShowed(true);
    }
    const cancelHandler = () => {
        setIsShowed(false);
    }
    return <div className="new-expense">
        {!isShowed && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
        {isShowed && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
}

export default NewExpense;