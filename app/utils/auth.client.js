import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseConfig from "./firebaseConfig";
let Firebase;

if (!Firebase?.apps?.length) {
  Firebase = initializeApp(firebaseConfig);
}

const auth = getAuth(Firebase);
async function signUp(email, password, name) {
  const token = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(token.user, { displayName: name }).then((user) => {
    console.log(user);
  });
  return token;
}

async function signIn(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

async function signOutFirebase() {
  await signOut(getAuth());
}
export { signUp, signIn, auth };
