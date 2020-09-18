import reducer from '../reducers/index';
import { initialState } from '../reducers/index';
import {
  setRegistrationInfoField,
  submitRegistrationInfoForm,
} from '../actions';

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_REGISTRATION_INFO_FIELD', () => {
    const payload = {
      name: 'test',
      value: 'test',
    };

    const callReducer = reducer({}, setRegistrationInfoField(payload));
    const changedState = { [payload.name]: { value: payload.value } };

    expect(callReducer).toEqual(changedState);
  });

  it('should handle SUBMIT_REGISTRATION_FORM', () => {
    const initialState = {
      birthday: { value: 'value' },
      lunchtime: { value: 'value' },
      isFormValid: false,
    };
    const callReducer = reducer(initialState, submitRegistrationInfoForm());
    const changedState = { ...initialState, isFormValid: true };

    expect(callReducer).toEqual(changedState);
  });
});
