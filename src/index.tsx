import * as React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const { AppContainer } = require('react-hot-loader');

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

declare var module: { hot: any };


if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./components/App').default;

    // And render it into the root element again
    render(
      <AppContainer>
         <NextApp/>
      </AppContainer>,
      rootEl
    );
  })
}