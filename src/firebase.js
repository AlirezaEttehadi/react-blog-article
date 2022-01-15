import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4A-rGtBd8L82rh6L2Bd2yX6tjTKLb5K8",
  authDomain: "react-blog-e6e6a.firebaseapp.com",
  projectId: "react-blog-e6e6a",
  storageBucket: "react-blog-e6e6a.appspot.com",
  messagingSenderId: "507900724396",
  appId: "1:507900724396:web:d1dce770cfcd22650a0b09",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

