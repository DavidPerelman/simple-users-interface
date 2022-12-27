import React from 'react';
import Card from '../UI/Card/Card';
import './UserOutput.css';

const UserOutput = ({ users }) => {
  return (
    <div>
      <Card>
        <div className='users-output-container'>
          {users.length !== 0 ? (
            users.map((user, i) => {
              return (
                <div key={i}>
                  <div className='user-output'>
                    {user.username} ({`${user.age} years old`})
                  </div>
                </div>
              );
            })
          ) : (
            <div>No users</div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default UserOutput;
