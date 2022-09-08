import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBEj4DT44HeVtKK6rOJnAUZuYww8sICFVU",
  authDomain: "vote-57fad.firebaseapp.com",
  databaseURL: "https://vote-57fad-default-rtdb.firebaseio.com",
  projectId: "vote-57fad",
  storageBucket: "vote-57fad.appspot.com",
  messagingSenderId: "863785545411",
  appId: "1:863785545411:web:6ad184058bead51c7f3c76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();