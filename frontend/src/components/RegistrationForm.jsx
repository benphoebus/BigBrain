import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import axios from 'axios';
import logo from '../logo.svg';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:5005/admin/auth/register',
        data: { email: values.email, password: values.password },
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      }).then((response) => {
        // eslint-disable-next-line
        console.log(response);
      });
      // .then((response) => {
      //   localStorage.setItem('token', response.data.token);
      //   setHasAccount(!false);
      //   changeURLPath();
      // }).catch((err) => {
      //   setCustomError(err.response.data.error);
      //   setDisplayError(!false);
      // });
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
                id="register-form-name-input"
                name="name"
                type="name"
                label="Name"
                margin="normal"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <TextField
                id="register-form-email-input"
                name="email"
                type="email"
                label="Email"
                margin="normal"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextField
                id="register-form-password-input"
                name="password"
                label="Password"
                type="password"
                margin="normal"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div style={{ height: 20 }} />
              <Button
                id="signUp-button"
                type="submit"
                color="primary"
                variant="contained"
              >
                Sign Up
              </Button>
              <div style={{ height: 40 }} />
              <Button>Existing User ?</Button>
            </div>
          </form>
          <div />
        </Grid>
      </Grid>
    </>
  );
};

export default RegistrationForm;
