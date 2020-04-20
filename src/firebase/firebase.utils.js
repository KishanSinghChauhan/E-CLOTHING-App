import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5_6Ht7LKel07tZ4Q-OyhxYaoL74WX1XE",
    authDomain: "e-clothing-db-e7967.firebaseapp.com",
    databaseURL: "https://e-clothing-db-e7967.firebaseio.com",
    projectId: "e-clothing-db-e7967",
    storageBucket: "e-clothing-db-e7967.appspot.com",
    messagingSenderId: "496377185277",
    appId: "1:496377185277:web:27cfd706345b4b67d40f94",
    measurementId: "G-8Y1E51RQ9B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;