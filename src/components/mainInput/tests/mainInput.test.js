import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MainInput from '../MainInput';

import { stubInputProps, mockedUseSelectorValue } from './stubProps';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((initValue) => [initValue, jest.fn()]),
}));

const setUp = (props) => shallow(<MainInput {...props} />);

describe('<MainInput />', () => {
  let component;

  beforeEach(() => {
    useSelector.mockReturnValue(mockedUseSelectorValue);
    useState.mockImplementation((init) => [init, jest.fn()]);

    component = setUp(stubInputProps);
  });

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should main div has passed class', () => {
    expect(
      component.find('div').hasClass(stubInputProps.className)
    ).toBeTruthy();
  });

  describe('<input /> has correct props', () => {
    let component;
    let input;

    beforeEach(() => {
      useState.mockImplementation((init) => [true, jest.fn()]);

      component = setUp(stubInputProps);
      input = component.find('input');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should input has correct value', () => {
      expect(input.props().value).toBe(mockedUseSelectorValue);
    });

    it('should input has correct name', () => {
      expect(input.props().name).toBe(stubInputProps.name);
    });

    it('should input has correct type', () => {
      expect(input.props().type).toBe(stubInputProps.type);
    });

    it('should input has correct id', () => {
      expect(input.props().id).toBe(stubInputProps.name);
    });

    it('should input has valid class', () => {
      useState.mockImplementation(() => [false, jest.fn()]);
      component = setUp(stubInputProps);
      input = component.find('input');

      expect(input.hasClass('')).toBeTruthy();
    });

    it('should input has invalid class', () => {
      expect(input.hasClass('invalid')).toBeTruthy();
    });
  });

  it('should label has correct htmlFor props', () => {
    expect(component.find('label').props().htmlFor).toBe(stubInputProps.name);
  });

  it('should label has correct text', () => {
    expect(component.find('label').text()).toBe(stubInputProps.labelText);
  });

  it('should render helper-text with error state', () => {
    useState.mockReturnValue([true, jest.fn()]);
    const component = setUp(stubInputProps);
    expect(component.find('span').text()).toBe('');
  });
});
