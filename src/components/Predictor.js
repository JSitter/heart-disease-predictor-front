import React, { Component } from 'react';
import Result from './Result';
import '../css/Predictor.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class Predictor extends Component {
  constructor(props){
    super(props);
    this.state = {
      'showResult': false,
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
  }

  componentDidMount(){
    M.AutoInit()
  }

  handleChange(event){
    let colName = event.target.name;
    let value = event.target.value;
    this.setState({ [colName]: value});
  }

  fetchPrediction(e){
    e.preventDefault();
    let backend_url = 'https://heart-disease-backend.herokuapp.com/api/predict/';
    fetch(backend_url, {
      method: 'post',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        'age':this.state.age,
        'sex':this.state.sex,
        'cp':this.state.cp,
        'trestbps':this.state.trestbps,
        'thalach':this.state.thalach,
        'exang':this.state.exang,
        'oldpeak' :this.state.oldpeak,
        'slope':this.state.slope
      })
    }).then((response)=>{
      
      if(response.status !== 200){
        console.log("err", response)
      }else{
        response.json().then(data=>console.log(JSON.stringify(data)));
      }
      
      
    }).catch(err=>console.log("Error occured: ", err));
  }
  
  render(){
    return (
          <div className='row col s12 predictor'>
            {this.state.showResult ? <Result prediction={this.state.target}/> : null}
            <form>
            <label htmlFor="age">Age: </label><input type="text" value={this.state.age} name='age' onChange={this.handleChange}/>
            <label htmlFor="sex">Sex: 
              <select name="sex" value={this.state.sex} onChange={this.handleChange}>
                <option value="0">Female</option>
                <option value="1">Male</option>
              </select>
            </label>
            <label htmlFor="cp">
              Chest Pain Type: {this.state.cp}
              
              <select name="cp" value={this.state.cp} onChange={this.handleChange}>
                <option value="1">Typical Angina</option>
                <option value="2">Atypical Angina</option>
                <option value="3">Non-Anginal Pain</option>
                <option value="4">Asymptomatic</option>
              </select>  
            </label>
            
            <label htmlFor="trestbps">Resting Blood Pressure (mm Hg): </label>
            <input name="trestbps" type="text" value={this.state.trestbps} onChange={this.handleChange}/> 
            <label htmlFor="thalach">Max Heart Rate (Beats / Min): </label>
            <input name="thalach" type="text" value={this.state.thalach} onChange={this.handleChange}/>
            <label htmlFor="exang">Exercise Induced Angina: 
              <select name="exang" value={this.state.exang} onChange={this.handleChange}>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </label>
            <label htmlFor="oldpeak">OldPeak (Between 0 and 6): 
            <input name="oldpeak" type="text" value={this.state.oldpeak} onChange={this.handleChange}/>
            </label>
            <label htmlFor="slope">
              Upslope: 
              <select name="slope" value={this.state.slope} onChange={this.handleChange}>
                <option value="1">Upsloping</option>
                <option value="2">Flat</option>
                <option value="3">Downsloping</option>
              </select>
            </label>

            <input type="submit" onClick={this.fetchPrediction} value="What's My Prediction"/>
            </form>
          </div>
    );
  }
}

export default Predictor;