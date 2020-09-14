import { combineReducers } from 'redux';

import registration from './features/registration/reducers';
import registrationQuestions from './features/registrationQuestions/reducers';
import registrationInfo from './features/registrationInfo/reducers';

export default combineReducers({
  registration,
  registrationQuestions,
  registrationInfo,
});
