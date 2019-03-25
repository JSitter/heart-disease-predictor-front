import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {

  componentDidMount(){
    let nav = document.getElementById('main-nav');
    window.addEventListener('scroll', (e)=>{
      this.handleScroll(e, nav)
    });
  }

  handleScroll(e, nav){
    // console.log("Handle Scroll", nav)
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
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
    )
  }

}

export default NavBar;