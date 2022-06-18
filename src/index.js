import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { Provider } from './Context/Context'

ReactDOM.render(
  <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_ID}>
    <Provider>
      <App />
    </Provider> 
  </SpeechProvider>,
  document.getElementById('root')
);
