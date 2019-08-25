import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBO3FbnNDi9i4CL-F1HvirvGzoxO_tgd0o",
    authDomain: "geo-map-people.firebaseapp.com",
    databaseURL: "https://geo-map-people.firebaseio.com",
    projectId: "geo-map-people",
    storageBucket: "",
    messagingSenderId: "834297530620",
    appId: "1:834297530620:web:f32e53f15dda0b1e"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore db
  export default firebaseApp.firestore()
