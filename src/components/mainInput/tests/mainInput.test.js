import React from 'react';

import MainInput from '../MainInput';

import { stubInputProps } from './stubProps';

const setUp = (props) => shallow(<MainInput {...props} />);

describe('<MainInput />', () => {
  let component;

  beforeEach(() => {
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
      component = setUp(stubInputProps);
      input = component.find('input');
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
      component = setUp({ ...stubInputProps, error: '' });
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
    expect(component.find('span').text()).toBe(stubInputProps.error);
  });
});
