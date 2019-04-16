import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';


import '../css/Predictor.css';

class Predictor extends Component {
  constructor(props){
    super(props);

    this.fetchDataset = this.fetchDataset.bind(this);
    this.buildMLModel = this.buildMLModel.bind(this);
    // Initialize line with random starting values
    this.m = tf.variable(tf.scaler(8));
    this.b = tf.variable(tf.scaler(2));
    const learningRate = 0.01
    this.optimizer = tf.train.sgd(learningRate)
  }

  loss(preds, labels){
    return preds.sub(labels).squared().mean();
  }

  predict(xs){
    const tfxs = tf.tensor1d(xs);
    // y = mx+ b
    // Get value at x on line
    return tfxs.mul(this.m).add(this.b);
  }

  fetchDataset(){
    return new Promise((resolve, reject)=>{
      const backendLocation = 'https://heart-disease-backend.herokuapp.com/';

      fetch(backendLocation).then((response)=>{
        if(response.status !== 200){
          console.log()
          reject('Error returned from backend server: '+ response.statusText);
        }else{
          response.json().then((data)=>{
            resolve(data)
          })
        }
      })
    });
  }

  async buildMLModel(){
    const backendLocation = 'https://heart-disease-backend.herokuapp.com/';
    const csvDataset = tf.data.csv(
      backendLocation, {
        columnConfigs: {
          target: {
            isLabel: true
          }
        }
      });

      const numOfFeatures = 8;
      
    
    // Prepare Dataset

   const flattenedDataset = await csvDataset.map((row) =>{
     console.log(row)
     const xs = [Number(row.xs.age), Number(row.xs.cp), Number(row.xs.exang), Number(row.xs.oldpeak), Number(row.xs.sex), Number(row.xs.slope), Number(row.xs.thalach), Number(row.xs.trestbps)]
     console.log("xs", xs)
     // Convert rows from object form (keyed by column name) to array form.
     console.log("Flattening:", [Object.values(row.xs), [row.ys]])
     return [xs, Number(row.ys.target)]
    }) 




  //  .batch(10);
  console.log('flattenedDataset', flattenedDataset)
  // // Define the model.
  const model = tf.sequential();
  model.add(tf.layers.dense({
    inputShape: [numOfFeatures],
    units: 1
  }));
  model.compile({
    optimizer: tf.train.sgd(0.000001),
    loss: 'meanSquaredError'
  });

  // // // Fit the model using the prepared Dataset
  // return model.fitDataset(flattenedDataset, {
  //   epochs: 10,
  //   callbacks: {
  //     onEpochEnd: async (epoch, logs) => {
  //       console.log(epoch + ':' + logs.loss);
  //     }
  //   }
  // });

  }

  componentDidMount(){
    this.fetchDataset()
  }

  
  render(){
    return (
      <div className='row predictor'>
        <form action="" className='col s12'>
          <div className='row'>
            <p>
              This is the predictor
            </p>
            <a href="#!" onClick={()=>this.buildMLModel()}>Click Me!</a>
          </div>

        </form>
      </div>
    )
  }
}

export default Predictor;