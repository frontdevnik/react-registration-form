import createAction from '../../helpers/createActions';
import { SET_REGISTRATION_QUESTIONS_FIELD, SUBMIT_REGISTRATION_QUESTIONS_FORM } from './constants';

export const setRegistrationQuestionsField = createAction(SET_REGISTRATION_QUESTIONS_FIELD);
export const submitRegistrationQuestionsForm = createAction(SUBMIT_REGISTRATION_QUESTIONS_FORM);
