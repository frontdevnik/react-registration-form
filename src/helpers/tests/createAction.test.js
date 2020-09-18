import createActions from '../createActions';

describe('createActions', () => {
  it('should createActions return object', () => {
    const type = 'TYPE';
    const payload = 'payload';

    const action = createActions(type);
    const returnedObject = action(payload);

    expect(returnedObject).toEqual({ type, payload });
  });
});
