import React from 'react';
import './App.css';
import FMenu from './Menu.js';
import PageContent from './PageContent';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
		  <Route path="/usuario">
            <PageContent
			back_url={props.back_url}
			back_action="usuario"
		  	classes={classes.pageContent}
		  	titulo="Usuário"
		  	/>
          </Route>
          <Route path="/produto">
            <PageContent
			back_url={props.back_url} 
			back_action="produto"
		  	classes={classes.pageContent}
		  	titulo="Produto"
		  	/>
          </Route>
          <Route path="/categoria">
            <PageContent
			back_url={props.back_url} 
			back_action="categoria"
		  	classes={classes.pageContent}
		  	titulo="Categoria"
		  	/>
          </Route>
          <Route path="/permissoes">
            <PageContent
			back_url={props.back_url}
			back_action="permissao" 
		  	classes={classes.pageContent}
		  	titulo="Permissão"
		  	/>
          </Route>
          <Route path="/venda">
            <PageContent
			back_url={props.back_url} 
			back_action="venda"
		  	classes={classes.pageContent}
		  	titulo="Venda"
		  	/>
          </Route>
		  
		</div>
	);
}

export default App;
