import React from 'react';
import './Button.css';

const Button = ({ children, clickHandler }) => {
  return (
    <button className='Button' onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
