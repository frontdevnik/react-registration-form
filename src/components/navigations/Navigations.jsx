import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import {
  REGISTRATION_PAGE,
  OTHER_INFORMATION_PAGE,
  PASSWORD_QUESTIONS_PAGE,
} from '../../constants/path-constants';

import { footer, activeLink } from './navigations.module.scss';

export default () => {
  const registration = useSelector((state) => state.registration.isFormValid);
  const registrationQuestions = useSelector((state) => state.registrationQuestions.isFormValid);

  return (
    <footer className={footer}>
      <NavLink
        to={REGISTRATION_PAGE}
        activeClassName={activeLink}
        className={classnames('waves-effect waves-light btn-large')}
      >
        Registration
      </NavLink>
      <NavLink
        to={PASSWORD_QUESTIONS_PAGE}
        activeClassName={activeLink}
        className={classnames('waves-effect waves-light btn-large', !registration && 'disabled')}
      >
        Registration-questions
      </NavLink>
      <NavLink
        to={OTHER_INFORMATION_PAGE}
        activeClassName={activeLink}
        className={classnames('waves-effect waves-light btn-large', !registrationQuestions && 'disabled')}
      >
        Registration-info
      </NavLink>
    </footer>
  );
};
