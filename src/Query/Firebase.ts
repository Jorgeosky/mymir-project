import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_HiwDTxu0iwDqzasdq4emsB3PdT-ufJU',
  authDomain: 'mymir-project.firebaseapp.com',
  projectId: 'mymir-project',
  storageBucket: 'mymir-project.appspot.com',
  messagingSenderId: '1082949900828',
  appId: '1:1082949900828:web:83d8adc7b6779132065dd9',
  measurementId: 'G-2ZMZEGRHS2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getAnalyticsData() {
  const analytics = getAnalytics(app);
  return analytics;
}

function SignUp(email: string, password: string): any {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log('valido');
      return { state: true, user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('no valido', error.code, error.message);
      return { state: false, errorCode, errorMessage };
    });
}

export { SignUp, app, getAnalyticsData };
