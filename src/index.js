import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase/app');
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyB2sNn-vDKmn6h3xC5ItYB0J-GOij9fVyA',
	authDomain: 'evernote-clone-7f9bf.firebaseapp.com',
	databaseURL: 'https://evernote-clone-7f9bf.firebaseio.com',
	projectId: 'evernote-clone-7f9bf',
	storageBucket: 'evernote-clone-7f9bf.appspot.com',
	messagingSenderId: '275079702057',
	appId: '1:275079702057:web:d7bd14404efb06e1'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
