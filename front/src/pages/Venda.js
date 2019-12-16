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
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  ButtonGroup,
  InputBase,

  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow
} from '@material-ui/core';

import {
  Visibility,
  VisibilityOff,
  ExpandMore,
  ExpandLess,
  ArrowBack,
  Search
} from '@material-ui/icons';

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
  column_title:{
    fontSize: '1.3em',
    fontWeight: 'bold',
    marginBottom: 25
  },
  quantidade:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 22
  },
  pesquisar:{
    marginBottom: 10,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    paddingLeft: 12,
    transition: theme.transitions.create(['border-color', 'box-shadow'])
  },
  pesquisar_text:{
    width: 'calc(100% - 40px)'
  },
  pesquisar_button:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },

}));

function Venda(props){

  const classes = styles();

  return (
      <Container>
          <Grid container spacing={6}>
            
            <Grid container item sm={6}>
              <Grid item xs={12}>
                <Typography className={classes.column_title}>Items da Venda</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.text_field}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Código
                        </TableCell>
                        <TableCell>
                          Descrição
                        </TableCell>
                        <TableCell>
                          Quantidade
                        </TableCell>
                        <TableCell>
                          Preço
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>

                    </TableBody>
                  </Table>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container item sm={6}>
              <Grid item xs={12}><Typography className={classes.column_title}>Adicionar produtos</Typography></Grid>
              <Grid item xs={12}>
                <FormControl className={classes.text_field + ' ' + classes.pesquisar}
                             variant="outlined">
                  <Grid container item xs={12}>
                    <Grid item xs={10}>
                      <TextField 
                        className={classes.text_field}
                        variant="standard"
                        label="Pesquisar"
                      />
                    </Grid>
                    <Grid item xs={2} className={classes.pesquisar_button}>
                      <IconButton>
                        <Search />
                      </IconButton>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary">
                    <ArrowBack />
                    <Typography>Adicionar</Typography>
                </Button>
              </Grid>
              <Grid item xs={8} className={classes.quantidade}>
                <FormControl className={classes.text_field}>
                  <TextField 
                    className={classes.text_field}
                    label="Quantidade"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.text_field}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Código
                        </TableCell>
                        <TableCell>
                          Descrição
                        </TableCell>
                        <TableCell>
                          Preço
                        </TableCell>
                        <TableCell>
                          Saldo
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>

                    </TableBody>
                  </Table>
                </FormControl>
              </Grid>
              
            </Grid>

            <Grid item sm={7}></Grid>
            <Grid item sm={5}>
              { props.button_actions }
            </Grid>
        </Grid>
      </Container>
    );
}

export default Venda;