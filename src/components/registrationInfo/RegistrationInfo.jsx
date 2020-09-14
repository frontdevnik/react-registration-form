import React from 'react';
import { setUpDatepicker, setUpTimepicker } from '../../globals/materialize-elements-setting';

import MainInput from '../mainInput';

export default ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <MainInput
        name="birthday"
        formName="registrationInfo"
        type="text"
        className="timepicker"
        placeholder="Input birthday"
        inputRef={setUpDatepicker}
      />
      <MainInput
        name="lunchtime"
        formName="registrationInfo"
        type="text"
        className="timepicker"
        placeholder="Choose lunchtime"
        inputRef={setUpTimepicker}
      />
      <button className="waves-effect waves-light btn">Finish</button>
    </form>
  );
};
