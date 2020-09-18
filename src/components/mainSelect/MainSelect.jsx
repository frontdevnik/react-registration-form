import React from 'react';

export default ({ name, mainText = '', options = [], register, value }) => {
  return (
    <div className="input-field col s12">
      <select name={name} ref={register}>
        <option value="" disabled selected>
          Choose your option
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={value === option.value && true}
          >
            {option.text}
          </option>
        ))}
      </select>
      <label>{mainText}</label>
    </div>
  );
};
