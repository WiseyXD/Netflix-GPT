import { useNavigate } from "react-router-dom";
import Logo from "../assets/netflixLogo2.avif";
import { useFirebase } from "../Context/firebase";
export default function Header({ isLoggedIn }) {
	const navigate = useNavigate();
	const firebase = useFirebase();
	return (
		<div className="navbar ">
			<div className="flex-1">
				<img src={Logo} alt="Logo" className="w-32" />
			</div>
			<div className="flex-none">
				{isLoggedIn ? (
					<button
						className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 text-white"
						onClick={() => {
							firebase.logOut();
							navigate("/");
						}}
					>
						LOGOUT
					</button>
				) : (
					<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 text-white">
						SIGN IN
					</button>
				)}
			</div>
		</div>
	);
}
