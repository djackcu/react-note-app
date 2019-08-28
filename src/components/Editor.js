import React from 'react';
import ReactQuill from 'react-quill';
import debounce from './../utils/helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Editor extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <div>Editor</div>;
	}
}

export default withStyles(styles)(Editor);
