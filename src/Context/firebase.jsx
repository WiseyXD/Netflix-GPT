import { createContext } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext } from "react";
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

const FirebaseContext = createContext(null);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Gprovider = new GoogleAuthProvider();
export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => {
	const signUpWithEmailAndPassword = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	const googleSignIn = () => {
		signInWithPopup(auth, Gprovider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential =
					GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const loginWithEmailAndPassword = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	return (
		<FirebaseContext.Provider
			value={{
				signUpWithEmailAndPassword,
				googleSignIn,
				loginWithEmailAndPassword,
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	);
};
