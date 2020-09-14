import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './globals/global-styles.scss';
import './globals/materialize-elements-setting';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

import AppRoutes from './router/router';

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
