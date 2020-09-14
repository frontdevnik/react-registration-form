import React from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../../components/mainWrapper';
import Breadcrumbs from '../../components/navigations';
import Registration from '../../components/registration';

import {
  setRegistrationField,
  submitRegistrationForm,
} from '../../features/registration/actions';

export default () => {
  const dispatch = useDispatch();

  const handleInput = ({ name, value, isRequired, errorMessage, isValid }) => {
    dispatch(setRegistrationField({ name, value, isRequired, errorMessage, isValid }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(submitRegistrationForm());
  };

  return (
    <MainWrapper>
      <Registration handleSubmit={handleSubmit} handleInput={handleInput} />
      <Breadcrumbs />
    </MainWrapper>
  );
};
