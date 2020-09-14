import React from 'react';
import {setUpSelect} from '../../globals/materialize-elements-setting';

import MainInput from '../mainInput';

import MainSelect from '../mainSelect';

import {
  firstOptionText,
  firstOptions,
  secondOptions,
  secondOptionText,
  thirdOptions,
  thirdOptionText,
} from './defaultValues';

export default ({ handleSubmit, handleInput }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <MainSelect name="question_one" formName="registrationQuestions" onSelect={handleInput} mainText={firstOptionText} options={firstOptions} />
      <MainSelect name="question_two" formName="registrationQuestions" onSelect={handleInput} mainText={secondOptionText} options={secondOptions} />
      <MainSelect name="question_three" formName="registrationQuestions" onSelect={handleInput} mainText={thirdOptionText} options={thirdOptions} />
      <button className="waves-effect waves-light btn">submit</button>
    </form>
  );
};
