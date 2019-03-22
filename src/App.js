import React, { Component } from 'react';
import './css/App.css';
import './css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src="/imgs/public-domain-heart.png" alt="Without a heart, you'd have a hard time in the morning."/>
          <h1>Heart Disease: The World's Leading Killer</h1>
        </header>

        <nav>
          <div className="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <section className="long-descriptive img-float-right">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src='https://source.unsplash.com/350x500/?anatomical-heart' alt="Your heart is special."/>
        </section>

        <section className="chart-panel">
          <h2>World Statistics</h2>
          <h3>Chart One Title</h3>
          <div className="chart"></div>
          <p className="chart-description">This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>
          <h3>Chart Two Title</h3>
          <div className="chart"></div>
          <p className="chart-description">This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>

          <h2>US Stastics</h2>
          <h3>Chart One Title</h3>
          <div className="chart"></div>
          <p className="chart-description">This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>
          <h3>Chart Two Title</h3>
          <div className="chart"></div>
          <p className="chart-description">This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>
        </section>
        <section className="long-descriptive img-float-left">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src='https://source.unsplash.com/350x500/?anatomical-heart' alt="Your heart is special."/>

        <p className="entice">
        This text is telling you that there is no more content. It urges you to try a link some where. 
        Perhaps to GitHub. 
        Perhaps to Screen AI.
        </p>

        </section>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
