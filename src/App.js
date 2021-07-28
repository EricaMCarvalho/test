import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ApplicantSettings from './pages/ApplicantSettings';
import EvaluationSettings from './pages/EvaluationSettings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path='/1'>
          <ApplicantSettings />
        </Route>
        <Route exact path='/'>
          <EvaluationSettings />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
