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
  Link
} from "react-router-dom";


function Login() {
  return (
    
      <section className="login-container">
        <form className="login-form" method="POST" action="">
          <div className="login-input-container">
          <TextField
            label="E-mail"
            margin="normal"
            className="login-input"
          />
         </div>
          <div className="login-input-container">
            <TextField
             label="Senha"
             type="password"
             autoComplete="current-password"
             margin="normal"
             className="login-input"
             />
           </div>
           <Link to="/">
             <Button
              color="primary"
              id="login-button"
              variant="contained">
              Entrar
            </Button>
           </Link>
        </form>
      </section>
    
  );
}

export default Login;
