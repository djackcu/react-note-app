import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItems from './SidebarItems';

class Sidebar extends React.Component {
	constructor () {
		super();
		this.state = {
			addingNote : false,
			title      : null
		};
	}

	newNoteBtnClk = () => {
		this.setState({ title: null, addingNote: !this.state.addingNote });
		console.log('new note');
	};

	updateTitle = (val) => {
		this.setState({ title: val });
	};

	newNote = () => {
		if (this.state.title) {
			this.props.newNote(this.state.title);
			this.setState({ title: null, addingNote: false });
		}
	};

	render () {
		const { notes, classes, noteSelectedIndex, selecteNote, deleteNote } = this.props;
		if (notes) {
			return (
				<div className={classes.sidebarContainer}>
					<Button onClick={this.newNoteBtnClk} className={classes.newNoteBtn}>
						{this.state.addingNote ? 'Cancel' : 'New Note'}
					</Button>
					{this.state.addingNote ? (
						<div>
							<input
								type="text"
								className={classes.newNoteInput}
								placeholder="Enter title"
								onKeyUp={(e) => {
									return e.keyCode === 13 ? this.newNote() : this.updateTitle(e.target.value);
								}}
							/>
							<Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
								Submit note
							</Button>
						</div>
					) : null}
					<List>
						{notes.map((_note, _index) => {
							return (
								<div key={_index}>
									<SidebarItems
										note={_note}
										index={_index}
										noteSelectedIndex={noteSelectedIndex}
										selecteNote={selecteNote}
										deleteNote={deleteNote}
									/>
									<Divider />
								</div>
							);
						})}
					</List>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default withStyles(styles)(Sidebar);
