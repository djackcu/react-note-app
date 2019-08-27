import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Note from './components/Note';

function App() {
	return (
		<div className="App">
			<Sidebar />
      <Note />
		</div>
	);
}

export default App;
