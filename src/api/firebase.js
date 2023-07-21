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
    alert('로그인에 성공했습니다!');
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case 'auth/user-not-found' || 'auth/wrong-password':
        return alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
      case 'auth/email-already-in-use':
        return alert('이미 사용 중인 이메일입니다.');
      case 'auth/weak-password':
        return alert('비밀번호는 6글자 이상이어야 합니다.');
      case 'auth/network-request-failed':
        return alert('네트워크 연결에 실패 하였습니다.');
      case 'auth/invalid-email':
        return alert('잘못된 이메일 형식입니다.');
      case 'auth/internal-error':
        return alert('잘못된 요청입니다.');
      default:
        return alert('로그인에 실패 하였습니다.');
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
