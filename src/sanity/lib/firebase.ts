
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_0gApZ21AbAu0vS1rC-QopnGLNATtqrQ",
  authDomain: "e-commerce-2a756.firebaseapp.com",
  projectId: "e-commerce-2a756",
  storageBucket: "e-commerce-2a756.firebasestorage.app",
  messagingSenderId: "671651684212",
  appId: "1:671651684212:web:4e41e3a5a0631cf1371621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const createAccount = (email:string ,password:string) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('user',user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error',errorCode,errorMessage);
      
      // ..
    });
  
}

const userLogin = (email:string ,password:string)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user',user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error',errorCode,errorMessage);
    
  });
}
export  {createAccount, userLogin, auth, app};