import React from 'react';
import MainWrapper from '../MainWrapper';

import { mainWrapper } from './mainWrapper.module.scss';

const StubComponent = () => <h1>Stub</h1>;

describe('<MainWrapper />', () => {
  const component = shallow(<MainWrapper children={<StubComponent />} />);

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should has correct className', () => {
    expect(component.hasClass(mainWrapper)).toBeTruthy();
  });

  it('should render children', () => {
    expect(component.find(StubComponent).length).toBe(1);
  });
});
