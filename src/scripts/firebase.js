// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDJgU6vykMUq3WJ_AHusZMt5pHA9olSf5w',
    authDomain: 'typemaster-keyboard-6f2e3.firebaseapp.com',
    projectId: 'typemaster-keyboard-6f2e3',
    storageBucket: 'typemaster-keyboard-6f2e3.appspot.com',
    messagingSenderId: '634438466831',
    appId: '1:634438466831:web:c3d3ba7323199bbb4e127a',
    measurementId: 'G-ZHMPQQC9VK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db