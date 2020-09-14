import createAction from '../../helpers/createActions';

import { SET_FORM_FIELD_VALUE, SET_FORM_FIELD_ERROR,SET_INITIAL_FORM_VALUE, SUBMIT_FORM } from './constants';

export const setFormFieldValue = createAction(SET_FORM_FIELD_VALUE);
export const setFormFieldError = createAction(SET_FORM_FIELD_ERROR);
export const setInitialFormValue = createAction(SET_INITIAL_FORM_VALUE);
export const submitForm = createAction(SUBMIT_FORM);
