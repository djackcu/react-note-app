import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItems from './SidebarItems';

class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			addingNote: false,
			title: null
		};
	}

	newNoteBtnClk = () => {
		this.setState({ title: null, addingNote: !this.state.addingNote });
		console.log('new note');
	};

	updateTitle = (val) => {
		console.log(val);
	};

	render() {
		const { notes, classes, selectedNoteIndex } = this.props;
		return (
			<div className={classes.sidebarContainer}>
				<Button onClick={this.newNoteBtnClk} className={classes.newNoteBtn}>
					New Note
				</Button>
				{this.state.addingNote ? (
					<div>
						<input
							type="text"
							className={classes.newNoteInput}
							placeholder="Enter title"
							onKeyUp={(e) => this.updateTitle(e.target.value)}
						/>
					</div>
				) : null}
			</div>
		);
	}
}

export default withStyles(styles)(Sidebar);
