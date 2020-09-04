import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import 'react-notifications/lib/notifications.css'

ReactDOM.render(<App />,
  document.getElementById('root'));
serviceWorker.unregister();

//<React.StrictMode>