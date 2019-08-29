import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');
const dotenv = require('dotenv');
dotenv.config();

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_CONFIG_DATABASEURL,
	projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
