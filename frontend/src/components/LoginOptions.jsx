import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Options.css';

function LoginOptions() {
  const history = useHistory();

  const Register = () => {
    history.push('/register');
  };

  return (
    <div>
      <Button className="option-button" onClick={Register}>Create an Account</Button>
    </div>
  );
}

export default LoginOptions;
