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
         <Button
          color="primary"
          id="login-button"
          variant="contained">
          Entrar
        </Button>
      </form>
    </section>
  );
}

export default Login;
