import React from 'react';
import { useSelector } from 'react-redux';
import { setUpSelect } from '../../globals/materialize-elements-setting';

export default ({ onSelect, name, formName, mainText = '', options = [] }) => {
  const value = useSelector((state) => state[formName][name].answer);
  const onChange = (event) => {
    const { value, name } = event.target;

    onSelect({ name, answer: value, questionText: mainText });
  };

  return (
    <div className="input-field col s12">
      <select onChange={onChange} name={name} ref={setUpSelect}>
        <option value="" disabled selected>
          Choose your option
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={value && true}
          >
            {option.text}
          </option>
        ))}
      </select>
      <label>{mainText}</label>
    </div>
  );
};
