import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzB5Qxre2QgNkG4H4f2QuUJS7l9jkzw34",
    authDomain: "slack-yt-685f3.firebaseapp.com",
    projectId: "slack-yt-685f3",
    storageBucket: "slack-yt-685f3.appspot.com",
    messagingSenderId: "419875733075",
    appId: "1:419875733075:web:39272cf75a332ba24f10a6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};