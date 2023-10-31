// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBp1ygqgXDElK43OlMcFkhMPwQ9ib1NFyw",
	authDomain: "netflix-gpt-3737d.firebaseapp.com",
	projectId: "netflix-gpt-3737d",
	storageBucket: "netflix-gpt-3737d.appspot.com",
	messagingSenderId: "1070447417608",
	appId: "1:1070447417608:web:065177128a3f5d7a51f4bd",
	measurementId: "G-5JD0H2K1V2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
