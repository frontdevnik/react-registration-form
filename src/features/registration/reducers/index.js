import { checkAllItemsIsValid } from '../helpers';
import { SET_REGISTRATION_FIELD, SUBMIT_REGISTRATION_FORM } from '../constants';

export const initialState = {
  first_name: {
    value: '',
    isRequired: false,
    errorMessage: '',
    isValid: false,
  },
  last_name: { value: '', isRequired: false, errorMessage: '', isValid: false },
  email: { value: '', isRequired: false, errorMessage: '', isValid: false },
  password: { value: '', isRequired: false, errorMessage: '', isValid: false },
  repeat_password: {
    value: '',
    isRequired: false,
    errorMessage: '',
    isValid: false,
  },
  isFormValid: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGISTRATION_FIELD:
      const { name, value, isRequired, errorMessage, isValid } = payload;
      return {
        ...state,
        [name]: { value, isRequired, errorMessage, isValid },
      };
    case SUBMIT_REGISTRATION_FORM:
      return checkAllItemsIsValid(state);
    default:
      return state;
  }
};
