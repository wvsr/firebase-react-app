import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, EmailAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAYDuqsPrKEuOoUsxDNCQk5-Bq_foeeL9A',
  authDomain: 'thesamiblog.firebaseapp.com',
  projectId: 'thesamiblog',
  storageBucket: 'thesamiblog.appspot.com',
  messagingSenderId: '990361756819',
  appId: '1:990361756819:web:46cddcd78eec3e99aa1966',
  measurementId: 'G-0LJGEDN7B5',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new EmailAuthProvider()
