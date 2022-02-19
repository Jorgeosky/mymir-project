import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

interface Data {
  state: boolean;
  data?: User;
  error?: Array<string>;
}

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
const auth = getAuth(app);

function getAnalyticsData() {
  const analytics = getAnalytics(app);
  return analytics;
}

function SignUp(email: string, password: string): Promise<Data> {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      return { state: true, data: user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { state: false, error: [errorCode, errorMessage] };
    });
}

function SignInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const { user } = result;
      // ...
      return { state: true, data: user, token };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return {
        state: false,
        errorCode,
        errorMessage,
        email,
        credential,
      };
    });
}

function SignIn(email: string, password: string): Promise<Data> {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      return { state: true, data: user };
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { state: false, error: [errorCode, errorMessage] };
    });
}

function SignOutUser() {
  signOut(auth)
    .then(() => {
      const state = true;
      return { state };
    })
    .catch((error) => {
      const state = false;
      return { state, error };
    });
}

function GetUser() {
  return auth.currentUser;
}

// eslint-disable-next-line object-curly-newline
export {
  SignUp,
  getAnalyticsData,
  SignIn,
  SignInWithGoogle,
  SignOutUser,
  GetUser,
};
