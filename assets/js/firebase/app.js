// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration ....import firebaseConfig from './config.js' //
const firebaseConfig = {
    apiKey: "AIzaSyB_D3xceQIvv6H8oDkcC-BoCWdRK8BOgL0",
    authDomain: "projeto-teste-d6299.firebaseapp.com",
    projectId: "projeto-teste-d6299",
    storageBucket: "projeto-teste-d6299.appspot.com",
    messagingSenderId: "454406695794",
    appId: "1:454406695794:web:37234c0bfdbc7533f08beb"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
