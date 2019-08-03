import firebase from 'firebase'
import firestore from 'firebase/firestore'

// npm install firebase --save

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALAvVt5vH4TwbBVBLufCkH0Wcf-2Wvnpw",
  authDomain: "ninja-smoothies-udemy-ff3eb.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-udemy-ff3eb.firebaseio.com",
  projectId: "ninja-smoothies-udemy-ff3eb",
  storageBucket: "ninja-smoothies-udemy-ff3eb.appspot.com",
  messagingSenderId: "978175799823",
  appId: "1:978175799823:web:2ef91798358b7a79"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Export firestore database

export default firebaseApp.firestore()
