import React from 'react';
import classnames from 'classnames';

export default ({
  type,
  name,
  required,
  className,
  labelText,
  placeholder,
  pattern,
  errorMessage,
  children,
  register,
  error,
}) => {
  return (
    <div className={classnames('input-field col s12', className)}>
      <input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        className={error ? 'invalid' : ''}
        ref={register({
          required: required && 'This is required field',
          pattern: {
            value: pattern,
            message: errorMessage,
          },
        })}
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
