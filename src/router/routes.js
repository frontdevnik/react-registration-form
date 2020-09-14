import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Registration from '../pages/registration/Registration';
import RegistrationQuestions from '../pages/registrationQuestions';
import RegistrationInfo from '../pages/registrationInfo';

import {
    REGISTRATION_PAGE,
    PASSWORD_QUESTIONS_PAGE,
    OTHER_INFORMATION_PAGE,
} from '../constants/path-constants';

export default () => (
    <Switch>
        <Route path={PASSWORD_QUESTIONS_PAGE} component={RegistrationQuestions}/>
        <Route path={OTHER_INFORMATION_PAGE} component={RegistrationInfo}/>
        <Route path={REGISTRATION_PAGE} component={Registration}/>
        <Redirect to={REGISTRATION_PAGE}/>
    </Switch>
);
