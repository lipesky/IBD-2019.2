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
  Tab
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
  const [fields,  setFields] = React.useState({});
  const [tabindex,  settabindex] = React.useState(0);

  const handle_change = prop => event => {
    setFields({...fields, [prop] : event.target.value});
  } 

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
        <Typography 
          variant="h4" 
          component="h2"
          className={c.page_title}>{props.titulo}</Typography>

          <Tabs onChange={tab_click} value={tabindex}>
            <Tab label="Informações Cadastrais" />
            <Tab label="Pesquisa" />
          </Tabs>
          <Grid container index={0} hidden={tabindex!==0}>
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
              <Route path="/permissao">
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
          <Grid container index={1} hidden={tabindex!==1}>
            <Grid container item xs={12}>
            </Grid>
          </Grid>
          
      </div>
    );
}

export default PageContent;