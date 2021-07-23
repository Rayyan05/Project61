import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBN29VFNZfhq5TcEii2Cym3TFgsTsxcIrY",
    authDomain: "school-attendance-app-d4f25.firebaseapp.com",
    databaseURL: "https://school-attendance-app-d4f25-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-d4f25",
    storageBucket: "school-attendance-app-d4f25.appspot.com",
    messagingSenderId: "989580405951",
    appId: "1:989580405951:web:36b1be25426c0b355c2a0a"
  };

   firebase.initializeApp(firebaseConfig);

export default firebase.database()