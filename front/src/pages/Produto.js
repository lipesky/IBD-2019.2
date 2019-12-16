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

function Produto(props){
  const classes = styles();
  return (
      <Container>
					<Grid container spacing={2}>
            
    				<Grid item sm={6}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="Descrição"
                  onChange={props.fields_change('desc')}
                  value={props.fieldValues.desc}
                />
              </FormControl>
            </Grid>

            <Grid item sm={3}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="EAN"
                  onChange={props.fields_change('ean')}
                  value={props.fieldValues.ean}           
                />
  					 </FormControl>
            </Grid>

            <Grid item sm={3}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="Preço"            
                  onChange={props.fields_change('preco')}
                  value={props.fieldValues.preco}
                />
  					  </FormControl>
            </Grid>

    				<Grid item sm={4} className={classes.select_grid_item}>
              <FormControl className={classes.text_field}>
                <InputLabel shrink>Categoria</InputLabel>
                <Select 
                  className={classes.text_field}
                  label="Categoria"
                  onChange={props.fields_change('categoria')}
                  value={props.fieldValues.categoria == undefined ? '' : props.fieldValues.categoria}
                >
                  <MenuItem value="">Nenhuma</MenuItem>
                  <MenuItem value={1}>Item 1</MenuItem>
                  <MenuItem value={2}>Item 2</MenuItem>
                  <MenuItem value={3}>Item 3</MenuItem>
                </Select>
                {/*<FormHelperText>Categoria</FormHelperText>*/}
  					  </FormControl>
            </Grid>

  					<Grid item sm={4}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="Peso"
                  onChange={props.fields_change('peso')}
                  value={props.fieldValues.peso}          
                />
  					  </FormControl>
            </Grid>

    				<Grid item sm={4}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="Unidade"
                  onChange={props.fields_change('unidade')}
                  value={props.fieldValues.unidade}        
                />
  					 </FormControl>
            </Grid>

            <Grid item sm={7}></Grid>
            <Grid item sm={5}>
              { props.button_actions }
            </Grid>
        </Grid>
      </Container>
    );
}

export default Produto;