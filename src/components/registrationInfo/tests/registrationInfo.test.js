import { mount } from 'enzyme';
import React from 'react';

import RegistrationInfo from '../RegistrationInfo';

import {
  stubRegistrationInfoProps,
  defaultValue,
  registrationInfoLinks,
} from './stubProps';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 'default value'), // defaultValue
}));

const setUp = (props) => mount(<RegistrationInfo {...props} />);

describe('<RegistrationInfo />', () => {
  let component;
  let form;

  beforeEach(() => {
    component = setUp(stubRegistrationInfoProps);
    form = component.find('form');
  });

  it('should form has correct class', () => {
    expect(form.hasClass('form')).toBeTruthy();
  });

  it('should call handleSubmit on submit form', () => {
    form.simulate('submit');
    expect(stubRegistrationInfoProps.handleSubmit).toHaveBeenCalled();
  });

  it('should all inputs render correctly', () => {
    component.find('input').forEach((node, i) => {
      const nodeProps = node.props();
      const { name, type, placeholder } = registrationInfoLinks[i];

      expect(nodeProps.name).toBe(name);
      expect(nodeProps.type).toBe(type);
      expect(nodeProps.id).toBe(name);
      expect(nodeProps.value).toBe(defaultValue);
      expect(nodeProps.placeholder).toBe(placeholder);
    });
  });

  it('should call submitForm on button click', () => {
    const button = component.find('button');
    button.simulate('click');
    expect(stubRegistrationInfoProps.handleSubmit).toHaveBeenCalled();
  })
});
