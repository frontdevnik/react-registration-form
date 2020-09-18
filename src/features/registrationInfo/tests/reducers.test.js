import reducer from '../reducers/index';

import { initialState } from '../reducers/index';
import { submitRegistrationInfoForm } from '../actions';

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SUBMIT_REGISTRATION_FORM', () => {
    const payload = {
      birthday: 'birthday',
      lunchtime: 'lunchtime',
      range: 'range',
      radio_answer: 'radio_answer',
    }
    const callReducer = reducer(initialState, submitRegistrationInfoForm(payload));
    const changedState = { ...initialState, ...payload, isFormValid: true };

    expect(callReducer).toEqual(changedState);
  });
});
