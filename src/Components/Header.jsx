import { useNavigate } from "react-router-dom";
import Logo from "../assets/netflixLogo2.avif";
import { useFirebase } from "../Context/firebase";
import { useSelector } from "react-redux";
import store from "../Context/store";
export default function Header({ isLoggedIn }) {
	const navigate = useNavigate();
	const firebase = useFirebase();
	const { displayName, photoURL } = useSelector((store) => store.auth.value);
	console.log(displayName, photoURL);

	return (
		<>
			{isLoggedIn ? (
				<div className="navbar">
					<div className="flex-1">
						<img src={Logo} alt="Logo" className="w-32" />
					</div>
					<div className="flex-none gap-2">
						<div className="form-control">
							<input
								type="text"
								placeholder="Search"
								className="input input-bordered w-24 md:w-auto"
							/>
						</div>
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img src={photoURL} alt="Profile Pic" />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<button
										onClick={() => {
											firebase.logOut();
											navigate("/");
										}}
									>
										Logout
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : (
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
			)}
		</>
	);
}
