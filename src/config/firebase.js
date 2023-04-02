// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXUBhFOIKU8jecCO_hY7wqwEcgPCdXDrE",
  authDomain: "image-upload-preview-378eb.firebaseapp.com",
  projectId: "image-upload-preview-378eb",
  storageBucket: "image-upload-preview-378eb.appspot.com",
  messagingSenderId: "785962434255",
  appId: "1:785962434255:web:d1a167422a3de8d59141ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

