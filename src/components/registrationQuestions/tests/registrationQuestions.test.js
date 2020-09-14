import { mount } from 'enzyme';
import React from 'react';

import RegistrationQuestions from '../RegistrationQuestions';

import { stubRegistrationQuestionsProps } from './stubProps';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 'default value'), // defaultValue
}));

const setUp = (props) => render(<RegistrationQuestions {...props} />);

describe('<RegistrationQuestions />', () => {
  it('should render correctly', () => {
    const component = setUp(stubRegistrationQuestionsProps);
    expect(component.html()).toMatchSnapshot();
  });
});
