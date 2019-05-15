import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';


import '../css/Predictor.css';

class Predictor extends Component {
  constructor(props){
    super(props)
    this.state = {
      'age':'',
      'sex':'',
      'cp':'',
      'trestbps':'',
      'thalach':'',
      'exang':'',
      'oldpeak' :'',
      'slope':'',
      'target':''
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchPrediction = this.fetchPrediction.bind(this)
  }

  handleChange(event){
    let colName = event.target.name
    let value = event.target.value
    
    this.setState({ [colName]: value})
  }

  fetchPrediction(){
    return 1
  }
  
  render(){
    return (
      <div className='row predictor'>
        <form action="" className='col s12'>
          <div className='row'>
            <form onSubmit={this.fetchPrediction}>
            <label htmlFor="age">Age: </label><input type="text" value={this.state.age} name='age' onChange={this.handleChange}/>
            <label htmlFor="sex">Sex: </label><input name="sex" type="text" value={this.state.sex} onChange={this.handleChange}/>
            <label htmlFor="cp">Chest Pain Type: </label> 
            <select name="cp" value={this.state.cp} onChange={this.handleChange}>
              <option value="1">Typical Angina</option>
              <option value="2">Atypical Angina</option>
              <option value="3">Non-Anginal Pain</option>
              <option value="4">Asymptomatic</option>
            </select>  
            <label htmlFor="trestbps">Rest BPM: </label><input name="trestbps" type="text" value={this.state.trestbps} onChange={this.handleChange}/>
            <label htmlFor="thalach">Max BPM: </label><input name="thalach" type="text" value={this.state.thalach} onChange={this.handleChange}/>
            <label htmlFor="exang">Exercised Induced Angina: </label><input name="exang" type="text" value={this.state.exang} onChange={this.handleChange}/>
            <label htmlFor="oldpeak">OldPeak: </label><input name="oldpeak" type="text" value={this.state.oldpeak} onChange={this.handleChange}/>
            <label htmlFor="slope">Slope: </label><input name="slope" type="text" value={this.state.slope} onChange={this.handleChange}/>
            <input type="submit" value="What's My Prediction"/>
            </form>
          </div>

        </form>
      </div>
    )
  }
}

export default Predictor;