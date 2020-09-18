import { mount } from 'enzyme';
import React from 'react';

import RegistrationInfo from '../RegistrationInfo';

import { stubRegistrationInfoProps, registrationInfoLinks } from './stubProps';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((f) => f()),
}));

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((f) => f()),
    errors: {},
  }),
}));

jest.mock('../../../features/registrationInfo/selectors');

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
    expect(stubRegistrationInfoProps.onSubmit).toHaveBeenCalled();
  });

  it('should all inputs render correctly', () => {
    component.find('input').forEach((node, i) => {
      if (!registrationInfoLinks[i]) {
        return;
      }

      const nodeProps = node.props();
      const { name, type, placeholder } = registrationInfoLinks[i];

      expect(nodeProps.name).toBe(name);
      expect(nodeProps.type).toBe(type);
      expect(nodeProps.id).toBe(name);
      expect(nodeProps.placeholder).toBe(placeholder);
    });
  });

  it('should call submitForm on button click', () => {
    const button = component.find('button');
    button.simulate('click');
    expect(stubRegistrationInfoProps.onSubmit).toHaveBeenCalled();
  });
});
