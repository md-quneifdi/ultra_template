import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Main from './Components/Main/Main';

class App extends Component {
  render() { 
    return (
      <Router>
        {/** Navbar components is just contain the two links (Home-Contact) */}
          <Navbar /> 
          <Route exact path="/" component={Main} />
          <Route path="/contact" component={Contact} />        
      </Router>
    );
  }
}

export default App;
