import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBk_lcugktPXXNbHcXHH4LeEC6jewjsCUc",
  authDomain: "todolistdb-e87bd.firebaseapp.com",
  databaseURL: "https://todolistdb-e87bd.firebaseio.com",
  projectId: "todolistdb-e87bd",
  storageBucket: "todolistdb-e87bd.appspot.com",
  messagingSenderId: "774187934778"
};

const firebaseApp = firebase.initializeApp(config);

// this will return the database associated with the app configuration
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export default firestore;
