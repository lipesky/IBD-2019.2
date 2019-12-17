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
  Container,
  ButtonGroup,
  Tabs,
  Tab,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  InputBase,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  ExpandMore,
  ExpandLess,
  Search
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
    textAlign: 'left'
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
  text_field: {
    width: '100%'
  },
  pesquisar_button:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  select_container:{
    height:60,
    padding: '0 10px'
  },
  tabs:{
    marginBottom:10
  }
}));

function get_filtros(){
  var filtros = [
                  {
                    label: 'ID',
                    value: 'id'
                  },
                ];
  if(window.location.href.includes('/produto')){
    filtros.push({
                    label: 'Descricao',
                    value: 'desc'
                  });
    filtros.push({
                    label: 'Categoria',
                    value: 'desc'
                  });

  }else if(window.location.href.includes('/venda')) {
    filtros.push({
                    label: 'Data',
                    value: 'data'
                  });
  }else if(window.location.href.includes('/categoria')) {
    filtros.push({
                    label: 'Descricao',
                    value: 'desc'
                  });
  }else if(window.location.href.includes('/permissoes')) {
    filtros.push({
                    label: 'Descricao',
                    value: 'desc'
                  });
  }else if(window.location.href.includes('/usuario')) {
    filtros.push({
                    label: 'Nome',
                    value: 'nome'
                  });
    filtros.push({
                    label: 'E-mail',
                    value: 'email'
                  });
  }

  return filtros;
}

function PageContent(props){
  const [fields,  setFields] = React.useState({});
  const [tabindex,  settabindex] = React.useState(1);
  const [filtro, setFiltro] = React.useState('id');

  const handle_change = prop => event => {
    setFields({...fields, [prop] : event.target.value});
  } 

  const filtros = get_filtros();

  const filtro_change = (function(event){
    setFiltro(event.target.value);
  });

  const tab_click = (function (event, newValue){
    settabindex(newValue);
  });

  const f_salvar = (function(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // tratamento de resposta
      }
    };
    req.open("POST", props.back_url+'/'+props.back_action, true);
    req.send("fields="+JSON.stringify(fields)+"&acao=salvar");
  }); // endfunc

  const f_cancelar = (function(){
    var tempFields = {...fields};
    for(var x in tempFields){
      tempFields[x] = '';
    }
    setFields(tempFields);
  }); // endfunc

  const f_deletar = (function(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // tratamento de resposta
      }
    };
    req.open("POST", props.back_url+'/'+props.back_action, true);
    req.send("fields="+JSON.stringify(fields)+"&acao=deletar");
  }); // endfunc

  const button_actions = (<ButtonGroup>
                            <Button onClick={f_salvar}>Salvar</Button>
                            <Button onClick={f_deletar}>Deletar</Button>
                            <Button onClick={f_cancelar}>Cancelar</Button>
                          </ButtonGroup>);

  const { classes } = props;
  const c = style();
  console.log(tabindex);
  return (
      <div className={classes}>
          <Container>
            <Typography 
              variant="h4" 
              component="h2"
              className={c.page_title}>{props.titulo}</Typography>
          </Container>
        
          <Container>
            <Tabs onChange={tab_click} value={tabindex} className={c.tabs}>
              <Tab label="Informações Cadastrais" />
              <Tab label="Pesquisa" />
            </Tabs>
          </Container>

          <Box hidden={tabindex!==0}>
            <Grid container>
              <Grid item xs={12} hidden={false}>
                <Route path="/usuario">
                  <Usuario 
                      fields_change={handle_change} 
                      fieldValues={fields}
                      button_actions={button_actions} 
                    />
                </Route>
                <Route path="/produto">
                  <Produto 
                      fields_change={handle_change} 
                      fieldValues={fields}
                      button_actions={button_actions} 
                    />
                </Route>
                <Route path="/categoria">
                  <Categoria 
                      fields_change={handle_change} 
                      fieldValues={fields}
                      button_actions={button_actions} 
                    />
                </Route>
                <Route path="/permissoes">
                  <Permissoes 
                      fields_change={handle_change} 
                      fieldValues={fields}
                      button_actions={button_actions} 
                    />
                </Route>
                <Route path="/venda">
                  <Venda 
                      fields_change={handle_change} 
                      fieldValues={fields}
                      button_actions={button_actions}  />
                </Route>    
              </Grid>
            </Grid>
          </Box>
          
          <Container hidden={tabindex!==1}>
            <Grid container spacing={2}>
              <Grid container item xs={9}>
                <FormControl className={c.text_field + ' ' + c.pesquisar}
                             variant="outlined">
                  <Grid container item xs={12}>
                    <Grid item xs={11}>
                      <TextField 
                        className={c.text_field}
                        variant="standard"
                        label="Pesquisar"
                      />
                    </Grid>
                    <Grid item xs={1} className={c.pesquisar_button}>
                      <IconButton>
                        <Search />
                      </IconButton>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl className={c.text_field + ' ' + c.pesquisar + ' '+ c.select_container}>
                    <InputLabel shrink>Filtro</InputLabel>
                    <Select 
                      label="Filtro"
                      onChange={filtro_change}
                      value={filtro}
                    >
                      {
                        filtros.map((value, index) => (
                          <MenuItem value={value.value}>{value.label}</MenuItem>))
                      }
                    </Select>
                </FormControl>
              </Grid>
              <Grid container item xs={12}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        col 1
                      </TableCell>

                      <TableCell>
                        col 2
                      </TableCell>

                      <TableCell>
                        col 3
                      </TableCell>
                    </TableRow>  
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell>
                        
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Container>
          
      </div>
    );
}

export default PageContent;