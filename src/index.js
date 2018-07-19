import * as firebase from 'firebase';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyB9mcJm0lcxdrSkl3LjCjYhX7i6qEo_TRM",
  authDomain: "feestbook-e645f.firebaseapp.com",
  databaseURL: "https://feestbook-e645f.firebaseio.com",
  projectId: "feestbook-e645f",
  storageBucket: "feestbook-e645f.appspot.com",
  messagingSenderId: "712269568004"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
