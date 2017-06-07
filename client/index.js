import React from 'react';
import {render} from 'react-dom';
import App from './components/App';


render(
  <App/>,
  document.getElementById('app')
);


// Hot Module Replacement API
/*if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}*/
