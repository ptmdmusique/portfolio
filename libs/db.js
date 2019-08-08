import firebase from '@firebase/app';
import '@firebase/firestore'
export function loadDB() {
  try {
    var firebaseConfig = {
        apiKey: "AIzaSyBQFQMI7x46fEcuG04lEHrzIQJIX8h3nco",
        authDomain: "duc-duchy-4753f.firebaseapp.com",
        databaseURL: "https://duc-duchy-4753f.firebaseio.com",
        projectId: "duc-duchy-4753f",
        storageBucket: "duc-duchy-4753f.appspot.com",
        messagingSenderId: "839713309669",
        appId: "1:839713309669:web:80323579aeb9e8f2"
      };
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}