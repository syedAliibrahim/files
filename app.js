// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKut_EON6cnt-0K5HATRmU2M-kIt7aDJw",
    authDomain: "login-d8dcd.firebaseapp.com",
    projectId: "login-d8dcd",
    storageBucket: "login-d8dcd.appspot.com",
    messagingSenderId: "794089511179",
    appId: "1:794089511179:web:3a43386483c8753f1aea0e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const auth = getAuth();

const db = getFirestore(app);


//sign in data from now


var sem=document.getElementById("sem")

var sps=document.getElementById("sps")
var sbt=document.getElementById("sbt")
var er=document.getElementById("er")



sbt.addEventListener("click",function () {

  

    console.log("event listner",sem.value,sps.value)
    
    // er.innerHTML=""
    signInWithEmailAndPassword(auth,sem.value, sps.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("I am USer===",user)
    console.log("in signin func()",sem.value,sps.value)
    // ...
    /*const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      window.location = "profile.html"
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
*/      window.location = "index.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    er.innerHTML=errorMessage;

    console.log("I am eroor===>>> \n",errorCode,errorMessage)
  });
});

