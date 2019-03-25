import React, { Component } from 'react';

import '../css/Introduction.css';

class Introduction extends Component {

  render(){
    return(
        <section className="long-descriptive">
          <h2>Taking Care of Your Heart is Important</h2>
          <img className='right' src='https://source.unsplash.com/350x500/?anatomical-heart' alt='Your heart is special.'/>
          
          <p>
          As we go about our daily life we fit a model of the world around us in our head. This model is based on what we see and experience and while important to us for giving us a clue about where we find ourselves, may not be accurate in terms when compared with objective reality.
          </p>
          <p>
          Our individual experiences don't take into account what happens over a large selection of the population. Many people may be able to look out for a few diseases or accidents but may not have an idea as to what particular event or disease is more likely.
          </p>
          <p>
          Many people may be surprised to know that Heart Disease is not a leading killer, but the single largest killer worldwide. Only through data and research can we begin to understand the risks associated with the lifestyles we have each chosen.
          </p>
          
        </section>
    );
  };

};

export default Introduction;