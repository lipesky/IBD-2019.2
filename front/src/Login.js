import React from 'react';
import './App.css';
import {
  TextField,
  Grid,
  Button
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  AccountCircle
} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function Login(props) {
  const [fields,  setFields] = React.useState({});
  const [autenticado,  setAutenticado] = React.useState(false);

  const button_component = (<Button
                              color="primary"
                              id="login-button"
                              variant="contained">
                              Entrar
                            </Button>);
  const button = autenticado ? ([(<Redirect path="/"></Redirect>),button_component]) : button_component;

  const auth = (function(){
    setAutenticado(false);
  });
  const handle_change = prop => event => {
    setFields({...fields, [prop] : event.target.value});
  } 
  return (
    
      <section className="login-container">
        <form className="login-form" method="POST" action="">
          <div className="login-input-container">
          <TextField
            label="E-mail"
            margin="normal"
            className="login-input"
            nome="email"
            value={fields.email}
            onChange={handle_change('email')}
          />
         </div>
          <div className="login-input-container">
            <TextField
             label="Senha"
             type="password"
             autoComplete="current-password"
             margin="normal"
             className="login-input"
             value={fields.senha}
             onChange={handle_change('senha')}
             />
           </div>
           <Link to="/" onClick={auth}>
             { 
              button
             }
           </Link>
        </form>
      </section>
    
  );
}

export default Login;
