import React from 'react';

export default ({ name, text = '', register, checked }) => {
  return (
    <label>
      <input
        name={name}
        type="radio"
        ref={register()}
        checked={checked}
        value={text}
      />
      <span>{text}</span>
    </label>
  );
};
