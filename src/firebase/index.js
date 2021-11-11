import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZed2HpbPPf8ae7Y6FAb1BknILq9phKnE",
  authDomain: "phonesbyfolli.firebaseapp.com",
  projectId: "phonesbyfolli",
  storageBucket: "phonesbyfolli.appspot.com",
  messagingSenderId: "481750311695",
  appId: "1:481750311695:web:f656545fd1603a4a2a947a"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };

