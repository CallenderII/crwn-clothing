import firebase from 'firebase/app';

import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyDZJLlmd-W2eGxoFb2UOcTRMNWH8UnJz3c",
    authDomain: "crwn-db-33d2b.firebaseapp.com",
    projectId: "crwn-db-33d2b",
    storageBucket: "crwn-db-33d2b.appspot.com",
    messagingSenderId: "616780453125",
    appId: "1:616780453125:web:4a5b1804559ad9365a136c",
    measurementId: "G-V9Y6WEGRFE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



