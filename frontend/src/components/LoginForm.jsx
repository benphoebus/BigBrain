import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import logo from '../logo.svg';
import './LoginForm.css';

function LoginForm() {
  return (
    <>
      <Grid container id="main-container">
        <Grid
          container
          item
          id="inner-container"
        >
          <div />
          <div id="form-container">
            <Grid container id="form-image">
              <img src={logo} width={300} alt="brand-two" />
            </Grid>
            <TextField label="Username" margin="normal" />
            <TextField label="Password" margin="normal" />
            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained" id="login-button">
              Log In
            </Button>
            <div style={{ height: 40 }} />
            <Button>Create an Account</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </>
  );
}

export default LoginForm;
