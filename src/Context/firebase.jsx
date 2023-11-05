import { createContext, useContext } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import store from "./store";
import { addUser, handleError, removeUser } from "./Slices/authSlice";
// TODO: Add SDKs for Firebase products that you want to use

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const Gprovider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
	const dispatch = useDispatch();
	const signUpWithEmailAndPassword = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				updateProfile(user, {
					displayName: "Aryan Nagbanshi",
					photoURL:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9s8Pa7ieVpyV5BaZqFFDr6gILtyp2UXN5eWGVm3L-xw&s",
				})
					.then(() => {
						// Profile updated!
					})
					.catch((error) => {
						// An error occurred
						console.log(error);
					});
				dispatch(addUser(user));
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				dispatch(handleError(errorMessage));
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
				updateProfile(user, {
					displayName: "Aryan Nagbanshi",
					photoURL:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9s8Pa7ieVpyV5BaZqFFDr6gILtyp2UXN5eWGVm3L-xw&s",
				})
					.then(() => {
						// Profile updated!
						dispatch(addUser(user));
					})
					.catch((error) => {
						// An error occurred
						console.log(error);
					});
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				dispatch(handleError(errorMessage));
			});
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				dispatch(removeUser());
			})
			.catch((error) => {
				// An error happened.
			});
	};

	const onStateChange = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const user2 = user;
				return user2;
				// ...
			} else {
				// User is signed out
				// ...
				return null;
			}
		});
	};
	return (
		<FirebaseContext.Provider
			value={{
				signUpWithEmailAndPassword,
				googleSignIn,
				loginWithEmailAndPassword,
				onStateChange,
				logOut,
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	);
};
