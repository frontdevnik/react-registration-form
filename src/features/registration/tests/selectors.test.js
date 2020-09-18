import { initialState } from '../reducers/index';
import {
  getFirstName,
  getPhone,
  getPassword,
  getLastName,
  getEmail,
  getIsDiffPasswords,
  getRepeatPassword,
} from '../selectors';

const state = { registration: initialState };

describe('registration selectors', () => {
  it('should getFirstName() runs correctly', () => {
    expect(getFirstName(state)).toBe('');
  });

  it('should getLastName() runs correctly', () => {
    expect(getLastName(state)).toBe('');
  });

  it('should getEmail() runs correctly', () => {
    expect(getEmail(state)).toBe('');
  });

  it('should getPhone() runs correctly', () => {
    expect(getPhone(state)).toBe('');
  });

  it('should getPassword() runs correctly', () => {
    expect(getPassword(state)).toBe('');
  });

  it('should getRepeatPassword() runs correctly', () => {
    expect(getRepeatPassword(state)).toBe('');
  });

  it('should getIsDiffPasswords() runs correctly', () => {
    expect(getIsDiffPasswords(state)).toBe(false);
  });
});
