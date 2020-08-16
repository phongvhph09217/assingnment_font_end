  
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCMCG0t-EXmjxHfdDjLkC883DAD4Ye-87c",
    authDomain: "website-39b43.firebaseapp.com",
    databaseURL: "https://website-39b43.firebaseio.com",
    projectId: "website-39b43",
    storageBucket: "website-39b43.appspot.com",
    messagingSenderId: "976814403869",
    appId: "1:976814403869:web:00e2dbffe42be58116b1f4",
    measurementId: "G-1CEFGL6KL4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase