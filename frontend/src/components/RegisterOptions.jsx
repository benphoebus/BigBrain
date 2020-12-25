import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Options.css';

function RegisterOptions() {
  const history = useHistory();

  const Login = () => {
    history.push('/login');
  };

  return (
    <div>
      <Button className="option-button" onClick={Login}>Existing User</Button>
    </div>
  );
}

export default RegisterOptions;
