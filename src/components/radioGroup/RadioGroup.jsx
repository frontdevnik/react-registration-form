import React from 'react';

import RadioInput from '../radionInput';

export default ({ values, name, register }) =>
  values.map((value) => (
    <RadioInput name={name} register={register} text={value} key={value} />
  ));
