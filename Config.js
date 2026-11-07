import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-a9UPlZ0sdHHE3kWVxkJuPMRqEFUmqY0",
  authDomain: "todosapp0029.firebaseapp.com",
  projectId: "todosapp0029",
  storageBucket: "todosapp0029.firebasestorage.app",
  messagingSenderId: "146606561363",
  appId: "1:146606561363:web:66899fc83d5d67717f8ea6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };