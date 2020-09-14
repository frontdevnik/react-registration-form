import React from 'react';

import MainInput from '../mainInput';

import {
  INVALID_NAME,
  INVALID_PASSWORD,
  INVALID_EMAIL,
} from '../../constants/validation-messages';
import {
  EMAIL_INPUT,
  NAME_INPUT,
  PASSWORD_INPUT,
} from '../../constants/validation-rules';

export default ({handleSubmit, handleInput}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <MainInput
        name="first_name"
        formName="registration"
        type="text"
        placeholder="First Name"
        isRequired={true}
        validation={NAME_INPUT}
        errorMessage={INVALID_NAME}
        onChange={handleInput}
      />
      <MainInput
        name="last_name"
        formName="registration"
        type="text"
        placeholder="Last Name"
        validation={NAME_INPUT}
        errorMessage={INVALID_NAME}
        onChange={handleInput}
      />
      <MainInput
        name="email"
        formName="registration"
        type="email"
        placeholder="Email"
        isRequired={true}
        validation={EMAIL_INPUT}
        errorMessage={INVALID_EMAIL}
        onChange={handleInput}
      />
      <MainInput
        name="password"
        formName="registration"
        type="password"
        placeholder="Password"
        isRequired={true}
        validation={PASSWORD_INPUT}
        errorMessage={INVALID_PASSWORD}
        onChange={handleInput}
      />
      <MainInput
        name="repeat_password"
        formName="registration"
        type="password"
        placeholder="Repeat password"
        isRequired={true}
        validation={PASSWORD_INPUT}
        errorMessage={INVALID_PASSWORD}
        onChange={handleInput}
      />
      <button className="waves-effect waves-light btn">submit</button>
    </form>
  );
};
