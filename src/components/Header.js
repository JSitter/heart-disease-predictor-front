import React, { Component } from 'react';

import '../css/Header.scss';

class Header extends Component {

  render(){
    return(
      <header>
        <img src="/imgs/public-domain-heart.png" alt="Without a heart, you'd have a hard time in the morning."/>
        
        <h1>Heart Disease: The World's Leading Killer</h1>
      </header>
    );
  };

};

export default Header;