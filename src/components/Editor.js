import React from 'react';
import ReactQuill from 'react-quill';
import debounce from './../utils/helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			title: '',
			id: ''
		};
	}

	handleChange = async (value) => {
		await this.setState({ text: value });
		this.update();
	};

	update = debounce(() => {
		//updating database
	}, 1500);

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.editorContainer}>
				<ReactQuill value={this.state.text} onChange={this.handleChange} />
			</div>
		);
	}
}

export default withStyles(styles)(Editor);
