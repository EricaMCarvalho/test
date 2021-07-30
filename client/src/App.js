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
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/test/applicant-settings'>
            <ApplicantSettings />
          </Route>
          <Route exact path='/test/evaluation-settings'>
            <EvaluationSettings />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
