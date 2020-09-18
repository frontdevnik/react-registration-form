import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import {
  getFirstSelectAnswer,
  getSecondSelectAnswer,
  getThirdSelectAnswer,
} from '../../features/registrationQuestions/selectors';

import { setUpSelect } from '../../globals/materialize-elements-setting';

import MainSelect from '../mainSelect';

import {
  firstOptionText,
  firstOptions,
  secondOptions,
  secondOptionText,
  thirdOptions,
  thirdOptionText,
} from './defaultValues';

export default ({ onSubmit }) => {
  const question_one = useSelector(getFirstSelectAnswer);
  const question_two = useSelector(getSecondSelectAnswer);
  const question_three = useSelector(getThirdSelectAnswer);

  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <MainSelect
        name="question_one"
        mainText={firstOptionText}
        options={firstOptions}
        register={setUpSelect(register)}
        value={question_one}
      />
      <MainSelect
        name="question_two"
        mainText={secondOptionText}
        options={secondOptions}
        register={setUpSelect(register)}
        value={question_two}
      />
      <MainSelect
        name="question_three"
        mainText={thirdOptionText}
        options={thirdOptions}
        register={setUpSelect(register)}
        value={question_three}
      />
      <button className="waves-effect waves-light btn">submit</button>
    </form>
  );
};
