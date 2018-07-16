import Firebase from 'firebase';

var apiKey = require('./constants/FirebaseConfig');
var authDomain = require('./constants/FirebaseConfig');
var projectId = require('./constants/FirebaseConfig');
var storageBucket = require('./constants/FirebaseConfig');
var messagingSenderId = require('./constants/FirebaseConfig');


 let config = {
   databaseURL: 'https://watchbug-f9cd2.firebaseio.com',
   apiKey: apiKey,
   authDomain: authDomain,
   projectId: projectId,
   storageBucket: storageBucket,
   messagingSenderId: messagingSenderId
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
