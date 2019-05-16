import React, { Component } from 'react';



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

  fetchPrediction(e){
    e.preventDefault()
    fetch('http://127.0.0.1:8001/predict', {
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify({
        'age':this.state.age,
        'sex':this.state.sex,
        'cp':this.state.cp,
        'trestbps':this.state.trestbps,
        'thalach':this.state.thalach,
        'exang':this.state.exang,
        'oldpeak' :this.state.oldpeak,
        'slope':this.state.slope,
        'target':this.state.target
      })
    }).then(data=>JSON.stringify(data)).then((json)=>{
      console.log("json recieved", json)
    })
  }
  
  render(){
    return (
          <div className='row col s12 predictor'>
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
            <input type="submit" onClick={this.fetchPrediction} value="What's My Prediction"/>
            </form>
          </div>
    )
  }
}

export default Predictor;