import exp from 'constants';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgAY0vmwd5Zz6uTMnX5IZV7CQdx0HiNZs",
  authDomain: "codoc-dc6c3.firebaseapp.com",
  projectId: "codoc-dc6c3",
  storageBucket: "codoc-dc6c3.appspot.com",
  messagingSenderId: "814622391502",
  appId: "1:814622391502:web:abcc321b5650d0fed9249f"
};

// Initialize Firebase
if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();