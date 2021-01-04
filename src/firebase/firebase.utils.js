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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = firebase.firestore.Timestamp.now();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (e) {
            console.log('Error creating user', e.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();



