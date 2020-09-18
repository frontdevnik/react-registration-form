import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import MainInput from '../mainInput';
import RadioGroup from '../radioGroup';

import {
  getBirthday,
  getLunchtime,
  getRadioAnswer,
  getRange,
} from '../../features/registrationInfo/selectors';

import {
  setUpDatepicker,
  setUpTimepicker,
} from '../../globals/materialize-elements-setting';

export default ({ onSubmit }) => {
  const defaultValues = {
    birthday: useSelector(getBirthday),
    lunchtime: useSelector(getLunchtime),
    range: useSelector(getRange),
    radio_answer: useSelector(getRadioAnswer),
  };

  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <MainInput
        name="birthday"
        type="text"
        className="timepicker"
        placeholder="Input birthday"
        register={setUpDatepicker(register)}
      />
      <MainInput
        name="lunchtime"
        type="text"
        className="timepicker"
        placeholder="Choose lunchtime"
        register={setUpTimepicker(register)}
      />
      <p className="range-field">
        <input ref={register} name="range" type="range" min="0" max="100" />
      </p>
      <h6>Choose favourite colour</h6>
      <RadioGroup
        values={['Yellow', 'Green', 'Red', 'Black']}
        name="radio_answer"
        register={register}
      />
      <button className="waves-effect waves-light btn waves-block">
        Finish
      </button>
    </form>
  );
};
