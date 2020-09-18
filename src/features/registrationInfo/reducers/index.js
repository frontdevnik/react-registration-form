import { SUBMIT_REGISTRATION_INFO_FORM } from '../constants';

export const initialState = {
  birthday: '',
  lunchtime: '',
  range: '',
  radio_answer: '',
  isFormValid: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_REGISTRATION_INFO_FORM:
      return { ...state, ...payload, isFormValid: true };
    default:
      return state;
  }
};
