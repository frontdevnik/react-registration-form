import omit from 'lodash/omit';

export const removeFieldFromObject = (object, prop) => omit(object, prop);
