import firebase from 'firebase';

var config1 = {
    apiKey: process.env.REACT_APP_APIKEY1,
    authDomain: process.env.REACT_APP_AUTHDOMAIN1,
    databaseURL: process.env.REACT_APP_DATABASEURL1,
    projectId: process.env.REACT_APP_PROJECTID1,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET1,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID1,
    appId: process.env.REACT_APP_APPID1
  }
  

const fire1 = firebase.initializeApp(config1);

export default fire1;