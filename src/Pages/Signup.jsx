import { useState, useContext } from "react";
import Header from "../Components/Header";
import BackgroundImage from "../assets/netflixbg.jpg";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, useFirebase } from "../Context/firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const firebase = useFirebase();
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const userDetails = user;

				navigate("/browse");
				// ...
			} else {
				// User is signed out
				// ...
				navigate("/");
			}
		});
	}, []);

	const [isLogin, setIsLogin] = useState(false);
	function handleLogin() {
		setIsLogin(!isLogin);
	}

	return (
		<div className="bg-hero-bg min-h-screen opacity-80">
			<div className="bg-gradient-to-b from-slate-400">
				<div className="max-w-full w-4/5 mx-auto">
					<Header isLoggedIn={false} />
					{isLogin ? (
						<Login handleLogin={handleLogin} />
					) : (
						<Register handleLogin={handleLogin} />
					)}
				</div>
			</div>
		</div>
	);
}
