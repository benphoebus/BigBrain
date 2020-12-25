import React from 'react';
import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm';
// import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

function LoginScreen() {
  return (
    <div>
      <LoginHeader />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginScreen;
