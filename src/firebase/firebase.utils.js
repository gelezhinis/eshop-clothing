import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyAyYVjlNgOCxWQK0vB05MJs8ZE-4v8oSWs",
   authDomain: "eshop-clothing-db.firebaseapp.com",
   databaseURL: "https://eshop-clothing-db.firebaseio.com",
   projectId: "eshop-clothing-db",
   storageBucket: "eshop-clothing-db.appspot.com",
   messagingSenderId: "475696095953",
   appId: "1:475696095953:web:db67ff2630eafe11861bf0",
   measurementId: "G-EYP1ELPCQ0"
 };
 
 firebase.initializeApp(config);

 export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();
  //  console.log(userAuth.uid);
   
   if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();
      
    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef; 
};
  
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;