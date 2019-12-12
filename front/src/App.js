import React from 'react';
import './App.css';
import FMenu from './Menu.js';
import PageContent from './PageContent';
import { makeStyles } from '@material-ui/core/styles';
const drawer_width = 300;

const styles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  pageContent: {
    marginRight: drawer_width,
    padding: '2% 0'
  }
}));

function App(props) {
	const classes = styles();

	return (
		<div className="App">
		  <FMenu menu={props.data.menu} />
		  <PageContent 
		  	classes={classes.pageContent}
		  	titulo="Produto"
		  	/>
		</div>
	);
}

export default App;
