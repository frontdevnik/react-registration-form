import reducer from '../reducers/index';
import { initialState } from '../reducers/index';
import { differentPasswords, submitRegistrationForm } from '../actions';

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DIFFERENT_PASSWORDS', () => {
    const callReducer = reducer({}, differentPasswords());
    const changedState = { isDiffPasswords: true };

    expect(callReducer).toEqual(changedState);
  });

  it('should handle SUBMIT_REGISTRATION_FORM', () => {
    const payload = {
      first_name: 'first_name',
      phone: 'phone',
      last_name: 'last_name',
      email: 'email',
      password: 'password',
      repeat_password: 'repeat_password',
    };
    const callReducer = reducer(initialState, submitRegistrationForm(payload));
    const changedState = {
      ...initialState,
      ...payload,
      isFormValid: true,
      isDiffPasswords: false,
    };

    expect(callReducer).toEqual(changedState);
  });
});
