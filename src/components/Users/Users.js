import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

const Users = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState({ header: '', details: '' });
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUserData) => {
    if (newUserData.username === '' || newUserData.age === '') {
      setShow(true);
      setError({
        header: 'Invalid input',
        details: 'Please enter a valid name and age (none-empty values).',
      });

      return;
    } else if (newUserData.age <= 0) {
      setShow(true);
      setError({
        header: 'Invalid input',
        details: 'Please enter a valid age (> 0).',
      });

      return;
    }

    setUsers((prevUsers) => {
      return [newUserData, ...prevUsers];
    });
  };

  const modalHeader = <h2>{error.header}</h2>;
  const modalBody = <p>{error.details}</p>;
  const modalFooter = (
    <>
      <Button clickHandler={() => setShow(false)}>Okay</Button>
    </>
  );

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserOutput users={users} />
      {show && (
        <Modal
          header={modalHeader}
          body={modalBody}
          setShow={setShow}
          footer={modalFooter}
        />
      )}
    </div>
  );
};

export default Users;
