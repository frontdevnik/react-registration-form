import React from 'react';

import MainInput from '../../mainInput/MainInput';

import {
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_PASSWORD,
  INVALID_PHONE,
} from '../../../constants/validation-messages';
import {
  EMAIL_INPUT,
  NAME_INPUT,
  PASSWORD_INPUT,
  PHONE_INPUT,
} from '../../../constants/validation-rules';

export const stubRegistrationProps = {
  onSubmit: jest.fn(),
};

export const diffPasswordText = "Passwords don't match";

export const defaultValue = 'default value';
export const onChange = stubRegistrationProps.handleInput;

export const registrationLinks = [
  {
    name: 'first_name',
    type: 'text',
    placeholder: 'First Name',
    isRequired: true,
    validation: NAME_INPUT,
    errorMessage: INVALID_NAME,
  },
  {
    name: 'last_name',
    type: 'text',
    placeholder: 'Last Name',
    validation: NAME_INPUT,
    errorMessage: INVALID_NAME,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    isRequired: true,
    validation: EMAIL_INPUT,
    errorMessage: INVALID_EMAIL,
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone Number',
    isRequired: true,
    validation: PHONE_INPUT,
    errorMessage: INVALID_PHONE,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    isRequired: true,
    validation: PASSWORD_INPUT,
    errorMessage: INVALID_PASSWORD,
  },
  {
    name: 'repeat_password',
    type: 'password',
    placeholder: 'Repeat password',
    isRequired: true,
    validation: PASSWORD_INPUT,
    errorMessage: INVALID_PASSWORD,
  },
];
