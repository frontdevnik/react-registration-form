import React from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '../../components/mainWrapper';
import Breadcrumbs from '../../components/navigations';
import RegistrationQuestions from '../../components/registrationQuestions';
import { setRegistrationInfoField } from '../../features/registrationInfo/actions';

import {
  setRegistrationQuestionsField,
  submitRegistrationQuestionsForm,
} from '../../features/registrationQuestions/actions';

export default () => {
  const dispatch = useDispatch();

  const handleInput = ({ name, answer, questionText }) => {
    dispatch(setRegistrationQuestionsField({ name, answer, questionText }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(submitRegistrationQuestionsForm());
  };

  return (
    <MainWrapper>
      <RegistrationQuestions
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
      <Breadcrumbs />
    </MainWrapper>
  );
};
