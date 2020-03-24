import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDg20Hb8d-KJE1XEZe0jqGP7n3zZ69gD10",
  authDomain: "sports-ai.firebaseapp.com",
  databaseURL: "https://sports-ai.firebaseio.com",
  projectId: "sports-ai",
  storageBucket: "sports-ai.appspot.com",
  messagingSenderId: "767742303543",
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")