import React, { Component } from 'react';

import '../css/Predictor.css';

class Predictor extends Component {
  constructor(props){
    super(props);
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchPrediction = this.fetchPrediction.bind(this);
    this.testCors = this.testCors.bind(this);
  }

  handleChange(event){
    let colName = event.target.name;
    let value = event.target.value;
    this.setState({ [colName]: value});
  }

  testCors(event){
    event.preventDefault();
    let url = "https://heart-disease-predictor.herokuapp.com/api/predict/";
    fetch(url, {
      mode: 'no-cors',
      method: 'post'
    }).then(response =>{
      response.text().then(json=>console.log(json));
    });
  }

  fetchPrediction(e){
    e.preventDefault();
    let backend_url = 'https://heart-disease-predictor.herokuapp.com/api/predict/';
    fetch(backend_url, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
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
    }).then((response)=>{
      
      if(response.status !== 200){
        console.log("Error occured: ", response.status);
      }else{
        response.json().then(data=>console.log(JSON.stringify(data)));
      }
      
      
    }).catch(err=>console.log("Error occured: ", err));
  }
  
  render(){
    return (
          <div className='row col s12 predictor'>
            <form>
            <label htmlFor="age">Age: </label><input type="text" value={this.state.age} name='age' onChange={this.handleChange}/>
            <label htmlFor="sex">Sex: </label><input name="sex" type="text" value={this.state.sex} onChange={this.handleChange}/>
            <label htmlFor="cp">Chest Pain Type: </label> 
            <select name="cp" value={this.state.cp} onChange={this.handleChange}>
              <option value="1">Typical Angina</option>
              <option value="2">Atypical Angina</option>
              <option value="3">Non-Anginal Pain</option>
              <option value="4">Asymptomatic</option>
            </select>  

            <label htmlFor="trestbps">Resting Blood Pressure (mm Hg): </label>
            <input name="trestbps" type="text" value={this.state.trestbps} onChange={this.handleChange}/> 
            <label htmlFor="thalach">Max Heart Rate (Beats / Min): </label>
            <input name="thalach" type="text" value={this.state.thalach} onChange={this.handleChange}/>
            <label htmlFor="exang">Exercised Induced Angina: </label>
            <input name="exang" type="text" value={this.state.exang} onChange={this.handleChange}/>
            <label htmlFor="oldpeak">OldPeak: </label>
            <input name="oldpeak" type="text" value={this.state.oldpeak} onChange={this.handleChange}/>
            <label htmlFor="slope">
              <i class="material-icons">info</i>
              Upslope: 
            </label>
            <input name="slope" type="text" value={this.state.slope} onChange={this.handleChange}/>

            <input type="submit" onClick={this.fetchPrediction} value="What's My Prediction"/>
            </form>
          </div>
    );
  }
}

export default Predictor;