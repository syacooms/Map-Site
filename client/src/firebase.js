import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCKIvYG25XclTBteeBJUE_IAdzjVWqAZfo',
  authDomain: 'sya-pjt-01.firebaseapp.com',
  projectId: 'sya-pjt-01',
  storageBucket: 'sya-pjt-01.appspot.com',
  messagingSenderId: '673088805376',
  appId: '1:673088805376:web:d152a9c7dc3ad83d8416e5',
  measurementId: 'G-6LJ7CBQBM8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
