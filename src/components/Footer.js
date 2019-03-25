import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 >Support open Source</h5>
              <p>
                View the project on <a href="https://github.com/JSitter/heart-disease-predictor-front">
                GitHub
                </a>
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>Links</h5>
              <ul>
                <li><a href="https://www.kaggle.com/panfritters/uci-heart-disease-dataset">Explore The Heart Predictor Model on Kaggle</a></li>
                <li><a href="https://www.cdc.gov/nchs/nvss/deaths.htm">Centers for Disease Control</a></li>
                <li><a href="https://www.who.int/healthinfo/mortality_data/en/">WHO World Mortality Data</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;