import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TopBar from './components/TopBar'
import Card from './components/Card'
import Archetype from './components/Archetype';

// https://db.ygoprodeck.com/api/v7/randomcard.php"
function App() {
  const [random, setRandom] = useState();

  
  useEffect(() => {
    
    const getRandomCard = async () => {
       await fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
      .then((res) => res.json())
      .then(data => {
        setRandom(data)
      }
      )
    }
    getRandomCard()
  },[])


  return (
    <Router>
      <Switch>
        <Route path="/archetype">
            <TopBar/>
            <Archetype/>
        </Route>
        <Route path="/">
          <TopBar/>
          <Home/>
          <Card random={random}/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
