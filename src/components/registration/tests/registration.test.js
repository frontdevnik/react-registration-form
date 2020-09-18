import React from 'react';

import Registration from '../Registration';

import {
  stubRegistrationProps,
  registrationLinks,
} from './stubProps';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((f) => f()),
}));

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((f) => f()),
    reset: jest.fn(),
    errors: {},
  }),
}));

jest.mock('../../../features/registration/selectors');

const setUp = (props) => mount(<Registration {...props} />);

describe('<Registration />', () => {
  let component;
  let form;

  beforeEach(() => {
    component = setUp(stubRegistrationProps);
    form = component.find('form');
  });

  it('should render correctly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should form has correct class', () => {
    expect(form.hasClass('form')).toBeTruthy();
  });

  it('should call handleSubmit on submit form', () => {
    form.simulate('submit');
    expect(stubRegistrationProps.onSubmit).toHaveBeenCalled();
  });

  it('should all inputs render correctly', () => {
    component.find('input').forEach((node, i) => {
      if (!registrationLinks[i]) {
        return;
      }

      const nodeProps = node.props();
      const { name, type, placeholder } = registrationLinks[i];

      expect(nodeProps.name).toBe(name);
      expect(nodeProps.type).toBe(type);
      expect(nodeProps.id).toBe(name);
      expect(nodeProps.placeholder).toBe(placeholder);
      node.simulate('change');
      expect(stubRegistrationProps.onSubmit).toHaveBeenCalled();
    });
  });

  it('should call submitForm on button click', () => {
    const button = component.find('button');
    button.simulate('click');
    expect(stubRegistrationProps.onSubmit).toHaveBeenCalled();
  });

  it('should render reset button', () => {
    const resetInput = component.find('input').last();
    expect(resetInput.props().value).toBe('reset');
  });
});
