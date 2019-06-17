import React, { Component } from 'react';
import '../css/Result.css';

class Result extends Component{
  constructor(props){
    super(props);
    this.handleResults = this.handleResults.bind(this);
  }

  

  handleResults(prediction){
    if(prediction){
      return '💔';
    }else{
     return '❤️';
    }
  }

  positive(){
    return (
      <div>
        This suggests that heart disease may be likely given the supplied information.
      </div>
    )
  }

  negative(){
    return(
      <div>
        Heart disease is unlikely given the data supplied.
      </div>
    )
  }

  render(){
    return(
      <div className='overlay'>
        <div className='results'>
          <div className="close-popup" onClick={this.props.toggleResults}>x</div>
          <p className="icon-result">
          {this.handleResults(this.props.prediction)}
          </p>
          <p className='result-text'>
          {this.props.prediction? this.positive() : this.negative()}
          </p>
        </div>
      </div>
    )
  }
}

export default Result;