import React, { useState } from "react";
import stlyes from './AddUser.module.css'
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error,setError] = useState();
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+userAge<1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(userName,userAge);
        setUserAge('');
        setUserName('');
    }
    const onErorHandler = () => {
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModal title={error.title} message= {error.message} onError = {onErorHandler}/>}
        <Card className={stlyes.input}>
            <form onSubmit={submitHandler}>
                <label >UserName</label>
                <input type="text" value={userName} onChange={userNameHandler} />
                <label >Age (Years)</label>
                <input type="number" value={userAge} onChange={userAgeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;