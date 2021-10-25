import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyAD8p_qB1hJ4F5nhMebJ6ydiHDA4Z4A9UA",
    authDomain: "cj-netflix-2021.firebaseapp.com",
    databaseURL: 'https://cj-netflix-2021..firebaseio.com',
    projectId: "cj-netflix-2021",
    storageBucket: "cj-netflix-2021.appspot.com",
    messagingSenderId: "608013270331",
    appId: "1:608013270331:web:73153556f744e13afd4b1e"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };