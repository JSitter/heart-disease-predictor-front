# Heart Disease Predictor

This website seeks to promote heart health through the use of informative displays and a heart health screening feature. The screening feature is done using a machine learning model that is trained on the UCI Heart Disease Dataset hosted on Kaggle. 

The evaluated model achieves close to 85% accuracy with a low occurance of false negatives. 
This is important because when making a prediction for disease it's generally more acceptable to err on the side of false positives than false negatives.

## Front End Technologies
The front end uses React and D3 to visualize heart disease data and show how a user's scores compare with the scores in the dataset.

## Installation
To install clone this repository. 

In the terminal `cd` into the project directory and run:

```
docker-compose up
```

This will download the required dependencies. After all dependencies are installed the application will be available on 127.0.0.1:3000.

## Backend technology

The backend is only a simple express server that serves React pages.
