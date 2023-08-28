import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserLİst';

function App() {
  const [users,setUsers] = useState([]);
  const addUserHandler = (uName,uAge) => {
    setUsers((prevData) => {
      return [...prevData , {name:uName, age:uAge}];
    })
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
