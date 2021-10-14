import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDsU2AkgcSxaRNM_4R18yVRoAD5oaZzuVg",
    authDomain: "todo-list-99adb.firebaseapp.com",
    projectId: "todo-list-99adb",
    storageBucket: "todo-list-99adb.appspot.com",
    messagingSenderId: "11865361769",
    appId: "1:11865361769:web:889a96128ee1c5885941f8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)