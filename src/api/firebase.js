import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import useSystemModal from '../hooks/useSystemModal';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signUpWithFB = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const updateUserProfile = async displayName => {
  try {
    await updateProfile(auth.currentUser, {
      displayName,
    });
  } catch (err) {}
};

export const signInWithFB = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found' || 'auth/invalid-email':
        error['message'] = '이메일이 일치하지 않습니다.';
        return Promise.reject(error);
      case 'auth/wrong-password' || 'auth/weak-password':
        error['message'] = '비밀번호가 일치하지 않습니다.';
        return Promise.reject(error);
      case 'auth/network-request-failed':
        error['message'] = '네트워크 연결에 실패 하였습니다.';
        return Promise.reject(error);
      default:
        error['message'] = '이메일 또는 비밀번호를 확인하세요';
        return Promise.reject(error);
    }
  }
};

export const watchAuthStateChange = callback => {
  onAuthStateChanged(auth, user => {
    callback(user);
  });
};

export const signOutWithFB = async () => {
  await signOut(auth);
};

export const getUserInfo = async email => {
  if (!email) {
    return;
  }

  const usersCollection = collection(db, 'users');
  const q = query(usersCollection, where('email', '==', email));
  const querySnapshot = await getDocs(q);
  const initialInfo = [];
  querySnapshot.forEach(item => {
    const data = {
      ...item.data(),
    };

    initialInfo.push(data);
  });
  return initialInfo[0];
};
