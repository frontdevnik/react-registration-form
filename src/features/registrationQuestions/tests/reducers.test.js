import reducer from '../reducers/index';
import { initialState } from '../reducers/index';
import {
  setRegistrationQuestionsField,
  submitRegistrationQuestionsForm,
} from '../actions';

describe('registration reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_REGISTRATION_QUESTIONS_FIELD', () => {
    const payload = {
      name: 'test',
      answer: 'answer',
      questionText: 'questionText',
    };

    const callReducer = reducer({}, setRegistrationQuestionsField(payload));
    const changedState = {
      [payload.name]: {
        questionText: payload.questionText,
        answer: payload.answer,
      },
    };

    expect(callReducer).toEqual(changedState);
  });

  it('should handle SUBMIT_REGISTRATION_QUESTIONS_FORM', () => {
    const initialState = {
      question_one: { questionText: '', answer: '1' },
      question_two: { questionText: '', answer: '2' },
      question_three: { questionText: '', answer: '3' },
      isFormValid: false,
    };
    const callReducer = reducer(
      initialState,
      submitRegistrationQuestionsForm()
    );
    const changedState = { ...initialState, isFormValid: true };

    expect(callReducer).toEqual(changedState);
  });
});
