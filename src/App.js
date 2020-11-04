import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import TopBar from './components/TopBar'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <TopBar/>
          <Home/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
