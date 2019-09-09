import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../utils/helpers';

class SidebarItems extends React.Component {
	selecteNote = (n, i) => this.props.selecteNote(n, i);
	deleteNote = (note) => {
		if (window.confirm(`Do you want delete:${note.title}`)) {
			this.props.deleteNote(note);
		}
	};

	render () {
		const { note, index, noteSelectedIndex, classes } = this.props;
		return (
			<div key={index}>
				<ListItem
					className={classes.ListItem}
					selected={noteSelectedIndex === index}
					alignItems="flex-start"
					onClick={() => this.selecteNote(note, index)}
				>
					<div className={classes.textSection}>
						<ListItemText
							primary={note.title}
							secondary={removeHTMLTags(note.body.substring(0, 30)) + '...'}
						/>
					</div>
					<DeleteIcon className={classes.deleteIcon} onClick={() => this.deleteNote(note)} />
				</ListItem>
			</div>
		);
	}
}

export default withStyles(styles)(SidebarItems);
