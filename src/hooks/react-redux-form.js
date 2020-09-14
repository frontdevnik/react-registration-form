import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { validator } from '../helpers/validtaion';
import {
  setFormFieldError,
  setFormFieldValue,
  setInitialFormValue,
  submitForm
} from './reducers/actions';

import { defaultFormName, defaultSettings } from './defaultValues';

const initialFormState = { errors: {} };
const addedValues = {};

export const useReactReduxForm = (formName = defaultFormName) => {
  const errors = useSelector(
    (state) => state.formReducer[formName]?.errors,
    shallowEqual
  );
  const dispatch = useDispatch();

  const formField = (settings = defaultSettings) => {
    const { validation, errorMessage, isRequired } = settings;

    return (elementTarget) => {
      if (!elementTarget) {
        return;
      }
      const { name } = elementTarget;

      if (!addedValues[name]) {
        initialFormState[name] = '';
        initialFormState.errors[name] = {isRequired, message: ''};

        dispatch(setInitialFormValue({ formName, initialFormState }));
        addedValues[name] = true;
      }

      let handleInput = ({ target }) => {
        const { name, value } = target;
        dispatch(setFormFieldValue({ formName, name, value }));
      };

      const handleBlur = ({ target }) => {
        const { name, value } = target;

        const hasError = !validator(validation, value);

        const message = hasError ? errorMessage : '';
        dispatch(setFormFieldError({ formName, name, message }));
      };

      elementTarget.addEventListener('input', handleInput);
      elementTarget.addEventListener('blur', handleBlur);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(submitForm({ formName }));
  };

  return {
    formField,
    errors,
    handleSubmit,
  };
};
