import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })
  };

  const submitHandler =async (event)  => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    let result = await fetch(
      'http://localhost:3000/register', {
          method: "post",
          body: JSON.stringify({expenseData}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      console.warn(result);
      if (result) {
          alert("Data saved succesfully");
       
      }

    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };
  
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              value={enteredAmount}
              min='0.01'
              step='0.01'
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='Date'
              value={enteredDate}
              min='2019-01-01'
              max='2025-12-31'
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add expense</button>
        </div>
      
      
    </form>
  );
};

export default ExpenseForm;
