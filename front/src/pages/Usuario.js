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
  InputLabel,
  Checkbox
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
  },
  FormControl: {
    width: '100%'
  },
  grid_permissoes:{
    width: '100%'
  },
  permissions_item_text:{
    textAlign: 'left'
  },
  permissions_title:{
    marginTop: 50,
    marginBottom: 25
  }
}));

function Usuario(props){
  const classes = styles();
  const permissions = ['Vendas - Realizar',
                       'Vendas - Consultar',
                       'Usuarios - Cadastrar',
                       'Usuarios - Permissoes']
  return (
      <Container>
					<Grid container spacing={2}>
    				<Grid item sm={6}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="Usuario"            
                />
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  label="E-mail"            
                />
              </FormControl>
            </Grid>
            <Grid item sm={3}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  type="password"
                  autoComplete="current-password"
                  label="Senha"            
                />
              </FormControl>
            </Grid>
            <Grid item sm={3}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  type="password"
                  autoComplete="current-password"
                  label="Telefone"
                />
              </FormControl>
            </Grid>
            <Grid item sm={3}>
              <FormControl className={classes.text_field}>
                <TextField 
                  className={classes.text_field}
                  type="password"
                  autoComplete="current-password"
                  label="CPF"
                />
              </FormControl>
            </Grid>
            <Grid item 
                  container 
                  sm={3}
                  alignItems="center"
                  justify="flex-start"
                  spacing={2}>
                  
              <Grid item sm={2}>
                <Checkbox />
              </Grid>
              <Grid item 
                    sm={10}
                    justify="flex-start">
                <Typography className={classes.permissions_item_text}>É Vendedor?</Typography>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <FormControl className={classes.FormControl}>
                <Grid container className={classes.grid_permissoes}>
                  <Grid item xs={12}>
                    <Typography component="h5" variant="h5" className={classes.permissions_title}>
                      Permissões
                    </Typography>
                  </Grid>
                  {
                    permissions.map((value, index) => (
                        <Grid item container 
                              sm={3}
                              alignItems="center"
                              justify="flex-start"
                              spacing={2}>
                          <Grid item sm={2}>
                            <Checkbox />
                          </Grid>
                          <Grid item 
                                sm={10}
                                justify="flex-start">
                            <Typography className={classes.permissions_item_text}>{value}</Typography>
                          </Grid>
                        </Grid>
                      ))
                  }
                </Grid>
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

export default Usuario;