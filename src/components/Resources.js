import React, { Component } from 'react';

class Resources extends Component {
  render(){
    return(
        <section className="long-descriptive img-float-left">
        <h2>How Can I Reduce My Risk?</h2>
        <img className='left' src='https://source.unsplash.com/350x500/?exercise' alt="Exercise is good for you."/>
        <p>
        While heart disease is a major killer in the United States and around the world, the effects of heart disease aren't likely to be felt until around mid-life. Some risks of developing heart disease come from genetic factors, though there are ways to live a healthy life to reduce the risk of heart problems.
        </p>
        <h3>Don't Smoke</h3>
        <p>
        Risk associated with heart disease are increased when you smoke. Quitting now will lower your risk of heart disease, stroke, and cancer.
        </p>
        
        <h3>Exercise Regularly</h3>
        <p>Regular exercise helps maintain heart health with surprisingly little effort. As little as 30 minutes of aerobic activity several times per week is enough to reduce the risk of heart disease. When combined with a healthy diet, weight, and plenty of sleep, this is a great way to stay healthy for the long run</p>

        <h3>Eat Healthy</h3>
        <p>Another great way to reduce your risk of heart disease is to eat foods that are healthy for your. Keeping your weight down to a normal level will reduce the strain on your heart and keep it in prime condition longer.</p>



        <h3>Check Out Additional Resources</h3>
        <p className="entice-end">
        
        There are many resources out there to help you improve your heart health. The <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/in-depth/heart-disease-prevention/art-20046502">Mayo Clinic</a> has a wonderful page that lists many of the ways to improve your health.
        </p>

        </section>
    );
  };
};

export default Resources;