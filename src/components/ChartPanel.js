import React, { Component } from 'react';
import '../css/ChartPanel.css';

class Header extends Component {

  render(){
    return(
        <section className='chart-panel'>
          <div className='chart-container'>
            <h2>World Statistics</h2>
            <h3>Chart One Title</h3>
            <div className='chart'></div>
            <p className='chart-description'>This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>
            <h3>Chart Two Title</h3>
            <div className='chart'></div>
            <p className='chart-description'>This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>

            <h2>US Stastics</h2>
            <h3>Chart One Title</h3>
            <div className='chart'></div>
            <p className='chart-description'>This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>
            <h3>Chart Two Title</h3>
            <div className='chart'></div>
            <p className='chart-description'>This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>
          </div>
        </section>
    );
  };

};

export default Header;