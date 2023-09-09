import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA64Xly782MGue9QWj4E5MkTYR_3TLlWus",

    authDomain: "crown-clothing-db-4885b.firebaseapp.com",

    projectId: "crown-clothing-db-4885b",

    storageBucket: "crown-clothing-db-4885b.appspot.com",

    messagingSenderId: "230017282709",

    appId: "1:230017282709:web:ba6aa73d84adfb73d6e19c",
};

const app = initializeApp(firebaseConfig);
//Create instance of Google Auth Provider
const provider = new GoogleAuthProvider();
// Anytime someone signs in with Google Auth we force to select an account
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
