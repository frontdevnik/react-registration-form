import React from 'react';

import RegistrationQuestions from '../RegistrationQuestions';

import { stubRegistrationQuestionsProps } from './stubProps';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((f) => f()),
}));

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((f) => f),
    reset: jest.fn(),
    errors: {},
  }),
}));

jest.mock('../../../features/registrationQuestions/selectors');

const setUp = (props) => render(<RegistrationQuestions {...props} />);

describe('<RegistrationQuestions />', () => {
  it('should render correctly', () => {
    const component = setUp(stubRegistrationQuestionsProps);
    expect(component.html()).toMatchSnapshot()
  });
});
