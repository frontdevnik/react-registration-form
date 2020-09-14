import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  REGISTRATION_PAGE,
  PASSWORD_QUESTIONS_PAGE,
  OTHER_INFORMATION_PAGE,
} from '../../../constants/path-constants';

import Navigations from '../Navigations';

import { footer } from '../navigations.module.scss';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const setUp = () =>
  mount(
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );

const linksProperties = [
  { href: REGISTRATION_PAGE, text: 'Registration' },
  {
    href: PASSWORD_QUESTIONS_PAGE,
    text: 'Registration-questions',
  },
  { href: OTHER_INFORMATION_PAGE, text: 'Registration-info' },
];

describe('<MainInput />', () => {
  let component;

  beforeEach(() => {
    // useSelector.mockReturnValueOnce(mockedUseSelectorValue);
    component = setUp();
  });

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should footer has correct className', () => {
    expect(component.find('footer').hasClass(footer)).toBeTruthy();
  });

  it('should all NavLinks has correct class', () => {
    component.find('a').forEach((node) => {
      expect(node.hasClass('waves-effect waves-light btn-large')).toBeTruthy();
    });
  });

  it('should all NavLinks render correctly', () => {
    component.find('a').forEach((node, i) => {
      expect(node.hasClass('waves-effect waves-light btn-large')).toBeTruthy();
      expect(node.props().href).toBe(linksProperties[i].href);
      expect(node.text()).toBe(linksProperties[i].text);
    });
  });

  it('should second NavLink disable', () => {
    useSelector.mockReturnValueOnce(false);
    component = setUp();
    expect(component.find('a').at(1).hasClass('disabled')).toBeTruthy();
  });

  it('should third NavLink disable', () => {
    useSelector.mockReturnValueOnce(true);
    useSelector.mockReturnValueOnce(false);
    component = setUp();
    expect(component.find('a').at(2).hasClass('disabled')).toBeTruthy();
  });
});
