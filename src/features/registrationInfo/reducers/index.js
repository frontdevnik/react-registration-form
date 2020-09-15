import { checkAllItemsIsValid } from '../helpers';
import {
  SET_REGISTRATION_INFO_FIELD,
  SUBMIT_REGISTRATION_INFO_FORM,
} from '../constants';

export const initialState = {
  birthday: { value: '' },
  lunchtime: { value: '' },
  isFormValid: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_REGISTRATION_INFO_FIELD:
      const { name, value } = payload;
      return {
        ...state,
        [name]: { value },
      };
    case SUBMIT_REGISTRATION_INFO_FORM:
      return checkAllItemsIsValid(state);
    default:
      return state;
  }
};
