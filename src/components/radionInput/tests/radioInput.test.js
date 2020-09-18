import React from 'react';

import RadioInput from '../RadioInput';

import { radioInputProps } from './stubProps';

describe('<RadioInput />', () => {
  const component = shallow(<RadioInput {...radioInputProps} />);

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should input name is correct', () => {
    expect(component.find('input').props().name).toBe(radioInputProps.name);
  });

  it('should input type is correct', () => {
    expect(component.find('input').props().type).toBe('radio');
  });

  it('should render span with correct text', () => {
    expect(component.find('span').text()).toBe(radioInputProps.text);
  });
});
