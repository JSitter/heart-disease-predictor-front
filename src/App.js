import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import ChartPanel from './components/ChartPanel';
import Resources from './components/Resources';
import Footer from './components/Footer';

import './css/App.css';
import './css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Introduction />
        <ChartPanel />
        <Resources />
        <Footer />
      </div>
    );
  };
};

export default App;
