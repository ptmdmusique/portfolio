import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const initFirebase = () => {
  try {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBQFQMI7x46fEcuG04lEHrzIQJIX8h3nco",
      authDomain: "duc-duchy-4753f.firebaseapp.com",
      databaseURL: "https://duc-duchy-4753f.firebaseio.com",
      projectId: "duc-duchy-4753f",
      storageBucket: "duc-duchy-4753f.appspot.com",
      messagingSenderId: "839713309669",
      appId: "1:839713309669:web:80323579aeb9e8f2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    return firebase;
  } catch (error) {
    if (!/already exists/.test(error.message)) {
      console.warn("dbErr-Error initializing firebase : " + error);
    } else {
      console.warn("dbError-Firebase has already been initialized : " + error);
    }
  }

  return firebase;
}

export default initFirebase;