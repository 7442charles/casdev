  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSC3ykQU7KqAKSTIsWyURW_OMp0bKct5g",
    authDomain: "dev-cas-3bbf6.firebaseapp.com",
    projectId: "dev-cas-3bbf6",
    storageBucket: "dev-cas-3bbf6.appspot.com",
    messagingSenderId: "1072220388923",
    appId: "1:1072220388923:web:e563e2c849767e3d73e61e",
    measurementId: "G-BB892E2G2Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);