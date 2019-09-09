import React from 'react';
import ReactQuill from 'react-quill';
import debounce from './../utils/helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Editor extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			text  : '',
			title : '',
			id    : ''
		};
	}
	componentDidMount = () => {
		this.setState({
			text  : this.props.noteSelected.body,
			title : this.props.noteSelected.title,
			id    : this.props.noteSelected.id
		});
	};
	componentDidUpdate = () => {
		if (this.props.noteSelected.id !== this.state.id) {
			this.setState({
				text  : this.props.noteSelected.body,
				title : this.props.noteSelected.title,
				id    : this.props.noteSelected.id
			});
		}
	};

	updateBody = async (value) => {
		await this.setState({ text: value });
		this.update();
	};

	updateTitle = async (title) => {
		await this.setState({ title });
		this.update();
	};

	update = debounce(() => {
		//updating database
		this.props.updateNote(this.state.id, { title: this.state.title, body: this.state.text });
	}, 1500);

	render () {
		const { classes } = this.props;
		return (
			<div className={classes.editorContainer}>
				<BorderColorIcon className={classes.editIcon} />
				<input
					className={classes.titleInput}
					placeholder="Note title..."
					value={this.state.title ? this.state.title : ''}
					onChange={(e) => this.updateTitle(e.target.value)}
				/>
				<ReactQuill value={this.state.text} onChange={this.updateBody} />
			</div>
		);
	}
}

export default withStyles(styles)(Editor);
