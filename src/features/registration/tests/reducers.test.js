import reducer from '../reducers/index';
import { initialState } from '../reducers/index';
import { setRegistrationField, submitRegistrationForm } from '../actions';

import { removeFieldFromObject } from '../../../helpers/removeFieldFromObject';

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_REGISTRATION_FIELD', () => {
    const payload = {
      name: 'test',
      value: 'test',
      isRequired: true,
      errorMessage: '',
      isValid: true,
    };
    const payloadWithoutProp = removeFieldFromObject(payload, 'name');

    const callReducer = reducer({}, setRegistrationField(payload));
    const changedState = { [payload.name]: payloadWithoutProp };

    expect(callReducer).toEqual(changedState);
  });

  it('should handle SUBMIT_REGISTRATION_FORM', () => {
    const initialState = {
      first_name: {
        value: '',
        isRequired: false,
        errorMessage: '',
        isValid: true,
      },
      last_name: {
        value: '',
        isRequired: false,
        errorMessage: '',
        isValid: true,
      },
      isFormValid: false,
    };
    const callReducer = reducer(initialState, submitRegistrationForm());
    const changedState = { ...initialState, isFormValid: true };

    expect(callReducer).toEqual(changedState);
  });
});
