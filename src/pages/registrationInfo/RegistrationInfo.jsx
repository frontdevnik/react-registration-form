import React from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../../components/mainWrapper';
import Breadcrumbs from '../../components/navigations';
import RegistrationInfo from '../../components/registrationInfo';

import { submitRegistrationInfoForm } from '../../features/registrationInfo/actions';

export default () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    Object.values(data).every((answer) => answer) &&
      dispatch(submitRegistrationInfoForm(data));
  };

  return (
    <MainWrapper>
      <RegistrationInfo onSubmit={handleSubmit} />
      <Breadcrumbs />
    </MainWrapper>
  );
};
