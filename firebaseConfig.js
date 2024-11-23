import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBgt45NA4rkzqiySbpmFfhb7j3B12i44bY",
  authDomain: "afro-unisphere.firebaseapp.com",
  projectId: "afro-unisphere",
  storageBucket: "afro-unisphere.appspot.com",
  messagingSenderId: "751167965182",
  appId: "1:751167965182:android:b39e679f3b92e0265362af",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and Auth with AsyncStorage persistence
const firestore = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { firestore, auth };
