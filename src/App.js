import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Alert from 'react-bootstrap/Button';
import Toolbar from './ToolbarMenu/Toolbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import TravelDashboard from './TravelDashboard/TravelDashboard';
import AboutUs from './About/About';

export default function App() {
  return (
    <Router>
      <div className='body'>
      
        <Toolbar></Toolbar>

        <Switch>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/plan">
            <TravelDashboard />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

