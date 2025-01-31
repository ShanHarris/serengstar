import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0T-d8LjwdJRU-DQOXoLmmLUeAggOqlYw",
    authDomain: "sereng-star.firebaseapp.com",
    projectId: "sereng-star",
    storageBucket: "sereng-star.appspot.com",
    messagingSenderId: "196296679304",
    appId: "1:196296679304:web:3013b3026d283934d0e43d",
    measurementId: "G-F2T04LV5LE"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  

  export default firebase;
  export {storage}





  