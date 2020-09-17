import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage'
// import Alert from 'react-bootstrap/Button';
function App() {
  return (
    <div className="shopping-list">
      <h1>Here start Landing Page component</h1>
      <LandingPage></LandingPage>
 <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  </div>
  );
}

export default App;
