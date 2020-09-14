import React from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../../components/mainWrapper';
import Breadcrumbs from '../../components/navigations';
import RegistrationInfo from '../../components/registrationInfo';

import {
  setRegistrationInfoField,
  submitRegistrationInfoForm,
} from '../../features/registrationInfo/actions';

export default () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');
    inputs.forEach((input) => {
      const { name, value } = input;
      dispatch(setRegistrationInfoField({ name, value }));
    });

    dispatch(submitRegistrationInfoForm());
  };

  return (
    <MainWrapper>
      <RegistrationInfo handleSubmit={handleSubmit} />
      <Breadcrumbs />
    </MainWrapper>
  );
};
