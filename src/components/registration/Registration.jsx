import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import {
  getFirstName,
  getEmail,
  getLastName,
  getPassword,
  getPhone,
  getRepeatPassword,
  getIsDiffPasswords,
} from '../../features/registration/selectors';

import MainInput from '../mainInput';

import {
  INVALID_NAME,
  INVALID_PASSWORD,
  INVALID_EMAIL,
  INVALID_PHONE,
} from '../../constants/validation-messages';
import {
  EMAIL_INPUT,
  NAME_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
} from '../../constants/validation-rules';

export default ({ onSubmit }) => {
  const defaultValues = {
    first_name: useSelector(getFirstName),
    last_name: useSelector(getLastName),
    email: useSelector(getEmail),
    phone: useSelector(getPhone),
    password: useSelector(getPassword),
    repeat_password: useSelector(getRepeatPassword),
  };
  const isDiffPasswords = useSelector(getIsDiffPasswords);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    defaultValues,
  });

  const handleReset = () => {
    reset(
      {},
      {
        errors: false,
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <MainInput
        name="first_name"
        type="text"
        placeholder="First Name"
        required
        pattern={NAME_INPUT}
        errorMessage={INVALID_NAME}
        register={register}
        error={errors.first_name?.message}
      />
      <MainInput
        name="last_name"
        type="text"
        placeholder="Last Name"
        pattern={NAME_INPUT}
        errorMessage={INVALID_NAME}
        register={register}
        error={errors.last_name?.message}
      />
      <MainInput
        name="email"
        type="email"
        placeholder="Email"
        required
        pattern={EMAIL_INPUT}
        errorMessage={INVALID_EMAIL}
        register={register}
        error={errors.email?.message}
      />
      <MainInput
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        pattern={PHONE_INPUT}
        errorMessage={INVALID_PHONE}
        register={register}
        error={errors.phone?.message}
      />
      <MainInput
        name="password"
        type="password"
        placeholder="Password"
        required
        pattern={PASSWORD_INPUT}
        errorMessage={INVALID_PASSWORD}
        register={register}
        error={errors.password?.message}
      />
      <MainInput
        name="repeat_password"
        type="password"
        placeholder="Repeat password"
        required
        pattern={PASSWORD_INPUT}
        errorMessage={INVALID_PASSWORD}
        register={register}
        error={errors.repeat_password?.message}
      />
      {isDiffPasswords && (
        <p className="datepicker-clear">Passwords don't match</p>
      )}
      <button className="waves-effect waves-light btn">submit</button>
      <input
        type="button"
        className="waves-effect waves-light btn secondary-content blue-grey"
        onClick={handleReset}
        value="reset"
      />
    </form>
  );
};
