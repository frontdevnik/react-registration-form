export const checkFormValid = ({ isFormReady, ...state }) =>
  Object.values(state).every(({ isValid }) => isValid);
export const checkFormReady = ({ isFormReady, isFormValid, ...state }) =>
  Object.values(state).every(({ isValid, text }) => isValid && text);
