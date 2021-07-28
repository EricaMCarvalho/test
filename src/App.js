import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ApplicantSettings from './pages/ApplicantSettings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <ApplicantSettings />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
