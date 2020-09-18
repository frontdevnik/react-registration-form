import { validator } from '../validtaion';

describe('validator', () => {
  it('should validator return true', () => {
    const testString = 'test';
    const pattern = '';

    const returnedValue = validator(pattern, testString);

    expect(returnedValue).toBeTruthy();
  });

  it('should validator return false', () => {
    const testString = 'test';
    const pattern = '1';

    const returnedValue = validator(pattern, testString);

    expect(returnedValue).toBeFalsy();
  });
});
