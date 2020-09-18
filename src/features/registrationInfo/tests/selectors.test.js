import { initialState } from '../reducers/index';
import {
  getRange,
  getBirthday,
  getLunchtime,
  getRadioAnswer,
} from '../selectors';

const state = { registrationInfo: initialState };

describe('registrationInfo selectors', () => {
  it('should getRange() runs correctly', () => {
    expect(getRange(state)).toBe('');
  });

  it('should getBirthday() runs correctly', () => {
    expect(getBirthday(state)).toBe('');
  });

  it('should getLunchtime() runs correctly', () => {
    expect(getLunchtime(state)).toBe('');
  });

  it('should getRadioAnswer() runs correctly', () => {
    expect(getRadioAnswer(state)).toBe('');
  });
});
