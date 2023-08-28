import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css' 

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            {props.users.length !== 0 && <ul>
                {props.users.map((user,key) => (
                    <li key={key}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>}
        </Card>
    );
};

export default UserList;
