import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItems from './SidebarItems';

class Sidebar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <div>Sidebar</div>;
	}
}

export default withStyles(styles)(Sidebar);
