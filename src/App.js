import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

const firebase = require('firebase');

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			noteSelectedIndex : null,
			noteSelected      : null,
			notes             : null
		};
	}

	componentDidMount = () => {
		firebase.firestore().collection('notes').onSnapshot((serverUpdate) => {
			const notes = serverUpdate.docs.map((_doc) => {
				const data = _doc.data();
				data['id'] = _doc.id;
				return data;
			});
			//	console.log(notes);
			this.setState({ notes: notes });
		});
	};

	selectNote = (note, index) => this.setState({ noteSelectedIndex: index, noteSelected: note });

	deleteNote = async (note) => {
		const noteIndex = this.state.notes.indexOf(note);
		await this.setState({ notes: this.state.notes.filter((_note) => _note !== note) });
		if (this.state.noteSelectedIndex === noteIndex) {
			this.setState({ noteSelectedIndex: null, noteSelected: null });
		} else {
			this.state.notes.length > 1
				? this.selectNote(this.state.notes[this.state.noteSelectedIndex - 1], this.state.noteSelectedIndex - 1)
				: this.setState({ noteSelectedIndex: null, noteSelected: null });
		}

		firebase.firestore().collection('notes').doc(note.id).delete();
	};

	updateNote = (id, noteObj) => {
		firebase.firestore().collection('notes').doc(id).update({
			title     : noteObj.title,
			body      : noteObj.body,
			timestamp : firebase.firestore.FieldValue.serverTimestamp()
		});
	};

	newNote = async (title) => {
		const note = {
			title : title,
			body  : ''
		};
		const newFromDB = await firebase.firestore().collection('notes').add({
			title     : note.title,
			body      : note.body,
			timestamp : firebase.firestore.FieldValue.serverTimestamp()
		});
		const newID = newFromDB.id;
		await this.setState({
			notes : [
				...this.state.notes,
				note
			]
		});
		const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter((_note) => _note.id === newID)[0]);
		this.setState({ noteSelected: this.state.notes[newNoteIndex], noteSelectedIndex: newNoteIndex });
	};

	render () {
		return (
			<div className="App">
				<Sidebar
					noteSelectedIndex={this.state.noteSelectedIndex}
					notes={this.state.notes}
					selecteNote={this.selectNote}
					deleteNote={this.deleteNote}
					newNote={this.newNote}
				/>
				{this.state.noteSelected ? (
					<Editor
						noteSelected={this.state.noteSelected}
						noteSelectedIndex={this.state.noteSelectedIndex}
						updateNote={this.updateNote}
						notes={this.state.notes}
					/>
				) : null}
			</div>
		);
	}
}

export default App;
