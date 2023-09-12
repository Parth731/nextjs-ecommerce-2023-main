// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH-Wv80kO0t2ADvTx-7DZAA-ZMTyZV1zc",
  authDomain: "next-js-ecommerce-2023-77c76.firebaseapp.com",
  projectId: "next-js-ecommerce-2023-77c76",
  storageBucket: "next-js-ecommerce-2023-77c76.appspot.com",
  messagingSenderId: "1015790424242",
  appId: "1:1015790424242:web:a61b66be8d20d58b9679ab",
  measurementId: "G-9GPN3NVZFT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseStorageURL =
  "gs://next-js-ecommerce-2023-77c76.appspot.com";
