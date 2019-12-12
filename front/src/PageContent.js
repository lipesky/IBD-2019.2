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
        {
          //<Produto />
          //<Categoria />
          <Usuario />
          //<Permissoes />
        }
      </div>
    );
}

export default PageContent;