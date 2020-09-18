import React from 'react';

import RadioInput from "../../radionInput";
import RadioGroup from '../RadioGroup';

import { radioGroupsProps } from './stubProps';

describe('<RadioGroup />', () => {
  const component = mount(<RadioGroup {...radioGroupsProps} />);

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });
  
  it('should elements display correctly', () => {
    expect(component.find(RadioInput).length).toBe(radioGroupsProps.values.length);
  });
});
