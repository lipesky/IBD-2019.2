import React from 'react';
import '../App.css';
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
  Container,
  TextField,
  Select
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  ExpandMore,
  ExpandLess
} from '@material-ui/icons';

const styles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

function Produto(props){
  const classes = styles();
  return (
      <Container>

        <Grid>
          <TextField 
            label="Descrição"            
          />
          <TextField 
            label="EAN"            
          />
          <Select 
            label="Categoria"
          />
          <TextField 
            label="Peso"            
          />
          <TextField 
            label="Unidade"            
          />
          <TextField 
            label="Preço"            
          />
          <TextField 
            label="Descrição"            
          />
          <TextField 
            label="Descrição"            
          />
        </Grid>
      </Container>
    );
}

export default Produto;