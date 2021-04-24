import React from 'react';
import './App.css';
import About from './Components/About';
import Shop from './Components/Shop';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
     </Switch>
    </div>
    </Router>
  );
}

const Home = () =>{
  <div>
    <h1>Home</h1>
  </div>
}

export default App;
