import { DIFFERENT_PASSWORDS, SUBMIT_REGISTRATION_FORM } from '../constants';

export const initialState = {
  first_name: '',
  phone: '',
  last_name: '',
  email: '',
  password: '',
  repeat_password: '',
  isDiffPasswords: false,
  isFormValid: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DIFFERENT_PASSWORDS:
      return { ...state, isDiffPasswords: true };
    case SUBMIT_REGISTRATION_FORM:
      return {
        ...state,
        ...payload,
        isFormValid: true,
        isDiffPasswords: false,
      };
    default:
      return state;
  }
};
