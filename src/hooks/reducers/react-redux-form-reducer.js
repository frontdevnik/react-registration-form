import {
  SET_FORM_FIELD_VALUE,
  SET_FORM_FIELD_ERROR,
  SET_INITIAL_FORM_VALUE,
  SUBMIT_FORM,
} from './constants';
import { checkFormValidation } from './helpers';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_FORM_FIELD_VALUE: {
      const { formName, name, value } = payload;
      return { ...state, [formName]: { ...state[formName], [name]: value } };
    }
    case SET_FORM_FIELD_ERROR: {
      const { formName, name, message } = payload;
      return {
        ...state,
        [formName]: {
          ...state[formName],
          errors: {
            ...state[formName].errors,
            [name]: { ...state[formName].errors[name], message },
          },
        },
      };
    }
    case SET_INITIAL_FORM_VALUE: {
      const { formName, initialFormState } = payload;
      console.log(state);
      return {
        ...state,
        [formName]: {
          ...state[formName],
          ...initialFormState,
          isFormValid: false,
          errors: { ...initialFormState.errors },
        },
      };
    }
    case SUBMIT_FORM: {
      const { formName } = payload;
      return checkFormValidation(state, formName);
    }
    default:
      return state;
  }
};
