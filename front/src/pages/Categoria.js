import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  ButtonGroup,
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
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel
} from '@material-ui/core';

import {
  Visibility,
  VisibilityOff,
  ExpandMore,
  ExpandLess
} from '@material-ui/icons';

import { DeleteIcon } from '@material-ui/icons/Delete';
import { SaveIcon } from '@material-ui/icons/Save';

const styles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  text_field: {
    width: '100%'
  },
  select_grid_item: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

function Categoria(props){
  const classes = styles();
  return (
      <Container>
					<Grid container spacing={2}>
            
    				<Grid item sm={6}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="Descrição"            
                />
              </FormControl>
            </Grid>
            <Grid item sm={7}></Grid>
            <Grid item sm={5}>
              <ButtonGroup>
                <Button>Salvar</Button>
                <Button>Deletar</Button>
                <Button>Cancelar</Button>
              </ButtonGroup>
            </Grid>
        </Grid>
      </Container>
    );
}

export default Categoria;