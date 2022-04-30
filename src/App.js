import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react'

function App() {

  const [userList, setUserList] = useState([])

  const addUserHandler = (user) => {
    setUserList((prevUserList) => {
      return [user, ...prevUserList]
    })
  }

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList userList={userList} setUserList={setUserList} />
    </div>
  );
}

export default App;
