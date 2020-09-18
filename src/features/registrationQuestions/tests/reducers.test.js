import reducer from '../reducers/index';
import { initialState } from '../reducers/index';
import { submitRegistrationQuestionsForm } from '../actions';

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SUBMIT_REGISTRATION_QUESTIONS_FORM', () => {
    const payload = {
      question_one: '1',
      question_two: '2',
      question_three: '3',
      isFormValid: false,
    };
    const callReducer = reducer(
      initialState,
      submitRegistrationQuestionsForm(payload)
    );
    const changedState = { ...initialState, ...payload, isFormValid: true };

    expect(callReducer).toEqual(changedState);
  });
});
