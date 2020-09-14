import createAction from '../../helpers/createActions';
import { SET_REGISTRATION_INFO_FIELD, SUBMIT_REGISTRATION_INFO_FORM } from './constants';

export const setRegistrationInfoField = createAction(SET_REGISTRATION_INFO_FIELD);
export const submitRegistrationInfoForm = createAction(SUBMIT_REGISTRATION_INFO_FORM);
