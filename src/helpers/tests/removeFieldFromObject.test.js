import {removeFieldFromObject} from '../removeFieldFromObject';

describe('removeFieldFromObject', () => {
  it('should removeFieldFromObject return object without selected fields', () => {
    const initialObject = {
      name: 'name',
      age: 1,
    };
    const returnedObject = removeFieldFromObject(initialObject, 'age');

    expect(returnedObject).toEqual({ name: 'name' });
  });
});
