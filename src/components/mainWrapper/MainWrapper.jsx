import React from 'react';

import { mainWrapper } from './mainWrapper.module.scss';

export default ({ children }) => {
  return <main className={mainWrapper}>{children}</main>;
};
