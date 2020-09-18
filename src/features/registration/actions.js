import createAction from '../../helpers/createActions';
import { DIFFERENT_PASSWORDS, SUBMIT_REGISTRATION_FORM } from './constants';

export const differentPasswords = createAction(DIFFERENT_PASSWORDS);
export const submitRegistrationForm = createAction(SUBMIT_REGISTRATION_FORM);
