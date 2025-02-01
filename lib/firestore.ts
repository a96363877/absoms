import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9M4S1blhwbJQ5FUXBkqzv5lsE_3QR4mQ",
  authDomain: "amer-98afb.firebaseapp.com",
  projectId: "amer-98afb",
  storageBucket: "amer-98afb.firebasestorage.app",
  messagingSenderId: "492435134855",
  appId: "1:492435134855:web:86d3abd762bdc1856e5b22",
  measurementId: "G-1YBB0DGJ9L"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
