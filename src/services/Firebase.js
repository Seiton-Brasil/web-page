import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyALJoQeNQF1j7rw1X12cqUF6mQ3zvXy2AI",
  authDomain: "seiton-731f6.firebaseapp.com",
  databaseURL: "https://seiton-731f6.firebaseio.com",
  projectId: "seiton-731f6",
  storageBucket: "seiton-731f6.appspot.com",
  messagingSenderId: "209324876833",
  appId: "1:209324876833:web:d3be726dd53cffb468af60",
  measurementId: "G-HGCR0D2DBR",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

export default firebase
