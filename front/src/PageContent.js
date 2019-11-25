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
import Produto from './pages/Produto'
function PageContent(props){

  return (
      <Produto />
    );
}

export default PageContent;