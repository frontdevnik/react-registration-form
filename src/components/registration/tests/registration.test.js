import React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import enzyme, { shallow, mount, render } from 'enzyme';

import Registration from '../Registration';

import {
  stubRegistrationProps,
  defaultValue,
  onChange,
  registrationLinks,
} from './stubProps';

// const mockStore = createMockStore();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 'default value'), // defaultValue
}));

const setUp = (props) =>
  mount(
    // <Provider store={mockStore()}>
    <Registration {...props} />
    //</Provider>
  );

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
    expect(stubRegistrationProps.handleSubmit).toHaveBeenCalled();
  });

  it('should all inputs render correctly', () => {
    component.find('input').forEach((node, i) => {
      const nodeProps = node.props();
      const {name, type, placeholder } = registrationLinks[i];

      expect(nodeProps.name).toBe(name);
      expect(nodeProps.type).toBe(type);
      expect(nodeProps.id).toBe(name);
      expect(nodeProps.value).toBe(defaultValue);
      expect(nodeProps.placeholder).toBe(placeholder);
      node.simulate('change');
      expect(stubRegistrationProps.handleInput).toHaveBeenCalled();
    });
  });

  it('should call submitForm on button click', () => {
    const button = component.find('button');
    button.simulate('click');
    expect(stubRegistrationProps.handleSubmit).toHaveBeenCalled();
  })
});
