import React, { Component } from 'react';

class Result extends Component{
  render(){

    return(
      <div>
      Your Score:
      {this.props.prediction}
      </div>
    )
  }
}

export default Result;