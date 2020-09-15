import { checkAllItemsIsValid } from '../helpers';
import {
  SET_REGISTRATION_QUESTIONS_FIELD,
  SUBMIT_REGISTRATION_QUESTIONS_FORM,
} from '../constants';

export const initialState = {
  question_one: { questionText: '', answer: '' },
  question_two: { questionText: '', answer: '' },
  question_three: { questionText: '', answer: '' },
  isFormValid: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGISTRATION_QUESTIONS_FIELD:
      const { name, answer, questionText } = payload;
      return {
        ...state,
        [name]: { questionText, answer },
      };
    case SUBMIT_REGISTRATION_QUESTIONS_FORM:
      return checkAllItemsIsValid(state);
    default:
      return state;
  }
};
