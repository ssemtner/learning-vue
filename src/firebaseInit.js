import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA8gxz8rjosluFuGb4oQ3em8WHUxH9_iZg",
    authDomain: "learning-vue-ssemtner.firebaseapp.com",
    projectId: "learning-vue-ssemtner",
    storageBucket: "learning-vue-ssemtner.appspot.com",
    messagingSenderId: "419303269049",
    appId: "1:419303269049:web:28b0138585dfad042db168",
    measurementId: "G-QHSN47EG9Z"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp

const {Timestamp} = firebase.firestore
export {Timestamp}

export const db = firebaseApp.firestore()