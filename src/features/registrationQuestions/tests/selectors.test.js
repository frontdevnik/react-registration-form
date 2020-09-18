import { initialState } from '../reducers/index';
import {
  getSecondSelectAnswer,
  getFirstSelectAnswer,
  getThirdSelectAnswer,
} from '../selectors';

const state = { registrationQuestions: initialState };

describe('registrationQuestions selectors', () => {
  it('should getSecondSelectAnswer() runs correctly', () => {
    expect(getSecondSelectAnswer(state)).toBe('');
  });

  it('should getFirstSelectAnswer() runs correctly', () => {
    expect(getFirstSelectAnswer(state)).toBe('');
  });

  it('should getThirdSelectAnswer() runs correctly', () => {
    expect(getThirdSelectAnswer(state)).toBe('');
  });
});
