import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

const firebase = require('firebase');

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectednoteIndex: null,
			selectedNote: null,
			notes: null
		};
	}

	componentDidMount = () => {
		firebase.firestore().collection('notes').onSnapshot((serverUpdate) => {
			const notes = serverUpdate.docs.map((_doc) => {
				const data = _doc.data();
				data['id'] = _doc.id;
				return data;
			});
			console.log(notes);
			this.setState({ notes: notes });
		});
	};

	render() {
		return (
			<div className="App">
				<Sidebar />
				<Editor />
			</div>
		);
	}
}

export default App;
