import firebase from 'firebase/app';
import'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDfHQfWLu826HL84FWBZAYZcbtLHqeTa18",
    authDomain: "crwn-db-24455.firebaseapp.com",
    databaseURL: "https://crwn-db-24455.firebaseio.com",
    projectId: "crwn-db-24455",
    storageBucket: "crwn-db-24455.appspot.com",
    messagingSenderId: "697947774292",
    appId: "1:697947774292:web:837c1f728107cb39cb7cc1",
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;