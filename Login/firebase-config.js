import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyArKZK7VtZnLvY9gmPyHLYxpGs_OI4SHXY",
    authDomain: "visie-8152f.firebaseapp.com",
    databaseURL: "https://visie-8152f-default-rtdb.firebaseio.com",
    projectId: "visie-8152f",
    storageBucket: "visie-8152f.appspot.com",
    messagingSenderId: "149150779991",
    appId: "1:149150779991:web:053fc0bc2a22b23789f112",
    measurementId: "G-M75TCM3N42"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);