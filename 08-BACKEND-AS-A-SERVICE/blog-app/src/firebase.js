// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    arrayUnion,
    arrayRemove
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd19pKFNycvXks_kaqvzZYmLumQw9L2zc",
  authDomain: "blog-app-67999.firebaseapp.com",
  projectId: "blog-app-67999",
  storageBucket: "blog-app-67999.firebasestorage.app",
  messagingSenderId: "350526225189",
  appId: "1:350526225189:web:a30399832f8454444738cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

//Auth Helpers
const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);

// Firestore Helpers
const postsCollection = collection(db, "posts");

export {
    auth,
    // signInWithGoogle,
    // signOutUser,
    // db,
    // postsCollection,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    arrayUnion,
    arrayRemove
};