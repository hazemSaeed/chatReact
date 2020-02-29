import React from 'react';

import './Input.css';
const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className='form'>
      <input
        value={message}
        className='input'
        placeholder='Typing message....'
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      />

      <button className='sendButton' onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
