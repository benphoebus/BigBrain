import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import logo from '../logo.svg';
import AuthOptions from './LoginOptions';
import AdminPage from './AdminPage';
import './LoginForm.css';

function LoginForm() {
  const [hasAccount, setHasAccount] = useState(false);
  const history = useHistory();

  const changeURLPath = () => {
    history.push('/admin');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // eslint-disable-next-line
      axios({
        method: 'post',
        url: 'http://127.0.0.1:5005/admin/auth/login',
        data: { email: values.email, password: values.password },
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      }).then((response) => {
        // eslint-disable-next-line
        console.log(response);
        setHasAccount(!false);
        localStorage.setItem('token', response.data.token);
        changeURLPath();
      }).catch((err) => {
        // setCustomError(err.response.data.error);
        // setDisplayError(!false);
        // eslint-disable-next-line
        console.log(err);
      });
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Email Required';
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]+$/i.test(values.email)) {
        errors.email = 'Invalid email - requires @';
        // email validation regex above was taken from StackOverflow - https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
      }
      if (!values.password) {
        errors.password = 'Password Required';
      }
      return errors;
    },
  });

  return (
    <>
      {hasAccount ? (
        <AdminPage />
      ) : (
        <>
          <Grid container id="main-container">
            <Grid
              container
              item
              id="inner-container"
            >
              <div />
              <form onSubmit={formik.handleSubmit}>
                <div id="form-container">
                  <Grid container id="form-image">
                    <img src={logo} width={400} alt="brand-logo" />
                  </Grid>
                  <TextField
                    id="login-form-email-input"
                    name="email"
                    type="email"
                    label="Email"
                    margin="normal"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <TextField
                    id="login-form-password-input"
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div style={{ height: 20 }} />
                  <Button
                    id="login-button"
                    type="submit"
                    color="primary"
                    variant="contained"
                  >
                    Log In
                  </Button>
                  <div style={{ height: 40 }} />
                  {/* <Button>Create an Account</Button> */}
                  <AuthOptions />
                </div>
              </form>
              <div />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default LoginForm;
