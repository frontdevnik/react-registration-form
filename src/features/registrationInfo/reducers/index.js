import { cutFormValidField } from '../../../helpers/cutIsFormValidField';
import {
  SET_REGISTRATION_INFO_FIELD,
  SUBMIT_REGISTRATION_INFO_FORM,
} from '../constants';

const initialState = {
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
      const stateFields = cutFormValidField(state);
      return {
        ...state,
        isFormValid: Object.values(stateFields).every((item) => item.value),
      };
    default:
      return state;
  }
};
