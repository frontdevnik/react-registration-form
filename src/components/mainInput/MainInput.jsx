import React, { useState } from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { validator } from '../../helpers/validtaion';

export default ({
  type,
  name,
  formName = '',
  className,
  labelText,
  placeholder,
  isRequired,
  validation,
  errorMessage,
  children,
  onChange,
  inputRef,
}) => {
  const value = useSelector((state) => state[formName][name].value);
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    const invalidSymbols = validator(validation, value) ? '' : errorMessage;
    setError(invalidSymbols);
    const isValid = !isRequired || (value && !invalidSymbols);

    onChange({
      name,
      value,
      isRequired,
      errorMessage: invalidSymbols,
      isValid,
    });
  };

  return (
    <div className={classnames('input-field col s12', className)}>
      <input
        value={value}
        name={name}
        type={type}
        id={name}
        required={isRequired}
        placeholder={placeholder}
        className={error ? 'invalid' : ''}
        onChange={handleChange}
        ref={inputRef}
      />
      <label htmlFor={name}>{labelText}</label>
      {error && (
        <span className="helper-text" data-error={error}>
          {error}
        </span>
      )}
      {children}
    </div>
  );
};
