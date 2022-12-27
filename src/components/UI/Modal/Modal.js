import React from 'react';
import './Modal.css';

const Modal = ({ setShow, header, body, footer }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close' onClick={() => setShow(false)}>
            &times;
          </span>
          {header}
        </div>
        <div className='modal-body'>{body}</div>
        <div className='modal-footer'>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
