import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
  apiKey: "AIzaSyCypcN_3IetULS6V8-BQ9FzjLazZAIDuSQ",
  authDomain: "mywebsite-7ab79.firebaseapp.com",
  projectId: "mywebsite-7ab79",
  storageBucket: "mywebsite-7ab79.appspot.com",
  messagingSenderId: "17995190475",
  appId: "1:17995190475:web:ec92d56e81c0792f69cb4e"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
