import { SUBMIT_REGISTRATION_QUESTIONS_FORM } from '../constants';

export const initialState = {
  question_one: '',
  question_two: '',
  question_three: '',
  isFormValid: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_REGISTRATION_QUESTIONS_FORM:
      return { ...state, ...payload, isFormValid: true };
    default:
      return state;
  }
};
