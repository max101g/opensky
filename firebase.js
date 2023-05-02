import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCy81z1r-_MR0GRRTCrxUwbN5twl2N27cY",
  authDomain: "opensky-2784d.firebaseapp.com",
  projectId: "opensky-2784d",
  storageBucket: "opensky-2784d.appspot.com",
  messagingSenderId: "273324421004",
  appId: "1:273324421004:web:7bcaa3474b39055d6730a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);