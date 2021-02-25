import React from 'react';
import LandingPage from './components/LandingPage';
import DashboardPage from './components/DashboardPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";


  function App() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/DashboardPage" component={DashboardPage} />
        
        </Switch>
      </BrowserRouter>
    </>
    )
  }
export default App;
