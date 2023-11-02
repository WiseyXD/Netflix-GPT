import { useState, useContext } from "react";
import Header from "../Components/Header";
import BackgroundImage from "../assets/netflixbg.jpg";
import Login from "../Components/Login";
import Register from "../Components/Register";

export default function Signup() {
	const [isLogin, setIsLogin] = useState(false);

	function handleLogin() {
		setIsLogin(!isLogin);
	}
	return (
		<div className="bg-hero-bg min-h-screen opacity-80">
			<div className="bg-gradient-to-b from-slate-400">
				<div className="max-w-full w-4/5 mx-auto">
					<Header />
					{isLogin ? (
						<Login
							setIsLogin={setIsLogin}
							isLogin={isLogin}
							handleLogin={handleLogin}
						/>
					) : (
						<Register
							setIsLogin={setIsLogin}
							isLogin={isLogin}
							handleLogin={handleLogin}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
