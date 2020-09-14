import createAction from '../../helpers/createActions';
import { SET_REGISTRATION_FIELD, SUBMIT_REGISTRATION_FORM } from './constants';

export const setRegistrationField = createAction(SET_REGISTRATION_FIELD);
export const submitRegistrationForm = createAction(SUBMIT_REGISTRATION_FORM);
