import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8gxz8rjosluFuGb4oQ3em8WHUxH9_iZg",
    authDomain: "learning-vue-ssemtner.firebaseapp.com",
    databaseURL: "learning-vue-ssemtner.firebaseio.com",
    projectId: "learning-vue-ssemtner",
    storageBucket: "learning-vue-ssemtner.appspot.com",
    messagingSenderId: "419303269049",
    appId: "1:419303269049:web:28b0138585dfad042db168",
    measurementId: "G-QHSN47EG9Z"
}

export default firebase.initializeApp(firebaseConfig)