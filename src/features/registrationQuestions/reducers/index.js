import { cutFormValidField } from '../../../helpers/cutIsFormValidField';
import {
  SET_REGISTRATION_QUESTIONS_FIELD,
  SUBMIT_REGISTRATION_QUESTIONS_FORM,
} from '../constants';

const initialState = {
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
      const stateFields = cutFormValidField(state);
      return {
        ...state,
        isFormValid: Object.values(stateFields).every(
          (item) => item.answer
        ),
      };
    default:
      return state;
  }
};
