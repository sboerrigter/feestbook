import * as firebase from 'firebase';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import env from './env.js';

firebase.initializeApp(env.firebase);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
