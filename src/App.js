import React, { useState } from 'react';

import NewUserForm from './components/NewUserForm/NewUserForm';
import UsersData from './components/UsersData/UsersData';
import Modal from './components/Modal/Modal';

const FIRST_USER = [{
  key: 'e1',
  username: 'Max',
  age: 36
}]

const App = () => {
  const [users, setUsers] = useState(FIRST_USER)
  const [modalDisplay, setModalDisplay] = useState(false)
  const [modalZeroDisplay, setModalZeroDisplay] = useState(false)

  const addNewUser = newUser => {
    setUsers(prevUsers => {
      return [newUser, ...prevUsers]
    })
  }

  const showModal = () => {
    setModalDisplay(true)
  }

  const showModalWithZero = () => {
    setModalDisplay(true)
    setModalZeroDisplay(true)
  }

  const closeModal = () => {
    setModalDisplay(false)
    setModalZeroDisplay(false)
  }

  return (
    <div>
      <NewUserForm onAddUser={addNewUser} onShowModal={showModal} onShowModalWithZero={showModalWithZero}/>
      <UsersData users={users} />
      <Modal show={modalDisplay} close={closeModal} zero={modalZeroDisplay} />
    </div>
  );
}

export default App;
