import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwi_QiolgXkdD-83nJKtqnFOITxgqMYUw",
  authDomain: "crown-shopping-db-ba505.firebaseapp.com",
  projectId: "crown-shopping-db-ba505",
  storageBucket: "crown-shopping-db-ba505.appspot.com",
  messagingSenderId: "913367505317",
  appId: "1:913367505317:web:48b6a93f975e1abcb2b04c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);

// creating db in firebase
export const db = getFirestore();

// creating db collection
export const createUserDocumentFromAuth = async(userAuth,additionalInformation)=>{
    if(!userAuth) return;

    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
      const {displayName,email} = userAuth
      const createdAt = new Date()

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }catch(error){
        console.log("error while creating user",error);
      }
    }

    return userDocRef;

}

export const userAuthWithEmailAndPasssword = async(email,password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const userSignInWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async()=> await signOut(auth);

export const onAuthStateChangeListener = (callback)=>
  onAuthStateChanged(auth,callback)