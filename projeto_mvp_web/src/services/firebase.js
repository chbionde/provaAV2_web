import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDvv_NBxJw6tCinsgkY4akUp4pdohOIaL0",
  authDomain: "projeto-mvp-web-b2c6a.firebaseapp.com",
  projectId: "projeto-mvp-web-b2c6a",
  storageBucket: "projeto-mvp-web-b2c6a.appspot.com",
  messagingSenderId: "542321638511",
  appId: "1:542321638511:web:563934b33d63be3631e19a"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;