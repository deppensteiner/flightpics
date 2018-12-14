import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

require('@fortawesome/fontawesome-free/css/all.min.css');
require('./index.css');
require('./small.css');

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
