import Login from "../Components/Login";
import Header from "../Components/Header";
import BackgroundImage from "../assets/netflixbg.jpg";
export default function Signup() {
	return (
		<div className="bg-hero-bg min-h-screen opacity-80">
			<div className="bg-gradient-to-b from-black">
				<div className="max-w-full w-4/5 mx-auto">
					<Header />
					<Login />
				</div>
			</div>
		</div>
	);
}
