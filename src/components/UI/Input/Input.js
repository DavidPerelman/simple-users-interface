import React from 'react';

const Input = ({ inputType, inputLabel, changeHandler, inputValue }) => {
  return (
    <>
      {inputLabel && <label className='form-label'>{inputLabel}</label>}
      <input type={inputType} value={inputValue} onChange={changeHandler} />
    </>
  );
};

export default Input;
