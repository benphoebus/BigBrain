import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import CreateNewQuizScreen from './screens/CreateNewQuizScreen';
import './App.css';

function App() {
  return (
    <Router>
      {/* <LoginHeader /> */}
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/register" component={RegistrationScreen} />
        <Route path="/admin" component={DashboardScreen} />
        <Route path="/create-quiz" component={CreateNewQuizScreen} />
      </Switch>
    </Router>
  );
}

export default App;
