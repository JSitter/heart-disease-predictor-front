import React, { Component } from 'react';

class Result extends Component{
  render(){

    return(
      <div>
      Your Score:
      {this.props.predicted_result}
      </div>
    )
  }
}

export default Result;