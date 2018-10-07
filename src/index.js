import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

require('font-awesome/css/font-awesome.css');
require('./index.css')


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
