import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import './UserInput.css';

const UserInput = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const changeUsernameHandler = (e) => {
    e.preventDefault();
    setEnteredUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    e.preventDefault();
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUserData = {
      username: enteredUsername,
      age: +enteredAge,
    };

    setEnteredUsername('');
    setEnteredAge('');

    onAddUser(newUserData);
  };

  return (
    <div>
      <Card>
        <form className='form' onSubmit={submitHandler}>
          <div className='form-control'>
            <Input
              inputType={'text'}
              inputLabel={'Username'}
              changeHandler={changeUsernameHandler}
              inputValue={enteredUsername}
            />
          </div>
          <div className='form-control'>
            <Input
              inputType={'number'}
              inputLabel={'Age (Years)'}
              changeHandler={changeAgeHandler}
              inputValue={enteredAge}
            />
          </div>
          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
