import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAZwdG5hbtIDfSGJHOhXbS6rnBiwPYfklM",
   authDomain: "kismart-b2eed.firebaseapp.com",
   projectId: "kismart-b2eed",
   storageBucket: "kismart-b2eed.appspot.com",
   messagingSenderId: "918548186293",
   appId: "1:918548186293:web:096a6030b18b02d430eafc"
};

const app = firebase.initializeApp(firebaseConfig);

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();