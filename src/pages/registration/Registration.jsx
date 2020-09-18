import React from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../../components/mainWrapper';
import Breadcrumbs from '../../components/navigations';
import Registration from '../../components/registration';

import {
  submitRegistrationForm,
  differentPasswords,
} from '../../features/registration/actions';

export default () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    const { password, repeat_password } = data;

    password !== repeat_password
      ? dispatch(differentPasswords())
      : dispatch(submitRegistrationForm(data));
  };

  return (
    <MainWrapper>
      <Registration onSubmit={handleSubmit} />
      <Breadcrumbs />
    </MainWrapper>
  );
};
