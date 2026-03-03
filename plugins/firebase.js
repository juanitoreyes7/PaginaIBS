import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '~/config/firebase.js';

let app = null;
let authWrapper = null;
let db = null;

if (process.client) {
    if (!firebase.apps.length) {
        app = firebase.initializeApp(firebaseConfig);
    } else {
        app = firebase.app();
    }
    const auth = firebase.auth();
    db = firebase.firestore();
    authWrapper = {
        signInWithEmailAndPassword: (email, password) => auth.signInWithEmailAndPassword(email, password),
        createUserWithEmailAndPassword: (email, password) => auth.createUserWithEmailAndPassword(email, password),
        sendPasswordResetEmail: (email) => auth.sendPasswordResetEmail(email),
        signOut: () => auth.signOut(),
        onAuthStateChanged: (callback) => auth.onAuthStateChanged(callback),
        getCurrentUser: () => auth.currentUser
    };
}

export default ({ app: nuxtApp }, inject) => {
    inject('firebaseApp', app);
    inject('auth', authWrapper);
    inject('db', db);
};
