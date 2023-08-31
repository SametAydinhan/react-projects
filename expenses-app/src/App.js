import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let result = await fetch(
  'http://localhost:3000/register', {
      method: "get",
      headers: {
          'Content-Type': 'application/json'
      }
  })
  result = await result.json();
  console.warn(result);

  


const INITIAL_EXPENSES = result
console.log(result);

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
