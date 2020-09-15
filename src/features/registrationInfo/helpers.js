import { removeFieldFromObject } from '../../helpers/removeFieldFromObject';

export const checkAllItemsIsValid = (state) => {
  const stateFields = removeFieldFromObject(state, 'isFormValid');
  return {
    ...state,
    isFormValid: Object.values(stateFields).every((item) => item.value),
  };
};
