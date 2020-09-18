import React from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../../components/mainWrapper';
import Breadcrumbs from '../../components/navigations';
import RegistrationQuestions from '../../components/registrationQuestions';

import { submitRegistrationQuestionsForm } from '../../features/registrationQuestions/actions';

export default () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    Object.values(data).every((answer) => answer) &&
      dispatch(submitRegistrationQuestionsForm(data));
  };

  return (
    <MainWrapper>
      <RegistrationQuestions onSubmit={handleSubmit} />
      <Breadcrumbs />
    </MainWrapper>
  );
};
