import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import ChartPanel from './components/ChartPanel';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Predictor from './components/Predictor';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/App.css';
import './css/materialize.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      predictor : false
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <NavBar />
          <Route path='/predictor' component={Predictor}/>
          <Route exact path='/' component={Introduction}/>
          <Route exact path='/' component={ChartPanel}/>
          <Resources />
        </BrowserRouter>
        <Footer />

      </div>
    );
  };
};

export default App;
