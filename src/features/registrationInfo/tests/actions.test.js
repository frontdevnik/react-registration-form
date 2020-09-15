import { setRegistrationInfoField, submitRegistrationInfoForm } from '../actions';
import { SET_REGISTRATION_INFO_FIELD, SUBMIT_REGISTRATION_INFO_FORM } from '../constants';

describe('', () => {
  it('should create an setRegistrationField action', () => {
    const payload = 'Payload';
    const expectedAction = {
      type: SET_REGISTRATION_INFO_FIELD,
      payload,
    };
    expect(setRegistrationInfoField(payload)).toEqual(expectedAction);
  });
  it('should create an submitRegistrationForm action', () => {
    const payload = 'Payload';
    const expectedAction = {
      type: SUBMIT_REGISTRATION_INFO_FORM,
      payload,
    };
    expect(submitRegistrationInfoForm(payload)).toEqual(expectedAction);
  });
});
