import { setRegistrationField, submitRegistrationForm } from '../actions';
import { SUBMIT_REGISTRATION_FORM, SET_REGISTRATION_FIELD } from '../constants';

describe('', () => {
  it('should create an setRegistrationField action', () => {
    const payload = 'Payload';
    const expectedAction = {
      type: SET_REGISTRATION_FIELD,
      payload,
    };
    expect(setRegistrationField(payload)).toEqual(expectedAction);
  });
  it('should create an submitRegistrationForm action', () => {
    const payload = 'Payload';
    const expectedAction = {
      type: SUBMIT_REGISTRATION_FORM,
      payload,
    };
    expect(submitRegistrationForm(payload)).toEqual(expectedAction);
  });
});
