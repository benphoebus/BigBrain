import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/admin" component={DashboardScreen} />
      </Switch>
    </Router>
  );
}

export default App;
