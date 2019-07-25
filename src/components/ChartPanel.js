import React, { Component } from 'react';
import '../css/ChartPanel.scss';

class Header extends Component {

  render(){
    return(
        <section className='chart-panel'>
          <div className='chart-container'>
            <h3>Most Common Deaths Worldwide</h3>
            <div className='chart'>
              <img src="/data_vis/annual-number-of-deaths-by-cause.png" alt="Annual number of deaths due to heart disease."/>
              <p className='chart-description'>This chart comes from <a href="https://ourworldindata.org/causes-of-death">ourworldindata.org</a> and is copyright by its respective owner.</p>
            </div>

            <h3>Worldwide Causes of Death in 50-69 Year Olds</h3>
            <div className='chart'>
              <img src="/data_vis/causes-of-death-in-50-69-year-olds.png" alt="Number of deaths related to heart disease for 50-69 year olds."/>
              <p className='chart-description'>This chart comes from <a href="https://ourworldindata.org/causes-of-death">ourworldindata.org</a> and is copyright by its respective owner.</p>
            </div>

            <h3>Worldwide Causes of Death in 70+ Year Olds</h3>
            <div className='chart'>
              <img src="/data_vis/causes-of-death-in-70-year-olds.png" alt="Number of deaths related to heart disease for 70+ year olds."/>
              <p className='chart-description'>This chart comes from <a href="https://ourworldindata.org/causes-of-death">ourworldindata.org</a> and is copyright by its respective owner.</p>
            </div>
            
            <h3>United States Top Causes of Death Since 1900</h3>
            <div className='chart'>
              <img src="/data_vis/death-rates-through-the-20th-century.png" alt="Deaths over the 20th century."/>
            </div>
            <p className='chart-description'>This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>

            <h3>Top 5 Causes of Death in the United States</h3>

            <div className='chart'>
              <img src="/data_vis/us-top-5-deaths.png" alt="Deaths over the 20th century."/>
            </div>
            <p className='chart-description'>This is a description of what this chart is depicting. It is beautiful and stunning to behold.</p>

          </div>
        </section>
    );
  };

};

export default Header;