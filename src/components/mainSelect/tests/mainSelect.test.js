import React from 'react';

import MainSelect from '../MainSelect';

import { stubSelectProps } from './stubProps';

const setUp = (props) => shallow(<MainSelect {...props} />);

describe('<MainSelect />', () => {
  let component;
  let options;

  beforeEach(() => {
    component = setUp(stubSelectProps);
    options = component.find('option');
  });

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should main div has correct class', () => {
    expect(component.find('div').hasClass('input-field col s12')).toBeTruthy();
  });

  it('should select has name', () => {
    expect(component.find('select').props().name).toBe(stubSelectProps.name);
  });

  it('first option should render correctly', () => {
    expect(options.first().props().value).toBe('');
    expect(options.first().props().disabled).toBeDefined();
    expect(options.first().props().selected).toBeDefined();
  });

  it('all options should render correctly', () => {
    expect(options.length).toBe(stubSelectProps.options.length + 1);

    expect(options.at(1).props().value).toBe(stubSelectProps.options[0].value);
    expect(options.at(1).text()).toBe(stubSelectProps.options[0].text);

    expect(options.at(2).props().value).toBe(stubSelectProps.options[1].value);
    expect(options.at(2).text()).toBe(stubSelectProps.options[1].text);
  });

  it('should label render mainText correctly', () => {
    expect(component.find('label').text()).toBe(stubSelectProps.mainText);
  });
});
