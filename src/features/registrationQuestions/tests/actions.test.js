import { setRegistrationQuestionsField, submitRegistrationQuestionsForm } from '../actions';
import { SET_REGISTRATION_QUESTIONS_FIELD, SUBMIT_REGISTRATION_QUESTIONS_FORM } from '../constants';

describe('', () => {
  it('should create an setRegistrationField action', () => {
    const payload = 'Payload';
    const expectedAction = {
      type: SET_REGISTRATION_QUESTIONS_FIELD,
      payload,
    };
    expect(setRegistrationQuestionsField(payload)).toEqual(expectedAction);
  });
  it('should create an submitRegistrationForm action', () => {
    const payload = 'Payload';
    const expectedAction = {
      type: SUBMIT_REGISTRATION_QUESTIONS_FORM,
      payload,
    };
    expect(submitRegistrationQuestionsForm(payload)).toEqual(expectedAction);
  });
});
