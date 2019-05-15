import React, { Component } from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  componentDidMount(){
    let nav = document.getElementById('main-nav');
    window.addEventListener('scroll', (e)=>{
      this.handleScroll(e, nav)
    });
  }

  viewPredictor(){

  }

  handleScroll(e, nav){

    if(e.pageY >= 815){
      if(!nav.classList.contains('sticky')){
        nav.classList.add('sticky');
      }
      
    }else{
      if(nav.classList.contains('sticky')){
        nav.classList.remove('sticky');
      }
    }
    
  }

  render(){
    return(
        <nav id='main-nav'>
          <div className="nav-wrapper">
            <a href="#" className="nav-link"><Link to="/predictor">Heart Disease Prediction</Link></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="https://www.kaggle.com/panfritters/uci-heart-disease-dataset" onClick={()=>{
              console.log("This part coming soon!")
              }}>View Descriptive Notebook</a></li>
            
            </ul>
          </div>
        </nav>
    )
  }

}

export default NavBar;