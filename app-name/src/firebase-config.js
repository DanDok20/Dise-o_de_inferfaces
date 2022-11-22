import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfTdeKR-rR9Wge0dmT5ElMfkEFeXm2vFA",
  authDomain: "rainbow-tactics.firebaseapp.com",
  projectId: "rainbow-tactics",
  storageBucket: "rainbow-tactics.appspot.com",
  messagingSenderId: "253760488658",
  appId: "1:253760488658:web:8abc8921631361a3b4190b",
  measurementId: "G-GSR6JD1PRV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;