import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Hidden,
  Container
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  ExpandMore,
  ExpandLess
} from '@material-ui/icons';
import Produto from './pages/Produto';
import Categoria from './pages/Categoria';
import Usuario from './pages/Usuario';
import Permissoes from './pages/Permissoes';
import Venda from './pages/Venda';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const style = makeStyles(theme => ({
  page_title:{
    textAlign: 'left',
    padding: '0 5%'
  }
}));

function PageContent(props){
  const { classes } = props;
  const c = style();
  return (
      <div className={classes}>
        <Typography 
          variant="h4" 
          component="h2"
          className={c.page_title}>{props.titulo}</Typography>

          <Route path="/usuario">
            <Usuario />
          </Route>
          <Route path="/produto">
            <Produto />
          </Route>
          <Route path="/categoria">
            <Categoria />
          </Route>
          <Route path="/permissao">
            <Permissoes />
          </Route>
          <Route path="/venda">
            <Venda />
          </Route>
      </div>
    );
}

export default PageContent;