import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCqZC4FVyB4DZSzXgKPST4asNHVkBR8aY",
  authDomain: "login-app-77f01.firebaseapp.com",
  projectId: "login-app-77f01",
  storageBucket: "login-app-77f01.appspot.com",
  messagingSenderId: "602447903137",
  appId: "1:602447903137:web:278595c72c7021040f33e0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
